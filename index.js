// Desafio Classificador de nível de Herói

let nome = "Jeyce"
let quantidadeExperiencia = 300
let nivel = ""
if  (quantidadeExperiencia < 1000) {
    nivel = "Ferro"
}else if ((quantidadeExperiencia >= 1001) && (quantidadeExperiencia <= 2000)){
    nivel = "Bronze"
    
}else if ((quantidadeExperiencia >= 2001) && (quantidadeExperiencia <= 5000)){
    nivel = "Prata"
    
}else if ((quantidadeExperiencia >= 5001) && (quantidadeExperiencia <= 7000)){
    nivel = "Ouro"
    
}else if ((quantidadeExperiencia >= 7001) && (quantidadeExperiencia <= 8000)){
    nivel = "Platina"
   
}else if ((quantidadeExperiencia >= 8001) && (quantidadeExperiencia <= 9000)){
    nivel = "Ascendente"
    
}else if ((quantidadeExperiencia >= 9001) && (quantidadeExperiencia <= 10000)){
    nivel = "Imortal"
    
}else  {
    nivel = "Radiante"
    
}

console.log ("O Herói de nome " + nome + "  está no nível de " + nivel)