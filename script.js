function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

//! page load animatin 
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

//?navbar - Animation
function navAnimation() {
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", () => {
     let tl = gsap.timeline();

     tl.to("#nav-bottom", {
        height:"21vh",
        duration: 0.5
     })
     tl.to(".nav-part2 h5", {
        display:"block",
        duration: 0.1
     })
     tl.to(".nav-part2 h5 span", {
        y:0,
        // duration:0.1,
        stagger:{
            amount:0.5
        }
     })
})

nav.addEventListener("mouseleave", () => {
     let tl = gsap.timeline();

     
     tl.to(".nav-part2 h5 span", {
        y:25,
        stagger:{
            amount:0.2
        }
     })
     tl.to(".nav-part2 h5", {
        display:"none",
        duration:0.1
     })
     tl.to("#nav-bottom", {
        height:0,
        duration:0.2
     })
})
};


//? Page-2 image mover

function page2Animation () {
   var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
       elem.addEventListener("mousemove", function (dets) {
    let bounds = elem.getBoundingClientRect();
    
    // cursor position relative to elem minus half of image size
    let cursorX = dets.x - bounds.x;
    let cursorY = dets.y - bounds.y;

    gsap.to(elem.childNodes[3], {
        x: cursorX - 45, // 40 = half of width
        y: cursorY - 135  // 55 = half of height
    });
});
      })

}

//? PAGE -3 VIDEO
function page3VideoAnimation (){
   var page3Center  = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");

page3Center.addEventListener("click", function () {
   video.play()
   gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
   })
})
video.addEventListener("click", () => {
   video.pause()
   gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
   })
})
}

//* Page 7 video

function page7VideoMove () {
   var sections = document.querySelectorAll(".sec-right");

sections.forEach(function(elem) {
   elem.addEventListener("mouseenter", function () {
      console.log(elem.childNodes);
      elem.childNodes[5].style.opacity = 1,
      elem.childNodes[5].play()
      console.log("ho to gya");
      
   })
   elem.addEventListener("mouseleave", function () {
      elem.childNodes[5].style.opacity = 0,
      elem.childNodes[5].load()
      console.log("ho to gya");
      
   })

})
}

//! pAGE -7 DIV MOVE 
function page7Animation () {
   var rightElems = document.querySelectorAll(".sec-right");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
        })
       elem.addEventListener("mousemove", function (dets) {
    let bounds = elem.getBoundingClientRect();
    
    // cursor position relative to elem minus half of image size
    let cursorX = dets.x - bounds.x;
    let cursorY = dets.y - bounds.y;

    gsap.to(elem.childNodes[1], {
        x: cursorX - 79, // 40 = half of width
        y: cursorY - 96  // 55 = half of height
    });
});

    })
   }

//! page 8

function page8VideoPlay() {
   var rihgtPart = document.querySelectorAll(".part-left");

   rihgtPart.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
         // console.log(elem.childNodes[9]);
         gsap.to([elem.childNodes[3], elem.childNodes[5]],
            {
               opacity: 0,
               scale: 0,
               // duration: 0.5
            })
            gsap.to(elem.childNodes[7], {
               height: "55vw"
            })
            elem.childNodes[9].style.opacity = 1,
            elem.childNodes[9].play()
      })
        elem.addEventListener("mouseleave", function () {
         
         gsap.to([elem.childNodes[3], elem.childNodes[5]],
            {
               opacity: 1,
               scale: 1
            })
             gsap.to(elem.childNodes[7], {
               height: "22vw"
            })
            elem.childNodes[9].style.opacity = 0,
            elem.childNodes[9].load()
      })
   })

    var rihgtPart = document.querySelectorAll(".part-right");

   rihgtPart.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
         console.log(elem.childNodes[9]);
         gsap.to([elem.childNodes[3], elem.childNodes[5]],
            {
               opacity: 0,
               scale: 0,
               // duration: 0.5
            })
            gsap.to(elem.childNodes[7], {
               height: "55vw"
            })
            elem.childNodes[9].style.opacity = 1,
            elem.childNodes[9].play();
      })
        elem.addEventListener("mouseleave", function () {
         
         gsap.to([elem.childNodes[3], elem.childNodes[5]],
            {
               opacity: 1,
               scale: 1
            })
             gsap.to(elem.childNodes[7], {
               height: "22vw"
            })
            elem.childNodes[9].style.opacity = 0,
            elem.childNodes[9].load();
      })
   })

}
   

