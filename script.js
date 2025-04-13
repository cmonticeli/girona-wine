const vinicolas = [
    {
        nome: "Celler Perelada",
        uvas: ["Cabernet Franc","Cariñena","Garnacha Negra","Syrah","Cabernet Sauvignon","Merlot","Monastrell","Samsó","Garnacha Blanca","Sauvignon Blanc"]
    },
    {
        nome: "JOC Vins",
        uvas: ["Cabernet Sauvignon","Merlot","Syrah","Garnacha Negra","Garnacha Blanca","Macabeo"]
    },
    {
        nome: "Vinos del Paseante",
        uvas: ["Cariñena"]
    },
    {
        nome: "Wine is Social",
        uvas: ["Macabeo", "Xarel·lo", "Moscatel de Alejandría"]
    },
    {
        nome: "Bodega Bach",
        uvas: ["Macabeo", "Xarel·lo", "Cabernet Sauvignon", "Merlot", "Tempranillo"]
    },
    {
        nome: "Bodega Parés Balta",
        uvas: ["Merlot", "Cabernet Sauvignon", "Syrah", "Tempranillo"]
    },
    {
        nome: "Bodegas René Barbier",
        uvas: ["Merlot", "Tempranillo", "Macabeo", "Parellada", "Xarel·lo"]
    },
    {
        nome: "Bodegas Torres",
        uvas: ["Riesling", "Chardonnay"]
    },
    {
        nome: "Castelo de Pedregosa",
        uvas: ["Moscatel de Grano Menudo"]
    },
    {
        nome: "Ferré i Catasús",
        uvas: ["Syrah", "Cabernet Sauvignon", "Merlot", "Syrah"]
    },
    {
        nome: "Gramona",
        uvas: ["Riesling", "Xarel·lo"]
    },
    {
        nome: "Jean Leon",
        uvas: ["Garnacha Blanca", "Pinot Noir", "Chardonnay"]
    },
    {
        nome: "Juvé y Camps",
        uvas: ["Cabernet Sauvignon"]
    },
    {
        nome: "Bodega Jordi Lluch",
        uvas: ["Pansa Blanca", "Xarel·lo", "Merlot"]
    },
    {
        nome: "AT Roca",
        uvas: ["Macabeo", "Xarel·lo"]
    },
    {
        nome: "Garcia Carrion",
        uvas: ["Chardonnay"]
    },
    {
        nome: "Monasterio de Sant Sebastià dels Gorgs",
        uvas: ["Macabeo", "Sauvignon Blanc", "Cabernet Sauvignon", "Garnacha Negra", "Syrah"]
    },
    {
        nome: "Torres Icons",
        uvas: ["Moscatel de Alejandría", "Cabernet Sauvignon", "Tempranillo"]
    }
];

const todasUvas = [
    "Cabernet Franc", "Cariñena", "Garnacha Negra", "Syrah", "Cabernet Sauvignon", "Merlot", 
    "Monastrell", "Samsó", "Garnacha Blanca", "Sauvignon Blanc", "Macabeo", "Xarel·lo", 
    "Moscatel de Alejandría", "Tempranillo", "Parellada", "Riesling", "Pinot Noir", "Pansa Blanca", 
    "Chardonnay", "Moscatel de Grano Menudo"
];


function criarSelectUvas() {
    const selectElement = document.getElementById("selectUvas");
    
    
    const uvasOrdenadas = [...todasUvas].sort();

    uvasOrdenadas.forEach(uva => {
        const option = document.createElement("option");
        option.value = uva;
        option.textContent = uva;
        selectElement.appendChild(option);
    });
}


function mostrarVinicolas() {
    const selectElement = document.getElementById("selectUvas");
    const uvasSelecionadas = Array.from(selectElement.selectedOptions).map(option => option.value);
    const lista = document.getElementById("listaVinicolas");
    lista.innerHTML = "";

    if (uvasSelecionadas.length === 0) {
        lista.innerHTML = "<li>Selecione pelo menos uma uva.</li>";
        return;
    }

    const resultados = vinicolas.filter(vinicola =>
        vinicola.uvas.some(uva => uvasSelecionadas.includes(uva))
    );

    if (resultados.length === 0) {
        lista.innerHTML = "<li>Nenhuma vinícola encontrada para as uvas selecionadas.</li>";
        return;
    }

    resultados.forEach(v => {
        const li = document.createElement("li");
        li.textContent = v.nome;
        lista.appendChild(li);
    });
}


window.onload = criarSelectUvas;
