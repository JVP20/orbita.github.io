if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/orbita/sw.js').then((registration) => {
            console.log('Service Worker registrado com sucesso: ', registration.scope);
        }, (err) => {
            console.log('Registro do Service Worker falhou: ', err);
        });
    });
}


function clicar_iniciar() {
    document.getElementById("button_iniciar").style.display = 'none'
    document.getElementById("input_button").style.display = 'block'
    document.getElementById("button_enviar").style.display = 'block'
}

function salvar_nome() {
    var nome = document.getElementById("input_nome").value
    sessionStorage.setItem('usuario', nome)
    console.log(sessionStorage.getItem('usuario'))
    document.getElementById("input_button").style.display = 'none'
    document.getElementById("button_enviar").style.display = 'none'
    document.getElementById("logo").style.width = "150px"
    document.getElementById("logo").style.height = "150px"
    document.querySelector(".foreground").style.margin = "10px"
    document.getElementById("usuario").innerHTML = "Usuário:  " + sessionStorage.getItem('usuario')
    document.getElementById("content").style.display = "flex"
    document.getElementById("content").style.flex_direction = "row"
    document.getElementById("centro").style.display = "flex"


}

function saveArrayToLocalStorage(arrayName, array) {
    const jsonArray = JSON.stringify(array);
    localStorage.setItem(arrayName, jsonArray);
}

