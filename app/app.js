const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
if(btn){
    btn.addEventListener("click",()=>{
        if(input.value === ""){
            alert("Please input a value");
        }else if(input.value.length === 1){
            result.innerText = `${input.value} is a palindrome`;
        }else if(input.value === [...input.value].reverse().join("")){
            result.innerText = `${input.value} is a palindrome`;
        }
    })
}


