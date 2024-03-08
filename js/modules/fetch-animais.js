import AnimaNumeros from "./animanumeros";

export default function fetchAnimais(url, target) {

  // Cria a div contendo informacoes com
  // o tatal de animais
  function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.Especie}</h3 ><span data-numero>${animal.total}</span>`
    return div
  }

  // preenche animais no dom
  const numerosContainer = document.querySelector(target);
  function preencherAnimais(animal){
    const divAnimal = createAnimais(animal);
    numerosContainer.appendChild(divAnimal)
  } 

  // anima os numeros de cada animal
  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'animation',);
    animaNumeros.init()

  }

  // puxa os animais atraves de um arquivo json
  // e cria cada animal utilizando o create animal
  async function criarAnimais() {
    try{
      // fetch espera resposta e tranforma resposta em json
      const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    // apos a transforcao do json, ativa as funcoes 
    // para preencher e animar os numeros
    animaisJson.forEach( animal => preencherAnimais(animal));
    animaAnimaisNumeros();
  } catch(erro){
    console.log(erro)
    }
   }
   return criarAnimais(url);
}
