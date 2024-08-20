var inv = [];
var etp = 0
//etapas(vida global)
function etapas(){
    etp += 1
    alert('ETAPAS: ' + etp + '/5')
}
// Função para adicionar itens ao inventário
function poeItem(item) {
    inv.push(item);
    alert(item + " foi adicionado ao inventário.")
}

// Função para exibir o inventário
function Invent() {
    if (inv.length > 0) {
        alert("Itens no inventário: " + inv.join(", "))
    } else {
        alert("Seu inventário está vazio.")
    }
}

//game
let resp = Number(prompt('Olá! Se você está aqui é porque queres jogar meu jogo, cujo nome é PERINA ADVENTURES!\n Deseja iniciar?\n 1- sim\n 2- não \n(Obs: Utilize apenas números para responder)'))
if (resp == 1){
    alert ('Um bom jogo para você!')
} else if (resp == 2){
    alert('Vai jogar igualmente >:)')
} else {
    alert('Tu não vai tramar uma não. Bom jogo pra você HAHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAH')
} 
    alert('Resumo: Você é Perina, uma refugiada que fugiu do Sudão do Sul devido a guerra. Você se encontrava perdida em seus pensamentos, não conseguindo achar a motivação necessária para continuar seus estudos por esporte... Até você descobrir A CORRIDA. Com ela, você conseguiu se motivar e continuar sua trajetória de ser uma atleta profissiona!')  
    etapas()
    alert('Capítulo 1 de 5 - Outubro de 2010: "Eu Perina, estou fugindo do Sudão do Sul por conta da imensa guerra que está ocorrendo. Estou assustada, mas posso seguir em frente"')
    alert('"Ouço vários tiros vindo de todos os lados. Caminho mais com a minha tia, até chegarmos em uma bifurcação."')
let esc = Number(prompt('Você se depara com 2 caminhos. Qual deles você quer ir? \n1- esquerda \n2- direita'))
if (esc == 1){
    alert('Você partiu nessa direção e eventualmente chegou a uma ponte')
    alert('Você passa a noite embaixo da ponte e na manhã seguinte segue sua jornada.')
    alert('Depois de um tempo observando as paisagens e caminhando por toda a destruição, vocês acham um refúgio onde se acomodam')
} else if (esc == 2){
    alert('Você decidiu seguir este caminho e acabou levando um tiro. Felizmente você conseguiu ajuda a tempo.')
    alert('Você é levada pelas pessoas até uma casa, onde é tratada.')
    alert('Na manhã seguinte você acorda e parte com o pessoal que salvou você.')
    alert('Você segue eles até um refúgio, onde você e sua tia se acomodam')
} else {
    alert('Você ficou parado por tanto tempo que tomou uma bala perdida. Felizmente você passa bem!')
}
etapas()
alert('Capítulo 2 de 5 - Abril de 2011: É um dia ensolarado e Perina está pronta para treinar sua corrida.')
alert('Atenção!! Um adversário se aproxima! Hora de batalhar!')
//tutorial
let tut = Number(prompt('Você gostaria de aprender um pouco sobre as técnicas de batalha?\n 1- Sim\n2- Não'))
    if (tut == 1){
        alert('Muito bem! \nO sistema de batalha funciona da seguinte maneira: Ambos estarão em uma pista de corrida de 800m. O objetivo é chegar ao final. Para isso você irá precisar utilizar as suas habilidades. \nHabilidades: Impulso (Você ganha mais 40 de velocidade); Atraso moral (Você xinga o oponente e faz ele desacelerar por 20 pontos de velocidade mas perde 20 de moral) \nMoral: Você possui 100 de moral, e a cada coisa ruim que você fizer, você vai perdendo ela. Então tome cuidado! ')
    } else if (tut == 2){
        alert('Tudo bem!')
    }   else {
        alert('Se atira de um prédio.')
    }
