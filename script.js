
function adicionar(numero) {
      let entrada = document.querySelector('#entrada').innerHTML;
      document.querySelector('#entrada').innerHTML = entrada + numero;
      
}
function limpar() {
      let entrada = '';
      document.querySelector('#entrada').innerHTML = entrada;
}
function limparElemento(){
      let entrada = document.getElementById('entrada').innerHTML;
      document.getElementById('entrada').innerHTML = entrada.substring(0, entrada.length -1);
}

 