const planetas = [
    {
        "id": "0",
        "nome": "SOL",
        "imagem": "../imagem/sol.gif",
        "icon" : "./images/imagens_planetas/sol.png",
        "idade": "4,60 bilhões de anos",
        "massa": "1,98 x 10^30 Kg",
        "ordem": "astro central do sistema solar",
        "luas": "0",
        "descricao": "O Sol é uma estrela que está localizada no centro do nosso sistema solar. É uma esfera gigante de gás incandescente, predominantemente composto de hidrogênio e hélio. O Sol emite luz e calor por meio de reações nucleares em seu núcleo, fornecendo energia vital para sustentar a vida na Terra. Possui um diâmetro de cerca de 1,4 milhão de quilômetros, o que o torna cerca de 109 vezes maior que a Terra. É uma fonte primária de luz, calor e energia para nosso planeta"
    },
    {
        "id": "1",
        "nome": "MERCÚRIO",
        "imagem": "../imagem/mercurio.gif",
        "icon" : "./images/imagens_planetas/mercury.png",
        "idade": "4,50 bilhões de anos",
        "massa": "3,28 x 10^23 Kg",
        "ordem": "1° planeta do sistema solar",
        "luas": "0",
        "descricao": "Mercúrio é o planeta mais próximo do Sol e o menor nosso sistema solar. Ele possui uma superfície rochosa, crateras de impacto visíveis e uma atmosfera tênue. Mercurio possui um período de rotaçãoincomum, onde um dia solar dura cerca de 176 dias terrestres. Devido à proximidade com o Sol, a temperatura em Mercúrio varia drasticamente entre extremos de calor e frio, com temperaturas diurnas escaldantes e noites geladas."
    },

    {
        "id": "2",
        "nome": "VÊNUS",
        "imagem": "../imagem/venus.gif",
        "icon" : "./images/imagens_planetas/venus.png",
        "idade": "4,50 bilhões de anos",
        "massa": "4,86 x 10^24 kg",
        "ordem": "2° planeta do sistema solar",
        "luas": "0",
        "descricao": "Vênus é um planeta conhecido por sua atmosfera densa composta principalmente de dióxido de carbono, criando um efeito estufa extremo e uma temperatura de superfície infernalmente quente. É o planeta mais quente do sistema solar, com uma pressão atmosférica opressiva. Vênus também possui uma rotação retrógrada, onde o sol nasce no oeste e se põe no leste. Sua superfície é composta por planícies vulcânicas, montanhas e crateras."
    },

    {
        "id": "3",
        "nome": "TERRA",
        "imagem": "../imagem/terra.gif",
        "icon" : "./images/imagens_planetas/earth.png",
        "idade": "4,54 bilhões de anos",
        "massa": "5,97 x 10^24 Kg",
        "ordem": "3° planeta do sistema solar",
        "luas": "1",
        "descricao": "A Terra é o único planeta conhecido por abrigar vida. Ela possui uma atmosfera rica em oxigênio, permitindo a existência de uma variedade de formas de vida. A Terra tem uma superfície coberta por água, com vastos oceanos, e uma diversidade de paisagens, incluindo montanhas, florestas e desertos. Além disso, ela possui uma atmosfera que protege contra radiações nocivas do espaço e um campo magnético que desvia as partículas solares."
    },

    {
        "id": "4",
        "nome": "MARTE",
        "imagem": "../imagem/marte.gif",
        "icon" : "./images/imagens_planetas/mars.png",
        "idade": "4,60 bilhões de anos",
        "massa": "6,39 x 10^23 kg",
        "ordem": "4° planeta do sistema solar",
        "luas": "2. Fobos e Deimos",
        "descricao": "Marte, conhecido como o 'Planeta Vermelho', possui uma atmosfera fina e uma superfície rochosa com montanhas, vales e crateras. Marte é famoso por suas calotas polares de gelo de água e dióxido de carbono sazonalmente variáveis. Também é conhecido por ter o Monte Olimpo, a maior montanha do sistema solar, e o Valles Marineris, um imenso sistema de cânions. Estudos sugerem que Marte já teve água líquida em sua superfície, tornando-o um alvo de interesse na busca por evidências de vida extraterrestre passada ou presente."
    }
    ,

    {
        "id": "5",
        "nome": "JÚPITER",
        "imagem": "../imagem/jupiter.gif",
        "icon" : "./images/imagens_planetas/jupiter.png",
        "idade": "4,60 bilhões de anos",
        "massa": "1,898 x 10^27 kg",
        "ordem": "5° planeta do sistema solar",
        "luas": "79",
        "descricao": "Júpiter é o maior planeta do sistema solar, conhecido por sua imponente mas sa e tamanho. Ele possui uma atmosfera densa composta principalmente de hidrogênio e hélio, com faixas de nuvens coloridas e uma famosa Grande Mancha Vermelha, uma tempestade gigante. Júpiter tem um sistema de luas extenso, incluindo as luas galileanas, é cercado por um intenso campo magnético. É considerado um 'gigante gasoso' e desempenha um papel importante na influência gravitacional e na estabilidade do sistema solar."
    },

    {
        "id": "6",
        "nome": "SATURNO",
        "imagem": "../imagem/saturno.gif",
        "icon" : "./images/imagens_planetas/saturn.png",
        "idade": "4,50 bilhões de anos",
        "massa": "5,683 x 10^26 kg",
        "ordem": "6° planeta do sistema solar",
        "luas": "82",
        "descricao": "Saturno é um dos planetas mais icônicos do sistema solar, conhecido por seus deslumbrantes anéis. É o segundo maior planeta e possui uma atmosfera composta principalmente de hidrogênio e hélio. Saturno tem um sistema impressionante de mais de 80 luas, incluindo a majestosa Titã, com sua atmosfera densa e lagos de hidrocarbonetos líquidos. Seus anéis, compostos principalmente de partículas de gelo e rocha, são uma característica marcante. A exploração de Saturno revela paisagens deslumbrantes e processos dinâmicos que continuam a fascinar cientistas e entusiastas."
    },

    {
        "id": "7",
        "nome": "URANO",
        "imagem": "../imagem/urano.gif",
        "icon" : "./images/imagens_planetas/uranus.png",
        "idade": "4,50 bilhões de anos",
        "massa": "8,681 x 10^25 kg",
        "ordem": "7° planeta do sistema solar",
        "luas": "27",
        "descricao": "Urano é um planeta gigante de cor azul-esverdeada, conhecido por sua inclinação axial extrema que o faz girar praticamente de lado. Ele possui uma atmosfera composta principalmente de hidrogênio e hélio, com traços de metano que dão a sua cor característica. Urano tem um sistema de anéis e é cercado por 27 luas conhecidas. Sua composição interna é composta por gelo e rochas. Sua peculiar inclinação axial e atmosfera misteriosa tornam Urano um objeto de interesse para pesquisas e explorações espaciais."
    },

    {
        "id": "8",
        "nome": "NETUNO",
        "imagem": "../imagem/netuno.gif",
        "icon" : "./images/imagens_planetas/neptune.png",
        "idade": "4,50 bilhões de anos",
        "massa": "1,024 x 10^26 kg",
        "ordem": "8° planeta do sistema solar",
        "luas": "14",
        "descricao": "Netuno, o planeta mais distante do sistema solar, é conhecido por sua cor azul profunda e atmosfera turbulenta. É um gigante gasoso composto principalmente de hidrogênio e hélio, com traços de metano que contribuem para sua coloração característica. Netuno tem um sistema de anéis fracos e 14 luas conhecidas, incluindo Tritão, uma lua única com características geológicas intrigantes. Sua atmosfera apresenta ventos violentos e uma Grande Mancha Escura, similar à Grande Mancha Vermelha de Júpiter. Estudar Netuno oferece insights sobre a diversidade planetária além do cinturão de asteroides."
    }
];


