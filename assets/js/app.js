
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

// Tiny bit of JS to ensure that the notch doesn't move about when you resize the screen


const delay = 300;
let afterResize;
let currentStyle;

window.onresize = function(){
	document.body.classList.add('is-resizing');
  	clearTimeout(afterResize);
  	afterResize = setTimeout(() => document.body.classList.remove('is-resizing'), delay);
};

document.getElementById('zoom').addEventListener('click', () => {
	document.body.classList.add('is-resizing');
	setTimeout(() => 		document.body.classList.remove('is-resizing'), delay)
});


// Generating random gradient

let dimension = 1000; // Size of tile to be download px

const styles = ['colourful', 'moody', 'neon', 'abstract', 'grayscale', 'light-leak'];

const generateBtn = document.querySelector('[for="random"]');
const canvas = document.querySelector('.canvas');

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Generate randomised gradients

generateBtn.addEventListener('click', generateOrSave);

function generateOrSave(e) {
	
	if (e.metaKey) {
		saveGradient(e);
	} else {
		generateGradient();
	}
}

function generateGradient() {
	
	// Assign style
	const newStyle = styles[Math.floor(Math.random() * styles.length)];
	
	// console.log(styles, styles[Math.floor(Math.random() * styles.length)]);
	
	if (currentStyle) canvas.classList.remove(`random--${currentStyle}`);
	
	currentStyle = newStyle;
	canvas.classList.add(`random--${newStyle}`);
	
	// Loop through each canvas and assign a bunch of random CSS variables
	const shapes = canvas.getElementsByClassName('shape');

	document.body.style.setProperty('--r-h', `${random(0, 360)}deg`);
	document.body.style.setProperty('--r-s', `${random(40, 90)}%`);
	document.body.style.setProperty('--r-l', `${random(55, 90)}%`);

	Object.values(shapes).forEach((shape) => {
		shape.style.setProperty('--r-h', `${random(0, 360)}deg`);
		shape.style.setProperty('--r-s', `${random(40, 90)}%`);
		shape.style.setProperty('--r-l', `${random(55, 90)}%`);

		shape.style.setProperty('--w', `${random(0, 30) + 85}%`);
		shape.style.setProperty('--b-r', `${random(20, 60)}%`);
		shape.style.setProperty('--b', `${random(5, 75) / 10}em`);
		shape.style.setProperty('--x', `${random(0, 100) - 50}%`);
		shape.style.setProperty('--y', `${random(0, 100) - 50}%`);
		shape.style.setProperty('--s-x', `${1 + ((random(0, 130) - 30) / 100)}`);
		shape.style.setProperty('--s-y', `${1 + ((random(0, 130) - 30) / 100)}`);
		shape.style.setProperty('--r', `${random(0, 720) - 360}deg`);
	})
}


// Convert RGB colour to Hex
// Needed for api.color.pizza call
const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`


// Save gradient
function saveGradient(e) {
	const gradient = canvas;
	const rect = gradient.getBoundingClientRect();
	const scale = dimension / rect.width

	//	Get canvas background color
	const color = rgba2hex(window.getComputedStyle(gradient, null).getPropertyValue('background-color'));
	
	console.log(color, scale, rect);
	
	// Get name of color for use in file name
	fetch(`https://api.color.pizza/v1/${color.substring(1)}`)
		.then(c => c.json())
		.then(c => {
			// console.log(c);
		
			// Convert DOM to canvas
			domtoimage.toPng(gradient, {
				bgColor: '#ffffff',
				width: rect.width * scale,
				height: rect.height * scale,
				style: {
					  'transform': `scale(${scale})`,
					  'transform-origin': 'top left'
				 }
			})
			// Download image
			.then(function (dataUrl) {
				// const img = new Image();
				// img.src = dataUrl;
				// document.body.appendChild(img);
				
				// Render canvas as a link and click dat
				const link = document.createElement('a');
				link.download = `${currentStyle}-${c['paletteTitle'].toLowerCase().replaceAll(' ','-')}-gradient`;
				link.href = dataUrl;
				link.click();
			})
	});
	
}
