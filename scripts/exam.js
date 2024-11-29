const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const audioOutput = document.getElementById("audio-container");
const preTestContainer = document.getElementById("pre-test-container")
const testContainer = document.getElementById("test-container")
const resultsContainer = document.getElementById("results-container")
const resultOutput = document.getElementById("result")
const gotoCourseButton = document.getElementById("start")
const barValueDiv = document.getElementsByClassName("barValue")[0];
/*
use: answers[language][difficultLevel][question]
     [0][0] is the question statement
     [0][1] is the right answer
     [1] is the answer options
*/
const answers = {
    "english": [
        [ // a1
            [["Choose the correct word: 'This is my ___. (pai)'", "father"], ["mother", "sister", "father", "friend", "Não sei"]],
            [["Choose the correct article: '___ apple is red.'", "An"], ["An", "A", "The", "Any", "Não sei"]],
            [["What color is the book?", "Red"], ["Blue", "Red", "Green", "Yellow", "Não sei"], "audios/Script A1.mp3"],
            [["Choose the correct form: 'She ___ coffee every morning.'", "drinks"], ["drink", "drinks", "drinking", "drinked", "Não sei"]],
            [["Choose the correct answer: 'Who is your mother’s brother?'", "Uncle"], ["Cousin", "Father", "Uncle", "Sister", "Não sei"]]
        ],
        [ // a2
            [["Choose the correct form: 'Yesterday, I ___ at home.'", "was"], ["am", "is", "was", "were", "Não sei"]],
            [["Choose the correct verb: 'He always ___ breakfast in the morning.'", "eats"], ["eat", "eats", "ate", "eating", "Não sei"]],
            [["What time does he come back home?", "2 p.m."], ["8 a.m.", "2 p.m.", "6 p.m.", "10 a.m.", "Não sei"], "audios/Script A2.mp3"],
            [["Choose the correct preposition: 'She lives ____ a big city.'", "in"], ["on", "at", "in", "of", "Não sei"]],
            [["Choose the correct answer: 'Turn left, then go ___.’", "straight"], ["back", "front", "right", "straight", "Não sei"]]
        ],
        [ // b1
            [["Choose the correct preposition: 'I am interested ____ learning English.'", "in"], ["in", "on", "at", "by", "Não sei"]],
            [["Sarah went to the park on Saturday and took her dog with her. She stayed there until the evening.\n Where did Sarah go on Saturday?", "To the park"], ["To the mall", "To her friend’s house", "To the park", "To the beach", "Não sei"]],
            [["What time does he finish work?", "5 p.m."], ["9 a.m.", "1 p.m.", "3 p.m.", "5 p.m.", "Não sei"], "audios/Script B1.mp3"],
            [["Choose the correct option: 'She is ____ at math, so she helps her friends.'", "good"], ["terrible", "good", "bored", "tired", "Não sei"]],
            [["Choose the correct verb form: 'Last year, we ___ a beautiful beach in Brazil.'", "visited"], ["visited", "visit", "visits", "are visiting", "Não sei"]]
        ],
        [ // b2
            [["Complete the sentence: 'If I had known, I ____ have told you.'", "would"], ["would", "will", "could", "should", "Não sei"]],
            [["The new project is ambitious and aims to reduce pollution in the city by 30% over the next five years. \n \n What is the goal of the new project?", "Reduce pollution"], ["Increase pollution", "Clean the entire city", "Reduce pollution", "Expand the city", "Não sei"]],
            [["What does she prefer to do in the summer?", "Stay in cooler places"], ["Stay in cooler places", "Go to the beach", "Swim in the pool", "Travel abroad", "Não sei"], "audios/Script B2.mp3"],
            [["Choose the correct option: 'You ____ leave now if you want to catch the train.'", "should"], ["can’t", "should", "wouldn’t", "might not", "Não sei"]],
            [["Choose the correct answer: 'After the argument, they finally decided to ____ and forgive each other.'", "make up"], ["hold on", "look up", "make up", "take over", "Não sei"]]
        ],
        [ // c1
            [["Choose the correct option: 'Despite ____ the exam, he was accepted to the program.'", "failing"], ["failing", "fail", "fails", "failed", "Não sei"]],
            [["The company’s new initiative focuses on sustainability and aims to reduce waste by implementing recycling practices across all branches. \n \n What is the primary goal of the company’s initiative?", "Reduce waste"], ["Increase waste production", "Clean the entire city", "Reduce waste", "Expand its business", "Não sei"]],
            [["What is one disadvantage of working from home mentioned in the audio?", "It can lead to isolation"], ["It increases productivity", "It can lead to isolation", "It saves time", "It improves focus", "Não sei"], "audios/Script C1.mp3"],
            [["Choose the correct form: 'The project ____ completed by the end of the year.'", "will be"], ["will be", "was being", "is", "are", "Não sei"]],
            [["Choose the best option: 'Although the decision was unpopular, it was deemed ____ for the success of the company.'", "necessary"], ["enjoyable", "necessary", "optional", "trivial", "Não sei"]]
        ],
        [ // c2
            [["Choose the most suitable phrase: 'The project is ___ delayed, as the team is still gathering data.'", "provisionally"], ["provisionally", "circumstantially", "relatively", "definitively", "Não sei"]],
            [["Artistic expression is often a reflection of societal values, challenging norms and provoking thought among audiences. \n \n What is one purpose of artistic expression?", "To reflect societal values"], ["To reflect societal values", "To entertain without purpose", "To avoid controversial topics", "To follow traditional norms", "Não sei"]],
            [["What challenge is mentioned regarding technology?", "It makes personal connections harder to maintain"], ["It improves personal connections", "It is too costly", "It makes personal connections harder to maintain", "It has no effect on relationships", "Não sei"], "audios/Script C2.mp3"],
            [["Choose the correct answer: 'The author ___ light on an issue that is often overlooked in society.'", "sheds"], ["sheds", "shows", "brings", "reveals", "Não sei"]],
            [["Complete the sentence with the most suitable option: 'After years of research, the scientist finally ___ the theory that had puzzled her peers for decades.'", "validated"], ["validated", "approximated", "ignored", "questioned", "Não sei"]]
        ]
    ],
    "spanish": [
        [ // a1
            [["Elige la palabra correcta: 'Este es mi ___. (padre)'", "padre"], ["madre", "hermana", "padre", "amigo", "No sé"]],
            [["Elige el artículo correcto: '___ manzana es roja.'", "Una"], ["Una", "Un", "La", "Cualquier", "No sé"]],
            [["¿De qué color es el libro?", "Rojo"], ["Azul", "Rojo", "Verde", "Amarillo", "No sé"], "audios/Script A1 - Spanish.mp3"],
            [["Elige la forma correcta: 'Ella ___ café todas las mañanas.'", "bebe"], ["bebe", "bebes", "bebiendo", "bebió", "No sé"]],
            [["Elige la respuesta correcta: '¿Quién es el hermano de tu madre?'", "Tío"], ["Primo", "Padre", "Tío", "Hermana", "No sé"]]
        ],
        [ // a2
            [["Elige la forma correcta: 'Ayer, yo ___ en casa.'", "estuve"], ["estoy", "es", "estuve", "estábamos", "No sé"]],
            [["Elige el verbo correcto: 'Él siempre ___ el desayuno por la mañana.'", "come"], ["come", "comes", "comió", "comiendo", "No sé"]],
            [["¿A qué hora regresa él a casa?", "2 p.m."], ["8 a.m.", "2 p.m.", "6 p.m.", "10 a.m.", "No sé"], "audios/Script A2 - Spanish.mp3"],
            [["Elige la preposición correcta: 'Ella vive ____ en una ciudad grande.'", "en"], ["sobre", "en", "en", "de", "No sé"]],
            [["Elige la respuesta correcta: 'Gira a la izquierda, luego ve ___.'", "recto"], ["atrás", "adelante", "derecha", "recto", "No sé"]]
        ],
        [ // b1
            [["Elige la preposición correcta: 'Estoy interesado ____ aprender inglés.'", "en"], ["en", "sobre", "en", "por", "No sé"]],
            [["Sarah fue al parque el sábado y llevó a su perro con ella. Se quedó allí hasta la tarde.\n ¿Dónde fue Sarah el sábado?", "Al parque"], ["Al centro comercial", "A la casa de su amiga", "Al parque", "A la playa", "No sé"]],
            [["¿A qué hora termina él el trabajo?", "5 p.m."], ["9 a.m.", "1 p.m.", "3 p.m.", "5 p.m.", "No sé"], "audios/Script B1 - Spanish.mp3"],
            [["Elige la opción correcta: 'Ella es ____ en matemáticas, así que ayuda a sus amigos.'", "buena"], ["terrible", "buena", "aburrida", "cansada", "No sé"]],
            [["Elige la forma verbal correcta: 'El año pasado, nosotros ___ una playa hermosa en Brasil.'", "visitamos"], ["visitamos", "visitamos", "visita", "estamos visitando", "No sé"]]
        ],
        [ // b2
            [["Completa la frase: 'Si lo hubiera sabido, yo ____ te habría dicho.'", "habría"], ["habría", "haré", "podría", "debería", "No sé"]],
            [["'El nuevo proyecto es ambicioso y pretende reducir la contaminación de la ciudad en un 30% en los próximos cinco años.' ¿Cuál es el objetivo del nuevo proyecto?", "Reducir la contaminación"], ["Aumentar la contaminación", "Limpiar toda la ciudad", "Reducir la contaminación", "Expandir la ciudad", "No sé"]],
            [["¿Qué prefiere hacer ella en el verano?", "Quedarse en lugares frescos"], ["Quedarse en lugares frescos", "Ir a la playa", "Nadar en la piscina", "Viajar al extranjero", "No sé"], "audios/Script B2 - Spanish.mp3"],
            [["Elige la opción correcta: 'Deberías ___ ahora si quieres tomar el tren.'", "salir"], ["no puedes", "deberías", "no deberías", "quizá no", "No sé"]],
            [["Elige la respuesta correcta: 'Después de la discusión, finalmente decidieron ___ y perdonarse.'", "reconciliarse"], ["esperar", "buscar", "reconciliarse", "tomar el control", "No sé"]]
        ],
        [ // c1
            [["Elige la opción correcta: 'A pesar de ____ el examen, fue aceptado en el programa.'", "fallar"], ["fallar", "fallo", "fallando", "fallado", "No sé"]],
            [["'La nueva iniciativa de la empresa se centra en la sostenibilidad y tiene como objetivo reducir los residuos implementando prácticas de reciclaje en todas las sucursales.' ¿Cuál es el objetivo principal de la iniciativa de la empresa?", "Reducir residuos"], ["Aumentar la producción de residuos", "Limpiar toda la ciudad", "Reducir residuos", "Expandir el negocio", "No sé"]],
            [["¿Cuál es una desventaja de trabajar desde casa mencionada en el audio?", "Puede llevar al aislamiento"], ["Aumenta la productividad", "Puede llevar al aislamiento", "Ahorra tiempo", "Mejora el enfoque", "No sé"], "audios/Script C1 - Spanish.mp3"],
            [["Elige la forma correcta: 'El proyecto ____ completado para fin de año.'", "será"], ["será", "estaba siendo", "es", "son", "No sé"]],
            [["Elige la mejor opción: 'Aunque la decisión fue impopular, se consideró ____ para el éxito de la empresa.'", "necesaria"], ["agradable", "necesaria", "opcional", "trivial", "No sé"]]
        ],
        [ // c2
            [["Elige la frase más adecuada: 'El proyecto está ___ retrasado, ya que el equipo aún está recopilando datos.'", "provisionalmente"], ["provisionalmente", "circunstancialmente", "relativamente", "definitivamente", "No sé"]],
            [["'La expresión artística es a menudo un reflejo de los valores sociales, desafía las normas y provoca el pensamiento en el público.' ¿Cuál es uno de los propósitos de la expresión artística?", "Reflejar los valores de la sociedad"], ["Reflejar los valores de la sociedad", "Entretener sin propósito", "Evitar temas controvertidos", "Seguir normas tradicionales", "No sé"]],
            [["¿Qué desafío se menciona respecto a la tecnología?", "Hace más difícil mantener conexiones personales"], ["Mejora las conexiones personales", "Es demasiado costosa", "Hace más difícil mantener conexiones personales", "No tiene efecto en las relaciones", "No sé"], "audios/Script C2 - Spanish.mp3"],
            [["Elige la respuesta correcta: 'El autor ___ luz sobre un tema que a menudo se pasa por alto en la sociedad.'", "arroja"], ["arroja", "muestra", "trae", "revela", "No sé"]],
            [["Completa la frase con la opción más adecuada: 'Después de años de investigación, la científica finalmente ___ la teoría que había desconcertado a sus colegas durante décadas.'", "validó"], ["validó", "aproximó", "ignoró", "cuestionó", "No sé"]]
        ]
    ],
    "french": [
        [ // A1 (Iniciante absoluto)
            [["Escolha a palavra correta: 'C'est mon ___. (pai)'", "père"], ["mère", "sœur", "père", "ami", "Je ne sais pas"]],
            [["Escolha o artigo correto: '___ pomme est rouge.'", "Une"], ["Une", "Un", "La", "N'importe quel", "Je ne sais pas"]],
            [["De quelle couleur est le livre ?", "Rouge"], ["Bleu", "Rouge", "Vert", "Jaune", "Je ne sais pas"], "audios/Script A1 - French.mp3"],
            [["Escolha a forma correta: 'Elle ___ du café tous les matins.'", "boit"], ["boit", "bois", "buvant", "bu", "Je ne sais pas"]],
            [["Escolha a resposta correta: 'Qui est le frère de ta mère ?'", "Oncle"], ["Cousin", "Père", "Oncle", "Sœur", "Je ne sais pas"]]
        ],
        [ // A2 (Básico)
            [["Escolha a forma correta: 'Hier, j'___ à la maison.'", "étais"], ["suis", "est", "étais", "étions", "Je ne sais pas"]],
            [["Escolha o verbo correto: 'Il ____ toujours son petit déjeuner le matin.'", "mange"], ["mange", "manges", "mangé", "mangeant", "Je ne sais pas"]],
            [["A quelle heure rentre-t-il à la maison ?", "14h00" ], ["8h00", "14h00", "18h00", "10h00", "Je ne sais pas"], "audios/Script A2 - French.mp3"],
            [["Escolha a preposição correta: 'Elle vit ____ une grande ville'", "dans"], ["sur", "à", "dans", "de", "Je ne sais pas"]],
            [["Escolha a resposta correta: 'Tournez à gauche, puis continuez ___.'", "tout droit."], ["en arrière", "devant", "à droite", "tout droit", "Je ne sais pas"]]
        ],
        [ // B1 (Intermediário)
            [["Escolha a preposição correta: 'Je suis intéressé _ apprendre l'anglais.'", "à"], ["à", "sur", "dans", "par", "Je ne sais pas"]],
            [["Sarah est allée au parc samedi et a emmené son chien avec elle. Elle y est restée jusqu'à la nuit. \n Où est allée Sarah samedi ?", "Au parc"], ["Au centre commercial", "Chez son amie", "Au parc", "À la plage", "Je ne sais pas"]],
            [["À quelle heure finit-il le travail ?", "17h00" ], ["9h00", "13h00", "15h00", "17h00", "Je ne sais pas"], "audios/Script B1 - French.mp3"],
            [["Escolha a opção correta: 'Elle est ____ en maths, alors elle aide ses amis'", "bonne"], ["terrible", "bonne", "ennuyée", "fatiguée", "Je ne sais pas"]],
            [["Escolha a forma correta do verbo: 'L'année dernière, nous _____ une belle plage au Brésil.'", "avons visité"], ["avons visité", "visitons", "visite", "visitons en train de", "Je ne sais pas"]]
        ],
        [ // B2 (Intermediário-avançado)
            [["Complete a frase: 'Si je l'avais su, je ____ te l'aurais dit.'", "aurais"], ["aurais", "ferai", "pourrais", "devrais", "Je ne sais pas"]],
            [["Le nouveau projet est ambitieux et vise à réduire la pollution de la ville de 30 % au cours des cinq prochaines années. Quel est l'objectif du nouveau projet ?", "Réduire la pollution"], ["Augmenter la pollution", "Nettoyer toute la ville", "Réduire la pollution", "Étendre la ville", "Je ne sais pas"]],
            [["Que préfère-t-elle faire en été ?", "Restez dans des endroits plus froids"], ["Restez dans des endroits plus froids", "Aller à la plage", "Nager dans la piscine", "Voyager à l'étranger", "Je ne sais pas"], "audios/Script B2 - French.mp3"],
            [["Escolha a opção correta: 'Vous _____ partir maintenant si vous voulez prendre le train..'", "devriez"], ["ne peux pas", "devriez", "ne devrais pas", "peut-être pas", "Je ne sais pas"]],
            [["Escolha a resposta correta: 'Après la dispute, ils ont finalement décidé de ______ et de se pardonner.'", "se réconcilier"], ["tenir", "chercher", "se réconcilier", "prendre le contrôle", "Je ne sais pas"]]
        ],
        [ // C1 (Avançado)
            [["Escolha a opção correta: 'Malgré ____ à l’examen, il a été accepté au programme.'", "son échec"], ["son échec", "échouer", "échouant", "échoué", "Je ne sais pas"]],
            [["'La nouvelle initiative de l’entreprise met l’accent sur la durabilité et vise à réduire les déchets en mettant en œuvre des pratiques de recyclage dans toutes les succursales.' Quel est l’objectif principal de l’initiative de l’entreprise ?", "Réduire les déchets"], ["Augmenter la production de déchets", "Nettoyer toute la ville", "Réduire les déchets", "Étendre son activité", "Je ne sais pas"]],
            [["Quel est l’un des inconvénients du travail à domicile mentionné dans l’audio ?", "Cela peut mener à l'isolement"], ["Cela augmente la productivité", "Cela peut mener à l'isolement", "Cela fait gagner du temps", "Cela améliore la concentration", "Je ne sais pas"], "audios/Script C1 - French.mp3"],
            [["Escolha a forma correta: 'Le projet ____ achevé d'ici la fin de l'année.'", "sera"], ["sera", "était en cours", "est", "sont", "Je ne sais pas"]],
            [["Escolha a melhor opção: 'Bien que la décision ait été impopulaire, elle a été jugée ______ au succès de l’entreprise.'", "nécessaire"], ["agréable", "nécessaire", "facultative", "banale", "Je ne sais pas"]]
        ],
        [ // C2 (Fluente)
            [["Escolha a expressão mais apropriada: 'Le projet est ______ retardé, car l'équipe est toujours en train de collecter des données.'", "provisoirement"], ["provisoirement", "de manière circonstancielle", "relativement", "définitivement", "Je ne sais pas"]],
            [["'L'expression artistique est souvent le reflet des valeurs sociétales, elle remet en question les normes et suscite la réflexion chez le public.' Selon le texte, quel est l'un des objectifs de l'expression artistique ?", "Réfléter les valeurs sociétales"], ["Réfléter les valeurs sociétales", "Divertir sans but", "Éviter les sujets controversés", "Suivre les normes traditionnelles", "Je ne sais pas"]],
            [["Quel défi est mentionné concernant la technologie ?", "Elle rend les connexions personnelles plus difficiles à maintenir"], ["Elle améliore les connexions personnelles", "Elle est trop coûteuse", "Elle rend les connexions personnelles plus difficiles à maintenir", "Elle n'a aucun effet sur les relations", "Je ne sais pas"], "audios/Script C2 - French.mp3"],
            [["Escolha a resposta correta: 'L’auteur _____ lumière un problème souvent négligé dans la société.'", "met en"], ["jette", "met en", "apporte", "révèle", "Je ne sais pas"]],
            [["Complete a frase com a opção mais apropriada: 'Après des années de recherche, la scientifique a finalement _____ la théorie qui intriguait ses pairs depuis des décennies.'", "validé"], ["validé", "approximé", "ignoré", "remis en question", "Je ne sais pas"]]
        ]
    ],
    "chinese": [
        [ // hsk 1 (Iniciante absoluto)
            [["O que significa '一'?", "um"], ["um", "dois", "três", "quatro", "Não sei"]],
            [["Escolha a resposta certa: '猫' significa o quê?", "gato"], ["gato", "cachorro", "pássaro", "peixe", "Não sei"]],
            [["Qual destes é o número 2?", "二"], ["一", "二", "三", "四", "Não sei"]],
            [["Escolha o símbolo para 'água'.", "水"], ["水", "火", "土", "木", "Não sei"]],
            [["O que significa '山'?", "montanha"], ["rio", "árvore", "montanha", "sol", "Não sei"]]
        ],
        [ // hsk 2 (Básico)
            [["Escolha a resposta correta: '我' significa o quê?", "eu"], ["eu", "você", "ele", "ela", "Não sei"]],
            [["Qual o significado de '日'?", "sol"], ["lua", "sol", "estrela", "planeta", "Não sei"]],
            [["Escolha a resposta correta: '你好' significa?", "olá"], ["olá", "tchau", "bom dia", "boa noite", "Não sei"]],
            [["Complete a frase: '我喜欢___。'", "gato"], ["gato", "cachorro", "pássaro", "peixe", "Não sei"]],
            [["Qual desses é 'mãe' em chinês?", "妈妈"], ["爸爸", "妈妈", "老师", "朋友", "Não sei"]]
        ],
        [ // hsk 3 (Intermediário)
            [["Qual é a leitura correta para '学生'?", "xuéshēng"], ["xuéshēng", "lǎoshī", "rén", "xiǎo", "Não sei"]],
            [["Qual é a tradução de '吃'?", "comer"], ["beber", "comer", "correr", "andar", "Não sei"]],
            [["O que significa '学校'?", "escola"], ["escola", "universidade", "livro", "cidade", "Não sei"]],
            [["Qual a tradução de '朋友'?", "amigo"], ["amigo", "namorado", "irmão", "cachorro", "Não sei"]],
            [["Escolha a tradução correta: '我有很多书。'", "Eu tenho muitos livros."], ["Eu tenho muitos livros.", "Eu tenho poucos livros.", "Eu gosto de livros.", "Eu não tenho livros.", "Não sei"]]
        ],
        [ // hsk 4 (Avançado)
            [["Qual é o significado de '经济'?", "economia"], ["economia", "política", "história", "física", "Não sei"]],
            [["Qual é a tradução de '文化'?", "cultura"], ["cultura", "arte", "teatro", "esporte", "Não sei"]],
            [["Complete a frase: '我___中国菜。'", "gosto de"], ["gosto de", "não gosto de", "estudo", "ensino", "Não sei"]],
            [["Escolha a tradução correta: '她是我的朋友。'", "Ela é minha amiga."], ["Ela é minha amiga.", "Ela é minha professora.", "Ela é minha irmã.", "Ela é minha mãe.", "Não sei"]],
            [["O que significa '生日'?", "aniversário"], ["nascimento", "casamento", "aniversário", "viagem", "Não sei"]]
        ],
        [ // hsk 5 (Avançado)
            [["O que significa '理想'?", "ideal"], ["ideal", "realidade", "plano", "emoção", "Não sei"]],
            [["Qual é a tradução de '社会'?", "sociedade"], ["sociedade", "cultura", "política", "esporte", "Não sei"]],
            [["Complete a frase: '我们在___工作。'", "empresa"], ["empresa", "escola", "hospital", "casa", "Não sei"]],
            [["Escolha a tradução correta: '我对中国历史很感兴趣。'", "Eu estou muito interessado na história da China."], ["Eu estou muito interessado na história da China.", "Eu gosto de história.", "Eu não gosto de história.", "Eu estudo história.", "Não sei"]],
            [["Qual é o significado de '技术'?", "tecnologia"], ["tecnologia", "história", "arte", "educação", "Não sei"]]
        ],
        [ // hsk 6 (Fluente)
            [["O que significa '创新'?", "inovação"], ["inovação", "moda", "tendência", "política", "Não sei"]],
            [["Qual é o significado de '全球化'?", "globalização"], ["globalização", "nacionalismo", "indústria", "tecnologia", "Não sei"]],
            [["Complete a frase: '他的___非常好。'", "habilidades"], ["habilidades", "opiniões", "pensamentos", "visões", "Não sei"]],
            [["Escolha a tradução correta: '这项技术将改变世界。'", "Esta tecnologia vai mudar o mundo."], ["Esta tecnologia vai mudar o mundo.", "Esta tecnologia é antiga.", "Esta tecnologia é barata.", "Esta tecnologia é difícil.", "Não sei"]],
            [["O que significa '挑战'?", "desafio"], ["desafio", "solução", "problema", "ideia", "Não sei"]]
        ]
    ],
    "japanese": [
        [ // N5 (Iniciante absoluto)
            [["Qual é o som do símbolo: あ?", "a"], ["a", "i", "u", "e", "Não sei"]],
            [["Escolha o símbolo correto para o som 'ka'.", "か"], ["か", "き", "け", "こ", "Não sei"]],
            [["Qual destes significa 'sol' em japonês?", "日"], ["月", "火", "日", "水", "Não sei"]],
            [["Associe o som 'ne' ao símbolo correto.", "ね"], ["ね", "の", "ぬ", "な", "Não sei"]],
            [["Qual é o significado de '山'?", "Montanha"], ["Rio", "Árvore", "Montanha", "Sol", "Não sei"]]
        ],
        [ // N4 (Básico, com frases simples)
            [["Complete a frase: '私は___が好きです。(gato)'", "ねこ"], ["ねこ", "いぬ", "とり", "さかな", "Não sei"]],
            [["Qual a leitura correta de 学校?", "がっこう"], ["がっこう", "がくせい", "こうこう", "しょうがっこう", "Não sei"]],
            [["Escolha a resposta certa: 'これ は 何 ですか？'", "本"], ["車", "犬", "本", "机", "Não sei"]],
            [["Qual destas palavras significa 'amizade'?", "友達"], ["友達", "家族", "学校", "動物", "Não sei"]],
            [["Associe o kanji 飲む com seu significado.", "Beber"], ["Comer", "Beber", "Dormir", "Falar", "Não sei"]]
        ],
        [ // N3 (Intermediário)
            [["Complete a frase: '昨日、私は友達と___に行きました。(cinema)'", "映画館"], ["映画館", "病院", "学校", "図書館", "Não sei"]],
            [["Escolha a leitura correta de 食べ物.", "たべもの"], ["たべもの", "たべものたち", "たぶもの", "たぶもん", "Não sei"]],
            [["Qual destas palavras significa 'trabalho'?", "仕事"], ["家", "車", "仕事", "食べ物", "Não sei"]],
            [["Associe o kanji 勉強 com seu significado.", "Estudar"], ["Trabalhar", "Dormir", "Estudar", "Ensinar", "Não sei"]],
            [["Complete a frase: '彼は毎日電車で___へ行きます。(trabalho)'", "仕事"], ["学校", "仕事", "病院", "映画館", "Não sei"]]
        ],
        [ // N2 (Avançado)
            [["Complete a frase: 'この本は___人におすすめです。(quem gosta de história)'", "歴史が好きな"], ["歴史が好きな", "勉強が好きな", "本が好きな", "映画が好きな", "Não sei"]],
            [["Escolha a leitura correta de 経験.", "けいけん"], ["けいけん", "けいしき", "けいさい", "けいこう", "Não sei"]],
            [["Associe o kanji 自然 com seu significado.", "Natureza"], ["Cultura", "Natureza", "Pessoas", "Trabalho", "Não sei"]],
            [["Complete a frase: 'この町は、交通が___です。'", "便利"], ["便利", "不便", "静か", "有名", "Não sei"]],
            [["Qual destas palavras significa 'responsabilidade'?", "責任"], ["機会", "責任", "理由", "挑戦", "Não sei"]]
        ],
        [ // N1 (Fluente e Avançado)
            [["Complete a frase: '環境問題を解決するためには___が必要です。'", "協力"], ["協力", "相談", "競争", "努力", "Não sei"]],
            [["Associe o kanji 複雑 com seu significado.", "Complexidade"], ["Simplicidade", "Complexidade", "Importância", "Relevância", "Não sei"]],
            [["Escolha a leitura correta de 解決.", "かいけつ"], ["かいけつ", "けっか", "けいけつ", "けっかん", "Não sei"]],
            [["Complete a frase: '技術の進歩は私たちの生活を___しました。'", "変化"], ["変化", "発展", "安定", "停滞", "Não sei"]],
            [["Qual destas palavras significa 'desafio'?", "挑戦"], ["成功", "挑戦", "責任", "問題", "Não sei"]]
        ]
    ],
    "german": [
        [ // A1 (Iniciante absoluto)
            [["O que significa 'Katze'?", "gato"], ["gato", "cachorro", "pássaro", "peixe", "Não sei"]],
            [["Escolha a palavra para 'gato' em alemão.", "Katze"], ["Katze", "Hund", "Vogel", "Fisch", "Não sei"]],
            [["Qual destas palavras significa 'cachorro'?", "Hund"], ["Hund", "Katze", "Vogel", "Fisch", "Não sei"]],
            [["Escolha a tradução de 'Haus'.", "Casa"], ["Casa", "Cachorro", "Livro", "Mesa", "Não sei"]],
            [["O que significa 'Buch'?", "livro"], ["livro", "caneta", "mesa", "caderno", "Não sei"]]
        ],
        [ // A2 (Básico)
            [["Complete a frase: 'Ich habe ein ___.'", "Hund"], ["Hund", "Katze", "Vogel", "Buch", "Não sei"]],
            [["O que significa 'essen'?", "comer"], ["comer", "beber", "dormir", "estudar", "Não sei"]],
            [["Escolha a tradução para 'Freund'.", "amigo"], ["amigo", "inimigo", "professor", "vizinho", "Não sei"]],
            [["Complete a frase: 'Ich trinke ___.'", "Wasser"], ["Wasser", "Saft", "Bier", "Kaffee", "Não sei"]],
            [["O que significa 'Arbeit'?", "trabalho"], ["trabalho", "escola", "casa", "loja", "Não sei"]]
        ],
        [ // B1 (Intermediário)
            [["Complete a frase: 'Ich gehe heute ___.'", "ins Kino"], ["ins Kino", "zur Arbeit", "in die Schule", "nach Hause", "Não sei"]],
            [["O que significa 'reisen'?", "viajar"], ["viajar", "estudar", "brincar", "correr", "Não sei"]],
            [["Escolha a palavra que significa 'feliz' em alemão.", "glücklich"], ["glücklich", "traurig", "langweilig", "wütend", "Não sei"]],
            [["O que significa 'arbeiten'?", "trabalhar"], ["trabalhar", "estudar", "cantar", "dançar", "Não sei"]],
            [["Escolha a tradução de 'schwierig'.", "difícil"], ["difícil", "fácil", "rápido", "lento", "Não sei"]]
        ],
        [ // B2 (Avançado)
            [["Complete a frase: 'Ich finde das sehr ___.'", "interessant"], ["interessant", "langweilig", "einfach", "schwierig", "Não sei"]],
            [["O que significa 'Erfolg'?", "sucesso"], ["sucesso", "fracasso", "medo", "alegria", "Não sei"]],
            [["Escolha a tradução para 'immer'.", "sempre"], ["sempre", "nunca", "às vezes", "raramente", "Não sei"]],
            [["Qual dessas palavras significa 'rápido'?", "schnell"], ["schnell", "langsam", "schwierig", "leicht", "Não sei"]],
            [["Escolha o significado de 'Verantwortung'.", "responsabilidade"], ["responsabilidade", "alegria", "medo", "prazer", "Não sei"]]
        ],
        [ // C1 (Proficiente)
            [["Escolha a tradução para 'komplex'.", "complexo"], ["complexo", "simples", "fácil", "difícil", "Não sei"]],
            [["Complete a frase: 'Die Lösung des Problems ist sehr ___.'", "kompliziert"], ["kompliziert", "einfach", "schnell", "klar", "Não sei"]],
            [["O que significa 'Vertrauen'?", "confiança"], ["confiança", "medo", "dúvida", "ansiedade", "Não sei"]],
            [["Escolha o significado de 'abstrakt'.", "abstrato"], ["abstrato", "concreto", "claro", "real", "Não sei"]],
            [["Qual destas palavras significa 'desafio'?", "Herausforderung"], ["Herausforderung", "Erfolg", "Glück", "Fortschritt", "Não sei"]]
        ],
        [ // C2 (Fluente)
            [["Complete a frase: 'In der heutigen Welt ist ___ sehr wichtig.'", "Kommunikation"], ["Kommunikation", "Technologie", "Wissen", "Freiheit", "Não sei"]],
            [["Escolha a tradução para 'Verantwortung'.", "responsabilidade"], ["responsabilidade", "liberdade", "felicidade", "culpa", "Não sei"]],
            [["O que significa 'Komplexität'?", "complexidade"], ["complexidade", "facilidade", "claro", "simples", "Não sei"]],
            [["Qual destas palavras significa 'justiça'?", "Gerechtigkeit"], ["Gerechtigkeit", "Ungerechtigkeit", "Wahrheit", "Freundschaft", "Não sei"]],
            [["Complete a frase: 'Der Fortschritt in der Wissenschaft ist ein ___ für die Gesellschaft.'", "Vorteil"], ["Vorteil", "Nachteil", "Gefahr", "Rückschritt", "Não sei"]]
        ]
    ],
    "korean": [
        [ // topik I (Nível 1 e 2 - Iniciante)
            [["O que significa '고양이'?", "gato"], ["gato", "cachorro", "pássaro", "peixe", "Não sei"]],
            [["Qual é a palavra para 'cachorro' em coreano?", "개"], ["개", "고양이", "새", "물고기", "Não sei"]],
            [["Escolha a palavra que significa 'casa'.", "집"], ["집", "학교", "상점", "도서관", "Não sei"]],
            [["O que significa '책'?", "livro"], ["livro", "caneta", "mesa", "caderno", "Não sei"]],
            [["Qual destas palavras significa 'amigo'?", "친구"], ["친구", "선생님", "가족", "동료", "Não sei"]]
        ],
        [ // topik I (Nível 2 - Iniciante, frases mais curtas e simples)
            [["Complete a frase: '나는 ___을 좋아해요.'", "고양이"], ["고양이", "개", "새", "책", "Não sei"]],
            [["Escolha a tradução para '먹다'.", "comer"], ["comer", "beber", "dormir", "estudar", "Não sei"]],
            [["Qual é a palavra para 'escola' em coreano?", "학교"], ["학교", "회사", "도서관", "집", "Não sei"]],
            [["O que significa '일'?", "trabalho"], ["trabalho", "escola", "casa", "loja", "Não sei"]],
            [["Escolha a tradução para '친구'.", "amigo"], ["amigo", "inimigo", "professor", "vizinho", "Não sei"]]
        ],
        [ // topik II (Nível 3 - Intermediário)
            [["Complete a frase: '오늘 나는 ___에 갔어요.'", "영화관"], ["영화관", "학교", "도서관", "병원", "Não sei"]],
            [["Escolha a tradução de '여행하다'.", "viajar"], ["viajar", "estudar", "trabalhar", "comer", "Não sei"]],
            [["O que significa '배우다'?", "aprender"], ["aprender", "ensinar", "beber", "dormir", "Não sei"]],
            [["Qual dessas palavras significa 'fácil'?", "쉽다"], ["쉽다", "어렵다", "빠르다", "느리다", "Não sei"]],
            [["Complete a frase: '그는 매일 아침에 ___을 마셔요.'", "커피"], ["커피", "물", "주스", "차", "Não sei"]]
        ],
        [ // TOPIK II (Nível 4 - Intermediário)
            [["Complete a frase: '이 가방은 너무 ___.'", "비싸요"], ["비싸요", "싸요", "좋아요", "나빠요", "Não sei"]],
            [["Escolha a tradução de '건강하다'.", "ser saudável"], ["ser saudável", "ser rápido", "ser devagar", "ser pequeno", "Não sei"]],
            [["O que significa '기쁘다'?", "estar feliz"], ["estar feliz", "estar triste", "estar zangado", "estar cansado", "Não sei"]],
            [["Associe a palavra '역사' ao seu significado.", "história"], ["história", "geografia", "matemática", "ciência", "Não sei"]],
            [["Complete a frase: '친구와 같이 ___을 먹었어요.'", "점심"], ["점심", "아침", "저녁", "간식", "Não sei"]]
        ],
        [ // topik II (Nível 5 - Avançado)
            [["Complete a frase: '그의 말은 정말 ___.'", "유익하다"], ["유익하다", "어렵다", "행복하다", "짧다", "Não sei"]],
            [["Escolha a tradução para '책임'.", "responsabilidade"], ["responsabilidade", "liberdade", "felicidade", "culpa", "Não sei"]],
            [["O que significa '성공'?", "sucesso"], ["sucesso", "fracasso", "medo", "alegria", "Não sei"]],
            [["Qual dessas palavras significa 'complexo'?", "복잡하다"], ["복잡하다", "간단하다", "빠르다", "편리하다", "Não sei"]],
            [["Escolha a tradução para '가족'.", "família"], ["família", "amigo", "vizinho", "colega", "Não sei"]]
        ],
        [ // topik II (Nível 6 - Fluente e avançado)
            [["Complete a frase: '이 문제는 너무 ___.'", "복잡하다"], ["복잡하다", "간단하다", "빠르다", "명확하다", "Não sei"]],
            [["Escolha a tradução de '추구하다'.", "buscar"], ["buscar", "encontrar", "deixar", "abandonar", "Não sei"]],
            [["O que significa '신뢰'?", "confiança"], ["confiança", "medo", "dúvida", "ansiedade", "Não sei"]],
            [["Escolha a tradução para '복잡성'.", "complexidade"], ["complexidade", "facilidade", "simples", "concreto", "Não sei"]],
            [["Complete a frase: '그는 이 분야에서 매우 ___한 전문가입니다.'", "유명하다"], ["유명하다", "무명이다", "어렵다", "빠르다", "Não sei"]]
        ]
    ],
    "italian": [
        [ // A1 (Iniciante absoluto)
            [["Como se diz 'gato' em italiano?", "gatto"], ["gatto", "cane", "pesce", "uccello", "Não sei"]],
            [["Qual é a tradução de 'casa' em italiano?", "casa"], ["casa", "scuola", "lavoro", "amico", "Não sei"]],
            [["Como você diz 'olá' em italiano?", "ciao"], ["arrivederci", "buongiorno", "ciao", "buonanotte", "Não sei"]],
            [["Qual é a tradução de 'livro' em italiano?", "libro"], ["libro", "penna", "tavolo", "banco", "Não sei"]],
            [["Qual dessas palavras significa 'amigo'?", "amico"], ["amico", "gatto", "cane", "albero", "Não sei"]]
        ],
        [ // A2 (Básico)
            [["Como você pergunta 'qual é o seu nome?' em italiano?", "come ti chiami"], ["come ti chiami", "dove sei", "quanti anni hai", "che giorno è", "Não sei"]],
            [["Qual é a tradução de 'mãe' em italiano?", "madre"], ["padre", "madre", "fratello", "sorella", "Não sei"]],
            [["Como você pergunta 'de onde você é?' em italiano?", "di dove sei"], ["di dove sei", "quanti anni hai", "come va", "che fai", "Não sei"]],
            [["Qual é a tradução de 'água' em italiano?", "acqua"], ["vino", "birra", "acqua", "succo", "Não sei"]],
            [["Qual é a tradução de 'carro' em italiano?", "auto"], ["auto", "bicicletta", "treno", "aereo", "Não sei"]]
        ],
        [ // B1 (Intermediário)
            [["Como você diz 'Eu gosto de pizza' em italiano?", "mi piace la pizza"], ["mi piace la pizza", "mangio la pizza", "compro pizza", "vado a pizza", "Não sei"]],
            [["Qual é a tradução de 'família' em italiano?", "famiglia"], ["amici", "famiglia", "lavoro", "scuola", "Não sei"]],
            [["Qual é a tradução de 'trabalho' em italiano?", "lavoro"], ["lavoro", "vacanza", "scuola", "libro", "Não sei"]],
            [["Como você diz 'Eu estou cansado' em italiano?", "sono stanco"], ["sono stanco", "ho fame", "sto bene", "sono felice", "Não sei"]],
            [["Qual é a tradução de 'feliz' em italiano?", "felice"], ["felice", "triste", "arrabbiato", "spaventato", "Não sei"]]
        ],
        [ // B2 (Intermediário-avançado)
            [["Qual é a tradução de 'experiência' em italiano?", "esperienza"], ["esperienza", "studente", "lavoro", "scuola", "Não sei"]],
            [["Como você diz 'Eu moro em Roma' em italiano?", "abito a Roma"], ["abito a Roma", "vivo a Roma", "vivo in Roma", "abito in Roma", "Não sei"]],
            [["Qual é a tradução de 'tempo' em italiano?", "tempo"], ["cielo", "tempo", "estate", "pioggia", "Não sei"]],
            [["Como você diz 'Eu estou aprendendo italiano' em italiano?", "sto imparando l'italiano"], ["sto imparando l'italiano", "imparo l'italiano", "studiare l'italiano", "ho imparato l'italiano", "Não sei"]],
            [["Qual é a tradução de 'amigo' em italiano?", "amico"], ["amico", "famiglia", "collega", "vicino", "Não sei"]]
        ],
        [ // C1 (Avançado)
            [["Como você diz 'Ele está se preparando para a reunião' em italiano?", "si sta preparando per la riunione"], ["si sta preparando per la riunione", "prepara per la riunione", "sta preparando per la riunione", "preparando per la riunione", "Não sei"]],
            [["Qual é a tradução de 'sustentabilidade' em italiano?", "sostenibilità"], ["sostenibilità", "ambiente", "energia", "clima", "Não sei"]],
            [["Como você diz 'Eu tive uma boa ideia' em italiano?", "ho avuto una buona idea"], ["ho avuto una buona idea", "avuto una buona idea", "ho fatto una buona idea", "sono avuto una buona idea", "Não sei"]],
            [["Qual é a tradução de 'desafio' em italiano?", "sfida"], ["sfida", "problema", "difficoltà", "compito", "Não sei"]],
            [["Como você diz 'O projeto foi bem-sucedido' em italiano?", "il progetto è riuscito"], ["il progetto è riuscito", "il progetto ha successo", "il progetto è stato bene", "il progetto è fallito", "Não sei"]]
        ],
        [ // C2 (Fluente)
            [["Qual é a tradução de 'inovação' em italiano?", "innovazione"], ["innovazione", "tecnologia", "avanzamento", "moda", "Não sei"]],
            [["Como você diz 'Apesar das dificuldades, ela continuou' em italiano?", "nonostante le difficoltà, ha continuato"], ["nonostante le difficoltà, ha continuato", "nonostante le difficoltà, continuò", "nonostante le difficoltà, continua", "nonostante le difficoltà, andò avanti", "Não sei"]],
            [["Qual é a tradução de 'responsabilidade' em italiano?", "responsabilità"], ["responsabilità", "compito", "dovere", "incarico", "Não sei"]],
            [["Como você diz 'Estamos comprometidos com a sustentabilidade' em italiano?", "siamo impegnati per la sostenibilità"], ["siamo impegnati per la sostenibilità", "siamo impegnati nella sostenibilità", "siamo impegnati per sostenibilità", "siamo impegnati alla sostenibilità", "Não sei"]],
            [["Qual é a tradução de 'globalização' em italiano?", "globalizzazione"], ["globalizzazione", "mondializzazione", "internazionalizzazione", "internazionale", "Não sei"]]
        ]
    ],
    "russian": [
        [ // A1
            [["Escolha a palavra correta: 'Este é meu _. (pai)'", "папа"], ["мама", "сестра", "папа", "друг", "Не знаю"]],
            [["Escolha o artigo correto: '_ maçã é vermelha.'", "Одно"], ["Одно", "Любое", "Это", "Какое-то", "Не знаю"]],
            [["Qual a cor do livro?", "Красная"], ["Синяя", "Красная", "Зелёная", "Жёлтая", "Не знаю"]],
            [["Escolha a forma correta: 'Ela _ café toda manhã.'", "пьёт"], ["пить", "пьёт", "пила", "пью", "Не знаю"]],
            [["Quem é o irmão da sua mãe?", "Дядя"], ["Кузен", "Отец", "Дядя", "Сестра", "Не знаю"]]
        ],
        [ // A2
            [["Escolha a forma correta: 'Ontem, eu _ em casa.'", "был"], ["был", "есть", "буду", "будет", "Не знаю"]],
            [["Escolha o verbo correto: 'Ele sempre _ o café da manhã.'", "ест"], ["ем", "ест", "ел", "ешь", "Не знаю"]],
            [["A que horas ele volta para casa?", "Às 14h"], ["Às 8h", "Às 14h", "Às 18h", "Às 22h", "Не знаю"]],
            [["Escolha a preposição correta: 'Ela mora __ em uma cidade grande.'", "в"], ["на", "в", "у", "из", "Не знаю"]],
            [["Escolha a resposta correta: 'Vire à esquerda e depois siga _.'", "прямо"], ["назад", "вперёд", "направо", "прямо", "Не знаю"]]
        ],
        [ // B1
            [["Escolha a preposição correta: 'Estou interessado __ em aprender russo.'", "в"], ["в", "на", "с", "по", "Не знаю"]],
            [["Sarah foi ao parque no sábado e levou o cachorro com ela. Ela ficou lá até o anoitecer.\n Para onde Sarah foi no sábado?", "В парк"], ["В торговый центр", "К подруге", "В парк", "На пляж", "Не знаю"]],
            [["A que horas ele termina o trabalho?", "Às 17h"], ["Às 9h", "Às 13h", "Às 15h", "Às 17h", "Не знаю"]],
            [["Escolha a opção correta: 'Ela é __ em matemática, então ajuda seus amigos.'", "сильна"], ["слаба", "сильна", "устала", "скучно", "Не знаю"]],
            [["Escolha a forma verbal correta: 'Ano passado, nós _ uma praia bonita na Rússia.'", "посетили"], ["посетили", "посещаем", "посещали", "будем посещать", "Не знаю"]]
        ],
        [ // B2
            [["Complete a frase: 'Se eu soubesse, eu __ teria contado para você.'", "бы"], ["бы", "буду", "могу", "мог", "Не знаю"]],
            [["Qual é o objetivo do novo projeto?", "Reduzir a poluição"], ["Aumentar a poluição", "Limpar toda a cidade", "Reduzir a poluição", "Expandir a cidade", "Не знаю"]],
            [["O que ela prefere fazer no verão?", "Ficar em lugares mais frescos"], ["Ficar em lugares mais frescos", "Ir à praia", "Nadar na piscina", "Viajar para o exterior", "Не знаю"]],
            [["Escolha a opção correta: 'Você __ sair agora se quiser pegar o trem.'", "нужно"], ["нельзя", "нужно", "не стоит", "может быть", "Не знаю"]],
            [["Escolha a resposta correta: 'Depois da discussão, eles finalmente decidiram __ e se perdoar.'", "помириться"], ["подождать", "помириться", "посмотреть", "захватить", "Не знаю"]]
        ],
        [ // C1
            [["Escolha a opção correta: 'Apesar de __ o exame, ele foi aceito no programa.'", "провал"], ["провал", "провалить", "провалил", "проваленный", "Не знаю"]],
            [["Qual é o principal objetivo da iniciativa da empresa?", "Reduzir os resíduos"], ["Aumentar os resíduos", "Limpar a cidade", "Reduzir os resíduos", "Expandir os negócios", "Не знаю"]],
            [["Qual é uma desvantagem do trabalho em casa mencionada no áudio?", "Pode levar ao isolamento"], ["Aumenta a produtividade", "Pode levar ao isolamento", "Economiza tempo", "Melhora o foco", "Не знаю"]],
            [["Escolha a forma correta: 'O projeto __ será concluído até o final do ano.'", "будет"], ["будет", "был", "есть", "будут", "Не знаю"]],
            [["Escolha a melhor opção: 'Embora a decisão fosse impopular, foi considerada __ para o sucesso da empresa.'", "необходимым"], ["приятным", "необходимым", "опциональным", "незначительным", "Не знаю"]]
        ],
        [ // C2
            [["Escolha a frase mais adequada: 'O projeto está _ atrasado, pois a equipe ainda está coletando dados.'", "временно"], ["временно", "окончательно", "относительно", "постоянно", "Не знаю"]],
            [["Qual é um dos objetivos da expressão artística?", "Refletir os valores da sociedade"], ["Refletir os valores da sociedade", "Entreter sem propósito", "Evitar temas controversos", "Seguir normas tradicionais", "Не знаю"]],
            [["Qual desafio é mencionado em relação à tecnologia?", "Dificulta manter conexões pessoais"], ["Melhora conexões pessoais", "É muito cara", "Dificulta manter conexões pessoais", "Não afeta os relacionamentos", "Не знаю"]],
            [["Escolha a resposta correta: 'O autor __ luz sobre um problema frequentemente ignorado na sociedade.'", "проливает"], ["проливает", "показывает", "приводит", "разъясняет", "Не знаю"]],
            [["Complete a frase com a opção mais adequada: 'Após anos de pesquisa, o cientista finalmente __ a teoria que intrigava seus colegas por décadas.'", "подтвердила"], ["подтвердила", "приблизила", "игнорировала", "усомнилась", "Не знаю"]]
        ]
    ]

};


