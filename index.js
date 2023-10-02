const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');
const logo = document.querySelectorAll('.logo');


Navicon.addEventListener('click', () => {
    linksContainer.classList.add('active');
    console.log('clicked')
  });
  
  function closeMenu() {
    linksContainer.classList.remove('active');
  }
  closeIcon.addEventListener('click', () => {
    closeMenu();
  });

 

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        closeMenu()
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Remove the "#" from href
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth", // Add smooth scrolling behavior
            
          });
         
        }
      });
    });
  });
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
  counter.innerText = '0'
  const updateCounter = () => {
  const target = +counter.getAttribute('data-target')
  const c = +counter.innerText
  const increment = target / 200
  if(c < target) {
  counter.innerText = `${Math.ceil(c + increment)}`
  setTimeout(updateCounter, 1)
  } else {
  counter.innerText = target
  }
  }
  updateCounter()
  })
  







  
  
  
  
  
  