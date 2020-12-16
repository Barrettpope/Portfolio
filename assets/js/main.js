// Show Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu on Mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Active Link on Scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home Section Scroll
sr.reveal(".home-title", {});
sr.reveal(".bounce", { delay: 200 });
sr.reveal(".home-img", { origin: "right", delay: 400 });

// About Section Scroll
sr.reveal(".about-img", { delay: 500 });
sr.reveal(".about-subtitle", { delay: 300 });
sr.reveal(".about-profession", { delay: 400 });
sr.reveal(".about-text", { delay: 500 });
sr.reveal(".about-social-icon", { delay: 600, interval: 200 });

// Skills Section Scroll
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills-img", { delay: 400 });

// Portfolio Section Scroll
sr.reveal(".portfolio-img", { interval: 200 });

// Contact Section Scroll
sr.reveal(".contact-subtitle", {});
sr.reveal(".contact-text", { interval: 200 });
sr.reveal(".contact-input", { delay: 400 });
sr.reveal(".contact-button", { delay: 600 });

// Formspree API

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks for reaching out! I'll be in touch soon.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.classList.add("error");
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
