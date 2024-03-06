export default class ScrollSuave {
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined){
      this.options = {behavior: 'smooth', block: 'start',}
    } else {
      this.options = options;
    }
    this.schollToSection = this.schollToSection.bind(this)
  };
  
   schollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
  
    section.scrollIntoView(this.options);
  };
  
  addLinkEvent(){
    this.linksInternos.forEach((link) => {
    link.addEventListener('click', this.schollToSection);
  })
  };
  
  init(){
    if(this.linksInternos.length){
      this.addLinkEvent();
    }
   return this
  }
  };