//! page -11 Scroll Animation
function page11ScrollAnimation () {
   gsap.from("#btm11-part2 h4", {
      x:0,
      duration:1,
      scrollTrigger: {
         trigger: "#btm11-part2",
         scroller: "#main",
         start: "top 80%",
         end: "top 10%",            
         scrub: true
      }
   })
   gsap.from("#btm11-part3 h4", {
      x:0,
      duration:1,
      scrollTrigger: {
         trigger: "#btm11-part2",
         scroller: "#main",
         start: "top 80%",
         end: "top 10%",            
         scrub: true
      }
   })
   gsap.from("#btm11-part4 h4", {
      x:0,
      duration:1,
      scrollTrigger: {
         trigger: "#btm11-part2",
         scroller: "#main",
         start: "top 80%",
         end: "top 10%",            
         scrub: true
      }
   })
}

// ! Page 14 div move 

function page14MoveAnimation () {
   var rightElems = document.querySelectorAll("#page14");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
         // console.log(elem.childNodes);
         
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
        })
       elem.addEventListener("mousemove", function (dets) {
    let bounds = elem.getBoundingClientRect();
    
    // cursor position relative to elem minus half of image size
    let cursorX = dets.x - bounds.x;
    let cursorY = dets.y - bounds.y;

    gsap.to(elem.childNodes[1], {
        x: cursorX - 70, // 40 = half of width
        y: cursorY - 80  // 55 = half of height
    });
});

    })
   }


   // ! Page 20 div move 

function page20MoveAnimation () {
   var rightElems = document.querySelectorAll(".pg20-part1");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
         console.log(elem.childNodes);
         
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
        })
       elem.addEventListener("mousemove", function (dets) {
    let bounds = elem.getBoundingClientRect();
    
    // cursor position relative to elem minus half of image size
    let cursorX = dets.x - bounds.x;
    let cursorY = dets.y - bounds.y;

    gsap.to(elem.childNodes[1], {
        x: cursorX - 70, // 40 = half of width
        y: cursorY - 80  // 55 = half of height
    });
});

    })
   }


locomotiveAnimation()

navAnimation();

page2Animation();

page3VideoAnimation();

page7VideoMove()

page7Animation()

page8VideoPlay();

page11ScrollAnimation();

loadingAnimation()

page14MoveAnimation()

page20MoveAnimation()


gsap.to("#page10 button", {
    scrollTrigger: {
        trigger: "#page10 button", // Triggers specifically when #page10's button reaches top 15%
        scroller: "#main",
        start: " 1%",
        endTrigger: "#page10",     // Pins until the bottom of #page10 is reached
        end: "85%",
        pin: true,
        pinSpacing: false
    }
})


const btn16 = document.querySelector("#page16 .pg16-left button");

if (btn16) {
    gsap.to(btn16, {
        scrollTrigger: {
            trigger: btn16,
            scroller: "#main",
            start: "top 1%",
            endTrigger: "#page16",
            end: "bottom 85%",
            pin: true,
            pinSpacing: false
        }
    });
}


// var imgChange = document.querySelectorAll(".pg14-r-img");

// imgChange.forEach(function (elem) {
//    elem.addEventListener("mouseenter", function () {
//       // console.log(elem.childNodes);
//       gsap.to(elem.childNodes[1],{
//          opacity:0,
//          scale:0
//       })
//       gsap.to(elem.childNodes[3],{
//          opacity:1,
//          scale:1
//       })
//    })
//     elem.addEventListener("mouseleave", function () {
//       // console.log(elem.childNodes);
//       gsap.to(elem.childNodes[1],{
//          opacity:1,
//          scale:1
//       })
//       gsap.to(elem.childNodes[3],{
//          opacity:0,
//          scale:0
//       })
//    })
// })
