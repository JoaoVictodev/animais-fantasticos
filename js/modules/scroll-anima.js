export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this)
  }
   
  

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowMetade;
      if (sectionTop < 0) {
        section.classList.add('animation');
      } else if (section.classList.contains('animation')) {
        section.classList.remove('animation');
      }
    })
  }
  
  init(){
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll);
  }
  
}