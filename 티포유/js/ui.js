(function (window) {
  // 텍스트 변수
  const REM = "rem";
  const ONCLASS = "on";
  
  // 변수
  const slides = document.querySelectorAll(".slide");
  if(!slides) {
    return;
  }
 
  // 햄버거 버튼 (전체 페이지 공통 함수)
  function hbgBtnEvHandler(){
    const hbgBtn = document.querySelector(".btn-hbg");

    hbgBtn.addEventListener("click", function(){
        hbgBtn.classList.toggle(ONCLASS);
    });
  };

  // 메인 두번째 슬라이드 width/height 자동조절
  function slideAutoWidthHeight() {
    const slideCon = document.querySelector("#cont-02");
    if(!slideCon) {
      return;
    }
    const conLef = slideCon.querySelector(".cont-left");
    const conRig = slideCon.querySelector(".cont-right");
    
    [].forEach.call(slides, function (slide) {
      const conRect = conLef.getBoundingClientRect();
      const conLefW = conRect.width;
      const conPoLeft = conRect.left;
      const winW = window.innerWidth;

      conRig.style.width = (winW - (conLefW + conPoLeft + 17)) * 0.1 + REM;

      const conParent = conRig.closest(".container"); 
      conParent.style.height = (slide.getBoundingClientRect().height) * 0.1 + REM;
    });
  }

  // resize
  window.addEventListener("resize", function () {
    slideAutoWidthHeight();
  });

  document.addEventListener("DOMContentLoaded", function () {
    slideAutoWidthHeight();
    hbgBtnEvHandler();
  });
})(window);
