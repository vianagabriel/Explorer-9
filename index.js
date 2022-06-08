 
// Aqui estão meu array de objetos 
let students = [{
  firstName: 'Gabriel',
  firstNote: 10,
  secondNote:10

},
 {
 firstName: 'Rebeca',
 firstNote: 8,
 secondNote: 8
 
},
 {
  firstName: 'Thiago',
  firstNote: 5,
  secondNote: 3
},
 {
   firstName: 'Julia',
   firstNote: 5,
   secondNote: 8
 }
  
];

// Função que faz o calculo de média
function average(firstNote, secondNote){
   return (firstNote + secondNote)/2;
}

// função que percorre o array e com as condicionais valida se o aluno passou ou ou reprovado e exibe uma mensagem. 
  
function calculateAverage (){
  for(let i = 0; i< students.length; i++){
   media = average(students[i].firstNote, students[i].secondNote)
  if(media > 7){
    alert(`Parabéns ${students[i].firstName} você foi aprovado sua média foi de ${media}!`);
  }else{ 
    alert(`Infelizmente você foi reprovado(a) ${students[i].firstName}, Tente novamente!`);
  }
 }
}
  
calculateAverage()



