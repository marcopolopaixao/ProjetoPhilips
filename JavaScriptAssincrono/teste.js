let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {
  const valorInformadoPeloUsuario = [7, -5, 6,-3.4, 4.6, 12]  
  if (valorInformadoPeloUsuario[i] > 0){
    quantidadePositivos ++
  }
  }

console.log(`${quantidadePositivos} valores positivos`);