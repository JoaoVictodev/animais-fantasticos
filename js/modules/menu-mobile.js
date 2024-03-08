import outsideClick from "./outsideclick";

export default class MenuMobile {
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // Define argumento padrao em events
    // caso o usuario nao defina
    if(events === undefined) this.events = ['click', 'touchstart']
    else this.events = events
    
    this.openMenu = this.openMenu.bind(this)
  }

    openMenu() {
      this.menuButton.classList.add(this.activeClass);
      this.menuList.classList.add(this.activeClass);
      outsideClick(this.menuList, this.events, () => {
        this.menuButton.classList.remove(this.activeClass);
        this.menuList.classList.remove(this.activeClass);
      });
    }
    
    addMenuMobileEvents(){
        this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init(){
      if (this.menuButton && this.menuList) {
        this.addMenuMobileEvents()
      }
      return this
    }
}