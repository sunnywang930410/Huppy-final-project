// // 確保GSAP已經被引入
gsap.registerPlugin(CSSPlugin);

// 確保GSAP和ScrollTrigger已經被引入
gsap.registerPlugin(ScrollTrigger);


// 文字套件
// var textWrapper = document.querySelector('.ml9 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// anime.timeline({ loop: false })
//         .add({
//             targets: '.ml9 .letter',
//             scale: [0, 1],
//             duration: 1500,
//             elasticity: 600,
//             delay: (el, i) => 45 * (i + 1)
//         })

// gsap.set(textWrapper, {autoAlpha: 0});

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.about',
//     start: 'top',
//     end: 'bottom',
//     scrub: true
//   }
// })
// .to(textWrapper, {
//   autoAlpha: 1,
//   duration: 1,
//   delay: 0.5
// })
// .to('.ml9 .letter', {
//   scale: [0, 1],
//   duration: 1.5,
//   elasticity: 600,
//   delay: (el, i) => 45 * (i + 1)
// });

const scrollTriggerOption = {
    scrollTrigger: {
        trigger: "#pic",
        start: "center top",
        end: "bottom top",
        scrub: true,
        markers: false,
        id: "#pic",
    },
}

const timeline = gsap.timeline(scrollTriggerOption);
timeline
    .to("#navbar", 2, { display: "none" })
    .to("#logo", 1, { display: "none" }, 0)

const scrollTrigger = {
    scrollTrigger: {
        trigger: "#pic",
        start: "bottom top",
        scrub: true,
        markers: false,
        id: "#pic",
    },
}

const timeline2 = gsap.timeline(scrollTrigger);
timeline
    .to("#whitebone", 2, { opacity: 1 })

const whitebone = document.getElementById("whitebone");

whitebone.addEventListener('click', function () {
    var ul = document.getElementById("ul");
    var navbar = document.getElementById('navbar');
    //console.log(ul.classList.contains('background'))
    if (ul.classList.contains('background')) {
        ul.classList.remove('background');
        navbar.style.display = 'none';
    }
    else {
        ul.classList.add('background');
        navbar.style.display = 'flex';
    }
});


// HUPPY動畫
var title = document.querySelector('.first_title');

var chars = title.textContent.split("");
title.textContent = "";

chars.forEach(function (char, i) {
    var span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    title.appendChild(span);
});

gsap.to(title.children, 1.5, {
    y: -50,
    opacity: 1,
    ease: Power3.out,
    stagger: 0.2
})


// icon動畫
var elements = document.getElementsByClassName("paw");
TweenMax.fromTo(elements, 0.8, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1, ease: Power2.easeOut });

var elements = document.getElementsByClassName("bone");
TweenMax.fromTo(elements, 0.8, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1, ease: Power2.easeOut });



// nav動畫
var elements = document.getElementsByClassName("list_link");
for (var i = 0; i < elements.length; i++) {
    TweenMax.fromTo(elements[i], 0.8, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1, ease: Power2.easeOut });
}

var elements = document.getElementsByClassName("list_link");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function () {
        TweenMax.to(this, 0.3, { scale: 1.2 });
    });
    elements[i].addEventListener("mouseout", function () {
        TweenMax.to(this, 0.3, { scale: 1 });
    });
}

// 圖片動畫
gsap.to(".white", { duration: 2.5, opacity: 0.25 });

const tl = new TimelineMax({ paused: true });
tl.to(['.image_container_1', '.white'], { scale: 0.8, duration: 1, ease: 'sine.out' });

ScrollTrigger.create({
    trigger: '.image_container_1',
    start: 'top top',
    end: 'bottom top',
    markers: false,
    animation: tl,
    scrub: true,
});

// 取得 navigation 和 icon 元素
var navbar = document.getElementById('.navbar-nav');
var icon = document.getElementById('.whitebone');

