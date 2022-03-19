function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.



//   Exercícios 2:

let locBtnEntra = document.querySelector(".buttons-container");
function criaBotao(nomeBtn) {
    let btnHoliday = document.createElement("button");
    btnHoliday.innerText = nomeBtn;
    btnHoliday.id = "btn-holiday";
    locBtnEntra.appendChild(btnHoliday);
}
criaBotao("Feriados");

