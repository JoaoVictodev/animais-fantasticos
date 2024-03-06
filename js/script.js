import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/accordion.js";
import Tabnav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaNumeros from "./modules/animanumeros.js";
import initFuncionamento from "./modules/funcionamento.js";
import InitFetchAnimais from "./modules/fetch-animais.js";
import initFetchBTC from "./modules/fetch-bitcoin.js";
import initAnimationScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init()

const tabnav = new Tabnav('[data-tab="menu"] li', '[data-tab="content"]');
tabnav.init()

initModal();
initTooltip();
initDropDown();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
InitFetchAnimais();
initFetchBTC();
initAnimationScroll();