// 監聽滾動事件
window.onscroll = function () {
    // 當頁面向下滾動超過 50px 時，隱藏 navbar 並顯示 icon
    if (window.pageYOffset > 50) {
        navbar.style.display = 'none';
        icon.style.display = 'block';
    } else {
        navbar.style.display = 'block';
        icon.style.display = 'none';
    }
};



// about動畫
container = document.querySelector('.about_left');
fadeIn = () => {
    if (window.scrollY >= container.offsetTop) {
        container.classList.add('fade-in');
    }
};
window.addEventListener('scroll', fadeIn);
container1 = document.querySelector('.check_element');
fadeIn1 = () => {
    if (window.scrollY >= container1.offsetTop) {
        container1.classList.add('fade-in');
        window.removeEventListener('scroll', fadeIn1);
    }
};
window.addEventListener('scroll', fadeIn1);



var sections = document.querySelectorAll(['.about_left', '.member1']);

sections.forEach(function (section, i) {
    // section.style.zIndex = sections.length;
    ScrollTrigger.create({
        trigger: section,
        pin: true, // 將觸發元素固定住
        endTrigger: sections[i + 1], // 當下一個元素到達時，取消固定
        // end: "+=100%",
    });
});



var sections = document.querySelectorAll('.member2');

sections.forEach(function (section, i) {
    // section.style.zIndex = sections.length;
    ScrollTrigger.create({
        trigger: section,
    });
});


