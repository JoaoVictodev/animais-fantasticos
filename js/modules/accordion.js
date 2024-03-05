export default function initAccordion() {
  const dl = document.querySelector('[data-anime="accordion"]');
  const accordionItem = dl.querySelectorAll('dt');
  const descricao = dl.querySelectorAll('dd');

     function activeAccordion(i) {
      accordionItem[i].classList.toggle('on')
      descricao[i].classList.toggle('on');
    }

    if (accordionItem.length && descricao.length) {
    accordionItem[0].classList.add('on')
    descricao[0].classList.add('on')

    accordionItem.forEach((itemFaq, i) => [
      itemFaq.addEventListener('click', () => {
        activeAccordion(i);
      })
    ])
  }
}
