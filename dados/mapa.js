// Dados do mapa bíblico interativo.
// Coordenadas reais (WGS84) em [latitude, longitude]. As fronteiras antigas são imprecisas:
// os polígonos são aproximações didáticas, não limites históricos exatos.
window.MAPA = {
  regioes: [
    // ===================== ANTIGO TESTAMENTO =====================
    {
      id: "israel",
      nome: "Israel (Canaã central, reino do Norte)",
      eras: ["at"],
      cor: "#2e7d32",
      poligono: [[32.10, 34.82], [32.55, 34.92], [32.83, 35.00], [33.05, 35.12], [33.28, 35.55], [33.25, 35.68], [32.70, 35.60], [32.30, 35.56], [31.90, 35.52], [31.86, 35.20], [31.90, 34.95]],
      povos: "Quem habitava: cananeus e amorreus até a conquista (c. 1400 a.C.); depois as tribos do norte e do centro de Israel (Efraim, Manassés, Issacar, Zebulom, Naftali, Aser, Benjamim).",
      resumo: "Região montanhosa central de Canaã, com o vale de Jezreel e a Galileia ao norte. Foi o coração da terra prometida aos patriarcas e, após a divisão do reino (c. 931 a.C.), o território do reino do Norte, com capitais em Siquém, Tirza e Samaria. Caiu diante da Assíria em 722 a.C.",
      eventos: [
        "Abrão chega a Siquém e recebe a promessa da terra (Gênesis 12:6)",
        "Josué reúne as tribos em Siquém e renova a aliança (Josué 24:1)",
        "As dez tribos proclamam Jeroboão rei e o reino se divide (1 Reis 12:20)",
        "Elias enfrenta os profetas de Baal no monte Carmelo (1 Reis 18:20)",
        "Samaria cai e Israel é levado cativo para a Assíria, 722 a.C. (2 Reis 17:6)"
      ],
      refs: ["GEN 12:6", "JOS 24:1", "1KI 12:20", "1KI 18:20", "2KI 17:6"],
      hoje: "Norte e centro de Israel e norte da Cisjordânia"
    },
    {
      id: "juda",
      nome: "Judá",
      eras: ["at"],
      cor: "#a8324a",
      poligono: [[31.84, 34.95], [31.86, 35.50], [31.75, 35.48], [31.45, 35.38], [31.10, 35.36], [31.20, 34.76], [31.40, 34.82], [31.60, 34.88]],
      povos: "Quem habitava: jebuseus, heteus e amorreus antes da conquista; depois a tribo de Judá (com Simeão e parte de Benjamim), reino de Judá de c. 931 a 586 a.C.",
      resumo: "Região montanhosa ao sul, entre o mar Morto e a planície costeira, com Jerusalém, Belém e Hebrom. Foi o território da tribo de Judá e, depois da divisão, o reino do Sul, governado pela casa de Davi. Ali ficava o templo de Salomão. O reino terminou com a destruição de Jerusalém por Babilônia em 586 a.C.",
      eventos: [
        "Davi vence Golias no vale de Elá (1 Samuel 17:2)",
        "Davi reina em Hebrom e depois em Jerusalém (2 Samuel 5:5)",
        "Salomão começa a construir o templo (1 Reis 6:1)",
        "O exército assírio de Senaqueribe é ferido diante de Jerusalém (2 Reis 19:35)",
        "Judá é levado cativo para Babilônia, 586 a.C. (2 Reis 25:21)",
        "Ciro autoriza o retorno e a reconstrução do templo (Esdras 1:3)"
      ],
      refs: ["1SA 17:2", "2SA 5:5", "1KI 6:1", "2KI 19:35", "2KI 25:21", "EZR 1:3"],
      hoje: "Sul de Israel e sul da Cisjordânia"
    },
    {
      id: "filistia",
      nome: "Filístia",
      eras: ["at"],
      cor: "#00838f",
      poligono: [[31.92, 34.72], [31.88, 34.92], [31.60, 34.83], [31.38, 34.72], [31.22, 34.45], [31.27, 34.27], [31.52, 34.45], [31.70, 34.58]],
      povos: "Quem habitava: filisteus, povo de origem egeia (Caftor) estabelecido na costa a partir de c. 1200 a.C., em cinco cidades: Gaza, Ascalom, Asdode, Gate e Ecrom.",
      resumo: "Planície costeira do sudoeste de Canaã, sede das cinco cidades filisteias. Os filisteus foram os principais adversários de Israel no período dos juízes e no início da monarquia. Foram subjugados por Davi, mas mantiveram suas cidades até as conquistas assíria e babilônica.",
      eventos: [
        "Josué registra os cinco príncipes dos filisteus entre as terras por conquistar (Josué 13:3)",
        "Sansão é preso e levado a Gaza (Juízes 16:21)",
        "A arca da aliança é levada a Asdode (1 Samuel 5:1)",
        "Golias, de Gate, desafia Israel (1 Samuel 17:4)",
        "Davi refugia-se junto a Aquis, rei de Gate (1 Samuel 27:2)"
      ],
      refs: ["JOS 13:3", "JDG 16:21", "1SA 5:1", "1SA 17:4", "1SA 27:2"],
      hoje: "Faixa de Gaza e litoral sul de Israel (Asquelom, Asdode)"
    },
    {
      id: "fenicia",
      nome: "Fenícia",
      eras: ["at"],
      cor: "#6a1b9a",
      poligono: [[33.08, 35.12], [33.27, 35.24], [33.56, 35.40], [33.88, 35.52], [34.12, 35.66], [34.44, 35.84], [34.85, 35.90], [34.80, 36.20], [34.30, 36.05], [33.80, 35.80], [33.40, 35.60], [33.10, 35.45]],
      povos: "Quem habitava: fenícios (chamados sidônios no AT), cananeus do litoral, navegadores e comerciantes, organizados em cidades-estado como Tiro, Sidom e Gebal (Biblos).",
      resumo: "Faixa costeira ao norte de Israel, entre o mar e os montes do Líbano. Suas cidades forneceram cedro e artesãos para o templo de Salomão. Dali veio também a influência do culto a Baal, por meio de Jezabel. Os profetas anunciaram juízo sobre Tiro e Sidom.",
      eventos: [
        "Hirão, rei de Tiro, fornece cedro e operários a Salomão (1 Reis 5:1)",
        "Acabe casa-se com Jezabel, filha do rei dos sidônios (1 Reis 16:31)",
        "Elias é sustentado pela viúva de Sarepta (1 Reis 17:9)",
        "Ezequiel profetiza contra Tiro (Ezequiel 26:3)"
      ],
      refs: ["1KI 5:1", "1KI 16:31", "1KI 17:9", "EZE 26:3"],
      hoje: "Litoral do Líbano e extremo norte de Israel"
    },
    {
      id: "ara",
      nome: "Arã (Síria)",
      eras: ["at"],
      cor: "#ef6c00",
      poligono: [[35.30, 36.40], [35.40, 37.60], [34.40, 38.40], [33.20, 37.20], [32.95, 36.20], [33.20, 35.85], [33.80, 35.95], [34.40, 36.25], [34.90, 36.35]],
      povos: "Quem habitava: arameus (sírios), organizados em reinos como Arã-Damasco, Zobá e Hamate, do c. século XI ao VIII a.C.",
      resumo: "Região ao norte e nordeste de Israel, com capital em Damasco. Os reis arameus foram ora aliados, ora inimigos de Israel e de Judá durante a monarquia. O reino de Damasco foi destruído pela Assíria em 732 a.C.",
      eventos: [
        "Davi põe guarnições na Síria de Damasco (2 Samuel 8:6)",
        "Ben-Hadade cerca Samaria (1 Reis 20:1)",
        "Naamã, comandante sírio, é curado da lepra por meio de Eliseu (2 Reis 5:1)",
        "Isaías anuncia a Acaz o fim da ameaça de Damasco (Isaías 7:8)",
        "O rei da Assíria toma Damasco (2 Reis 16:9)"
      ],
      refs: ["2SA 8:6", "1KI 20:1", "2KI 5:1", "ISA 7:8", "2KI 16:9"],
      hoje: "Sul e centro da Síria (Damasco, Homs, Hama)"
    },
    {
      id: "basa",
      nome: "Basã",
      eras: ["at"],
      cor: "#558b2f",
      poligono: [[33.18, 35.68], [33.15, 35.85], [32.92, 36.20], [33.00, 36.90], [32.45, 36.90], [32.50, 36.00], [32.68, 35.66], [32.90, 35.66]],
      povos: "Quem habitava: amorreus do reino de Ogue (refains) até c. 1400 a.C.; depois a meia tribo de Manassés.",
      resumo: "Planalto fértil a leste do mar da Galileia, ao norte do rio Jarmuque, famoso pelo gado e pelos carvalhos. Foi tomado de Ogue antes da travessia do Jordão e entregue à meia tribo de Manassés. Golã, cidade de refúgio, ficava ali.",
      eventos: [
        "Israel derrota Ogue, rei de Basã, em Edrei (Números 21:33)",
        "A região é dada à meia tribo de Manassés (Deuteronômio 3:13)",
        "Golã é separada como cidade de refúgio (Deuteronômio 4:43)",
        "Os touros de Basã aparecem como figura de força no salmo (Salmos 22:12)"
      ],
      refs: ["NUM 21:33", "DEU 3:13", "DEU 4:43", "PSA 22:12", "AMO 4:1"],
      hoje: "Colinas de Golã e sul da Síria (Haurã)"
    },
    {
      id: "gileade",
      nome: "Gileade",
      eras: ["at"],
      cor: "#00897b",
      poligono: [[32.66, 35.62], [32.48, 36.02], [32.25, 35.98], [32.10, 35.80], [31.85, 35.78], [31.80, 35.58], [32.20, 35.60]],
      povos: "Quem habitava: amorreus do reino de Seom até c. 1400 a.C.; depois as tribos de Gade, Rúben e parte de Manassés.",
      resumo: "Região montanhosa a leste do Jordão, cortada pelo rio Jaboque. Era conhecida pelas pastagens e pelo bálsamo. Foi o lar de Jefté e de Elias, e serviu de refúgio a Davi durante a revolta de Absalão.",
      eventos: [
        "Jacó foge de Labão em direção à montanha de Gileade (Gênesis 31:21)",
        "Jacó atravessa o vau do Jaboque e luta em Peniel (Gênesis 32:22)",
        "Rúben e Gade pedem a terra por causa do gado (Números 32:1)",
        "Jefté, o gileadita, livra Israel dos amonitas (Juízes 11:1)",
        "Davi refugia-se em Maanaim (2 Samuel 17:24)",
        "Elias, o tisbita, de Gileade, apresenta-se a Acabe (1 Reis 17:1)"
      ],
      refs: ["GEN 31:21", "GEN 32:22", "NUM 32:1", "JDG 11:1", "1KI 17:1", "JER 8:22"],
      hoje: "Noroeste da Jordânia (Ajlun, Jerash, Salt)"
    },
    {
      id: "amom",
      nome: "Amom",
      eras: ["at"],
      cor: "#c2185b",
      poligono: [[32.22, 36.00], [32.25, 36.40], [31.75, 36.40], [31.70, 35.95], [31.85, 35.82], [32.08, 35.84]],
      povos: "Quem habitava: amonitas, descendentes de Ben-Ami, filho de Ló, com capital em Rabá.",
      resumo: "Pequeno reino a leste de Gileade, na borda do deserto, em torno de Rabá (hoje Amã). Os amonitas eram aparentados de Israel por Ló, mas foram adversários frequentes no período dos juízes e da monarquia.",
      eventos: [
        "Origem dos amonitas em Ben-Ami, filho de Ló (Gênesis 19:38)",
        "Jefté derrota os amonitas (Juízes 11:32)",
        "Naás, o amonita, cerca Jabes-Gileade e Saul a livra (1 Samuel 11:1)",
        "Joabe e Davi tomam Rabá (2 Samuel 12:26)"
      ],
      refs: ["GEN 19:38", "JDG 11:32", "1SA 11:1", "2SA 12:26", "AMO 1:13"],
      hoje: "Região de Amã, Jordânia"
    },
    {
      id: "moabe",
      nome: "Moabe",
      eras: ["at"],
      cor: "#8d6e63",
      poligono: [[31.78, 35.62], [31.68, 35.95], [31.40, 36.05], [31.00, 35.95], [30.98, 35.50], [31.30, 35.58], [31.60, 35.60]],
      povos: "Quem habitava: moabitas, descendentes de Moabe, filho de Ló; o planalto ao norte do Arnom foi também ocupado por Rúben.",
      resumo: "Planalto a leste do mar Morto, entre os ribeiros Arnom e Zerede, estendendo-se por vezes até a altura do monte Nebo. Nas campinas de Moabe Israel acampou antes de entrar em Canaã, e do monte Nebo Moisés viu a terra. Rute, bisavó de Davi, era moabita.",
      eventos: [
        "Origem dos moabitas em Moabe, filho de Ló (Gênesis 19:37)",
        "Israel acampa nas campinas de Moabe; episódio de Balaque e Balaão (Números 22:1)",
        "Moisés vê a terra do monte Nebo e morre em Moabe (Deuteronômio 34:1)",
        "Elimeleque e Noemi migram para Moabe; história de Rute (Rute 1:1)",
        "Mesa, rei de Moabe, rebela-se contra Israel (2 Reis 3:4)"
      ],
      refs: ["GEN 19:37", "NUM 22:1", "DEU 34:1", "DEU 34:5", "RUT 1:1", "2KI 3:4"],
      hoje: "Centro-oeste da Jordânia (Madaba, Kerak)"
    },
    {
      id: "edom",
      nome: "Edom (Seir)",
      eras: ["at"],
      cor: "#bf360c",
      poligono: [[30.95, 35.48], [30.95, 35.95], [30.20, 35.90], [29.60, 35.40], [29.58, 35.03], [30.20, 35.18], [30.60, 35.35]],
      povos: "Quem habitava: horeus e, depois, os edomitas, descendentes de Esaú, irmão de Jacó.",
      resumo: "Região montanhosa ao sul do mar Morto, a leste da Arabá, até o golfo de Ácaba. Edom recusou passagem a Israel no êxodo e foi dominado por Davi. Os profetas, em especial Obadias, anunciaram juízo sobre Edom por sua hostilidade a Judá.",
      eventos: [
        "Esaú habita na montanha de Seir (Gênesis 36:8)",
        "Edom nega passagem a Israel (Números 20:14)",
        "Davi põe guarnições em todo o Edom (2 Samuel 8:14)",
        "Amazias fere Edom no vale do Sal e toma Sela (2 Reis 14:7)",
        "Obadias profetiza contra Edom (Obadias 1:1)"
      ],
      refs: ["GEN 36:8", "NUM 20:14", "2SA 8:14", "2KI 14:7", "OBA 1:1"],
      hoje: "Sul da Jordânia (Tafila, Petra, Ácaba)"
    },
    {
      id: "neguebe",
      nome: "Neguebe",
      eras: ["at"],
      cor: "#d4a017",
      poligono: [[31.18, 34.48], [31.12, 34.75], [31.08, 35.35], [30.60, 35.28], [30.10, 35.12], [29.60, 34.98], [30.30, 34.60], [30.90, 34.42]],
      povos: "Quem habitava: amalequitas, queneus e clãs seminômades; os patriarcas peregrinaram ali (c. 2000 a.C.) e depois a região coube a Judá e Simeão.",
      resumo: "Região semiárida ao sul de Judá; o nome significa 'sul' ou 'terra seca'. Abraão, Isaque e Jacó viveram ali como peregrinos, em torno de Berseba e Gerar. Os espias entraram em Canaã por ali.",
      eventos: [
        "Abrão segue viagem em direção ao Neguebe (Gênesis 12:9)",
        "Agar e Ismael vagueiam pelo deserto de Berseba (Gênesis 21:14)",
        "Moisés envia os espias pelo Neguebe (Números 13:17)",
        "Os amalequitas invadem o Neguebe e queimam Ziclague (1 Samuel 30:1)"
      ],
      refs: ["GEN 12:9", "GEN 20:1", "GEN 21:14", "NUM 13:17", "1SA 30:1"],
      hoje: "Deserto do Neguev, sul de Israel"
    },
    {
      id: "sinai",
      nome: "Sinai",
      eras: ["at"],
      cor: "#b08d57",
      poligono: [[30.95, 32.65], [31.05, 33.60], [31.20, 34.20], [30.85, 34.38], [30.25, 34.58], [29.55, 34.88], [29.00, 34.62], [28.50, 34.46], [27.85, 34.25], [28.25, 33.68], [29.05, 33.15], [29.90, 32.68]],
      povos: "Quem habitava: amalequitas e outros nômades do deserto; mineradores egípcios exploravam cobre e turquesa. Israel peregrinou ali por quarenta anos (c. 1446 a 1406 a.C.).",
      resumo: "Península desértica entre o Egito e Canaã, com os desertos de Sur, Sim, Parã e Zim. Ali Israel recebeu a lei, construiu o tabernáculo e peregrinou após o êxodo. A localização exata do monte Sinai é debatida; a tradição o identifica com o Jebel Musa, no sul da península.",
      eventos: [
        "Moisés vê a sarça ardente em Horebe (Êxodo 3:1)",
        "O maná é dado no deserto de Sim (Êxodo 16:1)",
        "Israel chega ao deserto do Sinai (Êxodo 19:1)",
        "Deus pronuncia os Dez Mandamentos (Êxodo 20:1)",
        "Moisés quebra as tábuas por causa do bezerro de ouro (Êxodo 32:19)",
        "Israel parte do Sinai rumo a Parã (Números 10:12)"
      ],
      refs: ["EXO 3:1", "EXO 16:1", "EXO 19:1", "EXO 20:1", "EXO 32:19", "NUM 10:12"],
      hoje: "Península do Sinai, Egito"
    },
    {
      id: "egito",
      nome: "Egito",
      eras: ["at", "nt"],
      cor: "#f9a825",
      poligono: [[31.10, 29.95], [31.40, 30.50], [31.42, 31.15], [31.25, 31.55], [30.05, 31.45], [28.00, 31.05], [26.30, 32.95], [24.10, 33.10], [24.00, 32.70], [25.90, 31.90], [27.50, 30.60], [29.30, 30.50], [30.30, 30.60]],
      povos: "Quem habitava: egípcios, governados pelos faraós; no período do NT, província romana com grande comunidade judaica em Alexandria.",
      resumo: "Civilização do delta e do vale do Nilo, potência vizinha de Israel em todo o AT. Foi refúgio na fome para Abraão e para a família de Jacó, e depois casa de servidão, de onde Deus tirou Israel no êxodo (c. 1446 a.C.). No NT, José e Maria fugiram para lá com o menino Jesus.",
      eventos: [
        "Abrão desce ao Egito por causa da fome (Gênesis 12:10)",
        "José é posto sobre toda a terra do Egito (Gênesis 41:41)",
        "Israel sai do Egito depois de 430 anos (Êxodo 12:41)",
        "Sisaque, rei do Egito, sobe contra Jerusalém (1 Reis 14:25)",
        "O remanescente de Judá leva Jeremias para o Egito (Jeremias 43:7)",
        "José, Maria e o menino fogem para o Egito (Mateus 2:14)"
      ],
      refs: ["GEN 12:10", "GEN 41:41", "EXO 12:41", "1KI 14:25", "HOS 11:1", "MAT 2:14"],
      hoje: "Egito (delta e vale do Nilo)"
    },
    {
      id: "gosen",
      nome: "Gósen",
      eras: ["at"],
      cor: "#7cb342",
      poligono: [[31.00, 31.60], [31.00, 31.95], [30.90, 32.25], [30.55, 32.28], [30.42, 31.95], [30.40, 31.58]],
      povos: "Quem habitava: a família de Jacó e seus descendentes, os israelitas, de c. 1876 a 1446 a.C., ao lado de egípcios e outros semitas do delta.",
      resumo: "Região de pastagens no delta oriental do Nilo, dada por Faraó à família de José. Ali Israel se multiplicou e depois foi escravizado, construindo as cidades de Pitom e Ramessés. Foi poupada de várias pragas e foi o ponto de partida do êxodo. A delimitação exata é incerta.",
      eventos: [
        "José manda buscar o pai para habitar em Gósen (Gênesis 45:10)",
        "Israel habita em Gósen e se multiplica (Gênesis 47:27)",
        "Os israelitas edificam Pitom e Ramessés (Êxodo 1:11)",
        "Gósen é poupada da praga das moscas (Êxodo 8:22)",
        "Israel parte de Ramessés para Sucote (Êxodo 12:37)"
      ],
      refs: ["GEN 45:10", "GEN 47:6", "GEN 47:27", "EXO 1:11", "EXO 8:22", "EXO 12:37"],
      hoje: "Delta oriental do Nilo, Egito (províncias de Sharqia e Ismaília)"
    },
    {
      id: "midia",
      nome: "Midiã",
      eras: ["at"],
      cor: "#5d4037",
      poligono: [[29.38, 35.05], [29.30, 36.20], [28.00, 36.80], [27.00, 36.60], [27.45, 35.85], [28.20, 34.85], [28.80, 34.92]],
      povos: "Quem habitava: midianitas, descendentes de Midiã, filho de Abraão e Quetura; pastores e caravaneiros seminômades.",
      resumo: "Região a leste do golfo de Ácaba, no noroeste da Arábia, embora os midianitas circulassem também pelo Sinai e pela Transjordânia. Moisés viveu ali quarenta anos e casou-se com Zípora, filha de Jetro. Mais tarde os midianitas oprimiram Israel e foram vencidos por Gideão.",
      eventos: [
        "Midiã nasce de Abraão e Quetura (Gênesis 25:2)",
        "Mercadores midianitas levam José ao Egito (Gênesis 37:28)",
        "Moisés foge de Faraó para a terra de Midiã (Êxodo 2:15)",
        "Jetro, sacerdote de Midiã, visita Moisés (Êxodo 18:1)",
        "Israel guerreia contra os midianitas (Números 31:7)",
        "Os midianitas oprimem Israel por sete anos (Juízes 6:1)"
      ],
      refs: ["GEN 25:2", "GEN 37:28", "EXO 2:15", "EXO 18:1", "NUM 31:7", "JDG 6:1"],
      hoje: "Noroeste da Arábia Saudita (região de Tabuk)"
    },
    {
      id: "assiria",
      nome: "Assíria",
      eras: ["at"],
      cor: "#283593",
      poligono: [[37.20, 42.20], [37.10, 43.80], [36.40, 44.60], [35.40, 44.50], [35.00, 43.60], [35.30, 42.60], [36.30, 42.00]],
      povos: "Quem habitava: assírios, povo semita do alto Tigre, com capitais em Assur, Calá e Nínive; império dominante de c. 900 a 612 a.C.",
      resumo: "Império do norte da Mesopotâmia, às margens do Tigre. Conquistou o reino do Norte em 722 a.C. e deportou sua população, e ameaçou Jerusalém nos dias de Ezequias. Jonas pregou em Nínive e Naum anunciou sua queda, que ocorreu em 612 a.C.",
      eventos: [
        "Nínive e Calá são edificadas na terra de Assur (Gênesis 10:11)",
        "Jonas prega e os ninivitas creem em Deus (Jonas 3:5)",
        "Tiglate-Pileser leva cativos da Galileia e de Gileade (2 Reis 15:29)",
        "O rei da Assíria toma Samaria e deporta Israel (2 Reis 17:6)",
        "Senaqueribe retira-se e volta para Nínive (2 Reis 19:36)",
        "Naum anuncia a ruína de Nínive (Naum 3:7)"
      ],
      refs: ["GEN 10:11", "JON 3:5", "2KI 15:29", "2KI 17:6", "2KI 19:36", "ISA 10:5"],
      hoje: "Norte do Iraque (Mossul, Erbil)"
    },
    {
      id: "babilonia",
      nome: "Babilônia (Caldeia)",
      eras: ["at"],
      cor: "#4527a0",
      poligono: [[33.70, 43.80], [33.60, 44.80], [32.60, 45.90], [31.50, 47.10], [30.50, 47.60], [30.30, 47.00], [30.70, 45.80], [31.60, 44.50], [32.60, 43.90]],
      povos: "Quem habitava: sumérios e acádios na antiguidade (terra de Sinar); depois babilônios e caldeus, cujo império dominou de 626 a 539 a.C.",
      resumo: "Planície do baixo Tigre e Eufrates, chamada Sinar nos primeiros capítulos de Gênesis. Dali saiu Abraão, de Ur dos caldeus. Sob Nabucodonosor, Babilônia destruiu Jerusalém e o templo em 586 a.C. e levou Judá ao exílio de setenta anos. Daniel e Ezequiel ministraram ali.",
      eventos: [
        "A torre de Babel e a confusão das línguas (Gênesis 11:9)",
        "Terá e Abrão saem de Ur dos caldeus (Gênesis 11:31)",
        "Nabucodonosor cerca Jerusalém; Daniel é levado (Daniel 1:1)",
        "Jerusalém é deportada para Babilônia (2 Reis 24:14)",
        "Jeremias anuncia setenta anos de cativeiro (Jeremias 29:10)",
        "Belsazar é morto e Babilônia cai, 539 a.C. (Daniel 5:30)"
      ],
      refs: ["GEN 11:9", "GEN 11:31", "DAN 1:1", "2KI 24:14", "JER 29:10", "PSA 137:1"],
      hoje: "Centro e sul do Iraque"
    },
    {
      id: "persia",
      nome: "Pérsia e Elão",
      eras: ["at"],
      cor: "#ad1457",
      poligono: [[33.00, 47.30], [32.80, 49.50], [31.50, 52.00], [30.50, 54.00], [28.80, 54.00], [28.20, 52.50], [29.30, 51.20], [30.40, 50.40], [30.80, 49.20], [30.90, 48.30], [31.80, 47.60]],
      povos: "Quem habitava: elamitas desde a antiguidade, na planície de Susã; persas no planalto ao sudeste. O Império Persa dominou de 539 a 331 a.C.",
      resumo: "Elão é a planície a leste de Babilônia, com capital em Susã; a Pérsia propriamente dita fica no planalto ao sudeste. Ciro, rei da Pérsia, conquistou Babilônia em 539 a.C. e autorizou o retorno dos judeus. As histórias de Ester e de Neemias passam-se na corte de Susã.",
      eventos: [
        "Quedorlaomer, rei de Elão, guerreia nos dias de Abrão (Gênesis 14:1)",
        "Isaías chama Ciro de ungido do Senhor (Isaías 45:1)",
        "Ciro decreta o retorno dos exilados, c. 538 a.C. (Esdras 1:1)",
        "Daniel tem a visão do carneiro e do bode em Susã (Daniel 8:2)",
        "Assuero reina em Susã; história de Ester (Ester 1:2)",
        "Neemias, copeiro em Susã, recebe notícias de Jerusalém (Neemias 1:1)"
      ],
      refs: ["GEN 14:1", "ISA 45:1", "EZR 1:1", "DAN 8:2", "EST 1:2", "NEH 1:1"],
      hoje: "Sudoeste do Irã (Cuzistão e Fars)"
    },
    {
      id: "media",
      nome: "Média",
      eras: ["at"],
      cor: "#1565c0",
      poligono: [[36.80, 46.50], [36.50, 49.50], [35.80, 51.80], [34.20, 51.50], [33.40, 49.80], [33.30, 47.60], [34.50, 46.20], [35.80, 45.90]],
      povos: "Quem habitava: medos, povo iraniano dos montes Zagros, com capital em Ecbátana (Acmeta); unidos aos persas sob Ciro a partir de c. 550 a.C.",
      resumo: "Região montanhosa ao norte de Elão e a leste da Assíria. Parte dos israelitas deportados em 722 a.C. foi assentada nas cidades dos medos. Aliados aos babilônios, os medos derrubaram Nínive; depois, unidos aos persas, tomaram Babilônia.",
      eventos: [
        "Israelitas deportados são postos nas cidades dos medos (2 Reis 17:6)",
        "Isaías anuncia que os medos se levantarão contra Babilônia (Isaías 13:17)",
        "O reino de Belsazar é dado aos medos e persas (Daniel 5:28)",
        "Dario, o medo, recebe o reino (Daniel 5:31)",
        "O decreto de Ciro é achado em Acmeta, na Média (Esdras 6:2)"
      ],
      refs: ["2KI 17:6", "ISA 13:17", "DAN 5:28", "DAN 5:31", "EZR 6:2", "EST 1:3"],
      hoje: "Noroeste do Irã (Hamadã, Curdistão iraniano)"
    },
    {
      id: "hatti",
      nome: "Hatti (terra dos heteus)",
      eras: ["at"],
      cor: "#00695c",
      poligono: [[40.80, 33.00], [40.90, 35.80], [39.80, 37.20], [38.30, 36.60], [37.80, 34.80], [38.20, 32.80], [39.50, 32.20]],
      povos: "Quem habitava: hititas (heteus), cujo império, com capital em Hatusa, dominou a Anatólia de c. 1650 a 1200 a.C.; depois, pequenos reinos neo-hititas no norte da Síria.",
      resumo: "Planalto central da Anatólia, sede do Império Hitita. O AT menciona heteus vivendo em Canaã nos dias de Abraão e de Davi e fala dos reis dos heteus ao norte. A relação exata entre os heteus de Canaã e o império da Anatólia é discutida pelos estudiosos.",
      eventos: [
        "Hete é listado entre os filhos de Canaã (Gênesis 10:15)",
        "Abraão compra a cova de Macpela de Efrom, o heteu (Gênesis 23:10)",
        "A terra dos heteus é citada nos limites prometidos a Josué (Josué 1:4)",
        "Urias, o heteu, serve no exército de Davi (2 Samuel 11:3)",
        "Salomão negocia carros e cavalos com os reis dos heteus (1 Reis 10:29)"
      ],
      refs: ["GEN 10:15", "GEN 23:10", "JOS 1:4", "2SA 11:3", "1KI 10:29", "2KI 7:6"],
      hoje: "Centro da Turquia (região de Çorum, Ancara, Kayseri)"
    },
    {
      id: "arabia",
      nome: "Arábia",
      eras: ["at"],
      cor: "#9e9d24",
      poligono: [[31.00, 37.50], [31.50, 40.50], [29.50, 43.50], [27.00, 43.00], [25.50, 40.00], [26.00, 37.60], [27.20, 37.00], [29.00, 36.80]],
      povos: "Quem habitava: tribos árabes nômades, muitas descendentes de Ismael (Quedar, Nebaiote, Temá, Dumá) e de Quetura (Dedã), os 'filhos do Oriente'.",
      resumo: "Deserto e oásis a leste e sudeste de Israel. Suas tribos viviam do pastoreio e das caravanas de especiarias e ouro. O AT menciona tributos dos reis da Arábia a Salomão e oráculos proféticos sobre Quedar, Dedã e Temá. No NT, Paulo relata ter ido à Arábia após sua conversão.",
      eventos: [
        "Os filhos de Ismael são listados: Nebaiote, Quedar e outros (Gênesis 25:13)",
        "As caravanas de Temá são citadas por Jó (Jó 6:19)",
        "Os reis da Arábia trazem ouro a Salomão (1 Reis 10:15)",
        "Os árabes trazem rebanhos a Josafá (2 Crônicas 17:11)",
        "Isaías pronuncia a sentença contra a Arábia (Isaías 21:13)"
      ],
      refs: ["GEN 25:13", "JOB 6:19", "1KI 10:15", "2CH 17:11", "ISA 21:13", "GAL 1:17"],
      hoje: "Norte da Arábia Saudita e leste da Jordânia"
    },

    // ===================== NOVO TESTAMENTO =====================
    {
      id: "galileia",
      nome: "Galileia",
      eras: ["nt"],
      cor: "#2e7d32",
      poligono: [[33.05, 35.15], [33.10, 35.60], [32.88, 35.62], [32.70, 35.58], [32.50, 35.55], [32.55, 35.20], [32.72, 35.15], [32.90, 35.13]],
      povos: "Quem habitava: judeus e uma população mista de gentios (gregos, sírios, fenícios); governada por Herodes Antipas de 4 a.C. a 39 d.C.",
      resumo: "Região ao norte da Palestina, a oeste do mar da Galileia. Jesus cresceu em Nazaré e fez de Cafarnaum a base de seu ministério; a maior parte de seus milagres e ensinos registrados nos Evangelhos sinóticos aconteceu ali. Quase todos os apóstolos eram galileus.",
      eventos: [
        "O anjo Gabriel é enviado a Nazaré (Lucas 1:26)",
        "Jesus transforma água em vinho em Caná (João 2:1)",
        "Jesus chama os primeiros discípulos junto ao mar (Marcos 1:16)",
        "O Sermão do Monte (Mateus 5:1)",
        "Jesus acalma a tempestade (Marcos 4:39)",
        "O Cristo ressurreto encontra os onze na Galileia (Mateus 28:16)"
      ],
      refs: ["LUK 1:26", "MAT 4:15", "MAT 4:23", "JOH 2:1", "MAR 1:16", "MAT 28:16"],
      hoje: "Norte de Israel"
    },
    {
      id: "samaria",
      nome: "Samaria",
      eras: ["nt"],
      cor: "#ef6c00",
      poligono: [[32.52, 35.05], [32.50, 35.52], [32.05, 35.50], [32.00, 35.00], [32.20, 34.90], [32.45, 34.95]],
      povos: "Quem habitava: samaritanos, descendentes dos israelitas remanescentes misturados com povos trazidos pela Assíria; adoravam no monte Gerizim.",
      resumo: "Região central entre a Galileia e a Judeia. Havia hostilidade antiga entre judeus e samaritanos, mas Jesus atravessou a região, conversou com a mulher samaritana e fez de um samaritano o exemplo de amor ao próximo. Depois de Pentecostes, o evangelho chegou ali pela pregação de Filipe.",
      eventos: [
        "Jesus conversa com a mulher samaritana no poço de Jacó (João 4:5)",
        "Uma aldeia samaritana recusa receber Jesus (Lucas 9:52)",
        "Jesus conta a parábola do bom samaritano (Lucas 10:33)",
        "Dez leprosos são curados entre Samaria e Galileia (Lucas 17:11)",
        "Filipe prega Cristo na cidade de Samaria (Atos 8:5)"
      ],
      refs: ["JOH 4:4", "JOH 4:5", "LUK 9:52", "LUK 17:11", "ACT 1:8", "ACT 8:5"],
      hoje: "Norte da Cisjordânia e parte do centro de Israel"
    },
    {
      id: "judeia",
      nome: "Judeia",
      eras: ["nt"],
      cor: "#a8324a",
      poligono: [[31.98, 34.78], [32.00, 35.50], [31.76, 35.50], [31.50, 35.40], [31.48, 34.95], [31.60, 34.60], [31.80, 34.66]],
      povos: "Quem habitava: judeus; governada por Herodes, o Grande (37 a 4 a.C.), por Arquelau e, a partir de 6 d.C., por prefeitos romanos como Pôncio Pilatos.",
      resumo: "Região sul da Palestina, com Jerusalém e o templo, centro religioso do judaísmo. Jesus nasceu em Belém, foi batizado no Jordão, e em Jerusalém foi crucificado e ressuscitou. Ali nasceu a igreja no dia de Pentecostes.",
      eventos: [
        "Jesus nasce em Belém da Judeia (Mateus 2:1)",
        "João Batista prega no deserto da Judeia (Mateus 3:1)",
        "Jesus ressuscita Lázaro em Betânia (João 11:43)",
        "Jesus é crucificado no lugar chamado Caveira (Lucas 23:33)",
        "O anjo anuncia a ressurreição (Lucas 24:6)",
        "O Espírito Santo desce no dia de Pentecostes (Atos 2:1)"
      ],
      refs: ["MAT 2:1", "LUK 2:4", "MAT 3:1", "LUK 23:33", "LUK 24:6", "ACT 2:1"],
      hoje: "Centro de Israel e sul da Cisjordânia (Jerusalém, Belém, Hebrom)"
    },
    {
      id: "pereia",
      nome: "Pereia (além do Jordão)",
      eras: ["nt"],
      cor: "#00897b",
      poligono: [[32.40, 35.60], [32.35, 35.85], [31.90, 35.85], [31.50, 35.78], [31.50, 35.60], [31.76, 35.57], [32.00, 35.58]],
      povos: "Quem habitava: judeus em sua maioria; governada por Herodes Antipas junto com a Galileia.",
      resumo: "Faixa a leste do Jordão, chamada nos Evangelhos de 'além do Jordão'; o nome Pereia vem do historiador Josefo. Os judeus da Galileia costumavam passar por ali para ir a Jerusalém, evitando Samaria. João batizou naquela margem e Jesus ministrou ali no fim de seu ministério.",
      eventos: [
        "João batiza em Betânia, além do Jordão (João 1:28)",
        "Multidões de além do Jordão seguem Jesus (Mateus 4:25)",
        "Jesus retira-se para além do Jordão (João 10:40)",
        "Jesus ensina sobre o casamento e abençoa as crianças (Marcos 10:1)"
      ],
      refs: ["JOH 1:28", "MAT 4:25", "JOH 10:40", "MAT 19:1", "MAR 10:1"],
      hoje: "Margem leste do Jordão, oeste da Jordânia"
    },
    {
      id: "decapolis",
      nome: "Decápolis",
      eras: ["nt"],
      cor: "#6a1b9a",
      poligono: [[32.95, 35.68], [32.90, 36.60], [32.20, 36.50], [31.88, 36.10], [31.92, 35.88], [32.38, 35.88], [32.42, 35.62], [32.70, 35.66]],
      povos: "Quem habitava: população majoritariamente gentia, de cultura grega, em uma liga de dez cidades (Gadara, Gerasa, Hipos, Pela, Filadélfia, Citópolis e outras).",
      resumo: "Conjunto de cidades helenísticas, a maioria a leste do Jordão e do mar da Galileia. Era território gentio, o que explica a criação de porcos no relato do endemoninhado. Jesus esteve ali mais de uma vez e sua fama se espalhou pela região.",
      eventos: [
        "Multidões da Decápolis seguem Jesus (Mateus 4:25)",
        "Jesus liberta o endemoninhado na terra dos gerasenos (Marcos 5:1)",
        "O homem liberto anuncia na Decápolis o que Jesus lhe fez (Marcos 5:20)",
        "Jesus cura um surdo e gago (Marcos 7:32)"
      ],
      refs: ["MAT 4:25", "MAR 5:1", "MAR 5:20", "MAR 7:31", "MAR 7:32"],
      hoje: "Norte da Jordânia, sul da Síria e Colinas de Golã"
    },
    {
      id: "idumeia",
      nome: "Idumeia",
      eras: ["nt"],
      cor: "#bf360c",
      poligono: [[31.55, 34.55], [31.46, 34.95], [31.48, 35.38], [31.10, 35.36], [31.00, 35.10], [31.05, 34.60], [31.30, 34.40]],
      povos: "Quem habitava: idumeus, descendentes dos edomitas que migraram para o sul de Judá depois do exílio; incorporados ao judaísmo no século II a.C.",
      resumo: "Região ao sul da Judeia, no norte do Neguebe; é a forma grega do nome Edom. A família de Herodes, o Grande, era de origem idumeia. No NT aparece uma única vez pelo nome, entre as regiões de onde vinham multidões para ouvir Jesus.",
      eventos: [
        "Esaú, que é Edom, dá origem ao povo (Gênesis 36:1)",
        "Malaquias fala da desolação de Edom (Malaquias 1:4)",
        "Herodes, de família idumeia, reina quando Jesus nasce (Mateus 2:1)",
        "Multidões da Idumeia vêm a Jesus (Marcos 3:8)"
      ],
      refs: ["MAR 3:8", "MAT 2:1", "GEN 36:1", "MAL 1:4"],
      hoje: "Sul de Israel e sul da Cisjordânia (norte do Neguev)"
    },
    {
      id: "siria-fenicia",
      nome: "Síria e Fenícia",
      eras: ["nt"],
      cor: "#3949ab",
      poligono: [[36.55, 36.20], [36.50, 37.50], [35.00, 37.80], [33.30, 36.80], [33.12, 35.70], [33.10, 35.14], [33.30, 35.25], [33.88, 35.52], [34.45, 35.85], [35.50, 35.85], [36.10, 35.98]],
      povos: "Quem habitava: sírios, fenícios e gregos, com grandes comunidades judaicas em Antioquia e Damasco; província romana da Síria desde 64 a.C.",
      resumo: "Província romana ao norte da Palestina, que incluía o litoral fenício (Tiro e Sidom), Damasco e a capital Antioquia. Jesus esteve na região de Tiro e Sidom. Saulo converteu-se no caminho de Damasco, e Antioquia tornou-se a base das viagens missionárias de Paulo.",
      eventos: [
        "A fama de Jesus corre por toda a Síria (Mateus 4:24)",
        "Jesus atende a mulher siro-fenícia (Marcos 7:26)",
        "Saulo é alcançado por Cristo perto de Damasco (Atos 9:3)",
        "Os dispersos pregam na Fenícia e em Antioquia (Atos 11:19)",
        "Em Antioquia os discípulos são chamados cristãos pela primeira vez (Atos 11:26)",
        "A igreja de Antioquia envia Barnabé e Saulo (Atos 13:3)"
      ],
      refs: ["MAT 4:24", "MAR 7:26", "MAT 15:21", "ACT 9:3", "ACT 11:26", "ACT 13:3"],
      hoje: "Líbano, oeste da Síria e província de Hatay (Turquia)"
    },
    {
      id: "asia",
      nome: "Ásia (província romana)",
      eras: ["nt"],
      cor: "#00838f",
      poligono: [[40.15, 26.90], [40.20, 29.00], [39.40, 30.60], [38.00, 30.40], [37.00, 29.50], [37.00, 28.40], [37.10, 27.60], [37.90, 27.32], [38.45, 27.15], [39.10, 26.95], [39.62, 26.98], [39.62, 26.35], [40.00, 26.30]],
      povos: "Quem habitava: gregos, lídios, frígios e muitos judeus da dispersão; província romana desde 133 a.C., com capital em Éfeso.",
      resumo: "Província no oeste da Ásia Menor, não o continente. Paulo ficou cerca de três anos em Éfeso, de onde a palavra se espalhou por toda a província. Ali estavam as sete igrejas do Apocalipse, além de Colossos e Trôade.",
      eventos: [
        "O Espírito impede Paulo de pregar na Ásia na segunda viagem (Atos 16:6)",
        "Paulo chega a Éfeso e ensina por dois anos (Atos 19:1)",
        "Todos os que habitavam na Ásia ouvem a palavra (Atos 19:10)",
        "O tumulto dos ourives em Éfeso (Atos 19:23)",
        "Paulo despede-se dos presbíteros de Éfeso em Mileto (Atos 20:17)",
        "João escreve às sete igrejas que estão na Ásia (Apocalipse 1:4)"
      ],
      refs: ["ACT 16:6", "ACT 19:1", "ACT 19:10", "ACT 20:17", "REV 1:4", "REV 1:11"],
      hoje: "Oeste da Turquia (Esmirna, Aydın, Denizli, Manisa)"
    },
    {
      id: "galacia",
      nome: "Galácia",
      eras: ["nt"],
      cor: "#c2185b",
      poligono: [[40.60, 31.50], [40.80, 34.50], [39.50, 34.80], [38.20, 34.00], [37.20, 33.80], [37.30, 32.20], [38.10, 30.80], [39.30, 30.90]],
      povos: "Quem habitava: gálatas (celtas estabelecidos no século III a.C.) ao norte; frígios, licaônios, gregos e judeus ao sul; província romana desde 25 a.C.",
      resumo: "Província no centro da Ásia Menor. Em sua parte sul ficavam Antioquia da Pisídia, Icônio, Listra e Derbe, evangelizadas por Paulo e Barnabé na primeira viagem missionária. A carta aos Gálatas foi dirigida às igrejas da região; discute-se se às do sul ou às do norte.",
      eventos: [
        "Paulo prega na sinagoga de Antioquia da Pisídia (Atos 13:14)",
        "Muitos creem em Icônio (Atos 14:1)",
        "Paulo é apedrejado em Listra (Atos 14:19)",
        "Timóteo junta-se a Paulo em Listra (Atos 16:1)",
        "Paulo percorre a região da Galácia fortalecendo os discípulos (Atos 18:23)"
      ],
      refs: ["ACT 13:14", "ACT 14:1", "ACT 14:19", "ACT 16:1", "ACT 18:23", "GAL 1:2"],
      hoje: "Centro da Turquia (Ancara, Cônia)"
    },
    {
      id: "capadocia",
      nome: "Capadócia",
      eras: ["nt"],
      cor: "#8d6e63",
      poligono: [[39.80, 35.00], [39.90, 37.80], [38.80, 38.60], [37.90, 37.20], [37.60, 35.20], [37.50, 34.20], [38.30, 34.20], [39.40, 34.95]],
      povos: "Quem habitava: capadócios, de cultura anatólia e persa helenizada, com comunidades judaicas; província romana desde 17 d.C.",
      resumo: "Planalto no leste da Ásia Menor. O NT a menciona duas vezes: havia judeus da Capadócia em Jerusalém no dia de Pentecostes, e Pedro escreveu aos crentes dispersos ali. Tornou-se depois um importante centro do cristianismo antigo.",
      eventos: [
        "Reino cliente transformado em província romana por Tibério, 17 d.C. (contexto histórico)",
        "Judeus da Capadócia ouvem os apóstolos em Pentecostes (Atos 2:9)",
        "Pedro escreve aos eleitos dispersos na Capadócia (1 Pedro 1:1)"
      ],
      refs: ["ACT 2:9", "1PE 1:1"],
      hoje: "Centro-leste da Turquia (Kayseri, Nevşehir, Sivas)"
    },
    {
      id: "cilicia",
      nome: "Cilícia",
      eras: ["nt"],
      cor: "#f9a825",
      poligono: [[37.40, 34.30], [37.50, 36.00], [37.00, 36.50], [36.65, 36.25], [36.95, 35.95], [36.62, 35.40], [36.85, 34.65], [36.40, 33.95], [36.12, 32.85], [36.60, 32.40], [37.00, 33.00]],
      povos: "Quem habitava: cilícios, gregos e uma comunidade judaica significativa em Tarso; sob domínio romano desde o século I a.C.",
      resumo: "Região costeira no sudeste da Ásia Menor, entre os montes Tauro e o Mediterrâneo. Tarso, sua principal cidade, era a terra natal de Paulo. O apóstolo voltou para lá depois da conversão e passou pela região fortalecendo as igrejas.",
      eventos: [
        "Judeus da Cilícia disputam com Estêvão (Atos 6:9)",
        "Os irmãos enviam Saulo a Tarso (Atos 9:30)",
        "Paulo relata ter ido às regiões da Síria e da Cilícia (Gálatas 1:21)",
        "Paulo e Silas percorrem a Síria e a Cilícia (Atos 15:41)",
        "Paulo declara-se judeu de Tarso da Cilícia (Atos 21:39)"
      ],
      refs: ["ACT 6:9", "ACT 9:30", "GAL 1:21", "ACT 15:41", "ACT 21:39", "ACT 22:3"],
      hoje: "Sul da Turquia (Mersin, Adana)"
    },
    {
      id: "macedonia",
      nome: "Macedônia",
      eras: ["nt"],
      cor: "#283593",
      poligono: [[41.80, 21.00], [41.60, 23.50], [41.30, 24.80], [40.95, 24.80], [40.80, 23.80], [40.70, 23.00], [40.72, 22.70], [40.50, 22.45], [40.00, 22.40], [39.90, 21.20], [40.60, 20.60]],
      povos: "Quem habitava: macedônios e gregos, com colonos romanos em Filipos e comunidades judaicas em Tessalônica e Bereia; província romana desde 146 a.C.",
      resumo: "Província no norte da Grécia, antigo reino de Alexandre, o Grande. Foi a primeira região da Europa evangelizada por Paulo, depois da visão em Trôade. Ali nasceram as igrejas de Filipos, Tessalônica e Bereia, elogiadas por sua generosidade.",
      eventos: [
        "Paulo tem a visão do homem macedônio (Atos 16:9)",
        "Lídia crê em Filipos (Atos 16:14)",
        "Paulo e Silas oram e cantam na prisão (Atos 16:25)",
        "Paulo anuncia Cristo na sinagoga de Tessalônica (Atos 17:1)",
        "Os bereanos examinam as Escrituras (Atos 17:11)",
        "As igrejas da Macedônia contribuem com generosidade (2 Coríntios 8:1)"
      ],
      refs: ["ACT 16:9", "ACT 16:12", "ACT 16:14", "ACT 17:1", "ACT 17:11", "2CO 8:1"],
      hoje: "Norte da Grécia, Macedônia do Norte e parte da Albânia"
    },
    {
      id: "acaia",
      nome: "Acaia",
      eras: ["nt"],
      cor: "#558b2f",
      poligono: [[39.20, 21.00], [39.30, 22.80], [38.60, 23.60], [37.75, 23.95], [37.95, 23.62], [37.90, 23.00], [37.40, 23.20], [36.80, 22.90], [36.60, 22.40], [36.90, 21.80], [37.70, 21.40], [38.18, 21.72], [38.40, 21.40]],
      povos: "Quem habitava: gregos, com colonos romanos e judeus em Corinto; província romana desde 27 a.C., com capital em Corinto.",
      resumo: "Província que abrangia o centro e o sul da Grécia, incluindo Atenas e o Peloponeso. Paulo pregou no Areópago de Atenas e ficou um ano e meio em Corinto, onde fundou a igreja que recebeu duas de suas cartas. De Corinto ele escreveu a carta aos Romanos.",
      eventos: [
        "Paulo discursa no Areópago, em Atenas (Atos 17:22)",
        "Paulo chega a Corinto e encontra Áquila e Priscila (Atos 18:1)",
        "Paulo permanece um ano e seis meses em Corinto (Atos 18:11)",
        "Paulo é levado diante de Gálio, procônsul da Acaia (Atos 18:12)",
        "A Macedônia e a Acaia fazem coleta para os santos de Jerusalém (Romanos 15:26)"
      ],
      refs: ["ACT 17:22", "ACT 18:1", "ACT 18:11", "ACT 18:12", "ROM 15:26", "2CO 1:1"],
      hoje: "Centro e sul da Grécia (Ática, Peloponeso)"
    },
    {
      id: "italia",
      nome: "Itália",
      eras: ["nt"],
      cor: "#ad1457",
      poligono: [[45.30, 9.00], [45.40, 12.20], [44.20, 12.35], [43.60, 13.45], [42.40, 14.10], [41.10, 16.80], [40.40, 18.10], [40.45, 17.20], [39.90, 16.50], [38.15, 15.75], [39.30, 16.10], [40.85, 14.25], [41.80, 12.35], [43.50, 10.40]],
      povos: "Quem habitava: romanos e demais povos itálicos, com gregos no sul e uma grande comunidade judaica em Roma; centro do Império Romano.",
      resumo: "Península sede do Império Romano, que dominava todo o mundo do NT. Paulo escreveu à igreja de Roma antes de conhecê-la e chegou ali como prisioneiro, c. 60 d.C., depois do naufrágio em Malta. Em Roma ele pregou por dois anos em casa alugada.",
      eventos: [
        "Áquila e Priscila deixam a Itália por ordem de Cláudio (Atos 18:2)",
        "É decidido que Paulo navegue para a Itália (Atos 27:1)",
        "Paulo desembarca em Putéoli (Atos 28:13)",
        "Paulo chega a Roma sob custódia (Atos 28:16)",
        "Paulo prega por dois anos em casa alugada (Atos 28:30)"
      ],
      refs: ["ACT 18:2", "ACT 27:1", "ACT 28:13", "ACT 28:16", "ACT 28:30", "ROM 1:7"],
      hoje: "Itália"
    },
    {
      id: "chipre",
      nome: "Chipre",
      eras: ["nt"],
      cor: "#00695c",
      poligono: [[35.05, 32.45], [35.32, 32.95], [35.32, 33.60], [35.55, 34.20], [35.18, 33.88], [34.98, 33.95], [34.92, 33.60], [34.70, 33.05], [34.78, 32.45]],
      povos: "Quem habitava: gregos e fenícios, com comunidades judaicas; província senatorial romana, governada por um procônsul em Pafos.",
      resumo: "Ilha no Mediterrâneo oriental, chamada Quitim no AT. Era a terra natal de Barnabé e foi a primeira parada da primeira viagem missionária. Ali o procônsul Sérgio Paulo creu, e Barnabé voltou à ilha com João Marcos.",
      eventos: [
        "Barnabé, levita natural de Chipre, é apresentado (Atos 4:36)",
        "Crentes de Chipre e de Cirene pregam aos gregos em Antioquia (Atos 11:20)",
        "Barnabé e Saulo navegam para Chipre (Atos 13:4)",
        "O procônsul Sérgio Paulo crê em Pafos (Atos 13:12)",
        "Barnabé leva Marcos e navega para Chipre (Atos 15:39)"
      ],
      refs: ["ACT 4:36", "ACT 11:20", "ACT 13:4", "ACT 13:6", "ACT 13:12", "ACT 15:39"],
      hoje: "Chipre"
    },
    {
      id: "creta",
      nome: "Creta",
      eras: ["nt"],
      cor: "#5d4037",
      poligono: [[35.45, 23.65], [35.45, 24.05], [35.35, 24.50], [35.30, 25.15], [35.15, 25.65], [35.15, 26.20], [35.04, 26.00], [35.00, 25.00], [35.25, 24.20], [35.28, 23.70]],
      povos: "Quem habitava: cretenses, de língua grega, com comunidades judaicas; parte da província romana de Creta e Cirene.",
      resumo: "Grande ilha ao sul do mar Egeu, provavelmente a Caftor do AT. Havia cretenses em Jerusalém no dia de Pentecostes. O navio que levava Paulo a Roma costeou a ilha, e Paulo deixou Tito ali para organizar as igrejas.",
      eventos: [
        "Cretenses ouvem as grandezas de Deus em Pentecostes (Atos 2:11)",
        "O navio de Paulo navega a sotavento de Creta (Atos 27:7)",
        "Paulo chega a Bons Portos (Atos 27:8)",
        "O vento Euroaquilão arrasta o navio (Atos 27:14)",
        "Tito é deixado em Creta para constituir presbíteros (Tito 1:5)"
      ],
      refs: ["ACT 2:11", "ACT 27:7", "ACT 27:8", "ACT 27:14", "TIT 1:5", "TIT 1:12"],
      hoje: "Ilha de Creta, Grécia"
    }
  ],

  cidades: [
    { nome: "Jerusalém", lat: 31.78, lng: 35.23, eras: ["at", "nt"], resumo: "Capital de Davi e sede do templo; cidade da crucificação e ressurreição de Jesus e do nascimento da igreja.", refs: ["2SA 5:7", "PSA 122:6", "ACT 2:5"] },
    { nome: "Belém", lat: 31.70, lng: 35.20, eras: ["at", "nt"], resumo: "Cidade de Davi e cenário do livro de Rute; lugar do nascimento de Jesus, conforme a profecia de Miqueias.", refs: ["MIC 5:2", "LUK 2:4", "MAT 2:1"] },
    { nome: "Hebrom", lat: 31.53, lng: 35.10, eras: ["at"], resumo: "Morada de Abraão e local da cova de Macpela, sepultura dos patriarcas. Primeira capital de Davi, por sete anos e meio.", refs: ["GEN 23:19", "2SA 2:11", "2SA 5:3"] },
    { nome: "Berseba", lat: 31.25, lng: 34.80, eras: ["at"], resumo: "Poço do juramento de Abraão e limite sul tradicional de Israel ('de Dã até Berseba').", refs: ["GEN 21:31", "1KI 19:3"] },
    { nome: "Siquém", lat: 32.21, lng: 35.28, eras: ["at", "nt"], resumo: "Primeira parada de Abrão em Canaã e lugar da renovação da aliança com Josué. Perto dali ficava Sicar, do poço de Jacó.", refs: ["GEN 12:6", "JOS 24:1", "JOH 4:5"] },
    { nome: "Betel", lat: 31.93, lng: 35.22, eras: ["at"], resumo: "Lugar do sonho de Jacó com a escada. Jeroboão pôs ali um dos bezerros de ouro.", refs: ["GEN 28:19", "1KI 12:29"] },
    { nome: "Jericó", lat: 31.87, lng: 35.44, eras: ["at", "nt"], resumo: "Primeira cidade conquistada por Josué, cujos muros caíram. No NT, Jesus curou Bartimeu e encontrou Zaqueu ali.", refs: ["JOS 6:20", "MAR 10:46", "LUK 19:1"] },
    { nome: "Samaria", lat: 32.28, lng: 35.19, eras: ["at", "nt"], resumo: "Capital do reino do Norte, fundada por Onri; caiu diante da Assíria em 722 a.C. Reconstruída por Herodes como Sebaste.", refs: ["1KI 16:24", "2KI 17:6", "ACT 8:5"] },
    { nome: "Nazaré", lat: 32.70, lng: 35.30, eras: ["nt"], resumo: "Aldeia da Galileia onde Maria recebeu o anúncio do anjo e onde Jesus foi criado.", refs: ["LUK 1:26", "MAT 2:23", "LUK 4:16"] },
    { nome: "Cafarnaum", lat: 32.88, lng: 35.58, eras: ["nt"], resumo: "Cidade à beira do mar da Galileia, base do ministério de Jesus e lugar de muitos milagres.", refs: ["MAT 4:13", "MAR 2:1", "JOH 6:59"] },
    { nome: "Cesareia Marítima", lat: 32.50, lng: 34.89, eras: ["nt"], resumo: "Porto construído por Herodes e sede do governo romano da Judeia. Ali Pedro pregou a Cornélio e Paulo ficou preso dois anos.", refs: ["ACT 10:1", "ACT 23:33"] },
    { nome: "Jope", lat: 32.05, lng: 34.75, eras: ["at", "nt"], resumo: "Porto de onde Jonas embarcou para Társis. Ali Pedro ressuscitou Tabita e teve a visão do lençol.", refs: ["JON 1:3", "ACT 9:36", "ACT 10:5"] },
    { nome: "Tiro", lat: 33.27, lng: 35.20, eras: ["at", "nt"], resumo: "Principal porto fenício, aliado de Davi e Salomão sob o rei Hirão; alvo de oráculos de Ezequiel. Jesus esteve em sua região.", refs: ["1KI 5:1", "EZE 26:3", "MAT 15:21", "ACT 21:3"] },
    { nome: "Sidom", lat: 33.56, lng: 35.37, eras: ["at", "nt"], resumo: "Antiga cidade fenícia, terra de Jezabel; Sarepta, onde Elias foi sustentado, pertencia a ela.", refs: ["GEN 10:19", "1KI 17:9", "ACT 27:3"] },
    { nome: "Damasco", lat: 33.51, lng: 36.29, eras: ["at", "nt"], resumo: "Capital do reino arameu no AT. No caminho para lá, Saulo de Tarso foi alcançado por Cristo.", refs: ["2KI 5:12", "ISA 7:8", "ACT 9:3"] },
    { nome: "Dã", lat: 33.25, lng: 35.65, eras: ["at"], resumo: "Antiga Laís, tomada pela tribo de Dã; limite norte de Israel e sede de um dos bezerros de Jeroboão.", refs: ["JDG 18:29", "1KI 12:29"] },
    { nome: "Ur", lat: 30.96, lng: 46.10, eras: ["at"], resumo: "Ur dos caldeus, cidade natal de Abrão, tradicionalmente identificada com Tell el-Muqayyar, no sul da Mesopotâmia.", refs: ["GEN 11:31", "NEH 9:7"] },
    { nome: "Harã", lat: 36.86, lng: 39.03, eras: ["at"], resumo: "Cidade do norte da Mesopotâmia onde Terá morreu e de onde Abrão partiu para Canaã; terra da família de Labão.", refs: ["GEN 11:31", "GEN 12:4", "GEN 29:4"] },
    { nome: "Nínive", lat: 36.36, lng: 43.15, eras: ["at"], resumo: "Capital da Assíria, às margens do Tigre. Arrependeu-se com a pregação de Jonas e foi destruída em 612 a.C.", refs: ["JON 1:2", "JON 3:5", "NAH 1:1"] },
    { nome: "Babilônia", lat: 32.54, lng: 44.42, eras: ["at"], resumo: "Capital de Nabucodonosor, às margens do Eufrates; lugar do exílio de Judá e do ministério de Daniel.", refs: ["GEN 11:9", "DAN 1:1", "PSA 137:1"] },
    { nome: "Susã", lat: 32.19, lng: 48.25, eras: ["at"], resumo: "Capital de Elão e residência dos reis persas; cenário do livro de Ester e do início de Neemias.", refs: ["NEH 1:1", "EST 1:2", "DAN 8:2"] },
    { nome: "Mênfis", lat: 29.85, lng: 31.25, eras: ["at"], resumo: "Antiga capital do Baixo Egito, chamada Nofe no AT; citada pelos profetas nos oráculos contra o Egito.", refs: ["ISA 19:13", "JER 46:19", "HOS 9:6"] },
    { nome: "Tebas", lat: 25.70, lng: 32.64, eras: ["at"], resumo: "Capital do Alto Egito, chamada Nô ou Nô-Amom no AT; sua queda diante da Assíria é lembrada por Naum.", refs: ["NAH 3:8", "JER 46:25"] },
    { nome: "Monte Sinai (localização tradicional)", lat: 28.54, lng: 33.98, eras: ["at"], resumo: "Jebel Musa, identificação tradicional do monte onde Moisés recebeu a lei; também chamado Horebe. A localização é debatida.", refs: ["EXO 3:1", "EXO 19:20", "1KI 19:8"] },
    { nome: "Cades-Barneia", lat: 30.65, lng: 34.42, eras: ["at"], resumo: "Oásis de onde foram enviados os doze espias e onde Israel permaneceu grande parte dos quarenta anos no deserto.", refs: ["NUM 13:26", "NUM 20:1", "DEU 1:19"] },
    { nome: "Antioquia da Síria", lat: 36.20, lng: 36.16, eras: ["nt"], resumo: "Terceira cidade do Império Romano; ali os discípulos foram chamados cristãos e dali partiram as viagens missionárias de Paulo.", refs: ["ACT 11:26", "ACT 13:1"] },
    { nome: "Tarso", lat: 36.92, lng: 34.89, eras: ["nt"], resumo: "Capital da Cilícia e cidade natal do apóstolo Paulo.", refs: ["ACT 9:11", "ACT 21:39", "ACT 22:3"] },
    { nome: "Éfeso", lat: 37.94, lng: 27.34, eras: ["nt"], resumo: "Capital da província da Ásia, com o templo de Diana. Paulo ministrou ali cerca de três anos; primeira das sete igrejas do Apocalipse.", refs: ["ACT 19:1", "EPH 1:1", "REV 2:1"] },
    { nome: "Colossos", lat: 37.79, lng: 29.26, eras: ["nt"], resumo: "Cidade do vale do Lico, destinatária da carta aos Colossenses; igreja ligada a Epafras e a Filemom.", refs: ["COL 1:2"] },
    { nome: "Antioquia da Pisídia", lat: 38.31, lng: 31.19, eras: ["nt"], resumo: "Colônia romana no sul da Galácia, onde Paulo pregou seu primeiro sermão registrado em Atos.", refs: ["ACT 13:14"] },
    { nome: "Icônio", lat: 37.87, lng: 32.49, eras: ["nt"], resumo: "Cidade da Licaônia onde muitos judeus e gregos creram na primeira viagem missionária.", refs: ["ACT 14:1"] },
    { nome: "Listra", lat: 37.58, lng: 32.45, eras: ["nt"], resumo: "Cidade onde Paulo curou um coxo e foi apedrejado; terra de Timóteo.", refs: ["ACT 14:8", "ACT 16:1"] },
    { nome: "Trôade", lat: 39.75, lng: 26.16, eras: ["nt"], resumo: "Porto no noroeste da Ásia Menor onde Paulo teve a visão do homem macedônio e onde Êutico foi reanimado.", refs: ["ACT 16:8", "ACT 20:6", "2TI 4:13"] },
    { nome: "Filipos", lat: 41.01, lng: 24.28, eras: ["nt"], resumo: "Colônia romana da Macedônia, primeira igreja fundada por Paulo na Europa; lugar da conversão de Lídia e do carcereiro.", refs: ["ACT 16:12", "PHI 1:1"] },
    { nome: "Tessalônica", lat: 40.64, lng: 22.94, eras: ["nt"], resumo: "Capital da Macedônia; Paulo pregou na sinagoga e fundou a igreja que recebeu duas de suas cartas.", refs: ["ACT 17:1", "1TH 1:1"] },
    { nome: "Bereia", lat: 40.52, lng: 22.20, eras: ["nt"], resumo: "Cidade macedônia cujos judeus examinavam diariamente as Escrituras para conferir a pregação de Paulo.", refs: ["ACT 17:10", "ACT 17:11"] },
    { nome: "Atenas", lat: 37.98, lng: 23.73, eras: ["nt"], resumo: "Centro cultural da Grécia, onde Paulo discursou no Areópago sobre o 'Deus desconhecido'.", refs: ["ACT 17:16", "ACT 17:22"] },
    { nome: "Corinto", lat: 37.91, lng: 22.88, eras: ["nt"], resumo: "Capital da Acaia e grande porto comercial; Paulo ficou ali um ano e meio e escreveu duas cartas à igreja.", refs: ["ACT 18:1", "1CO 1:2"] },
    { nome: "Roma", lat: 41.90, lng: 12.50, eras: ["nt"], resumo: "Capital do Império. Paulo escreveu à sua igreja e chegou ali como prisioneiro, pregando por dois anos.", refs: ["ACT 28:16", "ROM 1:7"] },
    { nome: "Malta", lat: 35.95, lng: 14.40, eras: ["nt"], resumo: "Ilha onde Paulo e os demais náufragos chegaram a salvo e passaram três meses a caminho de Roma.", refs: ["ACT 28:1"] },
    { nome: "Patmos", lat: 37.31, lng: 26.55, eras: ["nt"], resumo: "Pequena ilha do mar Egeu onde João, exilado, recebeu a revelação do Apocalipse.", refs: ["REV 1:9"] },
    { nome: "Esmirna", lat: 38.42, lng: 27.14, eras: ["nt"], resumo: "Segunda das sete igrejas do Apocalipse, igreja perseguida que não recebe repreensão.", refs: ["REV 2:8"] },
    { nome: "Pérgamo", lat: 39.12, lng: 27.18, eras: ["nt"], resumo: "Terceira das sete igrejas do Apocalipse, descrita como o lugar onde está o trono de Satanás.", refs: ["REV 2:12"] },
    { nome: "Tiatira", lat: 38.92, lng: 27.84, eras: ["nt"], resumo: "Quarta das sete igrejas do Apocalipse; cidade de origem de Lídia, vendedora de púrpura.", refs: ["REV 2:18", "ACT 16:14"] },
    { nome: "Sardes", lat: 38.49, lng: 28.04, eras: ["nt"], resumo: "Quinta das sete igrejas do Apocalipse, antiga capital da Lídia.", refs: ["REV 3:1"] },
    { nome: "Filadélfia", lat: 38.35, lng: 28.52, eras: ["nt"], resumo: "Sexta das sete igrejas do Apocalipse, à qual foi posta uma porta aberta.", refs: ["REV 3:7"] },
    { nome: "Laodiceia", lat: 37.84, lng: 29.11, eras: ["nt"], resumo: "Sétima das sete igrejas do Apocalipse, repreendida por ser morna; vizinha de Colossos.", refs: ["REV 3:14", "COL 4:16"] }
  ]
};