// check
var count = 0;
var checkboxs = document.querySelectorAll("#ch1");
var answer = document.getElementById('ready');
checkboxs.forEach(function (box) {
    box.addEventListener("change", function () {
        if (box.checked) {
            count++;
        }
        else {
            count--;
        }
        if (count == 3) {
            answer.classList.remove("hide");
            TweenMax.fromTo(answer, 0.8, { transform: "translateY(100px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1, ease: Power2.easeOut });
        }
        else {
            answer.classList.add("hide");
        }
    });
});




document.querySelectorAll('.card_collector').forEach((title) => {
    title.addEventListener('click', (event) => {
        const content = event.target.nextElementSibling;
        console.log(content);
        if (content.classList.contains('dog1')) {
            if (!$('.dog1').is('.opencard')) {
                $('.dog1').addClass('opencard');
                $('.dog1').removeClass('closecard');
                $('.dog2').addClass('closecard');
                $('.dog2').removeClass('opencard');
                $('.dog3').addClass('closecard');
                $('.dog3').removeClass('opencard');
                $('.dog_container1').removeClass('hide');
            }
            else {
                $('.dog1').addClass('closecard');
                $('.dog1').removeClass('opencard');
                $('.dog_container1').addClass('hide');
            }
        }
        if (content.classList.contains('dog2')) {
            if (!$('.dog2').is('.opencard')) {
                $('.dog2').addClass('opencard');
                $('.dog2').removeClass('closecard');
                $('.dog1').addClass('closecard');
                $('.dog1').removeClass('opencard');
                $('.dog3').addClass('closecard');
                $('.dog3').removeClass('opencard');
                $('.dog_container2').removeClass('hide');
            }
            else {
                $('.dog2').addClass('closecard');
                $('.dog2').removeClass('opencard');
                $('.dog_container2').addClass('hide');
            }
        }
        if (content.classList.contains('dog3')) {
            if (!$('.dog3').is('.opencard')) {
                $('.dog3').addClass('opencard');
                $('.dog3').removeClass('closecard');
                $('.dog2').addClass('closecard');
                $('.dog2').removeClass('opencard');
                $('.dog1').addClass('closecard');
                $('.dog1').removeClass('opencard');
                $('.dog_container3').removeClass('hide');
            }
            else {
                $('.dog3').addClass('closecard');
                $('.dog3').removeClass('opencard');
                $('.dog_container3').addClass('hide');
            }
        }
    });
});
var comein = false;
$(document).scroll(function () {
    var high = $(this).scrollTop() / $(document).height();
    //console.log(high);
    if (high >= 0.857 && !comein) {
        comein = true;
        var image = document.querySelector(".footer_icon_ig");
        var tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.fromTo(image, { opacity: 0, transform: "scale(0.3)", rotate: -15 }, { opacity: 1, transform: "scale(1)", rotate: 0, ease: "power2.out" });
        var image = document.querySelector(".footer_icon_fb");
        var tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.fromTo(image, { opacity: 0, transform: "scale(0.3)", rotate: -15 }, { opacity: 1, transform: "scale(1)", rotate: 0, ease: "power2.out", delay: 0.25 });

        var image = document.querySelector(".footer_icon_tw");
        var tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.fromTo(image, { opacity: 0, transform: "scale(0.3)", rotate: -15 }, { opacity: 1, transform: "scale(1)", rotate: 0, ease: "power2.out", delay: 0.5 });
    }
    if (high < 0.857 && comein) {
        comein = false;
    }
});




var progressBar =document.getElementById('progressbar');
var progress = document.getElementById('progress');
var style = window.getComputedStyle(progress);
progressBar.style.width="100%";
progressBar.style.height="0%";
progress.style.height="100%";
progress.style.width="5%";
$(window).scroll(function(){
    BarHeight=style.getPropertyValue("height");
    var checkpoint = 0.1;
    console.log($(window).scrollTop()/$(document).height());
    if($(window).scrollTop()/$(document).height()>checkpoint){
        var now = $(window).scrollTop()/$(document).height()-checkpoint;
        progressBar.style.height=100*now/0.2+"%";
    }
});


let timeLine = new gsap.timeline({
    scrollTrigger: {
     trigger: "#born_text_box",
     pin: false,
     start: "top bottom", 
     end: "bottom center", 
     scrub: false,
     markers: false,
     id: "born_text_box",
   },     
 });

 timeLine.from('#born_text_box',1,{opacity:0,y:150});
 timeLine.from('#born_img',1.5,{opacity:0,y:150},0);

 let timeLine2 = new gsap.timeline({
    scrollTrigger: {
     trigger: "#neonatal_text_box",
     pin: false,
     start: "top bottom", 
     end: "bottom center", 
     scrub: false,
     markers: false,
     id: "neonatal_text_box",
   },     
 });

 timeLine2.from('#neonatal_text_box',1,{opacity:0,y:150});
 timeLine2.from('#neonatal_img',1.5,{opacity:0,y:150},0);


 let timeLine3 = new gsap.timeline({
    scrollTrigger: {
     trigger: "#weaning_text_box",
     pin: false,
     start: "top bottom", 
     end: "bottom center", 
     scrub: false,
     markers: false,
     id: "weaning_text_box",
   },     
 });

 timeLine3.from('#weaning_text_box',1,{opacity:0,y:150});
 timeLine3.from('#weaning_img',1.5,{opacity:0,y:150},0);

 let timeLine4 = new gsap.timeline({
    scrollTrigger: {
     trigger: "#puppyhood_text_box",
     pin: false,
     start: "top bottom", 
     end: "bottom center", 
     scrub: false,
     markers: false,
     id: "puppyhood_text_box",
   },     
 });

 timeLine4.from('#puppyhood_text_box',1,{opacity:0,y:150});
 timeLine4.from('#puppyhood_img',1.5,{opacity:0,y:150},0);

 let timeLine5 = new gsap.timeline({
    scrollTrigger: {
     trigger: "#adult_text_box",
     pin: false,
     start: "top bottom", 
     end: "bottom center", 
     scrub: false,
     markers: false,
     id: "adult_text_box",
   },     
 });

 timeLine5.from('#adult_text_box',1,{opacity:0,y:150});
 timeLine5.from('#adult_img',1.5,{opacity:0,y:150},0);


//  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
//   })