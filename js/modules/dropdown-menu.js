import outsideClick from "./debaunce.js"; 

 function handleClick(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };

export default function initDropDown() {
  const dropdonwMenus = document.querySelectorAll('[data-dropdown]');
  dropdonwMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    });
  });
  

};

