document.getElementById("itemInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarItem();
    }
});

function adicionarItem() {
    let input = document.getElementById("itemInput");
    let itemTexto = input.value.trim();
    if (itemTexto === "") return;

    let tabela = document.getElementById("tabelaItens");
    let novaLinha = document.createElement("tr");
    let novaCelula = document.createElement("td");
    novaCelula.textContent = itemTexto;
    novaLinha.appendChild(novaCelula);
    tabela.appendChild(novaLinha);

    let select = document.getElementById("itemSelect");
    let novaOpcao = document.createElement("option");
    novaOpcao.text = itemTexto;
    select.add(novaOpcao);
    
    input.value = "";
}

function marcarItem() {
    let select = document.getElementById("itemSelect");
    let itemSelecionado = select.value;
    let linhas = document.querySelectorAll("#tabelaItens tr");
    linhas.forEach(linha => {
        if (linha.textContent === itemSelecionado) {
            linha.classList.add("marcado");
        }
    });
}

function desmarcarItem() {
    let select = document.getElementById("itemSelect");
    let itemSelecionado = select.value;
    let linhas = document.querySelectorAll("#tabelaItens tr");
    let encontrado = false;
    linhas.forEach(linha => {
        if (linha.textContent === itemSelecionado) {
            if (linha.classList.contains("marcado")) {
                linha.classList.remove("marcado");
                encontrado = true;
            }
        }
    });
    if (!encontrado) {
        alert("O item já está desmarcado ou não existe.");
    }
}

function removerItem() {
    let select = document.getElementById("itemSelect");
    let itemSelecionado = select.value;
    let linhas = document.querySelectorAll("#tabelaItens tr");
    linhas.forEach(linha => {
        if (linha.textContent === itemSelecionado) {
            linha.remove();
        }
    });
    
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === itemSelecionado) {
            select.remove(i);
            break;
        }
    }
}
