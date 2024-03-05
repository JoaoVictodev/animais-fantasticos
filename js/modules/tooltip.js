export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);
  
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
  
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this
    this.addEventListener('mousemove', onMouseMove);
  }
  
  function onMouseLeave() {
    const tooltipBox = this.tooltipBox;
    if (tooltipBox) {
      tooltipBox.remove();
      this.removeEventListener('mouseleave', onMouseLeave);
      this.removeEventListener('mousemove', onMouseMove);
    }
  }
  
  
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    return tooltipBox
    
  }

   function onMouseOver(){
    const tooltipBox = criarTooltipBox(this);
  
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this
    this.addEventListener('mousemove', onMouseMove);
  }
  
  tooltips.forEach((i) =>{
    i.addEventListener('mouseover', onMouseOver)
  })
  

}

