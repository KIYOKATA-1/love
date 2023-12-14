window.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const myAudio = document.getElementById("myAudio");

    yesBtn.addEventListener("click", (e) => {
        question.innerHTML = "Aaaaaaa , I LIKE YOU TOOO";
        gif.src = 'img/love_cat.gif';        
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        createHearts();
        myAudio.src = 'img/yes.mp3';
        myAudio.play();
    });

    noBtn.addEventListener("mouseover", (event) =>{
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = this.window.innerWidth - noBtnRect.width;
        const maxY = this.window.innerHeight - noBtnRect.height;


        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.marginLeft = randomX + "px";
        noBtn.style.marginTop = randomY + "px";
    });

    // Function to create falling hearts
    function createHearts() {
        const heartsContainer = document.createElement("div");
        heartsContainer.className = "hearts-container";

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heartsContainer.appendChild(heart);
        }

        document.body.appendChild(heartsContainer);

        animateHearts(heartsContainer);
    }

    // Function to animate falling hearts
    function animateHearts(container) {
        const hearts = container.getElementsByClassName("heart");

        for (let i = 0; i < hearts.length; i++) {
            animateHeart(hearts[i]);
        }
    }

    // Function to animate an individual heart
    function animateHeart(heart) {
        const duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds

        heart.style.animationDuration = duration + "s";
        heart.style.animationDelay = -delay + "s";

        heart.addEventListener("animationiteration", () => {
            // Reset position when animation completes
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = -30 + "px";
        });
    }
    
});

