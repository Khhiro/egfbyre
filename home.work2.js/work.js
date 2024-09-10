const manu = document.querySelector('.manu')
const input = document.querySelector('input')
const button = document.querySelector('button')
const parag = document.querySelector('.welcomOrgoodby')

button.onclick = () => {
               if(input.value >10 || input.value<=0){
                              manu.style.border = '5px solid red';
                              parag.innerHTML = 'Goodbye'
               }
               else{
                              manu.style.border = '5px solid green'  
                              parag.innerHTML = 'welcome'  
               }
}