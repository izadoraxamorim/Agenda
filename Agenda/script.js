
//Parte 1
let agenda = [];

function cadastrar() {
    if (agenda.length >= 15) {
        alert("A agenda está cheia. Não é possível adicionar mais pessoas.");
        return;
    }

    let nome = prompt("Digite o nome:"); 
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    } 
    let dia = parseInt(prompt("Digite o dia do aniversário:"));
    if (isNaN(dia) || dia < 1 || dia > 31){
        alert("Verifique o valor digitado.");
        return;
    }
    let mes = parseInt(prompt("Digite o mês do aniversário:"));  
    if (isNaN(mes) || mes < 1 || mes > 12){
        alert("Verifique o valor digitado.");
        return;
    }  
    agenda.push({ nome: nome, dia: dia, mes: mes });
    alert("Pessoa cadastrada com sucesso!");
};


//Parte 2
function excluir() {
    let excluirNome = prompt("Digite o nome da pessoa para excluir da agenda.");

    let posicao = -1;
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nome.toLowerCase() === excluirNome.toLowerCase()) {
            posicao = i;
            break;
        };
    }
    if (posicao !== -1) {
        agenda.splice(posicao, 1);
        alert("Remoção concluída");
    } else {
        alert("Não existe esse nome na agenda");
    }
};

//Parte 3
function alterar() 
{
    let alterarData = prompt("Digite o nome da pessoa para alterar sua data de aniversário.");

    let posicao = -1;
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nome.toLowerCase() === alterarData.toLowerCase()) {
            posicao = i;
            break;
        };
    }
        if (posicao !== -1) {
            agenda.splice(posicao, 1);

            let dia = parseInt(prompt("Digite o novo dia:"));
            if (isNaN(dia) || dia < 1 || dia > 31){
            alert("Verifique o valor digitado.");
            return;
            }
            let mes = parseInt(prompt("Digite o novo mês:"))
            if (isNaN(mes) || mes < 1 || mes > 12){
                alert("Verifique o valor digitado.");
                return;
            }  
            agenda.push({nome: alterarData, dia: dia, mes: mes });
            alert("Dados atualizados com sucesso!");
        } else {
            alert("Não existe esse nome na agenda")
        }

    };

//Parte 7
function agendaNome(){
    let agendaOrdenadaNome = [...agenda].sort(function(a, b) {
        return a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()); 
    });
    let resAgenda = `Agenda Ordenada pelo Nome\n`;
    for (let i = 0; i < agendaOrdenadaNome.length; i++){
        resAgenda += `${agendaOrdenadaNome[i].nome} - Aniversário: ${agendaOrdenadaNome[i].dia}/${agendaOrdenadaNome[i].mes}\n`;
        }
        alert(resAgenda);
    };

//Consultar aniversariantes de uma data (dia e mês)
function consultaData(){
        let dia = parseInt(prompt("Digite o dia do aniversário para consultar:")); 
        if (isNaN(dia) || dia < 1 || dia > 31){
        alert("Verifique o valor digitado.");
        return;
        }
        let mes = parseInt(prompt("Digite o mês do aniversário para consultar:"));  
        if (isNaN(mes) || mes < 1 || mes > 12){
        alert("Verifique o valor digitado.");
        return;
        }; 

        function aniversarianteDiaeMes(pessoa){ 
            return pessoa.dia === dia && pessoa.mes === mes; 
        }; 

        let aniversariantes = agenda.filter(aniversarianteDiaeMes); 

        if (aniversariantes.length > 0){
            let resAgenda = `Aniversariantes do Dia/Mês\n`; 
            for (let i = 0; i < aniversariantes.length; i++) {
                resAgenda += `${aniversariantes[i].nome} - ${dia}/${mes}.\n `
            }
            alert(resAgenda); 
        } else {
            alert(`Data não encontrada.`); 
}; 
}; 

//Consultar aniversariante pelo mês
function consultaMes(){
    let mes = parseInt(prompt("Digite o mês do aniversário para consultar:"));  
        if (isNaN(mes) || mes < 1 || mes > 12){
        alert("Verifique o valor digitado.");
        return;
        }; 

        function aniversarianteMes(pessoa){ 
        return pessoa.mes === mes; 
        }; 

        let aniversariantes = agenda.filter(aniversarianteMes); 

        if (aniversariantes.length > 0){
        let resAgenda = `Aniversariantes do Mês ${mes}\n`; 
        for (let i = 0; i < aniversariantes.length; i++) {
            resAgenda += `${aniversariantes[i].nome}\n `
        }
        alert(resAgenda); 
        } else {
            alert(`Mês não encontrado.`);
        };
    }; 

//Consultar aniversariantes pela Inicial 
function consultaInicial(){
    let inicial = prompt("Digite a inicial do nome para consultar:");
    if (!inicial) {
        alert("Por favor, digite uma letra.");
        return;
    }

    function aniversarianteInicial(pessoa) {
        return pessoa.nome.charAt(0).toLowerCase() === inicial.toLowerCase();
    }

    let aniversariantes = agenda.filter(aniversarianteInicial);

    if (aniversariantes.length > 0){
        let resAgenda = `Aniversariantes com a Inicial ${inicial.toUpperCase()}\n`; 
        for (let i = 0; i < aniversariantes.length; i++) {
            resAgenda += `${aniversariantes[i].nome} - Aniversário: ${aniversariantes[i].dia}/${aniversariantes[i].mes}\n`;
        }
        alert(resAgenda); 
    } else {
        alert(`Nenhum nome encontrado com a inicial ${inicial.toUpperCase()}.`);
    }
}; 
//Agenda ordenada pelo Mês de aniversário
function agendaMes(){
    let agendaOrdenadaMes = [...agenda].sort(function(a, b) {
        return a.mes - b.mes || a.dia - b.dia; 
    });

    let resAgenda = `Agenda Ordenada pelo Mês\n`;
    for (let i = 0; i < agendaOrdenadaMes.length; i++){
        resAgenda += `${agendaOrdenadaMes[i].nome} - Aniversário: ${agendaOrdenadaMes[i].dia}/${agendaOrdenadaMes[i].mes}\n`;
        }
        alert(resAgenda);
    };


//Sair e retornar ao Menu
function sair() {
    window.location.href = "../index.html";
}; 