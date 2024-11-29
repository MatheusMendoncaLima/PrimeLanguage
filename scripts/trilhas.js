const turnInJsonAfter = {
    "proeficiencyLevels":{
        "english": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "german": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "french": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "russian": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "spanish": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "italian": {
            "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
            "a2": ["Básico A2", "imgs/icons/beginner.png"],
            "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
            "b2": ["Intermediário B2", "imgs/icons/intermediate.png"],
            "c1": ["Avançado C1", "imgs/icons/advanced.png"],
            "c2": ["Fluente C2", "imgs/icons/advanced.png"]
        },
        "chinese": {
            "hsk-1": ["HSK-1", "imgs/icons/beginner.png"],
            "hsk-2": ["HSK-2", "imgs/icons/beginner.png"],
            "hsk-3": ["HSK-3", "imgs/icons/intermediate.png"],
            "hsk-4": ["HSK-4", "imgs/icons/intermediate.png"],
            "hsk-5": ["HSK-5", "imgs/icons/advanced.png"],
            "hsk-6": ["HSK-6", "imgs/icons/advanced.png"]
        },
        "korean": {
            "topik i (nivel 1)": ["TOPIK I (nivel 1)", "imgs/icons/beginner.png"],
            "topik i (nivel 2)": ["TOPIK I (nivel 2)", "imgs/icons/beginner.png"],
            "topik ii (nivel 3)": ["TOPIK II (nivel 3)", "imgs/icons/intermediate.png"],
            "topik ii (nivel 4)": ["TOPIK II (nivel 4)", "imgs/icons/intermediate.png"],
            "topik ii (nivel 5)": ["TOPIK II (nivel 5)", "imgs/icons/advanced.png"],
            "topik ii (nivel 6)": ["TOPIK II (nivel 6)", "imgs/icons/advanced.png"]
        },
        "japanese": {
            "n5": ["Iniciante N5", "imgs/icons/beginner.png"],
            "n4": ["Básico N4", "imgs/icons/beginner.png"],
            "n3": ["Intermediário N3", "imgs/icons/intermediate.png"],
            "n2": ["Intermediário N2", "imgs/icons/intermediate.png"],
            "n1": ["Avançado N1", "imgs/icons/advanced.png"],
        }
    },

    "modules" : { //how to use: modules[languages][proeficiencyLevel][chapterNumber]
        //how to use: modules[languages][proeficiencyLevel][chapterNumber][0] - chaptername
        //how to use: modules[languages][proeficiencyLevel][chapterNumber][1] - images
        //how to use: modules[languages][proeficiencyLevel][chapterNumber][2] - titles
        //how to use: modules[languages][proeficiencyLevel][chapterNumber][3] - descriptions
        "english": {
            "a1": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Hello!",
                  "Formulating sentences",
                  "Basic conversation",
                  "Game time!",
                  "Introduce yourself",
                  "Referring to someone",
                  "Vocabulary review",
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"I\" e \"you\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Developing your communication",
                  "Expressing yourself",
                  "Singular forms of the verb \"to be\"",
                  "Listening polite conversation",
                  "Preposition of place",
                  "Describing your hometown",
                  "Fluency check",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"I am\", \"You are\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"near\", \"in\" e \"at\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "a2": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Talking about your daily routine",
                  "Shopping and services",
                  "Making plans and invitations",
                  "Giving directions",
                  "Talking about time and schedules",
                  "Responding to basic questions",
                  "Improving your vocabulary",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Describing past experiences",
                  "Talking about your favorite places",
                  "Understanding basic instructions",
                  "Expressing likes and dislikes",
                  "Describing people and objects",
                  "Talking about simple future plans",
                  "Building confidence in conversations",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "b1": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Sharing opinions",
                  "Travel and transportation",
                  "Discussing hobbies and interests",
                  "Talking about health and wellness",
                  "Solving everyday problems",
                  "Comparing options",
                  "Reacting to situations",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"Which one is better?\" ou \"This is more convenient.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Work and career",
                  "Storytelling techniques",
                  "Cultural traditions",
                  "Handling misunderstandings",
                  "Explaining a process",
                  "Discussing your goal",
                  "Vocabulary for deeper conversations",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "b2": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Debating and persuading",
                  "Advanced travel scenarios",
                  "Expressing emotions in depth",
                  "Exploring culture and art",
                  "Professional discussions",
                  "Handling hypothetical scenarios",
                  "Making recommendations",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"What if...?\" ou \"Suppose that...\".",
                  "Descubra como sugerir algo, como \"I think you should...\" ou \"Why don't we...?\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Mastering phrasal verbs",
                  "Complex grammar structures",
                  "Presenting arguments",
                  "Writing emails and formal letters",
                  "Using synonyms and paraphrasing",
                  "Clarifying misunderstandings",
                  "Building fluency with idiomatic expressions",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "c1": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Exploring nuanced expressions",
                    "Formal and informal communication",
                    "Handling challenging conversations",
                    "Public speaking and presentations",
                    "Writing with impact",
                    "Explaining complex ideas",
                    "Explaining abstract concepts",
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Cultural fluency",
                    "Advanced listening comprehension",
                    "Exploring technical and academic topics",
                    "Perfecting pronunciation and intonation",
                    "Creative writing",
                    "Analyzing different viewpoints",
                    "Discussing cultural differences",
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "c2": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Mastering advanced idioms and slang",
                    "Critical thinking and analysis",
                    "Specialized topics",
                    "Handling advanced debates",
                    "Professional writing mastery",
                    "Exploring advanced metaphors and symbolism",
                    "Mastering humor in conversation",
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Adapting to all audiences",
                    "Improvisation skills",
                    "Exploring philosophical and abstract topics",
                    "Building a personal communication style",
                    "Polishing advanced communication skills",
                    "Revising and perfecting your style",
                    "Handling unexpected questions",
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            },
            "spanish": {
                "a1": [
                    [
                      "Capítulo 1: Introdução",
                      [
                        "imgs/icons/trilhas/hello.png",
                        "imgs/icons/trilhas/formulating sentences.png",
                        "imgs/icons/trilhas/basic conversation.png",
                        "imgs/icons/trilhas/game time.png",
                        "imgs/icons/trilhas/introduce yourself.png",
                        "imgs/icons/trilhas/refering to someone.png",
                        "imgs/icons/trilhas/vocabulary review.png",
                        "imgs/icons/trilhas/exam.png"
                      ],
                      [
                        "¡Hola!",
                        "Formulando oraciones",
                        "Conversación básica",
                        "¡Hora de jugar!",
                        "Preséntate",
                        "Refiriéndose a alguien",
                        "Revisión de vocabulario",
                        "Exame Final - Capítulo 1"
                      ],
                      [
                        "Aprenda o básico, mas o essencial!",
                        "Hora de desenvolver algumas frases!",
                        "\"Que horas são?\"",
                        "Vamos nos divertir enquanto aprendemos!",
                        "Fale um pouco sobre você.",
                        "Aprenda mais sobre os pronomes \"Yo\" e \"Tú\".",
                        "Expanda seu repertório de fala!",
                        ""
                      ]
                    ],
                    [
                        "Capítulo 2: Diálogo",
                        [
                          "imgs/icons/trilhas/developing your communication.png",
                          "imgs/icons/trilhas/Expressing yourself.png",
                          "imgs/icons/trilhas/singular forms of the verb to be.png",
                          "imgs/icons/trilhas/listening polite conversation.png",
                          "imgs/icons/trilhas/preposition of place.png",
                          "imgs/icons/trilhas/describing your hometown.png",
                          "imgs/icons/trilhas/fluency check.png",
                          "imgs/icons/trilhas/exam.png"
                        ],
                        [
                          "Desarrollando tu comunicación",
                          "Expresándote",
                          "Formas singulares de los verbos \"ser\" y \"estar\"",
                          "Escuchando una conversación educada",
                          "Preposición de lugar",
                          "Describiendo tu ciudad natal",
                          "Chequeo de fluidez",
                          "Exame final - Capítulo 2"
                        ],
                        [
                          "Aprenda a falar naturalmente.",
                          "Veja modos de falar e contextos onde podemos usá-las.",
                          "\"Yo soy\", \"Tú eres\".",
                          "Desenvolva a comunicação formal.",
                          "Descreva localizações com \"cerca de\" e \"en\".",
                          "Conte-nos sobre sua vizinhança.",
                          "Revise o quanto já aprendeu.",
                          ""
                        ]
                      ]
                    ],
                        "a2": [
                          [
                            "Capítulo 1: Comunicação do Dia a Dia",
                            [
                              "imgs/icons/trilhas/hello.png",
                              "imgs/icons/trilhas/formulating sentences.png",
                              "imgs/icons/trilhas/basic conversation.png",
                              "imgs/icons/trilhas/game time.png",
                              "imgs/icons/trilhas/introduce yourself.png",
                              "imgs/icons/trilhas/refering to someone.png",
                              "imgs/icons/trilhas/vocabulary review.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Hablando sobre tu rutina diaria",
                              "Compras y servicios",
                              "Haciendo planes e invitaciones",
                              "Dando direcciones",
                              "Hablando sobre horarios y agendas",
                              "Respondiendo preguntas básicas",
                              "Mejorando tu vocabulario",
                              "Exame final - Capítulo 1"
                            ],
                            [
                                "Aprenda a descrever seu dia a dia com confiança!",
                                "Saiba pedir ajuda e comprar o que precisa.",
                                "Vamos praticar como convidar e organizar encontros.",
                                "Descubra como ajudar alguém a se localizar.",
                                "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                                "Pratique como responder perguntas comuns no cotidiano.",
                                "Amplie seu repertório com novas palavras úteis.",
                                ""
                            ]
                          ],
                          [
                            "Capítulo 2: Interagindo com o Mundo",
                            [
                              "imgs/icons/trilhas/developing your communication.png",
                              "imgs/icons/trilhas/Expressing yourself.png",
                              "imgs/icons/trilhas/singular forms of the verb to be.png",
                              "imgs/icons/trilhas/listening polite conversation.png",
                              "imgs/icons/trilhas/preposition of place.png",
                              "imgs/icons/trilhas/describing your hometown.png",
                              "imgs/icons/trilhas/fluency check.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Describiendo experiencias pasadas",
                              "Hablando de tus lugares favoritos",
                              "Entendiendo instrucciones básicas",
                              "Expresando gustos y disgustos",
                              "Describiendo personas y objetos",
                              "Hablando de planes futuros simples",
                              "Construyendo confianza en conversaciones",
                              "Exame final - Capítulo 2"
                            ],
                            [
                              "¡Habla sobre momentos e historias del pasado!",
                              "Comparte detalles sobre lugares que te gustan.",
                              "Aprende a seguir y dar instrucciones simples.",
                              "Expresa con claridad lo que te gusta o no te gusta.",
                              "Practica cómo dar detalles sobre personas o cosas a tu alrededor.",
                              "Descubre cómo compartir lo que planeas hacer.",
                              "Siéntete más seguro al hablar con otros.",
                              ""
                            ]
                          ]
                        ],
                        "b1": [
                          [
                            "Capítulo 1: Conversas Mais Complexas",
                            [
                              "imgs/icons/trilhas/hello.png",
                              "imgs/icons/trilhas/formulating sentences.png",
                              "imgs/icons/trilhas/basic conversation.png",
                              "imgs/icons/trilhas/game time.png",
                              "imgs/icons/trilhas/introduce yourself.png",
                              "imgs/icons/trilhas/refering to someone.png",
                              "imgs/icons/trilhas/vocabulary review.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Compartiendo opiniones",
                              "Viajes y transporte",
                              "Discutiendo pasatiempos e intereses",
                              "Hablando sobre salud y bienestar",
                              "Resolviendo problemas cotidianos",
                              "Comparando opciones",
                              "Reaccionando a situaciones",
                              "Exame final - Capítulo 1"
                            ],
                            [
                              "Aprenda a expressar o que você pensa!",
                              "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                              "Compartilhe o que você ama fazer no tempo livre.",
                              "Pratique como explicar problemas de saúde básicos.",
                              "Explore situações práticas, como resolver pequenos imprevistos.",
                              "Pratique como comparar coisas, como \"¿Cual es mejor?\" ou \"Esto es más conveniente\"",
                              "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                            ""
                            ]
                          ],
                          [
                            "Capítulo 2: Exploração Cultural e Profissional",
                            [
                              "imgs/icons/trilhas/developing your communication.png",
                              "imgs/icons/trilhas/Expressing yourself.png",
                              "imgs/icons/trilhas/singular forms of the verb to be.png",
                              "imgs/icons/trilhas/listening polite conversation.png",
                              "imgs/icons/trilhas/preposition of place.png",
                              "imgs/icons/trilhas/describing your hometown.png",
                              "imgs/icons/trilhas/fluency check.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Trabajo y carrera",
                              "Técnicas de narración",
                              "Tradiciones culturales",
                              "Manejando malentendidos",
                              "Explicando un proceso",
                              "Hablando de tus metas",
                              "Vocabulario para conversaciones más profundas",
                              "Examen final - Capítulo 2"
                            ],
                            [
                              "Comece a falar sobre suas ambições profissionais!",
                              "Envolva os outros com histórias bem contadas.",
                              "Descubra como falar sobre diferentes costumes e culturas.",
                              "Resolva mal-entendidos em uma conversa.",
                              "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                              "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                              "Expanda seu vocabulário para temas mais complexos.",
                              ""
                            ]
                          ]
                        ],
                        "b2": [
                          [
                            "Capítulo 1: Refinando a Comunicação",
                            [
                              "imgs/icons/trilhas/hello.png",
                              "imgs/icons/trilhas/formulating sentences.png",
                              "imgs/icons/trilhas/basic conversation.png",
                              "imgs/icons/trilhas/game time.png",
                              "imgs/icons/trilhas/introduce yourself.png",
                              "imgs/icons/trilhas/refering to someone.png",
                              "imgs/icons/trilhas/vocabulary review.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Debatiendo y persuadiendo",
                              "Escenarios avanzados de viaje",
                              "Expresando emociones en profundidad",
                              "Explorando cultura y arte",
                              "Discusiones profesionales",
                              "Manejando escenarios hipotéticos",
                              "Haciendo recomendaciones",
                              "Exame final - Capítulo 1"
                            ],
                            [
                              "Eleve sua comunicação com argumentos fortes!",
                              "Lide com situações inesperadas enquanto viaja.",
                              "Aprenda a descrever sentimentos de forma mais rica.",
                              "Fale sobre filmes, livros e música como um expert.",
                              "Conduza conversas sobre negócios e ideias.",
                              "Explore como lidar com situações hipotéticas, usando frases como \"Y si...\" ou \"Supongamos que...\".",
                              "Descubra como sugerir algo, como \"Creo que deberías...\" ou \"¿Por qué no...?\".",
                              ""
                            ]
                          ],
                          [
                            "Capítulo 2: Domínio de Estruturas e Vocabulário",
                            [
                              "imgs/icons/trilhas/developing your communication.png",
                              "imgs/icons/trilhas/Expressing yourself.png",
                              "imgs/icons/trilhas/singular forms of the verb to be.png",
                              "imgs/icons/trilhas/listening polite conversation.png",
                              "imgs/icons/trilhas/preposition of place.png",
                              "imgs/icons/trilhas/describing your hometown.png",
                              "imgs/icons/trilhas/fluency check.png",
                              "imgs/icons/trilhas/exam.png"
                            ],
                            [
                              "Dominando frases verbales",
                              "Estructuras gramaticales complejas",
                              "Presentando argumentos",
                              "Escribiendo correos y cartas formales",
                              "Usando sinónimos y parafraseando",
                              "Aclarando malentendidos",
                              "Mejorando fluidez con expresiones idiomáticas",
                              "Exame final - Capítulo 2"
                            ],
                            [
                              "Domine expressões essenciais para soar natural.",
                              "Vamos simplificar o complicado: prática avançada de gramática.",
                              "Construa e defenda sua opinião de forma clara.",
                              "Aprenda a se comunicar profissionalmente por escrito.",
                              "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                              "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                              "Use expressões idiomáticas para enriquecer sua fala.",
                              ""
                            ]
                          ]
                        ],
                        "c1": [
                            [
                                "Capítulo 1: Excelência na Comunicação",
                                [
                                    "imgs/icons/trilhas/hello.png",
                                    "imgs/icons/trilhas/formulating sentences.png",
                                    "imgs/icons/trilhas/basic conversation.png",
                                    "imgs/icons/trilhas/game time.png",
                                    "imgs/icons/trilhas/introduce yourself.png",
                                    "imgs/icons/trilhas/refering to someone.png",
                                    "imgs/icons/trilhas/vocabulary review.png",
                                    "imgs/icons/trilhas/exam.png"
                                ],
                                [
                                    "Explorando expresiones matizadas",
                                    "Comunicación formal e informal",
                                    "Manejando conversaciones desafiantes",
                                    "Hablar en público y presentaciones",
                                    "Escribiendo con impacto",
                                    "Explicando ideas complejas",
                                    "Explicando conceptos abstractos",
                                    "Exame final - Capítulo 1"
                                ],
                                [
                                    "Entenda e use expressões idiomáticas como um nativo!",
                                    "Ajuste sua fala para diferentes contextos sociais.",
                                    "Saiba navegar debates complexos e temas delicados.",
                                    "Fale com confiança em público ou reuniões.",
                                    "Aprenda a criar textos convincentes e articulados.",
                                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                                    ""   
                                ]
                            ],
                            [
                                "Capítulo 2: Sofisticação Cultural e Técnica",
                                [
                                    "imgs/icons/trilhas/developing your communication.png",
                                    "imgs/icons/trilhas/Expressing yourself.png",
                                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                                    "imgs/icons/trilhas/listening polite conversation.png",
                                    "imgs/icons/trilhas/preposition of place.png",
                                    "imgs/icons/trilhas/describing your hometown.png",
                                    "imgs/icons/trilhas/fluency check.png",
                                    "imgs/icons/trilhas/exam.png"
                                ],
                                [
                                    "Fluidez cultural",
                                    "Comprensión auditiva avanzada",
                                    "Explorando temas técnicos y académicos",
                                    "Perfeccionando la pronunciación y la entonación",
                                    "Escritura creativa",
                                    "Analizando diferentes puntos de vista",
                                    "Discutiendo diferencias culturales",
                                    "Exame final - Capítulo 2"
                                ],
                                [
                                    "Adapte sua linguagem a diferentes culturas e costumes.",
                                    "Domine a compreensão de diferentes sotaques e contextos.",
                                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                                    "Trabalhe nos detalhes para soar impecável.",
                                    "Crie histórias e textos originais com estilo e clareza.",
                                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                                    ""
                                ]
                            ]
                        ],
                        "c2": [
                            [
                                "Capítulo 1: Domínio Completo",
                                [
                                    "imgs/icons/trilhas/hello.png",
                                    "imgs/icons/trilhas/formulating sentences.png",
                                    "imgs/icons/trilhas/basic conversation.png",
                                    "imgs/icons/trilhas/game time.png",
                                    "imgs/icons/trilhas/introduce yourself.png",
                                    "imgs/icons/trilhas/refering to someone.png",
                                    "imgs/icons/trilhas/vocabulary review.png",
                                    "imgs/icons/trilhas/exam.png"
                                ],
                                [
                                    "Dominando modismos y jerga avanzados",
                                    "Pensamiento crítico y análisis",
                                    "Temas especializados",
                                    "Manejando debates avanzados",
                                    "Dominio de la escritura profesional",
                                    "Explorando metáforas y simbolismos avanzados",
                                    "Dominando el humor en la conversación",
                                    "Exame final - Capítulo 1"
                                ],
                                [
                                    "Alcance o nível de naturalidade de um falante nativo.",
                                    "Expresse opiniões críticas e análises profundas.",
                                    "Discuta temas técnicos ou acadêmicos com fluência.",
                                    "Mantenha a compostura em debates difíceis.",
                                    "Escreva com precisão para qualquer contexto.",
                                    "Domine metáforas e símbolos em discussões e textos avançados.",
                                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                                    ""
                                ]
                            ],
                            [
                                "Capítulo 2: Versatilidade Completa",
                                [
                                    "imgs/icons/trilhas/developing your communication.png",
                                    "imgs/icons/trilhas/Expressing yourself.png",
                                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                                    "imgs/icons/trilhas/listening polite conversation.png",
                                    "imgs/icons/trilhas/preposition of place.png",
                                    "imgs/icons/trilhas/describing your hometown.png",
                                    "imgs/icons/trilhas/fluency check.png",
                                    "imgs/icons/trilhas/exam.png"
                                ],
                                [
                                    "Adaptándose a todas las audiencias",
                                    "Habilidades de improvisación",
                                    "Explorando temas filosóficos y abstractos",
                                    "Construyendo un estilo de comunicación personal",
                                    "Perfeccionando habilidades de comunicación avanzada",
                                    "Revisando y perfeccionando tu estilo",
                                    "Manejando preguntas inesperadas",
                                    "Exame final - Capítulo 2"
                                ],
                                [
                                    "Seja claro e eficaz ao falar com qualquer público.",
                                    "Responda rapidamente a qualquer situação com naturalidade.",
                                    "Mergulhe em ideias profundas e abstratas com confiança.",
                                    "Desenvolva um estilo único e marcante ao se expressar.",
                                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                                    ""
                                ]
                            ]
                        ]
            },
            "french": {
                "a1": [
                    [
                        "Capítulo 1: Introdução",
                        [
                            "imgs/icons/trilhas/hello.png",
                            "imgs/icons/trilhas/formulating sentences.png",
                            "imgs/icons/trilhas/basic conversation.png",
                            "imgs/icons/trilhas/game time.png",
                            "imgs/icons/trilhas/introduce yourself.png",
                            "imgs/icons/trilhas/refering to someone.png",
                            "imgs/icons/trilhas/vocabulary review.png",
                            "imgs/icons/trilhas/exam.png"
                        ],
                        [
                            "Bonjour !",
                            "Formuler des phrases",
                            "Conversation de base",
                            "C'est l'heure de jouer !",
                            "Présente-toi",
                            "Faire référence à quelqu'un",
                            "Révision de vocabulaire",
                            "Exame final - Capítulo 1",
                        ],
                        [
                            "Aprenda o básico, mas o essencial!",
                            "Hora de desenvolver algumas frases!",
                            "\"Que horas são?\"",
                            "Vamos nos divertir enquanto aprendemos!",
                            "Fale um pouco sobre você.",
                            "Aprenda mais sobre os pronomes \"Je\" e \"Toi\".",
                            "Expanda seu repertório de fala!",
                            ""
                        ]
                    ],
                    [
                        "Capítulo 2: Diálogo",
                        [
                            "imgs/icons/trilhas/developing your communication.png",
                            "imgs/icons/trilhas/Expressing yourself.png",
                            "imgs/icons/trilhas/singular forms of the verb to be.png",
                            "imgs/icons/trilhas/listening polite conversation.png",
                            "imgs/icons/trilhas/preposition of place.png",
                            "imgs/icons/trilhas/describing your hometown.png",
                            "imgs/icons/trilhas/fluency check.png",
                            "imgs/icons/trilhas/exam.png"
                        ],
                        [
                            "Développer ta communication",
                            "T'exprimer",
                            "Formes singulières du verbe \"être\"",
                            "Écouter une conversation polie",
                            "Préposition de lieu",
                            "Décrire ta ville natale",
                            "Vérification de fluidité",
                            "Exame final - Capítulo 2"
                        ],
                        [
                            "Aprenda a falar naturalmente.",
                            "Veja modos de falar e contextos onde podemos usá-las.",
                            "\"Je suis\", \"Tu es\".",
                            "Desenvolva a comunicação formal.",
                            "Descreva localizações com \"près\" et \"dans\".",
                            "Conte-nos sobre sua vizinhança.",
                            "Revise o quanto já aprendeu.",
                            ""
                        ]
                    ]
                ],
                "a2": [
                    [
                        "Capítulo 1: Comunicação do Dia a Dia",
                        [
                            "imgs/icons/trilhas/hello.png",
                            "imgs/icons/trilhas/formulating sentences.png",
                            "imgs/icons/trilhas/basic conversation.png",
                            "imgs/icons/trilhas/game time.png",
                            "imgs/icons/trilhas/introduce yourself.png",
                            "imgs/icons/trilhas/refering to someone.png",
                            "imgs/icons/trilhas/vocabulary review.png",
                            "imgs/icons/trilhas/exam.png"
                        ],
                        [
                            "Parler de ta routine quotidienne",
                            "Faire des achats et utiliser des services",
                            "Faire des plans et inviter",
                            "Donner des directions",
                            "Parler du temps et des horaires",
                            "Répondre à des questions de base",
                            "Améliorer ton vocabulaire",
                            "Exame final - Capítulo 1"
                        ],
                        [
                            "Aprenda a descrever seu dia a dia com confiança!",
                            "Saiba pedir ajuda e comprar o que precisa.",
                            "Vamos praticar como convidar e organizar encontros.",
                            "Descubra como ajudar alguém a se localizar.",
                            "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                            "Pratique como responder perguntas comuns no cotidiano.",
                            "Amplie seu repertório com novas palavras úteis.",
                            ""
                        ]
                    ],
                    [
                        "Capítulo 2: Interagindo com o Mundo",
                        [
                            "imgs/icons/trilhas/developing your communication.png",
                            "imgs/icons/trilhas/Expressing yourself.png",
                            "imgs/icons/trilhas/singular forms of the verb to be.png",
                            "imgs/icons/trilhas/listening polite conversation.png",
                            "imgs/icons/trilhas/preposition of place.png",
                            "imgs/icons/trilhas/describing your hometown.png",
                            "imgs/icons/trilhas/fluency check.png",
                            "imgs/icons/trilhas/exam.png" 
                        ],
                        [
                            "Décrire des expériences passées",
                            "Parler de tes lieux préférés",
                            "Comprendre des instructions de base",
                            "Exprimer ce que tu aimes et ce que tu n'aimes pas",
                            "Décrire des personnes et des objets",
                            "Parler de plans futurs simples",
                            "Gagner en confiance dans les conversations",
                            "Exame final - Capítulo 2"
                        ],
                        [
                            "Fale sobre momentos e histórias do passado!",
                            "Compartilhe detalhes sobre lugares que você gosta.",
                            "Aprenda a seguir e dar instruções simples.",
                            "Diga com clareza o que gosta ou não gosta.",
                            "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                            "Aprenda a compartilhar o que você pretende fazer.",
                            "Sinta-se mais seguro ao falar com outras pessoas.",
                            ""
                        ]
                    ]
                ],
                "b1": [
                    [
                        "Capítulo 1: Conversa Mais Complexas",
                        [
                            "imgs/icons/trilhas/hello.png",
                            "imgs/icons/trilhas/formulating sentences.png",
                            "imgs/icons/trilhas/basic conversation.png",
                            "imgs/icons/trilhas/game time.png",
                            "imgs/icons/trilhas/introduce yourself.png",
                            "imgs/icons/trilhas/refering to someone.png",
                            "imgs/icons/trilhas/vocabulary review.png",
                            "imgs/icons/trilhas/exam.png"
                        ],
                        [
                            "Partager des opinions",
                            "Voyages et transports",
                            "Discuter des loisirs et des centres d'intérêt",
                            "Parler de la santé et du bien-être",
                            "Résoudre des problèmes quotidiens",
                            "Comparer des options",
                            "Réagir à des situations",
                            "Exame final - Capítulo 1"
                        ],
                        [
                            "Aprenda a expressar o que você pensa!",
                            "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                            "Compartilhe o que você ama fazer no tempo livre.",
                            "Pratique como explicar problemas de saúde básicos.",
                            "Explore situações práticas, como resolver pequenos imprevistos.",
                            "Pratique como comparar coisas, como \"Lequel est meilleur ?\" ou \"C'est plus pratique.\"",
                            "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                            ""  
                        ]
                    ],
                    [
                        "Capítulo 2: Exploração Cultural e Profissional",
                        [
                            "imgs/icons/trilhas/developing your communication.png",
                            "imgs/icons/trilhas/Expressing yourself.png",
                            "imgs/icons/trilhas/singular forms of the verb to be.png",
                            "imgs/icons/trilhas/listening polite conversation.png",
                            "imgs/icons/trilhas/preposition of place.png",
                            "imgs/icons/trilhas/describing your hometown.png",
                            "imgs/icons/trilhas/fluency check.png",
                            "imgs/icons/trilhas/exam.png"
                        ],
                        [
                            "Travail et carrière",
                            "Techniques de narration",
                            "Traditions culturelles",
                            "Gérer les malentendus",
                            "Expliquer un processus",
                            "Discuter de ton objectif",
                            "Vocabulaire pour des conversations plus approfondies",
                            "Exame final - Capítulo 2"
                        ],
                        [
                            "Comece a falar sobre suas ambições profissionais!",
                            "Envolva os outros com histórias bem contadas.",
                            "Descubra como falar sobre diferentes costumes e culturas.",
                            "Resolva mal-entendidos em uma conversa.",
                            "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                            "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                            "Expanda seu vocabulário para temas mais complexos.",
                            ""
                        ]
                    ]
                ],
                "b2": [
                    [
                      "Capítulo 1: Refinando a Comunicação",
                      [
                        "imgs/icons/trilhas/hello.png",
                        "imgs/icons/trilhas/formulating sentences.png",
                        "imgs/icons/trilhas/basic conversation.png",
                        "imgs/icons/trilhas/game time.png",
                        "imgs/icons/trilhas/introduce yourself.png",
                        "imgs/icons/trilhas/refering to someone.png",
                        "imgs/icons/trilhas/vocabulary review.png",
                        "imgs/icons/trilhas/exam.png"
                      ],
                      [
                        "Débattre et persuader",
                        "Scénarios de voyage avancés",
                        "Exprimer des émotions en profondeur",
                        "Explorer la culture et l'art",
                        "Discussions professionnelles",
                        "Gérer des scénarios hypothétiques",
                        "Faire des recommandations",
                        "Exame final - Capítulo 1"
                      ],
                      [
                        "Eleve sua comunicação com argumentos fortes!",
                        "Lide com situações inesperadas enquanto viaja.",
                        "Aprenda a descrever sentimentos de forma mais rica.",
                        "Fale sobre filmes, livros e música como um expert.",
                        "Conduza conversas sobre negócios e ideias.",
                        "Explore como lidar com situações hipotéticas, usando frases como \"Et si...?\" ou \"Supposons que...\".",
                        "Descubra como sugerir algo, como \"Je pense que tu devrais...\" ou \"Pourquoi ne pas...?\".",
                        ""
                      ]
                    ],
                    [
                      "Capítulo 2: Domínio de Estruturas e Vocabulário",
                      [
                        "imgs/icons/trilhas/developing your communication.png",
                        "imgs/icons/trilhas/Expressing yourself.png",
                        "imgs/icons/trilhas/singular forms of the verb to be.png",
                        "imgs/icons/trilhas/listening polite conversation.png",
                        "imgs/icons/trilhas/preposition of place.png",
                        "imgs/icons/trilhas/describing your hometown.png",
                        "imgs/icons/trilhas/fluency check.png",
                        "imgs/icons/trilhas/exam.png"
                      ],
                      [
                        "Maîtriser les verbes à particules",
                        "Structures grammaticales complexes",
                        "Présenter des arguments",
                        "Rédiger des e-mails et des lettres formelles",
                        "Utiliser des synonymes et reformuler",
                        "Clarifier les malentendus",
                        "Améliorer la fluidité avec des expressions idiomatiques",
                        "Exame final - Capítulo 2"
                      ],
                      [
                        "Domine expressões essenciais para soar natural.",
                        "Vamos simplificar o complicado: prática avançada de gramática.",
                        "Construa e defenda sua opinião de forma clara.",
                        "Aprenda a se comunicar profissionalmente por escrito.",
                        "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                        "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                        "Use expressões idiomáticas para enriquecer sua fala.",
                        ""
                      ]
                    ]
                  ],
                  "c1": [
                      [
                        "Capítulo 1: Excelência na Comunicação",
                        [
                          "imgs/icons/trilhas/hello.png",
                          "imgs/icons/trilhas/formulating sentences.png",
                          "imgs/icons/trilhas/basic conversation.png",
                          "imgs/icons/trilhas/game time.png",
                          "imgs/icons/trilhas/introduce yourself.png",
                          "imgs/icons/trilhas/refering to someone.png",
                          "imgs/icons/trilhas/vocabulary review.png",
                          "imgs/icons/trilhas/exam.png"
                        ],
                        [
                          "Explorer des expressions nuancées",
                          "Communication formelle et informelle",
                          "Gérer des conversations difficiles",
                          "Prendre la parole en public et faire des présentations",
                          "Écrire avec impact",
                          "Expliquer des idées complexes",
                          "Expliquer des concepts abstraits",
                          "Exame final - Capítulo 1"
                        ],
                        [
                          "Entenda e use expressões idiomáticas como um nativo!",
                          "Ajuste sua fala para diferentes contextos sociais.",
                          "Saiba navegar debates complexos e temas delicados.",
                          "Fale com confiança em público ou reuniões.",
                          "Aprenda a criar textos convincentes e articulados.",
                          "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                          "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                          ""
                        ]
                      ],
                      [
                        "Capítulo 2: Sofisticação Cultural e Técnica",
                        [
                          "imgs/icons/trilhas/developing your communication.png",
                          "imgs/icons/trilhas/Expressing yourself.png",
                          "imgs/icons/trilhas/singular forms of the verb to be.png",
                          "imgs/icons/trilhas/listening polite conversation.png",
                          "imgs/icons/trilhas/preposition of place.png",
                          "imgs/icons/trilhas/describing your hometown.png",
                          "imgs/icons/trilhas/fluency check.png",
                          "imgs/icons/trilhas/exam.png"
                        ],
                        [
                          "Maîtrise culturelle",
                          "Compréhension orale avancée",
                          "Explorer des sujets techniques et académiques",
                          "Perfectionner la prononciation et l'intonation",
                          "Écriture créative",
                          "Analyser différents points de vue",
                          "Discuter des différences culturelles",
                          "Exame final - Capítulo 2"
                        ],
                        [
                          "Adapte sua linguagem a diferentes culturas e costumes.",
                          "Domine a compreensão de diferentes sotaques e contextos.",
                          "Discuta assuntos técnicos e acadêmicos com fluência.",
                          "Trabalhe nos detalhes para soar impecável.",
                          "Crie histórias e textos originais com estilo e clareza.",
                          "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                          "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                          ""
                        ]
                      ]
                    ],
                    "c2": [
                      [
                        "Capítulo 1: Domínio Completo",
                        [
                          "imgs/icons/trilhas/hello.png",
                          "imgs/icons/trilhas/formulating sentences.png",
                          "imgs/icons/trilhas/basic conversation.png",
                          "imgs/icons/trilhas/game time.png",
                          "imgs/icons/trilhas/introduce yourself.png",
                          "imgs/icons/trilhas/refering to someone.png",
                          "imgs/icons/trilhas/vocabulary review.png",
                          "imgs/icons/trilhas/exam.png"
                        ],
                        [
                          "Maîtriser les idiomes avancés et l'argot",
                          "Pensée critique et analyse",
                          "Sujets spécialisés",
                          "Gérer des débats avancés",
                          "Maîtrise de l'écriture professionnelle",
                          "Explorer des métaphores et des symbolismes avancés",
                          "Maîtriser l'humour dans la conversation",
                          "Exame final - Capítulo 1"
                        ],
                        [
                          "Alcance o nível de naturalidade de um falante nativo.",
                          "Expresse opiniões críticas e análises profundas.",
                          "Discuta temas técnicos ou acadêmicos com fluência.",
                          "Mantenha a compostura em debates difíceis.",
                          "Escreva com precisão para qualquer contexto.",
                          "Domine metáforas e símbolos em discussões e textos avançados.",
                          "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                          ""
                        ]
                      ],
                      [
                        "Capítulo 2: Versatilidade Completa",
                        [
                          "imgs/icons/trilhas/developing your communication.png",
                          "imgs/icons/trilhas/Expressing yourself.png",
                          "imgs/icons/trilhas/singular forms of the verb to be.png",
                          "imgs/icons/trilhas/listening polite conversation.png",
                          "imgs/icons/trilhas/preposition of place.png",
                          "imgs/icons/trilhas/describing your hometown.png",
                          "imgs/icons/trilhas/fluency check.png",
                          "imgs/icons/trilhas/exam.png"
                        ],
                        [
                          "S'adapter à tous les publics",
                          "Compétences en improvisation",
                          "Explorer des sujets philosophiques et abstraits",
                          "Construire un style de communication personnel",
                          "Peaufiner des compétences avancées en communication",
                          "Réviser et perfectionner ton style",
                          "Gérer des questions inattendues",
                          "Exame final - Capítulo 2"
                        ],
                        [
                          "Seja claro e eficaz ao falar com qualquer público.",
                          "Responda rapidamente a qualquer situação com naturalidade.",
                          "Mergulhe em ideias profundas e abstratas com confiança.",
                          "Desenvolva um estilo único e marcante ao se expressar.",
                          "Treine como responder perguntas inesperadas com clareza e confiança.",
                          "Aprimore os mínimos detalhes de sua fala e escrita.",
                          "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                          ""
                        ]
                      ]
                    ]
            },
            "italian": {
                "a1": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Ciao!",
                  "Formulare frasi",
                  "Conversazione di base",
                  "È ora di giocare!",
                  "Presentati",
                  "Fare riferimento a qualcuno",
                  "Revisione del vocabolario",
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"IO\" e \"Voi\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Sviluppare la tua comunicazione",
                  "Esprimerti",
                  "Forme singolari del verbo \"essere\"",
                  "Ascoltare una conversazione educata",
                  "Preposizione di luogo",
                  "Descrivere la tua città natale",
                  "Verifica della fluidità",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"Sono\", \"Sei\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"Vicino\", \"nel\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "a2": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Parlare della tua routine quotidiana",
                  "Fare acquisti e utilizzare servizi",
                  "Organizzare piani e inviti",
                  "Dare indicazioni",
                  "Parlare di orari e programmi",
                  "Rispondere a domande di base",
                  "Migliorare il tuo vocabolario",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Descrivere esperienze passate",
                  "Parlare dei tuoi luoghi preferiti",
                  "Comprendere istruzioni di base",
                  "Esprimere ciò che ti piace e ciò che non ti piace",
                  "Descrivere persone e oggetti",
                  "Parlare di piani futuri semplici",
                  "Acquisire fiducia nelle conversazioni",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "b1": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Condividere opinioni",
                  "Viaggi e trasporti",
                  "Discutere di hobby e interessi",
                  "Parlare di salute e benessere",
                  "Risolvere problemi quotidiani",
                  "Confrontare opzioni",
                  "Reagire a situazioni",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"Quale è meglio?\" ou \"Questo è più conveniente.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Lavoro e carriera",
                  "Tecniche di narrazione",
                  "Tradizioni culturali",
                  "Gestire i malintesi",
                  "Spiegare un processo",
                  "Discutere i tuoi obiettivi",
                  "Vocabolario per conversazioni più approfondite",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "b2": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Dibattere e persuadere",
                  "Scenari di viaggio avanzati",
                  "Esprimere emozioni in modo approfondito",
                  "Esplorare la cultura e l'arte",
                  "Discussioni professionali",
                  "Gestire scenari ipotetici",
                  "Fare raccomandazioni",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"Cosa succede se...?\" ou \"Supponiamo che...\".",
                  "Descubra como sugerir algo, como \"Penso che dovresti...\" ou \"Perché non...?\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Padroneggiare i phrasal verbs",
                  "Strutture grammaticali complesse",
                  "Presentare argomentazioni",
                  "Scrivere email e lettere formali",
                  "Utilizzare sinonimi e parafrasi",
                  "Chiarire i malintesi",
                  "Acquisire fluidità con espressioni idiomatiche",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "c1": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Esplorare espressioni sfumate",
                    "Comunicazione formale e informale",
                    "Gestire conversazioni difficili",
                    "Parlare in pubblico e fare presentazioni",
                    "Scrivere con impatto",
                    "Spiegare idee complesse",
                    "Spiegare concetti astratti",
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Fluenza culturale",
                    "Comprensione avanzata dell'ascolto",
                    "Esplorare argomenti tecnici e accademici",
                    "Perfezionare la pronuncia e l'intonazione",  
                    "Scrittura creativa",
                    "Analizzare diversi punti di vista",
                    "Discutere le differenze culturali", 
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "c2": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Padroneggiare idiomi avanzati e slang",
                    "Pensiero critico e analisi",
                    "Argomenti specializzati",
                    "Gestire dibattiti avanzati",
                    "Maestria nella scrittura professionale",
                    "Esplorare metafore e simbolismi avanzati",
                    "Padroneggiare l'umorismo nella conversazione",
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Adattarsi a tutti i tipi di pubblico",
                    "Abilità di improvvisazione",
                    "Esplorare argomenti filosofici e astratti",
                    "Costruire uno stile di comunicazione personale", 
                    "Raffinare le abilità di comunicazione avanzate",
                    "Rivedere e perfezionare il proprio stile",
                    "Gestire domande inaspettate",
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            },
            "russian": {
                "a1": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Привет!",
                  "Составление предложений",
                  "Основной разговор",
                  "Время игры!",
                  "Представьтесь",
                  "Ссылка на кого-либо",
                  "Повторение словаря",
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"я\" e \"Ты\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Развитие ваших навыков общения",
                  "Выражение себя",
                  "Единственные формы глагола \"Быть\" e \"быть\"",
                  "Прослушивание вежливого разговора",
                  "Предлоги места",
                  "Описание вашего родного города",
                  "Проверка беглости речи",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"Я\", \"Ты\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"около\" e \"в\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "a2": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Разговор о вашем ежедневном распорядке",
                  "Покупки и услуги",
                  "Планирование и приглашения",
                  "Давать указания",
                  "Разговор о времени и расписаниях",
                  "Ответы на базовые вопросы",
                  "Улучшение вашего словарного запаса",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Описание прошлых событий",
                  "Разговор о ваших любимых местах",
                  "Понимание основных инструкций",
                  "Выражение того, что нравится и не нравится",
                  "Описание людей и объектов",
                  "Разговор о простых планах на будущее",
                  "Развитие уверенности в беседах",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "b1": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Обмен мнениями",
                  "Путешествия и транспорт",
                  "Обсуждение хобби и интересов",
                  "Разговор о здоровье и благополучии",
                  "Решение повседневных проблем",
                  "Сравнение вариантов",
                  "Реакция на ситуации",
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"Какой из них лучше?\" ou \"Это более удобно.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Работа и карьера",
                  "Техники повествования",
                  "Культурные традиции",
                  "Устранение недоразумений",
                  "Объяснение процесса", 
                  "Обсуждение вашей цели",  
                  "Словарный запас для более глубоких разговоров",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "b2": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Дебаты и убеждение",
                  "Продвинутые сценарии путешествий",
                  "Глубокое выражение эмоций",  
                  "Исследование культуры и искусства",  
                  "Профессиональные обсуждения",  
                  "Работа с гипотетическими сценариями",  
                  "Дача рекомендаций",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"Что, если...?\" ou \"Предположим, что...\".",
                  "Descubra como sugerir algo, como \"Я думаю, тебе следует...\" ou \"Почему бы нам не...?\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Освоение фразовых глаголов",  
                  "Сложные грамматические конструкции",  
                  "Представление аргументов",  
                  "Написание электронных писем и официальных писем",  
                  "Использование синонимов и перефразирование",  
                  "Прояснение недоразумений",  
                  "Развитие беглости с помощью идиоматических выражений",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "c1": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Изучение тонких выражений",  
                    "Формальное и неформальное общение",  
                    "Ведение сложных бесед",  
                    "Публичные выступления и презентации",  
                    "Письмо с воздействием",  
                    "Объяснение сложных идей",  
                    "Объяснение абстрактных концепций",
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Культурная беглость",  
                    "Продвинутое понимание на слух",
                    "Изучение технических и академических тем",
                    "Совершенствование произношения и интонации",
                    "Креативное письмо",  
                    "Анализ различных точек зрения",  
                    "Обсуждение культурных различий",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "c2": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Освоение продвинутых идиом и сленга",  
                    "Критическое мышление и анализ",  
                    "Специализированные темы",  
                    "Ведение продвинутых дебатов",  
                    "Мастерство профессионального письма",  
                    "Изучение сложных метафор и символизма",  
                    "Освоение юмора в беседе",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Адаптация к любой аудитории",  
                    "Навыки импровизации",  
                    "Изучение философских и абстрактных тем",  
                    "Создание личного стиля общения",  
                    "Оттачивание продвинутых навыков общения",  
                    "Редактирование и совершенствование вашего стиля",  
                    "Работа с неожиданными вопросами",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            },
            "chinese": {
                "hsk-1": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "你好！",  
                  "造句",  
                  "基础对话",  
                  "游戏时间！",  
                  "自我介绍",  
                  "指代某人",  
                  "词汇复习",  
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"我\" e \"你\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "发展你的交流能力",  
                  "表达自己",  
                  "动词\"成为\"和\"是\"的单数形式",  
                  "听礼貌的对话",  
                  "地点介词",  
                  "描述你的家乡",
                  "流利度检查",
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"我是\", \"你是\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"靠近\" e \"在\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "hsk-2": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "谈论你的日常作息",  
                  "购物与服务",  
                  "制定计划和发出邀请",  
                  "指路",  
                  "谈论时间和日程安排",  
                  "回答基础问题",  
                  "提升你的词汇量",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "描述过去的经历",  
                  "谈论你最喜欢的地方",  
                  "理解基本指令",  
                  "表达喜欢和不喜欢", 
                  "描述人物和物品",  
                  "谈论简单的未来计划",  
                  "建立对话的信心",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "hsk-3": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "分享观点",
                  "旅行与交通",  
                  "讨论爱好和兴趣",  
                  "谈论健康与福祉",  
                  "解决日常问题",  
                  "比较选项",  
                  "应对各种情况",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"哪一个更好？\" ou \"这更方便.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "工作与职业",  
                  "讲故事的技巧",  
                  "文化传统",  
                  "处理误解",  
                  "解释一个过程",  
                  "讨论你的目标",  
                  "深入对话的词汇",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "hsk-4": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "辩论与说服",  
                  "高级旅行情境", 
                  "深入表达情感",  
                  "探索文化与艺术",  
                  "专业讨论",  
                  "处理假设场景",  
                  "提出建议",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"如果什么...？\" ou \"假设...\".",
                  "Descubra como sugerir algo, como \"我认为你应该...\" ou \"我们为何不...？\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "掌握短语动词",  
                  "复杂的语法结构",  
                  "陈述论点",  
                  "撰写电子邮件和正式信件",  
                  "使用同义词和改述",  
                  "澄清误解",  
                  "通过习语表达提高流利度",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "hsk-5": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "探索细腻的表达",  
                    "正式与非正式的交流",  
                    "应对具有挑战性的对话",  
                    "公共演讲与演示",  
                    "有影响力的写作",  
                    "解释复杂的概念",  
                    "解释抽象的概念",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "文化流利度",  
                    "高级听力理解",  
                    "探索技术和学术主题",  
                    "完善发音和语调",  
                    "创意写作",  
                    "分析不同的观点",  
                    "讨论文化差异",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "hsk-6": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "掌握高级习语和俚语",  
                    "批判性思维与分析",  
                    "专业主题",  
                    "应对高级辩论",  
                    "掌握专业写作",  
                    "探索高级隐喻和象征意义",  
                    "掌握对话中的幽默",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "适应所有观众",  
                    "即兴技巧",  
                    "探索哲学和抽象主题",  
                    "建立个人沟通风格",  
                    "提升高级沟通技巧",  
                    "修改并完善你的风格",  
                    "应对意外问题",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            },
            "japanese": {
                "n5": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "こんにちは！",  
                  "文を作る",  
                  "基本的な会話",  
                  "ゲームの時間！",  
                  "自己紹介する",  
                  "誰かを指す",  
                  "語彙の復習",  
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"私\" e \"あなた\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "コミュニケーション能力の向上",  
                  "自分を表現する",  
                  "動詞 \"なる\" と \"なれ\" の単数形",  
                  "丁寧な会話を聞く",  
                  "場所を表す前置詞",  
                  "自分の故郷を説明する", 
                  "流暢さのチェック",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"私は\", \"あなたは\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"近く\" e \"で\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "n4": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "日常生活のルーチンについて話す",  
                  "買い物とサービス",  
                  "計画や招待を立てる",  
                  "道案内をする",  
                  "時間とスケジュールについて話す",  
                  "基本的な質問に答える",  
                  "語彙を増やす",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "過去の経験を説明する",  
                  "お気に入りの場所について話す",  
                  "基本的な指示を理解する",  
                  "好き嫌いを表現する",  
                  "人や物を説明する",  
                  "簡単な将来の計画について話す",  
                  "会話に自信を持つ",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "n3": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "意見を共有する",  
                  "旅行と交通手段",  
                  "趣味や興味について話し合う",  
                  "健康とウェルネスについて話す",
                  "日常の問題を解決する",  
                  "選択肢を比較する",  
                  "状況に反応する",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"Which one is better?\" ou \"This is more convenient.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "仕事とキャリア",  
                  "物語の技術",  
                  "文化的伝統",  
                  "誤解を処理する",  
                  "プロセスを説明する",  
                  "目標について話し合う",  
                  "深い会話のための語彙",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "n2": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "議論と説得",  
                  "高度な旅行シナリオ", 
                  "感情を深く表現する",  
                  "文化と芸術を探求する", 
                  "専門的な議論",  
                  "仮定的な状況に対応する",  
                  "提案を行う",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"もしも...？\" ou \"仮に...\".",
                  "Descubra como sugerir algo, como \"あなたはそうすべきだと思います...\" ou \"どうして…しないの？\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "句動詞を習得する",  
                  "複雑な文法構造",  
                  "論点を提示する",  
                  "メールや正式な手紙を書く",  
                  "同義語や言い換えを使う",  
                  "誤解を解消する",  
                  "慣用表現で流暢さを高める", 
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "n1": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "微妙な表現を探る",  
                    "形式的および非形式的なコミュニケーション",  
                    "困難な会話に対応する",  
                    "プレゼンテーションとスピーチ",  
                    "インパクトのある文章を書く",  
                    "複雑なアイデアを説明する",  
                    "抽象的な概念を説明する",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "文化的流暢さ",  
                    "高度なリスニング理解",  
                    "技術的および学術的なトピックを探求する",  
                    "発音とイントネーションを完璧にする",  
                    "創造的な文章を書く",  
                    "さまざまな視点を分析する",  
                    "文化の違いについて話し合う",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ]
            },
            "korean": {
                "topik i (nivel 1)": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "안녕하세요!",  
                  "문장 만들기",  
                  "기본 회화",  
                  "게임 시간!",  
                  "자기소개하기",  
                  "누군가를 언급하기",  
                  "어휘 복습",  
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"나\" e \"너\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "의사소통 능력 개발하기",  
                  "자신을 표현하기",  
                  "동사 \"장차 ~ 가 되는\" 의 단수 형태",  
                  "정중한 대화를 듣기",  
                  "장소에 대한 전치사",  
                  "고향 설명하기",  
                  "유창성 점검",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"그래요\", \"당신은\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"가까운\" e \"~에\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "topik i (nivel 2)": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "일상 루틴에 대해 이야기하기", 
                  "쇼핑과 서비스",  
                  "계획 세우기와 초대하기",  
                  "길 안내하기",  
                  "시간과 일정에 대해 이야기하기",  
                  "기본 질문에 답하기",  
                  "어휘 늘리기",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "과거 경험 묘사하기",  
                  "가장 좋아하는 장소에 대해 이야기하기",  
                  "기본 지시 사항 이해하기",  
                  "좋아하는 것과 싫어하는 것 표현하기",  
                  "사람과 사물 묘사하기",  
                  "간단한 미래 계획에 대해 이야기하기",  
                  "대화에서 자신감 키우기",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "topik ii (nivel 3)": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "의견 공유하기",  
                  "여행과 교통",  
                  "취미와 관심사에 대해 논의하기",  
                  "건강과 웰빙에 대해 이야기하기",  
                  "일상 문제 해결하기", 
                  "옵션 비교하기",  
                  "상황에 반응하기",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"어느 것이 더 낫나요?\" ou \"이게 더 편리해요.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "일과 경력",  
                  "스토리텔링 기술",  
                  "문화적 전통",  
                  "오해 다루기",  
                  "과정 설명하기",  
                  "목표에 대해 논의하기",  
                  "더 깊은 대화를 위한 어휘",  
                  "Exame final - Capítulo 2",
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "topik ii (nivel 4)": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "토론과 설득",  
                  "고급 여행 시나리오",  
                  "감정을 깊이 있게 표현하기",  
                  "문화와 예술 탐구하기",  
                  "전문적인 토론",  
                  "가상 시나리오 다루기",  
                  "추천하기",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"만약...?\" ou \"가정해 보면...\".",
                  "Descubra como sugerir algo, como \"내 생각엔 당신은...\" ou \"우리는 왜 그렇게 하지 않을까요?\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "구 동사 숙달하기",  
                  "복잡한 문법 구조",  
                  "논거 제시하기",  
                  "이메일과 공식 서신 작성하기",  
                  "동의어 사용과 바꿔 말하기",  
                  "오해를 명확히 하기",  
                  "관용구 표현으로 유창성 키우기",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "topik ii (nivel 5)": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "미묘한 표현 탐구하기",  
                    "격식 있는 의사소통과 비격식 의사소통",  
                    "도전적인 대화 다루기",  
                    "공개 연설 및 발표하기",  
                    "영향력 있는 글쓰기",  
                    "복잡한 아이디어 설명하기",  
                    "추상적인 개념 설명하기",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "문화적 유창성",  
                    "고급 듣기 이해",  
                    "기술 및 학술 주제 탐구하기",  
                    "발음과 억양 완벽히 하기",  
                    "창의적인 글쓰기",  
                    "다양한 관점 분석하기",  
                    "문화적 차이에 대해 논의하기",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "topik ii (nivel 6)": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "고급 관용구와 속어 숙달하기",  
                    "비판적 사고와 분석",  
                    "전문적인 주제",  
                    "고급 토론 다루기",  
                    "전문적인 글쓰기 마스터하기", 
                    "고급 은유와 상징 탐구하기",  
                    "대화에서 유머 마스터하기",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "모든 청중에 맞추기",  
                    "즉흥 기술",  
                    "철학적이고 추상적인 주제 탐구하기", 
                    "개인적인 의사소통 스타일 구축하기",  
                    "고급 의사소통 기술 다듬기",  
                    "스타일 수정 및 완성하기",  
                    "예상치 못한 질문 처리하기",  
                    "Exame final - Capítulo 2",
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            },
            "german": {
                "a1": [
              [
                "Capítulo 1: Introdução",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Hallo!",  
                  "Sätze formulieren",  
                  "Grundlegende Konversation",  
                  "Spielzeit!",  
                  "Stell dich vor",  
                  "Auf jemanden verweisen",  
                  "Wortschatzüberprüfung",  
                  "Exame Final - Capítulo 1"
                ],
                [
                  "Aprenda o básico, mas o essencial!",
                  "Hora de desenvolver algumas frases!",
                  "\"Que horas são?\"",
                  "Vamos nos divertir enquanto aprendemos!",
                  "Fale um pouco sobre você.",
                  "Aprenda mais sobre os pronomes \"ICH\" e \"Du\".",
                  "Expanda seu repertório de fala!",
                  ""
                ]
              ],
              [
                "Capítulo 2: Diálogo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Entwicklung deiner Kommunikationsfähigkeiten",  
                  "Dich selbst ausdrücken",  
                  "Singularformen des Verbs \"sein\"",  
                  "Eine höfliche Konversation anhören",  
                  "Präpositionen des Ortes",  
                  "Deine Heimatstadt beschreiben",  
                  "Flüssigkeitsprüfung",  
                  "Exame final - Capítulo 2",
                ],
                [
                  "Aprenda a falar naturalmente.",
                  "Veja modos de falar e contextos onde podemos usá-las.",
                  "\"Ich bin\", \"Du bist\".",
                  "Desenvolva a comunicação formal.",
                  "Descreva localizações com \"nahe\", \"in\" e \"bei\".",
                  "Conte-nos sobre sua vizinhança.",
                  "Revise o quanto já aprendeu.",
                  ""
                ]
              ]
            ],
            "a2": [
              [
                "Capítulo 1: Comunicação do Dia a Dia",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Über deine tägliche Routine sprechen",  
                  "Einkaufen und Dienstleistungen",  
                  "Pläne schmieden und Einladungen aussprechen",  
                  "Wegbeschreibungen geben",  
                  "Über Zeit und Zeitpläne sprechen",  
                  "Auf grundlegende Fragen antworten",  
                  "Deinen Wortschatz verbessern",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a descrever seu dia a dia com confiança!",
                  "Saiba pedir ajuda e comprar o que precisa.",
                  "Vamos praticar como convidar e organizar encontros.",
                  "Descubra como ajudar alguém a se localizar.",
                  "Aprenda a perguntar e responder sobre horários e compromissos do dia.",
                  "Pratique como responder perguntas comuns no cotidiano.",
                  "Amplie seu repertório com novas palavras úteis.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Interagindo com o Mundo",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Vergangene Erfahrungen beschreiben",  
                  "Über deine Lieblingsorte sprechen",  
                  "Grundlegende Anweisungen verstehen",  
                  "Vorlieben und Abneigungen ausdrücken",  
                  "Personen und Objekte beschreiben",  
                  "Über einfache Zukunftspläne sprechen",  
                  "Selbstvertrauen in Gesprächen aufbauen",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Fale sobre momentos e histórias do passado!",
                  "Compartilhe detalhes sobre lugares que você gosta.",
                  "Aprenda a seguir e dar instruções simples.",
                  "Diga com clareza o que gosta ou não gosta.",
                  "Pratique como dar detalhes sobre pessoas ou coisas ao seu redor.",
                  "Aprenda a compartilhar o que você pretende fazer.",
                  "Sinta-se mais seguro ao falar com outras pessoas.",
                  ""
                ]
              ]
            ],
            "b1": [
              [
                "Capítulo 1: Conversas Mais Complexas",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Meinungen teilen",  
                  "Reisen und Transport",  
                  "Hobbys und Interessen diskutieren",  
                  "Über Gesundheit und Wohlbefinden sprechen",  
                  "Alltagsprobleme lösen",  
                  "Optionen vergleichen",  
                  "Auf Situationen reagieren",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Aprenda a expressar o que você pensa!",
                  "Viajar ficou mais fácil: saiba se comunicar em aeroportos e transportes.",
                  "Compartilhe o que você ama fazer no tempo livre.",
                  "Pratique como explicar problemas de saúde básicos.",
                  "Explore situações práticas, como resolver pequenos imprevistos.",
                  "Pratique como comparar coisas, como \"Welches ist besser?\" ou \"Das ist bequemer.\"",
                  "Pratique como reagir e responder em diferentes contextos do dia a dia.",
                  ""
                ]
              ],
              [
                "Capítulo 2: Exploração Cultural e Profissional",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Arbeit und Karriere",  
                  "Techniken des Geschichtenerzählens",  
                  "Kulturelle Traditionen",  
                  "Umgang mit Missverständnissen",  
                  "Einen Prozess erklären",  
                  "Dein Ziel diskutieren",  
                  "Wortschatz für tiefgründige Gespräche",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Comece a falar sobre suas ambições profissionais!",
                  "Envolva os outros com histórias bem contadas.",
                  "Descubra como falar sobre diferentes costumes e culturas.",
                  "Resolva mal-entendidos em uma conversa.",
                  "Aprenda a descrever o passo a passo de uma tarefa ou ideia.",
                  "Aprenda a falar sobre seus objetivos pessoais e profissionais de maneira clara.",
                  "Expanda seu vocabulário para temas mais complexos.",
                  ""
                ]
              ]
            ],
            "b2": [
              [
                "Capítulo 1: Refinando a Comunicação",
                [
                  "imgs/icons/trilhas/hello.png",
                  "imgs/icons/trilhas/formulating sentences.png",
                  "imgs/icons/trilhas/basic conversation.png",
                  "imgs/icons/trilhas/game time.png",
                  "imgs/icons/trilhas/introduce yourself.png",
                  "imgs/icons/trilhas/refering to someone.png",
                  "imgs/icons/trilhas/vocabulary review.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Debattieren und Überzeugen",  
                  "Fortgeschrittene Reiseszenarien",  
                  "Emotionen tiefgründig ausdrücken",  
                  "Kultur und Kunst erkunden",  
                  "Professionelle Diskussionen",  
                  "Umgang mit hypothetischen Szenarien",  
                  "Empfehlungen aussprechen",  
                  "Exame final - Capítulo 1"
                ],
                [
                  "Eleve sua comunicação com argumentos fortes!",
                  "Lide com situações inesperadas enquanto viaja.",
                  "Aprenda a descrever sentimentos de forma mais rica.",
                  "Fale sobre filmes, livros e música como um expert.",
                  "Conduza conversas sobre negócios e ideias.",
                  "Explore como lidar com situações hipotéticas, usando frases como \"Was ist, wenn...?\" ou \"Angenommen, ...\".",
                  "Descubra como sugerir algo, como \"Ich denke, Sie sollten …\" ou \"Warum tun wir nicht...?\".",
                  ""
                ]
              ],
              [
                "Capítulo 2: Domínio de Estruturas e Vocabulário",
                [
                  "imgs/icons/trilhas/developing your communication.png",
                  "imgs/icons/trilhas/Expressing yourself.png",
                  "imgs/icons/trilhas/singular forms of the verb to be.png",
                  "imgs/icons/trilhas/listening polite conversation.png",
                  "imgs/icons/trilhas/preposition of place.png",
                  "imgs/icons/trilhas/describing your hometown.png",
                  "imgs/icons/trilhas/fluency check.png",
                  "imgs/icons/trilhas/exam.png"
                ],
                [
                  "Phrasal Verbs meistern",  
                  "Komplexe Grammatikstrukturen",  
                  "Argumente präsentieren",  
                  "E-Mails und formelle Briefe schreiben",  
                  "Synonyme verwenden und umschreiben",  
                  "Missverständnisse klären",  
                  "Flüssigkeit mit idiomatischen Ausdrücken entwickeln",  
                  "Exame final - Capítulo 2"
                ],
                [
                  "Domine expressões essenciais para soar natural.",
                  "Vamos simplificar o complicado: prática avançada de gramática.",
                  "Construa e defenda sua opinião de forma clara.",
                  "Aprenda a se comunicar profissionalmente por escrito.",
                  "Aprenda a substituir palavras e reformular frases para melhorar a clareza.",
                  "Pratique como explicar ou corrigir mal-entendidos durante uma conversa.",
                  "Use expressões idiomáticas para enriquecer sua fala.",
                  ""
                ]
              ]
            ],
            "c1": [
                [
                  "Capítulo 1: Excelência na Comunicação",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Nuancierte Ausdrücke erkunden",  
                    "Formelle und informelle Kommunikation",  
                    "Herausfordernde Gespräche führen",  
                    "Öffentliches Sprechen und Präsentationen",  
                    "Mit Wirkung schreiben",  
                    "Komplexe Ideen erklären",  
                    "Abstrakte Konzepte erklären",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Entenda e use expressões idiomáticas como um nativo!",
                    "Ajuste sua fala para diferentes contextos sociais.",
                    "Saiba navegar debates complexos e temas delicados.",
                    "Fale com confiança em público ou reuniões.",
                    "Aprenda a criar textos convincentes e articulados.",
                    "Desenvolva sua habilidade de apresentar ideias ou conceitos difíceis de forma clara.",
                    "Pratique como comunicar ideias abstratas, como felicidade, liberdade ou criatividade.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Sofisticação Cultural e Técnica",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Kulturelle Gewandtheit",  
                    "Fortgeschrittenes Hörverständnis",  
                    "Technische und akademische Themen erkunden",  
                    "Aussprache und Intonation perfektionieren",  
                    "Kreatives Schreiben",  
                    "Unterschiedliche Standpunkte analysieren",  
                    "Kulturelle Unterschiede diskutieren",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Adapte sua linguagem a diferentes culturas e costumes.",
                    "Domine a compreensão de diferentes sotaques e contextos.",
                    "Discuta assuntos técnicos e acadêmicos com fluência.",
                    "Trabalhe nos detalhes para soar impecável.",
                    "Crie histórias e textos originais com estilo e clareza.",
                    "Desenvolva sua habilidade de discutir pontos de vista opostos de forma objetiva.",
                    "Pratique como conversar sobre diferenças culturais com sensibilidade e clareza.",
                    ""
                  ]
                ]
              ],
              "c2": [
                [
                  "Capítulo 1: Domínio Completo",
                  [
                    "imgs/icons/trilhas/hello.png",
                    "imgs/icons/trilhas/formulating sentences.png",
                    "imgs/icons/trilhas/basic conversation.png",
                    "imgs/icons/trilhas/game time.png",
                    "imgs/icons/trilhas/introduce yourself.png",
                    "imgs/icons/trilhas/refering to someone.png",
                    "imgs/icons/trilhas/vocabulary review.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Fortgeschrittene Redewendungen und Slang meistern",  
                    "Kritisches Denken und Analyse",  
                    "Spezialisierte Themen",  
                    "Fortgeschrittene Debatten führen",  
                    "Meisterhaftes professionelles Schreiben",  
                    "Fortgeschrittene Metaphern und Symbolik erkunden",  
                    "Humor in Gesprächen meistern",  
                    "Exame final - Capítulo 1"
                  ],
                  [
                    "Alcance o nível de naturalidade de um falante nativo.",
                    "Expresse opiniões críticas e análises profundas.",
                    "Discuta temas técnicos ou acadêmicos com fluência.",
                    "Mantenha a compostura em debates difíceis.",
                    "Escreva com precisão para qualquer contexto.",
                    "Domine metáforas e símbolos em discussões e textos avançados.",
                    "Pratique como usar humor de forma eficaz e natural em diálogos complexos.",
                    ""
                  ]
                ],
                [
                  "Capítulo 2: Versatilidade Completa",
                  [
                    "imgs/icons/trilhas/developing your communication.png",
                    "imgs/icons/trilhas/Expressing yourself.png",
                    "imgs/icons/trilhas/singular forms of the verb to be.png",
                    "imgs/icons/trilhas/listening polite conversation.png",
                    "imgs/icons/trilhas/preposition of place.png",
                    "imgs/icons/trilhas/describing your hometown.png",
                    "imgs/icons/trilhas/fluency check.png",
                    "imgs/icons/trilhas/exam.png"
                  ],
                  [
                    "Anpassung an alle Zielgruppen",  
                    "Improvisationsfähigkeiten",  
                    "Philosophische und abstrakte Themen erkunden",  
                    "Einen persönlichen Kommunikationsstil entwickeln",  
                    "Fortgeschrittene Kommunikationsfähigkeiten verfeinern",  
                    "Ihren Stil überarbeiten und perfektionieren",  
                    "Umgang mit unerwarteten Fragen",  
                    "Exame final - Capítulo 2"
                  ],
                  [
                    "Seja claro e eficaz ao falar com qualquer público.",
                    "Responda rapidamente a qualquer situação com naturalidade.",
                    "Mergulhe em ideias profundas e abstratas com confiança.",
                    "Desenvolva um estilo único e marcante ao se expressar.",
                    "Treine como responder perguntas inesperadas com clareza e confiança.",
                    "Aprimore os mínimos detalhes de sua fala e escrita.",
                    "Pratique como revisar e melhorar sua forma de comunicação para atingir a perfeição.",
                    ""
                  ]
                ]
              ]
            }

          }
    }
