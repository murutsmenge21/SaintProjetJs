console.log("Hello world");
var form = document.querySelector('form');
console.log(form);


function checkValidity(e){
    e.preventDefault();
    let myInput =document.querySelectorAll("#formID input");
   
    console.log(myInput[0].value);

    myInput[2].style.backgroundColor="";
    myInput[3].style.backgroundColor="";
    
     // Email must contain the "@" symbol
    if(!/@/.test(myInput[2].value)){
            myInput[2].style.backgroundColor = "pink";
            result.textContent = 'Email must contain the "@" symbol';
            return false;
    }

  
    // Password must be at least 8 characters long
    if(myInput[3].value.length < 8){
        myInput[3].style.backgroundColor = "pink";
        result.textContent = 'Password must be at least 8 characters long';
        return false;
    }
    // Password must contain at least one uppercase letter
    if(!/[A-Z]/.test(myInput[3].value)){
        myInput[3].style.backgroundColor = "pink";
        result.textContent = 'Password must contain at least one uppercase letter';
        return false;
    }
     // Password must contain at least one lowercase letter
     if(!/[a-z]/.test(myInput[3].value)){
        myInput[3].style.backgroundColor = "pink";
        result.textContent = 'Password must contain at least one lowercase letter';
        return false;
    }
     // Password must contain at least one number
     if(!/\d/.test(myInput[3].value)){
        myInput[3].style.backgroundColor = "pink";
        result.textContent = 'Password must contain at least one number';
        return false;
    }

    if(myInput[0].value.length !==0 && myInput[1].value.length !==0 && myInput[3].value.length !==0){
           alert('submitted')
        //    let output = myInput[0].value + " " + myInput[1].value;
           let output =`${myInput[0].value} ${myInput[1].value}`
           let result = document.getElementById("result");
           result.textContent = output;
    }


    

}





form.addEventListener("submit", checkValidity)