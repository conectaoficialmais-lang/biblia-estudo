// Dicionário bíblico — verbetes de apoio ao estudo.
// Formato: { termo, categoria, texto, dados: [[rótulo, valor], ...], refs: ["COD cap:verso", ...] }
// Equivalências de pesos, medidas e moedas são aproximadas e variaram conforme a época e a região.
window.DICIONARIO = [
  // ───────────────────────── Festas e calendário ─────────────────────────
  {
    termo: "Sábado",
    categoria: "Festas e calendário",
    texto: "Sétimo dia da semana, separado para descanso e culto. A Lei o fundamenta tanto no descanso de Deus após a criação quanto na libertação do Egito. Ia do pôr do sol da sexta-feira ao pôr do sol do sábado, e nele se suspendia o trabalho comum; era também sinal da aliança entre Deus e Israel. Nos Evangelhos, o modo de guardá-lo é tema frequente de debate entre Jesus e os fariseus. A carta aos Hebreus usa o sábado como figura do descanso que resta para o povo de Deus.",
    dados: [["Quando", "Sétimo dia da semana, de um pôr do sol ao outro"], ["Hebraico", "shabbat, 'cessar, descansar'"]],
    refs: ["GEN 2:3", "EXO 20:8", "DEU 5:15", "MAR 2:27", "HEB 4:9"]
  },
  {
    termo: "Páscoa",
    categoria: "Festas e calendário",
    texto: "Festa que recorda a saída de Israel do Egito, quando o Senhor poupou as casas marcadas com o sangue do cordeiro. Cada família sacrificava um cordeiro sem defeito na tarde do dia 14 do primeiro mês e o comia assado, com pães sem fermento e ervas amargas. Depois da centralização do culto, passou a ser celebrada em Jerusalém, como uma das festas de peregrinação. No Novo Testamento, a última ceia de Jesus acontece no contexto da Páscoa, e Paulo chama Cristo de 'nossa Páscoa'.",
    dados: [["Quando", "14 de nisã (março/abril)"], ["Duração", "1 dia, seguido dos 7 dias dos Pães Asmos"], ["Hebraico", "pesach"]],
    refs: ["EXO 12:14", "LEV 23:5", "LUK 22:15", "1CO 5:7"]
  },
  {
    termo: "Pães Asmos",
    categoria: "Festas e calendário",
    texto: "Festa de sete dias que começava logo após a Páscoa e durante a qual só se comia pão sem fermento, lembrando a pressa da saída do Egito, quando a massa não teve tempo de levedar. Todo fermento era retirado das casas antes do início da festa; o primeiro e o sétimo dias eram de santa convocação, sem trabalho servil. Por estarem ligadas, Páscoa e Pães Asmos acabaram sendo tratadas como uma só celebração, como se vê nos Evangelhos. Paulo usa o fermento removido como figura de uma vida sem malícia.",
    dados: [["Quando", "15 a 21 de nisã (março/abril)"], ["Duração", "7 dias"]],
    refs: ["EXO 12:17", "LEV 23:6", "DEU 16:3", "MAR 14:12"]
  },
  {
    termo: "Festa das Primícias",
    categoria: "Festas e calendário",
    texto: "Cerimônia realizada durante a semana dos Pães Asmos, na qual o sacerdote movia diante do Senhor o primeiro feixe da colheita da cevada. Só depois dessa apresentação o povo podia comer do grão novo. O gesto reconhecia que toda a colheita pertencia a Deus e abria a contagem de sete semanas até Pentecostes. A data exata ('o dia seguinte ao sábado') foi debatida entre fariseus e saduceus. Paulo aplica a imagem à ressurreição de Cristo, chamado de primícias dos que dormem.",
    dados: [["Quando", "No dia seguinte ao sábado, na semana dos Pães Asmos (nisã)"], ["Colheita", "Cevada"]],
    refs: ["LEV 23:10", "LEV 23:11", "1CO 15:20"]
  },
  {
    termo: "Pentecostes (Festa das Semanas)",
    categoria: "Festas e calendário",
    texto: "Festa celebrada cinquenta dias depois da apresentação do primeiro feixe, ao fim de sete semanas; daí os nomes Festa das Semanas e Pentecostes (do grego 'quinquagésimo'). Marcava o encerramento da colheita do trigo, com a oferta de dois pães levedados feitos do grão novo. Era uma das três festas de peregrinação a Jerusalém. A tradição judaica posterior associou-a à entrega da Lei no Sinai. No Novo Testamento, foi no dia de Pentecostes que o Espírito Santo desceu sobre os discípulos reunidos em Jerusalém.",
    dados: [["Quando", "Início de sivã (maio/junho), 50 dias após as Primícias"], ["Duração", "1 dia"], ["Outros nomes", "Festa das Semanas, Festa da Sega"]],
    refs: ["LEV 23:16", "EXO 34:22", "DEU 16:10", "ACT 2:1"]
  },
  {
    termo: "Festa das Trombetas",
    categoria: "Festas e calendário",
    texto: "Dia de descanso solene e santa convocação no primeiro dia do sétimo mês, anunciado ao som de trombetas. Abria o mês mais carregado do calendário religioso, que incluía o Dia da Expiação e a Festa dos Tabernáculos. A Lei não explica o seu significado além de chamá-lo de memorial com toque de trombetas. No judaísmo posterior, a data passou a marcar o ano novo civil (Rosh Hashaná). Foi também num primeiro dia do sétimo mês que Esdras leu a Lei diante do povo reunido em Jerusalém.",
    dados: [["Quando", "1º de tisri (setembro/outubro)"], ["Duração", "1 dia"]],
    refs: ["LEV 23:24", "NUM 29:1", "NEH 8:2"]
  },
  {
    termo: "Dia da Expiação",
    categoria: "Festas e calendário",
    texto: "Dia mais solene do ano, de jejum e descanso total, em que se fazia expiação pelos pecados de todo o povo. Somente nesse dia o sumo sacerdote entrava no Santo dos Santos, com sangue de sacrifício, para aspergi-lo sobre o propiciatório. Um bode era sacrificado e outro, sobre o qual se confessavam os pecados de Israel, era enviado ao deserto. A carta aos Hebreus contrasta essa cerimônia anual com a obra de Cristo, que entrou uma vez por todas no santuário celestial.",
    dados: [["Quando", "10 de tisri (setembro/outubro)"], ["Duração", "1 dia, com jejum"], ["Hebraico", "Yom Kippur"]],
    refs: ["LEV 16:30", "LEV 23:27", "HEB 9:7", "ACT 27:9"]
  },
  {
    termo: "Festa dos Tabernáculos",
    categoria: "Festas e calendário",
    texto: "Festa de sete dias, no fim do ano agrícola, em que o povo morava em cabanas feitas de ramos para lembrar a peregrinação no deserto. Celebrava também o término das colheitas de frutas, uvas e azeitonas, e por isso era chamada Festa da Colheita. Era a mais alegre das três festas de peregrinação e terminava com um oitavo dia de assembleia solene. No tempo de Jesus incluía cerimônias com água e luzes no templo, pano de fundo dos discursos registrados no Evangelho de João.",
    dados: [["Quando", "15 a 21 de tisri (setembro/outubro), mais um oitavo dia"], ["Duração", "7 dias + 1"], ["Hebraico", "Sucot"]],
    refs: ["LEV 23:34", "LEV 23:42", "DEU 16:13", "NEH 8:17", "JOH 7:2"]
  },
  {
    termo: "Purim",
    categoria: "Festas e calendário",
    texto: "Festa que comemora o livramento dos judeus no Império Persa, quando o plano de Hamã para exterminá-los foi frustrado pela intervenção de Ester e Mardoqueu. O nome vem de 'pur', a sorte que Hamã lançou para escolher o dia do massacre. Foi instituída como dias de banquete e alegria, com troca de presentes de alimentos e doações aos pobres. Não faz parte das festas da Lei de Moisés; sua origem está narrada no livro de Ester, lido nas sinagogas nessa ocasião.",
    dados: [["Quando", "14 e 15 de adar (fevereiro/março)"], ["Duração", "2 dias"]],
    refs: ["EST 3:7", "EST 9:22", "EST 9:26"]
  },
  {
    termo: "Festa da Dedicação (Hanucá)",
    categoria: "Festas e calendário",
    texto: "Festa de oito dias que recorda a purificação e a rededicação do templo de Jerusalém por Judas Macabeu, por volta de 164 a.C., depois de o rei selêucida Antíoco IV Epifânio tê-lo profanado. Sua origem é contada nos livros dos Macabeus, do período entre os dois Testamentos, e por isso não aparece no Antigo Testamento. Era também chamada Festa das Luzes, pelo costume de acender lâmpadas. O Evangelho de João registra que Jesus estava em Jerusalém, no templo, durante essa festa, no inverno.",
    dados: [["Quando", "A partir de 25 de quisleu (novembro/dezembro)"], ["Duração", "8 dias"]],
    refs: ["JOH 10:22", "JOH 10:23"]
  },
  {
    termo: "Lua nova",
    categoria: "Festas e calendário",
    texto: "Primeiro dia de cada mês do calendário hebraico, que era lunar. O início do mês era marcado pelo aparecimento do primeiro filete da lua e celebrado com toque de trombetas e sacrifícios adicionais no santuário. Era ocasião de refeições festivas, como a que Davi deveria frequentar à mesa de Saul, e costuma ser mencionada ao lado do sábado. Os profetas criticaram a observância vazia dessas datas. Paulo inclui a lua nova entre as práticas que são sombra das coisas futuras.",
    dados: [["Quando", "1º dia de cada mês lunar"], ["Mês lunar", "29 ou 30 dias"]],
    refs: ["NUM 28:11", "NUM 10:10", "1SA 20:5", "PSA 81:3", "COL 2:16"]
  },
  {
    termo: "Ano sabático",
    categoria: "Festas e calendário",
    texto: "A cada sete anos a terra devia descansar: não se semeava nem se podava, e o que nascesse espontaneamente ficava à disposição dos pobres, dos estrangeiros e dos animais. Em Deuteronômio, o sétimo ano é também o ano da remissão, em que as dívidas entre israelitas eram perdoadas. A prática expressava que a terra pertencia a Deus e que o povo dependia de sua provisão. O livro de Crônicas interpreta os setenta anos de exílio como o tempo em que a terra desfrutou os sábados que não lhe haviam sido dados.",
    dados: [["Frequência", "A cada 7 anos"], ["Duração", "1 ano"]],
    refs: ["LEV 25:4", "EXO 23:11", "DEU 15:1", "2CH 36:21"]
  },
  {
    termo: "Jubileu",
    categoria: "Festas e calendário",
    texto: "Ano especial proclamado ao som de trombeta no Dia da Expiação, depois de sete ciclos de anos sabáticos. Nele se proclamava liberdade na terra: as propriedades rurais vendidas voltavam à família de origem e os israelitas que haviam se vendido por dívida eram libertos. O princípio era que a terra pertence ao Senhor e não podia ser vendida em definitivo. Não há registro claro de quanto essa lei foi praticada, e debate-se se o jubileu era o quadragésimo nono ou o quinquagésimo ano.",
    dados: [["Frequência", "A cada 50 anos (contagem debatida)"], ["Hebraico", "yobel, 'chifre de carneiro'"]],
    refs: ["LEV 25:10", "LEV 25:13", "LEV 25:23", "LUK 4:19"]
  },
  {
    termo: "Calendário hebraico",
    categoria: "Festas e calendário",
    texto: "O calendário de Israel era lunissolar: os meses seguiam as fases da lua, com 29 ou 30 dias, e de tempos em tempos acrescentava-se um décimo terceiro mês para manter as festas nas estações certas. O ano religioso começava na primavera, no mês da Páscoa; o ano civil, segundo a prática posterior, começava no outono. Antes do exílio os meses eram geralmente indicados por número ou por nomes cananeus (abibe, zive, etanim, bul); depois do exílio adotaram-se os nomes de origem babilônica, usados até hoje.",
    dados: [
      ["1º mês", "Nisã (antes: abibe) — março/abril"],
      ["2º mês", "Iyar (antes: zive) — abril/maio"],
      ["3º mês", "Sivã — maio/junho"],
      ["4º mês", "Tamuz — junho/julho"],
      ["5º mês", "Abe — julho/agosto"],
      ["6º mês", "Elul — agosto/setembro"],
      ["7º mês", "Tisri (antes: etanim) — setembro/outubro"],
      ["8º mês", "Marquesvã (antes: bul) — outubro/novembro"],
      ["9º mês", "Quisleu — novembro/dezembro"],
      ["10º mês", "Tebete — dezembro/janeiro"],
      ["11º mês", "Sebate — janeiro/fevereiro"],
      ["12º mês", "Adar — fevereiro/março"],
      ["Mês intercalar", "Segundo adar, acrescentado em alguns anos"]
    ],
    refs: ["EXO 12:2", "EXO 13:4", "1KI 6:1", "NEH 2:1", "EST 3:7"]
  },
  {
    termo: "Vigílias da noite",
    categoria: "Festas e calendário",
    texto: "Divisões da noite, originalmente ligadas aos turnos de guarda. No Antigo Testamento a noite era dividida em três vigílias: a primeira, a do meio e a da manhã. No período romano, refletido nos Evangelhos, passou-se a contar quatro vigílias de cerca de três horas cada, chamadas de tarde, meia-noite, canto do galo e manhã. Assim, quando Jesus vai ao encontro dos discípulos andando sobre o mar 'na quarta vigília', trata-se das últimas horas antes do amanhecer.",
    dados: [["Antigo Testamento", "3 vigílias (cerca de 4 horas cada)"], ["Período romano", "4 vigílias (cerca de 3 horas cada)"], ["Quarta vigília", "Aproximadamente das 3h às 6h"]],
    refs: ["EXO 14:24", "JDG 7:19", "LAM 2:19", "MAT 14:25", "MAR 13:35"]
  },
  {
    termo: "Horas do dia",
    categoria: "Festas e calendário",
    texto: "No tempo do Novo Testamento, o período de luz, do nascer ao pôr do sol, era dividido em doze horas, cuja duração variava conforme a estação. A contagem começava ao amanhecer: a hora terceira corresponde aproximadamente às nove da manhã, a sexta ao meio-dia e a nona às três da tarde. O dia civil judaico começava ao pôr do sol. Debate-se se o Evangelho de João segue essa mesma contagem ou outra em algumas passagens. A hora nona era também hora de oração no templo.",
    dados: [["Hora terceira", "Aproximadamente 9h"], ["Hora sexta", "Aproximadamente 12h"], ["Hora nona", "Aproximadamente 15h"], ["Hora undécima", "Aproximadamente 17h"]],
    refs: ["JOH 11:9", "MAT 20:3", "MAR 15:25", "MAT 27:45", "ACT 3:1"]
  },

  // ───────────────────────── Tabernáculo e templo ─────────────────────────
  {
    termo: "Tabernáculo",
    categoria: "Tabernáculo e templo",
    texto: "Santuário portátil construído por Israel no deserto, conforme o modelo mostrado a Moisés no Sinai. Era uma tenda de tábuas de acácia revestidas de ouro e cobertas por cortinas e peles, dividida em Lugar Santo e Santo dos Santos e cercada por um átrio. Representava a habitação de Deus no meio do povo e acompanhou Israel até a construção do templo de Salomão. A carta aos Hebreus o descreve como figura e sombra das realidades celestiais, e João diz que o Verbo 'habitou' (literalmente, armou sua tenda) entre nós.",
    dados: [["Tenda", "Aproximadamente 30 × 10 côvados (cerca de 13,5 × 4,5 m)"], ["Outros nomes", "Tenda da congregação, tenda do encontro"]],
    refs: ["EXO 25:8", "EXO 26:1", "EXO 40:34", "JOH 1:14", "HEB 8:5"]
  },
  {
    termo: "Átrio",
    categoria: "Tabernáculo e templo",
    texto: "Pátio a céu aberto que cercava o tabernáculo, delimitado por cortinas de linho presas a colunas com bases de bronze. A entrada ficava do lado leste. No átrio ficavam o altar do holocausto e a bacia de bronze, e era ali que o povo trazia suas ofertas. Nos templos de Jerusalém o conceito foi ampliado em vários pátios sucessivos, com graus crescentes de restrição de acesso. Nos Salmos, estar nos átrios do Senhor é expressão do desejo de estar na presença de Deus.",
    dados: [["Dimensões (tabernáculo)", "100 × 50 côvados (aproximadamente 45 × 22 m)"], ["Altura das cortinas", "5 côvados (aproximadamente 2,2 m)"]],
    refs: ["EXO 27:9", "EXO 27:18", "EXO 38:9", "PSA 84:2"]
  },
  {
    termo: "Altar do holocausto",
    categoria: "Tabernáculo e templo",
    texto: "Altar grande, situado no átrio diante da entrada do tabernáculo, sobre o qual se queimavam os sacrifícios. No tabernáculo era de madeira de acácia revestida de bronze, quadrado, com uma ponta em forma de chifre em cada canto e uma grelha de bronze; era transportado por varas. O fogo sobre ele devia ser mantido aceso continuamente. No templo de Salomão foi substituído por um altar de bronze muito maior. Também é chamado de altar de bronze.",
    dados: [["Dimensões (tabernáculo)", "5 × 5 × 3 côvados (aproximadamente 2,2 × 2,2 × 1,3 m)"], ["Material", "Acácia revestida de bronze"]],
    refs: ["EXO 27:1", "EXO 38:1", "LEV 6:13", "2CH 4:1"]
  },
  {
    termo: "Bacia de bronze",
    categoria: "Tabernáculo e templo",
    texto: "Recipiente com água colocado no átrio, entre o altar do holocausto e a entrada da tenda. Nela Arão e seus filhos lavavam as mãos e os pés antes de entrar no santuário ou de se aproximar do altar, sob pena de morte. Foi feita com o bronze dos espelhos das mulheres que serviam à entrada da tenda; suas medidas não são informadas. No templo de Salomão, a função foi assumida pelo 'mar de fundição' e por dez pias menores sobre bases com rodas.",
    dados: [["Material", "Bronze (dos espelhos das mulheres)"], ["Uso", "Lavagem ritual dos sacerdotes"]],
    refs: ["EXO 30:18", "EXO 38:8", "EXO 40:30", "1KI 7:23"]
  },
  {
    termo: "Lugar Santo",
    categoria: "Tabernáculo e templo",
    texto: "Primeiro e maior compartimento do tabernáculo e, depois, do templo. Nele ficavam a mesa dos pães da proposição, ao norte, o candelabro de ouro, ao sul, e o altar do incenso, diante do véu. Somente os sacerdotes entravam ali, diariamente, para cuidar das lâmpadas, queimar incenso e, a cada sábado, trocar os pães. Era separado do átrio por uma cortina e do Santo dos Santos pelo véu. A carta aos Hebreus o descreve ao explicar o culto da primeira aliança.",
    dados: [["Dimensões (tabernáculo)", "Aproximadamente 20 × 10 côvados (cerca de 9 × 4,5 m)"], ["Dimensões (templo de Salomão)", "40 × 20 côvados"]],
    refs: ["EXO 26:33", "EXO 40:22", "HEB 9:2", "HEB 9:6"]
  },
  {
    termo: "Mesa dos pães da proposição",
    categoria: "Tabernáculo e templo",
    texto: "Mesa de madeira de acácia revestida de ouro, colocada no lado norte do Lugar Santo. Sobre ela ficavam continuamente doze pães, em duas fileiras, representando as doze tribos diante do Senhor. Os pães eram trocados a cada sábado, e os que saíam eram comidos pelos sacerdotes em lugar santo. Davi e seus homens, em necessidade, receberam desses pães do sacerdote Aimeleque, episódio que Jesus cita ao discutir o sábado. São também chamados de pães da presença.",
    dados: [["Dimensões", "2 × 1 × 1,5 côvados (aproximadamente 90 × 45 × 67 cm)"], ["Pães", "12, trocados a cada sábado"]],
    refs: ["EXO 25:23", "EXO 25:30", "LEV 24:5", "1SA 21:6", "MAT 12:4"]
  },
  {
    termo: "Candelabro",
    categoria: "Tabernáculo e templo",
    texto: "Candeeiro de ouro puro batido, com uma haste central e seis braços, sustentando sete lâmpadas alimentadas com azeite puro de oliva. Ficava no lado sul do Lugar Santo e era a única fonte de luz do recinto; os sacerdotes cuidavam das lâmpadas de manhã e à tarde. Seus braços eram ornados com cálices em forma de flor de amendoeira. No templo de Salomão havia dez candelabros. Em Zacarias e no Apocalipse, o candelabro aparece em visões; no Apocalipse, sete candelabros representam sete igrejas. Em hebraico chama-se menorá.",
    dados: [["Material", "Um talento de ouro puro (aproximadamente 34 kg), com os utensílios"], ["Lâmpadas", "7"]],
    refs: ["EXO 25:31", "EXO 25:37", "LEV 24:2", "ZEC 4:2", "REV 1:20"]
  },
  {
    termo: "Altar do incenso",
    categoria: "Tabernáculo e templo",
    texto: "Pequeno altar de acácia revestido de ouro, com quatro pontas, colocado no Lugar Santo diante do véu que ocultava a arca. Nele o sacerdote queimava incenso aromático todas as manhãs e todas as tardes, quando cuidava das lâmpadas. Uma vez por ano, no Dia da Expiação, suas pontas recebiam sangue. Foi junto a esse altar que o anjo apareceu a Zacarias, pai de João Batista. No Apocalipse, o incenso oferecido no altar de ouro acompanha as orações dos santos.",
    dados: [["Dimensões", "1 × 1 × 2 côvados (aproximadamente 45 × 45 × 90 cm)"], ["Outro nome", "Altar de ouro"]],
    refs: ["EXO 30:1", "EXO 30:7", "LUK 1:11", "REV 8:3"]
  },
  {
    termo: "Véu",
    categoria: "Tabernáculo e templo",
    texto: "Cortina de linho fino torcido, bordada com querubins em azul, púrpura e carmesim, que separava o Lugar Santo do Santo dos Santos. Pendia de quatro colunas e ocultava a arca da aliança; somente o sumo sacerdote passava por ele, uma vez por ano. Os Evangelhos registram que, na morte de Jesus, o véu do templo se rasgou em dois, de alto a baixo. A carta aos Hebreus interpreta o fato como a abertura de um novo e vivo caminho de acesso a Deus.",
    dados: [["Material", "Linho fino com fios azuis, púrpura e carmesim"], ["Função", "Separar o Lugar Santo do Santo dos Santos"]],
    refs: ["EXO 26:31", "EXO 26:33", "MAT 27:51", "HEB 10:20"]
  },
  {
    termo: "Santo dos Santos",
    categoria: "Tabernáculo e templo",
    texto: "Compartimento mais interno do tabernáculo e do templo, de formato cúbico, onde ficava a arca da aliança. Era considerado o lugar da presença de Deus, e nele só entrava o sumo sacerdote, uma vez por ano, no Dia da Expiação, levando sangue e incenso. No templo de Salomão era revestido de ouro e abrigava dois grandes querubins de madeira de oliveira. No segundo templo o recinto ficou vazio, pois a arca havia desaparecido. Também é chamado de Lugar Santíssimo ou oráculo.",
    dados: [["Dimensões (tabernáculo)", "Aproximadamente 10 × 10 × 10 côvados (cerca de 4,5 m de lado)"], ["Dimensões (templo de Salomão)", "20 × 20 × 20 côvados"]],
    refs: ["EXO 26:34", "LEV 16:2", "1KI 6:16", "HEB 9:3"]
  },
  {
    termo: "Arca da aliança",
    categoria: "Tabernáculo e templo",
    texto: "Caixa de madeira de acácia revestida de ouro por dentro e por fora, transportada por varas passadas em argolas. Guardava as duas tábuas da Lei e era coberta pelo propiciatório, com dois querubins. Era o objeto mais sagrado de Israel, símbolo do trono e da presença do Senhor. Foi à frente do povo na travessia do Jordão, chegou a ser capturada pelos filisteus e foi levada por Davi a Jerusalém e por Salomão ao templo. Desaparece dos registros por ocasião da destruição de Jerusalém pelos babilônios.",
    dados: [["Dimensões", "2,5 × 1,5 × 1,5 côvados (aproximadamente 1,1 × 0,7 × 0,7 m)"], ["Conteúdo", "Tábuas da Lei; Hebreus menciona também o maná e a vara de Arão"]],
    refs: ["EXO 25:10", "DEU 10:5", "1SA 4:11", "1KI 8:6", "HEB 9:4"]
  },
  {
    termo: "Propiciatório",
    categoria: "Tabernáculo e templo",
    texto: "Tampa de ouro puro que cobria a arca da aliança, com um querubim em cada extremidade, feitos de uma só peça com ela. Era o lugar de onde Deus prometeu falar com Moisés. No Dia da Expiação, o sumo sacerdote aspergia sobre ele e diante dele o sangue do sacrifício, fazendo expiação pelo santuário e pelo povo. O termo grego correspondente é usado por Paulo em Romanos ao falar de Cristo como propiciação, e em Hebreus ao descrever a arca.",
    dados: [["Dimensões", "2,5 × 1,5 côvados (aproximadamente 1,1 × 0,7 m)"], ["Hebraico", "kapporet, ligado ao verbo 'cobrir, expiar'"]],
    refs: ["EXO 25:17", "EXO 25:22", "LEV 16:14", "ROM 3:25", "HEB 9:5"]
  },
  {
    termo: "Querubins",
    categoria: "Tabernáculo e templo",
    texto: "Seres celestiais associados à presença e à santidade de Deus. Aparecem pela primeira vez guardando o caminho da árvore da vida, a leste do Éden. No santuário, duas figuras de querubins de ouro ficavam sobre o propiciatório, com as asas estendidas; outros eram bordados no véu e nas cortinas, e Salomão fez dois, enormes, para o Santo dos Santos. O Senhor é descrito como aquele que está entronizado entre os querubins. Ezequiel os descreve em visão, com asas e várias faces; sua aparência exata é debatida.",
    dados: [["No propiciatório", "2, de ouro batido"], ["No templo de Salomão", "2, de madeira de oliveira revestida de ouro, com 10 côvados de altura"]],
    refs: ["GEN 3:24", "EXO 25:20", "1KI 6:23", "PSA 80:1", "EZE 10:1"]
  },
  {
    termo: "Templo de Salomão",
    categoria: "Tabernáculo e templo",
    texto: "Primeiro templo de Jerusalém, construído por Salomão no monte Moriá para substituir o tabernáculo. A obra começou no quarto ano de seu reinado e durou sete anos, com pedra lavrada, cedro do Líbano e muito ouro, e com o auxílio de artesãos de Tiro. Seguia a planta do tabernáculo em escala dobrada: pórtico, Lugar Santo e Santo dos Santos. Na dedicação, a glória do Senhor encheu a casa. Foi saqueado diversas vezes e, por fim, queimado pelos babilônios na queda de Jerusalém.",
    dados: [["Dimensões da casa", "60 × 20 × 30 côvados (aproximadamente 27 × 9 × 13,5 m)"], ["Construção", "Aproximadamente 966–959 a.C."], ["Destruição", "586 a.C. (ou 587), por Nabucodonosor"]],
    refs: ["1KI 6:1", "1KI 8:10", "2CH 3:1", "2KI 25:9"]
  },
  {
    termo: "Segundo templo",
    categoria: "Tabernáculo e templo",
    texto: "Templo reconstruído em Jerusalém pelos judeus que voltaram do exílio babilônico, sob a liderança de Zorobabel e do sumo sacerdote Josué, com autorização do rei persa Ciro. A obra foi interrompida por oposição local e retomada com o incentivo dos profetas Ageu e Zacarias, sendo concluída no sexto ano de Dario. Era mais modesto que o de Salomão, o que fez chorar os anciãos que tinham visto o primeiro. A expressão 'período do segundo templo' abrange também a reforma de Herodes, até o ano 70 d.C.",
    dados: [["Início da obra", "Aproximadamente 536 a.C."], ["Conclusão", "Aproximadamente 516 a.C."]],
    refs: ["EZR 3:10", "EZR 6:15", "HAG 2:9", "ZEC 4:9"]
  },
  {
    termo: "Templo de Herodes",
    categoria: "Tabernáculo e templo",
    texto: "Nome dado à grande reforma e ampliação do segundo templo iniciada por Herodes, o Grande, por volta de 20 a.C. A esplanada foi ampliada com enormes muros de contenção, cercada de pórticos e dividida em pátios; o santuário foi reconstruído em mármore e ouro. As obras se estenderam por décadas, como indica a menção a quarenta e seis anos no Evangelho de João, e só terminaram pouco antes da guerra contra Roma. É o templo frequentado por Jesus e pelos apóstolos, destruído pelos romanos no ano 70 d.C.",
    dados: [["Início", "Aproximadamente 20–19 a.C."], ["Conclusão", "Aproximadamente 63–64 d.C."], ["Destruição", "70 d.C., pelas tropas de Tito"]],
    refs: ["JOH 2:20", "MAR 13:1", "MAR 13:2", "LUK 21:5"]
  },
  {
    termo: "Pátio dos gentios",
    categoria: "Tabernáculo e templo",
    texto: "Área externa da esplanada do templo de Herodes, a única em que os não judeus podiam entrar. Uma balaustrada baixa, com avisos em grego e latim, proibia aos estrangeiros avançar para os pátios internos sob pena de morte. Era nesse espaço que funcionavam os cambistas e os vendedores de animais para os sacrifícios, expulsos por Jesus. A acusação de que Paulo teria levado gregos além desse limite provocou um tumulto em Jerusalém. A expressão não aparece na Bíblia; vem de fontes posteriores.",
    dados: [["Acesso", "Aberto a judeus e gentios"], ["Limite", "Balaustrada com inscrições de advertência"]],
    refs: ["MAR 11:15", "MAR 11:17", "ACT 21:28", "EPH 2:14", "REV 11:2"]
  },
  {
    termo: "Sinagoga",
    categoria: "Tabernáculo e templo",
    texto: "Local de reunião da comunidade judaica para leitura das Escrituras, oração e ensino; servia também de escola e de tribunal local. Sua origem é incerta e costuma ser situada no exílio babilônico ou no período posterior, quando o povo estava longe do templo. No primeiro século havia sinagogas em toda a Palestina e nas cidades da Diáspora. O culto incluía leitura da Lei e dos Profetas, seguida de exposição, da qual visitantes podiam participar. Jesus ensinou nas sinagogas da Galileia, e Paulo costumava começar por elas sua pregação.",
    dados: [["Dirigente", "Chefe (principal) da sinagoga"], ["Grego", "synagoge, 'reunião, assembleia'"]],
    refs: ["MAR 1:21", "LUK 4:16", "JOH 9:22", "ACT 13:15", "ACT 15:21"]
  },
  {
    termo: "Lugares altos",
    categoria: "Tabernáculo e templo",
    texto: "Santuários locais, geralmente em colinas ou plataformas elevadas, com altar e, muitas vezes, colunas de pedra e postes sagrados. Eram característicos do culto cananeu a Baal e Aserá, e a Lei mandava destruí-los. Antes da construção do templo, Israel chegou a sacrificar ao Senhor em lugares assim; depois, eles se tornaram foco de culto irregular e de idolatria. Os livros de Reis avaliam cada rei de Judá, entre outros critérios, por ter ou não removido os lugares altos, como fizeram Ezequias e Josias.",
    dados: [["Hebraico", "bamot"], ["Elementos comuns", "Altar, coluna de pedra, poste-ídolo"]],
    refs: ["DEU 12:2", "1KI 3:2", "1KI 12:31", "2KI 18:4", "2KI 23:8"]
  },

  // ───────────────────────── Sacrifícios e culto ─────────────────────────
  {
    termo: "Holocausto",
    categoria: "Sacrifícios e culto",
    texto: "Sacrifício em que o animal era queimado por inteiro sobre o altar, exceto o couro, que ficava para o sacerdote. O ofertante trazia um macho sem defeito, do gado, do rebanho ou, se fosse pobre, uma ave; impunha a mão sobre a cabeça do animal, e o sangue era aspergido ao redor do altar. Expressava entrega total a Deus e fazia expiação. Havia também o holocausto contínuo, oferecido todas as manhãs e todas as tardes em nome do povo. A palavra vem do grego e significa 'totalmente queimado'.",
    dados: [["Animais", "Novilho, carneiro, bode, rola ou pombinho"], ["Hebraico", "olá, 'o que sobe'"]],
    refs: ["LEV 1:3", "LEV 1:9", "LEV 6:9", "EXO 29:42", "PSA 51:16"]
  },
  {
    termo: "Oferta de cereais",
    categoria: "Sacrifícios e culto",
    texto: "Oferta sem sangue, feita de flor de farinha com azeite e incenso, crua ou preparada no forno, na assadeira ou na frigideira. Não podia levar fermento nem mel e devia ser sempre temperada com sal. Um punhado era queimado no altar como porção memorial, e o restante cabia aos sacerdotes. Acompanhava com frequência os holocaustos e as ofertas pacíficas e expressava gratidão e dedicação do fruto do trabalho. Em traduções tradicionais aparece como oferta de manjares.",
    dados: [["Ingredientes", "Flor de farinha, azeite, incenso e sal"], ["Proibido", "Fermento e mel"]],
    refs: ["LEV 2:1", "LEV 2:13", "LEV 6:14"]
  },
  {
    termo: "Oferta pacífica",
    categoria: "Sacrifícios e culto",
    texto: "Sacrifício de comunhão, o único em que o ofertante comia parte da carne. A gordura era queimada no altar, o peito e a coxa direita cabiam aos sacerdotes, e o restante era consumido pelo ofertante, sua família e convidados, em estado de pureza ritual, dentro de um ou dois dias. Podia ser oferecida em ação de graças, em cumprimento de voto ou como oferta voluntária. Expressava paz e comunhão com Deus, tendo o caráter de refeição festiva diante dele.",
    dados: [["Tipos", "Ação de graças, voto e oferta voluntária"], ["Animais", "Gado ou rebanho, macho ou fêmea, sem defeito"]],
    refs: ["LEV 3:1", "LEV 7:11", "LEV 7:15"]
  },
  {
    termo: "Oferta pelo pecado",
    categoria: "Sacrifícios e culto",
    texto: "Sacrifício exigido quando alguém pecava por ignorância ou inadvertência contra um mandamento, ou em certos casos de impureza. O animal variava conforme a posição do ofensor: um novilho pelo sacerdote ungido ou por toda a congregação, um bode pelo príncipe, uma cabra ou cordeira pela pessoa comum; os pobres podiam trazer duas aves ou mesmo farinha. O sangue era aplicado às pontas do altar. Nos casos mais graves, a carne era queimada fora do arraial, detalhe que a carta aos Hebreus relaciona com a morte de Jesus fora da porta.",
    dados: [["Ocasião", "Pecados não intencionais e purificações"], ["Hebraico", "chattat"]],
    refs: ["LEV 4:2", "LEV 4:3", "LEV 5:7", "HEB 13:11"]
  },
  {
    termo: "Oferta pela culpa",
    categoria: "Sacrifícios e culto",
    texto: "Sacrifício prescrito para faltas que envolviam prejuízo mensurável, contra as coisas sagradas ou contra o próximo, como retenção de depósito, roubo ou fraude. Além de oferecer um carneiro sem defeito, o culpado devia restituir o valor integral, acrescido de um quinto. A distinção exata entre essa oferta e a oferta pelo pecado é debatida. Isaías usa o termo hebraico correspondente ao dizer que o Servo do Senhor poria a sua alma como oferta pela culpa.",
    dados: [["Animal", "Carneiro sem defeito"], ["Restituição", "Valor do dano mais um quinto (20%)"], ["Hebraico", "asham"]],
    refs: ["LEV 5:15", "LEV 6:5", "LEV 7:1", "ISA 53:10"]
  },
  {
    termo: "Libação",
    categoria: "Sacrifícios e culto",
    texto: "Oferta líquida, normalmente de vinho, derramada junto ao altar como complemento dos holocaustos e das ofertas pacíficas. A quantidade era proporcional ao animal sacrificado: um quarto de him para um cordeiro, um terço para um carneiro e meio him para um novilho. Jacó derramou uma libação sobre a coluna que ergueu em Betel. Os profetas condenam as libações feitas a outros deuses. Paulo usa a imagem para falar de sua própria vida, derramada como libação no serviço do evangelho.",
    dados: [["Líquido", "Vinho"], ["Quantidade", "De 1/4 a 1/2 him (aproximadamente 1 a 2 litros)"]],
    refs: ["GEN 35:14", "NUM 15:5", "NUM 28:7", "PHI 2:17", "2TI 4:6"]
  },
  {
    termo: "Incenso",
    categoria: "Sacrifícios e culto",
    texto: "Mistura aromática queimada diante do Senhor. O incenso sagrado era composto de estoraque, ônica, gálbano e incenso puro em partes iguais, temperado com sal; era proibido fabricá-lo para uso particular. Era queimado duas vezes ao dia no altar de ouro e levado em um incensário ao Santo dos Santos no Dia da Expiação. Oferecer incenso era função exclusiva dos sacerdotes. Nos Salmos e no Apocalipse, a fumaça do incenso que sobe é imagem das orações do povo de Deus.",
    dados: [["Composição", "Estoraque, ônica, gálbano e incenso puro"], ["Frequência", "De manhã e à tarde"]],
    refs: ["EXO 30:34", "PSA 141:2", "LUK 1:9", "REV 5:8"]
  },
  {
    termo: "Dízimo",
    categoria: "Sacrifícios e culto",
    texto: "Décima parte da produção da terra e dos rebanhos, separada para o Senhor. Abraão deu o dízimo a Melquisedeque, e Jacó o prometeu em Betel, antes da Lei. Na legislação mosaica, o dízimo sustentava os levitas, que não tinham herança de terra e que, por sua vez, davam o dízimo do que recebiam aos sacerdotes; Deuteronômio menciona ainda o dízimo consumido nas festas e o destinado, a cada três anos, aos pobres. A relação entre essas prescrições é debatida. Malaquias repreende o povo por retê-lo, e Jesus critica quem dizimava as menores ervas e negligenciava a justiça.",
    dados: [["Proporção", "Um décimo (10%)"], ["Destino principal", "Sustento dos levitas"]],
    refs: ["GEN 28:22", "LEV 27:30", "NUM 18:21", "MAL 3:10", "MAT 23:23"]
  },
  {
    termo: "Primícias (oferta)",
    categoria: "Sacrifícios e culto",
    texto: "Primeiros frutos de cada colheita, levados ao santuário como reconhecimento de que a terra e sua produção vinham de Deus. O israelita os apresentava em um cesto ao sacerdote, recitando a história da libertação do Egito e da entrada na terra. As primícias pertenciam aos sacerdotes. O mesmo princípio valia para os primogênitos dos homens e dos animais, que eram consagrados ou resgatados. No Novo Testamento, o termo é aplicado a Cristo ressuscitado, ao Espírito recebido pelos crentes e aos próprios crentes.",
    dados: [["Destino", "Sacerdotes"], ["Hebraico", "bikkurim; reshit"]],
    refs: ["EXO 23:19", "DEU 26:2", "PRO 3:9", "ROM 8:23", "JAM 1:18"]
  },
  {
    termo: "Voto",
    categoria: "Sacrifícios e culto",
    texto: "Promessa solene feita a Deus, espontaneamente, de oferecer algo ou de abster-se de alguma coisa, muitas vezes em um pedido de socorro. Ninguém era obrigado a fazer votos, mas, uma vez feitos, deviam ser cumpridos sem demora. A Lei regulava os votos das mulheres, que podiam ser anulados pelo pai ou pelo marido no dia em que deles soubessem, e a avaliação de pessoas e bens consagrados. Ana fez voto ao pedir um filho. O livro de Eclesiastes adverte que é melhor não votar do que votar e não cumprir.",
    dados: [["Caráter", "Voluntário, mas obrigatório depois de proferido"]],
    refs: ["NUM 30:2", "DEU 23:21", "1SA 1:11", "ECC 5:4", "ACT 18:18"]
  },
  {
    termo: "Nazireu",
    categoria: "Sacrifícios e culto",
    texto: "Homem ou mulher que se consagrava ao Senhor por um voto especial. Durante o período do voto, o nazireu não bebia vinho nem consumia nada que viesse da videira, não cortava o cabelo e não se aproximava de cadáver, nem mesmo de parentes próximos. Ao final, oferecia sacrifícios e rapava a cabeça à entrada do santuário. Normalmente o voto era temporário; Sansão e, ao que tudo indica, Samuel foram consagrados desde o nascimento. Em Atos, Paulo paga as despesas de quatro homens que estavam sob voto semelhante.",
    dados: [["Restrições", "Produtos da videira, corte do cabelo, contato com mortos"], ["Hebraico", "nazir, 'separado, consagrado'"]],
    refs: ["NUM 6:2", "NUM 6:5", "JDG 13:5", "AMO 2:11", "ACT 21:24"]
  },
  {
    termo: "Circuncisão",
    categoria: "Sacrifícios e culto",
    texto: "Remoção do prepúcio, estabelecida por Deus como sinal da aliança com Abraão e sua descendência. Todo menino devia ser circuncidado no oitavo dia de vida, bem como os servos da casa; o estrangeiro que quisesse participar da Páscoa também. Os profetas falam da circuncisão do coração como a realidade que o rito externo indicava. No Novo Testamento, a exigência de circuncidar os gentios convertidos foi o centro de uma grande controvérsia, decidida em Jerusalém; Paulo ensina que o que vale é a circuncisão do coração, pelo Espírito.",
    dados: [["Quando", "No oitavo dia de vida"], ["Significado", "Sinal da aliança com Abraão"]],
    refs: ["GEN 17:10", "GEN 17:12", "LEV 12:3", "LUK 2:21", "ROM 2:29"]
  },
  {
    termo: "Purificação",
    categoria: "Sacrifícios e culto",
    texto: "Conjunto de ritos que restauravam a pessoa ao estado de pureza cerimonial, necessário para participar do culto. Conforme o caso, incluíam um período de espera, lavagem do corpo e das roupas, e sacrifícios. Havia regras para o parto, as doenças de pele, os fluxos corporais e o contato com mortos, este último tratado com a água preparada com as cinzas de uma novilha vermelha. No tempo de Jesus, a tradição havia ampliado as lavagens, como a das mãos antes das refeições; as talhas de pedra de Caná serviam a esse fim.",
    dados: [["Meios", "Água, tempo de espera e sacrifício"], ["Após o parto", "40 dias (menino) ou 80 dias (menina)"]],
    refs: ["LEV 12:4", "NUM 19:9", "MAR 7:3", "LUK 2:22", "JOH 2:6"]
  },
  {
    termo: "Puro e impuro",
    categoria: "Sacrifícios e culto",
    texto: "Categorias cerimoniais que definiam quem e o que estava apto a se aproximar do santuário. A impureza não equivalia necessariamente a pecado: podia resultar de situações comuns da vida, como parto, doença de pele, fluxos corporais ou contato com um morto. A Lei também distinguia animais puros, que podiam ser comidos, dos impuros. Cabia aos sacerdotes ensinar essa distinção. Jesus ensinou que o que contamina o homem é o que sai do coração, e a visão de Pedro em Jope preparou a acolhida dos gentios na igreja.",
    dados: [["Animais terrestres puros", "Os que têm casco fendido e ruminam"], ["Peixes puros", "Os que têm barbatanas e escamas"]],
    refs: ["LEV 10:10", "LEV 11:47", "MAR 7:19", "ACT 10:15"]
  },
  {
    termo: "Sacerdote",
    categoria: "Sacrifícios e culto",
    texto: "Ministro autorizado a oficiar no altar e no santuário, servindo de mediador entre Deus e o povo. Em Israel, o sacerdócio foi confiado a Arão e a seus descendentes, da tribo de Levi. Os sacerdotes ofereciam os sacrifícios, queimavam incenso, cuidavam do Lugar Santo, abençoavam o povo, ensinavam a Lei e julgavam questões de pureza. Viviam de partes dos sacrifícios, das primícias e do dízimo dos levitas. No tempo de Davi foram organizados em vinte e quatro turnos. O Novo Testamento chama todo o povo de Deus de sacerdócio real.",
    dados: [["Linhagem", "Descendentes de Arão"], ["Turnos", "24, desde a organização de Davi"]],
    refs: ["EXO 28:1", "NUM 18:7", "1CH 24:19", "MAL 2:7", "1PE 2:9"]
  },
  {
    termo: "Sumo sacerdote",
    categoria: "Sacrifícios e culto",
    texto: "Chefe dos sacerdotes e principal representante do povo diante de Deus. Usava vestes próprias, com o éfode, o peitoral com doze pedras e a lâmina de ouro com a inscrição 'Santidade ao Senhor'. Somente ele entrava no Santo dos Santos, no Dia da Expiação. O cargo era vitalício e hereditário, a começar por Arão; no período romano passou a ser nomeado e destituído pelas autoridades, e presidia o sinédrio, como Caifás no julgamento de Jesus. A carta aos Hebreus apresenta Jesus como o grande sumo sacerdote.",
    dados: [["Primeiro", "Arão"], ["Função exclusiva", "Entrar no Santo dos Santos uma vez por ano"]],
    refs: ["LEV 21:10", "LEV 16:32", "JOH 11:49", "HEB 4:14", "HEB 9:7"]
  },
  {
    termo: "Levita",
    categoria: "Sacrifícios e culto",
    texto: "Membro da tribo de Levi. Em sentido mais restrito, os levitas eram os que não descendiam de Arão e auxiliavam os sacerdotes: no deserto, desmontavam, transportavam e guardavam o tabernáculo; no templo, serviam como porteiros, cantores, músicos e ajudantes. Foram tomados por Deus em lugar dos primogênitos de Israel. Não receberam território próprio, mas quarenta e oito cidades espalhadas entre as tribos, e viviam dos dízimos. Também tinham parte no ensino da Lei ao povo.",
    dados: [["Divisões", "Gersonitas, coatitas e meraritas"], ["Sustento", "Dízimos de Israel"], ["Cidades", "48, incluídas as 6 de refúgio"]],
    refs: ["NUM 3:6", "NUM 18:21", "DEU 10:8", "1CH 16:4"]
  },
  {
    termo: "Éfode",
    categoria: "Sacrifícios e culto",
    texto: "Peça das vestes do sumo sacerdote, feita de ouro, fios azuis, púrpura e carmesim e linho fino, usada sobre o manto e presa por duas ombreiras e um cinto. Nas ombreiras havia duas pedras de ônix com os nomes das tribos, e sobre ele se prendia o peitoral com o Urim e o Tumim. Havia também um éfode simples de linho, usado por sacerdotes, pelo menino Samuel e por Davi diante da arca. Em Juízes, o éfode feito por Gideão tornou-se objeto de idolatria.",
    dados: [["Materiais", "Ouro, azul, púrpura, carmesim e linho fino"], ["Pedras", "Duas de ônix, com os nomes das doze tribos"]],
    refs: ["EXO 28:6", "EXO 28:12", "JDG 8:27", "1SA 2:18", "2SA 6:14"]
  },
  {
    termo: "Urim e Tumim",
    categoria: "Sacrifícios e culto",
    texto: "Objetos guardados no peitoral do sumo sacerdote e usados para consultar a vontade de Deus em questões importantes para a nação. A Bíblia não descreve sua forma nem o modo exato de uso; supõe-se que funcionassem como uma espécie de sorte sagrada, com respostas de sim ou não, mas isso é debatido. Josué devia consultar o Senhor por meio deles, e Saul não obteve resposta. Depois do exílio, já não estavam disponíveis, e certas decisões ficaram à espera de um sacerdote que os tivesse.",
    dados: [["Significado provável", "'Luzes e perfeições' (debatido)"], ["Local", "No peitoral do juízo, sobre o éfode"]],
    refs: ["EXO 28:30", "NUM 27:21", "1SA 28:6", "EZR 2:63"]
  },
  {
    termo: "Unção",
    categoria: "Sacrifícios e culto",
    texto: "Ato de derramar ou aplicar óleo sobre uma pessoa ou objeto para separá-lo para Deus. O óleo sagrado da unção era feito de azeite com mirra, canela, cálamo e cássia, e com ele se ungiram o tabernáculo, seus utensílios e os sacerdotes. Reis como Saul e Davi também foram ungidos, e o título 'ungido do Senhor' deu origem ao termo Messias. No uso diário, ungir com óleo era gesto de cuidado, alegria e hospitalidade. Tiago orienta os presbíteros a orar pelos enfermos, ungindo-os com óleo.",
    dados: [["Óleo sagrado", "Azeite, mirra, canela, cálamo aromático e cássia"], ["Ungidos", "Sacerdotes, reis e, em alguns casos, profetas"]],
    refs: ["EXO 30:25", "EXO 30:30", "1SA 16:13", "PSA 133:2", "JAM 5:14"]
  },
  {
    termo: "Jejum",
    categoria: "Sacrifícios e culto",
    texto: "Abstenção voluntária de alimento, por tempo determinado, como expressão de humilhação, arrependimento, luto ou busca intensa de Deus. O único jejum prescrito na Lei era o do Dia da Expiação, descrito como 'afligir a alma'; outros foram proclamados em momentos de crise, e depois do exílio surgiram jejuns anuais em memória da queda de Jerusalém. Isaías e Joel insistem em que o jejum venha acompanhado de justiça e conversão sincera. Jesus jejuou no deserto e ensinou a fazê-lo sem ostentação; a igreja de Antioquia jejuou ao enviar missionários.",
    dados: [["Jejum da Lei", "Dia da Expiação (10 de tisri)"], ["Duração comum", "Do amanhecer ao pôr do sol"]],
    refs: ["LEV 16:29", "EST 4:16", "ISA 58:6", "JOE 2:12", "MAT 6:16"]
  },

  // ───────────────────────── Moedas ─────────────────────────
  {
    termo: "Talento",
    categoria: "Moedas",
    texto: "Maior unidade de peso usada para metais preciosos e, por extensão, grande soma de dinheiro; não era uma moeda cunhada. No Antigo Testamento equivalia a três mil siclos, como se deduz da contagem da prata do tabernáculo. No Novo Testamento, o talento de prata correspondia a seis mil dracmas ou denários, uma fortuna para um trabalhador comum. Por isso a dívida de dez mil talentos, na parábola do credor sem misericórdia, representa um valor impagável. O sentido moderno de 'talento' como aptidão vem da parábola de Mateus 25.",
    dados: [["Peso (AT)", "3.000 siclos — aproximadamente 34 kg"], ["Valor (NT)", "6.000 denários — aproximadamente 20 anos de salário de um trabalhador"], ["Subdivisão", "60 minas"]],
    refs: ["EXO 38:25", "EXO 38:26", "1KI 10:14", "MAT 18:24", "MAT 25:15"]
  },
  {
    termo: "Mina",
    categoria: "Moedas",
    texto: "Unidade de peso e de conta, intermediária entre o siclo e o talento. No Antigo Testamento valia geralmente cinquenta siclos, embora Ezequiel mencione uma mina de sessenta, segundo o padrão babilônico; a variação mostra que os padrões não eram uniformes. No Novo Testamento, a mina grega correspondia a cem dracmas. Na parábola das dez minas, cada servo recebe uma mina para negociar, o que representava cerca de três a quatro meses de salário de um trabalhador. No Antigo Testamento, algumas traduções trazem 'libra' ou 'arrátel' em lugar de mina.",
    dados: [["Peso (AT)", "50 siclos — aproximadamente 570 g"], ["Valor (NT)", "100 dracmas — aproximadamente 100 dias de salário"], ["Relação", "1/60 do talento"]],
    refs: ["1KI 10:17", "EZR 2:69", "EZE 45:12", "LUK 19:13"]
  },
  {
    termo: "Siclo",
    categoria: "Moedas",
    texto: "Unidade básica de peso do Antigo Testamento, usada sobretudo para prata e ouro. Antes do uso de moedas cunhadas, os pagamentos eram feitos pesando-se o metal, como fez Abraão ao comprar a caverna de Macpela. O siclo comum pesava cerca de onze gramas; havia ainda o 'siclo do santuário' e o 'peso real', cujos valores exatos são debatidos. Dividia-se em vinte geras. No primeiro século, o siclo de prata de Tiro, equivalente a quatro dracmas, era a moeda aceita para o imposto do templo.",
    dados: [["Peso", "Aproximadamente 11,4 g"], ["Subdivisão", "20 geras; meio siclo = 1 beca"], ["Equivalência (NT)", "4 dracmas ou denários — aproximadamente 4 dias de salário"]],
    refs: ["GEN 23:16", "EXO 30:13", "LEV 27:25", "JER 32:9"]
  },
  {
    termo: "Gera",
    categoria: "Moedas",
    texto: "Menor unidade de peso mencionada no Antigo Testamento, equivalente à vigésima parte do siclo. Aparece quase sempre em notas explicativas que definem o siclo do santuário: 'o siclo é de vinte geras'. Era usada para pesar pequenas quantidades de prata. O nome parece estar ligado a uma palavra para grão ou semente, o que sugere a origem do padrão. Cinco siclos, ou cem geras, era o valor fixado para o resgate de cada primogênito de Israel.",
    dados: [["Peso", "Aproximadamente 0,57 g"], ["Relação", "1/20 do siclo"]],
    refs: ["EXO 30:13", "LEV 27:25", "NUM 3:47", "EZE 45:12"]
  },
  {
    termo: "Dracma",
    categoria: "Moedas",
    texto: "Moeda de prata grega, de valor aproximadamente igual ao do denário romano, isto é, cerca de um dia de trabalho no campo. No Novo Testamento aparece na parábola da mulher que possui dez dracmas e, perdendo uma, acende a candeia e varre a casa até encontrá-la. Em Esdras e Neemias, algumas traduções usam 'dracmas' para moedas de ouro do período persa, provavelmente dáricos, de valor bem maior. Cem dracmas faziam uma mina, e seis mil, um talento.",
    dados: [["Metal e peso", "Prata — aproximadamente 4,3 g (padrão ático); menos no século I"], ["Valor", "Aproximadamente 1 denário — 1 dia de salário"]],
    refs: ["LUK 15:8", "LUK 15:9", "NEH 7:70"]
  },
  {
    termo: "Didracma",
    categoria: "Moedas",
    texto: "Valor de duas dracmas, equivalente a meio siclo. Era a quantia do imposto anual do templo, pago por todo judeu adulto do sexo masculino, costume baseado na contribuição de meio siclo por pessoa estabelecida na época do tabernáculo. Em Cafarnaum, os cobradores desse imposto perguntam a Pedro se seu mestre não o pagava. Como a moeda de duas dracmas era pouco cunhada no período, era comum que duas pessoas pagassem juntas com um estáter.",
    dados: [["Valor", "2 dracmas — aproximadamente 2 dias de salário"], ["Equivalência", "Meio siclo — aproximadamente 5,7 g de prata no padrão do AT"]],
    refs: ["EXO 30:13", "EXO 38:26", "MAT 17:24"]
  },
  {
    termo: "Estáter",
    categoria: "Moedas",
    texto: "Moeda de prata equivalente a quatro dracmas (tetradracma) ou a um siclo. É a moeda que Pedro encontra na boca do peixe, suficiente para pagar o imposto do templo por Jesus e por ele. Os estáteres de Tiro e de Antioquia circulavam amplamente na Palestina do primeiro século. É provável, embora não seja certo, que as trinta moedas de prata pagas a Judas fossem desse tipo, o que corresponderia a cerca de quatro meses de salário.",
    dados: [["Metal e peso", "Prata — aproximadamente 14 g"], ["Valor", "4 dracmas ou denários — aproximadamente 4 dias de salário"]],
    refs: ["MAT 17:27", "MAT 26:15"]
  },
  {
    termo: "Denário",
    categoria: "Moedas",
    texto: "Moeda de prata romana, a mais citada no Novo Testamento. Trazia a efígie e a inscrição do imperador, como a que Jesus pede para ver ao responder sobre o tributo a César. Correspondia ao pagamento habitual por um dia de trabalho no campo, como na parábola dos trabalhadores da vinha. Assim, os duzentos denários de pão mencionados na multiplicação e os trezentos denários do perfume de nardo dão ideia de valores próximos a um ano de trabalho. Algumas traduções antigas usam 'dinheiro'.",
    dados: [["Metal e peso", "Prata — aproximadamente 3,9 g"], ["Valor", "1 dia de salário de um trabalhador"], ["Subdivisão", "16 asses"]],
    refs: ["MAT 20:2", "MAT 22:19", "LUK 10:35", "JOH 12:5", "REV 6:6"]
  },
  {
    termo: "Asse",
    categoria: "Moedas",
    texto: "Moeda romana de cobre ou bronze, de pequeno valor; em grego, assárion. Valia a décima sexta parte de um denário. Jesus a menciona ao falar do cuidado de Deus: dois pardais eram vendidos por um asse, e cinco por dois, e nenhum deles está esquecido diante de Deus. Muitas traduções em português a vertem por 'ceitil', 'moedinha' ou 'moeda de pouco valor', o que esconde a diferença entre ela e as moedas ainda menores, o quadrante e o lépton.",
    dados: [["Metal", "Cobre ou bronze"], ["Valor", "1/16 de denário — menos de uma hora de trabalho"], ["Subdivisão", "4 quadrantes"]],
    refs: ["MAT 10:29", "LUK 12:6"]
  },
  {
    termo: "Quadrante",
    categoria: "Moedas",
    texto: "Menor moeda romana de bronze, equivalente a um quarto do asse. Marcos, ao explicar a seus leitores o valor da oferta da viúva pobre, diz que as duas pequenas moedas que ela lançou no cofre do templo valiam um quadrante. Jesus também usa essa moeda para falar de uma dívida cobrada até o fim: o devedor não sairá da prisão enquanto não pagar o último quadrante. As traduções costumam trazer 'centavo' ou 'ceitil'.",
    dados: [["Metal", "Bronze"], ["Valor", "1/4 de asse — 1/64 de denário"], ["Subdivisão", "2 léptons"]],
    refs: ["MAT 5:26", "MAR 12:42"]
  },
  {
    termo: "Lépton (óbolo da viúva)",
    categoria: "Moedas",
    texto: "Menor moeda em circulação na Palestina do primeiro século, de bronze, cunhada por governantes judeus e pelos procuradores romanos. O nome grego significa 'fino, pequeno'. Valia metade de um quadrante. Foi a moeda que a viúva pobre lançou, em número de duas, no tesouro do templo, e que Jesus declarou valer mais que as grandes ofertas dos ricos, porque ela deu tudo o que possuía. A expressão tradicional 'óbolo da viúva' vem desse episódio.",
    dados: [["Metal", "Bronze"], ["Valor", "1/2 quadrante — 1/128 de denário"], ["Em tempo de trabalho", "Poucos minutos de um dia de salário"]],
    refs: ["MAR 12:42", "LUK 21:2", "LUK 12:59"]
  },

  // ───────────────────────── Pesos e medidas ─────────────────────────
  {
    termo: "Côvado",
    categoria: "Pesos e medidas",
    texto: "Principal medida de comprimento da Bíblia, baseada na distância do cotovelo à ponta do dedo médio. É usada nas dimensões da arca de Noé, do tabernáculo, do templo e na altura de Golias. O côvado comum tinha cerca de quarenta e cinco centímetros; Ezequiel menciona um côvado maior, com um palmo menor a mais, de cerca de cinquenta e dois centímetros. Os valores variaram conforme a época e a região, de modo que as conversões são sempre aproximadas.",
    dados: [["Côvado comum", "Aproximadamente 44,5 cm"], ["Côvado longo (real)", "Aproximadamente 52 cm"], ["Subdivisão", "2 palmos = 6 larguras de mão = 24 dedos"]],
    refs: ["GEN 6:15", "EXO 25:10", "DEU 3:11", "1SA 17:4", "EZE 40:5"]
  },
  {
    termo: "Palmo",
    categoria: "Pesos e medidas",
    texto: "Medida de comprimento correspondente à mão aberta, da ponta do polegar à ponta do dedo mínimo, equivalente a meio côvado. O peitoral do sumo sacerdote era quadrado, de um palmo de lado, e a altura de Golias é dada como seis côvados e um palmo. A Bíblia distingue ainda o 'palmo menor' ou largura da mão, de quatro dedos, cerca de um terço do palmo, usado, por exemplo, na moldura da mesa dos pães. As traduções nem sempre diferenciam as duas medidas.",
    dados: [["Palmo", "Meio côvado — aproximadamente 22 cm"], ["Largura da mão (palmo menor)", "4 dedos — aproximadamente 7,4 cm"]],
    refs: ["EXO 28:16", "EXO 25:25", "1SA 17:4", "ISA 40:12"]
  },
  {
    termo: "Dedo",
    categoria: "Pesos e medidas",
    texto: "Menor medida de comprimento do sistema hebraico, correspondente à largura de um dedo. Quatro dedos formavam uma largura de mão, e vinte e quatro, um côvado comum. A medida aparece explicitamente na descrição das colunas de bronze do templo, que eram ocas e tinham quatro dedos de espessura. A mesma espessura, uma largura de mão, é atribuída à parede do grande reservatório de bronze feito por Salomão. Como as demais medidas baseadas no corpo, seu valor é aproximado.",
    dados: [["Equivalência", "Aproximadamente 1,85 cm"], ["Relação", "1/4 da largura da mão; 1/24 do côvado"]],
    refs: ["JER 52:21", "1KI 7:26"]
  },
  {
    termo: "Braça",
    categoria: "Pesos e medidas",
    texto: "Medida de comprimento correspondente à distância entre as pontas dos dedos com os braços abertos, usada principalmente para medir a profundidade da água. Aparece no relato da viagem de Paulo a Roma: na décima quarta noite de tempestade, os marinheiros, suspeitando que se aproximavam de terra, lançaram a sonda e encontraram vinte braças e, pouco adiante, quinze, sinal de que o fundo subia rapidamente. Equivalia a quatro côvados no sistema grego.",
    dados: [["Equivalência", "Aproximadamente 1,85 m"], ["Vinte braças", "Aproximadamente 37 m"], ["Quinze braças", "Aproximadamente 28 m"]],
    refs: ["ACT 27:27", "ACT 27:28"]
  },
  {
    termo: "Estádio",
    categoria: "Pesos e medidas",
    texto: "Medida grega de distância, originalmente o comprimento da pista de corrida de Olímpia; daí o nome passou ao próprio local das competições. É a unidade usada no Novo Testamento para distâncias médias: Emaús ficava a sessenta estádios de Jerusalém, e Betânia, a cerca de quinze. No Apocalipse, a nova Jerusalém mede doze mil estádios de lado. Oito estádios correspondiam aproximadamente a uma milha romana. Algumas traduções convertem os valores para quilômetros.",
    dados: [["Equivalência", "Aproximadamente 185 m"], ["15 estádios", "Aproximadamente 2,8 km"], ["60 estádios", "Aproximadamente 11 km"]],
    refs: ["LUK 24:13", "JOH 6:19", "JOH 11:18", "REV 14:20", "REV 21:16"]
  },
  {
    termo: "Milha",
    categoria: "Pesos e medidas",
    texto: "Medida romana de distância, equivalente a mil passos duplos, usada nas estradas do império, que eram marcadas por marcos miliários. Aparece uma única vez na Bíblia, no Sermão do Monte: 'se alguém te obrigar a caminhar uma milha, vai com ele duas'. A frase alude ao direito que soldados e funcionários tinham de requisitar pessoas para carregar cargas por certa distância, como ocorreu com Simão de Cirene, obrigado a levar a cruz de Jesus.",
    dados: [["Equivalência", "Aproximadamente 1.480 m"], ["Relação", "Aproximadamente 8 estádios"]],
    refs: ["MAT 5:41", "MAT 27:32"]
  },
  {
    termo: "Caminho de um sábado",
    categoria: "Pesos e medidas",
    texto: "Distância máxima que, segundo a tradição dos escribas, um judeu podia percorrer no sábado sem violar o descanso. Foi fixada em dois mil côvados, com base na ordem de que ninguém saísse do seu lugar no sétimo dia, combinada com a distância mantida entre o povo e a arca e com a medida dos arredores das cidades levíticas. Não é uma regra da Lei escrita. Atos usa a expressão para indicar a distância entre o monte das Oliveiras e Jerusalém.",
    dados: [["Equivalência", "2.000 côvados — aproximadamente 900 m a 1 km"], ["Origem", "Tradição rabínica, não a Lei escrita"]],
    refs: ["EXO 16:29", "NUM 35:5", "JOS 3:4", "ACT 1:12"]
  },
  {
    termo: "Efa",
    categoria: "Pesos e medidas",
    texto: "Medida básica de capacidade para secos, como grãos e farinha, usada no comércio e nas ofertas. Tinha o mesmo volume do bato, a medida para líquidos, e equivalia à décima parte do hômer. Rute recolheu cerca de um efa de cevada em um dia de trabalho no campo de Boaz. A Lei e os profetas exigem 'efa justo', condenando os comerciantes que diminuíam a medida. Sua capacidade exata é debatida, com estimativas entre vinte e dois e quarenta litros.",
    dados: [["Equivalência", "Aproximadamente 22 litros (estimativa mais comum)"], ["Subdivisão", "3 seás = 10 ômeres = 18 cabos"]],
    refs: ["EXO 16:36", "LEV 19:36", "RUT 2:17", "EZE 45:11", "ZEC 5:6"]
  },
  {
    termo: "Ômer (gômer)",
    categoria: "Pesos e medidas",
    texto: "Pequena medida de capacidade para secos, equivalente à décima parte do efa. Aparece no relato do maná: cada pessoa devia recolher um ômer por dia, e o dobro na véspera do sábado; um ômer de maná foi guardado em um vaso como testemunho para as gerações futuras. Não deve ser confundido com o hômer, cem vezes maior; para evitar a confusão, várias traduções o chamam de gômer. Em outras passagens, a mesma quantidade é chamada simplesmente de 'a décima parte de um efa', medida da farinha em várias ofertas.",
    dados: [["Equivalência", "Aproximadamente 2,2 litros"], ["Relação", "1/10 do efa"]],
    refs: ["EXO 16:16", "EXO 16:33", "EXO 16:36"]
  },
  {
    termo: "Hômer (coro)",
    categoria: "Pesos e medidas",
    texto: "Maior medida de capacidade para secos, equivalente a dez efas. O nome está ligado à palavra hebraica para jumento e indicava, em princípio, a carga que o animal podia levar. Servia para medir colheitas e sementes: o valor de um campo consagrado era calculado pelo número de hômeres de cevada necessários para semeá-lo. Ezequiel o usa como padrão para definir o efa e o bato. Também é chamado de coro, termo empregado igualmente para líquidos. Algumas traduções grafam 'ômer' nessas passagens, o que pode confundi-lo com a medida pequena do maná.",
    dados: [["Equivalência", "Aproximadamente 220 litros"], ["Relação", "10 efas (secos) ou 10 batos (líquidos)"]],
    refs: ["LEV 27:16", "NUM 11:32", "ISA 5:10", "EZE 45:11", "HOS 3:2"]
  },
  {
    termo: "Seá",
    categoria: "Pesos e medidas",
    texto: "Medida de capacidade para secos, equivalente a um terço do efa. Em geral é traduzida apenas por 'medida'. Abraão pediu a Sara que amassasse três medidas de flor de farinha para os visitantes, e Abigail levou a Davi cinco medidas de trigo tostado. Na profecia de Eliseu durante o cerco de Samaria, uma medida de farinha seria vendida por um siclo. Na parábola do fermento, a mulher o mistura a três medidas de farinha, cerca de vinte litros.",
    dados: [["Equivalência", "Aproximadamente 7,3 litros"], ["Relação", "1/3 do efa"], ["Grego", "sáton"]],
    refs: ["GEN 18:6", "1SA 25:18", "2KI 7:1", "MAT 13:33"]
  },
  {
    termo: "Bato",
    categoria: "Pesos e medidas",
    texto: "Medida básica de capacidade para líquidos, como azeite e vinho, de volume igual ao do efa. O grande reservatório de bronze do templo de Salomão comportava dois mil batos, e Salomão pagou aos lenhadores de Tiro com milhares de batos de vinho e de azeite. Isaías anuncia que dez jeiras de vinha renderiam apenas um bato. Na parábola do administrador infiel, a dívida de cem medidas de azeite corresponde, no grego, a cem batos.",
    dados: [["Equivalência", "Aproximadamente 22 litros"], ["Subdivisão", "6 hins = 72 logues"], ["Relação", "1/10 do hômer (coro)"]],
    refs: ["1KI 7:26", "2CH 2:10", "ISA 5:10", "EZE 45:11", "LUK 16:6"]
  },
  {
    termo: "Him",
    categoria: "Pesos e medidas",
    texto: "Medida de capacidade para líquidos, equivalente à sexta parte do bato. É a unidade em que a Lei expressa as quantidades de azeite e de vinho que acompanhavam os sacrifícios: um quarto de him de azeite e outro de vinho para cada cordeiro do holocausto diário, por exemplo. O óleo sagrado da unção levava um him de azeite de oliva. Em Ezequiel, a ração de água de um sexto de him por dia simboliza a escassez durante o cerco.",
    dados: [["Equivalência", "Aproximadamente 3,7 litros"], ["Relação", "1/6 do bato; 12 logues"]],
    refs: ["EXO 29:40", "EXO 30:24", "NUM 15:5", "EZE 4:11"]
  },
  {
    termo: "Logue",
    categoria: "Pesos e medidas",
    texto: "Menor medida de capacidade para líquidos mencionada na Bíblia, equivalente à duodécima parte do him. Aparece apenas no ritual de purificação da pessoa curada de doença de pele: junto com os cordeiros e a farinha, ela devia apresentar um logue de azeite, parte do qual o sacerdote aspergia diante do Senhor e aplicava sobre a orelha, o polegar e o dedo do pé de quem estava sendo purificado. O pobre trazia oferta menor, mas a mesma quantidade de azeite.",
    dados: [["Equivalência", "Aproximadamente 0,3 litro"], ["Relação", "1/12 do him; 1/72 do bato"]],
    refs: ["LEV 14:10", "LEV 14:12", "LEV 14:21"]
  },
  {
    termo: "Cabo",
    categoria: "Pesos e medidas",
    texto: "Pequena medida de capacidade para secos, equivalente à décima oitava parte do efa. Aparece uma única vez na Bíblia, na descrição da fome extrema durante o cerco de Samaria pelos sírios: uma cabeça de jumento era vendida por oitenta siclos de prata, e a quarta parte de um cabo de 'esterco de pombas' por cinco siclos. Debate-se se essa expressão deve ser entendida ao pé da letra ou se era o nome popular de algum alimento de baixa qualidade.",
    dados: [["Equivalência", "Aproximadamente 1,2 litro"], ["Relação", "1/18 do efa; 1/6 do seá"]],
    refs: ["2KI 6:24", "2KI 6:25"]
  },

  // ───────────────────────── Costumes e vida diária ─────────────────────────
  {
    termo: "Casamento",
    categoria: "Costumes e vida diária",
    texto: "União entre homem e mulher, apresentada desde Gênesis como instituição divina. Em Israel, era normalmente arranjado entre as famílias. A celebração consistia em uma festa, que podia durar uma semana, e em um cortejo no qual o noivo, com seus amigos, buscava a noiva para levá-la à sua casa, acompanhado por convidados com lâmpadas. Não havia cerimônia religiosa no santuário. Os profetas e o Novo Testamento usam o casamento como figura da relação de Deus com seu povo e de Cristo com a igreja.",
    dados: [["Duração da festa", "Em geral, 7 dias"], ["Elementos", "Cortejo, banquete, bênção dos presentes"]],
    refs: ["GEN 2:24", "GEN 29:22", "MAT 25:10", "JOH 2:1", "REV 19:7"]
  },
  {
    termo: "Noivado (desposório)",
    categoria: "Costumes e vida diária",
    texto: "Compromisso formal que antecedia o casamento, com valor jurídico bem maior que o do noivado moderno. Depois de acertado entre as famílias e selado com o pagamento do dote, a moça era considerada esposa do noivo, embora continuasse na casa do pai até a festa de casamento, em geral cerca de um ano depois. A infidelidade nesse período era tratada como adultério, e o vínculo só se desfazia por divórcio. É a situação de José e Maria quando ela se achou grávida. O noivo era dispensado da guerra.",
    dados: [["Intervalo até o casamento", "Aproximadamente 1 ano (costume posterior)"], ["Efeito", "Vínculo legal, desfeito apenas por divórcio"]],
    refs: ["DEU 20:7", "DEU 22:23", "MAT 1:18", "MAT 1:19", "2CO 11:2"]
  },
  {
    termo: "Dote",
    categoria: "Costumes e vida diária",
    texto: "Valor que o noivo ou sua família entregava ao pai da noiva ao firmar o compromisso de casamento. Compensava a família pela perda de uma filha e servia de garantia para a mulher. Podia ser pago em prata, em bens ou em serviço: Jacó trabalhou sete anos por Raquel, e Saul pediu a Davi uma façanha militar em lugar do dote. Era comum também que a noiva recebesse presentes do noivo e bens de seu próprio pai, como a cidade de Gezer, dada pelo faraó à filha que se casou com Salomão.",
    dados: [["Hebraico", "mohar"], ["Formas de pagamento", "Prata, bens ou serviço"]],
    refs: ["GEN 24:53", "GEN 29:18", "GEN 34:12", "1SA 18:25", "1KI 9:16"]
  },
  {
    termo: "Levirato",
    categoria: "Costumes e vida diária",
    texto: "Costume, regulado pela Lei, segundo o qual o irmão de um homem que morresse sem filhos devia casar-se com a viúva. O primeiro filho dessa união era contado como descendente do falecido, para que seu nome e sua herança não se extinguissem em Israel. Quem se recusasse passava por uma cerimônia pública de desonra, em que a viúva lhe tirava a sandália. O costume já aparece na história de Judá e Tamar e está por trás da pergunta dos saduceus a Jesus sobre a ressurreição. O nome vem do latim 'levir', cunhado.",
    dados: [["Finalidade", "Preservar o nome e a herança do falecido"], ["Recusa", "Cerimônia da sandália descalçada"]],
    refs: ["GEN 38:8", "DEU 25:5", "DEU 25:9", "MAT 22:24"]
  },
  {
    termo: "Resgatador (goel)",
    categoria: "Costumes e vida diária",
    texto: "Parente próximo que tinha o direito e o dever de socorrer um familiar em dificuldade. Cabia-lhe recomprar a terra que o parente empobrecido tivesse vendido, libertá-lo se houvesse se vendido como servo e, como 'vingador do sangue', buscar justiça em caso de homicídio. No livro de Rute, Boaz atua como resgatador ao adquirir o campo de Elimeleque e casar-se com Rute. O título é aplicado a Deus, redentor de Israel, e Jó declara saber que o seu Redentor vive.",
    dados: [["Hebraico", "goel, 'remidor, resgatador'"], ["Deveres", "Resgatar terras e pessoas; vingar o sangue"]],
    refs: ["LEV 25:25", "NUM 35:19", "RUT 2:20", "RUT 4:4", "JOB 19:25"]
  },
  {
    termo: "Primogenitura",
    categoria: "Costumes e vida diária",
    texto: "Conjunto de direitos do filho mais velho. O primogênito recebia porção dobrada da herança e, com a morte do pai, assumia a chefia da família. A Lei proibia transferir esse direito ao filho da esposa preferida. Ainda assim, a narrativa bíblica registra várias inversões: Esaú vendeu sua primogenitura a Jacó por um prato de lentilhas, e Rúben a perdeu para os filhos de José. Os primogênitos pertenciam ao Senhor e deviam ser resgatados. No Novo Testamento, 'primogênito' é título de honra aplicado a Cristo.",
    dados: [["Herança", "Porção dobrada"], ["Resgate do primogênito", "5 siclos de prata"]],
    refs: ["GEN 25:31", "GEN 49:3", "DEU 21:17", "1CH 5:1", "HEB 12:16"]
  },
  {
    termo: "Bênção paterna",
    categoria: "Costumes e vida diária",
    texto: "Palavra solene que o pai, especialmente perto da morte, pronunciava sobre os filhos, transmitindo-lhes a liderança da família e invocando o favor de Deus sobre seu futuro. Era considerada eficaz e irrevogável: Isaque, enganado por Jacó, não pôde retirar a bênção que lhe dera. Jacó abençoou os filhos de José cruzando as mãos sobre eles e, depois, cada um de seus doze filhos, com palavras que antecipavam a história das tribos. A carta aos Hebreus cita essas bênçãos como atos de fé.",
    dados: [["Gesto", "Imposição de mãos"], ["Caráter", "Solene e irrevogável"]],
    refs: ["GEN 27:4", "GEN 27:33", "GEN 48:14", "GEN 49:28", "HEB 11:20"]
  },
  {
    termo: "Herança",
    categoria: "Costumes e vida diária",
    texto: "Em Israel, a terra foi repartida por sorte entre tribos e famílias e devia permanecer nelas de geração em geração. Os bens passavam aos filhos homens, com porção dobrada para o primogênito; na falta de filhos, herdavam as filhas, que então deviam casar-se dentro da própria tribo, e depois os parentes mais próximos. Por isso Nabote recusou vender sua vinha ao rei Acabe. Os levitas não tinham herança de terra: o Senhor era a sua herança. O Novo Testamento fala da herança dos filhos de Deus.",
    dados: [["Ordem", "Filhos, filhas, irmãos, tios paternos, parente mais próximo"], ["Primogênito", "Porção dobrada"]],
    refs: ["NUM 27:8", "NUM 36:7", "DEU 21:17", "1KI 21:3", "LUK 15:12"]
  },
  {
    termo: "Hospitalidade",
    categoria: "Costumes e vida diária",
    texto: "Dever sagrado no antigo Oriente, onde quase não havia hospedarias e viajar era arriscado. O anfitrião oferecia água para lavar os pés, alimento, abrigo para a noite e forragem para os animais, e assumia a proteção do hóspede enquanto ele estivesse sob seu teto. Abraão acolhendo os três visitantes é o exemplo clássico. Jesus repreende Simão, o fariseu, por ter omitido os gestos habituais de acolhida. O Novo Testamento recomenda a hospitalidade a todos os crentes e a exige dos líderes da igreja.",
    dados: [["Gestos de acolhida", "Água para os pés, saudação com beijo, óleo na cabeça, refeição"]],
    refs: ["GEN 18:4", "JDG 19:20", "LUK 7:44", "ROM 12:13", "HEB 13:2"]
  },
  {
    termo: "Luto",
    categoria: "Costumes e vida diária",
    texto: "A dor pela morte de alguém era expressa de modo público e ruidoso: rasgavam-se as roupas, vestia-se pano de saco, lançava-se pó ou cinza sobre a cabeça, jejuava-se e chorava-se em voz alta. Havia carpideiras profissionais e tocadores de flauta, contratados para conduzir as lamentações, como na casa de Jairo. O luto durava em geral sete dias; por Moisés e por Arão, Israel chorou trinta dias. A Lei proibia práticas pagãs como fazer cortes no corpo pelos mortos.",
    dados: [["Duração comum", "7 dias"], ["Por Moisés e Arão", "30 dias"], ["Sinais", "Roupas rasgadas, pano de saco, cinza, jejum"]],
    refs: ["GEN 37:34", "DEU 34:8", "2SA 3:31", "JER 9:17", "MAT 9:23"]
  },
  {
    termo: "Sepultamento",
    categoria: "Costumes e vida diária",
    texto: "Em Israel, os mortos eram sepultados, não cremados, e normalmente no mesmo dia da morte, por causa do clima. O corpo era lavado, envolvido em faixas de linho com especiarias aromáticas e depositado em uma cova, em uma caverna ou em um túmulo escavado na rocha, cuja entrada era fechada com uma pedra. Túmulos de família eram usados por gerações, como a caverna de Macpela. Ficar sem sepultura era considerado grande desonra. Os Evangelhos descrevem esses costumes no sepultamento de Lázaro e no de Jesus.",
    dados: [["Preparo", "Lavagem, faixas de linho e especiarias (mirra e aloés)"], ["Túmulo", "Cova, caverna ou sepulcro escavado na rocha"]],
    refs: ["GEN 23:19", "MAT 27:60", "JOH 11:44", "JOH 19:40", "ACT 9:37"]
  },
  {
    termo: "Túnica",
    categoria: "Costumes e vida diária",
    texto: "Peça básica do vestuário, usada junto ao corpo por homens e mulheres. Era uma espécie de camisa longa, de linho ou de lã, com ou sem mangas, que descia até os joelhos ou os tornozelos e era presa por um cinto. A túnica de várias cores, ou de mangas compridas, que Jacó deu a José indicava distinção. A de Jesus era sem costura, tecida de alto a baixo, e por isso os soldados lançaram sortes sobre ela. João Batista manda quem tem duas túnicas repartir com quem não tem.",
    dados: [["Material", "Linho ou lã"], ["Uso", "Peça interior, sob o manto"]],
    refs: ["GEN 37:3", "MAT 5:40", "LUK 3:11", "JOH 19:23"]
  },
  {
    termo: "Manto (capa)",
    categoria: "Costumes e vida diária",
    texto: "Peça exterior do vestuário, um grande retângulo de tecido grosso usado sobre a túnica. Servia de agasalho durante o dia e de coberta à noite, e por isso a Lei determinava que o manto tomado em penhor de um pobre fosse devolvido antes do pôr do sol. Nas dobras do manto carregavam-se objetos e grãos. Elias lançou seu manto sobre Eliseu ao chamá-lo. Estender mantos pelo caminho era gesto de homenagem a um rei. Paulo pede a Timóteo que lhe traga a capa deixada em Trôade.",
    dados: [["Uso", "Agasalho de dia, coberta à noite"], ["Lei do penhor", "Devolver antes do pôr do sol"]],
    refs: ["EXO 22:26", "DEU 24:13", "1KI 19:19", "MAR 10:50", "2TI 4:13"]
  },
  {
    termo: "Cinto",
    categoria: "Costumes e vida diária",
    texto: "Faixa de couro ou de tecido usada na cintura para prender a túnica. Para trabalhar, correr ou viajar, as pontas da túnica eram erguidas e presas no cinto; daí a expressão 'cingir os lombos', que significa estar pronto para a ação, como os israelitas na noite da Páscoa. O cinto servia também para levar a espada, o tinteiro ou o dinheiro. Elias e João Batista usavam cinto de couro. Paulo fala do cinto da verdade como parte da armadura do cristão.",
    dados: [["Material", "Couro, linho ou lã"], ["Expressão", "'Cingir os lombos' = preparar-se para agir"]],
    refs: ["EXO 12:11", "1KI 18:46", "2KI 1:8", "MAT 3:4", "EPH 6:14"]
  },
  {
    termo: "Franjas",
    categoria: "Costumes e vida diária",
    texto: "Borlas que os israelitas deviam fazer nos quatro cantos de suas vestes, com um cordão azul em cada uma, para que, ao vê-las, se lembrassem de todos os mandamentos do Senhor e os cumprissem. Continuaram em uso no tempo de Jesus, que também as trazia em seu manto: a mulher que sofria de hemorragia tocou na orla de sua veste. Jesus criticou os que alongavam as franjas para serem vistos pelos outros. O costume permanece no xale de oração judaico.",
    dados: [["Hebraico", "tsitsit"], ["Local", "Nos quatro cantos do manto"], ["Detalhe", "Um cordão azul em cada franja"]],
    refs: ["NUM 15:38", "DEU 22:12", "MAT 9:20", "MAT 23:5"]
  },
  {
    termo: "Filactérios",
    categoria: "Costumes e vida diária",
    texto: "Pequenas caixas de couro que contêm tiras de pergaminho com passagens da Lei, presas por correias à testa e ao braço esquerdo durante a oração. O costume nasceu da interpretação literal das ordens de atar as palavras de Deus como sinal na mão e como frontal entre os olhos; debate-se se essas ordens tinham, na origem, sentido figurado. Exemplares do período foram encontrados junto ao mar Morto. Jesus censurou os que alargavam seus filactérios por ostentação. Em hebraico chamam-se tefilin.",
    dados: [["Hebraico", "tefilin"], ["Textos contidos", "Êxodo 13:1-16; Deuteronômio 6:4-9 e 11:13-21"]],
    refs: ["EXO 13:16", "DEU 6:8", "DEU 11:18", "MAT 23:5"]
  },
  {
    termo: "Alimentação",
    categoria: "Costumes e vida diária",
    texto: "A base da alimentação era o pão, de trigo ou, entre os pobres, de cevada, assado diariamente. Completavam a mesa azeite, azeitonas, vinho, figos, uvas, tâmaras, romãs, mel, lentilhas, favas, leite de cabra e coalhada. Na região do mar da Galileia comia-se muito peixe, fresco ou salgado. A carne era reservada a festas, sacrifícios e à recepção de hóspedes. Comia-se com as mãos, molhando o pão em um prato comum. As leis sobre animais puros e impuros determinavam o que podia ser consumido.",
    dados: [["Base", "Pão de trigo ou de cevada"], ["Refeições", "Em geral duas: uma leve pela manhã e a principal ao entardecer"]],
    refs: ["GEN 25:34", "DEU 8:8", "RUT 2:14", "JOH 6:9", "LUK 24:42"]
  },
  {
    termo: "Casa",
    categoria: "Costumes e vida diária",
    texto: "A casa comum era pequena, de pedra ou de tijolos de barro, com um ou poucos cômodos em torno de um pátio. O terraço, plano, feito de vigas cobertas de ramos e barro batido, era usado para secar frutos, dormir no calor, orar e conversar; chegava-se a ele por uma escada externa, e a Lei exigia um parapeito. Isso explica como os amigos do paralítico abriram o teto para descê-lo diante de Jesus. O interior era escuro, com poucas janelas, iluminado por lâmpadas de azeite.",
    dados: [["Materiais", "Pedra, tijolo de barro, madeira e argila"], ["Terraço", "Plano, com parapeito e escada externa"]],
    refs: ["DEU 22:8", "2KI 4:10", "MAR 2:4", "LUK 15:8", "ACT 10:9"]
  },
  {
    termo: "Porta da cidade",
    categoria: "Costumes e vida diária",
    texto: "Além de ponto de defesa, a porta da cidade murada era o centro da vida pública. No espaço junto a ela reuniam-se os anciãos para julgar causas, fechavam-se negócios diante de testemunhas, faziam-se anúncios e funcionava o mercado. Ló estava sentado à porta de Sodoma; Boaz resolveu ali o resgate da herança de Elimeleque; Absalão abordava à porta os que vinham pedir justiça ao rei. 'Estabelecer o juízo na porta' é, nos profetas, expressão para a prática da justiça nos tribunais.",
    dados: [["Funções", "Tribunal, mercado, assembleia e defesa"]],
    refs: ["GEN 19:1", "DEU 21:19", "RUT 4:1", "PRO 31:23", "AMO 5:15"]
  },
  {
    termo: "Eira e colheita",
    categoria: "Costumes e vida diária",
    texto: "A cevada era colhida em abril e maio, e o trigo logo depois. Os ceifeiros cortavam as espigas com a foice e as amarravam em feixes; os cantos do campo e as espigas caídas ficavam para os pobres e estrangeiros, como se vê na história de Rute. Na eira, um terreno plano e batido, os grãos eram debulhados pelo pisar dos bois ou por um trilho e depois lançados ao vento com a pá, para separar a palha. A imagem é usada por João Batista para falar do juízo.",
    dados: [["Cevada", "Abril/maio"], ["Trigo", "Maio/junho"], ["Etapas", "Ceifar, enfeixar, debulhar, padejar e peneirar"]],
    refs: ["LEV 19:9", "DEU 25:4", "RUT 2:7", "RUT 3:2", "MAT 3:12"]
  },
  {
    termo: "Vinha e lagar",
    categoria: "Costumes e vida diária",
    texto: "A videira era uma das principais culturas da terra de Israel. O agricultor limpava o terreno das pedras, plantava as mudas, cercava a vinha com muro ou sebe, construía uma torre de vigia e escavava um lagar na rocha. A vindima acontecia no fim do verão, em clima de festa; as uvas eram pisadas no lagar, e o suco escorria para um tanque inferior. Os profetas comparam Israel a uma vinha, imagem retomada por Jesus em parábolas e ao declarar-se a videira verdadeira. O lagar pisado é também figura do juízo.",
    dados: [["Vindima", "Agosto/setembro"], ["Elementos", "Cerca, torre de vigia e lagar"]],
    refs: ["ISA 5:2", "JOE 3:13", "MAT 20:1", "MAT 21:33", "JOH 15:1"]
  },
  {
    termo: "Pastoreio",
    categoria: "Costumes e vida diária",
    texto: "A criação de ovelhas e cabras foi ocupação central em Israel desde os patriarcas. O pastor conduzia o rebanho em busca de pasto e água, protegia-o de feras e ladrões com o cajado, a vara e a funda, e o recolhia à noite em apriscos de pedra. As ovelhas conheciam a voz do pastor e o seguiam. Daí a imagem ter sido aplicada aos líderes do povo e ao próprio Deus, o pastor de Israel. Jesus se apresenta como o bom pastor, que dá a vida pelas ovelhas.",
    dados: [["Instrumentos", "Cajado, vara, funda e alforje"], ["Rebanhos", "Ovelhas e cabras, muitas vezes juntas"]],
    refs: ["GEN 31:40", "1SA 17:34", "PSA 23:4", "LUK 2:8", "JOH 10:11"]
  },
  {
    termo: "Pesca",
    categoria: "Costumes e vida diária",
    texto: "Atividade importante sobretudo no mar da Galileia, onde vários discípulos de Jesus trabalhavam. Pescava-se à noite, em barcos pequenos, com diferentes tipos de rede: a tarrafa, lançada à mão por um só homem, e a rede de arrasto, puxada por vários até a praia, onde os peixes eram separados. Usavam-se também linha e anzol. De dia, lavavam-se e consertavam-se as redes. O peixe era vendido fresco ou salgado. Jesus chamou seus primeiros discípulos para serem pescadores de homens.",
    dados: [["Métodos", "Tarrafa, rede de arrasto, anzol"], ["Horário comum", "Durante a noite"]],
    refs: ["MAT 4:18", "MAT 13:47", "MAT 17:27", "LUK 5:5", "JOH 21:11"]
  },
  {
    termo: "Escravidão e servidão",
    categoria: "Costumes e vida diária",
    texto: "Prática comum em todo o mundo antigo, geralmente resultante de dívidas, guerras ou nascimento. A Lei limitava a servidão entre israelitas: o hebreu que se vendesse por pobreza servia seis anos e saía livre no sétimo, recebendo provisões, e devia ser tratado como trabalhador assalariado. Havia regras de proteção contra maus-tratos e a lembrança constante de que Israel fora escravo no Egito. No Império Romano, grande parte da população era escrava. O Novo Testamento orienta senhores e servos e afirma a igualdade de ambos em Cristo.",
    dados: [["Servo hebreu", "Libertação no sétimo ano"], ["Causas comuns", "Dívida, guerra, nascimento"]],
    refs: ["EXO 21:2", "LEV 25:39", "DEU 15:12", "GAL 3:28", "PHM 1:16"]
  },
  {
    termo: "Cidades de refúgio",
    categoria: "Costumes e vida diária",
    texto: "Seis cidades levíticas, três de cada lado do Jordão, designadas para abrigar quem matasse alguém sem intenção. Ali o homicida ficava protegido do vingador do sangue até ser julgado pela congregação. Reconhecida a morte como acidental, ele devia permanecer na cidade até a morte do sumo sacerdote, quando podia voltar para casa. O assassino intencional não tinha direito a esse asilo. O sistema impedia a vingança privada e distinguia homicídio culposo de doloso.",
    dados: [["A oeste do Jordão", "Quedes, Siquém e Hebrom"], ["A leste do Jordão", "Bezer, Ramote de Gileade e Golã"]],
    refs: ["NUM 35:11", "NUM 35:25", "DEU 19:5", "JOS 20:7", "JOS 20:8"]
  },
  {
    termo: "Apedrejamento",
    categoria: "Costumes e vida diária",
    texto: "Forma de execução mais comum na Lei de Moisés, aplicada a crimes como blasfêmia, idolatria, violação do sábado e adultério. A sentença exigia o depoimento de pelo menos duas testemunhas, que deviam lançar as primeiras pedras, seguidas por todo o povo; a execução ocorria fora do arraial ou da cidade. Acã foi apedrejado no vale de Acor. No Novo Testamento, Estêvão morreu assim, e Paulo foi apedrejado em Listra e dado por morto. Jesus foi ameaçado de apedrejamento mais de uma vez.",
    dados: [["Exigência", "Duas ou três testemunhas"], ["Local", "Fora do arraial ou da cidade"]],
    refs: ["LEV 24:16", "DEU 17:5", "DEU 17:7", "JOS 7:25", "ACT 7:58"]
  },
  {
    termo: "Crucificação",
    categoria: "Costumes e vida diária",
    texto: "Pena de morte usada pelos romanos principalmente para escravos, rebeldes e criminosos que não eram cidadãos. O condenado era açoitado, carregava a trave até o local de execução e era nela amarrado ou pregado, sendo erguido em um poste; uma tabuleta indicava o motivo da condenação. A morte, lenta, podia levar dias, e às vezes era apressada quebrando-se as pernas. Era considerada a punição mais vergonhosa. Para os judeus, quem era pendurado em madeiro estava sob maldição, texto que Paulo aplica à morte de Cristo.",
    dados: [["Aplicada a", "Escravos, rebeldes e não cidadãos"], ["Antecedida de", "Açoites e carregamento da trave"]],
    refs: ["DEU 21:23", "MAR 15:24", "JOH 19:18", "GAL 3:13", "PHI 2:8"]
  },
  {
    termo: "Censo",
    categoria: "Costumes e vida diária",
    texto: "Contagem da população, feita para fins militares, tributários ou de organização. Em Israel, Moisés contou duas vezes os homens de vinte anos para cima, aptos para a guerra, e cada recenseado pagava meio siclo como resgate. O censo ordenado por Davi foi tido como pecado e seguido de uma peste. Os romanos faziam recenseamentos para cobrança de impostos: foi um deles que levou José e Maria a Belém, e outro, mencionado em Atos, provocou a revolta de Judas, o galileu.",
    dados: [["Em Israel", "Homens de 20 anos para cima"], ["Em Roma", "Base para a cobrança de impostos"]],
    refs: ["EXO 30:12", "NUM 1:2", "2SA 24:2", "LUK 2:1", "ACT 5:37"]
  },
  {
    termo: "Impostos e tributos",
    categoria: "Costumes e vida diária",
    texto: "Na monarquia, os reis de Israel cobravam parte das colheitas e dos rebanhos e exigiam trabalho obrigatório; reinos dominados pagavam tributo ao vencedor. Sob os persas, os judeus chegaram a hipotecar campos para pagar o tributo do rei. No tempo de Jesus havia o imposto romano sobre pessoas e terras, taxas alfandegárias sobre mercadorias, cobradas pelos publicanos, e o imposto religioso de meio siclo para o templo. A pergunta sobre pagar ou não tributo a César era politicamente explosiva. Paulo manda pagar a todos o que lhes é devido.",
    dados: [["Imposto do templo", "Meio siclo (2 dracmas) por ano"], ["Impostos romanos", "Tributo pessoal e territorial, pedágios e alfândega"]],
    refs: ["1SA 8:15", "NEH 5:4", "MAT 17:24", "MAT 22:17", "ROM 13:7"]
  },

  // ───────────────────────── Grupos e instituições ─────────────────────────
  {
    termo: "Fariseus",
    categoria: "Grupos e instituições",
    texto: "Grupo religioso judaico surgido no século II a.C., formado em grande parte por leigos dedicados à observância rigorosa da Lei. Além da Lei escrita, seguiam a tradição oral dos anciãos, com normas detalhadas sobre pureza, sábado e dízimos. Criam na ressurreição, nos anjos e na providência divina, e tinham grande influência sobre o povo e nas sinagogas. Nos Evangelhos aparecem com frequência em debate com Jesus, que lhes censura a hipocrisia e o legalismo. Nicodemos e Paulo eram fariseus. O nome provavelmente significa 'separados'.",
    dados: [["Origem", "Século II a.C."], ["Crenças", "Ressurreição, anjos, tradição oral"]],
    refs: ["MAT 23:2", "MAR 7:3", "JOH 3:1", "ACT 23:8", "PHI 3:5"]
  },
  {
    termo: "Saduceus",
    categoria: "Grupos e instituições",
    texto: "Grupo ligado à aristocracia sacerdotal de Jerusalém e às famílias ricas, com forte presença no sinédrio e no controle do templo. Aceitavam somente a Lei escrita, rejeitando a tradição oral dos fariseus, e negavam a ressurreição, os anjos e os espíritos. Politicamente, tendiam a colaborar com Roma para preservar a ordem e a própria posição. Questionaram Jesus sobre a ressurreição e depois perseguiram os apóstolos. Desapareceram com a destruição do templo, no ano 70 d.C. O nome talvez derive do sacerdote Zadoque.",
    dados: [["Base", "Aristocracia sacerdotal"], ["Negavam", "Ressurreição, anjos e espíritos"]],
    refs: ["MAT 16:1", "MAT 22:23", "ACT 5:17", "ACT 23:8"]
  },
  {
    termo: "Essênios",
    categoria: "Grupos e instituições",
    texto: "Movimento judaico de vida comunitária e disciplina rigorosa, ativo entre o século II a.C. e o século I d.C. São conhecidos por meio de autores antigos, como Josefo, Fílon e Plínio, pois não são mencionados na Bíblia. Praticavam a partilha de bens, banhos rituais frequentes, refeições comunitárias e estudo intenso das Escrituras; parte deles vivia sem se casar. A maioria dos estudiosos relaciona a comunidade de Qumran, junto ao mar Morto, e seus manuscritos aos essênios, embora essa identificação seja debatida.",
    dados: [["Período", "Século II a.C. ao século I d.C."], ["Fontes", "Josefo, Fílon de Alexandria e Plínio, o Velho"]],
    refs: []
  },
  {
    termo: "Zelotes",
    categoria: "Grupos e instituições",
    texto: "Judeus zelosos da Lei que defendiam a resistência, inclusive armada, ao domínio romano, por entenderem que só Deus devia reinar sobre Israel. O movimento costuma ser ligado à revolta de Judas, o galileu, contra o censo romano, e teve papel central na guerra de 66 a 70 d.C., que terminou com a destruição de Jerusalém. Debate-se se já existia como partido organizado no tempo de Jesus. Um dos doze apóstolos, Simão, é chamado de Zelote, o que pode indicar ligação com o movimento ou apenas fervor religioso.",
    dados: [["Marco inicial", "Revolta de Judas, o galileu (6 d.C.)"], ["Auge", "Guerra judaica de 66–70 d.C."]],
    refs: ["LUK 6:15", "ACT 1:13", "ACT 5:37"]
  },
  {
    termo: "Escribas",
    categoria: "Grupos e instituições",
    texto: "No Antigo Testamento, eram secretários e funcionários letrados da corte. Depois do exílio, o termo passou a designar os especialistas no estudo, na cópia e na interpretação da Lei, dos quais Esdras é o modelo. No tempo de Jesus, eram os mestres e juristas do povo, chamados também de doutores da lei, e formavam, com os principais sacerdotes e os anciãos, o sinédrio. Muitos pertenciam ao partido dos fariseus. Os Evangelhos destacam que Jesus ensinava com autoridade, e não como os escribas.",
    dados: [["Funções", "Copiar, ensinar e interpretar a Lei"], ["Outros nomes", "Doutores da lei, mestres da lei"]],
    refs: ["EZR 7:6", "JER 8:8", "MAT 2:4", "MAT 7:29", "MAR 12:38"]
  },
  {
    termo: "Herodianos",
    categoria: "Grupos e instituições",
    texto: "Partidários da dinastia de Herodes, mencionados apenas nos Evangelhos. Não formavam um grupo religioso, mas político: apoiavam o governo dos Herodes e, por consequência, a ordem estabelecida sob Roma. Apesar das diferenças, aparecem aliados aos fariseus contra Jesus, primeiro na Galileia, depois da cura do homem da mão ressequida, e mais tarde em Jerusalém, na pergunta sobre o tributo a César, armada para comprometê-lo diante do povo ou das autoridades. Pouco mais se sabe sobre eles.",
    dados: [["Natureza", "Grupo político"], ["Aliados ocasionais", "Fariseus"]],
    refs: ["MAT 22:16", "MAR 3:6", "MAR 12:13"]
  },
  {
    termo: "Samaritanos",
    categoria: "Grupos e instituições",
    texto: "Habitantes da região de Samaria, entre a Judeia e a Galileia. Segundo o livro de Reis, depois da queda do reino do norte os assírios trouxeram povos estrangeiros para a região, e deles surgiu uma população de culto misto. Os samaritanos adoravam o Senhor, aceitavam apenas o Pentateuco e tinham seu santuário no monte Gerizim. A hostilidade entre judeus e samaritanos era antiga e intensa no tempo de Jesus, o que dá força à parábola do bom samaritano e ao diálogo junto ao poço de Jacó. Samaria recebeu o evangelho pela pregação de Filipe.",
    dados: [["Lugar de culto", "Monte Gerizim"], ["Escrituras", "Somente o Pentateuco"]],
    refs: ["2KI 17:24", "LUK 10:33", "JOH 4:9", "JOH 4:20", "ACT 8:5"]
  },
  {
    termo: "Sinédrio",
    categoria: "Grupos e instituições",
    texto: "Supremo conselho e tribunal dos judeus, com sede em Jerusalém. Segundo a tradição, tinha setenta e um membros, presididos pelo sumo sacerdote, e era composto de principais sacerdotes, anciãos e escribas, com saduceus e fariseus. Sob o domínio romano, cuidava de questões religiosas e de parte da administração civil, mas, ao que parece, dependia do governador para executar a pena de morte. Jesus foi interrogado pelo sinédrio, assim como Pedro e João, Estêvão e Paulo. Em várias traduções aparece como 'conselho' ou 'concílio'.",
    dados: [["Membros", "71, segundo a tradição"], ["Presidente", "Sumo sacerdote"], ["Grego", "synédrion, 'assembleia, conselho'"]],
    refs: ["MAT 26:59", "MAR 15:1", "JOH 11:47", "ACT 5:34", "ACT 23:6"]
  },
  {
    termo: "Anciãos",
    categoria: "Grupos e instituições",
    texto: "Chefes de famílias e de clãs que exerciam liderança e julgavam causas em Israel. Já no Egito representavam o povo; no deserto, setenta deles foram escolhidos para auxiliar Moisés; nas cidades, reuniam-se à porta para decidir questões legais. No tempo de Jesus, os anciãos eram os líderes leigos que integravam o sinédrio. A igreja adotou o termo para seus dirigentes locais, os presbíteros, que Paulo e Barnabé estabeleciam em cada comunidade e que Pedro exorta a pastorear o rebanho de Deus.",
    dados: [["Grego", "presbýteros"], ["Funções", "Governar, julgar e, na igreja, pastorear e ensinar"]],
    refs: ["EXO 3:16", "NUM 11:16", "RUT 4:2", "ACT 14:23", "1PE 5:1"]
  },
  {
    termo: "Prosélitos e tementes a Deus",
    categoria: "Grupos e instituições",
    texto: "Prosélito era o gentio que se convertia plenamente ao judaísmo, aceitando a circuncisão, a Lei e, segundo a prática posterior, um banho ritual. 'Temente a Deus' designava o gentio que frequentava a sinagoga, adorava o Deus de Israel e seguia parte de seus preceitos sem se tornar judeu, como o centurião Cornélio e Lídia. Esses simpatizantes estavam entre os primeiros a acolher a pregação cristã nas cidades da Diáspora. Nicolau, um dos sete escolhidos em Jerusalém, era prosélito de Antioquia.",
    dados: [["Prosélito", "Convertido pleno, circuncidado"], ["Temente a Deus", "Simpatizante gentio, não circuncidado"]],
    refs: ["MAT 23:15", "ACT 6:5", "ACT 10:2", "ACT 13:26", "ACT 16:14"]
  },
  {
    termo: "Publicanos",
    categoria: "Grupos e instituições",
    texto: "Cobradores de impostos e de taxas alfandegárias a serviço de Roma ou dos Herodes. O direito de cobrança era arrendado, e os coletores locais podiam exigir mais do que o estabelecido, ficando com a diferença. Por colaborarem com o dominador estrangeiro, por lidarem constantemente com gentios e pela fama de desonestos, eram desprezados e colocados ao lado dos pecadores. Jesus foi criticado por comer com eles; chamou o publicano Mateus para ser apóstolo e hospedou-se com Zaqueu, chefe dos publicanos de Jericó.",
    dados: [["Atividade", "Cobrança de impostos, pedágios e alfândega"], ["Exemplos", "Mateus (Levi) e Zaqueu"]],
    refs: ["MAT 9:9", "MAT 9:11", "LUK 3:13", "LUK 18:13", "LUK 19:2"]
  },
  {
    termo: "Centurião",
    categoria: "Grupos e instituições",
    texto: "Oficial do exército romano que comandava uma centúria, unidade de cerca de oitenta a cem soldados. Os centuriões eram militares de carreira, responsáveis pela disciplina e pela condução da tropa em combate, e formavam a espinha dorsal das legiões. Os que aparecem no Novo Testamento são, em geral, retratados de modo favorável: o de Cafarnaum, cuja fé Jesus elogiou; o que estava ao pé da cruz; Cornélio, o primeiro gentio batizado; e Júlio, que tratou Paulo com bondade na viagem a Roma.",
    dados: [["Comando", "Aproximadamente 80 a 100 soldados"], ["Unidades maiores", "Coorte (cerca de 480 a 600) e legião (cerca de 5.000)"]],
    refs: ["MAT 8:5", "MAR 15:39", "ACT 10:1", "ACT 27:1"]
  },
  {
    termo: "Governador (procurador)",
    categoria: "Grupos e instituições",
    texto: "Representante de Roma no governo de uma província. A partir do ano 6 d.C., a Judeia passou a ser administrada por governadores nomeados pelo imperador, com residência em Cesareia e autoridade militar, fiscal e judicial, inclusive sobre a pena de morte. Pôncio Pilatos, Félix e Festo ocuparam o cargo; o título oficial de Pilatos era prefeito, e o de procurador tornou-se usual depois. Províncias mais antigas e pacificadas eram governadas por procônsules, como Sérgio Paulo, em Chipre, e Gálio, na Acaia.",
    dados: [["Sede na Judeia", "Cesareia Marítima"], ["Pôncio Pilatos", "Aproximadamente 26–36 d.C."]],
    refs: ["MAT 27:2", "LUK 3:1", "ACT 18:12", "ACT 23:24", "ACT 24:27"]
  },
  {
    termo: "Tetrarca",
    categoria: "Grupos e instituições",
    texto: "Título que significava, na origem, 'governante da quarta parte' de um território e passou a designar príncipes subordinados a Roma, de categoria inferior à de rei. Com a morte de Herodes, o Grande, seu reino foi dividido entre os filhos: Herodes Antipas tornou-se tetrarca da Galileia e da Pereia, e Filipe, da Itureia e da Traconites; Arquelau recebeu a Judeia com o título de etnarca. Antipas é o Herodes que mandou matar João Batista e diante de quem Jesus compareceu; às vezes é chamado popularmente de rei.",
    dados: [["Herodes Antipas", "Galileia e Pereia (4 a.C.–39 d.C.)"], ["Filipe", "Itureia e Traconites (4 a.C.–34 d.C.)"]],
    refs: ["MAT 14:1", "LUK 3:1", "LUK 3:19", "LUK 9:7", "ACT 13:1"]
  },
  {
    termo: "Diáspora",
    categoria: "Grupos e instituições",
    texto: "Nome dado à dispersão dos judeus fora da terra de Israel e ao conjunto das comunidades assim formadas. Começou com as deportações assírias e babilônicas e cresceu com migrações voluntárias, de modo que no primeiro século havia judeus em todo o mundo mediterrâneo e no Oriente, com centros importantes em Alexandria, Antioquia, Babilônia e Roma. Suas sinagogas e o uso do grego prepararam o terreno para a missão cristã. Tiago e Pedro dirigem suas cartas aos 'dispersos', aplicando o termo aos cristãos.",
    dados: [["Grego", "diasporá, 'dispersão'"], ["Centros", "Alexandria, Antioquia, Babilônia, Roma, Ásia Menor"]],
    refs: ["DEU 28:64", "JOH 7:35", "ACT 2:5", "JAM 1:1", "1PE 1:1"]
  },

  // ───────────────────────── Escritos e termos ─────────────────────────
  {
    termo: "Lei (Torá)",
    categoria: "Escritos e termos",
    texto: "Primeira das três divisões das Escrituras hebraicas, formada pelos cinco livros de Moisés: Gênesis, Êxodo, Levítico, Números e Deuteronômio, também chamados de Pentateuco. A palavra hebraica torá significa 'instrução, ensino' e abrange tanto as narrativas quanto os mandamentos dados a Israel. No Novo Testamento, 'a Lei' pode indicar esses livros, o conjunto dos mandamentos ou, às vezes, todo o Antigo Testamento. Jesus declarou que não veio abolir a Lei, mas cumpri-la, e Paulo a descreve como o aio que conduz a Cristo.",
    dados: [["Livros", "Gênesis, Êxodo, Levítico, Números e Deuteronômio"], ["Hebraico", "torá, 'instrução'"]],
    refs: ["JOS 1:8", "PSA 19:7", "MAT 5:17", "JOH 1:17", "GAL 3:24"]
  },
  {
    termo: "Profetas",
    categoria: "Escritos e termos",
    texto: "Segunda divisão das Escrituras hebraicas. Compreende os Profetas Anteriores, que são os livros de Josué, Juízes, Samuel e Reis, e os Profetas Posteriores: Isaías, Jeremias, Ezequiel e os doze profetas menores, contados como um só livro. A expressão 'a Lei e os Profetas' é usada no Novo Testamento para designar o conjunto das Escrituras. Trechos dos Profetas eram lidos nas sinagogas a cada sábado, depois da Lei. Daniel, na ordem hebraica, está entre os Escritos.",
    dados: [["Profetas Anteriores", "Josué, Juízes, Samuel e Reis"], ["Profetas Posteriores", "Isaías, Jeremias, Ezequiel e os Doze"], ["Hebraico", "Neviim"]],
    refs: ["MAT 7:12", "LUK 24:27", "ACT 13:15", "HEB 1:1"]
  },
  {
    termo: "Escritos",
    categoria: "Escritos e termos",
    texto: "Terceira divisão das Escrituras hebraicas, que reúne livros de natureza variada: Salmos, Provérbios e Jó; os cinco rolos lidos em festas (Cântico dos Cânticos, Rute, Lamentações, Eclesiastes e Ester); Daniel, Esdras-Neemias e Crônicas. Na ordem hebraica, Crônicas é o último livro, o que explica a expressão de Jesus 'desde o sangue de Abel até o sangue de Zacarias', do primeiro ao último livro. Ao mencionar a Lei, os Profetas e os Salmos, Jesus se refere às três divisões. O conteúdo é o mesmo do Antigo Testamento protestante.",
    dados: [["Hebraico", "Ketuvim"], ["Tanak", "Sigla de Torá, Neviim e Ketuvim"]],
    refs: ["LUK 24:44", "MAT 23:35"]
  },
  {
    termo: "Septuaginta",
    categoria: "Escritos e termos",
    texto: "Tradução grega das Escrituras hebraicas, iniciada em Alexandria, no Egito, no século III a.C., com o Pentateuco, e completada ao longo dos dois séculos seguintes. O nome, abreviado LXX, vem da tradição de que setenta ou setenta e dois sábios teriam feito a tradução. Foi a Bíblia dos judeus de língua grega e da igreja primitiva, e a maioria das citações do Antigo Testamento no Novo segue seu texto. Inclui também livros que não constam do cânon hebraico, chamados apócrifos ou deuterocanônicos.",
    dados: [["Idioma", "Grego"], ["Local e época", "Alexandria, séculos III a I a.C."], ["Sigla", "LXX"]],
    refs: []
  },
  {
    termo: "Targum",
    categoria: "Escritos e termos",
    texto: "Tradução ou paráfrase das Escrituras hebraicas em aramaico, língua que se tornou a fala comum dos judeus depois do exílio. Nas sinagogas, a leitura do texto hebraico era acompanhada de uma versão oral em aramaico, para que o povo entendesse; com o tempo, essas versões foram postas por escrito, com acréscimos explicativos. Os mais conhecidos são o Targum de Ônquelos, sobre a Lei, e o de Jônatas, sobre os Profetas. A leitura com explicação feita no tempo de Esdras costuma ser citada como antecedente da prática.",
    dados: [["Idioma", "Aramaico"], ["Principais", "Ônquelos (Lei) e Jônatas (Profetas)"]],
    refs: ["NEH 8:8", "EZR 4:7"]
  },
  {
    termo: "Talmude",
    categoria: "Escritos e termos",
    texto: "Grande coleção da tradição rabínica, posterior ao Novo Testamento. Compõe-se da Mishná, compilação da lei oral concluída por volta do ano 200 d.C., e da Guemará, comentário sobre ela. Há duas versões: o Talmude de Jerusalém e o da Babilônia, este mais extenso e influente, concluído por volta do século VI. Embora tardio, preserva tradições que ajudam a entender o judaísmo do tempo de Jesus, como a 'tradição dos anciãos' mencionada nos Evangelhos. Não faz parte da Bíblia.",
    dados: [["Partes", "Mishná e Guemará"], ["Época", "Séculos II a VI d.C."]],
    refs: ["MAT 15:2", "MAR 7:3"]
  },
  {
    termo: "Manuscritos do Mar Morto",
    categoria: "Escritos e termos",
    texto: "Conjunto de rolos e fragmentos descobertos a partir de 1947 em cavernas próximas a Qumran, na margem noroeste do mar Morto. Datam aproximadamente do século III a.C. ao século I d.C. e incluem cópias de quase todos os livros do Antigo Testamento, além de comentários, regras comunitárias e hinos. São cerca de mil anos mais antigos que os manuscritos hebraicos completos conhecidos até então e confirmaram, em linhas gerais, a fidelidade da transmissão do texto bíblico. Costumam ser atribuídos a uma comunidade essênia, ponto ainda debatido.",
    dados: [["Descoberta", "1947–1956, em 11 cavernas"], ["Datação", "Aproximadamente século III a.C. a século I d.C."], ["Idiomas", "Hebraico, aramaico e grego"]],
    refs: []
  },
  {
    termo: "Apócrifos",
    categoria: "Escritos e termos",
    texto: "Nome dado, na tradição protestante, aos livros judaicos escritos em sua maioria entre os séculos III a.C. e I d.C. que constam da Septuaginta, mas não do cânon hebraico: Tobias, Judite, Sabedoria, Eclesiástico, Baruque, 1 e 2 Macabeus e acréscimos a Ester e Daniel. As igrejas católica e ortodoxa os chamam de deuterocanônicos e os incluem no Antigo Testamento; as Bíblias protestantes não os incluem, embora reconheçam seu valor histórico, especialmente para conhecer o período entre os dois Testamentos.",
    dados: [["Significado", "Do grego, 'ocultos'"], ["Principais", "Tobias, Judite, Sabedoria, Eclesiástico, Baruque, 1 e 2 Macabeus"]],
    refs: []
  },
  {
    termo: "Aliança",
    categoria: "Escritos e termos",
    texto: "Compromisso solene que estabelece um relacionamento, com promessas e obrigações. Na Bíblia, as alianças principais são iniciativa de Deus: com Noé, com Abraão, com Israel no Sinai e com Davi. Eram ratificadas por juramento, sacrifício e sinais, como o arco-íris, a circuncisão e o sangue aspergido. Jeremias anunciou uma nova aliança, com a Lei escrita no coração; Jesus a relacionou com seu sangue, na ceia, e Hebreus a apresenta como superior à antiga. A palavra 'testamento', nos nomes das duas partes da Bíblia, tem esse sentido.",
    dados: [["Hebraico", "berit"], ["Grego", "diathéke"]],
    refs: ["GEN 15:18", "EXO 24:8", "JER 31:31", "LUK 22:20", "HEB 8:6"]
  },
  {
    termo: "Messias (Ungido)",
    categoria: "Escritos e termos",
    texto: "Do hebraico mashiach, 'ungido'; em grego, Christós, de onde vem 'Cristo'. No Antigo Testamento, o termo se aplica aos que eram ungidos com óleo para um ofício, sobretudo o rei, 'o ungido do Senhor'. Com base nas promessas feitas a Davi e nos profetas, firmou-se a esperança de um rei ungido que Deus enviaria para libertar e governar seu povo com justiça. O Novo Testamento proclama que Jesus é esse Messias, como confessou Pedro, e o título acabou associado a seu nome.",
    dados: [["Hebraico", "mashiach"], ["Grego", "Christós"]],
    refs: ["1SA 24:6", "PSA 2:2", "DAN 9:25", "MAT 16:16", "JOH 1:41"]
  },
  {
    termo: "Evangelho",
    categoria: "Escritos e termos",
    texto: "Do grego euangélion, 'boa notícia'. No mundo antigo, o termo era usado para anúncios de vitórias ou de acontecimentos felizes; Isaías fala daquele que anuncia boas-novas de paz e salvação. No Novo Testamento, é a mensagem da salvação que Deus realizou em Jesus Cristo, em sua morte e ressurreição, proclamada a todos os povos. Só mais tarde a palavra passou a designar também os quatro livros que narram a vida e o ensino de Jesus: Mateus, Marcos, Lucas e João.",
    dados: [["Grego", "euangélion, 'boa notícia'"], ["Livros", "Mateus, Marcos, Lucas e João"]],
    refs: ["ISA 52:7", "MAR 1:1", "MAR 1:15", "ROM 1:16", "1CO 15:1"]
  },
  {
    termo: "Apóstolo",
    categoria: "Escritos e termos",
    texto: "Do grego apóstolos, 'enviado', alguém que age com a autoridade de quem o enviou. Jesus escolheu doze discípulos e lhes deu esse nome, para que estivessem com ele e fossem enviados a pregar; depois da traição de Judas, Matias foi escolhido para completar o grupo. Paulo foi chamado a ser apóstolo dos gentios pelo Cristo ressuscitado. O termo é usado em sentido mais amplo para outros enviados, como Barnabé. Os apóstolos são descritos como fundamento da igreja, e o próprio Jesus é chamado de apóstolo em Hebreus.",
    dados: [["Grego", "apóstolos, 'enviado'"], ["Os Doze", "Escolhidos por Jesus; Matias substituiu Judas"]],
    refs: ["LUK 6:13", "ACT 1:26", "1CO 15:9", "EPH 2:20", "HEB 3:1"]
  },
  {
    termo: "Parábola",
    categoria: "Escritos e termos",
    texto: "Narrativa breve ou comparação tirada da vida comum, usada para ensinar uma verdade espiritual. O termo grego significa 'colocar ao lado', comparar; o hebraico correspondente, mashal, abrange também provérbios e enigmas. Há parábolas no Antigo Testamento, como a que Natã contou a Davi, mas elas são sobretudo a forma característica do ensino de Jesus sobre o reino de Deus: o semeador, o filho pródigo, o bom samaritano. Jesus explica que as parábolas revelam o reino aos que ouvem com disposição e o ocultam aos demais.",
    dados: [["Grego", "parabolé"], ["Hebraico", "mashal"]],
    refs: ["2SA 12:1", "PSA 78:2", "MAT 13:3", "MAT 13:34", "LUK 15:3"]
  },
  {
    termo: "Selá",
    categoria: "Escritos e termos",
    texto: "Palavra hebraica que aparece mais de setenta vezes nos Salmos e três vezes na oração de Habacuque, geralmente no fim de uma estrofe. Seu significado exato é desconhecido. Parece ser uma indicação musical ou litúrgica, e as explicações mais comuns são 'pausa', 'interlúdio instrumental' ou 'elevação' da voz ou da música. Como não faz parte do sentido do texto, algumas traduções a omitem ou a colocam à margem. É comum que, na leitura pública, não seja pronunciada.",
    dados: [["Ocorrências", "71 nos Salmos e 3 em Habacuque"], ["Sentido", "Incerto; provavelmente indicação musical"]],
    refs: ["PSA 3:2", "PSA 24:10", "PSA 46:7", "HAB 3:3"]
  },
  {
    termo: "Amém",
    categoria: "Escritos e termos",
    texto: "Palavra hebraica que significa 'firme, certo, assim seja', da mesma raiz de 'crer' e 'fidelidade'. Era a resposta do povo para confirmar um juramento, uma bênção, uma maldição ou um louvor, tomando para si o que fora dito. Encerra as doxologias dos livros dos Salmos e passou ao culto cristão sem tradução. Jesus a usa de modo singular no início de suas declarações: 'em verdade vos digo'. Paulo afirma que as promessas de Deus têm em Cristo o seu 'amém', e o Apocalipse chama Jesus de 'o Amém'.",
    dados: [["Hebraico", "amen, 'firme, verdadeiro'"], ["Uso", "Resposta de confirmação e concordância"]],
    refs: ["DEU 27:15", "NEH 8:6", "PSA 41:13", "2CO 1:20", "REV 3:14"]
  },
  {
    termo: "Aleluia",
    categoria: "Escritos e termos",
    texto: "Expressão hebraica que significa 'louvai ao Senhor', formada pelo verbo 'louvar' e pela forma abreviada do nome divino, Yah. Aparece no início ou no fim de vários salmos, especialmente nos grupos 104 a 106, 111 a 118 e 146 a 150, usados no culto do templo e nas festas. Muitas traduções a vertem por 'Louvai ao Senhor'. No Novo Testamento, ocorre apenas no Apocalipse, no cântico da multidão celestial que celebra o juízo de Deus e as bodas do Cordeiro.",
    dados: [["Hebraico", "hallelu-Yah, 'louvai a Yah'"], ["No NT", "Somente em Apocalipse 19"]],
    refs: ["PSA 106:1", "PSA 150:6", "REV 19:1", "REV 19:6"]
  },
  {
    termo: "Hosana",
    categoria: "Escritos e termos",
    texto: "Expressão hebraica que significa 'salva, por favor' ou 'salva agora'. Vem do Salmo 118, cantado nas grandes festas, em especial na dos Tabernáculos, quando o povo agitava ramos. Com o uso, o pedido de socorro tornou-se também uma aclamação de louvor. Foi com esse grito, acompanhado das palavras 'bendito o que vem em nome do Senhor', que a multidão recebeu Jesus em sua entrada em Jerusalém, estendendo mantos e ramos pelo caminho e saudando-o como o Filho de Davi.",
    dados: [["Hebraico", "hoshia-na, 'salva, por favor'"], ["Origem", "Salmo 118:25"]],
    refs: ["PSA 118:25", "MAT 21:9", "MAR 11:9", "JOH 12:13"]
  },
  {
    termo: "Maranata",
    categoria: "Escritos e termos",
    texto: "Expressão aramaica conservada por Paulo, sem tradução no texto grego, no fim da primeira carta aos Coríntios; algumas versões em português a traduzem. Conforme a divisão das palavras, pode significar 'Vem, nosso Senhor!' (marana tha) ou 'Nosso Senhor vem' ou 'veio' (maran atha); a primeira leitura, como oração, é a mais aceita. Por estar em aramaico, deve remontar às primeiras comunidades cristãs da Palestina e mostra que desde cedo Jesus era invocado como Senhor. O Apocalipse traz uma súplica equivalente em grego: 'Vem, Senhor Jesus'.",
    dados: [["Idioma", "Aramaico"], ["Sentido provável", "'Vem, nosso Senhor!'"]],
    refs: ["1CO 16:22", "REV 22:20"]
  },
  {
    termo: "Geena",
    categoria: "Escritos e termos",
    texto: "Forma grega do hebraico Ge-Hinom, 'vale de Hinom', um vale ao sul de Jerusalém. Ali, no tempo dos reis Acaz e Manassés, crianças foram queimadas em sacrifício a Moloque, e Josias profanou o lugar para pôr fim à prática; Jeremias o chamou de vale da Matança. No tempo de Jesus, o nome havia se tornado imagem do lugar de castigo final dos ímpios. É o termo que Jesus usa nos Evangelhos e que as traduções geralmente vertem por 'inferno', distinguindo-se de Hades, o lugar dos mortos.",
    dados: [["Hebraico", "Ge-Hinom, 'vale de Hinom'"], ["Local", "Vale ao sul e sudoeste de Jerusalém"]],
    refs: ["2KI 23:10", "JER 7:31", "MAT 5:22", "MAT 10:28", "MAR 9:43"]
  },
  {
    termo: "Hades e Seol",
    categoria: "Escritos e termos",
    texto: "Seol é o termo hebraico do Antigo Testamento para o lugar ou estado dos mortos, descrito como região de sombra e silêncio para onde todos descem; é traduzido por 'sepultura', 'abismo', 'inferno' ou simplesmente mantido. Hades é o equivalente grego, usado na Septuaginta e no Novo Testamento. Pedro cita o Salmo 16 para afirmar que Cristo não foi deixado no Hades. No Apocalipse, Cristo tem as chaves da morte e do Hades, que por fim são lançados no lago de fogo. Distingue-se de Geena, o lugar do castigo final.",
    dados: [["Hebraico", "sheol"], ["Grego", "hádes"]],
    refs: ["GEN 37:35", "PSA 16:10", "LUK 16:23", "ACT 2:27", "REV 20:14"]
  },
  {
    termo: "Abba",
    categoria: "Escritos e termos",
    texto: "Palavra aramaica que significa 'pai', usada pelos filhos no trato familiar, mas também por adultos, com respeito. Aparece três vezes no Novo Testamento, sempre acompanhada da tradução grega: na oração de Jesus no Getsêmani e em duas passagens de Paulo, segundo as quais o Espírito leva os crentes a clamar 'Abba, Pai', como filhos adotados e não como escravos. A preservação do termo em aramaico indica que ele remonta ao modo como o próprio Jesus se dirigia a Deus.",
    dados: [["Idioma", "Aramaico"], ["Significado", "'Pai'"]],
    refs: ["MAR 14:36", "ROM 8:15", "GAL 4:6"]
  }
];
