
function modalSection(){
    // console.log('Mehedi Hasan is the best man in bangladesh.')
    // step--1: hide the all section and
    const mainSection=document.getElementById('main-section');
    mainSection.classList.add('hidden');
    // step--2: Show the done section
    const doneSection=document.getElementById('modal');
    doneSection.classList.remove('hidden')
}
function modalHide(){
    const mainSection=document.getElementById('modal');
    mainSection.classList.add('hidden');
    const mainSections=document.getElementById('main-section');
    mainSections.classList.remove('hidden');
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
document.getElementById('phone-number').addEventListener('keyup',function(event){
    const number = event.target.value;
    const deleteButtons=document.getElementById('next-button');
    if(number.length===11){
        deleteButtons.removeAttribute('disabled')
    }else{
        deleteButtons.setAttribute('disabled',true)
    }
})
// // apply button hidden function
function applyButton(){
    const applyButtonSection=document.getElementById('apply-button');
    applyButtonSection.classList.add('hidden');
}

// // ----------------------------------------------
const allBtn=document.getElementsByClassName('clickbtn');
console.log(allBtn);
let count=0;
let counts=40;
for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        count=count+1;
        counts=counts-1;
        document.getElementById('current-seat').innerText=count;
        document.getElementById('available-seat').innerText=counts;
        // --------------------------
        var element = document.getElementById(e.target.id);
        element.classList.toggle("bg-[#1DD100]");
        element.classList.toggle("text-white");
        // -------------------------------
        if(count===5){
            alert('You can book only four seats');
            }
    })
}
