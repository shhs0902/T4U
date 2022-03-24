(function (window) {
  const slideCon = document.querySelector("#cont-02");
  const conLef = slideCon.querySelector(".cont-left");
  const conRig = slideCon.querySelector(".cont-right");
  const slides = conRig.querySelectorAll(".slide");

  function slideContainerWidthHandler() {
    if(!slides) {
      return;
    }
    [].forEach.call(slides, function (slide) {
      //   const slideW = slide.getBoundingClientRect().width;
      //   const slideLength = slides.length;
      const conLefW = conLef.getBoundingClientRect().width;
      const conPoLeft = conLef.getBoundingClientRect().left;
      const winW = window.innerWidth;

      conRig.style.width = (winW - (conLefW + conPoLeft + 17)) * 0.1 + "rem";
    });
  }

  function hbgBtnEvHandler(){
    const hbgBtn = document.querySelector(".btn-hbg");
    const hbgBar = document.querySelectorAll("btn-hbg span");

      hbgBtn.addEventListener("click", function(){
        hbgBtn.classList.toggle("on");
    });
  };





  window.addEventListener("resize", function () {
    console.log("@@");
    slideContainerWidthHandler();
  });
  document.addEventListener("DOMContentLoaded", function () {
    slideContainerWidthHandler();
    hbgBtnEvHandler();
  });
})(window);
