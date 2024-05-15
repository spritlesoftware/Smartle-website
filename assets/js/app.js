
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    });
  });
});
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    speed: 1000,
    items: 1,
  });
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPreviousBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  owl.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    var totalItems = event.item.count;
    if (currentIndex === 0) {
      $(".customPreviousBtn").addClass("disabled");
    } else {
      $(".customPreviousBtn").removeClass("disabled");
    }

    if (currentIndex === totalItems - 1) {
      $(".customNextBtn").addClass("disabled");
    } else {
      $(".customNextBtn").removeClass("disabled");
    }
  });
});
var swiper = new Swiper("#owl-carousell", {
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1500:{
      slidesPerView:4
    }
  },
});
var swiper = new Swiper(".digi-logo-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    },
  },
});
var swiper = new Swiper("#testimonial", {
  slidesPerView: 1,
  spaceBetween: 24,
  dots: "true",
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable clickable pagination bullets
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
});
// function change(id) {
//   var element = document.getElementById(id);
//   if (element.classList.contains("empty-value")) {
//     element.classList.remove("empty-value");
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  function btnClick(e) {
    e.preventDefault();
    const visitPM = document.getElementById("visitors-pm").value;
    const orderPM = document.getElementById("order-pm").value;
    const aOV = document.getElementById("aov").value;
    console.log(visitPM, orderPM, aOV);

    if (!visitPM || !orderPM || !aOV) {
      console.log("error");
    } else {
      var conversationsPerMonth = parseFloat(
        // ((visitPM / 3333.33) * 100).toFixed(0)
        (visitPM  * 0.015).toFixed(0)
      );
      var potentialAdditionalSales = parseFloat(
        // ((orderPM / 769.23) * 100).toFixed(0)
         (orderPM * 0.16).toFixed(0)
      );
      var potentialAOV = parseFloat((aOV* 1.1).toFixed(0));
      var addUnlockSales = parseFloat(
        // ((potentialAOV / 76.92) * 100).toFixed(0)
        (potentialAdditionalSales * potentialAOV).toFixed(0)
      );
      var monthlyROI = parseFloat(
        (((addUnlockSales - 15) / 15) * 100).toFixed(0)
      );
      document.getElementById("con-pm").textContent = conversationsPerMonth;
      document.getElementById("addSales").textContent =
        potentialAdditionalSales;
      document.getElementById("potAV").textContent = "$ " + potentialAOV;
      document.getElementById("addSalesFromSpritle").textContent =
        "$ " + addUnlockSales;
      document.getElementById("subsCost").textContent = "$ 15";
      document.getElementById("mon-ROI").textContent = monthlyROI + " %";
      document.getElementById("ROI").classList.remove("d-none");
    }
  }
  const el = document.getElementById("myButton");
if (el) {
  el.addEventListener("click", btnClick);
}
  //document.getElementById("myButton").addEventListener("click", btnClick);
});

var phone = document.getElementsByClassName("input");
if (phone) {
  for (var i = 0; i < phone.length; i++) {
    phone[i].addEventListener("input", function () {
      // Remove any non-numeric characters and specified symbols
      this.value = this.value.replace(/[^0-9+()\-]/g, "");
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let userMessage = document.getElementById("user-message");
  let userMessageLg = document.getElementById("user-message-lg");
  let enterBtn = document.getElementById("enterBtn");
  let messageContainer = document.getElementById("message-container")
  let enterBtnLg = document.getElementById("enterBtnLg");
  let messageContainerLg = document.getElementById("message-container-lg")
  enterBtn.addEventListener("click", btnClick);
  enterBtnLg.addEventListener("click", EnterbtnClickLg);
  function EnterbtnClickLg(e){
    e.preventDefault()
    console.log("BOTTON CLICKED LG " , )
    console.log(userMessageLg.value)
     messageContainerLg.innerHTML += `<div style="display: flex;flex-direction: row;padding:2%;margin-top:1%;background-color: rgb(236, 235, 235);border-radius: 10px;"><img style="margin-right: 3%;border-radius: 50%;" width="10%" height="10%" src="/assets/img/testimonial.png"/><p class="mobile-view-font user-message-display">${userMessageLg.value}</p></div>` 
      userMessageLg.value = ""                                                                                                                                                                                                                                               
    }
  function btnClick(){
    console.log("BOTTON CLICKED")
    console.log(userMessage.value)
     messageContainer.innerHTML += `<div style="display: flex;flex-direction: row;padding:2%;margin-top:1%;background-color: rgb(236, 235, 235);border-radius: 10px;"><img style="margin-right: 3%;border-radius: 50%;" width="10%" height="10%" src="https://chat.smartle.ai:443/media/ead43b4b55e46691af96a3e1646c3a01dd3abb8a3e6f8fe50393bb2f.png"/><p class="mobile-view-font user-message-display">${userMessage.value}</p></div>` 
      userMessage.value = ""
    
  }
})