//batalha 1
//obs - a vida era para ser os metros da pista
alert('QUE COMECE A CORRIDA!!')
let voce = 0
let ela = 0
let moral1 = 100
while (voce < 800 && ela < 800) {
  let bat1 = Number(prompt('O que deseja fazer? \nVocê: ' + voce + '     Andrea Bach: ' + ela + '\nMeta: 800m \nMoral: ' + moral1 + '\n1- Impulso \n2- Atraso moral'))
  
  switch(bat1) {
    case 1:
      voce += 100
      ela += 70
      break

    case 2:
      voce += 40
      ela += 50
      moral1 -= 20
      break

    default:
      alert('Você ficou parado que nem uma bosta')
      ela += 70
      break
  }

  // vitória ou derrota
  if (voce >= 800 && moral1 > 0) {
    alert('Você ganhou!')
    break
  } else if (ela >= 800 && moral1 > 0) {
    alert('Você perdeu! Reiniciando...')
    // reinicia as variáveis 
    voce = 0
    ela = 0
    moral1 = 100
  } else if (voce >= 800 && moral1 <= 0) {
    alert('Você foi desclassificado por utilizar sua moral incorretamente. Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
  } else if (ela >= 800 && moral1 <= 0) {
    alert('Você perdeu! Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
  }
}

// mensagens após a vitória
if (voce >= 800 && moral1 > 0) {
  alert('Após ganhar a corrida você recebeu uma emoção especial de sua atleta adversária!')
  alert('Você recebeu a AMBIÇÃO (dan dan dan daaaaaaaaaaaan!) \nA ambição foi adicionada em suas técnicas especiais.')
}

let escolha = Number(prompt('Gostaria de aprender sobre o movimento ambição? \n1- sim \n2- não'))
if (escolha == 1){
    alert('AMBIÇÃO - Nos vemos lá! \nVocê impulsiona 20 pontos de velocidade e empurra seu oponente para trás, fazendo ele perder 60 pontos de velocidade e perde 50 de moral.')
}
alert('Ao sair, você é parada por uma treinadora chamada: Layla Kadash. Ela lhe entrega um convite para os campeonatos estaduai de corrida.')
alert('VOCÊ GANHOU A [CARTA DE CONVITE DA CORRIDA ESTADUAL] O item foi adicionado em seu inventário.')
poeItem('CARTA DE CONVITE DA CORRIDA ESTADUAL')

let escolha1 = prompt('Você para e analisa. O que pretende fazer? \n1- Aceitar o convite \n2- Recusar')
while (escolha1 != 1){
if (escolha1 == 2) {
    alert('Você nunca conseguiu sua tão sonhada carreira atletista... No futuro, você mora em um apartamento apertado com um gato. Você chora e chora se lembrando da oportunidade que você perdeu. \nGAME OVER \nReinicie.')
    escolha1 = prompt('Você para e analisa. O que pretende fazer? \n1- Aceitar o convite \n2- Recusar')
} else {
    alert('Por favor, escolha 1 ou 2.')
    escolha1 = prompt('Você para e analisa. O que pretende fazer? \n1- Aceitar o convite \n2- Recusar')
}}
alert('Você aceitou a proposta! Hora de treinar, mas antes você precisa passar no mercado para comprar suplementos.')
//lojinha do arlan
let lolja = Number(prompt('Bem-vindo a lojinha do Senhor Arlan! O que gostaria?\n1- Comprar\n 2- sair'))
while (lolja != 2) {
    let al = Number(prompt('O que deseja comprar?\n1- Kit Pré Treino\n2- Sair'));
    
    if (al == 1) {
        poeItem('KIT PRÉ TREINO')
        alert('Você comprou o [KIT PRÉ TREINO] (dan dan dan daaaaaaaaaaan). \nO item foi adicionado ao seu inventário.')
    } else if (al == 2) {
        lolja = 2
    } else {
        alert('Você só observou os itens.')
    }
}

alert('Você vai para casa e ve se comprou o Kit de Pré Treino')
let encontrouKit = false;

for (let item of inv) {
    if (item === 'KIT PRÉ TREINO') {
        encontrouKit = true;
        break
    }
}

if (encontrouKit) {
    alert('O KIT PRÉ TREINO foi preparado com eficiência. Na próxima batalha você terá um bônus de 10 de velocidade');
} else {
    alert('O KIT PRÉ TREINO não está no inventário. Você foi dormir...');
}
etapas()
alert('Capítulo 3 de 5 - Abril de 2011: Você acorda e vai treinar.')
let escolha2 = Number(prompt('Deseja saber mais sobre o treinamento? \n1- sim \n2- não'))
while(escolha2 != 1){
    alert('Você precisa aprender a treinar bocó!')
    escolha2 = Number(prompt('Deseja saber mais sobre o treinamento? \n1- sim \n2- não'))
}
alert('Para treinar basta apertar um na hora que aparecer o pop-up treinar. Simples ne? \nAGORA VAI TREINA!')
let obj = 0
while (obj < 3000){
    
    let treino = Number(prompt('OBJETIVO:' + obj + '/3000 \n1- TREINAR'))
    if(treino == 1){
        obj += 50
    } else {
        alert('Para de ser uma plasta e vai treina')
    }
}
alert('Você treinou o suficiente. Você adquiriu +10 de velocidade e a emoção DETERMINAÇÃO.')
let alg = Number(prompt('Deseja saber mais sobre o movimento? \n1- sim \n2- não'))
if (alg = 1){
    alert('DETERMINAÇÃO: EU CONSIGO! - Você avança com 50 de velocidade')
} else {
    alert('ok')
}
etapas()
alert('Capítulo 4 de 5 - Junho de 2012: Hoje é o dia do campeonato regional. Boa sorte!')
//batalha2 - 2 tipos: a com o kit e sem. O kit da buff de 10 de velocidade
if (encontrouKit) {
  let voce = 0
  let ela = 0
  let moral1 = 100
  let ele = 0

  while (voce < 800 && ela < 800 && ele < 800) {
    let bat1 = Number(prompt(`O que deseja fazer? \nVocê: ${voce}     Kayla Miouri: ${ela}       Mark Names: ${ele} \nMeta: 800m \nMoral: ${moral1}\n1- Impulso \n2- Atraso moral \n3- AMBIÇÃO: Nos vemos lá \n4- DETERMINAÇÃO: EU CONSIGO!`))
    
    if (bat1 == 1) {
      voce += 120
      ela += 80
      ele += 90
    } else if (bat1 == 2) {
      voce += 60
      ela += 60
      moral1 -= 20
      ele += 70
    } else if (bat1 == 3) {
      voce += 80
      ela += 20
      ele += 30
      moral1 -= 50
    } else if (bat1 == 4) {
      voce += 110
      ela += 80
      ele += 90
    } else {
      alert('Você ficou parado que nem uma bosta')
      ela += 80
      ele += 90
    }
  }

  if (voce >= 800 && moral1 > 0) {
    alert('Você ganhou!')
  } else if ((ela >= 800 || ele >= 800) && moral1 > 0) {
    alert('Você perdeu! Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  } else if (voce >= 800 && moral1 <= 0) {
    alert('Você foi desclassificado por utilizar sua moral incorretamente. Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  } else if ((ela >= 800 || ele >= 800) && moral1 <= 0) {
    alert('Você perdeu! Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  }

} else {
  let voce = 0
  let ela = 0
  let moral1 = 100
  let ele = 0

  while (voce < 800 && ela < 800 && ele < 800) {
    let bat1 = Number(prompt(`O que deseja fazer? \nVocê: ${voce}     Kayla Miouri: ${ela}       Mark Names: ${ele} \nMeta: 800m \nMoral: ${moral1}\n1- Impulso \n2- Atraso moral \n3- AMBIÇÃO: Nos vemos lá \n4- DETERMINAÇÃO: EU CONSIGO!`))
    
    if (bat1 == 1) {
      voce += 110
      ela += 80
      ele += 90
    } else if (bat1 == 2) {
      voce += 50
      ela += 60
      moral1 -= 20
      ele += 70
    } else if (bat1 == 3) {
      voce += 70
      ela += 20
      ele += 30
    } else if (bat1 == 4) {
      voce += 100
      ela += 80
      ele += 90
    } else {
      alert('Você ficou parado que nem uma bosta')
      ela += 80
      ele += 90
    }
  }

  if (voce >= 800 && moral1 > 0) {
    alert('Você ganhou!')
  } else if ((ela >= 800 || ele >= 800) && moral1 > 0) {
    alert('Você perdeu! Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  } else if (voce >= 800 && moral1 <= 0) {
    alert('Você foi desclassificado por utilizar sua moral incorretamente. Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  } else if ((ela >= 800 || ele >= 800) && moral1 <= 0) {
    alert('Você perdeu! Reiniciando...')
    voce = 0
    ela = 0
    moral1 = 100
    ele = 0
  }
}

alert('Após vencer essa corrida você foi notada por um treinador que te prometeu tornar você uma atleta profissional. Mas para isso, você precisará treinar novamente!')
obj = 0
while (obj < 10000) {
    
    let treino = Number(prompt('OBJETIVO:' + obj + '/10000 \n1- TREINAR'))
    if (treino == 1) {
        obj += 50
    } else {
        alert('Para de ser uma plasta e vai treina')
    }
}
alert('Você treinou o suficiente. Você adquiriu +40 de velocidade e a emoção CORAGEM.')
let m = Number(prompt('Deseja saber mais sobre o movimento? \n1- sim \n2- não'))
if (m == 1) {
    alert('CORAGEM - VAI!!: impulsiona com 70 de velocidade')
} else {
    alert('ta')
}
etapas()
alert('Capítulo 5 de 5: Agosto de 2023: Hoje, após anos de treino e preparação. Hoje é o dia de você ser notada pelos jurados olímpicos no Campeonato Mundial de Atletismo em Budapeste. Boa sorte!')
voce = 0
ela = 0
moral1 = 100
ele = 0
while (voce < 2000 && ela < 2000 && ele < 2000) {
    bat1 = Number(prompt('O que deseja fazer? \nVocê: ' + voce + '     Kayla Miouri: ' + ela + '       Mark Names: ' + ele + '\nMeta: 2000m \nMoral: ' + moral1 + '\n1- Impulso \n2- Atraso moral \n3- AMBIÇÃO: Nos vemos lá \n4- DETERMINAÇÃO: EU CONSIGO!'))
    
    switch(bat1) {
      case 1:
        voce += 130
        ela += 110
        ele += 125
        break
  
      case 2:
        voce += 90
        ela += 90
        moral1 -= 20
        ele += 105
        break
  
      case 3:
        voce += 110
        ela += 50 
        ele += 65
        break
  
      case 4:
        voce += 140
        ela += 110
        ele += 125
        break

      case 5:
        voce += 160
        ela += 110
        ele += 125
        break
            
      default:
        alert('Você ficou parado que nem uma bosta')
        ela += 110
        ele += 125
        break
    }
  
    // vitória ou derrota
    if (voce >= 2000 && moral1 > 0) {
      alert('Você ganhou!')
      break
    } else if ((ela >= 2000 || ele >= 2000) && moral1 > 0) {
      alert('Você perdeu! Reiniciando...')
      // reinicia as variáveis 
      voce = 0
      ela = 0
      moral1 = 100
      ele = 0
    } else if (voce >= 2000 && moral1 <= 0) {
      alert('Você foi desclassificado por utilizar sua moral incorretamente. Reiniciando...')
      voce = 0
      ela = 0
      moral1 = 100
      ele = 0
    } else if ((ela >= 2000 || ele >= 2000) && moral1 <= 0) {
      alert('Você perdeu! Reiniciando...')
      voce = 0
      ela = 0
      moral1 = 100
      ele = 0
    }
}
alert('Você conseguiu! Você foi notada pelos jurados olímpicos! Eles a convidaram para as olimpiadas de Paris do ano que vem! Muito bem!')
alert('Fim!')
