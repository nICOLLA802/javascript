function contar(){
    let inicio =document.getElementById('Inicio')
    let fim = document.getElementById('Final')
    let passo =  document.getElementById('Passo')

    if (inicio.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados`)
    }
    else{
    res.innerHTML='Contando:'
    let i =Number(inicio.value)
    let f =Number(fim.value)
    let p =Number(passo.value)
 if (i>f){
    for(let c=i; c<=f; c+= p ){
        res.innerHTML +=` ${c} \u{1F617}`
    }
}  else{
   for(let c = i;c>=f;c+=o){
     res.innerHTML +=` ${c} \u{1F617}`
}
   
    }
    }
    
} 