const buttons = document.querySelectorAll(".btns");
let result = document.getElementById("results-p");
let value = document.getElementById("values-p");

buttons.forEach(function(button) {

button.addEventListener("click", function() {

    let classes = button.classList;

    console.log(classes.contains('btns-white'));

    result.innerText = button.classList;

    if(classes.contains("btns-white")){

        switch (button.id) {
            case "ac":

             value.innerText = " "
                
            break;

            case "cl":

             result.innerText = "+/-"
           
            break;

            case "prce":

             result.innerText = "%"
      
           break;
        }

    }else if(classes.contains("btns-orange")){

        result.innerText = "orange"

    }else{

        value.innerText += button.innerText

    }

  });
});