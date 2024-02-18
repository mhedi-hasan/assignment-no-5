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