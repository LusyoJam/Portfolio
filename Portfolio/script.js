const
lucky9 = "https://github.com/Lusyoo/Lucky-9-Project",
etchysketchy = "https://github.com/Lusyoo/EtchySketchy",
caltor = "https://github.com/Lusyoo/Caltor",
urlshorty = "https://github.com/Lusyoo/UrlShorty",
tasktracker = "https://github.com/Lusyoo/Task-Tracker",
librosys = "https://github.com/Lusyoo/LibroSys",
email = "https://mail.google.com/mail/?view=cm&to=jlouisse.plete@gmail.com&su=Hello&body=Hi there!",
linkedin = "https://www.linkedin.com/in/james-louisse-plete/",
github = "https://github.com/Lusyoo",
indexProjContainer = document.querySelector(".index-project-container"),
projectContainer = document.querySelector(".project-container"),
socialsContainer = document.querySelector(".contact-socials-container");


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 }); // triggers when 10% of element is visible

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// header

const 
burger = document.querySelector(".burger"),
burgerFirstLine = document.querySelector(".burger").firstElementChild,
burgerSecondLine = burgerFirstLine.nextElementSibling,
burgerThirdLine = burgerSecondLine.nextElementSibling,
navBar = document.querySelector(".navigation-bar");

burger.addEventListener('click', () => {
  navBar.classList.toggle("display-none");
  navBar.classList.toggle("flex");
  burgerFirstLine.style.transform = navBar.classList.contains("display-none") ? "rotate(0deg) translate(0, 0)" : "rotate(45deg) translate(7.5px, 7.5px)";
  burgerSecondLine.style.opacity = navBar.classList.contains("display-none") ? "1" : "0";
  burgerThirdLine.style.transform = navBar.classList.contains("display-none") ? "rotate(0deg) translate(0, 0)" : "rotate(-45deg) translate(7.5px, -7.5px)";
});

const openLink = (link) => window.open(link, "_blank"); 


if (document.querySelector(".contact-socials-container")) {
  socialsContainer.addEventListener('click', e => {

    switch(e.target.id) {
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


if (document.querySelector(".index-project-container")) {
  indexProjContainer.addEventListener('click', e => {

    switch(e.target.id) {
      case "lucky-9":
        openLink(lucky9);
        break;
      
      case "etchysketchy":
        openLink(etchysketchy);
        break;
      
      case "librosys":
        openLink(librosys);
        break;
      
      case "tasktracker":
        openLink(tasktracker);
        break;
    }
  });
}



if (document.querySelector(".project-container")) {
  projectContainer.addEventListener('click', e => {

  switch(e.target.id) {
    case "lucky-9":
      openLink(lucky9);
      break;
    
    case "etchysketchy":
      openLink(etchysketchy);
      break;
    
    case "librosys":
      openLink(librosys);
      break;
    
    case "tasktracker":
      openLink(tasktracker);
      break;

    case "urlshorty":
      openLink(urlshorty);
      break;
    
    case "caltor":
      openLink(caltor);
      break;
    }
  });
}







