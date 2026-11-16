// Profetas e marcos para a linha "Reis e profetas". Os reis vêm de GENEALOGIAS (dados/pessoas.js).
// Datas aproximadas, cronologia tradicional evangélica (reis segundo Thiele). Anos em a.C.
// Cada profeta: [nome, id em PESSOAS ou "", início, fim, faixa ("norte" | "sul"), nota, ref]
window.PROFETAS = [
  // ───── Reino unido e Judá (sul), exílio e retorno ─────
  ["Samuel", "samuel", 1075, 1015, "sul", "Último juiz e profeta; ungiu Saul e depois Davi", "1SA 3:20"],
  ["Gade", "", 1015, 970, "sul", "Vidente de Davi; anunciou o juízo depois do censo", "2SA 24:11"],
  ["Natã", "nata", 1000, 965, "sul", "Anunciou a aliança com Davi, confrontou-o pelo pecado com Bate-Seba e apoiou a coroação de Salomão", "2SA 12:1"],
  ["Semaías", "", 931, 915, "sul", "Impediu Roboão de guerrear contra as dez tribos", "1KI 12:22"],
  ["Joel", "joel", 835, 820, "sul", "Data incerta: a tradição o põe no tempo do rei Joás; outros, depois do exílio. A praga de gafanhotos e o dia do SENHOR", "JOE 1:1"],
  ["Isaías", "isaias", 740, 681, "sul", "Chamado no ano da morte de Uzias; falou a Acaz na crise com a Síria e a Ezequias na invasão assíria", "ISA 6:1"],
  ["Miqueias", "miqueias", 735, 700, "sul", "Contemporâneo de Isaías; denunciou Samaria e Jerusalém e anunciou o governante vindo de Belém", "MIC 1:1"],
  ["Naum", "naum", 660, 630, "sul", "Anunciou a queda de Nínive, capital da Assíria (cumprida em 612 a.C.)", "NAH 1:1"],
  ["Sofonias", "sofonias", 640, 625, "sul", "Pregou no começo do reinado de Josias, antes da reforma", "ZEP 1:1"],
  ["Jeremias", "jeremias", 627, 580, "sul", "Do 13º ano de Josias até depois da queda de Jerusalém; perseguido por Jeoaquim e Zedequias", "JER 1:2"],
  ["Hulda", "", 623, 621, "sul", "Profetisa consultada por Josias quando o livro da Lei foi achado", "2KI 22:14"],
  ["Habacuque", "habacuque", 612, 600, "sul", "Às vésperas da invasão babilônica; \"o justo viverá pela sua fé\"", "HAB 1:6"],
  ["Daniel", "daniel", 605, 536, "sul", "Levado à Babilônia na primeira deportação; serviu na corte de Nabucodonosor até Ciro", "DAN 1:6"],
  ["Ezequiel", "ezequiel", 593, 571, "sul", "Sacerdote exilado; profetizou entre os cativos junto ao rio Quebar", "EZE 1:2"],
  ["Obadias", "obadias", 848, 841, "sul", "Data incerta: a tradição o põe no reinado de Jeorão (c. 845 a.C.); outros, logo após a queda de Jerusalém em 586 a.C. Juízo contra Edom", "OBA 1:1"],
  ["Ageu", "ageu", 521, 519, "sul", "Em 520 a.C. chamou os que voltaram do exílio a retomar a construção do templo", "HAG 1:1"],
  ["Zacarias", "zacarias-profeta", 520, 480, "sul", "Contemporâneo de Ageu; visões sobre a restauração e o Rei que vem", "ZEC 1:1"],
  ["Malaquias", "malaquias", 440, 430, "sul", "Último profeta do Antigo Testamento, no tempo de Neemias", "MAL 1:1"],

  // ───── Israel (norte) ─────
  ["Aías de Siló", "", 935, 910, "norte", "Anunciou a Jeroboão a divisão do reino e, depois, o fim da sua casa", "1KI 11:29"],
  ["Jeú, filho de Hanani", "", 890, 853, "norte", "Anunciou o fim da casa de Baasa; mais tarde repreendeu Josafá", "1KI 16:1"],
  ["Elias", "elias", 870, 848, "norte", "Enfrentou Acabe, Jezabel e os profetas de Baal no monte Carmelo", "1KI 17:1"],
  ["Micaías", "", 854, 852, "norte", "Predisse a derrota e a morte de Acabe em Ramote-Gileade", "1KI 22:8"],
  ["Eliseu", "eliseu", 848, 797, "norte", "Sucessor de Elias; atuou de Jorão a Jeoás e mandou ungir Jeú", "2KI 2:13"],
  ["Jonas", "jonas", 785, 760, "norte", "Profetizou a expansão de Israel sob Jeroboão II e foi enviado a Nínive", "2KI 14:25"],
  ["Amós", "amos", 765, 755, "norte", "Pastor de Tecoa, em Judá, enviado a pregar em Betel contra a injustiça do norte", "AMO 1:1"],
  ["Oseias", "oseias", 755, 715, "norte", "Dos últimos anos de Jeroboão II até a queda de Samaria; o casamento com Gômer como retrato da infidelidade de Israel", "HOS 1:1"],
];

// Marcos mostrados como linhas verticais: [ano a.C., rótulo, ref]
window.MARCOS_REIS = [
  [931, "Divisão do reino", "1KI 12:16"],
  [722, "Queda de Samaria", "2KI 17:6"],
  [605, "1ª deportação", "DAN 1:1"],
  [586, "Queda de Jerusalém", "2KI 25:8"],
  [539, "Decreto de Ciro", "EZR 1:1"],
  [516, "Templo reconstruído", "EZR 6:15"],
];

// Períodos sem rei, mostrados como faixas apagadas: [rótulo, início, fim, faixa, nota, ref]
window.PERIODOS_REIS = [
  ["Israel deportado pela Assíria", 722, 690, "norte", "As dez tribos são levadas para a Assíria e a terra é repovoada por estrangeiros; o reino do norte não volta a existir", "2KI 17:23"],
  ["Exílio na Babilônia", 586, 539, "sul", "Jerusalém e o templo destruídos; Judá cativo por cerca de setenta anos, contados da primeira deportação (605 a.C.)", "2KI 25:11"],
  ["Retorno sob a Pérsia", 539, 430, "sul", "Zorobabel reconstrói o templo (516 a.C.); Esdras chega em 458 e Neemias em 445 a.C. Judá é província persa, sem rei", "EZR 1:3"],
];
