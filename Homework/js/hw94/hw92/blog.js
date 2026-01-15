(async function(){
    const userDiv = document.getElementById('users');
   // const show = document.getElementById('showUsers');
    

  /*  show.onclick = async function*/async function showUsers(){
       //show.style.display ='none';
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
       userDiv.innerHTML = users.slice(0, 3).map(user =>`
                <div class="user-card" data-user-id="${user.id}">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                       <p>id:${user.id}</p>

                </div>
                
           `)
           
            .join('');
           
            
        };
      
   userDiv.onclick = function (event) {

  const commentBtn = event.target.closest('.show-comments');
  if (commentBtn) {
    const postId = commentBtn.dataset.postId;

    const postCard = commentBtn.closest('.post-card');
    const commentsDiv = postCard.querySelector('.comments');

    showComments(postId, commentsDiv);
    return;
  }

  const card = event.target.closest('.user-card');
  if (card) {
    const userId = card.dataset.userId;
    showPosts(userId);
  }
};


    
    async function showPosts(userId){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        userDiv.innerHTML = posts.slice(0, 3).map(post =>`
                <div class="post-card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button class="show-comments" data-post-id="${post.id}">Show Comments</button>
                
                 <div class="comments"></div>
                  </div>
           `)
            .join('');
           
          //  showComments.style.display ='block';

        console.log(posts);
    }
   // showUsers();
   async function showComments(postId,commentsDiv){
   // const postId = event.target.dataset.postId;
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();

        commentsDiv.innerHTML = comments.slice(0, 3).map(comment =>`
            <div class="comment-card">
                <h4>${comment.name} (${comment.email})</h4>
                <p>${comment.body}</p>
            </div>
         `)
        .join('');
        
    }
   

  //  console.log(comments);
   

showUsers();
console.log('hi');



}());