var url = window.location.href;

var params = url.split("?");
if(params.length>1){
   params= decodeURIComponent(params[1].replaceAll("+", " ")).split("&");
}

var dict = {};


params.forEach(param => {
    if(param.includes("=")){
    dict[param.split("=")[0]] =  param.split("=")[1]; 
    }
});

const flag = document.getElementById("bandeira");
const dropDownFlag = document.getElementById("dropDownFlag");
const courseName = document.getElementById("courseName");
const allKeepLanguage = document.getElementsByClassName("keepLanguage");
const allKeepLevel = document.getElementsByClassName("keepLevel");
const levelNameBox =  document.getElementById("currentLevelName")
const listaNiveis = document.getElementsByClassName("lista-niveis")[0];
const container = document.getElementsByClassName("container")[0];


const LANGUAGES = {
    "english" : ["HELLO!", "Inglês"],
    "spanish" : ["¡HOLA!", "Espanhol"],
    "japanese" : ["こんにちは!", "Japonês"],
    "german" : ["HALLO!", "Alemão"],
    "french" : ["BONJOUR!", "Francês"],
    "chinese" : ["你好!", "Chinês"],
    "korean" : ["안녕하세요!", "Coreano"],
    "italian" : ["CIAO!", "Italiano"],
    "russian" : ["ПРИВЕТ!", "Russo"],
    "portuguese" : ["Olá!", "Português"]
}
const language = dict["language"];
const level = dict["level"].toLowerCase();
var levelNames = turnInJsonAfter["proeficiencyLevels"];


