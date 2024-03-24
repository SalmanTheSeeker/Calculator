const buttons = document.querySelectorAll(".btns");
let resultText = document.getElementById("results-p");
let valueText = document.getElementById("values-p");

let result = 0
let value = null
let value2 = 0

let operation = ""

buttons.forEach(function(button) {

button.addEventListener("click", function() {

    let classes = button.classList;

    // console.log(button.id);


    if(classes.contains("btns-white")){

        console.log('white');

        switch (button.id) {
            case "ac":

                result = 0
                value = null
                valueText.innerText = ""
                resultText.innerText = "0"
                operation = "";
                
            break;

            case "cl":

            
            break;

            case "prce":

                
            break;
        }

    }else if(classes.contains("btns-orange")){

        console.log('orange');

        switch (button.id) {
        case "eql":

            if (value != null && value2 != 0) {
                resultText.innerText = opt(operation)
            } else if(value2 == 0){

                resultText.innerText = value2

            }
        
            break;

        default:


        if (value != null) {

            value2 = parseInt(value)
            value = null
            operation = button.id

            valueText.innerText += getSigns(operation)

            console.log(getSigns(operation));
        }

            break;
       }

    }else{

        console.log('black')

        if(value == null){

            value = button.innerText

        }else{

            value += button.innerText
        }
         
         valueText.innerText += button.id


    }

  });
});


function opt(opt){

    value = parseInt(value)
    switch (opt) {
        case "dvi":
            return value2 / value
        break;

        case "mlti":
            return value2 * value
        break;

        case "min":
            return value2 - value
        break;

        case "pls":
            return value2 + value
        break;    
        
    }

}

function getSigns(opt){
    switch (opt) {
        case "dvi":
            return "÷"
        break;

        case "mlti":
            return "x"
        break;

        case "min":
            return "-"
        break;

        case "pls":
            return "+"
        break;    
        
    }

}


