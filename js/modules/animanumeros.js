export default class AnimaNumeros {
  constructor(numeros, observerTarget ,observeAnimation){
     this.numeros = document.querySelectorAll(numeros);
     this.observerTarget = document.querySelector(observerTarget)
     this.observeAnimation = observeAnimation;
     
     // Bind o this do objeto ao callback da mutacao
     this.handleMutation = this.handleMutation.bind(this)
  }


  // Recebe um elemento no dom com numero em seu texto
  // incrementa a patir de 0 ate o numero final
  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if(start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada
  // número selecionado do dom
   animaNumeros() {
      this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }


  // Funcao que ocorre quando a mutacao ocorrer
   handleMutation(mutation) {
   if(mutation[0].target.classList.contains(this.observeAnimation)) {
      this.observer.disconnect();
      this.animaNumeros();
   }
  }
  
  // Adiciona a MutationObsorve para verificar
  // quando a chave animation é adcionado ao target
  addMutationObserver(){
  this.observer = new MutationObserver(this.handleMutation);
  this.observer.observe(this.observerTarget, {attributes: true});
  }

  init(){
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver();
    }
    
    return this
  }
}