const present_time = document.getElementById("p_time_h1")

function updated_time(){
    let date = new Date()
    let Hours = date.getHours().toString().padStart(2,"0")
    let Min = date.getMinutes().toString().padStart(2,"0")
    let sec = date.getSeconds().toString().padStart(2,"0")
    present_time.innerText = `${Hours}:${Min}:${sec}`
}
setInterval(updated_time,1000)

const s_H = document.getElementById("s_time_h1")
let testing_seconds = 0
let result;
function overall_setup(){
    let Hours = Math.floor(testing_seconds/3600).toString().padStart(2,"0")
    let min = Math.floor((testing_seconds%3600)/60).toString().padStart(2,"0")
    let sec = Math.floor(testing_seconds%60).toString().padStart(2,"0")
    s_H.innerHTML = `${Hours}:${min}:${sec}`
}
function startfunction(){ 
    if(!result){
    result = setInterval(()=>{
    testing_seconds++
    overall_setup()
   },1000)
}
}
function stopfunction(){
    clearInterval(result)
    result = null
}
function resetfunction(){
    stopfunction()
    testing_seconds = 0
    overall_setup()
}
overall_setup()

