function check(){
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");


    
    if (!height.checkValidity()) {
        alert('Please fill your height correctly');
    }
    else if (!weight.checkValidity()){
        window.alert("Please fill you weight correctly")
    }
    else{
    let h = Number(height.value)/100;
    let w = Number(weight.value);
    
    let bmi = w / (h*h);
    let result = bmi.toFixed(2);

    let displayBMI = document.getElementById("displayBMI");
    let displayStatus = document.getElementById("displayStatus");
    let displayLove = document.getElementById("loveMsg");
    
    displayBMI.classList.remove("hidden");
    displayBMI.classList.add("block");
    

    
    displayStatus.classList.remove("hidden","under-weight","healthy","over-weight","obese");
    displayStatus.classList.add("block");

    displayLove.classList.remove("hidden");
    displayLove.classList.add("block");
    
    
    

    let msg;
    let statusClass;
    let love = "I LOVE YOU 😘💋";

    switch(true){
        case result < 18.5:
            msg = "Underweight";
            statusClass = "under-weight";
            love = "But, I LOVE YOU 😘💋";
            break;
        case result >= 18.5 && result <= 24.5:
            msg = "Healthy Weight";
            statusClass = "healthy";
            love = "Congrats, I LOVE YOU 😘💋";
            break;
        case result >=25 && result <= 29.9:
            msg = "Overweight";
            statusClass = "over-weight";
            love = "No Problem, I LOVE YOU 😘💋";
            break;
        case result >= 30:
            msg = "Obese";
            statusClass = "obese";
            love = "Liar, Still I LOVE YOU 😘💋";
            break;
    }
    
    displayStatus.classList.add(statusClass);
    console.log(statusClass);
    console.log(displayStatus.classList);

    displayBMI.innerHTML = `Your bmi is <strong>${result}</strong>`;
    displayStatus.innerHTML = msg;
    displayLove.innerHTML = love;

    height.value = "";
    weight.value = "";
     
    }
}