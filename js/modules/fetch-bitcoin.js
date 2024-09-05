export default function initFetchBitcoin() {}

fetch("https://www.blockchain.com/ticker")
  .then((response) => {
    return response.json();
  })
  .then((bitcoin) => {
    document.querySelector(".btc-info").innerText = (
      1000 / bitcoin.BRL.sell
    ).toFixed(4);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });
