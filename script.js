const colors = [ "#05B8FF", "#F49875", "#91FFFF", "#FF73AD","#FF4919","pink"];
const comments = [
  "The Role of Vtubers/Vups in Online Communities",
  "Pushing the Boundaries of Digital Art and Interactions",
  "The Changing Media Landscape",
  "What are Vtubers/Vups?",
  "Vtubers Live On YouTube",
  "Vups Live on Bilibili"
];

const links = [
"The-Role-of-Vtubers-Vups-in-Online-Communities.html",
"Pushing-the-Boundaries-of-Digital-Art-and-Interactions.html",
"The-Changing-Media-Landscape.html",
"What-are-Vtubers-Vups.html",
"https://www.youtube.com/results?search_query=vtuber&sp=EgJAAQ%253D%253D",
"https://search.bilibili.com/live?keyword=vup&from_source=webtop_search&spm_id_from=333.1007&search_source=5&search_type=live_room"
  ]

let currentTimeout;

function moveComment(commentEl) {
  const commentWidth = commentEl.clientWidth;
  const speed = Math.floor(Math.random() * (15000 - 3000) + 3000);
  const animation = commentEl.animate([
    { left: `${window.innerWidth + commentWidth}px` },
    { left: `-${commentWidth}px` }
  ], {
    duration: speed,
    easing: "linear",
    iterations: Infinity
  });
  // const resume = false;
  // animation.pause();
  commentEl.addEventListener("mouseenter", () => {
    // clearTimeout(currentTimeout);
    animation.pause();

  }); 
  commentEl.addEventListener("mouseout", () => {
    // currentTimeout = setTimeout(() => {
      animation.play();
    // }, speed);
    // resume = true;
  });
  // animation.play();
  // console.log(currentTimeout);
}

function generateComment() {
  const index = Math.floor(Math.random() * comments.length);
  const comment = comments[index];
  const color = colors[index];
  const link = links[index];
  const y = Math.floor(Math.random() * window.innerHeight);
  const commentEl = document.createElement("a");
  const commentId = `comment-${Date.now()}`;
  commentEl.setAttribute('href', link);
  // commentEl.setAttribute('id', commentId);
  commentEl.style.color = color;
  commentEl.textContent = comment;
  commentEl.classList.add("bullet-comment");
  // commentEl.style.color = color;
  commentEl.style.bottom = `${y}px`;
  commentEl.style.left = `${window.innerWidth}px`;
  // const linkEl = document.createElement("a");
  // // linkEl.setAttribute('href', link);
  // linkEl.style.color = color;
  // linkEl.textContent = comment;
  // commentEl.appendChild(linkEl);
  document.getElementById("bullet-comments").appendChild(commentEl);
  moveComment(commentEl); // call moveComment function to animate the comment
}


// function generateComment() {
//   const index = Math.floor(Math.random() * comments.length);
//   const comment = comments[index];
//   const color = colors[index];
//   const link = links[index];
//   const y = Math.floor(Math.random() * window.innerHeight);
//   const commentEl = document.createElement("div");
//   const commentId = `comment-${Date.now()}`;
//   commentEl.setAttribute('id', commentId);
//   commentEl.classList.add("bullet-comment");
//   commentEl.style.color = color;
//   commentEl.style.bottom = `${y}px`;
//   commentEl.style.left = `${window.innerWidth}px`;
//   commentEl.textContent = comment;
//   document.getElementById("bullet-comments").appendChild(commentEl);
//   moveComment(commentEl); // call moveComment function to animate the comment
// }

setInterval(generateComment, 1000); // generate a comment every 200ms
