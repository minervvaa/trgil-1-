// function Mado (){
//     document.body.innerHTML = "<p> Hello  </p>";
//     document.body.style.backgroundColor = 'red';
//     document.body.style.padding = '40%';


// }


function Mado (){
   const number01Value = document.querySelector('#number01').value;
   const number02Value = document.querySelector('#number02').value;

   const results =  number01Value * number02Value ;
   document.querySelector('#results').innerHTML = results;
   
}




