export default function fetchBTC(url, target) {
  fetch(url)
    .then(r => r.json())
    .then(bitcoin => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch(e => console.log(Error(e)))}
