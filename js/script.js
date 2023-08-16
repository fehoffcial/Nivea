
const element = document.getElementById("next");
const gets = element.addEventListener("click",async()=>{
    const hideen = await document.querySelector(".next-okay")
    const next = await document.querySelector(".next-form")
    let s =  hideen.style.display = "none";
    if(s){
        next.style.display = "flex";
    }

})
