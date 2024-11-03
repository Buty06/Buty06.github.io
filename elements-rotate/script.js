const $body = document.querySelector("body")
const $activate = document.getElementById("activate")

$activate.addEventListener("click", ()=>{
    $body.classList.toggle("activate")
})