var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});


const showOnPx = 100;
const backToTopButton = document.querySelector(".bottomup");
const scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

function heroHeight(){
  let heroHeight=$(".background-hero").outerHeight();
  var header = $(".navigation1");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= heroHeight) {
          header.removeClass('navigation1').addClass("nav-fix");
      } else {
          header.removeClass("nav-fix").addClass('navigation1');
      }
  });
};
heroHeight();
$(window).resize(function(){
  heroHeight();
});


function onCity(evt, cityName ) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("appartment-plan");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sketch");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("default").click();