const effectBoxes = [document.getElementById("effect-a"),document.getElementById("effect-b"),document.getElementById("effect-c"), document.getElementById("effect-d"), document.getElementById("effect-e")]
const proficiencyLevels = {"english" : ["a1","a2","b1","b2","c1","c2"],
                            "spanish" : ["a1","a2","b1","b2","c1","c2"],
                            "french" : ["a1","a1","b1","b2","c1","c2"],
                            "chinese" : ["hsk-1","hsk-2"," hsk-3"," hsk-4"," hsk-5"," hsk-6"],
                            "japanese" : ["n5","n4","n3","n2","n1"],
                            "german" : ["a1","a2","b1","b2","c1","c2"],
                            "korean" : ["topik i (nivel 1)","topik i (nivel 2)"," topik ii (nivel 3)"," topik ii (nivel 4)","topik ii (nivel 5)","topik ii (nivel 6)"],
                            "italian" : ["a1","a2","b1","b2","c1","c2"],
                            "russian" : ["a1","a2","b1","b2","c1","c2"]
}

const root = document.querySelector(":root");

const alphabet = ["a","b","c","d","e"]


let proficiency="";
let difficultLevel=0;
let currentQuestion = 0;
let answeredQuestions = 0;
let totalQuestions = 0;

let rightAnswered = 0;
let wrongAnswered = 0;
let barValue = 70;
var url = window.location.href;


