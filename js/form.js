var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //extraindo informacoes do paciente do form
  var paciente = obtemPacienteDoFormulario(form);
  //cria a tr a td do paciente
  var erros = validaPaciente(paciente);
  if(erros.length > 0 ){
    exibeMensangensDeErro(erros);

    return;
  }
  adicionaPacienteNaTabela(paciente);

  form.reset();
   var mensagensErro = document.querySelector("#mensagens-erro");
   mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  //tras o tr para dentro da tabela
  tabela.appendChild(pacienteTr);
}
function exibeMensangensDeErro(erros) {

  var ul = document.querySelector("#mensagens-erro");
  //Limpar a ul, innerHtml permite controlar o html de um elemento
  ul.innerHTML= "";
  //forEach é para cada item do array de erros, pega o erro
  erros.forEach(function (erro) {
  var li = document.createElement("li");
  li.textContent = erro;
    //coloca li dentro do ul
  ul.appendChild(li);
  });

}

function obtemPacienteDoFormulario(form){

  var paciente ={
      //caracteristicas
      nome:form.nome.value,
      peso:form.peso.value,
      altura:form.altura.value,
      gordura:form.gordura.value,
      imc:calculaImc(form.peso.value,form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr= document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
  return pacienteTr;
}

function montaTd(dado,classe) {
    //cria td
    var td = document.createElement("td");
    //preenche TD
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
