const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
if(btn){
    btn.addEventListener("click",()=>{
        const replace = input.value.toLowerCase.replace(/[^a-z0-9]/g,"");
        if(input.value === ""){
            alert("Please input a value");
        }else if(input.value.length === 1){
            result.remove("hide");
            result.innerText = `${input.value} is a palindrome`;
        }else if(replace === [...replace].reverse().join("")){
            result.remove("hide");
            result.innerText = `${input.value} is a palindrome`;
        }else{
            result.remove("hide");
            result.innerText = `${input.value} is not a palindrome`;
        }
    })
    btn.addEventListener("keyup",()=>{
        result.add("hide");
    })
}