var params = url.split("?");
if(params.length>1){
   params= decodeURIComponent(params[1].replace("+", " ")).split("&");
}

var dict = {};


params.forEach(param => {
    if(param.includes("=")){
    dict[param.split("=")[0]] =  param.split("=")[1]; 
    }
});

const language = dict["language"];
const level = dict["level"];

if (level != null){
    growBarValue(100,100);
    gotoCourseButton.href += "?language="+language+"&level="+level
    resultsContainer.style.display = "block"
    resultOutput.innerHTML = level.toUpperCase()

}else {
    growBarValue(70, 70);
    preTestContainer.style.display = "block"
    
}

function startTest(){

    testContainer.style.display = "block"
    preTestContainer.style.display = "none"

    

    for (let i = 0; i < answers[language].length; i++) {
    //i = diffucult levels index
    //shuffle questions
    shuffleArray(answers[language][i])
    for(let j = 0 ; j < answers[language][i].length ;  j++){
        //j = questions
        totalQuestions++;
        shuffleArray(getAnswers(language, i, j))
        
    }
}
updateQuestion()
}
let clicked = false;
async function answer(answer, letterIndex){
    if(!clicked){
        clicked=true
    let givenClass;
    if (answer == getCurrentRightAnswer()){
        givenClass="effectRight";
        answerButtons[letterIndex].style.color= "green"
        rightAnswered++;

    }else{
        answerButtons[letterIndex].style.color= "red"
        givenClass="effectWrong";
        wrongAnswered++;
    }
    effectBoxes[letterIndex].classList.add(givenClass)
    
    effectBoxes[letterIndex].checked=true;
    growBarValue(barValue, barValue+1);

    await new Promise(r => setTimeout(r, 1000));
    currentQuestion++;
    answeredQuestions++;
    effectBoxes[letterIndex].checked=false;
    effectBoxes[letterIndex].classList.remove(givenClass)
   updateQuestion();
   answerButtons[letterIndex].style.color= "black"
   clicked=false
   
}
}

