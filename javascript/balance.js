
let submit = document.getElementById("submit");
submit.addEventListener("click",function(){
    let pin = document.getElementById("pin").value;
    let repin = document.getElementById("repin").value;
    if (pin!=repin){
         window.alert("Please check your pin");
         window.location.href="balance.html";
    }
    else{
        window.alert("Your account balance is 9965.67");
        window.alert("Thanks For comming to  MERI BANK TERI BANK SABAKI BANK ATM ");
        window.location.href="index.html";
    }

})