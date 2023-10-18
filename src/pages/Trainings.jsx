import { useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import ImagemSolda from "../assets/img/microscopio.png";
import DegradacaoDoPlastico from "../assets/img/treinamentos/degradacaoDoPlastico.png";
import AnaliseDeFalhas from "../assets/img/treinamentos/analiseDeFalhas.png";
import PecasPlasticas from "../assets/img/treinamentos/pecasPlasticas.png";
import MatriaisPlasticos from "../assets/img/treinamentos/matriaisPlasticos.png";
import Fundicao from "../assets/img/treinamentos/fundicao.png";
import LigasDeAluminio from "../assets/img/treinamentos/ligasDeAluminio.png";
import MetalografiaBasica from "../assets/img/treinamentos/metalografiaBasica.png";
import TratamentoTermico from "../assets/img/treinamentos/tratamentoTermico.png";
import TecnologiaDaSoldagem from "../assets/img/treinamentos/tecnilogiaDaSoldagem.png";
import MatematicaBasica from "../assets/img/treinamentos/matematicaBasica.png";
import MetalografiaDoAluminio from "../assets/img/treinamentos/MetalografiaDoAluminio.png";
import ControleEstatistico from "../assets/img/treinamentos/controleEstatistico.png";
import Masp from "../assets/img/treinamentos/masp.png";
import Soldagem from "../assets/img/treinamentos/soldagem.png";
import Corrosao from "../assets/img/treinamentos/corrosao.png";
import QuimicaFundamental from "../assets/img/treinamentos/quimicaFundamental.png";
import MetrologiaBasica from "../assets/img/treinamentos/metrologiaBasica.png";
import GerenciaDeRiscos from "../assets/img/treinamentos/gerenciaDeRiscos.png";
import EnsaiosMecanicos from "../assets/img/treinamentos/ensaiosMecanicos.png";
import DesenhoTecnico from "../assets/img/treinamentos/desenhoTecnico.png";
import Impressao3D2 from "../assets/img/treinamentos/impressao3D-2.png";
import Tolerancia from "../assets/img/treinamentos/tolerancia.png";
import GestaoDeQualidade from "../assets/img/treinamentos/gestaoDeQualidade.png";
import Programa8S from "../assets/img/treinamentos/programa8S.png";
import Impressao3D from "../assets/img/treinamentos/impressao3D.png";
import LeanEnterprise from "../assets/img/treinamentos/leanEnterprise.png";
import GestaoDeProjetos from "../assets/img/treinamentos/gestaoDeProjetos.png";

export default function Trainings() {
  const treinamentosTeste = [
    {
      id: "1",
      title: "Aditivação e Degradação de Plásticos",
      imagem: `${DegradacaoDoPlastico}`,
      objetivo: "Obter conhecimento sobre aditivação de polímeros.",
      carga: "16 horas",
      conteudo:
        "1. Principais polímeros disponíveis no Brasil: uma visão do mercado. 2. As matérias primas. Homopolímeros, copolímeros, termoplásticos e termofixos. Borrachas e elastômeros. Blendas e compósitos. Reações de polimerização. 3. Formulação: definição. Componentes de uma formulação: aditivos, cargas, agentes de reforço e modificadores. Formas de degradação de polímeros e estabilizantes. Tipos de reações de degradação, cisão de cadeias e reticulação, degradação sem cisão de cadeias, auto-oxidação e despolimerização. Formas independentes de iniciação das reações de degradação: térmica e fotoquímica. Formas associadas de iniciação das reações de degradação: mecânica e termo-mecânica, química, fotoquímica e termo química e Stress-cracking. 4. Estabilizantes e anti-oxidantes: Plastificantes. Lubrificantes e desmoldantes. Agentes anti-estáticos e agentes anti-fogging.Retardantes de chama. Pigmentos e corantes. Agentes de expansão e espumantes. Nucleantes. Modificadores de impacto. Anti-microbianos ou biocidas. 5. Tipos de cargas. Cargas de enchimento. Cargas funcionais. Cargas de reforço, fibras e negro de fumo. 6. Compósitos e nanocompósitos. 7. Preparação das formulações. Mistura intensiva. Extrusora mono e dupla rosca. Preparação de master-batch.",
    },
    {
      id: "2",
      title: "Falhas em Peças Plásticas Injetadas",
      imagem: `${PecasPlasticas}`,
      objetivo: "Obter informações introdutórias a falhas em peças injetadas.",
      carga: "20 horas",
      conteudo:
        "1 Teoria sobre o processo de Injeção. O processo de moldagem por injeção e seus controles. 2 Propriedade dos termoplásticos: princípios básicos sobre a ciência dos polímeros. Forças moleculares e ligações químicas nos polímeros; Peso molecular e sua distribuição; Estado físico amorfo e cristalino; Transições térmicas em polímeros; Propriedades físicas: sólido, fundido, orientação molecular. 3 Efeitos das condições de processamento. Temperatura do cilindro de aquecimento; Velocidade de resfriamento da peça; Pressão: pressão de injeção, tempo e pressão de recalque, contra-pressão, velocidade de pressão e rotação da rosca. 4 Orientação molecular. Efeito das condições de transformação sobre: orientação, contração, e das propriedades, efeito sobre a resistência a tração, ao impacto, a tração das peças. 5 Linhas de Solda. Variações produzidas pós-moldagem;Tensões internas nas peças moldadas; Variações dimensionais pós-moldagem; Efeito do tratamento térmico sobre as peças moldadas;",
    },
    {
      id: "3",
      title: "Introdução a Análise Materiais Plásticos",
      imagem: `${MatriaisPlasticos}`,
      objetivo:
        "Obter informações introdutórias sobre propriedades de polímeros (Materiais Plásticos).",
      carga: "20 horas",
      conteudo:
        "As técnicas a serem abordadas são de Espectroscopia no Infravermelho (FTIR). Calorimetria Exploratória Diferencial (DSC). Análise Termogravimétrica (TGA). Análise Dinâmico Mecânica (DMA Microscopia Eletrônica de Varredura (MEV).",
    },
    {
      id: "4",
      title: "Introdução a Análise de Falhas",
      imagem: `${AnaliseDeFalhas}`,
      objetivo:
        "Curso oferecido para profissionais que trabalham na área de controle de qualidade de produtos metalúrgicos.",
      carga: "20 horas",
      conteudo:
        "1. Falha de um Componente Estrutural; 1.1 Definição de falha em uma estrutura; 1.2 Razões para a falha de uma estrutura; 1.3 O processo de falha; 1.4 A Fratura; 1.5 Funções da análise de falhas; 1.6 Procedimento investigativo. 2.Tipos de Falhas em Serviço; 2.1 Introdução; 2.2 Fratura de Corpos-de-prova (CPs) Ensaiados em Tração; 2.3 Principais tipos de fratura monotônica; 2.3.1 Fratura Dúctil; 2.3.2 Fratura Semifrágil; 2.3.3 Fratura Frágil; 2.3.4 Fratura Intergranular; 2.4 Fratura por Fadiga; 2.4.1 Mecanismos de Iniciação de Trincas ? Características Microscópicas; 2.4.2 Macrofractografia de Falhas por Fadiga; 2.5 Fratura por Fluência. 3. A condução de uma análise de falha; 3.1 Ênfase e Objetivo de uma Análise de Falha. 4. Análises Metalográficas (prática); 4.1 Introdução; 4.2Metalografia dos materiais envolvidos; 4.3Metalografia da região da falha. 5. Ensaios Mecânicos (prática); 5.1 Ensaio de Tração; 5.2 Ensaio de Dureza/microdureza.",
    },
    {
      id: "5",
      title: "Introdução aos Processos de Fundição",
      imagem: `${Fundicao}`,
      objetivo:
        "Obter informações introdutórias sobre os processos de fundição.",
      carga: "20 horas",
      conteudo:
        "1 Introdução aos Processos de Fundição /Solidificação; 1.1 Conceitos Gerais sobre Ciência dos Materiais; 1.2 Princípios das Transformações de Fases; 1.3 Conceitos Fundamentais da Fusão, Vazamento e Solidificação. 2 Processos em Moldes Permanentes; 2.1 Principais processos de fundição em coquilhas; 2.1.1 Por gravidade; 2.1.2 Baixa pressão; 2.1.3 Alta pressão; 2.1.3.1 Defeitos associados ao processo de fundição sob pressão; 2.2 Processos de fundição por centrifugação; 2.3 Processos de fundição de precisão; 2.4 Tixofundição. 3 Prática de fundição; 3.1 Demonstração prática de fundição em molde metálico.",
    },
    {
      id: "6",
      title: "Introdução às Ligas de Alumínio",
      imagem: `${LigasDeAluminio}`,
      objetivo:
        "Obter informações introdutórias das características do alumínio e suas ligas.",
      carga: "20 horas",
      conteudo:
        "1. Introdução a estrutura cristalina dos materiais metálicos. 2 Propriedades do Alumínio Puro; 2.1 Ponto de fusão; 2.2 Fluidez; 2.3 Solidificação; 2.4 Oxidação. 3 Influência dos Elementos de Ligas no Alumínio; 3.1 Silício; 3.2 Cobre; 3.3 Magnésio; 3.4 Ferro; 3.5 Outroselementos. 4 Ligas de Alumínio; 4.1 Ligas de alumínio; 4.2 Ligas de alumínio silício; 4.3 Modos de solidificação das ligas de alumínio; 4.4 Tratamentos realizados no alumínio: desgaseificação eescorificação; 5. Introdução as microestruturas do alumínio; 5.1 Soluções sólidas; 5.2 Diagrama de fases alumínio-Silício (Al-Si); 5.2 Microestruturas.",
    },
    {
      id: "7",
      title: "Metalografia do Alumínio",
      imagem: `${MetalografiaDoAluminio}`,
      objetivo:
        "Obter conhecimento práticos e teóricos sobre a Metalografia de ligas de alumínio e ",
      carga:
        "40 horas (com 12 horas de aulas práticas de metalografia do alumínio).",
      conteudo:
        "1. Importância da Metalografia; 1.1 Relação estrutura propriedade e processamento; 1.2 Conceito de estrutura; 1.3 Conceito de processamento; 1.4 Conceito de propriedade ou característica. 2 Como Analisar Estrutura de Metais e Ligas Metálicas; 2.1 Introdução ao diagrama de fases das ligas Al-Si e AlMg. 3 Preparação de Amostras; 3.1 Etapas de preparação da amostra metalográfica; 3.2 Cuidados Especiais; 3.2.1 Deformação; 3.2.2 Aquecimento; 3.2.3 Trincas; 3.3 Reagentes Químicos para Ataque; 3.4 Armazenamento das Amostras. 4. Práticas metalográficas.",
    },
    {
      id: "8",
      title: "Metalografia Básica",
      imagem: `${MetalografiaBasica}`,
      objetivo:
        "Apresentar técnicas e cuidados quanto a preparação de amostras para o ensaio metalográfico e identificação de fases. Apresentar informações práticas e fundamentais quanto à microestrutura de materiais.",
      carga: "15 horas, com 3 horas para aulas práticas",
      conteudo:
        "Introdução aos Ensaios Metalográficos: Objetivos; Macrografia; Micrografia; Objetivos das análises. Seleção da região de análise: Localização da amostra; Corte ; Montagem ou embutimento ; Identificação; Lixamento: manual; Polimentos: manual; Armazenamento; Ataques. Visual: Fotografias; Microscopia ótica",
    },
    {
      id: "9",
      title: "Tratamentos Térmicos e Termoquímicos de Metais",
      imagem: `${TratamentoTermico}`,
      objetivo:
        "Introduzir ao aluno os conceitos de tratamentos térmicos de modo que o tenha conhecimento para selecionar e supervisionar processos de tratamentos térmicos de ferrosos e não-ferrosos.",
      carga: "15 horas, com 3 horas para aulas práticas",
      conteudo:
        "O sistema Ferro Carbono: O elemento ferro; Soluções sólidas de ferro; Diagrama Fe-Fe3C; Pontos relevantes do diagrama Fe-Fe3C; Efeito do resfriamento e aquecimento nas linhas de transformação; Reações invariantes. Decomposição da Austenita e Diagrama TTT; Ferrita e cementita; Perlita; Bainita e ferrita acicular; A transformação martensita; Curvas ITT e CCT. O ensaio de Dureza: Fundamentos teóricos e prática. Tratamentos Térmicos dos Aços: Recozimento; Normalização; Tempera e Temperabilidade; Revenimento; Martêmpera; Austêmpera. Tratamentos Térmicos de Ligas de Alumínio: Endurecimento por precipitação. Análise Microestrutural : Microscopia ótica. Tratamentos termoquímicos: Cementação, nitretação e carbonitretação – Objetivos; Noções de processos; Ciclos térmicos; Microestruturas; Efeitos de variáveis; Aplicações",
    },
    {
      id: "10",
      title: "Tecnologia da Soldagem Industrial",
      imagem: `${TecnologiaDaSoldagem}`,
      objetivo:
        "Informar a operadores, técnicos que trabalhem com soldagem, os princípios e técnicas de soldagem.",
      carga: "20 horas.",
      conteudo:
        "O sistema Ferro Carbono: O elemento ferro; Soluções sólidas de ferro; Diagrama Fe-Fe3C; Pontos relevantes do diagrama Fe-Fe3C; Efeito do resfriamento e aquecimento nas linhas de transformação; Reações invariantes. Decomposição da Austenita e Diagrama TTT; Ferrita e cementita; Perlita; Bainita e ferrita acicular; A transformação martensita; Curvas ITT e CCT. O ensaio de Dureza: Fundamentos teóricos e prática. Tratamentos Térmicos dos Aços: Recozimento; Normalização; Tempera e Temperabilidade; Revenimento; Martêmpera; Austêmpera. Tratamentos Térmicos de Ligas de Alumínio: Endurecimento por precipitação. Análise Microestrutural : Microscopia ótica. Tratamentos termoquímicos: Cementação, nitretação e carbonitretação – Objetivos; Noções de processos; Ciclos térmicos; Microestruturas; Efeitos de variáveis; Aplicações",
    },
    {
      id: "11",
      title: "Matemática Básica para Produção",
      imagem: `${MatematicaBasica}`,
      objetivo:
        "Nivelar os conhecimentos acerca da matéria, proporcionando melhor desempenho dos acadêmicos nas disciplinas do Curso.",
      carga: "20 horas.",
      conteudo:
        "Conjuntos numéricos; Produtos notáveis; Frações; Razão; Proporção; Porcentagem; Potenciação; Radiciação; Racionalização; Funções; Equações do 1º grau com uma variável; Equações do 2º Grau ou Equações Quadráticas; Inequações do 1º Grau.",
    },
    {
      id: "12",
      title: "Controle Estatístico do Processo",
      imagem: `${ControleEstatistico}`,
      objetivo:
        "O objetivo é verificar, por meio do gráfico, se o processo está sob controle, ou seja, isento de causas especiais. Este gráfico determina estatisticamente uma faixa denominada limites de controle que é limitada pela linha superior (limite superior de controle) e uma linha inferior (limite inferior de controle), além de uma linha média.",
      carga: "20 horas.",
      conteudo:
        "1. Introdução. 2. Gráficos ou Cartas de Controle. 3. Fase Preparatória e Elaboração dos Gráficos. 4 Gráficos de Controle por Variáveis. 5. Gráficos de Controle por Atributo; 6. Cartas de Controle para Pequenos Lotes; 7. Gráficos de Controle Multivariados; 8. Gráficos de Pré-Controle; 9. Exercícios.",
    },
    {
      id: "13",
      title: "Metodologia de Análise e Solução de Problemas - MASP",
      imagem: `${Masp}`,
      objetivo:
        "Desenvolver de competências relativas à Qualidade e seus conceitos, possibilitando a formação de uma cultura individual e organizacional de análise de problemas de acordo com as técnicas de qualidade.",
      carga: "20 horas.",
      conteudo:
        "1. Metodologia de Análise e Solução de Problemas – MASP; 1.1. Conceituação de Problema; 1.2. Ciclo PDCA – Etapas, Relação de PDCA e MASP, Ciclo DMAIC. 2. As Sete Ferramentas da Qualidade; 2.1- Importância e utilização; 2.2- Descrição e estudo das ferramentas - I) Brainstorming; II) Estratificação; III) Folha de Verificação; IV) Histograma; V) Diagrama de Causa e Efeito; VI) Matriz de Priorização GUT; VII) Diagrama de Pareto; 2.3- Exercícios práticos. 3. Análise de Modo de Falhas – FMEA; 3.1- Princípios fundamentais para o uso do FMEA; 3.2- Tipos de FMEA; 3.3- Identificação de riscos; 3.4- Avaliação de Severidade, Ocorrência e Detecção; 3.5- Determinação do Número de Prioridade de Risco – NPR; 3.6- Elaboração do formulário - Exemplos práticos.",
    },
    {
      id: "14",
      title: "Soldagem de Componentes Eletrônicos",
      imagem: `${Soldagem}`,
      objetivo:
        "Desenvolver de competências relativas à qualidade e seus conceitos, sobre soldagem de componentes eletrônicos",
      carga: "20 horas.",
      conteudo:
        "Introdução; Materiais Utilizados em Soldagem de Componentes; Química da Soldagem; Soldabilidade de componentes; Microestruturas da soldagem; Tecnologia das pastas de soldagem; Controle da atmosfera na soldagem de componentes; Análise de falhas em juntas soldadas de componentes.",
    },
    {
      id: "15",
      title: "Corrosão Industrial: Fundamentos, Monitoração e Controle",
      imagem: `${Corrosao}`,
      objetivo:
        "Desenvolver de competências relativas à qualidade e seus conceitos sobre corrosão industrial.",
      carga: "20 horas.",
      conteudo:
        "Corrosão: Introdução, Oxidação-redução, Potencial de eletrodo: Diagrama de Purbaix, Pilhas eletroquímicas, Formas de corrosão. Corrosão: mecanismos básicos, Heterogeneidades responsáveis por corrosão eletroquímica, corrosão galvânica, corrosão eletrolítica, corrosão seletiva: grafítica e desincificação, corrosão induzida por microorganismos, velocidade de corrosão, oxidação e redução em temperaturas elevadas. Corrosão associadas a solicitações mecânicas, água: ação corrosiva, corrosão em concreto, Métodos para combate a corrosão. Revestimentos: Limpeza e preparo de superfícies, Revestimentos metálicos, revestimentos não-metálicos inorgânicos, revestimentos não-metálicos orgânicos. Proteção catódica e anódica.",
    },
    {
      id: "16",
      title: "Química Fundamental",
      imagem: `${QuimicaFundamental}`,
      objetivo:
        "Transmitir ao aluno conceitos básicos dos conhecimentos da química fundamental",
      carga: "20 horas.",
      conteudo:
        "Estrutura Atômica. Equações Químicas e Estequiometria. Ligações Químicas. Reações de Oxi-Redução. Compostos do Carbono. Química de Materiais e Processos.",
    },
    {
      id: "17",
      title: "Metrologia Básica",
      imagem: `${MetrologiaBasica}`,
      objetivo:
        "Dar condições ao educando de se relacionar tecnicamente adotando conceitos metrológicos corretos, além de capacitá-lo para desenvolver atividades de medição e calibração das principais grandezas dentro dos princípios adequados de confiabilidade e Rastreabilidade metrológicas.",
      carga: "60 horas.",
      conteudo:
        "METROLOGIA: O ato da Medição; O sistema de medição; Os erros de medição; As incertezas em medições diretas; A calibração de instrumentos; O resultado da medição; As incertezas em medições indiretas; A propagação do erro. CONTROLE GEOMÉTRICO: Medição de comprimentos; Blocos padrão; Paquímetros; Micrômetros; Medição diferencial; Instrumentos auxiliares de medição; Calibradores; Máquinas de medir; Medição por Coordenadas; Automação do controle geométrico.",
    },
    {
      id: "18",
      title: "Gerência de Riscos",
      imagem: `${GerenciaDeRiscos}`,
      objetivo:
        "Qualificar os profissionais da produção e área técnica em geral, possibilitando o melhor desempenho de suas funções nas atividades laborais, conforme os preceitos da Segurança do Trabalho interação sustentável com o Meio Ambiente.",
      carga: "20 horas ( 20 a 25 alunos).",
      conteudo:
        "1. Conceituações e noções gerais; 1.1- Perigos e riscos – Incidentes e Acidentes; 1.2- Uso do termo Risco e seus significados.; 1.3- Classificação dos Riscos Ambientais; 1.4- Gerenciamento do Risco. 2. Técnicas de Análise de Riscos; 2.1 – Classificação: Quantitativas e Qualitativas, Indutivas e Dedutivas; 2.2 – Técnicas de Análise de Riscos – Apresentação: Série de Riscos, Técnica de Incidentes Críticos, What If / Check List, Análise Preliminar de Riscos (APR), Análise de Modos de Falha e Efeitos (FMEA)HAZOP, 2.3 – Mapa de Riscos. 3. Metodologias de abordagem de situações críticas; 3.1- Análise de Causa e Efeito; 3.2 – Matriz de priorização GUT; 3.3 – Classificação pelo princípio de Pareto; 3.4 – Classificação das Ações: Imediatas, Corretivas, Preventivas, Preditivas.",
    },
    {
      id: "19",
      title: "Ensaios Mecânicos de Materiais",
      imagem: `${EnsaiosMecanicos}`,
      objetivo:
        "Transmitir conceitos e metodologia das propriedades mecânicas, bem como noções dos ensaios de tração, dureza e microdureza de materiais.",
      carga:
        "32 horas (com 12 horas de aulas práticas de ensaios de tração e microdureza)",
      conteudo:
        "1. Introdução aos ensaios mecânicos; 1.1 Propriedades mecânicas; 1.2 Finalidade dos ensaios mecânicos; 1.3 Vantagens da normalização dos métodos de ensaios; 1.4 Classificação dos ensaios dos materiais; 1.5 Relação estrutura-propriedade dos materiais. 2. Ensaio de tração; 2.1 O ensaio de tração; 2.2 Parâmetros físicos determinados pelo ensaio de tração; 2.3 Deformação elástica e plástica; 2.4 Instabilidade plástica e estricção; 2.5 Curva de engenharia versus curva real; 2.6 Confecção dos corpos de prova; 2.7 Efeito da taxa de deformação; 2.8 Efeito da presença de entalhes; 2.9 Efeito da velocidade de ensaio. 3. Ensaio de dureza; 3.1 Importância dos ensaios de dureza e classificação; 3.2 Dureza Brinell; 3.3 Dureza Rockwell; 3.4 Microdureza Vickers; 3.5 Correlação entre a dureza Brinell e limite de resistência; 3.6 Microdureza Knoop.",
    },
    {
      id: "20",
      title: "Interpretação de Desenho Técnico",
      imagem: `${DesenhoTecnico}`,
      objetivo:
        "Transmitir o conhecimento das características, padronizações, especificações e simbologias do Desenho Técnico, a fim de possibilitar a correta leitura das informações contidas nos desenhos de projeto, necessárias para a fabricação e produção de peças e componentes, assim como sua aferição das conformidades dimensionais, morfológicas e de materiais.",
      carga: "20 horas (20 a 25 alunos)",
      conteudo:
        "1. Introdução ao Desenho Técnico; 1.1 História do Desenho e tipos de desenho; 1.2 Equipamentos tradicionais e ferramentas computacionais; 1.3 Elementos Fundamentais do Desenho; 1.4 Projeções Ortogonais; 1.5 Escalas Usuais, Tipos de Linhas e Planos de Trabalho. 2. Elaboração do Desenho Técnico; 2.1 Vistas Ortográficas; 2.2 Vistas Ortográficas Externas; 2.3 Vistas Ortográficas Auxiliares; 2.4 Vistas Ortográficas Seccionais (Cortes); 2.5 Corte Pleno; 2.6 Meio Corte; 2.7 Corte Parcial; 2.8 Regras de Dimensionamento (Cotagem); 2.9 Vistas Axonométricas – Perspectivas. 3. Especficações e Simbologias do Desenho Técnico; 3.1 Acabamento de superfícies; 3.2 Tolerâncias Dimensionais; 3.3 Tolerâncias Geométricas; 3.4 Tolerâncias de Forma e Posição; 3.5 Simbologia de Soldagem; 3.6 Representação de Conjuntos Montados",
    },
    {
      id: "21",
      title: "Indústria 4.0: Impressão 3D",
      imagem: `${Impressao3D2}`,
      objetivo:
        "Apresentar a Indústria 4.0, propiciando ao aluno a introdução ao tema e a obtenção da base conceitual das tecnologias habilitadoras que suportam a Indústria 4.0. Introduzir técnicas de impressão 3D.",
      carga: "30 horas (20 alunos)",
      conteudo:
        "1. Introdução a indústria 4.0: Evolução Industrial, Internet das Coisas, Big Data, Robótica Avançada, Segurança Digital, Computação em Nuvem, Manufatura Digital, Manufatura Aditiva, Integração de Sistemas. 2. Impressão 3D: Constituição de uma impressora 3D, Verificar o funcionamento de impressora 3D e suas possibilidades de fabricação, Aprender a analisar qualidade de uma impressora, Marcas e modelos disponíveis no mercado, Materiais aplicados na impressão 3D, Entender como funciona o processo de preparação do modelo, geração de arquivo para impressão 3D, Dicas de modelagem para economizar e ter maior qualidade, Quais são os principais programas de modelagem utilizados para a impressão 3D, As técnicas de acabamento mais comuns, Aprender a orçar serviços de impressão.",
    },
    {
      id: "22",
      title: "Análise de Tolerâncias e Ajustes",
      imagem: `${Tolerancia}`,
      objetivo:
        "Transmitir o conhecimento sobre a metodologia, especificações e simbologias das tolerâncias dimensionais e geométricas a fim de possibilitar para a escolha correta do tipo de ajuste mecânico a ser adotado dentro de um projeto.",
      carga: "20 horas (20 a 25 alunos)",
      conteudo:
        "1. Tolerâncias Dimensionais e Ajustes; 1.1 Sistemas de ajustes; 1.2 Tipos de dimensões em um ajuste; 1.3 Dimensões limites; 1.4 Tolerância, conceituação; 1.5 Sistemas Furo-Base e Eixo-Base; Linha Zero e Afastamentos; 1.6 Tipos de ajustes; Folga, Interferência e Incertos; 1.7 Parâmetros de análise; Tolerância Fundamental, Campos de Tolerância e Afastamentos; 1.8 Regras de cálculo para determinação de afastamento; 1.9 Análise de ajustes. 2. Tolerâncias Geométricas de Forma; 2.1 Utilização; 2.2 Simbologia gráfica; 2.3 Superfícies de Referência. 2.4 Tolerâncias de Forma para Elementos Isolados: 2.4.1 Tolerâncias de Linhas - Retilineidade, Circularidade, Forma de linha qualquer; 2.4.2 Tolerâncias de Superfície  Planicidade, Cilindricidade, Forma de superfície qualquer. 3. Tolerâncias Geométricas de Orientação e Posição; 3.1 Tolerâncias de Orientação  Paralelismo, Perpendicularidade, Inclinação; 3.2 Tolerâncias de Posição - Localização, Concentricidade/coaxialidade, Simetria, Batimento.",
    },
    {
      id: "23",
      title: "Gestão da Qualidade",
      imagem: `${GestaoDeQualidade}`,
      objetivo:
        "Desenvolver uma visão sistêmica do produto,processo e serviços dentro dos requisitos da Qualidade, despertando a capacidade de visualizar e melhorar continuamente processos e serviços prestados, estimulando a capacidade individual de ser um facilitador/colaborador dentro de um Sistema de Gestão da Qualidade.",
      carga: "20 horas (20 a 25 alunos)",
      conteudo:
        "1. O que é Qualidade; 1.1- Evolução e Fases; 1.2- Conceituação moderna da Qualidade e seus autores – Deming, Juran, Crosby, Figenbaum, Ishikawa. 2. Sistema de Gestão da Qualidade; 2.1- Sistemas e processos padronizados. Ciclo PDCA; 2.2 - Normas da Qualidade – Família NBR ISO 9000; 2.3 - NBR ISO 9001 – Sistema de Gestão da Qualidade; 2.4 - Processo de Certificação Normalizada – Importância de adoção da Norma; 2.5- Sistema de Gestão Ambiental – Sustentabilidade ; 2.6- Metabolismo Industrial; 2.7- Sistema de Gestão Integrada – SGI. 3. Filosofia da Qualidade Total; 3.1- TQC – Total Quality Control; 3.2- TQM – Total Quality Management; 3.3- Confiabilidade de produtos e serviços; 3.4- Confiabilidade e fator humano; 3.5- Ferramentas de análise e gerenciamento da Qualidade; 3.6- Melhoria Contínua – Kaizen.",
    },
    {
      id: "24",
      title: "Programa 8S’s na prática",
      imagem: `${Programa8S}`,
      objetivo:
        "Transmitir o conhecimento sobre a metodologia 8S, buscando estruturar as bases da cultura individual e organizacional orientada para os princípios da Qualidade de excelência e melhoria contínua.",
      carga: "20 horas (20 a 25 alunos)",
      conteudo:
        "1. A metodologia dos 5S’s.; 1.1- Criação e história; 1.2- Importância da mudança para a evolução; 1.3- Os 5S’s como diferencial de evolução individual; 1.4 - O que é o Programa 5S’s; Conceituação de Senso. 2. A metodologia dos 8S’s; 2.1 – Significados e Objetivos do Programa 8S’s; 2.2 – O que o 8S’s vem acrescentar ao 5S’s; 2.3 – Estrutura da metodologia, Sensos: Shikari Yaro (Senso de Determinação e União), Shido (Senso de Treinamento), Seiri (Senso de Utilização), Seiton (Senso de Ordenação), Seiso (Senso de Limpeza), Seiketsu (Senso de Saúde), Shitsuke (Senso de Autodisciplina), Setsuyaku (Senso de combate ao desperdício). 3. Implantação do Programa 8S’s; 3.1- Etapas para a implantação; 3.2 - Diagnóstico e avaliação de continuidade; 3.3- Abordagem sobre desperdício; 3.4- Melhoria contínua - Kaizen",
    },
    {
      id: "25",
      title: "Modelagem e Impressão 3D",
      imagem: `${Impressao3D}`,
      objetivo:
        "Abordar a modelagem básica 3D em geral, partindo de modelagem de peças simples até dos processos mais técnicos e profissionais em modelagem 3D CAD, abordando técnicas e ferramentas com projetos passo a passo.",
      carga: "30 horas (20 alunos)",
      conteudo:
        "1. Introdução a indústria 4.0: Evolução Industrial, Internet das Coisas, Big Data, Robótica Avançada, Segurança Digital, Computação em Nuvem, Manufatura Digital, Manufatura Aditiva, Integração de Sistemas. 2. Impressão 3D: Constituição de uma impressora 3D, verificar o funcionamento de impressora 3D e suas possibilidades de fabricação, aprender a analisar qualidade de uma impressora, marcas e modelos disponíveis no mercado, materiais aplicados na impressão 3D, entender como funciona o processo de preparação do modelo, geração de arquivo para impressão 3D,dicas de modelagem para economizar e ter maior qualidade, quais são os principais programas de modelagem utilizados para a impressão 3D, as técnicas de acabamento mais comuns, aprender a orçar serviços de impressão.",
    },
    {
      id: "26",
      title: "Lean Enterprise",
      imagem: `${LeanEnterprise}`,
      objetivo:
        "O Programa elaborado por Professores da Escola Superior de Tecnologia da UEA, consiste em uma imersão nos conceitos e ferramentas do pensamento LEAN, que buscam a melhoria contínua nos processos da empresa, agregando valor, aumentando a satisfação do cliente e reduzindo as perdas dentro do sistema.",
      carga: "40 horas (20 alunos)",
      conteudo:
        "1. Início da jornada Lean. 2. Pensamento Enxuto. 3. Pessoas, o Coração do Enxuto. 4. Mapeando o Fluxo de Valor 5. Simulação de Negócios. 6. Cadeia de Suprimento Lean. 7. Engenharia Lean. 8. Ferramentas de Qualidade. 9. Bases do Six Sigma. 10. A Influência da Variabilidade e Pensamento A3.",
    },
    {
      id: "27",
      title: "Noções Básicas de Gestão de Projetos",
      imagem: `${GestaoDeProjetos}`,
      objetivo:
        "Conhecer na prática as etapas de um projeto através da elaboração e acompanhamento de um projeto real. Definição de projeto. O ciclo de vida do projeto. Tipos de projetos. Gerenciamentos de projetos e o gerente de projetos. Fatores humanos envolvidos. Gerenciamento do Risco. Orçamento do projeto. Alocação de recursos. Monitoração e sistemas de informação. Indicadores de desempenho do projeto. Projeto integrado.",
      carga: "40 horas",
      conteudo:
        "1. Definição de projeto. 2: Gerenciamento de projetos e o gerente de projetos. PMI. PMBok. 3. Fatores humanos envolvidos em projetos. 4. Desenvolvimento prático do projeto utilizando o PM Canvas. 5: Declaração do escopo do projeto. 6: Recursos do projeto, estimativa de duração de atividades/cronograma. 7: Critérios de qualidade, riscos e orçamento do projeto.  8: Alocação de recursos, monitoraçãoTes e sistemas de informação do andamento do projeto. Módulo 9: Sistemas de comunicação em projetos, indicadores de desempenho e integração do projeto. Módulo 10: Finalização do projeto prático e socialização com participantes.",
    },
  ];

  const [elementosAbertos, setElementosAbertos] = useState({});

  function handleToggleElemento(id) {
    setElementosAbertos((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  }
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <main className="flex items-center w-xl flex-col max-w-4xl mx-6">
        <div>
          <TitlePages title="Treinamentos" />
          <p className="text-black-900  ">
            Esses cursos abrangentes são projetados para atender às necessidades
            variadas de profissionais que desejam aprimorar seus conhecimentos
            em engenharia de materiais e processos industriais.
            Independentemente do seu interesse ou objetivo, nossos cursos
            oferecem uma base sólida e prática para impulsionar seus
            conhecimentos profissionais na indústria.
          </p>
          <div className="flex flex-col items-center my-8 w-full">
            <div className="flex gap-3  shadow-2.5xl mx-4">
              <img className=" h-56" src={ImagemSolda} alt="" />
              <div className="p-3 flex flex-col items-center justify-between flex-1">
                <p className="text-blue-700 font-bold text-xl ">
                  Ensaio de Materiais e Produtos
                </p>
                <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold p-1">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <TitlePages title="Conheça nossos cursos disponíveis" />
          <div className="mt-10">
            {treinamentosTeste.map((item) => {
              const isElementoAberto = elementosAbertos[item.id];
              return (
                <div className="mb-4" key={item.id}>
                  <div
                    className="bg-grey-300 p-6 flex gap-4 rounded-2xl shadow-2.5xl items-center mb-4 cursor-pointer"
                    onClick={() => handleToggleElemento(item.id)}
                  >
                    <img
                      className="w-[125px] h-[125px]"
                      src={item.imagem}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl text-black-900 font-bold mb-2">
                        {item.title}
                      </h3>
                      <span className="text-lg text-black-900 font-bold ">
                        Obejtivo Geral:
                      </span>
                      <span className="text-sm  font-normal ">
                        {item.objetivo}
                      </span>
                      <span className="text-lg text-black-900 font-bold ">
                        Carga horária:
                      </span>
                      <span className="text-sm  font-normal ">
                        {item.carga}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      isElementoAberto
                        ? "bg-gradient-to-br relative  from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% p-6 flex flex-col gap-4 rounded-2xl shadow-2.5xl items-start text-WHITE"
                        : "hidden"
                    }
                  >
                    <p className="font-semibold ">Conteúdo Programático:</p>
                    <span className="font-thin text-sm">{item.conteudo}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
