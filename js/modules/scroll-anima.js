import debaunce from "./debaunce.js";

export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debaunce(this.checkDistance.bind(this), 200)
  };
   

  // pega a distancia em relacao ao topo da pagina
  getDistance(){
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  };

  // verifica a distancia em cada objeto
  // em relacao ao sroll do site
  checkDistance(){
      this.distance.forEach((item) => {
        if(window.pageYOffset > item.offset){
          item.element.classList.add('animation');
        } else if (item.element.classList.contains('animation')) {
          item.element.classList.remove('animation');
        }
    });
  };

  init(){
    if(this.sections){
      this.getDistance();
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  // remove o evento de scroll
  stop(){
    window.removeEventListener('scroll', this.checkDistance)
    }
}