saveArrayToLocalStorage('planetas', planetas);

function getArrayFromLocalStorage(arrayName) {
    const str = localStorage.getItem(arrayName);
    const parsedArray = JSON.parse(str);
    return parsedArray;
}

const getplanetas = getArrayFromLocalStorage('planetas');
console.log(getplanetas);

for (let i = 0; i < getplanetas.length; i++) {
    const row = planetas[i];
    console.log(`Name: ${row.name}`);

    var cartao = document.createElement("div");
    cartao.className = "card"
   

    var input = document.createElement("input");
    input.type = "hidden";
    input.value = row.id;
    input.id = "id_planeta" + i;
    cartao.append(input)

    var nome_planeta = document.createElement("h1")
    nome_planeta.id = "nome_planeta";

    var icon_planeta = document.createElement("img")
    icon_planeta.id = "icon_planeta";

    var desc_planeta = document.createElement("p")
    desc_planeta.id = "desc_planeta";

    var voltar_planeta = document.createElement("button")
    voltar_planeta.id = "voltar_planeta";
    


    var div_info = document.querySelector("#info");
   

    cartao.addEventListener("click", function(){
        var inputValue = document.getElementById("id_planeta" + i).value
        const info = planetas[inputValue];

        nome_planeta.innerHTML = info.nome
        icon_planeta.src = info.icon
        desc_planeta.innerHTML = info.descricao
        voltar_planeta.innerHTML = "Voltar"

        voltar_planeta.addEventListener("click", function(){
            var nome = document.getElementById("input_nome").value
            sessionStorage.setItem('usuario', nome)
            console.log(sessionStorage.getItem('usuario'))
            document.getElementById("input_button").style.display = 'none'
            document.getElementById("button_enviar").style.display = 'none'
            document.getElementById("logo").style.width = "150px"
            document.getElementById("logo").style.height = "150px"
            document.querySelector(".foreground").style.margin = "10px"
            document.getElementById("usuario").innerHTML = "Usuário:  " + sessionStorage.getItem('usuario')
            document.getElementById("content").style.display = "flex"
            document.getElementById("content").style.flex_direction = "row"
            document.getElementById("centro").style.display = "flex"
            document.getElementById("info").style.display = 'none'

        })
       

        document.querySelector("#centro").style.display = "none"
        document.querySelector("#info").style.display = "flex"
        div_info.append(nome_planeta);
        div_info.append(icon_planeta);
        div_info.append(desc_planeta);
        div_info.append(voltar_planeta);
        console.log(inputValue)
    })

    var titulo = document.createElement("h2");
    titulo.innerHTML = row.nome;
    titulo.className = "titulo_planeta"
    cartao.append(titulo);

    var imagem = document.createElement("img");
    imagem.src = row.icon;
    imagem.className = 'foto_planeta'
    cartao.append(imagem)

    var div = document.querySelector("#centro");
    div.append(cartao);

  


}


