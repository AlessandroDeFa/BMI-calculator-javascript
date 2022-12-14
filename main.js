const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const comment = document.querySelector('.comment-span');
const error = document.querySelector('#error-message');

// adding click listeners

button.addEventListener('click', ()=>{
 
  calculateBmi();
})

// BMI calculation =  weight(kg) * (height(m) * height(m))

const calculateBmi = ()=>{
  let heightValue = height.value;
  let weightValue = weight.value;
  let total = '';
  
  // condition if empty 
  
  if(heightValue == '' || weightValue == ''){
    error.style.display = 'block';
    comment.innerText = '';
    result.innerText = total;
    return; 
  }else {
    error.style.display = 'none';
  }

  // calculation
  
  heightValue = heightValue / 100;
  total = weightValue / (heightValue * heightValue);
  total = total.toFixed(2);
  result.innerText = total;

  // condition result

  if(total < 18.5){
    comment.innerText = "Underweight";
  }else if(total >= 18.5 && total <= 25){
    comment.innerText = "Normal weight"
  }else if(total > 25 && total <= 30){
    comment.innerText = "Overweight"
  }else if(total > 30){
    comment.innerText = "Obese"
  };
  
}

