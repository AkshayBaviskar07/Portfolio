document.addEventListener('DOMContentLoaded', function () {
  const downloadCV = document.getElementById('downloadCV');

  if (downloadCV) {
    downloadCV.addEventListener('click', function () {
      window.open('../assets/Akshay_Baviskar_Resume.pdf', '_blank');
    });
  }
});

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

document.querySelectorAll('.header-second nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById('navMenu').classList.remove('active');
  });
});

const roles = ["Developer", "Creator", "Executer"];
const spanElement = document.querySelector(".hero-role span");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100; // ms per character
const deletingSpeed = 50; // ms per character
const pauseDuration = 1500; // ms pause between roles

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
        // Typing
        spanElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;
        
        if (charIndex > currentRole.length) {
            // Pause after typing
            isDeleting = true;
            setTimeout(typeWriter, pauseDuration);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    } else {
        // Deleting
        spanElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;
        
        if (charIndex < 0) {
            // Move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    }
}

// Start the typewriter effect
typeWriter();
