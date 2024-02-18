//
function modalSection(){
    // console.log('Mehedi Hasan is the best man in bangladesh.')
    // step--1: hide the all section and
    const mainSection=document.getElementById('main-section');
    mainSection.classList.add('hidden')
    // step--2: Show the done section
    const doneSection=document.getElementById('modal');
    doneSection.classList.remove('hidden')
}