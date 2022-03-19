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

//   Exercício 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const locUlDays = document.getElementById("days");

function addNumDias() {
    for (let i of dezDaysList) {
        let liDay = document.createElement("li");
        liDay.innerText = i;
        liDay.classList = "day";
        if (i == "24" || i == "25" || i == "31") {
            liDay.classList.add("holiday")
        }
        if (i == "4" || i == "11" || i == "18" || i == "25") {
            liDay.classList.add("friday");
        }
        locUlDays.appendChild(liDay); 
    }
}
addNumDias();
//   Exercício 2:

let locBtnEntra = document.querySelector(".buttons-container");
function criaBotao(nomeBtn) {
    let btnHoliday = document.createElement("button");
    btnHoliday.innerText = nomeBtn;
    btnHoliday.id = "btn-holiday";
    locBtnEntra.appendChild(btnHoliday);
}
criaBotao("Feriados");

// Exercício 3:

