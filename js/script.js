//
function modalSection(){
    // console.log('Mehedi Hasan is the best man in bangladesh.')
    // step--1: hide the all section and
    const mainSection=document.getElementById('main-section');
    mainSection.classList.add('hidden');
    // step--2: Show the done section
    const doneSection=document.getElementById('modal');
    doneSection.classList.remove('hidden')
}
// apply button function
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton=document.getElementById('apply-button');
    if(text==='NEW15'||text==='Couple 20'){
        deleteButton.removeAttribute('disabled')
    }else{
        deleteButton.setAttribute('disabled',true)
    }
})
// apply button hidden function
function applyButton(){
    const applyButtonSection=document.getElementById('apply-button');
    applyButtonSection.classList.add('hidden');
}
// button background color change
const buttons = document.getElementsByClassName("clickbtn");
  for (let button of buttons) {
    button.addEventListener("click", function(e){
        var element = document.getElementById(e.target.id);
        element.classList.toggle("bg-[#1DD100]");
        element.classList.toggle("text-white");
    });
}
function newButtons(){
const newButtons=document.getElementById('current-seat');
const newButtonsText=newButtons.innerText;
const newSeats=parseInt(newButtonsText)
// console.log(newSeats);
const newButtonValue=newSeats+1;
newButtons.innerText=newButtonValue;
console.log(newButtons);
// seat available
const availableSeat=document.getElementById('available-seat');
    const availableSeatElement= availableSeat.innerText;
    const available=parseInt(availableSeatElement);
    const updateSeat=available-1;
    availableSeat.innerText=updateSeat;
if(newButtonValue ===5){
    alert('You can book only four seats');
}
}
// function newButtons(){
//     const availableSeat=document.getElementById('available-seat');
//     const availableSeatElement= availableSeat.innerText;
//     const available=parseInt(availableSeatElement);
//     const updateSeat=available-1;
//     availableSeat.innerText=updateSeat;
// }