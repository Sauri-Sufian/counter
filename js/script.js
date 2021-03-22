const data = document.getElementById('data');
const dataColor= document.querySelector('.nutral')
const increaseBtn = document.querySelector('#plus-btn');
const decreaseBtn = document.querySelector('#minus-btn');


const updateValue =(value)=>{
    if(value>0){
        dataColor.classList.remove('nutral');
        if(dataColor.classList.contains('minus')){
            dataColor.classList.remove('minus');
        }
        dataColor.classList.add('plus')
    }
    else if(value<0){
        dataColor.classList.remove('nutral');
        if(dataColor.classList.contains('plus')){
            dataColor.classList.remove('plus');
        }
        dataColor.classList.add('minus')
    }
    else{
       
        if(dataColor.classList.contains('minus')){
            dataColor.classList.remove('minus');
        }
        if(dataColor.classList.contains('plus')){
            dataColor.classList.remove('plus');
        }
        dataColor.classList.add('nutral')
    }
    data.innerHTML=value;
}

const increment=()=>{
  let initialValue =  data.innerText;
  initialValue++;
  updateValue(initialValue);
}
const decrement=()=>{
    let initialValue =  data.innerText;
    initialValue--;
    updateValue(initialValue);
}
increaseBtn.addEventListener('click',increment);
decreaseBtn.addEventListener('click',decrement);