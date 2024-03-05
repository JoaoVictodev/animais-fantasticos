export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add('animation');
      } else if (section.classList.contains('animation')) {
        section.classList.remove('animation');
      }
    })
  }


  if (sections.length) {
    animaScroll()
    window.addEventListener('scroll', animaScroll);
  }
}