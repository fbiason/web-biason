(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
  top: 0,
   behavior: "smooth",
  });
    };

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });


  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: ".portfolio-details-lightbox",
    width: "90%",
    height: "90vh",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();


    /**
   * Funcionalidades Portfolio
   */
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      spaceBetween: 60,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    
  
  
    
  /**
   * Back to top button
   */
// Función para mostrar u ocultar el botón "Volver arriba" según la posición del usuario en la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

// Función para hacer scroll suavemente al principio de la página cuando se hace clic en el botón "Volver arriba"
document.getElementById("back-to-top-btn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});


document.addEventListener("DOMContentLoaded", function() {
  // Obtén todos los enlaces del navbar
  var navLinks = document.querySelectorAll("#navbar a.nav-link");

  // Agrega un event listener a cada enlace del navbar
  navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el identificador de la sección a la que el enlace debe dirigirse
      var targetId = navLink.getAttribute("href").substring(1);

      // Obtiene la sección correspondiente a partir de su identificador
      var targetSection = document.getElementById(targetId);

      // Calcula la posición de la sección en la página
      var sectionOffset = targetSection.offsetTop;

      // Realiza el desplazamiento suave hacia la sección
      window.scrollTo({
        top: sectionOffset,
        behavior: "smooth" // Desplazamiento suave
      });
    });
  });
});


window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
      navbar.classList.add("show", "fixed-top");
  } else {
      navbar.classList.remove("show", "fixed-top");
  }
});
