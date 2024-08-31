let requiredMsgs = document.querySelectorAll(".required-msg");
let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let emailInput = document.querySelector(".email");
let messArea = document.querySelector(".mess-Area");
let errorMsg = document.querySelector(".error-msg-textArea");
let checkInput = document.querySelector(".checkbox");
let msgCheck = document.querySelector(".check-mess");
let generalInput = document.querySelector(".general-check");
let supportInput = document.querySelector(".support-check");
let queryMsg = document.querySelector(".query-mess");
let form =document.querySelector("form");
let success=document.querySelector(".success");

function validationEmail(email) {
      let emailPattern=/[a-zA-Z0-9]@[a-zA-Z].[a-zA-Z]{2,}/ig;
      return emailPattern.test(email);
}
function handelInput(inputField,messRequired) {
      inputField.addEventListener('input', ()=> {
            if(inputField.value.trim().length>0) {
                  requiredMsgs[messRequired].style.display="none";
            } else{
                  requiredMsgs[messRequired].style.display="block";
            }
      });
}
handelInput(firstName,0);
handelInput(lastName,1);
handelInput(emailInput,2);

messArea.addEventListener("input",() => {
      if(messArea.value.trim().length>0) {
            errorMsg.style.display= "none";
      }else{
            errorMsg.style.display= "block";
      }
});
generalInput.addEventListener("change", () => {
      if( generalInput.checked || supportInput.checked) {
            queryMsg.style.display="none";
      } else {
            queryMsg.style.display="block";
      }
});

supportInput.addEventListener("change", () => {
      if( supportInput.checked || supportInput.checked) {
            queryMsg.style.display="none";
      } else {
            queryMsg.style.display="block";
      }
});

checkInput.addEventListener("change" ,() => {
      if(checkInput.checked) {
            msgCheck.style.display="none";
      } else {
            msgCheck.style.display="block";
      }
});

form.addEventListener("submit" , (e) => {
      e.preventDefault();


      let email=emailInput.value.trim();
      let fName=firstName.value.trim();
      let lName=lastName.value.trim();
      let msg=messArea.value.trim();
      let check1=generalInput.checked;
      let check2=supportInput.checked;
      let check=checkInput.checked;

      requiredMsgs[0].style.display="none";
      requiredMsgs[1].style.display="none";
      requiredMsgs[2].style.display="none";
      errorMsg.style.display="none";
      msgCheck.style.display="none";
      queryMsg.style.display="none";

      let hasError=false;
      if(!fName) {
            requiredMsgs[0].style.display="block";
            hasError=true;
      }
      if(!lName) {
            requiredMsgs[1].style.display="block";
            hasError=true;
      }
      if(!email) {
            requiredMsgs[2].style.display="block";
            hasError=true;
      } else if(!validationEmail(email)) {
            requiredMsgs[2].style.display="block";
            hasError=true;
      }
      if(!msg) {
            errorMsg.style.display="block";
            hasError=true;
      }
      if(!check1 && !check2) {
            queryMsg.style.display="block";
            hasError=true;
      }
      if(!check) {
            msgCheck.style.display="block";
            hasError=true;
      }

      if(!hasError) {
            success.style.display="block";
            setTimeout(()=> success.style.display="none",3000);
            form.reset();
      }
});