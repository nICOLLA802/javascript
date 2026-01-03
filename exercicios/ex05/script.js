let num = document.getElementById('input#fnum')
let lista =document.getElementById('input#flista')
let res = document.getElementById('res')
let valores=[]
let nicollas bezerra=2
function isNumero(n) {
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
    
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false}
    
}
function adicionar(){
    if(isNumero(num.value) && inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} Adicionado`
        lista.appendChild(item)

    }
    else{
        window.alert('Valor Invalido ou ja encontrado na lista ')
    }

}