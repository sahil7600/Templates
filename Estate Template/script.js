// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
// });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      376: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      }
    }
  });


  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      376: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      }
    }
    // breakpoints: {
    //   370: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   }
    // }
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
  
  

  const showOnPx = 100;
  const backToTopButton = document.querySelector(".scroll-up");
  const scrollContainer = () => document.documentElement || document.body;
  document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    },);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


function show() {
  var x = document.getElementById("para");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function s22() {
  var y = document.getElementById("s11");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}










