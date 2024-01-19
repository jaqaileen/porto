//cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


//header
let professionIndex = 0;
const professions = ['graphic', 'website', 'product'];

function updateProfession() {
    const professionHeader = document.getElementById('professionHeader');
    professionHeader.innerHTML = `I am a <em>${professions[professionIndex]}</em> designer`;
    professionIndex = (professionIndex + 1) % professions.length;
}

updateProfession();

setInterval(updateProfession, 1000);


//book
var tl = new TimelineMax();

tl.set($(".book-wrapper"), {
  perspective: 8000,
  xPercent: -50,
  yPercent: 8,
  left: "50%",
})
  .set($(".book-container"), { transformStyle: "preserve-3d" })
  .set($(".book-front"), {
    transformOrigin: "0% 50% -15px",
    transformPerspective: 8000,
  })
  .set(".book-left", {
    rotationX: 0,
    rotationY: 270,
    rotationZ: 0,
    transformPerspective: 8000,
  });

tl.to(".side", 0, { rotationY: "+=35" });

$(".book-container:not(.no-hover)").hover(
  function () {
    tl.to(".side", 0.75, { rotationY: "-=35" });
  },
  function () {
    tl.to(".side", 0.75, { rotationY: "+=35" });
  }
);

function toggleBookMovement() {
  var bookContainer = document.querySelector(".book-container");
  var currentTransform = window.getComputedStyle(bookContainer).transform;

  if (currentTransform === "none") {
    tl.pause(); // Pause the timeline to stop the rotation

    // auto flip to first page
    document.getElementById("book").style.visibility = "visible";
    document.getElementById("book").style.display = "block";

    setTimeout(() => {
      document.getElementById("cover").style.display = "none";

      var firstPage = document.getElementsByClassName("page")[0];
      firstPage.classList.add("flipped");
      document.getElementsByClassName("page")[0].click();
    }, 10);
  } else {
    bookContainer.style.transform = "none";
    tl.play(); // Resume the timeline to continue the rotation
  }

  console.log("tekan");
}

$(".book-container").on("click", toggleBookMovement);

// ----

var pages = document.getElementsByClassName("page");

for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      console.log(this.pageNum);
      if (this.pageNum + 1 >= pages.length || this.pageNum === 2) {
        if (this.pageNum === 2) {
          setTimeout(() => {
            document.getElementById("book").style.visibility = "hidden";
            document.getElementById("book").style.display = "none";
            document.getElementById("cover").style.display = "block";
          }, 1900);

          setTimeout(() => {
            tl.play();
          }, 1950);
        } else {
          setTimeout(() => {
            document.getElementById("book").style.visibility = "hidden";
            document.getElementById("book").style.display = "none";
            document.getElementById("cover").style.display = "block";
          }, 940);

          setTimeout(() => {
            // $(".book-container").addClass("no-hover");
            tl.play();
          }, 1500);
        }

        // remove flipped class from all pages
        for (var i = 0; i < pages.length; i++) {
          pages[i].classList.remove("flipped");
        }

        return;
      }

      if (this.pageNum % 2 === 0) {
        this.classList.remove("flipped");
        this.previousElementSibling.classList.remove("flipped");
      } else {
        this.classList.add("flipped");
        this.nextElementSibling.classList.add("flipped");
      }
    };
  }
});

//gif pages
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const video5 = document.getElementById('video5');
const video6 = document.getElementById('video6');
const video7 = document.getElementById('video7');
const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.play();
  });

//scroll down
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a.hover:text-#e18ab1.hover:scale-125');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});
