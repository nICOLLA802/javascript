function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data =new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} hora`
if (hora >= 0 && hora <12){
   img.src='pexels-misbaa-eri-426041722-35355262.jpg' 

}
else if(hora >=12 && hora <18) { img.src='pexels-nihat-12231-69224.jpg'
}

else{
img.src='pexels-nihat-12231-69224.jpg'
}



}
