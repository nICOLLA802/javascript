function verificar(){
    var data= new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('naslab')
    var fano =document.getElementById('Sexo')
    if(fano.value.length == 0 || Number(fano.value>ano)){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else{
       var farsex=document.getElementsByName("Sexo")
       var idade = ano - Number(fano.value)
       var genero=''
       if(fsex[0].checked){
        genero='Homen'
        
       }else if(fsex[1].checked){
        genero ='mulher'
       }
       res.innerHTML =`Detectamos  ${genero} com ${idade} anos` 
    }
}