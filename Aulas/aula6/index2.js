 var agora =new Date()
var hora = agora.get

if (hora >= 5) {
    console.log(`Bom Dia, Voce acordou cedo`)
}
else if (hora <=12) {
console.log(` boa tarde voce acordou tarde`)
}
else if (hora >12 && hora <=17) {
    console.log(` boa tarde esta a tarde`)
}
else{
    console.log(`boa noite esta de noite`)
}