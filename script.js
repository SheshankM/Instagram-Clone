let names = [
  {
    name: "sheshank",
  },
  {
    name: "poorna",
  },
  {
    name: "sai",
  },
  {
    name: "shank_it",
  },
];

let post = document.getElementById("post");

let posts = () => {
  post.innerHTML = names.map((x) => {
    return ` 
    <div>
    <div class="top d-flex align-items-center">
      <div class="profile-pic"></div>
      <div class="details d-flex  flex-column justify-content-around">
        <div class="name">${x.name}</div>
        <div class="text-light">loc1</div>
      </div>
      <div class="dots text-light"><i class="fa-solid fa-ellipsis" onclick="showdiv()"></i></div>
    </div>
    <div class="photo"><img src="./pictures/sivaSai_post.jpeg" alt="" class="pic" style="object-fit:contain"></div>
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

      <div class="upload-info"><small>4 DAYS AGO</small> </div>
      <div class="post-comment d-flex align-items-center justify-content-between">
        <div class="smiley"><i class="fa-regular fa-face-smile"></i></div>
        <textarea name="" id="" placeholder="Add a comment.." autocomplete="off"
          style="height:18px !important;"></textarea>
        <button class="post-btn"><b>Post</b></button>
      </div>
    </div>
    <div>
    </div>
  </div>`;
  });
};

posts();

let bgpost = document.querySelectorAll(".post");

function showdiv() {
  document.getElementById("tdots").style.display = "block";
}

function remdiv() {
  document.getElementById("tdots").style.display = "none";
}

function showStory() {
  document.getElementById("story-view").style.display = "block";
}
let moredd = document.getElementById("more-dd");
let more = document.getElementById("morebtn");
more.addEventListener("click", () => {
  if (moredd.style.display === "none") {
    moredd.style.display = "";
  } else {
    moredd.style.display = "none";
  }
});
