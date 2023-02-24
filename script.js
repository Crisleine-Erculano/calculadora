
function adicionar(numero) {
      let entrada = document.querySelector('#entrada').innerHTML;
      document.querySelector('#entrada').innerHTML = entrada + numero;
      
}
function limpar() {
      let entrada = '';
      document.querySelector('#entrada').innerHTML = entrada;
}
function limparElemento(){
      let limpar  =  document.querySelector( '#entrada' ).innerHTML;
      document.querySelector( '#entrada' ).innerHTML= limpar.substring ( 0 ,  limpar.length  - 1 ) ;
}

function resultado(){
      let calcula = document.querySelector('#entrada').innerHTML;
      if(calcula){
                document.querySelector( '#entrada' ).innerHTML  =  eval ( calcula ) ;
            }
      }
       
       
