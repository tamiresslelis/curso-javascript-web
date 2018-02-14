console.log("Buscar paciente");

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  console.log("Buscando pacientes ...");
  //XMLHttpRequest(); objeto javascript responsavel em fazer requisições http
  //XML responsavel por fazer o transporte de dados XML
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load",function () {
  var erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200){

    erroAjax.classList.add("invisivel");
    var resposta = xhr.responseText;
    //console.log(typeof resposta);
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function (paciente) {//paciente é que passa no array pacientes
      adicionaPacienteNaTabela(paciente);
    });
  }else{
      console.log(xhr.status);
      console.log(xhr.resposta);

      erroAjax.classList.remove("invisivel");


  });
  xhr.send();
});
