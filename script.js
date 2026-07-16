const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const videoBox = document.getElementById("videoBox");
const video = document.getElementById("video");
const soundBtn = document.getElementById("soundBtn");
const hearts = document.querySelector(".bg-hearts");

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        videoBox.style.display = "block";

        video.play().catch(() => {});

    }, 1800);

});

soundBtn.addEventListener("click", () => {

    video.muted = false;
    video.volume = 1;
    video.play();

    soundBtn.innerHTML = "❤️ Enjoy The Video ❤️";

});

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"❤️":"🌷";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(Math.random()*5+5)+"s";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);

for(let i=0;i<20;i++){

    setTimeout(createHeart,i*250);

}
