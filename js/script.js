import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/accordion.js";
import Tabnav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDown from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchBTC from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js"
import fetchAnimais from "./modules/fetch-animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabnav = new Tabnav('[data-tab="menu"] li', '[data-tab="content"]');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollanima = new ScrollAnima('[data-anime="scroll"]');
scrollanima.init();

const dropDownMenu = new DropDown('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('../json/animaisapi.json', '.numeros-grid');

fetchBTC('https://www.blockchain.com/ticker', '.btc-preco');
