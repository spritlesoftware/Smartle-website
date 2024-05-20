
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

// Percentage increment effect


document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.percentage');
    const speed = 200; // Adjust the speed of the animation here

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-percentage');
                    const count = +counter.innerText.replace('%', '');

                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment) + '%';
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + '%';
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.6 // Adjust this threshold as needed
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


