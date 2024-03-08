export default class iModal{
  constructor(botaoAbrir, botaoFechar, containerModal){
   this.botaoAbrir = document.querySelector(botaoAbrir);
   this.botaoFechar = document.querySelector(botaoFechar);
   this.containerModal = document.querySelector(containerModal);


   // Bind this ao callBack para 
   // fazer referencia ao objeto
   // da classe
   this.eventTogglrModal = this.eventTogglrModal.bind(this)
   this.clickForaModal = this.clickForaModal.bind(this)
  }

  // Abri ou fecha o modal
   toggleModal() {
    this.containerModal.classList.toggle('anime')
  }

  // Adiciona o evento de toggle ao modal
  eventTogglrModal(event){
    event.preventDefault();
    this.toggleModal();
  }


  // fecha modal ao clicar ao lado de fora
   clickForaModal(event) {
    if (event.target === this.containerModal)
      this.toggleModal(event);
  };

  // Adiciona eventos aos elementos modal
  addModalEvent(){
    this.botaoAbrir.addEventListener('click', this.eventTogglrModal);
    this.botaoFechar.addEventListener('click',  this.eventTogglrModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvent()
    }
    return this
  }
}

