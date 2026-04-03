const

indexProjContainer = document.querySelector(".index-project-container"),
projectContainer = document.querySelector(".project-container"),
socialsContainer = document.querySelector(".contact-socials-container"),
burger = document.querySelector(".burger"),
burgerFirstLine = burger.firstElementChild,
burgerSecondLine = burgerFirstLine.nextElementSibling,
burgerThirdLine = burgerSecondLine.nextElementSibling,
navBar = document.querySelector(".navigation-bar"),

viewProject = document.querySelector(".view-project"),
prevProj = document.querySelector(".prev-proj"),
nextProj = document.querySelector(".next-proj"),
techExpand = document.querySelectorAll(".tech-expand");


let projNumber = 0;


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 }); // triggers when 10% of element is visible

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// header

burger.addEventListener('click', () => {
  navBar.classList.toggle("display-none");
  navBar.classList.toggle("flex");
  burgerFirstLine.style.transform = navBar.classList.contains("display-none") ? "rotate(0deg) translate(0, 0)" : "rotate(45deg) translate(7.5px, 7.5px)";
  burgerSecondLine.style.opacity = navBar.classList.contains("display-none") ? "1" : "0";
  burgerThirdLine.style.transform = navBar.classList.contains("display-none") ? "rotate(0deg) translate(0, 0)" : "rotate(-45deg) translate(7.5px, -7.5px)";
});

const openLink = (link) => window.open(link, "_blank"); 


// CONTACT

if (document.querySelector(".contact-socials-container")) {
  socialsContainer.addEventListener('click', e => {

    switch(e.target.clos) {
      case "linkedin":
        openLink(linkedin);
        break;
      
      case "github":
        openLink(github);
        break;
      
      case "email":
        openLink(email);
        break;
  }});
}


// PROJECT

if (document.querySelector(".index-project-container")) {
  let current = 0;

  const 
  slides = document.querySelectorAll('.project'),
  slidesContainer = document.querySelector('.proj-wrapper'),
  projectCircles = [...document.querySelectorAll(".proj-circles")];

  const updateDots = (current) => projectCircles[current].classList.toggle("active-circle");

  const goTo = (index) => {  
    
    if (index === current + 1 || index === current - 1) updateDots(current);
    current = (index + slides.length) % slides.length; 
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    updateDots(current);
  }

  document.querySelector(".next-proj").addEventListener('click', () => {
    goTo(current + 1);
    isClicked = true;
  });

  document.querySelector(".prev-proj").addEventListener('click', () => {
    goTo(current - 1);
    isClicked = true;
  });

  const autoPlay = setInterval(() => goTo(current + 1), 2500);
};

const removeElement = [...document.querySelectorAll(".mark-none")];

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 768 && window.innerWidth < 1024) {
    removeElement.forEach(el => el.classList.toggle("display-none"));
  }
});


// techExpand.forEach(el => {
//   el.addEventListener('click', (e) => {
//     const parent = e.target.parentElement.classList;

//     if (parent.contains("urlshorty")) {
//       parent.children.filter
//     }
//   })
// });











