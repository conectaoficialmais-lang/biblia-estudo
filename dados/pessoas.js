// Pessoas da Bíblia e genealogias.
// Datas: cronologia tradicional evangélica (Êxodo em c. 1446 a.C.; reis segundo Thiele). Sempre aproximadas.
window.PESSOAS = [
  // ───────────── Primeiros tempos ─────────────
  {
    id: "adao", nome: "Adão", outros: "", significado: "homem, humanidade; ligado a \"terra\" (adamá)",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "O primeiro homem, formado por Deus do pó da terra e posto no jardim do Éden. Desobedeceu ao comer do fruto proibido, e por ele o pecado e a morte entraram no mundo. O Novo Testamento o contrapõe a Cristo, o \"último Adão\", em quem todos são vivificados.",
    familia: { pai: "", mae: "", conjuge: "Eva", filhos: "Caim, Abel, Sete e outros filhos e filhas" },
    ids: { conjuge: "eva", filhos: ["caim", "abel", "sete"] },
    refs: ["GEN 2:7", "GEN 3:17", "GEN 5:5", "ROM 5:12", "1CO 15:22", "1CO 15:45"]
  },
  {
    id: "eva", nome: "Eva", outros: "", significado: "vida, vivente",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "A primeira mulher, formada por Deus a partir da costela de Adão para ser sua companheira. Enganada pela serpente, comeu do fruto proibido e o deu ao marido. Adão a chamou Eva por ser \"mãe de todos os viventes\"; a ela foi dita a primeira promessa de um descendente que feriria a serpente.",
    familia: { pai: "", mae: "", conjuge: "Adão", filhos: "Caim, Abel, Sete e outros" },
    ids: { conjuge: "adao", filhos: ["caim", "abel", "sete"] },
    refs: ["GEN 2:22", "GEN 3:6", "GEN 3:15", "GEN 3:20", "2CO 11:3", "1TI 2:13"]
  },
  {
    id: "caim", nome: "Caim", outros: "", significado: "adquirido (Gn 4:1)",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Primeiro filho de Adão e Eva, lavrador da terra. Irado porque Deus aceitou a oferta de Abel e não a sua, matou o irmão, cometendo o primeiro homicídio. Foi condenado a ser fugitivo, mas recebeu de Deus um sinal de proteção; tornou-se exemplo do caminho da inveja e do ódio.",
    familia: { pai: "Adão", mae: "Eva", conjuge: "", filhos: "Enoque (outro, não o que andou com Deus)" },
    ids: { pai: "adao", mae: "eva" },
    refs: ["GEN 4:1", "GEN 4:8", "GEN 4:15", "HEB 11:4", "1JO 3:12"]
  },
  {
    id: "abel", nome: "Abel", outros: "", significado: "sopro, vapor",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Segundo filho de Adão e Eva, pastor de ovelhas. Ofereceu a Deus das primícias do seu rebanho, e Deus se agradou dele e de sua oferta. Morto por Caim, é lembrado como o primeiro justo a morrer e como exemplo de fé.",
    familia: { pai: "Adão", mae: "Eva", conjuge: "", filhos: "" },
    ids: { pai: "adao", mae: "eva" },
    refs: ["GEN 4:2", "GEN 4:4", "GEN 4:8", "MAT 23:35", "HEB 11:4", "HEB 12:24"]
  },
  {
    id: "sete", nome: "Sete", outros: "", significado: "posto, concedido (Gn 4:25)",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Filho de Adão e Eva nascido depois da morte de Abel, recebido como dádiva de Deus em lugar do irmão. Por sua descendência passa a linhagem que chega a Noé e, por fim, a Jesus. Nos dias de seu filho Enos começou-se a invocar o nome do Senhor.",
    familia: { pai: "Adão", mae: "Eva", conjuge: "", filhos: "Enos e outros" },
    ids: { pai: "adao", mae: "eva" },
    refs: ["GEN 4:25", "GEN 4:26", "GEN 5:3", "LUK 3:38"]
  },
  {
    id: "enoque", nome: "Enoque", outros: "", significado: "dedicado, iniciado",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Sétimo depois de Adão na linhagem de Sete, pai de Matusalém. A Bíblia diz que \"andou com Deus\" e que não passou pela morte, pois Deus o tomou para si. É citado em Hebreus como exemplo de fé que agrada a Deus e em Judas como profeta do juízo.",
    familia: { pai: "Jarede", mae: "", conjuge: "", filhos: "Matusalém e outros" },
    ids: { filhos: ["matusalem"] },
    refs: ["GEN 5:22", "GEN 5:24", "HEB 11:5", "JUD 1:14"]
  },
  {
    id: "matusalem", nome: "Matusalém", outros: "", significado: "",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Filho de Enoque e avô de Noé. Viveu 969 anos, a vida mais longa registrada na Bíblia. Pela contagem do texto hebraico, morreu no ano do dilúvio.",
    familia: { pai: "Enoque", mae: "", conjuge: "", filhos: "Lameque e outros" },
    ids: { pai: "enoque" },
    refs: ["GEN 5:21", "GEN 5:25", "GEN 5:27", "LUK 3:37"]
  },
  {
    id: "noe", nome: "Noé", outros: "", significado: "descanso, consolo",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Homem justo que achou graça diante de Deus numa geração corrompida. Obedeceu à ordem de construir a arca, na qual ele, sua família e os animais foram preservados do dilúvio. Depois do dilúvio Deus fez com ele uma aliança, tendo o arco nas nuvens como sinal; dele descendem todos os povos.",
    familia: { pai: "Lameque", mae: "", conjuge: "(não nomeada)", filhos: "Sem, Cam e Jafé" },
    ids: { filhos: ["sem", "cam", "jafe"] },
    refs: ["GEN 6:8", "GEN 6:9", "GEN 7:1", "GEN 9:1", "MAT 24:37", "HEB 11:7"]
  },
  {
    id: "sem", nome: "Sem", outros: "", significado: "nome, renome",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Filho de Noé, salvo com ele na arca. Recebeu a bênção do pai, e de sua linhagem (os semitas) vieram Héber, Abraão e o povo de Israel. Está na genealogia de Jesus.",
    familia: { pai: "Noé", mae: "", conjuge: "(não nomeada)", filhos: "Elão, Assur, Arfaxade, Lude e Arã" },
    ids: { pai: "noe" },
    refs: ["GEN 5:32", "GEN 9:26", "GEN 10:21", "GEN 11:10", "LUK 3:36"]
  },
  {
    id: "cam", nome: "Cam", outros: "Cão", significado: "",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Filho de Noé, salvo na arca. Desonrou o pai ao vê-lo descoberto e contá-lo aos irmãos; a maldição que se seguiu recaiu sobre seu filho Canaã. De seus filhos vieram, entre outros, Cuxe, Mizraim (Egito) e os cananeus.",
    familia: { pai: "Noé", mae: "", conjuge: "(não nomeada)", filhos: "Cuxe, Mizraim, Pute e Canaã" },
    ids: { pai: "noe" },
    refs: ["GEN 9:18", "GEN 9:22", "GEN 10:6"]
  },
  {
    id: "jafe", nome: "Jafé", outros: "", significado: "ampliação (Gn 9:27)",
    grupo: "Primeiros tempos", epoca: "",
    resumo: "Filho de Noé, salvo na arca. Com Sem, cobriu a nudez do pai e foi abençoado com a promessa de ser \"alargado\" por Deus. Seus descendentes são associados aos povos das ilhas e do norte, na tabela das nações.",
    familia: { pai: "Noé", mae: "", conjuge: "(não nomeada)", filhos: "Gômer, Magogue, Madai, Javã, Tubal, Meseque e Tiras" },
    ids: { pai: "noe" },
    refs: ["GEN 9:18", "GEN 9:27", "GEN 10:2"]
  },

  // ───────────── Patriarcas ─────────────
  {
    id: "jo", nome: "Jó", outros: "", significado: "",
    grupo: "Patriarcas", epoca: "",
    resumo: "Homem íntegro e temente a Deus da terra de Uz, que perdeu bens, filhos e saúde numa prova permitida por Deus. Debateu com seus amigos sobre o sofrimento do justo, até que o próprio Deus lhe respondeu do meio do redemoinho. Foi restaurado em dobro e tornou-se exemplo de perseverança. A época é incerta; o estilo de vida descrito sugere o tempo dos patriarcas.",
    familia: { pai: "", mae: "", conjuge: "(não nomeada)", filhos: "sete filhos e três filhas; depois da prova, outros sete filhos e três filhas (Jemima, Quezia e Quéren-Hapuque)" },
    ids: {},
    refs: ["JOB 1:1", "JOB 1:21", "JOB 19:25", "JOB 42:10", "EZE 14:14", "JAM 5:11"]
  },
  {
    id: "abraao", nome: "Abraão", outros: "Abrão", significado: "pai de uma multidão",
    grupo: "Patriarcas", epoca: "c. 2166–1991 a.C.",
    resumo: "Chamado por Deus em Ur dos caldeus, deixou sua terra rumo a Canaã, com a promessa de uma descendência, uma terra e bênção para todas as famílias da terra. Creu em Deus, e isso lhe foi imputado como justiça; foi provado ao ser chamado a oferecer Isaque. É o pai do povo de Israel e, segundo o Novo Testamento, de todos os que creem. As datas seguem a cronologia do Êxodo antigo; outros estudiosos o situam um ou dois séculos depois.",
    familia: { pai: "Terá", mae: "", conjuge: "Sara; Agar (serva); Quetura", filhos: "Ismael, Isaque e os filhos de Quetura" },
    ids: { conjuge: "sara", filhos: ["ismael", "isaque"] },
    refs: ["GEN 12:1", "GEN 15:6", "GEN 17:5", "GEN 22:2", "ROM 4:3", "HEB 11:8"]
  },
  {
    id: "sara", nome: "Sara", outros: "Sarai", significado: "princesa",
    grupo: "Patriarcas", epoca: "c. 2156–2029 a.C.",
    resumo: "Esposa de Abraão, estéril até a velhice. Riu ao ouvir a promessa de um filho, mas aos noventa anos deu à luz Isaque, o filho da promessa. É lembrada como exemplo de fé e como mãe do povo da aliança.",
    familia: { pai: "Terá (era meia-irmã de Abraão, Gn 20:12)", mae: "", conjuge: "Abraão", filhos: "Isaque" },
    ids: { conjuge: "abraao", filhos: ["isaque"] },
    refs: ["GEN 17:15", "GEN 18:14", "GEN 21:2", "HEB 11:11", "1PE 3:6"]
  },
  {
    id: "lo", nome: "Ló", outros: "", significado: "",
    grupo: "Patriarcas", epoca: "c. 2100 a.C.",
    resumo: "Sobrinho de Abraão, que o acompanhou de Harã a Canaã. Ao se separarem, escolheu a campina do Jordão e foi morar em Sodoma, de onde foi tirado pelos anjos antes da destruição da cidade. Sua mulher olhou para trás e tornou-se uma estátua de sal; de suas filhas descendem moabitas e amonitas.",
    familia: { pai: "Harã (irmão de Abraão)", mae: "", conjuge: "(não nomeada)", filhos: "duas filhas; por elas, Moabe e Ben-Ami" },
    ids: {},
    refs: ["GEN 13:11", "GEN 14:16", "GEN 19:16", "2PE 2:7"]
  },
  {
    id: "melquisedeque", nome: "Melquisedeque", outros: "", significado: "rei de justiça",
    grupo: "Patriarcas", epoca: "c. 2080 a.C.",
    resumo: "Rei de Salém e sacerdote do Deus Altíssimo, que abençoou Abraão e dele recebeu o dízimo. Aparece sem genealogia no relato de Gênesis. O Salmo 110 e a carta aos Hebreus o apresentam como figura do sacerdócio eterno de Cristo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["GEN 14:18", "PSA 110:4", "HEB 5:6", "HEB 7:1", "HEB 7:3"]
  },
  {
    id: "agar", nome: "Agar", outros: "Hagar", significado: "",
    grupo: "Patriarcas", epoca: "c. 2080 a.C.",
    resumo: "Serva egípcia de Sara, dada a Abraão para lhe gerar um filho, Ismael. Fugiu e depois foi despedida para o deserto, onde por duas vezes o anjo do Senhor a encontrou e lhe prometeu grande descendência. Paulo usa sua história como figura em Gálatas 4.",
    familia: { pai: "", mae: "", conjuge: "Abraão (como concubina)", filhos: "Ismael" },
    ids: { conjuge: "abraao", filhos: ["ismael"] },
    refs: ["GEN 16:1", "GEN 16:15", "GEN 21:17", "GAL 4:24"]
  },
  {
    id: "ismael", nome: "Ismael", outros: "", significado: "Deus ouve",
    grupo: "Patriarcas", epoca: "c. 2080–1943 a.C.",
    resumo: "Primeiro filho de Abraão, nascido de Agar. Não era o herdeiro da promessa, mas Deus prometeu fazer dele uma grande nação e pai de doze príncipes. Cresceu no deserto de Parã; dele descendem tribos árabes.",
    familia: { pai: "Abraão", mae: "Agar", conjuge: "uma egípcia (não nomeada)", filhos: "doze filhos (Nebaiote, Quedar e outros) e uma filha" },
    ids: { pai: "abraao", mae: "agar" },
    refs: ["GEN 16:11", "GEN 17:20", "GEN 25:9", "GEN 25:17"]
  },
  {
    id: "isaque", nome: "Isaque", outros: "", significado: "riso; ele ri",
    grupo: "Patriarcas", epoca: "c. 2066–1886 a.C.",
    resumo: "Filho da promessa, nascido a Abraão e Sara na velhice. Foi levado ao monte Moriá para ser oferecido, e Deus proveu um carneiro em seu lugar. Herdou a aliança feita com Abraão e a transmitiu a Jacó.",
    familia: { pai: "Abraão", mae: "Sara", conjuge: "Rebeca", filhos: "Esaú e Jacó" },
    ids: { pai: "abraao", mae: "sara", conjuge: "rebeca", filhos: ["esau", "jaco"] },
    refs: ["GEN 17:19", "GEN 21:3", "GEN 22:9", "GEN 25:21", "GAL 4:28", "HEB 11:20"]
  },
  {
    id: "rebeca", nome: "Rebeca", outros: "", significado: "",
    grupo: "Patriarcas", epoca: "c. 2030 a.C.",
    resumo: "Trazida da Mesopotâmia pelo servo de Abraão para ser esposa de Isaque. Depois de anos estéril, deu à luz os gêmeos Esaú e Jacó, e ouviu de Deus que o maior serviria ao menor. Ajudou Jacó a obter a bênção do pai no lugar de Esaú.",
    familia: { pai: "Betuel", mae: "", conjuge: "Isaque", filhos: "Esaú e Jacó" },
    ids: { conjuge: "isaque", filhos: ["esau", "jaco"] },
    refs: ["GEN 24:15", "GEN 24:67", "GEN 25:21", "GEN 27:6", "ROM 9:10"]
  },
  {
    id: "esau", nome: "Esaú", outros: "Edom", significado: "peludo; Edom = vermelho",
    grupo: "Patriarcas", epoca: "c. 2006 a.C. –",
    resumo: "Gêmeo mais velho de Jacó, caçador e preferido de Isaque. Vendeu o direito de primogenitura por um prato de lentilhas e perdeu a bênção paterna para o irmão. Reconciliou-se com Jacó anos depois; dele descendem os edomitas.",
    familia: { pai: "Isaque", mae: "Rebeca", conjuge: "Judite, Basemate, Maalate e outras (os nomes variam entre Gn 26, 28 e 36)", filhos: "Elifaz, Reuel e outros" },
    ids: { pai: "isaque", mae: "rebeca" },
    refs: ["GEN 25:25", "GEN 25:34", "GEN 27:38", "GEN 33:4", "ROM 9:13", "HEB 12:16"]
  },
  {
    id: "jaco", nome: "Jacó", outros: "Israel", significado: "o que segura o calcanhar, suplantador; Israel = o que luta com Deus",
    grupo: "Patriarcas", epoca: "c. 2006–1859 a.C.",
    resumo: "Filho mais novo de Isaque, obteve a primogenitura e a bênção que eram de Esaú. Em Betel recebeu a promessa feita a Abraão; em Peniel lutou com Deus e recebeu o nome de Israel. Seus doze filhos deram origem às doze tribos; terminou a vida no Egito, junto de José.",
    familia: { pai: "Isaque", mae: "Rebeca", conjuge: "Lia e Raquel; as servas Bila e Zilpa", filhos: "Rúben, Simeão, Levi, Judá, Dã, Naftali, Gade, Aser, Issacar, Zebulom, José, Benjamim; e Diná" },
    ids: { pai: "isaque", mae: "rebeca", conjuge: "raquel", filhos: ["ruben", "simeao", "levi", "juda", "jose", "benjamim"] },
    refs: ["GEN 25:26", "GEN 28:16", "GEN 32:28", "GEN 35:10", "GEN 46:3", "HEB 11:21"]
  },
  {
    id: "labao", nome: "Labão", outros: "", significado: "branco",
    grupo: "Patriarcas", epoca: "c. 1930 a.C.",
    resumo: "Irmão de Rebeca e pai de Lia e Raquel, morador de Harã. Enganou Jacó, dando-lhe Lia em lugar de Raquel, e o manteve a seu serviço por vinte anos. Fez por fim um pacto de paz com o genro em Gileade.",
    familia: { pai: "Betuel", mae: "", conjuge: "", filhos: "Lia, Raquel e filhos não nomeados" },
    ids: { filhos: ["lia", "raquel"] },
    refs: ["GEN 24:29", "GEN 29:25", "GEN 31:24"]
  },
  {
    id: "lia", nome: "Lia", outros: "Leia", significado: "",
    grupo: "Patriarcas", epoca: "c. 1930 a.C.",
    resumo: "Filha mais velha de Labão e primeira esposa de Jacó, dada a ele por engano do pai. Menos amada que Raquel, foi abençoada por Deus com muitos filhos. Dela nasceram Levi, de quem veio o sacerdócio, e Judá, de quem vieram Davi e o Messias.",
    familia: { pai: "Labão", mae: "", conjuge: "Jacó", filhos: "Rúben, Simeão, Levi, Judá, Issacar, Zebulom e Diná" },
    ids: { pai: "labao", conjuge: "jaco", filhos: ["ruben", "simeao", "levi", "juda"] },
    refs: ["GEN 29:23", "GEN 29:31", "GEN 29:35", "RUT 4:11"]
  },
  {
    id: "raquel", nome: "Raquel", outros: "", significado: "ovelha",
    grupo: "Patriarcas", epoca: "c. 1930 a.C.",
    resumo: "Filha mais nova de Labão e esposa amada de Jacó, que trabalhou catorze anos por ela. Estéril por muito tempo, deu à luz José e morreu no parto de Benjamim, perto de Belém. Jeremias e Mateus a evocam como a mãe que chora por seus filhos.",
    familia: { pai: "Labão", mae: "", conjuge: "Jacó", filhos: "José e Benjamim" },
    ids: { pai: "labao", conjuge: "jaco", filhos: ["jose", "benjamim"] },
    refs: ["GEN 29:18", "GEN 29:20", "GEN 30:22", "GEN 35:19", "JER 31:15", "MAT 2:18"]
  },
  {
    id: "ruben", nome: "Rúben", outros: "", significado: "vede, um filho!",
    grupo: "Patriarcas", epoca: "c. 1920 a.C. –",
    resumo: "Primogênito de Jacó e Lia. Tentou livrar José das mãos dos irmãos, mas perdeu a primazia de primogênito por ter desonrado o leito do pai. Sua tribo se estabeleceu a leste do Jordão.",
    familia: { pai: "Jacó", mae: "Lia", conjuge: "", filhos: "Enoque, Palu, Hezrom e Carmi" },
    ids: { pai: "jaco", mae: "lia" },
    refs: ["GEN 29:32", "GEN 35:22", "GEN 37:21", "GEN 49:3", "1CH 5:1"]
  },
  {
    id: "simeao", nome: "Simeão", outros: "", significado: "ouvir; (Deus) ouviu",
    grupo: "Patriarcas", epoca: "c. 1919 a.C. –",
    resumo: "Segundo filho de Jacó e Lia. Com Levi, vingou com violência a desonra de sua irmã Diná, matando os homens de Siquém, pelo que foi repreendido pelo pai. Ficou retido no Egito como refém por ordem de José; sua tribo acabou absorvida no território de Judá.",
    familia: { pai: "Jacó", mae: "Lia", conjuge: "", filhos: "Jemuel, Jamim, Oade, Jaquim, Zoar e Saul" },
    ids: { pai: "jaco", mae: "lia" },
    refs: ["GEN 29:33", "GEN 34:25", "GEN 42:24", "GEN 49:5"]
  },
  {
    id: "levi", nome: "Levi", outros: "", significado: "unido, ligado",
    grupo: "Patriarcas", epoca: "c. 1918 a.C. –",
    resumo: "Terceiro filho de Jacó e Lia, participou com Simeão do massacre de Siquém. Sua tribo, a de Moisés e Arão, foi separada para o serviço do tabernáculo e não recebeu território próprio. Dela vieram os sacerdotes e os levitas.",
    familia: { pai: "Jacó", mae: "Lia", conjuge: "", filhos: "Gérson, Coate, Merari e Joquebede" },
    ids: { pai: "jaco", mae: "lia" },
    refs: ["GEN 29:34", "GEN 34:25", "GEN 49:5", "NUM 3:6", "DEU 10:8", "MAL 2:4"]
  },
  {
    id: "juda", nome: "Judá", outros: "", significado: "louvor",
    grupo: "Patriarcas", epoca: "c. 1917 a.C. –",
    resumo: "Quarto filho de Jacó e Lia. Propôs vender José em vez de matá-lo e, anos depois, ofereceu-se como escravo no lugar de Benjamim. Recebeu do pai a promessa do cetro; de sua tribo vieram Davi e Jesus, o \"Leão da tribo de Judá\".",
    familia: { pai: "Jacó", mae: "Lia", conjuge: "a filha de Suá (cananeia); teve gêmeos de sua nora Tamar", filhos: "Er, Onã, Selá, Perez e Zerá" },
    ids: { pai: "jaco", mae: "lia" },
    refs: ["GEN 29:35", "GEN 37:26", "GEN 44:18", "GEN 49:10", "HEB 7:14", "REV 5:5"]
  },
  {
    id: "tamar", nome: "Tamar", outros: "", significado: "palmeira",
    grupo: "Patriarcas", epoca: "c. 1890 a.C.",
    resumo: "Nora de Judá, viúva de Er e de Onã. Privada do casamento com o terceiro filho, disfarçou-se e concebeu do próprio Judá, que reconheceu: \"Mais justa é ela do que eu\". Mãe de Perez e Zerá, é uma das mulheres citadas na genealogia de Jesus.",
    familia: { pai: "", mae: "", conjuge: "Er; depois Onã (filhos de Judá)", filhos: "Perez e Zerá (de Judá)" },
    ids: {},
    refs: ["GEN 38:6", "GEN 38:26", "RUT 4:12", "MAT 1:3"]
  },
  {
    id: "jose", nome: "José", outros: "Zafenate-Paneia (nome egípcio)", significado: "que Ele (Deus) acrescente",
    grupo: "Patriarcas", epoca: "c. 1915–1805 a.C.",
    resumo: "Filho preferido de Jacó, vendido pelos irmãos como escravo e levado ao Egito. Fiel a Deus na casa de Potifar e na prisão, interpretou os sonhos de Faraó e tornou-se governador do Egito. Salvou sua família da fome e reconheceu que Deus tornara em bem o mal que lhe fizeram.",
    familia: { pai: "Jacó", mae: "Raquel", conjuge: "Azenate", filhos: "Manassés e Efraim" },
    ids: { pai: "jaco", mae: "raquel" },
    refs: ["GEN 37:3", "GEN 37:28", "GEN 39:2", "GEN 41:41", "GEN 50:20", "HEB 11:22"]
  },
  {
    id: "benjamim", nome: "Benjamim", outros: "Benoni", significado: "filho da mão direita",
    grupo: "Patriarcas", epoca: "c. 1900 a.C. –",
    resumo: "Filho mais novo de Jacó; sua mãe, Raquel, morreu ao dá-lo à luz. Foi a peça central da prova a que José submeteu os irmãos no Egito. De sua tribo vieram o rei Saul e o apóstolo Paulo.",
    familia: { pai: "Jacó", mae: "Raquel", conjuge: "", filhos: "Belá, Bequer, Asbel e outros" },
    ids: { pai: "jaco", mae: "raquel" },
    refs: ["GEN 35:18", "GEN 42:4", "GEN 45:14", "GEN 49:27", "PHI 3:5"]
  },

  // ───────────── Êxodo e conquista ─────────────
  {
    id: "moises", nome: "Moisés", outros: "", significado: "tirado (das águas)",
    grupo: "Êxodo e conquista", epoca: "c. 1526–1406 a.C.",
    resumo: "Hebreu da tribo de Levi, criado pela filha de Faraó e chamado por Deus na sarça ardente para libertar Israel do Egito. Conduziu o povo pelo mar Vermelho, recebeu a Lei no Sinai e guiou Israel por quarenta anos no deserto. É o grande legislador e profeta do Antigo Testamento, a quem a tradição atribui o Pentateuco. As datas seguem o Êxodo em c. 1446 a.C.; há quem defenda c. 1270 a.C.",
    familia: { pai: "Anrão", mae: "Joquebede", conjuge: "Zípora", filhos: "Gérson e Eliézer" },
    ids: {},
    refs: ["EXO 2:10", "EXO 3:4", "EXO 14:21", "DEU 34:10", "JOH 1:17", "HEB 11:24"]
  },
  {
    id: "arao", nome: "Arão", outros: "", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1529–1406 a.C.",
    resumo: "Irmão mais velho de Moisés e seu porta-voz diante de Faraó. Foi consagrado o primeiro sumo sacerdote de Israel, e o sacerdócio ficou em sua descendência. Cedeu ao povo no episódio do bezerro de ouro; morreu no monte Hor, antes da entrada em Canaã.",
    familia: { pai: "Anrão", mae: "Joquebede", conjuge: "Eliseba", filhos: "Nadabe, Abiú, Eleazar e Itamar" },
    ids: {},
    refs: ["EXO 4:14", "EXO 7:1", "EXO 28:1", "EXO 32:4", "NUM 20:28", "HEB 5:4"]
  },
  {
    id: "miria", nome: "Miriã", outros: "", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1535–1407 a.C.",
    resumo: "Irmã de Moisés e Arão, chamada profetisa. Liderou as mulheres de Israel no cântico depois da travessia do mar. Foi ferida de lepra por sete dias ao murmurar contra Moisés; morreu em Cades.",
    familia: { pai: "Anrão", mae: "Joquebede", conjuge: "", filhos: "" },
    ids: {},
    refs: ["EXO 15:20", "NUM 12:1", "NUM 12:10", "NUM 20:1", "MIC 6:4"]
  },
  {
    id: "jetro", nome: "Jetro", outros: "Reuel", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1450 a.C.",
    resumo: "Sacerdote de Midiã e sogro de Moisés, que o acolheu durante os quarenta anos de exílio. Visitou Israel no deserto, reconheceu a grandeza do Senhor e aconselhou Moisés a repartir com outros homens a tarefa de julgar o povo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "Zípora e outras seis filhas; Hobabe" },
    ids: {},
    refs: ["EXO 3:1", "EXO 18:1", "EXO 18:17", "EXO 18:24"]
  },
  {
    id: "josue", nome: "Josué", outros: "Oseias (nome original)", significado: "o SENHOR salva",
    grupo: "Êxodo e conquista", epoca: "c. 1490–1380 a.C.",
    resumo: "Auxiliar de Moisés e um dos dois espias que confiaram na promessa de Deus. Sucedeu Moisés, atravessou o Jordão com o povo, conquistou Jericó e liderou a tomada e a divisão de Canaã. Ao fim da vida, renovou a aliança em Siquém: \"eu e a minha casa serviremos ao Senhor\".",
    familia: { pai: "Num", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["EXO 17:9", "NUM 14:6", "NUM 27:18", "DEU 34:9", "JOS 1:1", "JOS 24:15"]
  },
  {
    id: "calebe", nome: "Calebe", outros: "", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1485 a.C. –",
    resumo: "Espia da tribo de Judá que, com Josué, exortou o povo a tomar posse de Canaã. Por ter seguido o Senhor de todo o coração, foi poupado da morte no deserto. Aos oitenta e cinco anos pediu e conquistou Hebrom como herança.",
    familia: { pai: "Jefoné", mae: "", conjuge: "", filhos: "Acsa e outros" },
    ids: {},
    refs: ["NUM 13:30", "NUM 14:24", "JOS 14:14", "JDG 1:20"]
  },
  {
    id: "raabe", nome: "Raabe", outros: "", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1406 a.C.",
    resumo: "Prostituta de Jericó que escondeu os espias israelitas e confessou a fé no Deus de Israel. Foi poupada com sua família na queda da cidade e passou a viver entre os israelitas. Aparece na genealogia de Jesus e é citada como exemplo de fé e de obras.",
    familia: { pai: "", mae: "", conjuge: "Salmom (Mt 1:5)", filhos: "Boaz" },
    ids: { filhos: ["boaz"] },
    refs: ["JOS 2:1", "JOS 6:25", "MAT 1:5", "HEB 11:31", "JAM 2:25"]
  },
  {
    id: "balaao", nome: "Balaão", outros: "", significado: "",
    grupo: "Êxodo e conquista", epoca: "c. 1407 a.C.",
    resumo: "Adivinho da Mesopotâmia contratado por Balaque, rei de Moabe, para amaldiçoar Israel. Repreendido por sua jumenta e pelo anjo do Senhor, só pôde abençoar o povo e anunciou a \"estrela de Jacó\". Depois aconselhou a sedução de Israel em Peor; o Novo Testamento o toma como exemplo de quem ama o prêmio da injustiça.",
    familia: { pai: "Beor", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["NUM 22:5", "NUM 22:28", "NUM 24:17", "NUM 31:16", "2PE 2:15", "REV 2:14"]
  },

  // ───────────── Juízes ─────────────
  {
    id: "otniel", nome: "Otniel", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1370 a.C.",
    resumo: "Sobrinho (ou irmão mais novo) de Calebe, conquistou Quiriate-Sefer e recebeu Acsa por esposa. Foi o primeiro juiz de Israel: o Espírito do Senhor veio sobre ele, e ele livrou o povo do rei da Mesopotâmia. A terra teve paz por quarenta anos.",
    familia: { pai: "Quenaz", mae: "", conjuge: "Acsa, filha de Calebe", filhos: "" },
    ids: {},
    refs: ["JOS 15:17", "JDG 1:13", "JDG 3:9", "JDG 3:11"]
  },
  {
    id: "eude", nome: "Eúde", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1300 a.C.",
    resumo: "Juiz da tribo de Benjamim, canhoto. Matou Eglom, rei de Moabe, com um punhal escondido e convocou Israel à batalha. A vitória trouxe oitenta anos de descanso à terra.",
    familia: { pai: "Gera", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JDG 3:15", "JDG 3:21", "JDG 3:26"]
  },
  {
    id: "debora", nome: "Débora", outros: "", significado: "abelha",
    grupo: "Juízes", epoca: "c. 1200 a.C.",
    resumo: "Profetisa e juíza de Israel, que julgava debaixo de uma palmeira na região montanhosa de Efraim. Convocou Baraque e o acompanhou à batalha contra Sísera, comandante do exército cananeu de Jabim. O cântico de Débora (Juízes 5) celebra a vitória.",
    familia: { pai: "", mae: "", conjuge: "Lapidote", filhos: "" },
    ids: {},
    refs: ["JDG 4:4", "JDG 4:9", "JDG 4:14", "JDG 5:1", "JDG 5:7"]
  },
  {
    id: "baraque", nome: "Baraque", outros: "", significado: "relâmpago",
    grupo: "Juízes", epoca: "c. 1200 a.C.",
    resumo: "Comandante de Naftali chamado por Débora para enfrentar o exército de Sísera. Só aceitou ir com a presença da profetisa, e por isso a honra da morte de Sísera coube a uma mulher, Jael. É lembrado em Hebreus entre os heróis da fé.",
    familia: { pai: "Abinoão", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JDG 4:6", "JDG 4:8", "JDG 5:1", "HEB 11:32"]
  },
  {
    id: "gideao", nome: "Gideão", outros: "Jerubaal", significado: "o que corta, derruba",
    grupo: "Juízes", epoca: "c. 1170 a.C.",
    resumo: "Chamado por Deus quando malhava trigo às escondidas dos midianitas. Derrubou o altar de Baal, pediu o sinal da lã e venceu Midiã com apenas trezentos homens. Recusou ser rei, mas fez um éfode que se tornou tropeço para Israel.",
    familia: { pai: "Joás", mae: "", conjuge: "muitas mulheres", filhos: "setenta filhos, entre eles Jotão; e Abimeleque, de uma concubina" },
    ids: {},
    refs: ["JDG 6:11", "JDG 6:12", "JDG 6:36", "JDG 7:7", "JDG 8:23", "HEB 11:32"]
  },
  {
    id: "jefte", nome: "Jefté", outros: "", significado: "ele abre",
    grupo: "Juízes", epoca: "c. 1100 a.C.",
    resumo: "Gileadita expulso de casa por ser filho de uma prostituta, chamado de volta para liderar Israel contra os amonitas. Venceu a guerra, mas fez um voto precipitado que atingiu sua única filha. Os intérpretes divergem se ela foi sacrificada ou consagrada à virgindade perpétua.",
    familia: { pai: "Gileade", mae: "(uma prostituta, não nomeada)", conjuge: "", filhos: "uma filha" },
    ids: {},
    refs: ["JDG 11:1", "JDG 11:30", "JDG 11:35", "JDG 12:7", "HEB 11:32"]
  },
  {
    id: "sansao", nome: "Sansão", outros: "", significado: "ligado a \"sol\"",
    grupo: "Juízes", epoca: "c. 1090–1050 a.C.",
    resumo: "Nazireu desde o ventre, da tribo de Dã, dotado pelo Espírito de força extraordinária para começar a livrar Israel dos filisteus. Julgou Israel por vinte anos, mas foi dominado por suas paixões e traído por Dalila. Cego e preso, clamou a Deus e derrubou o templo de Dagom, morrendo com seus inimigos.",
    familia: { pai: "Manoá", mae: "(não nomeada)", conjuge: "uma filisteia de Timna", filhos: "" },
    ids: {},
    refs: ["JDG 13:24", "JDG 14:6", "JDG 16:28", "JDG 16:30", "HEB 11:32"]
  },
  {
    id: "dalila", nome: "Dalila", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1060 a.C.",
    resumo: "Mulher do vale de Soreque por quem Sansão se apaixonou. Subornada pelos príncipes dos filisteus, insistiu até descobrir o segredo da força dele e o entregou aos inimigos.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JDG 16:4", "JDG 16:6", "JDG 16:18"]
  },
  {
    id: "noemi", nome: "Noemi", outros: "Mara (como ela pediu para ser chamada)", significado: "agradável; Mara = amarga",
    grupo: "Juízes", epoca: "c. 1130 a.C.",
    resumo: "Mulher de Belém que emigrou para Moabe por causa da fome e ali perdeu o marido e os dois filhos. Voltou a Belém com a nora Rute e a orientou a buscar em Boaz o resgatador da família. Terminou seus dias com o neto Obede nos braços.",
    familia: { pai: "", mae: "", conjuge: "Elimeleque", filhos: "Malom e Quiliom" },
    ids: {},
    refs: ["RUT 1:2", "RUT 1:8", "RUT 1:20", "RUT 4:17"]
  },
  {
    id: "rute", nome: "Rute", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1130 a.C.",
    resumo: "Moabita, viúva de um filho de Noemi, que escolheu ficar com a sogra: \"o teu povo é o meu povo, o teu Deus é o meu Deus\". Em Belém, respigou nos campos de Boaz, que a resgatou e a tomou por esposa. Foi bisavó de Davi e está na genealogia de Jesus.",
    familia: { pai: "", mae: "", conjuge: "Malom; depois Boaz", filhos: "Obede" },
    ids: { conjuge: "boaz" },
    refs: ["RUT 1:16", "RUT 2:2", "RUT 3:9", "RUT 4:13", "MAT 1:5"]
  },
  {
    id: "boaz", nome: "Boaz", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1130 a.C.",
    resumo: "Homem rico e íntegro de Belém, parente de Elimeleque. Protegeu Rute em seus campos e assumiu o papel de resgatador, casando-se com ela para preservar o nome da família. Pai de Obede e bisavô de Davi; figura do parente-redentor.",
    familia: { pai: "Salmom", mae: "Raabe (Mt 1:5)", conjuge: "Rute", filhos: "Obede" },
    ids: { mae: "raabe", conjuge: "rute" },
    refs: ["RUT 2:1", "RUT 4:9", "RUT 4:13", "RUT 4:21", "MAT 1:5"]
  },
  {
    id: "ana", nome: "Ana", outros: "", significado: "graça",
    grupo: "Juízes", epoca: "c. 1105 a.C.",
    resumo: "Esposa estéril de Elcana, que derramou a alma diante do Senhor em Siló e fez voto de lhe consagrar o filho que pedia. Deus lhe deu Samuel, e ela o entregou ao serviço do tabernáculo. Seu cântico de louvor (1 Samuel 2) ecoa no cântico de Maria.",
    familia: { pai: "", mae: "", conjuge: "Elcana", filhos: "Samuel e mais três filhos e duas filhas" },
    ids: { filhos: ["samuel"] },
    refs: ["1SA 1:2", "1SA 1:11", "1SA 1:20", "1SA 2:1", "1SA 2:21"]
  },
  {
    id: "eli", nome: "Eli", outros: "", significado: "",
    grupo: "Juízes", epoca: "c. 1170–1072 a.C.",
    resumo: "Sumo sacerdote em Siló e juiz de Israel por quarenta anos. Criou o menino Samuel, mas não refreou a impiedade de seus próprios filhos, Hofni e Fineias. Morreu ao ouvir que a arca de Deus fora tomada pelos filisteus.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "Hofni e Fineias" },
    ids: {},
    refs: ["1SA 1:9", "1SA 2:12", "1SA 3:8", "1SA 4:18"]
  },
  {
    id: "samuel", nome: "Samuel", outros: "", significado: "nome de Deus; associado a \"pedido a Deus\" (1Sm 1:20)",
    grupo: "Juízes", epoca: "c. 1105–1015 a.C.",
    resumo: "Filho de Ana, consagrado ao Senhor desde a infância e chamado por Deus ainda menino. Foi o último dos juízes e profeta respeitado em todo o Israel. Ungiu os dois primeiros reis, Saul e Davi, marcando a passagem do tempo dos juízes para a monarquia.",
    familia: { pai: "Elcana", mae: "Ana", conjuge: "", filhos: "Joel e Abias" },
    ids: { mae: "ana" },
    refs: ["1SA 1:20", "1SA 3:10", "1SA 7:15", "1SA 15:22", "1SA 16:13"]
  },

  // ───────────── Reis ─────────────
  {
    id: "jesse", nome: "Jessé", outros: "", significado: "",
    grupo: "Reis", epoca: "c. 1080 a.C.",
    resumo: "Belemita da tribo de Judá, neto de Boaz e Rute e pai de Davi. Samuel foi à sua casa para ungir como rei um de seus oito filhos, e o escolhido foi o mais novo. Isaías chama o Messias de rebento do \"tronco de Jessé\".",
    familia: { pai: "Obede", mae: "", conjuge: "", filhos: "Eliabe, Abinadabe, Samá, Davi e outros; Zeruia e Abigail (filhas)" },
    ids: { filhos: ["davi"] },
    refs: ["RUT 4:22", "1SA 16:1", "1SA 16:11", "ISA 11:1", "MAT 1:6"]
  },
  {
    id: "saul", nome: "Saul", outros: "", significado: "pedido",
    grupo: "Reis", epoca: "c. 1050–1010 a.C. (reinado)",
    resumo: "Benjamita ungido por Samuel como primeiro rei de Israel, a pedido do povo. Começou com vitórias, mas desobedeceu a Deus em Gilgal e na guerra contra Amaleque, e foi rejeitado como rei. Tomado de ciúmes, perseguiu Davi por anos; morreu com seus filhos na batalha do monte Gilboa.",
    familia: { pai: "Quis", mae: "", conjuge: "Ainoã", filhos: "Jônatas, Isvi, Malquisua, Is-Bosete; Merabe e Mical" },
    ids: { filhos: ["jonatas"] },
    refs: ["1SA 9:2", "1SA 10:1", "1SA 13:13", "1SA 15:23", "1SA 31:4", "ACT 13:21"]
  },
  {
    id: "jonatas", nome: "Jônatas", outros: "", significado: "o SENHOR deu",
    grupo: "Reis", epoca: "c. 1010 a.C. (morte)",
    resumo: "Filho mais velho de Saul, guerreiro valente que confiava no Senhor. Fez aliança de amizade com Davi e o protegeu do pai, mesmo sabendo que Davi, e não ele, seria rei. Morreu em Gilboa; Davi o chorou e depois amparou seu filho Mefibosete.",
    familia: { pai: "Saul", mae: "Ainoã", conjuge: "", filhos: "Mefibosete (Meribe-Baal)" },
    ids: { pai: "saul" },
    refs: ["1SA 14:6", "1SA 18:1", "1SA 20:17", "1SA 23:16", "2SA 1:26"]
  },
  {
    id: "davi", nome: "Davi", outros: "", significado: "amado",
    grupo: "Reis", epoca: "c. 1040–970 a.C.",
    resumo: "Pastor de Belém ungido por Samuel, venceu Golias e tornou-se o segundo rei de Israel. Conquistou Jerusalém, levou para lá a arca e recebeu de Deus a promessa de um trono eterno para sua descendência. Pecou gravemente com Bate-Seba e arrependeu-se; compôs muitos salmos. O Messias é chamado \"Filho de Davi\".",
    familia: { pai: "Jessé", mae: "", conjuge: "Mical, Ainoã, Abigail, Maaca, Hagite, Bate-Seba e outras", filhos: "Amnom, Absalão, Adonias, Salomão, Natã, Tamar e outros" },
    ids: { pai: "jesse", conjuge: "bate-seba", filhos: ["absalao", "salomao"] },
    refs: ["1SA 16:13", "1SA 17:45", "2SA 5:3", "2SA 7:16", "2SA 12:13", "ACT 13:22"]
  },
  {
    id: "abigail", nome: "Abigail", outros: "", significado: "meu pai se alegra",
    grupo: "Reis", epoca: "c. 1015 a.C.",
    resumo: "Mulher sensata e formosa, casada com o rude Nabal, de Carmelo. Com presentes e palavras prudentes, impediu que Davi derramasse sangue para se vingar de seu marido. Depois da morte de Nabal, tornou-se esposa de Davi.",
    familia: { pai: "", mae: "", conjuge: "Nabal; depois Davi", filhos: "Quileabe (Daniel)" },
    ids: { conjuge: "davi" },
    refs: ["1SA 25:3", "1SA 25:32", "1SA 25:42"]
  },
  {
    id: "bate-seba", nome: "Bate-Seba", outros: "Bate-Sua", significado: "filha do juramento",
    grupo: "Reis", epoca: "c. 990 a.C.",
    resumo: "Esposa de Urias, o heteu, com quem Davi adulterou; depois da morte de Urias, tramada pelo rei, tornou-se esposa de Davi. O primeiro filho morreu; o segundo foi Salomão. Com o profeta Natã, garantiu a sucessão de Salomão ao trono; Mateus a cita como \"a que fora mulher de Urias\".",
    familia: { pai: "Eliã", mae: "", conjuge: "Urias; depois Davi", filhos: "Salomão, Natã, Simeia e Sobabe" },
    ids: { conjuge: "davi", filhos: ["salomao"] },
    refs: ["2SA 11:3", "2SA 12:24", "1KI 1:11", "1KI 2:19", "MAT 1:6"]
  },
  {
    id: "joabe", nome: "Joabe", outros: "", significado: "o SENHOR é pai",
    grupo: "Reis", epoca: "c. 1040–970 a.C.",
    resumo: "Sobrinho de Davi e comandante de seu exército, hábil e implacável. Tomou Jerusalém, mas matou Abner, Absalão e Amasa contra a vontade do rei, e cumpriu a ordem de expor Urias à morte. Apoiou Adonias na sucessão e foi executado por ordem de Salomão.",
    familia: { pai: "", mae: "Zeruia (irmã de Davi)", conjuge: "", filhos: "" },
    ids: {},
    refs: ["2SA 3:27", "2SA 11:14", "2SA 18:14", "1KI 2:34", "1CH 11:6"]
  },
  {
    id: "absalao", nome: "Absalão", outros: "", significado: "pai da paz",
    grupo: "Reis", epoca: "c. 1000–975 a.C.",
    resumo: "Terceiro filho de Davi, admirado por sua beleza. Matou o meio-irmão Amnom para vingar a irmã Tamar e, mais tarde, conquistou o coração do povo e se rebelou contra o pai. Foi morto por Joabe, preso pelos cabelos a um carvalho, e Davi o pranteou amargamente.",
    familia: { pai: "Davi", mae: "Maaca", conjuge: "", filhos: "três filhos e uma filha, Tamar" },
    ids: { pai: "davi" },
    refs: ["2SA 14:25", "2SA 15:6", "2SA 18:9", "2SA 18:33"]
  },
  {
    id: "salomao", nome: "Salomão", outros: "Jedidias", significado: "pacífico; Jedidias = amado do SENHOR",
    grupo: "Reis", epoca: "c. 970–931 a.C. (reinado)",
    resumo: "Filho de Davi e Bate-Seba, terceiro rei de Israel. Pediu a Deus sabedoria, construiu o templo de Jerusalém e levou o reino ao auge de riqueza e paz; a ele se atribuem Provérbios, Eclesiastes e Cantares. Na velhice, suas muitas mulheres estrangeiras desviaram seu coração para outros deuses, e o reino foi dividido após sua morte.",
    familia: { pai: "Davi", mae: "Bate-Seba", conjuge: "a filha de Faraó, Naamá (amonita) e muitas outras", filhos: "Roboão e outros" },
    ids: { pai: "davi", mae: "bate-seba", filhos: ["roboao"] },
    refs: ["2SA 12:24", "1KI 3:9", "1KI 4:29", "1KI 6:1", "1KI 11:4", "MAT 6:29"]
  },
  {
    id: "roboao", nome: "Roboão", outros: "", significado: "o povo se alarga",
    grupo: "Reis", epoca: "c. 931–913 a.C. (reinado)",
    resumo: "Filho e sucessor de Salomão. Ao rejeitar o conselho dos anciãos e responder ao povo com dureza, provocou a separação das dez tribos do norte. Reinou apenas sobre Judá e Benjamim; em seus dias Sisaque, rei do Egito, saqueou Jerusalém.",
    familia: { pai: "Salomão", mae: "Naamá (amonita)", conjuge: "Maalate, Maaca e outras", filhos: "Abias e outros" },
    ids: { pai: "salomao" },
    refs: ["1KI 11:43", "1KI 12:8", "1KI 14:21", "2CH 12:1"]
  },
  {
    id: "jeroboao", nome: "Jeroboão", outros: "Jeroboão I", significado: "",
    grupo: "Reis", epoca: "c. 931–910 a.C. (reinado)",
    resumo: "Oficial de Salomão a quem o profeta Aías anunciou o governo de dez tribos. Tornou-se o primeiro rei do reino do norte e, para afastar o povo de Jerusalém, pôs bezerros de ouro em Betel e em Dã. O \"pecado de Jeroboão\" virou a medida pela qual os reis de Israel são reprovados.",
    familia: { pai: "Nebate", mae: "Zerua", conjuge: "", filhos: "Abias (morreu menino) e Nadabe" },
    ids: {},
    refs: ["1KI 11:28", "1KI 11:31", "1KI 12:20", "1KI 12:28", "1KI 14:16"]
  },
  {
    id: "asa", nome: "Asa", outros: "", significado: "",
    grupo: "Reis", epoca: "c. 911–870 a.C. (reinado)",
    resumo: "Terceiro rei de Judá, fez o que era reto: removeu ídolos e destituiu a própria avó por causa de um poste-ídolo. Clamou a Deus e venceu o grande exército de Zerá, o etíope. No fim da vida, confiou na aliança com a Síria e nos médicos, em vez de buscar o Senhor.",
    familia: { pai: "Abias", mae: "", conjuge: "Azuba", filhos: "Josafá" },
    ids: { filhos: ["josafa"] },
    refs: ["1KI 15:11", "2CH 14:11", "2CH 16:9", "2CH 16:12"]
  },
  {
    id: "josafa", nome: "Josafá", outros: "Jeosafá", significado: "o SENHOR julgou",
    grupo: "Reis", epoca: "c. 872–848 a.C. (reinado)",
    resumo: "Rei piedoso de Judá, que enviou levitas para ensinar a Lei pelas cidades e organizou juízes. Diante da invasão de moabitas e amonitas, proclamou jejum e viu Deus dar a vitória enquanto o povo louvava. Foi repreendido por aliar-se a Acabe e à casa dele.",
    familia: { pai: "Asa", mae: "Azuba", conjuge: "", filhos: "Jeorão e outros" },
    ids: { pai: "asa" },
    refs: ["1KI 22:43", "2CH 17:3", "2CH 20:3", "2CH 20:20"]
  },
  {
    id: "acabe", nome: "Acabe", outros: "", significado: "irmão do pai",
    grupo: "Reis", epoca: "c. 874–853 a.C. (reinado)",
    resumo: "Rei de Israel, filho de Onri, que fez o que era mau mais do que todos os anteriores. Casado com Jezabel, promoveu o culto a Baal e foi confrontado por Elias no monte Carmelo. Tomou a vinha de Nabote por meio de um assassinato e morreu em batalha, como o profeta Micaías anunciara.",
    familia: { pai: "Onri", mae: "", conjuge: "Jezabel", filhos: "Acazias, Jorão e Atalia" },
    ids: { conjuge: "jezabel", filhos: ["atalia"] },
    refs: ["1KI 16:30", "1KI 16:33", "1KI 18:17", "1KI 21:25", "1KI 22:37"]
  },
  {
    id: "jezabel", nome: "Jezabel", outros: "", significado: "",
    grupo: "Reis", epoca: "c. 841 a.C. (morte)",
    resumo: "Princesa sidônia, esposa de Acabe, que sustentou os profetas de Baal e mandou matar os profetas do Senhor. Ameaçou Elias de morte e tramou o assassinato de Nabote. Morreu lançada de uma janela por ordem de Jeú; seu nome virou símbolo de idolatria e sedução em Apocalipse.",
    familia: { pai: "Etbaal, rei dos sidônios", mae: "", conjuge: "Acabe", filhos: "Acazias, Jorão e (provavelmente) Atalia" },
    ids: { conjuge: "acabe", filhos: ["atalia"] },
    refs: ["1KI 16:31", "1KI 19:2", "1KI 21:7", "2KI 9:30", "2KI 9:36", "REV 2:20"]
  },
  {
    id: "jeu", nome: "Jeú", outros: "", significado: "o SENHOR é Ele",
    grupo: "Reis", epoca: "c. 841–814 a.C. (reinado)",
    resumo: "Comandante ungido rei de Israel por um enviado de Eliseu, para executar o juízo sobre a casa de Acabe. Matou Jorão, Jezabel e os adoradores de Baal. Não se afastou, porém, dos bezerros de ouro de Jeroboão; sua dinastia durou quatro gerações.",
    familia: { pai: "Josafá, filho de Ninsi", mae: "", conjuge: "", filhos: "Jeoacaz" },
    ids: {},
    refs: ["1KI 19:16", "2KI 9:6", "2KI 9:20", "2KI 10:28", "2KI 10:31"]
  },
  {
    id: "atalia", nome: "Atalia", outros: "", significado: "",
    grupo: "Reis", epoca: "c. 841–835 a.C. (governo)",
    resumo: "Filha de Acabe, casada com Jeorão, rei de Judá. Quando seu filho Acazias morreu, exterminou a descendência real e usurpou o trono por seis anos — a única mulher a governar Judá. O menino Joás, escondido no templo, foi coroado pelo sacerdote Joiada, e ela foi morta.",
    familia: { pai: "Acabe", mae: "(provavelmente Jezabel)", conjuge: "Jeorão, rei de Judá", filhos: "Acazias" },
    ids: { pai: "acabe", mae: "jezabel" },
    refs: ["2KI 11:1", "2KI 11:3", "2KI 11:16", "2KI 11:20", "2CH 22:10"]
  },
  {
    id: "uzias", nome: "Uzias", outros: "Azarias", significado: "o SENHOR é a minha força",
    grupo: "Reis", epoca: "c. 792–740 a.C. (reinado, com corregências)",
    resumo: "Rei de Judá por cinquenta e dois anos, próspero e vitorioso enquanto buscou o Senhor. Ao se fortalecer, encheu-se de orgulho e entrou no templo para queimar incenso, função dos sacerdotes. Ficou leproso até a morte; Isaías teve sua visão do Senhor no ano em que ele morreu.",
    familia: { pai: "Amazias", mae: "Jecolias", conjuge: "Jerusa", filhos: "Jotão" },
    ids: {},
    refs: ["2KI 15:1", "2CH 26:1", "2CH 26:16", "2CH 26:21", "ISA 6:1"]
  },
  {
    id: "acaz", nome: "Acaz", outros: "", significado: "ele segurou",
    grupo: "Reis", epoca: "c. 735–716 a.C. (reinado)",
    resumo: "Rei idólatra de Judá, que chegou a queimar o próprio filho em sacrifício. Ameaçado pela Síria e por Israel, recusou o sinal oferecido por Isaías — ocasião da profecia do Emanuel — e preferiu pedir socorro à Assíria. Fechou as portas do templo e encheu Jerusalém de altares.",
    familia: { pai: "Jotão", mae: "", conjuge: "Abi (Abia)", filhos: "Ezequias" },
    ids: { filhos: ["ezequias"] },
    refs: ["2KI 16:2", "2KI 16:7", "2CH 28:22", "ISA 7:12"]
  },
  {
    id: "ezequias", nome: "Ezequias", outros: "", significado: "o SENHOR fortalece",
    grupo: "Reis", epoca: "c. 716–687 a.C. (reinado)",
    resumo: "Um dos melhores reis de Judá: reabriu e purificou o templo, celebrou a Páscoa e destruiu os lugares altos. Quando Senaqueribe, rei da Assíria, cercou Jerusalém, orou, e o anjo do Senhor feriu o exército inimigo. Doente de morte, recebeu mais quinze anos de vida; errou ao exibir seus tesouros aos enviados da Babilônia.",
    familia: { pai: "Acaz", mae: "Abi (Abia)", conjuge: "Hefzibá", filhos: "Manassés" },
    ids: { pai: "acaz", filhos: ["manasses"] },
    refs: ["2KI 18:5", "2KI 19:15", "2KI 20:5", "2CH 30:1", "ISA 38:5"]
  },
  {
    id: "manasses", nome: "Manassés", outros: "", significado: "o que faz esquecer",
    grupo: "Reis", epoca: "c. 697–643 a.C. (reinado)",
    resumo: "Filho de Ezequias, teve o reinado mais longo de Judá (cinquenta e cinco anos) e o mais idólatra: reergueu altares a Baal, praticou feitiçaria e derramou muito sangue inocente. Segundo Crônicas, levado preso pelos assírios, humilhou-se, orou e foi restaurado, removendo então os ídolos. Os livros dos Reis atribuem a seus pecados o juízo que caiu sobre Judá.",
    familia: { pai: "Ezequias", mae: "Hefzibá", conjuge: "Mesulemete", filhos: "Amom" },
    ids: { pai: "ezequias" },
    refs: ["2KI 21:1", "2KI 21:9", "2CH 33:12", "2CH 33:13"]
  },
  {
    id: "josias", nome: "Josias", outros: "", significado: "o SENHOR sustenta",
    grupo: "Reis", epoca: "c. 641–609 a.C. (reinado)",
    resumo: "Começou a reinar aos oito anos e, ainda jovem, pôs-se a buscar o Deus de Davi. Durante a reforma do templo foi achado o livro da Lei; o rei rasgou as vestes, renovou a aliança, destruiu a idolatria e celebrou uma Páscoa memorável. Morreu em Megido, ao enfrentar o faraó Neco.",
    familia: { pai: "Amom", mae: "Jedida", conjuge: "Hamutal; Zebida", filhos: "Joanã, Jeoaquim, Jeoacaz (Salum) e Zedequias" },
    ids: { filhos: ["zedequias"] },
    refs: ["2KI 22:1", "2KI 22:11", "2KI 23:25", "2CH 34:3", "2CH 35:24"]
  },
  {
    id: "zedequias", nome: "Zedequias", outros: "Matanias", significado: "o SENHOR é a minha justiça",
    grupo: "Reis", epoca: "c. 597–586 a.C. (reinado)",
    resumo: "Último rei de Judá, posto no trono por Nabucodonosor. Fraco e indeciso, consultava Jeremias em segredo, mas não lhe obedeceu e rebelou-se contra a Babilônia. Jerusalém foi tomada e o templo queimado; ele viu os filhos serem mortos, teve os olhos vazados e foi levado em cadeias.",
    familia: { pai: "Josias", mae: "Hamutal", conjuge: "", filhos: "filhos mortos em Ribla" },
    ids: { pai: "josias" },
    refs: ["2KI 24:17", "2KI 25:7", "2CH 36:12", "JER 37:17"]
  },

  // ───────────── Profetas ─────────────
  {
    id: "nata", nome: "Natã", outros: "", significado: "ele deu",
    grupo: "Profetas", epoca: "c. 1000–970 a.C.",
    resumo: "Profeta na corte de Davi. Transmitiu ao rei a promessa de uma casa e de um trono eternos e, mais tarde, o confrontou pelo pecado com Bate-Seba com a parábola da cordeirinha: \"Tu és esse homem\". Atuou também para garantir a coroação de Salomão.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["2SA 7:2", "2SA 7:17", "2SA 12:1", "2SA 12:7", "1KI 1:11"]
  },
  {
    id: "elias", nome: "Elias", outros: "", significado: "o SENHOR é o meu Deus",
    grupo: "Profetas", epoca: "c. 870–850 a.C.",
    resumo: "Profeta tisbita enviado ao reino do norte nos dias de Acabe e Jezabel. Anunciou a seca, foi sustentado pelos corvos e pela viúva de Sarepta, e desafiou os profetas de Baal no monte Carmelo. Foi levado ao céu num redemoinho; Malaquias anunciou seu retorno, e ele apareceu com Moisés na transfiguração de Jesus.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["1KI 17:1", "1KI 18:21", "1KI 19:12", "2KI 2:11", "MAL 4:5", "JAM 5:17"]
  },
  {
    id: "eliseu", nome: "Eliseu", outros: "", significado: "Deus é salvação",
    grupo: "Profetas", epoca: "c. 850–798 a.C.",
    resumo: "Lavrador chamado por Elias, de quem recebeu o manto e porção dobrada do espírito. Seu ministério em Israel foi marcado por muitos milagres: o azeite da viúva, o filho da sunamita, a cura de Naamã, o machado que flutuou. Aconselhou reis e atuou por cerca de meio século.",
    familia: { pai: "Safate", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["1KI 19:19", "2KI 2:9", "2KI 5:10", "2KI 6:17", "2KI 13:21"]
  },
  {
    id: "isaias", nome: "Isaías", outros: "", significado: "o SENHOR é salvação",
    grupo: "Profetas", epoca: "c. 740–681 a.C.",
    resumo: "Profeta em Jerusalém nos reinados de Uzias, Jotão, Acaz e Ezequias. Chamado numa visão da santidade de Deus, anunciou juízo e consolo, o Emanuel e o Servo sofredor. É o profeta mais citado no Novo Testamento. A tradição evangélica atribui a ele todo o livro; parte da crítica vê mais de um autor nos capítulos 40–66.",
    familia: { pai: "Amoz", mae: "", conjuge: "\"a profetisa\" (não nomeada)", filhos: "Sear-Jasube e Maer-Salal-Hás-Baz" },
    ids: {},
    refs: ["ISA 1:1", "ISA 6:8", "ISA 53:5", "2KI 19:20", "MAT 3:3", "JOH 12:41"]
  },
  {
    id: "jeremias", nome: "Jeremias", outros: "", significado: "",
    grupo: "Profetas", epoca: "c. 627–580 a.C.",
    resumo: "Sacerdote de Anatote chamado ainda jovem para profetizar nos últimos quarenta anos de Judá. Anunciou a queda de Jerusalém e o exílio de setenta anos, sofrendo prisão, açoites e rejeição — é o \"profeta chorão\". Anunciou também a nova aliança escrita no coração; a tradição lhe atribui Lamentações.",
    familia: { pai: "Hilquias", mae: "", conjuge: "(não se casou, Jr 16:2)", filhos: "" },
    ids: {},
    refs: ["JER 1:5", "JER 20:9", "JER 31:31", "JER 38:6", "MAT 2:17"]
  },
  {
    id: "ezequiel", nome: "Ezequiel", outros: "", significado: "Deus fortalece",
    grupo: "Profetas", epoca: "c. 593–571 a.C.",
    resumo: "Sacerdote levado à Babilônia na deportação de 597 a.C., chamado a ser profeta junto ao rio Quebar. Com visões e gestos simbólicos, anunciou a queda de Jerusalém e, depois, a restauração: um coração novo, o vale de ossos secos e um novo templo. Foi posto como atalaia sobre a casa de Israel.",
    familia: { pai: "Buzi", mae: "", conjuge: "(não nomeada; morreu durante o cerco)", filhos: "" },
    ids: {},
    refs: ["EZE 1:3", "EZE 3:17", "EZE 24:24", "EZE 36:26", "EZE 37:3"]
  },
  {
    id: "oseias", nome: "Oseias", outros: "", significado: "salvação",
    grupo: "Profetas", epoca: "c. 755–715 a.C.",
    resumo: "Profeta do reino do norte nas últimas décadas antes da queda de Samaria. Seu casamento com Gômer, mulher infiel, tornou-se retrato do amor persistente de Deus por um povo adúltero. Chamou Israel ao arrependimento: \"misericórdia quero, e não sacrifício\".",
    familia: { pai: "Beeri", mae: "", conjuge: "Gômer", filhos: "Jezreel, Lo-Ruama e Lo-Ami" },
    ids: {},
    refs: ["HOS 1:1", "HOS 1:2", "HOS 3:1", "HOS 6:6", "HOS 11:1"]
  },
  {
    id: "joel", nome: "Joel", outros: "", significado: "o SENHOR é Deus",
    grupo: "Profetas", epoca: "",
    resumo: "Profeta de Judá que viu numa praga de gafanhotos o prenúncio do \"dia do Senhor\" e chamou o povo a rasgar o coração. Anunciou o derramamento do Espírito sobre toda carne, citado por Pedro no Pentecostes. A data é debatida: uns o situam no século IX a.C., outros depois do exílio.",
    familia: { pai: "Petuel", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JOE 1:1", "JOE 2:13", "JOE 2:28", "ACT 2:16"]
  },
  {
    id: "amos", nome: "Amós", outros: "", significado: "carregador de fardo",
    grupo: "Profetas", epoca: "c. 760 a.C.",
    resumo: "Criador de gado e cultivador de sicômoros de Tecoa, em Judá, enviado a profetizar no reino do norte nos dias de Jeroboão II. Denunciou a injustiça social e o culto vazio de um tempo próspero. Encerrou com a promessa de reerguer o tabernáculo caído de Davi.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["AMO 1:1", "AMO 5:24", "AMO 7:14", "AMO 9:11"]
  },
  {
    id: "obadias", nome: "Obadias", outros: "", significado: "servo do SENHOR",
    grupo: "Profetas", epoca: "",
    resumo: "Autor do menor livro do Antigo Testamento, uma profecia contra Edom por sua soberba e por ter-se alegrado na desgraça de Jerusalém. Anuncia o dia do Senhor sobre todas as nações e a restauração de Sião. Nada se sabe de sua vida; a data mais aceita é pouco depois de 586 a.C., embora alguns proponham o século IX.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["OBA 1:1", "OBA 1:4", "OBA 1:15", "OBA 1:21"]
  },
  {
    id: "jonas", nome: "Jonas", outros: "", significado: "pomba",
    grupo: "Profetas", epoca: "c. 780–760 a.C.",
    resumo: "Profeta de Gate-Hefer, nos dias de Jeroboão II, enviado a pregar em Nínive, capital da Assíria. Fugiu de navio, foi engolido por um grande peixe e, depois de três dias, obedeceu; a cidade se arrependeu, e ele se desgostou da misericórdia de Deus. Jesus citou o \"sinal de Jonas\" como figura de sua morte e ressurreição.",
    familia: { pai: "Amitai", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["2KI 14:25", "JON 1:1", "JON 1:17", "JON 2:9", "JON 4:11", "MAT 12:40"]
  },
  {
    id: "miqueias", nome: "Miqueias", outros: "", significado: "quem é como o SENHOR?",
    grupo: "Profetas", epoca: "c. 735–700 a.C.",
    resumo: "Profeta de Moresete, contemporâneo de Isaías, nos dias de Jotão, Acaz e Ezequias. Denunciou os líderes corruptos de Samaria e de Jerusalém e resumiu o que Deus pede: praticar a justiça, amar a misericórdia e andar humildemente com Deus. Anunciou que o governante de Israel sairia de Belém.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MIC 1:1", "MIC 5:2", "MIC 6:8", "MIC 7:18", "JER 26:18"]
  },
  {
    id: "naum", nome: "Naum", outros: "", significado: "consolo",
    grupo: "Profetas", epoca: "c. 663–612 a.C.",
    resumo: "Profeta elcosita que anunciou a queda de Nínive, capital do império assírio, cerca de um século depois da pregação de Jonas. Sua mensagem é de juízo para o opressor e de consolo para Judá. Nínive caiu em 612 a.C.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["NAH 1:1", "NAH 1:3", "NAH 1:7"]
  },
  {
    id: "habacuque", nome: "Habacuque", outros: "", significado: "",
    grupo: "Profetas", epoca: "c. 610–600 a.C.",
    resumo: "Profeta de Judá às vésperas da invasão babilônica. Seu livro é um diálogo com Deus: por que o mal fica impune, e por que Deus usaria um povo ainda mais ímpio como instrumento? Recebeu a resposta de que \"o justo viverá pela sua fé\" e terminou com um cântico de confiança.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["HAB 1:1", "HAB 2:4", "HAB 3:2", "HAB 3:18"]
  },
  {
    id: "sofonias", nome: "Sofonias", outros: "", significado: "o SENHOR escondeu (protegeu)",
    grupo: "Profetas", epoca: "c. 640–625 a.C.",
    resumo: "Profeta nos dias do rei Josias, descendente de um Ezequias (talvez o rei). Anunciou o grande dia do Senhor contra Judá e as nações e chamou os mansos a buscarem o Senhor. Termina com a promessa de um remanescente restaurado, sobre o qual Deus se alegra com cânticos.",
    familia: { pai: "Cusi", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ZEP 1:1", "ZEP 1:14", "ZEP 2:3", "ZEP 3:17"]
  },
  {
    id: "ageu", nome: "Ageu", outros: "", significado: "festivo",
    grupo: "Profetas", epoca: "c. 520 a.C.",
    resumo: "Profeta do pós-exílio que, no segundo ano de Dario, exortou Zorobabel, o sumo sacerdote Josué e o povo a retomarem a reconstrução do templo. Repreendeu-os por cuidarem das próprias casas enquanto a casa de Deus estava em ruínas. Prometeu que a glória da segunda casa seria maior que a da primeira.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["HAG 1:1", "HAG 1:4", "HAG 2:9", "EZR 5:1"]
  },
  {
    id: "zacarias-profeta", nome: "Zacarias (profeta)", outros: "", significado: "o SENHOR se lembra",
    grupo: "Profetas", epoca: "c. 520–480 a.C.",
    resumo: "Profeta e sacerdote do pós-exílio, contemporâneo de Ageu, que animou a reconstrução do templo. Seu livro traz oito visões noturnas e muitas profecias messiânicas: o rei que vem montado num jumento, as trinta moedas de prata, aquele a quem traspassaram. \"Não por força, nem por violência, mas pelo meu Espírito.\"",
    familia: { pai: "Baraquias, filho de Ido", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ZEC 1:1", "ZEC 4:6", "ZEC 9:9", "ZEC 12:10", "EZR 6:14"]
  },
  {
    id: "malaquias", nome: "Malaquias", outros: "", significado: "meu mensageiro",
    grupo: "Profetas", epoca: "c. 430 a.C.",
    resumo: "Último profeta do Antigo Testamento, do tempo de Neemias. Em forma de perguntas e respostas, repreendeu sacerdotes negligentes, casamentos desfeitos e a retenção dos dízimos. Anunciou o mensageiro que prepararia o caminho do Senhor e a vinda de Elias antes do grande dia.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAL 1:1", "MAL 3:1", "MAL 3:10", "MAL 4:2", "MAL 4:5"]
  },

  // ───────────── Exílio e retorno ─────────────
  {
    id: "daniel", nome: "Daniel", outros: "Beltessazar", significado: "Deus é o meu juiz",
    grupo: "Exílio e retorno", epoca: "c. 620–535 a.C.",
    resumo: "Jovem nobre de Judá levado à Babilônia em 605 a.C., que resolveu não se contaminar com as iguarias do rei. Interpretou os sonhos de Nabucodonosor e a escrita na parede, e foi livrado da cova dos leões por continuar a orar. Serviu a reis babilônios e persas e recebeu visões sobre os impérios e o reino eterno do Filho do Homem.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["DAN 1:8", "DAN 2:19", "DAN 6:10", "DAN 6:22", "DAN 7:13", "MAT 24:15"]
  },
  {
    id: "sadraque", nome: "Sadraque", outros: "Hananias", significado: "Hananias = o SENHOR é gracioso",
    grupo: "Exílio e retorno", epoca: "c. 605–580 a.C.",
    resumo: "Um dos três companheiros de Daniel levados de Judá à corte da Babilônia, onde recebeu o nome de Sadraque. Com Mesaque e Abede-Nego, recusou-se a adorar a estátua de ouro de Nabucodonosor. Lançados na fornalha, saíram ilesos, e o rei viu com eles um quarto homem.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["DAN 1:7", "DAN 3:17", "DAN 3:25", "DAN 3:28"]
  },
  {
    id: "mesaque", nome: "Mesaque", outros: "Misael", significado: "Misael = quem é o que Deus é?",
    grupo: "Exílio e retorno", epoca: "c. 605–580 a.C.",
    resumo: "Companheiro de Daniel na corte babilônica, chamado Misael em hebraico. Foi aprovado com os amigos na prova dos alimentos e nomeado para a administração da província da Babilônia. Enfrentou a fornalha ardente por não se prostrar diante da estátua do rei.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["DAN 1:7", "DAN 2:49", "DAN 3:16", "DAN 3:30"]
  },
  {
    id: "abede-nego", nome: "Abede-Nego", outros: "Azarias", significado: "Azarias = o SENHOR ajudou",
    grupo: "Exílio e retorno", epoca: "c. 605–580 a.C.",
    resumo: "Companheiro de Daniel, chamado Azarias em hebraico. Junto de Sadraque e Mesaque, declarou ao rei que Deus podia livrá-los e que, ainda que não o fizesse, não serviriam a outros deuses. Foi livrado da fornalha de fogo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["DAN 1:19", "DAN 3:12", "DAN 3:18", "DAN 3:23"]
  },
  {
    id: "nabucodonosor", nome: "Nabucodonosor", outros: "Nabucodonosor II", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 605–562 a.C. (reinado)",
    resumo: "O maior rei do império neobabilônico. Sitiou Jerusalém três vezes, levou o povo ao exílio e destruiu a cidade e o templo em 586 a.C. No livro de Daniel, teve o sonho da grande estátua, ergueu a imagem de ouro e, humilhado por um tempo de loucura, acabou por louvar o Rei do céu.",
    familia: { pai: "Nabopolassar (fontes extrabíblicas)", mae: "", conjuge: "", filhos: "Evil-Merodaque" },
    ids: {},
    refs: ["2KI 24:1", "2KI 25:1", "JER 25:9", "DAN 2:1", "DAN 3:1", "DAN 4:37"]
  },
  {
    id: "belsazar", nome: "Belsazar", outros: "", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 553–539 a.C. (corregente)",
    resumo: "Último governante da Babilônia em Daniel, que num banquete profanou os vasos do templo de Jerusalém. Uma mão escreveu na parede, e Daniel leu a sentença: pesado na balança e achado em falta. Naquela mesma noite foi morto e o reino passou aos medos e persas. Fontes babilônicas o identificam como filho e corregente de Nabonido; \"pai\", em Daniel 5, tem o sentido de antecessor.",
    familia: { pai: "Nabonido (fontes babilônicas); Nabucodonosor é chamado seu \"pai\" em Dn 5", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["DAN 5:1", "DAN 5:5", "DAN 5:22", "DAN 5:30"]
  },
  {
    id: "ciro", nome: "Ciro", outros: "Ciro II, o Grande", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 559–530 a.C. (reinado)",
    resumo: "Fundador do império persa, conquistou a Babilônia em 539 a.C. Seu decreto permitiu que os judeus voltassem a Judá e reconstruíssem o templo. Isaías o menciona pelo nome, chamando-o \"pastor\" e \"ungido\" do Senhor para esse propósito.",
    familia: { pai: "Cambises I (fontes extrabíblicas)", mae: "", conjuge: "", filhos: "Cambises II" },
    ids: {},
    refs: ["2CH 36:22", "EZR 1:1", "EZR 1:2", "ISA 44:28", "ISA 45:1"]
  },
  {
    id: "assuero", nome: "Assuero", outros: "Xerxes I", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 486–465 a.C. (reinado)",
    resumo: "Rei da Pérsia no livro de Ester, geralmente identificado com Xerxes I, que reinava da Índia à Etiópia. Depôs a rainha Vasti e escolheu Ester em seu lugar. Autorizou o decreto de Hamã contra os judeus e, depois, o decreto que lhes permitiu defender-se.",
    familia: { pai: "Dario I (fontes extrabíblicas)", mae: "", conjuge: "Vasti; Ester", filhos: "" },
    ids: { conjuge: "ester" },
    refs: ["EST 1:1", "EST 2:17", "EST 8:1", "EZR 4:6"]
  },
  {
    id: "ester", nome: "Ester", outros: "Hadassa", significado: "Hadassa = murta; Ester = talvez \"estrela\"",
    grupo: "Exílio e retorno", epoca: "c. 479–473 a.C.",
    resumo: "Órfã judia criada pelo primo Mardoqueu em Susã, escolhida rainha da Pérsia. Arriscou a vida ao apresentar-se ao rei sem ser chamada, para interceder por seu povo ameaçado de extermínio: \"se perecer, pereci\". Sua coragem trouxe o livramento celebrado na festa de Purim.",
    familia: { pai: "Abiail", mae: "", conjuge: "Assuero", filhos: "" },
    ids: { conjuge: "assuero" },
    refs: ["EST 2:7", "EST 2:17", "EST 4:14", "EST 4:16", "EST 7:3"]
  },
  {
    id: "mardoqueu", nome: "Mardoqueu", outros: "Mordecai", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 479–473 a.C.",
    resumo: "Benjamita exilado em Susã, primo e pai adotivo de Ester. Descobriu uma conspiração contra o rei e recusou-se a se curvar diante de Hamã, o que desencadeou o plano de extermínio dos judeus. Foi honrado publicamente e tornou-se o segundo no reino.",
    familia: { pai: "Jair", mae: "", conjuge: "", filhos: "Ester (prima, criada como filha)" },
    ids: {},
    refs: ["EST 2:5", "EST 3:2", "EST 6:11", "EST 10:3"]
  },
  {
    id: "hama", nome: "Hamã", outros: "", significado: "",
    grupo: "Exílio e retorno", epoca: "c. 474 a.C.",
    resumo: "Alto oficial de Assuero, chamado \"agagita\". Ofendido porque Mardoqueu não se prostrava diante dele, obteve um decreto para exterminar todos os judeus do império. Desmascarado por Ester, foi enforcado na forca que ele mesmo preparara para Mardoqueu.",
    familia: { pai: "Hamedata", mae: "", conjuge: "Zeres", filhos: "dez filhos" },
    ids: {},
    refs: ["EST 3:1", "EST 3:6", "EST 7:10"]
  },
  {
    id: "zorobabel", nome: "Zorobabel", outros: "", significado: "semente (nascido) da Babilônia",
    grupo: "Exílio e retorno", epoca: "c. 538–515 a.C.",
    resumo: "Descendente de Davi e governador de Judá, que liderou o primeiro grupo de exilados de volta a Jerusalém. Com o sumo sacerdote Josué, reergueu o altar e, animado por Ageu e Zacarias, concluiu o segundo templo em 516 a.C. Está na genealogia de Jesus.",
    familia: { pai: "Salatiel (Sealtiel); 1Cr 3:19 traz Pedaías", mae: "", conjuge: "", filhos: "Mesulão, Hananias, Selomite e outros; Abiúde (Mt 1:13)" },
    ids: {},
    refs: ["EZR 3:2", "EZR 5:2", "HAG 2:23", "ZEC 4:9", "MAT 1:12"]
  },
  {
    id: "esdras", nome: "Esdras", outros: "", significado: "ajuda",
    grupo: "Exílio e retorno", epoca: "c. 458 a.C. (chegada a Jerusalém)",
    resumo: "Sacerdote e escriba versado na Lei de Moisés, que subiu da Babilônia a Jerusalém com um segundo grupo de exilados. Dispôs o coração para estudar a Lei, praticá-la e ensiná-la. Enfrentou a questão dos casamentos mistos e leu a Lei diante de todo o povo no tempo de Neemias.",
    familia: { pai: "Seraías (descendente de Arão)", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["EZR 7:6", "EZR 7:10", "EZR 10:1", "NEH 8:5"]
  },
  {
    id: "neemias", nome: "Neemias", outros: "", significado: "o SENHOR consola",
    grupo: "Exílio e retorno", epoca: "c. 445–432 a.C.",
    resumo: "Copeiro do rei Artaxerxes que, ao saber da ruína de Jerusalém, chorou, orou e obteve licença para reconstruí-la. Como governador, reergueu os muros em cinquenta e dois dias, apesar da oposição de Sambalate e Tobias. Promoveu com Esdras a renovação da aliança e reformas na vida do povo.",
    familia: { pai: "Hacalias", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["NEH 1:1", "NEH 2:17", "NEH 6:3", "NEH 6:15", "NEH 8:10"]
  },

  // ───────────── Evangelhos ─────────────
  {
    id: "jesus", nome: "Jesus", outros: "Cristo; Messias; Emanuel; Filho de Deus; Filho do Homem", significado: "o SENHOR salva",
    grupo: "Evangelhos", epoca: "c. 5 a.C. – 30 d.C.",
    resumo: "O Filho de Deus feito homem, nascido da virgem Maria em Belém e criado em Nazaré. Anunciou o reino de Deus, ensinou, curou e chamou discípulos; foi crucificado sob Pôncio Pilatos pelos pecados do mundo, ressuscitou ao terceiro dia e subiu ao céu, de onde voltará. É o centro de toda a Escritura: o Messias prometido, descendente de Abraão e de Davi. A crucificação costuma ser datada em 30 ou 33 d.C.",
    familia: { pai: "José (pai legal); concebido pelo Espírito Santo", mae: "Maria", conjuge: "", filhos: "" },
    ids: { pai: "jose-de-nazare", mae: "maria" },
    refs: ["MAT 1:21", "JOH 1:14", "MAR 10:45", "JOH 14:6", "1CO 15:3", "ACT 1:11"]
  },
  {
    id: "maria", nome: "Maria", outros: "Maria, mãe de Jesus", significado: "forma grega de Miriã",
    grupo: "Evangelhos", epoca: "c. 20 a.C. – ?",
    resumo: "Jovem de Nazaré, desposada com José, a quem o anjo Gabriel anunciou que conceberia do Espírito Santo o Filho de Deus. Respondeu com fé — \"cumpra-se em mim segundo a tua palavra\" — e louvou a Deus no Magnificat. Acompanhou Jesus até a cruz e estava entre os discípulos em oração depois da ascensão.",
    familia: { pai: "", mae: "", conjuge: "José", filhos: "Jesus; os Evangelhos citam ainda Tiago, José, Simão, Judas e irmãs" },
    ids: { conjuge: "jose-de-nazare", filhos: ["jesus", "tiago-irmao-do-senhor", "judas-irmao-do-senhor"] },
    refs: ["LUK 1:30", "LUK 1:38", "LUK 2:19", "MAT 1:18", "JOH 19:25", "ACT 1:14"]
  },
  {
    id: "jose-de-nazare", nome: "José (marido de Maria)", outros: "José de Nazaré; o carpinteiro", significado: "que Ele (Deus) acrescente",
    grupo: "Evangelhos", epoca: "c. 5 a.C.",
    resumo: "Carpinteiro de Nazaré, descendente de Davi, desposado com Maria. Homem justo, obedeceu ao anjo que lhe falou em sonhos: recebeu Maria, deu ao menino o nome de Jesus e o protegeu na fuga para o Egito. Não é mais mencionado depois da infância de Jesus, o que leva a crer que morreu antes do ministério público.",
    familia: { pai: "Jacó (Mt 1:16); Eli (Lc 3:23)", mae: "", conjuge: "Maria", filhos: "Jesus (pai legal); Tiago, José, Simão, Judas e filhas" },
    ids: { conjuge: "maria", filhos: ["jesus", "tiago-irmao-do-senhor", "judas-irmao-do-senhor"] },
    refs: ["MAT 1:19", "MAT 1:20", "MAT 1:24", "MAT 2:13", "LUK 2:4"]
  },
  {
    id: "zacarias", nome: "Zacarias (pai de João Batista)", outros: "", significado: "o SENHOR se lembra",
    grupo: "Evangelhos", epoca: "c. 6 a.C.",
    resumo: "Sacerdote do turno de Abias, justo diante de Deus e já idoso. O anjo Gabriel lhe anunciou no templo o nascimento de um filho; por duvidar, ficou mudo até o menino nascer. Ao recuperar a fala, profetizou no cântico conhecido como Benedictus.",
    familia: { pai: "", mae: "", conjuge: "Isabel", filhos: "João Batista" },
    ids: { conjuge: "isabel", filhos: ["joao-batista"] },
    refs: ["LUK 1:5", "LUK 1:13", "LUK 1:67"]
  },
  {
    id: "isabel", nome: "Isabel", outros: "", significado: "Deus é juramento",
    grupo: "Evangelhos", epoca: "c. 6 a.C.",
    resumo: "Descendente de Arão, esposa do sacerdote Zacarias e parenta de Maria. Estéril e avançada em idade, concebeu João Batista. Cheia do Espírito Santo, saudou Maria como \"a mãe do meu Senhor\".",
    familia: { pai: "", mae: "", conjuge: "Zacarias", filhos: "João Batista" },
    ids: { conjuge: "zacarias", filhos: ["joao-batista"] },
    refs: ["LUK 1:7", "LUK 1:24", "LUK 1:41", "LUK 1:57"]
  },
  {
    id: "joao-batista", nome: "João Batista", outros: "", significado: "o SENHOR é gracioso",
    grupo: "Evangelhos", epoca: "c. 6 a.C. – c. 29 d.C.",
    resumo: "Filho de Zacarias e Isabel, o precursor anunciado por Isaías e Malaquias. Pregou no deserto o batismo de arrependimento, batizou Jesus no Jordão e o apontou como \"o Cordeiro de Deus\". Foi preso e decapitado por Herodes Antipas por ter denunciado sua união com Herodias.",
    familia: { pai: "Zacarias", mae: "Isabel", conjuge: "", filhos: "" },
    ids: { pai: "zacarias", mae: "isabel" },
    refs: ["MAT 3:1", "MAR 1:4", "JOH 1:29", "JOH 3:30", "MAT 11:11", "MAT 14:10"]
  },
  {
    id: "pedro", nome: "Pedro", outros: "Simão; Cefas", significado: "pedra, rocha",
    grupo: "Evangelhos", epoca: "? – c. 64–67 d.C.",
    resumo: "Pescador de Betsaida, irmão de André, chamado por Jesus e posto em primeiro lugar nas listas dos doze. Confessou que Jesus é o Cristo, negou-o três vezes e foi restaurado pelo Senhor ressuscitado. Pregou no Pentecostes, abriu a porta do evangelho aos gentios na casa de Cornélio e escreveu duas cartas. Segundo a tradição, foi martirizado em Roma sob Nero.",
    familia: { pai: "Jonas (João)", mae: "", conjuge: "(casado; a esposa não é nomeada)", filhos: "" },
    ids: {},
    refs: ["MAT 4:18", "MAT 16:16", "MAT 26:75", "JOH 21:17", "ACT 2:14", "1PE 1:1"]
  },
  {
    id: "andre", nome: "André", outros: "", significado: "varonil",
    grupo: "Evangelhos", epoca: "",
    resumo: "Pescador, irmão de Simão Pedro e antes discípulo de João Batista. Foi um dos primeiros a seguir Jesus e logo levou o irmão a ele. Aparece sempre trazendo alguém a Jesus: Pedro, o menino dos pães e peixes, os gregos.",
    familia: { pai: "Jonas (João)", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 4:18", "JOH 1:40", "JOH 6:8", "JOH 12:22"]
  },
  {
    id: "tiago-zebedeu", nome: "Tiago, filho de Zebedeu", outros: "Tiago Maior; Boanerges (com João)", significado: "forma grega de Jacó",
    grupo: "Evangelhos", epoca: "? – c. 44 d.C.",
    resumo: "Pescador da Galileia, irmão de João; Jesus chamou os dois de \"filhos do trovão\". Com Pedro e João, formava o círculo mais próximo de Jesus, presente na transfiguração e no Getsêmani. Foi o primeiro dos apóstolos a ser martirizado, morto à espada por Herodes Agripa I.",
    familia: { pai: "Zebedeu", mae: "(provavelmente Salomé)", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 4:21", "MAR 3:17", "MAR 5:37", "MAT 17:1", "ACT 12:2"]
  },
  {
    id: "joao", nome: "João", outros: "João, filho de Zebedeu; o discípulo amado", significado: "o SENHOR é gracioso",
    grupo: "Evangelhos", epoca: "? – c. 100 d.C.",
    resumo: "Pescador, irmão de Tiago, um dos três discípulos mais próximos de Jesus. A tradição o identifica com \"o discípulo a quem Jesus amava\", a quem o Senhor confiou sua mãe junto à cruz. Coluna da igreja de Jerusalém, a ele são atribuídos o quarto Evangelho, três cartas e o Apocalipse, este recebido no exílio em Patmos.",
    familia: { pai: "Zebedeu", mae: "(provavelmente Salomé)", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAR 3:17", "JOH 13:23", "JOH 19:26", "ACT 3:1", "GAL 2:9", "REV 1:9"]
  },
  {
    id: "filipe", nome: "Filipe (apóstolo)", outros: "", significado: "amigo de cavalos",
    grupo: "Evangelhos", epoca: "",
    resumo: "Natural de Betsaida, como Pedro e André, chamado diretamente por Jesus: \"Segue-me\". Levou Natanael a Jesus e foi procurado pelos gregos que queriam vê-lo. Pediu: \"Senhor, mostra-nos o Pai\", e ouviu: \"Quem me vê a mim vê o Pai\".",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JOH 1:43", "JOH 1:45", "JOH 6:7", "JOH 12:21", "JOH 14:8"]
  },
  {
    id: "bartolomeu", nome: "Bartolomeu", outros: "Natanael (identificação tradicional)", significado: "filho de Tolmai",
    grupo: "Evangelhos", epoca: "",
    resumo: "Um dos doze, citado nas listas dos sinóticos logo depois de Filipe. Costuma ser identificado com Natanael, de Caná, levado a Jesus por Filipe no Evangelho de João — identificação provável, mas não afirmada pelo texto. Jesus disse de Natanael: \"um verdadeiro israelita, em quem não há dolo\".",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 10:3", "MAR 3:18", "LUK 6:14", "JOH 1:47", "JOH 21:2", "ACT 1:13"]
  },
  {
    id: "mateus", nome: "Mateus", outros: "Levi", significado: "dom do SENHOR",
    grupo: "Evangelhos", epoca: "",
    resumo: "Cobrador de impostos em Cafarnaum, chamado por Jesus enquanto estava sentado na coletoria. Deixou tudo, seguiu-o e ofereceu um banquete em que Jesus se sentou com publicanos e pecadores. A tradição lhe atribui o primeiro Evangelho.",
    familia: { pai: "Alfeu", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 9:9", "MAT 10:3", "MAR 2:14", "LUK 5:29"]
  },
  {
    id: "tome", nome: "Tomé", outros: "Dídimo", significado: "gêmeo",
    grupo: "Evangelhos", epoca: "",
    resumo: "Um dos doze, disposto a morrer com Jesus e franco em suas dúvidas. Ausente na primeira aparição do Ressuscitado, disse que só creria se visse e tocasse as marcas dos cravos. Oito dias depois, diante de Jesus, confessou: \"Senhor meu e Deus meu!\"",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JOH 11:16", "JOH 14:5", "JOH 20:25", "JOH 20:28", "JOH 21:2"]
  },
  {
    id: "tiago-alfeu", nome: "Tiago, filho de Alfeu", outros: "", significado: "forma grega de Jacó",
    grupo: "Evangelhos", epoca: "",
    resumo: "Um dos doze apóstolos, de quem o Novo Testamento registra apenas o nome nas listas. Alguns o identificam com \"Tiago, o menor\", filho de uma Maria (Mc 15:40), o que é incerto. Não deve ser confundido com Tiago, filho de Zebedeu, nem com Tiago, irmão do Senhor.",
    familia: { pai: "Alfeu", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 10:3", "MAR 3:18", "LUK 6:15", "ACT 1:13"]
  },
  {
    id: "tadeu", nome: "Tadeu", outros: "Lebeu; Judas, filho (ou irmão) de Tiago", significado: "",
    grupo: "Evangelhos", epoca: "",
    resumo: "Um dos doze, chamado Tadeu em Mateus e Marcos e \"Judas de Tiago\" em Lucas e Atos — entende-se, em geral, que se trata da mesma pessoa. É o \"Judas, não o Iscariotes\", que na última ceia perguntou por que Jesus se manifestaria aos discípulos e não ao mundo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 10:3", "MAR 3:18", "LUK 6:16", "JOH 14:22", "ACT 1:13"]
  },
  {
    id: "simao-zelote", nome: "Simão, o Zelote", outros: "Simão, o cananeu (cananita)", significado: "ouvir; (Deus) ouviu",
    grupo: "Evangelhos", epoca: "",
    resumo: "Um dos doze apóstolos, conhecido apenas pelas listas. O apelido \"zelote\" (em aramaico, \"cananeu\") indica zelo fervoroso, talvez ligação anterior com o movimento nacionalista judaico. Sua presença ao lado de Mateus, ex-publicano, mostra a diversidade do grupo que Jesus formou.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 10:4", "MAR 3:18", "LUK 6:15", "ACT 1:13"]
  },
  {
    id: "judas-iscariotes", nome: "Judas Iscariotes", outros: "", significado: "Judas = louvor; Iscariotes = provavelmente \"homem de Queriote\"",
    grupo: "Evangelhos", epoca: "? – c. 30 d.C.",
    resumo: "Um dos doze, encarregado da bolsa do grupo. Combinou com os principais sacerdotes entregar Jesus por trinta moedas de prata e o traiu com um beijo no Getsêmani. Tomado de remorso, devolveu o dinheiro e se enforcou; seu lugar entre os apóstolos foi ocupado por Matias.",
    familia: { pai: "Simão Iscariotes", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 10:4", "MAT 26:14", "MAT 27:5", "LUK 22:48", "JOH 12:4", "ACT 1:16"]
  },
  {
    id: "maria-madalena", nome: "Maria Madalena", outros: "", significado: "Madalena = de Magdala",
    grupo: "Evangelhos", epoca: "",
    resumo: "Mulher de Magdala, na Galileia, de quem Jesus expulsou sete demônios. Seguiu-o e o serviu com seus bens, esteve junto à cruz e ao sepulcro. Foi a primeira a ver o Senhor ressuscitado e a levar a notícia aos discípulos. A identificação dela com a pecadora de Lucas 7 é tradição posterior, sem base no texto.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["LUK 8:2", "JOH 19:25", "JOH 20:1", "JOH 20:16", "JOH 20:18"]
  },
  {
    id: "marta", nome: "Marta", outros: "", significado: "senhora",
    grupo: "Evangelhos", epoca: "",
    resumo: "Irmã de Maria e de Lázaro, de Betânia, que hospedava Jesus em sua casa. Atarefada com o serviço, foi lembrada por ele de que uma só coisa é necessária. Diante da morte do irmão, fez uma das grandes confissões de fé do Evangelho: \"Tu és o Cristo, o Filho de Deus\".",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["LUK 10:38", "LUK 10:41", "JOH 11:21", "JOH 11:27", "JOH 12:2"]
  },
  {
    id: "maria-de-betania", nome: "Maria de Betânia", outros: "", significado: "forma grega de Miriã",
    grupo: "Evangelhos", epoca: "",
    resumo: "Irmã de Marta e de Lázaro. Sentada aos pés de Jesus para ouvir sua palavra, \"escolheu a boa parte\". Dias antes da Páscoa, ungiu os pés de Jesus com um perfume caríssimo de nardo, gesto que ele ligou ao seu sepultamento.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["LUK 10:39", "LUK 10:42", "JOH 11:2", "JOH 11:32", "JOH 12:3"]
  },
  {
    id: "lazaro", nome: "Lázaro", outros: "", significado: "Deus ajudou (forma de Eleazar)",
    grupo: "Evangelhos", epoca: "",
    resumo: "Irmão de Marta e Maria, de Betânia, amigo a quem Jesus amava. Morreu e estava havia quatro dias no sepulcro quando Jesus o chamou para fora, o último grande sinal antes da paixão. Por causa dele muitos creram, e os principais sacerdotes planejaram matá-lo também. Não é o mendigo Lázaro da parábola de Lucas 16.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JOH 11:1", "JOH 11:14", "JOH 11:43", "JOH 12:1", "JOH 12:10"]
  },
  {
    id: "nicodemos", nome: "Nicodemos", outros: "", significado: "vitória do povo",
    grupo: "Evangelhos", epoca: "",
    resumo: "Fariseu e membro do Sinédrio, \"mestre em Israel\", que procurou Jesus de noite e ouviu dele que é necessário nascer de novo. Mais tarde pediu que Jesus não fosse condenado sem ser ouvido. Depois da crucificação, levou mirra e aloés e ajudou José de Arimateia a sepultá-lo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["JOH 3:1", "JOH 3:4", "JOH 7:50", "JOH 19:39"]
  },
  {
    id: "jose-de-arimateia", nome: "José de Arimateia", outros: "", significado: "que Ele (Deus) acrescente",
    grupo: "Evangelhos", epoca: "c. 30 d.C.",
    resumo: "Homem rico, membro respeitado do Sinédrio, que esperava o reino de Deus e era discípulo de Jesus em segredo. Não consentiu na condenação. Pediu a Pilatos o corpo de Jesus e o sepultou em seu próprio túmulo novo, cavado na rocha.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["MAT 27:57", "MAR 15:43", "LUK 23:50", "JOH 19:38"]
  },
  {
    id: "zaqueu", nome: "Zaqueu", outros: "", significado: "puro, inocente",
    grupo: "Evangelhos", epoca: "c. 30 d.C.",
    resumo: "Chefe dos publicanos em Jericó, rico e de pequena estatura, que subiu numa figueira brava para ver Jesus. Recebeu-o em casa com alegria e prometeu dar metade dos bens aos pobres e restituir quatro vezes o que tivesse defraudado. Jesus declarou: \"Hoje veio a salvação a esta casa\".",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["LUK 19:2", "LUK 19:5", "LUK 19:8", "LUK 19:9"]
  },
  {
    id: "herodes-o-grande", nome: "Herodes, o Grande", outros: "", significado: "",
    grupo: "Evangelhos", epoca: "c. 37–4 a.C. (reinado)",
    resumo: "Idumeu feito rei da Judeia pelos romanos, célebre por suas construções, entre elas a grande reforma do templo de Jerusalém. Reinava quando Jesus nasceu; perturbado pela notícia dos magos, mandou matar os meninos de Belém. Depois de sua morte o reino foi dividido entre seus filhos.",
    familia: { pai: "Antípatro (fontes extrabíblicas)", mae: "", conjuge: "dez esposas, entre elas Mariane e Maltace", filhos: "Arquelau, Herodes Antipas, Filipe, Aristóbulo e outros" },
    ids: { filhos: ["herodes-antipas"] },
    refs: ["MAT 2:1", "MAT 2:3", "MAT 2:16", "MAT 2:19", "LUK 1:5"]
  },
  {
    id: "herodes-antipas", nome: "Herodes Antipas", outros: "Herodes, o tetrarca", significado: "",
    grupo: "Evangelhos", epoca: "c. 4 a.C. – 39 d.C. (governo)",
    resumo: "Filho de Herodes, o Grande, tetrarca da Galileia e da Pereia durante todo o ministério de Jesus. Tomou Herodias, mulher de seu irmão, e por isso prendeu e mandou decapitar João Batista. Jesus o chamou de \"aquela raposa\"; na paixão, Pilatos lhe enviou Jesus, e ele o tratou com desprezo.",
    familia: { pai: "Herodes, o Grande", mae: "Maltace (fontes extrabíblicas)", conjuge: "a filha de Aretas; depois Herodias", filhos: "" },
    ids: { pai: "herodes-o-grande" },
    refs: ["MAT 14:1", "MAR 6:20", "LUK 13:31", "LUK 23:8", "LUK 23:11"]
  },
  {
    id: "pilatos", nome: "Pôncio Pilatos", outros: "", significado: "",
    grupo: "Evangelhos", epoca: "c. 26–36 d.C. (governo)",
    resumo: "Governador romano da Judeia que julgou Jesus. Declarou não achar nele crime algum, mas, pressionado pela multidão e pelos líderes, lavou as mãos e o entregou para ser crucificado. Mandou pôr na cruz o título \"Jesus Nazareno, Rei dos Judeus\"; seu nome ficou no Credo como marco histórico da paixão.",
    familia: { pai: "", mae: "", conjuge: "(mencionada em Mt 27:19, não nomeada)", filhos: "" },
    ids: {},
    refs: ["LUK 3:1", "MAT 27:2", "MAT 27:24", "MAR 15:15", "JOH 18:38", "JOH 19:19"]
  },
  {
    id: "caifas", nome: "Caifás", outros: "José Caifás", significado: "",
    grupo: "Evangelhos", epoca: "c. 18–36 d.C. (sumo sacerdote)",
    resumo: "Sumo sacerdote no tempo do ministério e da morte de Jesus, genro de Anás. Aconselhou o Sinédrio de que convinha que um só homem morresse pelo povo — palavra que João lê como profecia involuntária. Presidiu o julgamento de Jesus e, depois, participou do interrogatório de Pedro e João.",
    familia: { pai: "", mae: "", conjuge: "a filha de Anás", filhos: "" },
    ids: {},
    refs: ["MAT 26:3", "MAT 26:57", "JOH 11:49", "JOH 18:14", "ACT 4:6"]
  },

  // ───────────── Igreja primitiva ─────────────
  {
    id: "matias", nome: "Matias", outros: "", significado: "dom do SENHOR",
    grupo: "Igreja primitiva", epoca: "c. 30 d.C.",
    resumo: "Discípulo que acompanhou Jesus desde o batismo de João até a ascensão. Foi escolhido por sorteio, depois de oração, para ocupar entre os doze o lugar deixado por Judas Iscariotes. O Novo Testamento não volta a mencioná-lo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 1:23", "ACT 1:24", "ACT 1:26"]
  },
  {
    id: "estevao", nome: "Estêvão", outros: "", significado: "coroa",
    grupo: "Igreja primitiva", epoca: "? – c. 33–35 d.C.",
    resumo: "Um dos sete escolhidos para servir às mesas em Jerusalém, homem cheio de fé e do Espírito Santo. Acusado diante do Sinédrio, fez um longo discurso sobre a história de Israel e foi apedrejado, tornando-se o primeiro mártir cristão. Morreu orando por seus algozes, sob o olhar do jovem Saulo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 6:5", "ACT 6:8", "ACT 7:55", "ACT 7:59", "ACT 7:60", "ACT 22:20"]
  },
  {
    id: "filipe-evangelista", nome: "Filipe, o evangelista", outros: "", significado: "amigo de cavalos",
    grupo: "Igreja primitiva", epoca: "c. 33–58 d.C.",
    resumo: "Um dos sete de Atos 6, distinto do apóstolo de mesmo nome. Dispersado pela perseguição, pregou Cristo em Samaria e, guiado pelo Espírito, explicou Isaías ao eunuco etíope e o batizou. Fixou-se em Cesareia, onde hospedou Paulo; tinha quatro filhas que profetizavam.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "quatro filhas" },
    ids: {},
    refs: ["ACT 6:5", "ACT 8:5", "ACT 8:35", "ACT 8:40", "ACT 21:8"]
  },
  {
    id: "paulo", nome: "Paulo", outros: "Saulo de Tarso", significado: "pequeno",
    grupo: "Igreja primitiva", epoca: "c. 5 – c. 64–67 d.C.",
    resumo: "Fariseu de Tarso, da tribo de Benjamim e cidadão romano, que perseguia a igreja até encontrar o Cristo ressuscitado no caminho de Damasco. Tornou-se o apóstolo dos gentios: em três viagens missionárias fundou igrejas pela Ásia Menor e pela Grécia, e escreveu treze cartas do Novo Testamento. Preso em Jerusalém, foi levado a Roma, onde, segundo a tradição, foi decapitado sob Nero.",
    familia: { pai: "(fariseu, não nomeado)", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 9:4", "ACT 9:15", "ACT 13:9", "ROM 1:1", "1CO 15:9", "2TI 4:7"]
  },
  {
    id: "ananias-de-damasco", nome: "Ananias de Damasco", outros: "", significado: "o SENHOR é gracioso",
    grupo: "Igreja primitiva", epoca: "c. 34 d.C.",
    resumo: "Discípulo de Damasco a quem o Senhor mandou, em visão, procurar Saulo, o perseguidor. Apesar do receio, obedeceu: impôs-lhe as mãos, Saulo recuperou a vista e foi batizado. Não deve ser confundido com o Ananias de Atos 5 nem com o sumo sacerdote de Atos 23.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 9:10", "ACT 9:17", "ACT 22:12"]
  },
  {
    id: "barnabe", nome: "Barnabé", outros: "José", significado: "filho da consolação (exortação)",
    grupo: "Igreja primitiva", epoca: "c. 30–60 d.C.",
    resumo: "Levita de Chipre que vendeu um campo e entregou o valor aos apóstolos. Foi quem apresentou o recém-convertido Saulo à igreja de Jerusalém e o buscou em Tarso para o trabalho em Antioquia. Companheiro de Paulo na primeira viagem missionária, separou-se dele por causa de João Marcos, seu primo.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 4:36", "ACT 9:27", "ACT 11:24", "ACT 13:2", "ACT 15:39"]
  },
  {
    id: "silas", nome: "Silas", outros: "Silvano", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 49–65 d.C.",
    resumo: "Líder e profeta da igreja de Jerusalém, enviado a Antioquia com a carta do concílio. Acompanhou Paulo na segunda viagem missionária; em Filipos, os dois foram açoitados e presos, e cantavam hinos à meia-noite quando um terremoto abriu o cárcere. Aparece como coautor nas cartas aos tessalonicenses e como portador de 1 Pedro.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 15:22", "ACT 15:40", "ACT 16:25", "ACT 17:10", "1TH 1:1", "1PE 5:12"]
  },
  {
    id: "timoteo", nome: "Timóteo", outros: "", significado: "o que honra a Deus",
    grupo: "Igreja primitiva", epoca: "c. 49–67 d.C.",
    resumo: "Jovem discípulo de Listra, de mãe judia e pai grego, instruído desde a infância nas Escrituras. Tornou-se o colaborador mais próximo de Paulo, que o chama de \"verdadeiro filho na fé\" e o enviou a várias igrejas. Cuidava da igreja de Éfeso quando recebeu as duas cartas que levam seu nome.",
    familia: { pai: "(grego, não nomeado)", mae: "Eunice (avó: Loide)", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 16:1", "1CO 4:17", "PHI 2:19", "1TI 1:2", "2TI 1:5", "2TI 3:15"]
  },
  {
    id: "tito", nome: "Tito", outros: "", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 49–67 d.C.",
    resumo: "Cooperador grego de Paulo, não circuncidado — caso que serviu de exemplo na defesa da liberdade dos gentios. Foi mediador entre Paulo e a igreja de Corinto e organizou ali a coleta para os santos. Deixado em Creta para pôr em ordem as igrejas e constituir presbíteros, recebeu a carta que leva seu nome.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["2CO 7:6", "2CO 8:23", "GAL 2:3", "TIT 1:4", "TIT 1:5", "2TI 4:10"]
  },
  {
    id: "lucas", nome: "Lucas", outros: "", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 50–67 d.C.",
    resumo: "\"O médico amado\", companheiro de viagem de Paulo e, ao que tudo indica, gentio. A tradição lhe atribui o terceiro Evangelho e Atos dos Apóstolos, dedicados a Teófilo; os trechos de Atos narrados em \"nós\" indicariam sua presença. Estava com Paulo na última prisão, em Roma.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["COL 4:14", "2TI 4:11", "PHM 1:24", "LUK 1:3", "ACT 16:10"]
  },
  {
    id: "marcos", nome: "Marcos", outros: "João Marcos", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 44–67 d.C.",
    resumo: "Jovem de Jerusalém, em cuja casa materna a igreja se reunia, e primo de Barnabé. Abandonou Paulo e Barnabé na primeira viagem missionária, o que causou a separação dos dois; anos depois Paulo o considera \"útil para o ministério\". Pedro o chama de \"meu filho\", e a tradição lhe atribui o segundo Evangelho, baseado na pregação de Pedro.",
    familia: { pai: "", mae: "Maria (de Jerusalém)", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 12:12", "ACT 13:13", "ACT 15:37", "COL 4:10", "2TI 4:11", "1PE 5:13"]
  },
  {
    id: "priscila", nome: "Priscila", outros: "Prisca", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 49–67 d.C.",
    resumo: "Esposa de Áquila, com quem fabricava tendas. Expulsos de Roma pelo decreto de Cláudio, receberam Paulo em Corinto e o acompanharam a Éfeso, onde instruíram Apolo com mais exatidão no caminho de Deus. Uma igreja se reunia em sua casa; Paulo diz que arriscaram a vida por ele.",
    familia: { pai: "", mae: "", conjuge: "Áquila", filhos: "" },
    ids: { conjuge: "aquila" },
    refs: ["ACT 18:2", "ACT 18:26", "ROM 16:3", "1CO 16:19", "2TI 4:19"]
  },
  {
    id: "aquila", nome: "Áquila", outros: "", significado: "águia",
    grupo: "Igreja primitiva", epoca: "c. 49–67 d.C.",
    resumo: "Judeu natural do Ponto, fabricante de tendas, marido de Priscila. Trabalhou com Paulo em Corinto e seguiu com ele para Éfeso. O casal é sempre citado junto, como cooperadores de Paulo e anfitriões da igreja em sua casa.",
    familia: { pai: "", mae: "", conjuge: "Priscila", filhos: "" },
    ids: { conjuge: "priscila" },
    refs: ["ACT 18:2", "ACT 18:3", "ACT 18:18", "ACT 18:26", "ROM 16:3"]
  },
  {
    id: "apolo", nome: "Apolo", outros: "", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 52–65 d.C.",
    resumo: "Judeu de Alexandria, eloquente e poderoso nas Escrituras, que conhecia apenas o batismo de João até ser instruído por Priscila e Áquila. Ensinou com grande proveito em Corinto, onde alguns formaram partido em seu nome. Paulo o trata como cooperador: \"Eu plantei, Apolo regou, mas Deus deu o crescimento\".",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 18:24", "ACT 19:1", "1CO 1:12", "1CO 3:6", "1CO 16:12"]
  },
  {
    id: "lidia", nome: "Lídia", outros: "", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 50 d.C.",
    resumo: "Vendedora de púrpura, natural de Tiatira, temente a Deus, que ouviu Paulo junto ao rio em Filipos. O Senhor lhe abriu o coração; foi batizada com sua casa — a primeira conversão registrada na Europa. Hospedou os missionários, e em sua casa se reuniam os irmãos.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 16:14", "ACT 16:15", "ACT 16:40"]
  },
  {
    id: "cornelio", nome: "Cornélio", outros: "", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 40 d.C.",
    resumo: "Centurião romano da coorte Italiana, em Cesareia, piedoso, temente a Deus e generoso em esmolas. Orientado por um anjo, mandou chamar Pedro, que por sua vez fora preparado por uma visão. Enquanto Pedro pregava, o Espírito Santo desceu sobre ele e os seus — marco da entrada dos gentios na igreja.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 10:1", "ACT 10:2", "ACT 10:22", "ACT 10:25", "ACT 10:31"]
  },
  {
    id: "tiago-irmao-do-senhor", nome: "Tiago, irmão do Senhor", outros: "Tiago, o Justo", significado: "forma grega de Jacó",
    grupo: "Igreja primitiva", epoca: "? – c. 62 d.C.",
    resumo: "Um dos irmãos de Jesus, que não cria nele durante o ministério, mas a quem o Ressuscitado apareceu. Tornou-se o principal líder da igreja de Jerusalém e presidiu o concílio de Atos 15. A ele se atribui a carta de Tiago. Evangélicos em geral o entendem como filho de José e Maria; a tradição católica o considera primo, e a ortodoxa, filho de um casamento anterior de José.",
    familia: { pai: "José", mae: "Maria", conjuge: "(casado, cf. 1Co 9:5)", filhos: "" },
    ids: { pai: "jose-de-nazare", mae: "maria" },
    refs: ["MAT 13:55", "ACT 15:13", "ACT 21:18", "1CO 15:7", "GAL 1:19", "JAM 1:1"]
  },
  {
    id: "judas-irmao-do-senhor", nome: "Judas, irmão do Senhor", outros: "Judas, irmão de Tiago", significado: "louvor",
    grupo: "Igreja primitiva", epoca: "",
    resumo: "Um dos irmãos de Jesus citados nos Evangelhos, que se apresenta como \"servo de Jesus Cristo e irmão de Tiago\". A ele se atribui a breve carta de Judas, que exorta os crentes a batalhar pela fé e adverte contra falsos mestres. Não é Judas Iscariotes nem o apóstolo Judas Tadeu.",
    familia: { pai: "José", mae: "Maria", conjuge: "", filhos: "" },
    ids: { pai: "jose-de-nazare", mae: "maria" },
    refs: ["MAT 13:55", "MAR 6:3", "JUD 1:1", "JUD 1:3"]
  },
  {
    id: "herodes-agripa-i", nome: "Herodes Agripa I", outros: "o \"rei Herodes\" de Atos 12", significado: "",
    grupo: "Igreja primitiva", epoca: "c. 37–44 d.C. (reinado)",
    resumo: "Neto de Herodes, o Grande, rei da Judeia sob os imperadores Calígula e Cláudio. Para agradar aos judeus, mandou matar Tiago, irmão de João, e prendeu Pedro, que foi libertado por um anjo. Morreu em Cesareia, ferido por um anjo do Senhor, por aceitar ser aclamado como um deus. Seu filho, Agripa II, ouviu a defesa de Paulo em Atos 26.",
    familia: { pai: "Aristóbulo (fontes extrabíblicas)", mae: "", conjuge: "", filhos: "Agripa II, Berenice e Drusila" },
    ids: {},
    refs: ["ACT 12:1", "ACT 12:2", "ACT 12:21", "ACT 12:23"]
  },
  {
    id: "gamaliel", nome: "Gamaliel", outros: "", significado: "recompensa de Deus",
    grupo: "Igreja primitiva", epoca: "c. 30–50 d.C.",
    resumo: "Fariseu e doutor da Lei respeitado por todo o povo, membro do Sinédrio. Aconselhou cautela no trato com os apóstolos: se a obra fosse de homens, se desfaria; se fosse de Deus, ninguém a poderia destruir. Paulo declara ter sido educado aos seus pés.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["ACT 5:34", "ACT 5:39", "ACT 22:3"]
  },
  {
    id: "filemom", nome: "Filemom", outros: "", significado: "afetuoso",
    grupo: "Igreja primitiva", epoca: "c. 60 d.C.",
    resumo: "Cristão de Colossos, convertido por meio de Paulo, em cuja casa a igreja se reunia. Era senhor do escravo Onésimo. Paulo lhe escreveu pedindo que recebesse o fugitivo de volta \"não mais como escravo, mas como irmão amado\".",
    familia: { pai: "", mae: "", conjuge: "(talvez Áfia)", filhos: "(talvez Arquipo)" },
    ids: {},
    refs: ["PHM 1:1", "PHM 1:7", "PHM 1:21"]
  },
  {
    id: "onesimo", nome: "Onésimo", outros: "", significado: "útil",
    grupo: "Igreja primitiva", epoca: "c. 60 d.C.",
    resumo: "Escravo de Filemom que, ao que parece, fugiu e acabou encontrando Paulo na prisão, onde se converteu. Paulo o chama de \"meu filho, que gerei nas minhas prisões\" e faz um jogo com seu nome: antes inútil, agora útil. Foi enviado de volta a Colossos com Tíquico, levando a carta a Filemom.",
    familia: { pai: "", mae: "", conjuge: "", filhos: "" },
    ids: {},
    refs: ["PHM 1:10", "PHM 1:11", "PHM 1:16", "COL 4:9"]
  }
];

window.GENEALOGIAS = {
  // Linha de Adão a Jesus: Gênesis 5 e 11 (com Lucas 3) até Abraão; Mateus 1 de Abraão em diante.
  // Cada elo: [nome, id em PESSOAS ou "", nota, ref]
  messias: [
    ["Adão", "adao", "", "GEN 5:1"],
    ["Sete", "sete", "", "GEN 5:3"],
    ["Enos", "", "", "GEN 5:6"],
    ["Cainã", "", "", "GEN 5:9"],
    ["Maalalel", "", "", "GEN 5:12"],
    ["Jarede", "", "", "GEN 5:15"],
    ["Enoque", "enoque", "andou com Deus e foi tomado por ele", "GEN 5:18"],
    ["Matusalém", "matusalem", "969 anos", "GEN 5:21"],
    ["Lameque", "", "", "GEN 5:25"],
    ["Noé", "noe", "o dilúvio", "GEN 5:29"],
    ["Sem", "sem", "", "GEN 5:32"],
    ["Arfaxade", "", "", "GEN 11:10"],
    ["Cainã", "", "só em Lucas 3:36 e na Septuaginta; ausente do texto hebraico de Gênesis 11", "LUK 3:36"],
    ["Salá", "", "", "GEN 11:12"],
    ["Héber", "", "de seu nome costuma-se derivar \"hebreu\"", "GEN 11:14"],
    ["Pelegue", "", "", "GEN 11:16"],
    ["Reú", "", "", "GEN 11:18"],
    ["Serugue", "", "", "GEN 11:20"],
    ["Naor", "", "", "GEN 11:22"],
    ["Terá", "", "saiu de Ur e morreu em Harã", "GEN 11:24"],
    ["Abraão", "abraao", "aqui começa a genealogia de Mateus", "GEN 11:26"],
    ["Isaque", "isaque", "", "MAT 1:2"],
    ["Jacó", "jaco", "", "MAT 1:2"],
    ["Judá", "juda", "", "MAT 1:2"],
    ["Perez", "", "de Tamar; também Peres ou Farés", "MAT 1:3"],
    ["Esrom", "", "também Hezrom", "MAT 1:3"],
    ["Arão", "", "também Rão; não é o sacerdote Arão", "MAT 1:3"],
    ["Aminadabe", "", "", "MAT 1:4"],
    ["Naassom", "", "príncipe de Judá no deserto", "MAT 1:4"],
    ["Salmom", "", "", "MAT 1:4"],
    ["Boaz", "boaz", "de Raabe", "MAT 1:5"],
    ["Obede", "", "de Rute", "MAT 1:5"],
    ["Jessé", "jesse", "", "MAT 1:5"],
    ["Davi", "davi", "o rei; fim do primeiro grupo de catorze gerações", "MAT 1:6"],
    ["Salomão", "salomao", "da que fora mulher de Urias", "MAT 1:6"],
    ["Roboão", "roboao", "", "MAT 1:7"],
    ["Abias", "", "", "MAT 1:7"],
    ["Asa", "asa", "", "MAT 1:7"],
    ["Josafá", "josafa", "", "MAT 1:8"],
    ["Jorão", "", "também Jeorão", "MAT 1:8"],
    ["Uzias", "uzias", "Mateus omite aqui Acazias, Joás e Amazias (cf. 1Cr 3:11-12)", "MAT 1:8"],
    ["Jotão", "", "", "MAT 1:9"],
    ["Acaz", "acaz", "", "MAT 1:9"],
    ["Ezequias", "ezequias", "", "MAT 1:9"],
    ["Manassés", "manasses", "", "MAT 1:10"],
    ["Amom", "", "", "MAT 1:10"],
    ["Josias", "josias", "", "MAT 1:10"],
    ["Jeconias", "", "também Joaquim; Mateus omite Jeoaquim, seu pai; deportação para a Babilônia", "MAT 1:11"],
    ["Salatiel", "", "também Sealtiel", "MAT 1:12"],
    ["Zorobabel", "zorobabel", "governador no retorno do exílio", "MAT 1:12"],
    ["Abiúde", "", "", "MAT 1:13"],
    ["Eliaquim", "", "", "MAT 1:13"],
    ["Azor", "", "", "MAT 1:13"],
    ["Sadoque", "", "", "MAT 1:14"],
    ["Aquim", "", "", "MAT 1:14"],
    ["Eliúde", "", "", "MAT 1:14"],
    ["Eleazar", "", "", "MAT 1:15"],
    ["Matã", "", "", "MAT 1:15"],
    ["Jacó", "", "pai de José", "MAT 1:15"],
    ["José", "jose-de-nazare", "marido de Maria", "MAT 1:16"],
    ["Jesus", "jesus", "que se chama o Cristo, nascido de Maria", "MAT 1:16"]
  ],

  // Cada rei: [nome, id ou "", período, avaliação, nota, ref]
  reinoUnido: [
    ["Saul", "saul", "c. 1050–1010 a.C.", "misto", "Primeiro rei, da tribo de Benjamim; começou bem e foi rejeitado por desobediência", "1SA 10:24"],
    ["Davi", "davi", "c. 1010–970 a.C.", "bom", "Reinou 7 anos em Hebrom e 33 em Jerusalém; aliança do trono eterno. Is-Bosete, filho de Saul, reinou 2 anos sobre o norte no início", "2SA 5:4"],
    ["Salomão", "salomao", "c. 970–931 a.C.", "misto", "Construiu o templo; sabedoria e glória, mas idolatria na velhice", "1KI 11:42"]
  ],
  israel: [
    ["Jeroboão I", "jeroboao", "c. 931–910 a.C.", "mau", "1ª dinastia; os bezerros de ouro em Betel e Dã", "1KI 12:20"],
    ["Nadabe", "", "c. 910–909 a.C.", "mau", "Filho de Jeroboão; assassinado por Baasa", "1KI 15:25"],
    ["Baasa", "", "c. 909–886 a.C.", "mau", "2ª dinastia; exterminou a casa de Jeroboão", "1KI 15:33"],
    ["Elá", "", "c. 886–885 a.C.", "mau", "Filho de Baasa; assassinado por Zinri", "1KI 16:8"],
    ["Zinri", "", "c. 885 a.C.", "mau", "Reinou sete dias; morreu no incêndio do palácio", "1KI 16:15"],
    ["Onri", "", "c. 885–874 a.C.", "mau", "3ª dinastia; disputou o trono com Tibni e fundou Samaria", "1KI 16:23"],
    ["Acabe", "acabe", "c. 874–853 a.C.", "mau", "Casado com Jezabel; culto a Baal; confrontado por Elias", "1KI 16:29"],
    ["Acazias", "", "c. 853–852 a.C.", "mau", "Filho de Acabe; consultou Baal-Zebube", "1KI 22:51"],
    ["Jorão", "", "c. 852–841 a.C.", "mau", "Filho de Acabe (também Jeorão); morto por Jeú", "2KI 3:1"],
    ["Jeú", "jeu", "c. 841–814 a.C.", "misto", "4ª dinastia; destruiu a casa de Acabe e o culto a Baal, mas manteve os bezerros", "2KI 10:36"],
    ["Jeoacaz", "", "c. 814–798 a.C.", "mau", "Filho de Jeú; oprimido pela Síria", "2KI 13:1"],
    ["Jeoás", "", "c. 798–782 a.C.", "mau", "Também Joás; visitou Eliseu moribundo e venceu a Síria três vezes", "2KI 13:10"],
    ["Jeroboão II", "", "c. 793–753 a.C.", "mau", "Auge da prosperidade do norte; tempo de Jonas, Amós e Oseias (inclui corregência)", "2KI 14:23"],
    ["Zacarias", "", "c. 753 a.C.", "mau", "Reinou seis meses; último da casa de Jeú", "2KI 15:8"],
    ["Salum", "", "c. 752 a.C.", "mau", "Reinou um mês; assassinado por Menaém", "2KI 15:13"],
    ["Menaém", "", "c. 752–742 a.C.", "mau", "Pagou tributo a Pul (Tiglate-Pileser III), rei da Assíria", "2KI 15:17"],
    ["Pecaías", "", "c. 742–740 a.C.", "mau", "Filho de Menaém; assassinado por Peca", "2KI 15:23"],
    ["Peca", "", "c. 752–732 a.C.", "mau", "Os 20 anos parecem contar um governo rival desde 752; aliou-se à Síria contra Judá", "2KI 15:27"],
    ["Oseias", "", "c. 732–722 a.C.", "mau", "Último rei; Samaria caiu diante da Assíria em 722 a.C.", "2KI 17:1"]
  ],
  juda: [
    ["Roboão", "roboao", "c. 931–913 a.C.", "mau", "Filho de Salomão; divisão do reino; invasão de Sisaque", "1KI 14:21"],
    ["Abias", "", "c. 913–911 a.C.", "mau", "Também Abião; Reis o reprova, Crônicas registra sua confiança em Deus contra Jeroboão", "1KI 15:1"],
    ["Asa", "asa", "c. 911–870 a.C.", "bom", "Reformas religiosas; no fim confiou na Síria", "1KI 15:9"],
    ["Josafá", "josafa", "c. 872–848 a.C.", "bom", "Ensino da Lei; vitória pelo louvor; aliança imprudente com Acabe", "1KI 22:41"],
    ["Jeorão", "", "c. 853–841 a.C.", "mau", "Também Jorão; casado com Atalia, filha de Acabe; matou os irmãos", "2KI 8:16"],
    ["Acazias", "", "c. 841 a.C.", "mau", "Reinou um ano; morto por Jeú", "2KI 8:25"],
    ["Atalia", "atalia", "c. 841–835 a.C.", "mau", "Usurpadora, filha de Acabe; única mulher a governar; não é da linhagem de Davi", "2KI 11:3"],
    ["Joás", "", "c. 835–796 a.C.", "misto", "Coroado aos 7 anos; reparou o templo; desviou-se após a morte do sacerdote Joiada", "2KI 12:1"],
    ["Amazias", "", "c. 796–767 a.C.", "misto", "Venceu Edom, mas adorou seus deuses; derrotado por Israel", "2KI 14:1"],
    ["Uzias", "uzias", "c. 792–740 a.C.", "misto", "Também Azarias; longo reinado próspero; leproso por usurpar função sacerdotal", "2KI 15:1"],
    ["Jotão", "", "c. 750–732 a.C.", "bom", "Corregente durante a lepra do pai; construtor", "2KI 15:32"],
    ["Acaz", "acaz", "c. 735–716 a.C.", "mau", "Idólatra; pediu socorro à Assíria; profecia do Emanuel", "2KI 16:1"],
    ["Ezequias", "ezequias", "c. 716–687 a.C.", "bom", "Grande reforma; livramento de Senaqueribe em 701 a.C. Outra contagem põe o início em c. 729/727 (2Rs 18:1)", "2KI 18:1"],
    ["Manassés", "manasses", "c. 697–643 a.C.", "mau", "Reinado mais longo e mais idólatra; arrependeu-se no cativeiro (2Cr 33)", "2KI 21:1"],
    ["Amom", "", "c. 643–641 a.C.", "mau", "Seguiu a idolatria do pai; assassinado por seus servos", "2KI 21:19"],
    ["Josias", "josias", "c. 641–609 a.C.", "bom", "Achado o livro da Lei; grande reforma; morto em Megido", "2KI 22:1"],
    ["Jeoacaz", "", "c. 609 a.C.", "mau", "Também Salum; reinou três meses; levado ao Egito por Neco", "2KI 23:31"],
    ["Jeoaquim", "", "c. 609–598 a.C.", "mau", "Também Eliaquim; queimou o rolo de Jeremias; primeira deportação (605 a.C.)", "2KI 23:36"],
    ["Joaquim", "", "c. 598–597 a.C.", "mau", "Também Jeconias ou Conias; reinou três meses; levado à Babilônia", "2KI 24:8"],
    ["Zedequias", "zedequias", "c. 597–586 a.C.", "mau", "Último rei; queda de Jerusalém e destruição do templo em 586 a.C.", "2KI 24:18"]
  ]
};
