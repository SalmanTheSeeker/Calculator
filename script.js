const buttons = document.querySelectorAll(".btns");
let resultText = document.getElementById("results-p");
let valueText = document.getElementById("values-p");
let opt = false;


buttons.forEach(function(button)
{
button.addEventListener("click", function() {

    let classes = button.classList

    if(button.id == "prce"){

        // will handel the % button

    } else if(button.id == "cl"){

        valueText.innerText =  valueText.innerText.toString().slice(0, -1)

        //resultText.innerText = eval("10-5")

    } else if(button.id == "ac"){

        valueText.innerText = ""
        resultText.innerText = "0"
        opt = false

    }else if(button.id == "eql"){


        console.log(valueText.innerText.indexOf("%"));
        resultText.innerText = eval(valueText.innerText.replace("×", "*").replace("÷", "/"))
        valueText.innerText = ""
        return

    }else if(opt && classes.contains("btns-orange")){

        valueText.innerText += button.value
        opt = false

    }else if(!opt && classes.contains("btns-orange")){
        
        valueText.innerText =  valueText.innerText.toString().slice(0, -1)
        valueText.innerText += button.value
        opt = false

    }else{

        valueText.innerText += button.value
        opt = true

    }

});

});


