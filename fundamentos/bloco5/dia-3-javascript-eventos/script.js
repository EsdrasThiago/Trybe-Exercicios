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

  //1
  let lista = document.querySelectorAll('ul')[2]
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < decemberDaysList.length; i += 1) 
  {
    let dias = document.createElement('li');
    dias.innerText = decemberDaysList[i];
    dias.classList.add('day') 
    lista.appendChild(dias) 
}
    let dia31 = lista.lastChild
    dia31.classList.add('holiday')
    let dia25 = lista.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling
    dia25.classList.add('holiday')
    let dia24 = lista.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling
    dia24.classList.add('holiday')
    let dia4 = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    dia4.classList.add('friday')
    let dia11 = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    dia11.classList.add('friday')
    let dia18 = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    dia18.classList.add('friday')
    let dia25Sexta = lista.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling
    dia25Sexta.classList.add('friday')
  //2
    
  function btn(feriados) {
    let botaoDiv = document.createElement('div')
    botao = document.createTextNode(feriados)
    botaoDiv.appendChild(botao)
    let divTres = document.querySelectorAll('div')[2]
    divTres.appendChild(botaoDiv)

  } 
btn(['Feriados'])

  