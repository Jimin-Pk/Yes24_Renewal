document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const totalImages = 10;
    const slider = document.querySelector('.slider');

    function showNextImage() {
        index++;
        if (index === totalImages) {
            index = 0;
        }
        repeatSlide();
    }

    function repeatSlide() {
        const slideWidth = document.querySelector('.banimg').clientWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function(){
    let imgIndex = 0;
    const allImages = 3;
    const sb = document.querySelector('#sb');

    function showSmallImage(){
        imgIndex++;
        if (imgIndex === allImages) {
            imgIndex = 0;
        }
        repeatImage();
    }

    function repeatImage(){
        const imageWidth = document.querySelector('.sbii').clientWidth;
        sb.style.transform = `translateX(-${imgIndex * imageWidth}px)`
    }

    setInterval(showSmallImage, 3000);
});

document.addEventListener("DOMContentLoaded", function() {

    const ulwrap = document.getElementById('ulwrap');
    const buwrap = document.getElementById('buwrap');
    const prevBtn = ulwrap.querySelector('#prev');
    const nextBtn = ulwrap.querySelector('#next');
    const dotBtns = document.querySelectorAll('.dotbtn');

    var nowIndex = 0; 
    var totalSlides = dotBtns.length;
    var imgWidth = 500; 

    function moveSlide(index) {
        buwrap.style.transform = `translateX(-${index*imgWidth}px)`;
        updateDots(index);
        if(window.innerWidth > 1470) return;
    }

    function updateDots(index) {
        for (let i = 0; i < dotBtns.length; i++) {
            dotBtns[i].classList.remove('on');
        }
        dotBtns[index].classList.add('on');
    }

    prevBtn.addEventListener('click', function(){
        nowIndex = (nowIndex - 1 + totalSlides) % totalSlides;
        moveSlide(nowIndex);
    });

    nextBtn.addEventListener('click', function() {
        nowIndex = (nowIndex + 1) % totalSlides; 
        moveSlide(nowIndex);
    });

    for (let i = 0; i <dotBtns.length; i++) {
        (function(index) {
            dotBtns[i].addEventListener('click', function () {
                nowIndex = index; 
                moveSlide(nowIndex);
            });
        })(i);
    }

    moveSlide(nowIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const ccwrap = document.getElementById('ccwrap');
    const clwrap = document.getElementById('clwrap');
    const cclist = clwrap.querySelector('#cclist');
    const prevBtn = ccwrap.querySelector('#prev');
    const nextBtn = ccwrap.querySelector('#next');
    const ccl = cclist.querySelectorAll('.ccl');

    var nowIndex = 0;
    var totalSlides = ccl.length;
    var cclWidth = 250;

    function moveSlide(index) {
        cclist.style.transform = `translateX(-${index * cclWidth}px)`;
        if(window.innerWidth > 1020) return;
    }

    prevBtn.addEventListener('click', function () {
        nowIndex = (nowIndex - 1 + totalSlides) % totalSlides;
        moveSlide(nowIndex);
    });

    nextBtn.addEventListener('click', function () {
        nowIndex = (nowIndex + 1) % totalSlides;
        moveSlide(nowIndex);
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const classtf = document.getElementById('classtf');
    const classImg = document.getElementById('classimg');
    const prevBtn = classtf.querySelector('#prev');
    const nextBtn = classtf.querySelector('#next');
    const dotBtn1s = document.querySelectorAll('.dotbtn1');

    var ctfIndex = 0; 
    var totalSlides = dotBtn1s.length;
    var imgWidth = 500; 

    function moveSlide(index) {
        classImg.style.transform = `translateX(-${index*imgWidth}px)`;
        updateDots(index);
    }

    function updateDots(index) {
        for (let i = 0; i < dotBtn1s.length; i++) {
            dotBtn1s[i].classList.remove('on');
        }
        dotBtn1s[index].classList.add('on');
    }

    prevBtn.addEventListener('click', function(){
        ctfIndex = (ctfIndex - 1 + totalSlides) % totalSlides;
        moveSlide(ctfIndex);
    });

    nextBtn.addEventListener('click', function() {
        ctfIndex = (ctfIndex + 1) % totalSlides; 
        moveSlide(ctfIndex);
    });

    for (let i = 0; i <dotBtn1s.length; i++) {
        (function(index) {
            dotBtn1s[i].addEventListener('click', function () {
                ctfIndex = index; 
                moveSlide(ctfIndex);
            });
        })(i);
    }

    moveSlide(ctfIndex);
});

document.addEventListener("DOMContentLoaded", function() {

    const review = document.getElementById('review');
    const poprv = document.getElementById('poprv');
    const prevBtn = review.querySelector('#prev');
    const nextBtn = review.querySelector('#next');
    const dotBtn2s = document.querySelectorAll('.dotbtn2');

    var rvIndex = 0; 
    var totalSlides = dotBtn2s.length;
    var imgWidth = 500; 

    function moveSlide(index) {
        poprv.style.transform = `translateX(-${index*imgWidth}px)`;
        updateDots(index);
    }

    function updateDots(index) {
        for (let i = 0; i < dotBtn2s.length; i++) {
            dotBtn2s[i].classList.remove('on');
        }
        dotBtn2s[index].classList.add('on');
    }

    prevBtn.addEventListener('click', function(){
        rvIndex = (rvIndex - 1 + totalSlides) % totalSlides;
        moveSlide(rvIndex);
    });

    nextBtn.addEventListener('click', function() {
        rvIndex = (rvIndex + 1) % totalSlides; 
        moveSlide(rvIndex);
    });

    for (let i = 0; i <dotBtn2s.length; i++) {
        (function(index) {
            dotBtn2s[i].addEventListener('click', function () {
                rvIndex = index; 
                moveSlide(rvIndex);
            });
        })(i);
    }

    moveSlide(rvIndex);
});

document.addEventListener("DOMContentLoaded", function() {

    const event = document.getElementById('event');
    const evtwrap = document.getElementById('evtwrapper');
    const prevBtn = event.querySelector('#prev');
    const nextBtn = event.querySelector('#next');
    const dotBtn3s = event.querySelectorAll('.dotbtn3');

    var evtIndex = 0; 
    var totalSlides = dotBtn3s.length;
    var slideWidth = 590; 

    function moveSlide(index) {
        evtwrap.style.transform = `translateX(-${index*slideWidth}px)`;
        updateDots(index);
    }

    function updateDots(index) {
        for (let i = 0; i < dotBtn3s.length; i++) {
            dotBtn3s[i].classList.remove('on');
        }
        dotBtn3s[index].classList.add('on');
    }

    prevBtn.addEventListener('click', function(){
        evtIndex = (evtIndex - 1 + totalSlides) % totalSlides;
        moveSlide(evtIndex);
    });

    nextBtn.addEventListener('click', function() {
        evtIndex = (evtIndex + 1) % totalSlides; 
        moveSlide(evtIndex);
    });

    for (let i = 0; i <dotBtn3s.length; i++) {
        (function(index) {
            dotBtn3s[i].addEventListener('click', function () {
                evtIndex = index; 
                moveSlide(evtIndex);
            });
        })(i);
    }

    moveSlide(evtIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const cremaSelect = document.getElementById('cremaselect');
    const wcswrap = document.getElementById('wcswrap');
    const cclist = wcswrap.querySelector('#cclist');
    const prevBtn = cremaSelect.querySelector('#prev');
    const nextBtn = cremaSelect.querySelector('#next');
    const ccl = cclist.querySelectorAll('.ccl');

    var nowIndex = 0;
    var totalSlides = ccl.length;
    var cclWidth = 250;

    function moveSlide(index) {
        cclist.style.transform = `translateX(-${index * cclWidth}px)`;
        if(window.innerWidth > 1020) return;
    }

    prevBtn.addEventListener('click', function () {
        nowIndex = (nowIndex - 1 + totalSlides) % totalSlides;
        moveSlide(nowIndex);
    });

    nextBtn.addEventListener('click', function () {
        nowIndex = (nowIndex + 1) % totalSlides;
        moveSlide(nowIndex);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cremaShop = document.getElementById('cremashop');
    const wshwrap = document.getElementById('wshwrap');
    const cslist = wshwrap.querySelector('#cslist');
    const prevBtn = cremaShop.querySelector('#prev');
    const nextBtn = cremaShop.querySelector('#next');
    const csl = cslist.querySelectorAll('.csl');

    var nowIndex = 0;
    var totalSlides = csl.length;
    var cslWidth = 250;

    function moveSlide(index) {
        cslist.style.transform = `translateX(-${index * cslWidth}px)`;
        if(window.innerWidth > 1020) return;
    }

    prevBtn.addEventListener('click', function () {
        nowIndex = (nowIndex - 1 + totalSlides) % totalSlides;
        moveSlide(nowIndex);
    });

    nextBtn.addEventListener('click', function () {
        nowIndex = (nowIndex + 1) % totalSlides;
        moveSlide(nowIndex);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const container = document.querySelector('#container');
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', e => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const fdl = document.querySelector('#fdl');
  let isDown = false;
  let startX;
  let scrollLeft;

  fdl.addEventListener('mousedown', e => {
    isDown = true;
    fdl.classList.add('active');
    startX = e.pageX - fdl.offsetLeft;
    scrollLeft = fdl.scrollLeft;
  });

  fdl.addEventListener('mouseleave', () => {
    isDown = false;
    fdl.classList.remove('active');
  });

  fdl.addEventListener('mouseup', () => {
    isDown = false;
    fdl.classList.remove('active');
  });

  fdl.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - fdl.offsetLeft;
    const walk = x - startX;
    fdl.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const valueList = document.querySelector('#valuelist');
  let isDown = false;
  let startX;
  let scrollLeft;

  valueList.addEventListener('mousedown', e => {
    isDown = true;
    valueList.classList.add('active');
    startX = e.pageX - valueList.offsetLeft;
    scrollLeft = valueList.scrollLeft;
  });

  valueList.addEventListener('mouseleave', () => {
    isDown = false;
    valueList.classList.remove('active');
  });

  valueList.addEventListener('mouseup', () => {
    isDown = false;
    valueList.classList.remove('active');
  });

  valueList.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - valueList.offsetLeft;
    const walk = x - startX;
    valueList.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const pmWrapper = document.querySelector('#pmwrapper');
  let isDown = false;
  let startX;
  let scrollLeft;

  pmWrapper.addEventListener('mousedown', e => {
    isDown = true;
    pmWrapper.classList.add('active');
    startX = e.pageX - pmWrapper.offsetLeft;
    scrollLeft = pmWrapper.scrollLeft;
  });

  pmWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    pmWrapper.classList.remove('active');
  });

  pmWrapper.addEventListener('mouseup', () => {
    isDown = false;
    pmWrapper.classList.remove('active');
  });

  pmWrapper.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - pmWrapper.offsetLeft;
    const walk = x - startX;
    pmWrapper.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const slWrapper = document.querySelector('#slwrapper');
  let isDown = false;
  let startX;
  let scrollLeft;

  slWrapper.addEventListener('mousedown', e => {
    isDown = true;
    slWrapper.classList.add('active');
    startX = e.pageX - slWrapper.offsetLeft;
    scrollLeft = slWrapper.scrollLeft;
  });

  slWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    slWrapper.classList.remove('active');
  });

  slWrapper.addEventListener('mouseup', () => {
    isDown = false;
    slWrapper.classList.remove('active');
  });

  slWrapper.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slWrapper.offsetLeft;
    const walk = x - startX;
    slWrapper.scrollLeft = scrollLeft - walk;
  });
});

