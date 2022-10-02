
let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
  let input=document.getElementById("choise").value;
  console.log(input);
   
  if(input== 1 ){
    window.location.href = "balance.html"
 }else if(input == 2){
    window.location.href = "greenpin.html";
 }else if(input == 3){
    window.location.href = "";
 }else if(input == 4){
    window.location.href = "";
 }else if(input == 5){
    window.location.href = "";
 }else if(input == 6){
  window.alert("Thanks For comming to  MERI BANK TERI BANK SABAKI BANK ATM ");
    window.location.href = "index.html";
 }else{
    window.alert("Please Check your input")
    window.location.href="index.html";
 }
});
