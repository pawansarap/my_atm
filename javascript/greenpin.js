
let submit=document.getElementById("submit");

submit.addEventListener("click",function(e){
    let MobileNo=document.getElementById("MobileNo").value;
    let reMobileNo=document.getElementById("reMobileNo").value;
    
    if(isNaN(MobileNo) || isNaN(reMobileNo)){
        alert("Please enter valid 10 digit mobile number");
     
    }
    else if((MobileNo.charAt(0)!=9)&& (MobileNo.charAt(0)!=8) &&(MobileNo.charAt(0)!=7)||(reMobileNo.charAt(0)!=9)&& (reMobileNo.charAt(0)!=8) &&(reMobileNo.charAt(0)!=7)){
        
       alert("Please enter valid 10 digit mobile number");
      
        }
    else if((MobileNo.length!=10)||(reMobileNo.length!=10)){
            alert("Please enter valid 10 digit mobile number");
               
         }
    else if(MobileNo!=reMobileNo){
        alert("Please enter valid 10 digit mobile number");
       
        
    }
   else if(MobileNo==reMobileNo){
    window.location.href = "otp.html";
   }
      
   
    
    
})