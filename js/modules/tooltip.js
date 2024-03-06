export default class Tooltip {
  constructor(tooltip){
    this.tooltips = document.querySelectorAll(tooltip);

    // Bind do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  
  // Move a tooltip com base em seus estilos
  // de acordo com a posicao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY+ 20}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 100}px`;
    }else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }


  // Remove a toolTip e os eventos de mouseMove e MouseLeave
  onMouseLeave({currentTarget}) {
      this.tooltipBox.remove();
      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      currentTarget.removeEventListener('mousemove', this.onMouseMove)
    }
    
  

    // cria tooltipBox e coloca no body
   criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
    
  }
  
  // Cria a tooltip e adciona os eventos 
  //de mouse move e mouseleave ao target
  onMouseOver({currentTarget}){
    // cria a tooltipBox e coloca em uma propiedade
    this.criarTooltipBox(currentTarget);
  
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  // Adiciona os eventos de mouse over 
  // a cada tooltip
  addTooltipsEvent(){
      this.tooltips.forEach((i) =>{
         i.addEventListener('mouseover', this.onMouseOver)
  })
}

init(){
  if(this.tooltips.length){
    this.addTooltipsEvent();
  }
  return this
}
}

