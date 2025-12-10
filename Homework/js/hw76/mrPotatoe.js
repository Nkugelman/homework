(async function() {
  'use strict';

  // Elements
  const storage = document.querySelector('.storage');
  const piecesArea = document.createElement('div'); // Container for placed pieces
  piecesArea.classList.add('pieces');
  document.body.appendChild(piecesArea);
  const baseFace = document.getElementById('baseFace');
  const trash = document.getElementById('trash');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const bgPick = document.getElementById('bgPick');
  const bgMusic = document.getElementById('bgMusic');
  const musicPick = document.getElementById('bgMusicPick');

  let dragging = null;
  let offset = {x:0, y:0};
  let zCounter = 1;
  let locations = JSON.parse(localStorage.getItem('locations')) || [];

  // Fetch JSON
  async function myFetch(file){
    try {
      const r = await fetch(file);
      if(!r.ok) throw new Error(`${r.status} - ${r.statusText}`);
      return await r.json();
    } catch(e){ console.error(e); }
  }

  const items = await myFetch('mrPotatoe.json');
  const bgImg = await myFetch('bg.json');
  const musicItems = await myFetch('music.json');

  // Display storage pieces
  function displayStorage(){
    storage.innerHTML = '';
    items.forEach((item, i)=>{
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.name || `piece${i}`;
      img.classList.add('piece');
      img.style.width = '80px';
      img.style.margin = '5px';
      storage.appendChild(img);
    });
  }

  // Drag start
  document.addEventListener('mousedown', e=>{
    if(!e.target.classList.contains('piece')) return;
    const piece = e.target;

    if(piece.parentElement === storage){ 
      // Clone from storage
      dragging = piece.cloneNode(true);
      piecesArea.appendChild(dragging);
      dragging.style.position = 'absolute';
      dragging.style.transform = 'rotate(0deg)';

      // Spread in grid
      const existing = piecesArea.querySelectorAll('.piece');
      const padding = 20;
      const pieceWidth = 80;
      const perRow = Math.floor(piecesArea.offsetWidth / (pieceWidth + padding));
      const index = existing.length - 1; // last appended
      const row = Math.floor(index / perRow);
      const col = index % perRow;
      dragging.style.left = `${padding + col * (pieceWidth + padding)}px`;
      dragging.style.top = `${padding + row * (pieceWidth + padding)}px`;
    } else {
      dragging = piece;
    }

    offset = {x:e.offsetX, y:e.offsetY};
    zCounter++;
    dragging.style.zIndex = zCounter;
  });

  // Drag move
  document.addEventListener('mousemove', e=>{
    if(!dragging) return;
    dragging.style.left = `${e.pageX - offset.x}px`;
    dragging.style.top = `${e.pageY - offset.y}px`;
  });

  // Drag end
  document.addEventListener('mouseup', e=>{
    if(!dragging) return;

    const trashRect = trash.getBoundingClientRect();
    const faceRect = baseFace.getBoundingClientRect();

    const insideTrash =
      e.clientX >= trashRect.left && e.clientX <= trashRect.right &&
      e.clientY >= trashRect.top && e.clientY <= trashRect.bottom;

    const onFace =
      e.clientX >= faceRect.left && e.clientX <= faceRect.right &&
      e.clientY >= faceRect.top && e.clientY <= faceRect.bottom;

    const facePieces = piecesArea.querySelectorAll('.piece.onFace');

    if(insideTrash){
      dragging.remove();
      locations = locations.filter(l=>l.id !== dragging.alt);
    } else if(onFace){
      if(facePieces.length >= 3 && !dragging.classList.contains('onFace')){
        alert('Only 3 pieces allowed on the face!');
        dragging.remove();
      } else {
        dragging.classList.add('onFace');
      }
    } else {
      dragging.classList.remove('onFace');
    }

    // Save position
    const existing = locations.find(l=>l.id===dragging.alt);
    if(existing){
      existing.left = dragging.style.left;
      existing.top = dragging.style.top;
      existing.zIndex = dragging.style.zIndex;
      existing.rotate = parseInt(dragging.style.transform.replace('rotate(','').replace('deg)','')) || 0;
    } else {
      locations.push({
        id: dragging.alt,
        left: dragging.style.left,
        top: dragging.style.top,
        zIndex: dragging.style.zIndex,
        rotate: parseInt(dragging.style.transform.replace('rotate(','').replace('deg)','')) || 0
      });
    }

    localStorage.setItem('locations', JSON.stringify(locations));
    dragging = null;
  });

  // Rotate pieces on double click
  piecesArea.addEventListener('dblclick', e=>{
    if(!e.target.classList.contains('piece')) return;
    let deg = parseInt(e.target.style.transform.replace('rotate(','').replace('deg)','')) || 0;
    deg += 45;
    e.target.style.transform = `rotate(${deg}deg)`;

    // Save rotation
    const loc = locations.find(l=>l.id===e.target.alt);
    if(loc) loc.rotate = deg;
    localStorage.setItem('locations', JSON.stringify(locations));
  });

  // Start button
  startBtn.addEventListener('click', ()=>{
    startBtn.style.display='none';
    resetBtn.style.display='block';
    displayStorage();
    bgMusic.play().catch(()=>{});
  });

  // Reset button
  resetBtn.addEventListener('click', ()=>{
    document.querySelectorAll('.piece').forEach(p=>p.remove());
    locations = [];
    localStorage.removeItem('locations');
    displayStorage();
  });

  // Background selector
  bgImg.forEach(bg=>{
    const opt = document.createElement('option');
    opt.value = bg.url;
    opt.textContent = bg.name;
    bgPick.appendChild(opt);
  });

  bgPick.addEventListener('change', e=>{
    document.body.style.backgroundImage = `url(${e.target.value})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    localStorage.setItem('background', e.target.value);
  });

  const savedBg = localStorage.getItem('background');
  if(savedBg) document.body.style.backgroundImage = `url(${savedBg})`;


  musicItems.forEach(m=>{
    const opt = document.createElement('option');
    opt.value = m.url;
    opt.textContent = m.name;
    musicPick.appendChild(opt);
  });

  musicPick.addEventListener('change', e=>{
    if(e.target.value){
      bgMusic.src = e.target.value;
      bgMusic.play().catch(()=>{});
    }
  });

})();
