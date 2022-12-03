const firstRate = document.querySelector('.rating');
const secondRate = document.querySelector('.thanks');
const selected = document.querySelector('.output');
const submitButton = document.querySelector('.submit');
//const options1 = document.getElementsByName('choice');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');


function showOption(){
   /* for( i = 0; i < options1.length; i++ ){
        if(options1[i]){
        selected.innerText = `You selected ${options1[i].value} out of 5`
        

        }
        else{
            alert('select a number');
        }
    
    }
    */
   if(one){
    selected.innerHTML = `You selected ${one.value} out of 5`;
   }
   else if(two){
    selected.innerText = `You selected ${two.value} out of 5`;
   }
   else if(three){
    selected.innerHTML = `You selected ${three.value} out of 5`;
   }
   else if(four){
    selected.innerHTML = `You selected ${four.value} out of 5`;
   }
   else if(five){
    selected.innerHTML = `You selected ${five.value} out of 5`;
   } 
   else{
    alert('leave')
   }


}

console.log(showOption());


    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        firstRate.style.display = 'none';
        secondRate.style.display = 'block';

        showOption();
    });



