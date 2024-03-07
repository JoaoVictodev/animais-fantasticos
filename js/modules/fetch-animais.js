import AnimaNumeros from "./animanumeros";

export default function InitFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numerosContainer = document.querySelector('.numeros-grid')

   function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.Especie}</h3 ><span data-numero>${animal.total}</span>`
    return div
  }
    animaisJson.forEach(animal => {
      const divAnimal = createAnimais(animal);
      numerosContainer.appendChild(divAnimal)
    });

    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'animation',);
    animaNumeros.init()
  }
  
  
  fetchAnimais('../html/animaisapi.json');
}
