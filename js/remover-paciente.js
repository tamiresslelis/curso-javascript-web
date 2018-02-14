
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function (event) {

if (event.target.tagName == 'TD') {
  event.target.parentNode.classList.add("fadeOut");//animação para desaparecer devagar

  setTimeout(function () {
    var alvoEvento = event.target;

    var paiDoAlvo = alvoEvento.parentNode; //tr = paciente = remover
    paiDoAlvo.remove();

    //console.log(event.target.textContent);



  },500);
  //pode fazer tudo em uma unica linha
  //event.target.parentNode.remove();
  }
});