for(i=0; i< allKeepLanguage.length; i++){
    allKeepLanguage[i].href+="?language="+language+"&";
}
for(i=0; i< allKeepLevel.length; i++){
    allKeepLevel[i].href+="level="+level;
}

if(flag != null){
    flag.src= "imgs/flags/"+language+".png"
    
}
//pagina trilhas
if(dropDownFlag!= null){
    //dropdown
    dropDownFlag.src = "imgs/flags/"+language+".png";
    courseName.innerHTML = LANGUAGES[language][1] + " completo"
    levelNameBox.innerHTML = levelNames[language][level][0]
    for(i=0; i< Object.keys(levelNames[language]).length; i++){
        const placeholderLevelLi = document.createElement("li");
        const placeholderLevelA = document.createElement("a");
        const placeholderLevelH1 = document.createElement("h1");
        const placeholderLevelImg = document.createElement("img");

        placeholderLevelA.appendChild(placeholderLevelLi)
        placeholderLevelLi.appendChild(placeholderLevelImg)
        placeholderLevelLi.appendChild(placeholderLevelH1)

        placeholderLevelLi.classList.add("niveis")

        placeholderLevelA.href = "trilhas.html?language="+language+"&level="+Object.keys(levelNames[language])[i];
        placeholderLevelImg.src = Object.values(levelNames[language])[i][1]
        placeholderLevelH1.innerHTML = Object.values(levelNames[language])[i][0];
        
        if(Object.keys(levelNames[language])[i] == level){
            placeholderLevelLi.style.backgroundColor = "#5CDC8F"
        }
        listaNiveis.appendChild(placeholderLevelA)

    }

    //modulos

    for(let i = 0; i <  turnInJsonAfter["modules"][language][level].length; i++){
    const module = document.createElement("div")
    const chapterName = document.createElement("h2")
    module.classList.add("module")
    chapterName.innerHTML=turnInJsonAfter["modules"][language][level][i][0]
    module.appendChild(chapterName)
    for(let j=0; j< turnInJsonAfter["modules"][language][level][i][1].length; j++){
        const lesson = document.createElement("div")
        const arrow = document.createElement("div")
        arrow.classList.add("arrow")
        lesson.classList.add("lesson")
        if(j%2 == 1){
            lesson.classList.add("alignRight")
            arrow.classList.add("alignRight")

        }
        const img = document.createElement("img")
        const title = document.createElement("h3")
        const description = document.createElement("h4")
        img.src = turnInJsonAfter["modules"][language][level][i][1][j]
        title.innerHTML=turnInJsonAfter["modules"][language][level][i][2][j]
        description.innerHTML=turnInJsonAfter["modules"][language][level][i][3][j]
        lesson.appendChild(img)
        lesson.appendChild(title)
        lesson.appendChild(description)








    module.appendChild(lesson)
    if(j != turnInJsonAfter["modules"][language][level][i][1].length-1)
    module.append(arrow)

    }
    container.appendChild(module)
}
}

