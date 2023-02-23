let entrada = '';
function adicionar(numero){
   
      entrada = document.querySelector('#entrada').innerHTML;
      document.querySelector('#entrada').innerHTML = entrada + numero;
  
}
function limpar(){
   entrada =''
   document.querySelector('#entrada').innerHTML = entrada;
}


