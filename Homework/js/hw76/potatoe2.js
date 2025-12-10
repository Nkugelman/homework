(async function(){
'use strict';

const pieces = document.querySelector('.pieces');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const bgPick = document.getElementById('bgPick');
const bgMusic = document.getElementById('bgMusic');
const bgMusicPick = document.getElementById('bgMusicPick');
const saveSet = document.getElementById('saveSet');
const loadSet = document.getElementById('loadSet');
const posePicker = document.getElementById('posePicker');
const addPartBtn = document.getElementById('addPartBtn');
const customPartUrl = document.getElementById('customPartUrl');
const trash = document.getElementById('trash');

const items = await myFetch('mrPotatoe.json');
const bgImg = await myFetch('bg.json');
const musicItems = await myFetch('music.json');

let dragging;
let offset;
let zCounter = 1;
let locations = JSON.parse(localStorage.getItem('locations')) || [];

// --- Load Pieces ---
items.forEach((item,i) => {
  const img = document.createElement('img');
  img.src = item.url;
  img.alt = item.name || '';
  img.classList.add('piece');

  const saved = locations.find(loc => loc.id === img.alt);
  if (saved) {
    img.style.left = saved.left;
    img.style.top = saved.top;
    img.style.zIndex = saved.zIndex || 1;
    if (saved.rotation) img.style.transform = `rotate(${saved.rotation}deg)`;
  } else {
    img.style.left = `${50 + i * 120}px`;
    img.style.top = `50px`;
    img.style.zIndex = 1;
  }

  pieces.appendChild(img);

  img.addEventListener('mousedown', e => {
    e.preventDefault();
    dragging = e.target;
    offset = {x: e.offsetX, y: e.offsetY};
    zCounter++;
    dragging.style.zIndex = zCounter;
  });
});

// --- Dragging Logic ---
document.addEventListener('mousemove', e => {
  if (dragging) {
    e.preventDefault();
    dragging.style.left = `${e.pageX - offset.x}px`;
    dragging.style.top = `${e.pageY - offset.y}px`;
  }
});

document.addEventListener('mouseup', e => {
  if (dragging) {
    const trashRect = trash.getBoundingClientRect();
    const imgRect = dragging.getBoundingClientRect();

    // delete if dropped in trash
    if (
      imgRect.right > trashRect.left &&
      imgRect.left < trashRect.right &&
      imgRect.bottom > trashRect.top &&
      imgRect.top < trashRect.bottom
    ) {
      dragging.remove();
    } else {
      const existing = locations.find(loc => loc.id === dragging.alt);
      const rotation = parseInt(dragging.dataset.rotation || '0', 10);
      if (existing) {
        existing.left = dragging.style.left;
        existing.top = dragging.style.top;
        existing.zIndex = dragging.style.zIndex;
        existing.rotation = rotation;
      } else {
        locations.push({
          id: dragging.alt,
          left: dragging.style.left,
          top: dragging.style.top,
          zIndex: dragging.style.zIndex,
          rotation
        });
      }
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    dragging = null;
  }
});

// --- Rotate on "R" ---
document.addEventListener('keydown', e => {
  if (dragging && e.key.toLowerCase() === 'r') {
    const current = parseInt(dragging.dataset.rotation || '0', 10);
    const newAngle = (current + 15) % 360;
    dragging.style.transform = `rotate(${newAngle}deg)`;
    dragging.dataset.rotation = newAngle;
  }
});

// --- Start and Reset ---
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  resetBtn.style.display = 'inline-block';
  pieces.style.display = 'block';
  if (bgMusic.src) bgMusic.play().catch(err => console.log(err));
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('locations');
  locations = [];
  document.querySelectorAll('.piece').forEach((img, i) => {
    img.style.left = `${50 + i * 120}px`;
    img.style.top = `50px`;
    img.style.zIndex = 1;
    img.style.transform = 'rotate(0deg)';
  });
});

// --- Background Picker ---
bgImg.forEach(bg => {
  const opt = document.createElement('option');
  opt.value = bg.url;
  opt.textContent = bg.name;
  bgPick.appendChild(opt);
});

bgPick.addEventListener('change', e => {
  const selectedUrl = e.target.value;
  if (!selectedUrl) return;
  document.body.style.backgroundImage = `url(${selectedUrl})`;
  localStorage.setItem('background', selectedUrl);
});
const savedBg = localStorage.getItem('background');
if (savedBg) {
  document.body.style.backgroundImage = `url(${savedBg})`;
  bgPick.value = savedBg;
}

// --- Music Picker ---
musicItems.forEach(m => {
  const opt = document.createElement('option');
  opt.value = m.url;
  opt.textContent = m.name;
  bgMusicPick.appendChild(opt);
});
bgMusicPick.addEventListener('change', e => {
  const selectedUrl = e.target.value;
  if (!selectedUrl) return;
  bgMusic.src = selectedUrl;
  bgMusic.play();
  localStorage.setItem('backgroundMusic', selectedUrl);
});
const savedMusic = localStorage.getItem('backgroundMusic');
if (savedMusic) {
  bgMusic.src = savedMusic;
  bgMusicPick.value = savedMusic;
}

// --- Save / Load Pose Sets ---
saveSet.addEventListener('click', () => {
  const poseName = prompt("Enter a name for this pose:");
  if (!poseName) return;
  const savedPoses = JSON.parse(localStorage.getItem('poses')) || {};
  savedPoses[poseName] = locations;
  localStorage.setItem('poses', JSON.stringify(savedPoses));
  updatePosePicker();
});

loadSet.addEventListener('click', () => {
  const savedPoses = JSON.parse(localStorage.getItem('poses')) || {};
  const pose = savedPoses[posePicker.value];
  if (!pose) return;
  pose.forEach(p => {
    const img = document.querySelector(`img[alt="${p.id}"]`);
    if (img) {
      img.style.left = p.left;
      img.style.top = p.top;
      img.style.zIndex = p.zIndex;
      img.style.transform = `rotate(${p.rotation || 0}deg)`;
    }
  });
});

function updatePosePicker() {
  posePicker.innerHTML = '';
  const savedPoses = JSON.parse(localStorage.getItem('poses')) || {};
  Object.keys(savedPoses).forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    posePicker.appendChild(opt);
  });
}
updatePosePicker();

// --- Add Custom Part ---
addPartBtn.addEventListener('click', () => {
  const url = customPartUrl.value.trim();
  if (!url) return;
  const img = document.createElement('img');
  img.src = url;
  img.classList.add('piece');
  img.style.left = '50px';
  img.style.top = '50px';
  img.style.zIndex = ++zCounter;
  img.alt = 'custom-' + Date.now();
  pieces.appendChild(img);
  customPartUrl.value = '';
  img.addEventListener('mousedown', e => {
    e.preventDefault();
    dragging = e.target;
    offset = {x: e.offsetX, y: e.offsetY};
    zCounter++;
    dragging.style.zIndex = zCounter;
  });
});

// --- JSON Fetch Helper ---
async function myFetch(file) {
  try {
    const r = await fetch(file);
    if (!r.ok) throw new Error(`${r.status} - ${r.statusText}`);
    return await r.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
})();