function updateQuestion(){
    if(answeredQuestions >= totalQuestions){
        proficiency =  proficiencyLevels[language][Math.floor(rightAnswered/5)];
        window.location.replace("test.html?language="+language + "&level="+proficiency)
    }else if(currentQuestion >= answers[language][difficultLevel].length){
        difficultLevel++;
        currentQuestion=0;
    }

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = alphabet[i]+") "+ getCurrentAnswers()[i];
        answerButtons[i].onclick = function() { answer(getCurrentAnswers()[i], i)}
    }
    if(answers[language][difficultLevel][currentQuestion].length==3){
        audioOutput.src = answers[language][difficultLevel][currentQuestion][2]
        audioOutput.style.display = "block"
    }else{
        audioOutput.style.display = "none"

    }


    question.innerHTML = (answeredQuestions+1) + ". " + getCurrentQustionStatement()
}

//veio da internet
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
}
}


function getCurrentQustionStatement(){
    
    return answers[language][difficultLevel][currentQuestion][0][0];
}
function getCurrentRightAnswer(){
    return answers[language][difficultLevel][currentQuestion][0][1];
}
function getCurrentAnswers(){
    return answers[language][difficultLevel][currentQuestion][1];
}

function getCurrentQustionStatement(){
    return answers[language][difficultLevel][currentQuestion][0][0];
}

function getStatement(lang, level, question){
    return answers[lang][level][question][0][0];
}


function getRightAnswer(lang, level, question){
    return answers[lang][level][question][0][1];
}


function getAnswers(lang, level, question){
    return answers[lang][level][question][1];
}
function growBarValue(prev, post){
    barValue = post;

    //r.style.setProperty('--barValue', "40%");
    barValueDiv.style.animation = "none"
    setTimeout(()=> {

        barValueDiv.style.animation = null

    })

    root.style.setProperty('--prevBarValue', prev+"%" );
    root.style.setProperty('--barValue', post+"%");

}