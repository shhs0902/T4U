(function() {

  // 텍스트 변수
  const ONSTRING = "on";
  const REMSTRING = "rem";

  // function headerFixHandler() {
  //   const header = document.querySelector("header");

  //   let scrollPos = window.scrollY;
  //   console.log(scrollPos);
  //   if(scrollPos > 50) {
  //     header.style.position = "fixed";
  //   }
  // }
  // window.addEventListener("scroll", function(){
  //   headerFixHandler();
  // });

  
  const nav = document.querySelector("nav");

  // 햄버거 버튼(전체 페이지 공통)
  function hbgBtnEvHandler(){
    const hbgBtn = document.querySelector(".btn-hbg");

    hbgBtn.addEventListener("click", function(){
        nav.classList.add(ONSTRING);
    });
  };

  // gnb 메뉴 닫기(전체 페이지 공통)
  function gnbMenuClose(){
    const closeBtn = document.querySelector(".btn-close");
    if(!closeBtn) {
      return;
    }

    closeBtn.addEventListener("click", function(){
      nav.classList.remove(ONSTRING);
  });
  }

 

  // 컨텐츠 슬라이드 width/height
  function slideContainerWidthCalc() {
    const slideCon = document.querySelector("#cont-02");
    if(!slideCon) {
      return;
    }
    const conLef = slideCon.querySelector(".cont-left");
    const conRig = slideCon.querySelector(".cont-right");
    const slides = conRig.querySelectorAll(".slide");
    if(!slides) {
      return;
    }
    
    [].forEach.call(slides, function (slide) {
   
      const conRect = conLef.getBoundingClientRect();
      const conLefW = conRect.width;
      const conPoLeft = conRect.left;
      const winW = window.innerWidth;

      const container = document.querySelector("#cont-02 .container");

      conRig.style.width = (winW - (conLefW + conPoLeft + 17)) * 0.1 + REMSTRING;
      container.style.height = (slide.getBoundingClientRect().height) * 0.1 + REMSTRING;
    });
  }

  const tabBtn = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab-cont");
  const currentUrl = location.href;
  
  // tab
  

  function tabEventHandler(btn, idx) {
    if(!tabBtn) {
      return;
    }
    // return function() {
      [].forEach.call(tabBtn, function(item, x){
        item.classList.remove(ONSTRING);
        tabContent[x].classList.remove(ONSTRING);
      });
      
      tabContent[idx].classList.add(ONSTRING);
  
      btn.classList.add(ONSTRING);
    // }
  }

  function locationHandler() {
    const aTag = document.querySelectorAll("a");
    [].forEach.call(aTag, function(a, ix){
      const compareUrl = a.getAttribute("href");
      const active = currentUrl.indexOf(compareUrl);
     
      a.addEventListener("click", function(){
      console.log(compareUrl, currentUrl, active)

        // if(active > -1) {
        //   tabEventHandler();
        // }
      });
    });
  }

  locationHandler();

  function loopHandler() {
    [].forEach.call(tabBtn, function(btn, idx){
      btn.addEventListener("click", function(e){
        e.preventDefault();
        tabEventHandler(btn, idx);
      });
      // locationHandler(btn, idx);
    });
  }

  

  // 회원가입
  // const formDepth02 = document.querySelector(".form-depth.depth02");
  // const checkInput = document.querySelectorAll(".check-gorup .form-depth.deapth01 input");
  // const row = document.querySelectorAll(".row-multiple .row-group");

  // function joinDepthCheckHandler() {
  //   if(!checkInput || !row) {
  //     return;
  //   }

    
  // }
  const listDepth02 = document.querySelectorAll(".list-item-depth02");
  // function dropMenuHeightCalc() {
  //   [].forEach.call(listDepth02, function(item, idx){
  //     const itemH = item.clientHeight;

  //     item.style.display = "block";
  //   });
  // }
  function boardListDropHandler() {
    const targetLi = document.querySelectorAll(".list-item-depth01 li");
  

    [].forEach.call(targetLi, function(li, i){
      li.addEventListener("click", function() {
        
        this.classList.toggle(ONSTRING);
        // [].forEach.call(listDepth02, function(item, idx){
        //   const itemH = item.clientHeight;
    
        //   item.style.display = "block";
        // });
      });
    });
    
  }

  // function loopEventHandler() {
    
  // }

  
  

  function init() {
    hbgBtnEvHandler();
    gnbMenuClose();
    slideContainerWidthCalc();
    // tabEventHandler();
    // joinDepthCheckHandler();
    loopHandler();
    boardListDropHandler();
    // loopEventHandler();

    window.addEventListener("resize", function () {
      slideContainerWidthCalc();
    });
  }

  

  document.addEventListener("DOMContentLoaded", function () {
    init();

  });
}(window));
