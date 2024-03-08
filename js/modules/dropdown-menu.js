import outisideClick from "./outsideclick.js";

export default class DropDown {
  constructor(dropdonwMenus, events){
     this.dropdonwMenus = document.querySelectorAll(dropdonwMenus);

     // Define argumento padrao em events
     // caso o usuario nao defina
     if (events === undefined) this.events = ['touchstart', 'click'];
     else this.events = events;

     this.activeClass = 'active';
     this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  // Ativa o dropdown menu e adiciona
  // a funcao que observa o ckick fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outisideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  };

  // adiciona os eventos ap dropdown menu
  addDropdownMenusEvent(){
    this.dropdonwMenus.forEach((menu) => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  };

  init(){
    if(this.dropdonwMenus.length){
      this.addDropdownMenusEvent();
    }
    return this;
  };
  
};

