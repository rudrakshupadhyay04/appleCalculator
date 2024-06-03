//  selecting all the buttons
 let buttons = document.querySelectorAll('button');
// selecting the input
 let input = document.querySelector('input');

// using for-of loop to ittrate all the buttons
 for(let button of buttons){
    button.addEventListener('click', function(event){
        let btnText = event.target.innerText;
        if(btnText === 'AC'){
            input.value = '';
        }
        else if(btnText === '='){
            try{
                input.value = eval(input.value); //eval() method is used too evaluate the mathematical equation
            }
            catch(err){
                input.value = 'Invalid Operation'
            }

        }

        else{
            input.value += btnText;
        }
    })
 }


//  1 minute baad input ke value automatically reset ho jaaye gii , both setTimeOut and setInterval iis working. 
//  setTimeout(()=>{
//     input.value = '';
//  },60000);

setInterval(()=>{
    input.value = '';
    console.log("1 minute ho gyaa");
 },60000);