export default function initFetchBTC() {
  fetch('https://www.blockchain.com/ticker')
    .then(r => r.json())
    .then(bitcoin => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch(e => console.log(Error(e)))}
