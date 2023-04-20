let string = "";
let formattedString = "";
let buttons = document.querySelectorAll('.button');


Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',(e)=>{

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'D') {
         string = string.slice(0,-1);
         document.querySelector('input').value = string;
         
         }
        else if (e.target.innerHTML == '√') {
         string = string*string;
         document.querySelector('input').value = string;
         
         }
       else if (e.target.innerHTML == 'C') {
            string = "";
        document.querySelector('input').value = string;
       
        }

        else{
            console.log(e.target);
            if (e.target.innerHTML == 'X') {
                string = string + "*"
            }
            else{
                string = string + e.target.innerHTML;
            }
            // replace string function
            formattedString = string.replace(/\*/g, 'X');
            document.querySelector('input').value = formattedString;

        }
    })
})