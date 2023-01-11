// const enlarge = document.querySelectorAll('enl');

// const home = document.querySelector('.home');
// const search= document.querySelector('search');
// const explore = document.querySelector('explore');
// const reel= document.querySelector('reel');
// const messages = document.querySelector('messages');
// const likes = document.querySelector('likes');
// const create  = document.querySelector('create');
// const profile = document.querySelector('profile');
// const icon = document.getElementsByTagName('i');

let names = [
  {
    name:'sheshank'
  },
  {
    name:'poorna'
  },
  {
    name:'sai'
  },
  {
    name:'shank_it'
  }
];

// let post1 = document.getElementById('post');
// let posts = ()=>{
//    post1.innerHTML = names.map((x)=>{
//     let {name} = x;
//   return (` 
//     <div>
//   <div class="top d-flex align-items-center">
//     <div class="profile-pic"></div>
//     <div class="details d-flex  flex-column justify-content-around">
//       <div class="name">${name}</div>
//       <div class="text-light">loc1</div>
//     </div>
//     <div class="dots text-light"><i class="fa-solid fa-ellipsis"></i></div>
//   </div>
//   <div class="photo"></div>
//   <div class="bottom">
//     <div class="bottom-btns d-flex">
//         <div class="like"><i class="fa-regular fa-heart"></i></div>
//         <div class="comment"><i class="fa-regular fa-comment"></i></div>
//         <div class="share"><i class="fa-brands fa-telegram"></i></div>
//         <div class="save"><i class="fa-regular fa-bookmark"></i></div>
//     </div>
//     <div class="likes-info d-flex ">
//       <div class="liked-by"><img src="./pictures/poorna.jpg" alt="" width="20px"> </img></div>   
//       <div class="likes-count">Liked by <b>poorna_0912</b> and <b>69 others</b></div>
//     </div>
//     <div class="comments-info ">
//       <div class="caption d-flex comment-all">
//         <div class="name">friend1</div>
//         <div class="profile-comment">October being nice with birthday, midnights and pondi.</div>
//       </div>
//       <div class="comments-count">View all 5 comments</div>
//       <div class="comments-info1 comment-all d-flex">
//         <div class="friend-name-1"> <b>friend1</b></div>
//         <div class="friend-1-comment">ewwwwwwwwww</div>
//       </div>
//     </div>
      
//     <div class="upload-info" ><small>4 DAYS AGO</small> </div>
//     <div class="post-comment d-flex align-items-center justify-content-between">
//       <div class="smiley"><i class="fa-regular fa-face-smile"></i></div>
//       <textarea name="" id="" placeholder="Add a comment.." autocomplete="off" style="height:18px !important;"></textarea>
//       <button class="post-btn" ><b>Post</b></button>
//     </div>
//   </div></div>`);
// })
// }


let post = document.querySelector('.post');

let posts = () => {
  post.innerHTML = names.map((x) =>{
    return (` 
  </div> <div class="top d-flex align-items-center">
  <div class="profile-pic"></div><div class="details d-flex  flex-column justify-content-around">
  <div class="name">${name}</div>
  <div class="text-light">loc1</div>
</div><div class="dots text-light" ><i class="fa-solid fa-ellipsis" onclick="showdiv()"></i></div>
  </div>
<div class="photo post-photo"></div>
<div class="bottom">
  <div class="bottom-btns d-flex">
      <div class="like"><i class="fa-regular fa-heart"></i></div>
      <div class="comment"><i class="fa-regular fa-comment"></i></div>
      <div class="share"><i class="fa-brands fa-telegram"></i></div>
      <div class="save"><i class="fa-regular fa-bookmark"></i></div>
  </div>
  <div class="likes-info d-flex ">
    <div class="liked-by"><img src="./pictures/poorna.jpg" alt="" width="20px"> </img></div>   
    <div class="likes-count">Liked by <b>poorna_0912</b> and <b>500 others</b></div>
  </div>
  <div class="comments-info ">
    <div class="caption d-flex comment-all">
      <div class="name">friend1</div>
      <div class="profile-comment">October being nice with birthday, midnights and pondi.</div>
    </div>
    <div class="comments-count">View all 5 comments</div>
    <div class="comments-info1 comment-all d-flex">
      <div class="friend-name-1"> <b>friend1</b></div>
      <div class="friend-1-comment">ewwwwwwwwww</div>
    </div>
  </div>
    
  <div class="upload-info" ><small>4 DAYS AGO</small> </div>
  <div class="post-comment d-flex align-items-center justify-content-between">
    <div class="smiley"><i class="fa-regular fa-face-smile"></i></div>
    <textarea name="" id="" placeholder="Add a comment.." autocomplete="off" style="height:18px !important;"></textarea>
    <button class="post-btn" ><b>Post</b></button>
  </div>
</div>
      <div>
       
  </div>`)
})  
}
  

posts();

let bgpost = document.querySelectorAll('.post');

function showdiv(){
  document.getElementById('tdots').style.display = 'block';
}

function remdiv(){
  document.getElementById('tdots').style.display = 'none';
}
