const objeto1 = {
  nome: 'Bolo de Chocolate',
  valor: 19.9,
  ingredientes: [
    'leite',
    'óleo',
    'farinha de trigo',
    'chocolate',
    'açucar',
    'ovos',
    'fermento em pó'
  ],
  Urgente: true
};
// ---------------------------------------
const objeto2 = {
  nome: 'Bolo de Maracuja',
  valor: 15.8,
  ingredientes: [
    'ovos',
    'óleo',
    'farinha de trigo',
    'suco de maracujá',
    'fermento em pó'
  ],
  Urgente: false
};
// ------------------------------------------
const objeto3 = {
  nome: 'Bolo de Abacaxi',
  valor: 16.7,
  ingredientes: [
    'açucar',
    'ovos',
    'margarina',
    'farinha de trigo',
    'leite',
    'fermento para bolo',
    'abacaxi cortado'
  ],
  Urgente: false
};
// -------------------------------------------
const objeto4 = {
  nome: 'Bolo de Morango',
  valor: 19.0,
  ingredientes: [
    'ovos',
    'açucar',
    'farinha de trigo',
    'leite quente',
    'fermento em pó',
    ' leite condensado',
    'creme de leite',
    'amido de milho',
    ' morango',
    'chantily'
  ],
  Urgente: true
};
// -------------------------------------------
// const mediaValores =
//   objeto1.valor + objeto2.valor + objeto3.valor + objeto4.valor / 4;
// console.log(`Todos os valores de variaveis booleanas são verdadeiros? =
//   ${entregaUrgente && entregaUrgente2 && entregaUrgente3 && entregaUrgente4}
//   `);

// console.log(`   ${nome.toUpperCase()}
//   valor = ${valor}
//   ingredientes = ${ingredientes}
//   Entrega Urgente? = ${entregaUrgente}

//    ${nome2.toUpperCase()}
//   valor = ${valor2}
//   ingredientes = ${ingredientes2}
//   Entrega Urgente? = ${entregaUrgente2}

//    ${nome3.toUpperCase()}
//   valor = ${valor3}
//   ingredientes = ${ingredientes3}
//   Entrega Urgente? = ${entregaUrgente3}

//    ${nome4.toUpperCase()}
//   valor = ${valor4}
//   ingredientes = ${ingredientes4}
//   Entrega Urgente? = ${entregaUrgente4}}`);

const arrayDeObjetos = [];
const verificaObjetos = [objeto1, objeto2, objeto3, objeto4];

for (let i = 0; i < 4; i++) {
  if (verificaObjetos[i].Urgente == true) {
    arrayDeObjetos.push(verificaObjetos[i]);
  } else {
    alert(
      `${JSON.stringify(
        verificaObjetos[i].nome
      )} NÃO FOI ADICIONADO NO ARRAY POIS NÃO É URGENTE`
    );
  }
}

console.log(arrayDeObjetos);





function relatorio (objeto) {
  for (let i= 0; i<objeto.length ; i++){
    console.log(`${objeto[i].nome.toUpperCase()}
    valor = ${objeto[i].valor}
    ingredientes = ${objeto[i].ingredientes}
    Entrega Urgente? = ${JSON.stringify(objeto[i].Urgente)}`)
  }
}

toString(relatorio(verificaObjetos))