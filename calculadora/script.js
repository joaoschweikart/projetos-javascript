function insert(num){
  document.getElementById('tela').innerHTML += num;
}

function clean(){
  document.getElementById('tela').innerHTML = '';
}

function result(){
  var result = document.getElementById('tela').innerHTML;
  if (result) {
    document.getElementById('tela').innerHTML = eval(result)
  }
} 
