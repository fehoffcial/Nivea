
const element = document.getElementById("next");
const gets = element.addEventListener("click",async()=>{
    const hideen = await document.querySelector(".next-okay")
    const next = await document.querySelector(".next-form")
    let s =  hideen.style.display = "none";
    if(s){
        next.style.display = "flex";
        const form = await document.querySelector("#form")
        form.addEventListener("submit",async(e)=>{
            e.preventDefault();
            const prePayload = new FormData(form);
            const payload = new URLSearchParams(prePayload);
            console.log([...payload]);
            fetch("http://httpbin.org/post",{
                method:"POST",
                body:payload,
            }).then((res)=>res.json()).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);});
        });
    }
})
