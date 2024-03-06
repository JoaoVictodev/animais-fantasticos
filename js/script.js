import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/accordion.js";
import Tabnav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
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

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropDown();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
InitFetchAnimais();
initFetchBTC();
initAnimationScroll();