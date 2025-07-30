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
