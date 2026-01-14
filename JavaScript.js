let res = document.getElementById('re')





function inseri(valor){
  
    res.value += valor
  
}

function limpar_tudo(){
  
  res.value = ''
  
}

function limpa(){
  
  res.value = res.value.slice(0, -1)
  
}

function resultado()
{
  
  if(res.value == ''){
    window.alert('nao ha valores para somar')
  }else{
    res.value = eval(res.value)
  }
  
}