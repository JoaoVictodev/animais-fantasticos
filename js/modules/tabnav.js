export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"]');
  tabContent[0].classList.add('ativo');

    function activeTab(i) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo')
      });
      const direcao = tabContent[i].dataset.anime;
      tabContent[i].classList.add('ativo', direcao);
    }

  if (tabmenu.length && tabContent.length) {
    tabmenu.forEach((itemMenu, i) => {
      itemMenu.addEventListener('click', () => { activeTab(i) })
    })
  }
}
