let NIK=document.getElementById("txtNIK");
let nama=document.getElementById("txtNamaLengkap");
let userName=document.getElementById("txtUserName");
let Pwd=document.getElementById("txtPwd");
let form=document.querySelector("form");

function validateInput(){
    if(NIK.value.trim()===""){
       onError(NIK,"NIK harus di isi!");
    }else{
        onSuccess(NIK);
    }
    if(nama.value.trim()===""){
        onError(nama,"Nama harus di isi!");
    }else{
        if(!isValidEmail(nama.value.trim())){
            onError(nama,"Nama tidak valid");
        }else{
            onSuccess(nama);
        }
    }


    if(userName.value.trim()===""){
        onError(userName,"User Name harus di isi!");
     }else{
         onSuccess(userName);
     }
     if(Pwd.value.trim()===""){
        onError(Pwd,"Password harus di isi!");
     }else{
         if(pwd.value.trim()!==Pwd.value.trim()){
            onError(Pwd,"Password tidak valid");
         }
         else
         onSuccess(Pwd);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}
