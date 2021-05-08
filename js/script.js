// let genderMaleButton = document.getElementById('gender-male');
// let genderFemaleButton = document.getElementById('gender-female');

let parameters = document.querySelectorAll('.input__wrapper input');
let ageInput = document.getElementById('age');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');

let formSubmitButton = document.querySelector('.form__submit-button');
let formResetButton = document.querySelector('.form__reset-button');

let counterResult = document.querySelector('.counter__result');
let caloriesNorm = document.getElementById('calories-norm');
let caloriesMinimal = document.getElementById('calories-minimal');
let caloriesMaximal = document.getElementById('calories-maximal');

// if (ageInput.value) {
//   // console.log(ageInput.value);
//   formSubmitButton.disabled = false;
//   formResetButton.disabled = false;
//   console.log(ageInput.value);
// }


(function checkParameters() {
  let i = 0;
  for (let parameter of parameters) {

    parameter.onchange = function() {
      console.log(i);

      if (parameter.value) {
        i++;
      } else {
        i--;
      }

      if (i == 3) {
        formSubmitButton.disabled = false;
      } else {
        formSubmitButton.disabled = true;
      }
      if (i >= 1) {
        formResetButton.disabled = false;
      } else {
        formResetButton.disabled = true;
      }

      formResetButton.onclick = function() {
        i = 0;
        counterResult.classList.add('counter__result--hidden');
      }




      console.log(i);

    }
  }
})();


let activityСoefficients = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9,
};  

function Person (gender, age, height, weight, activity) {
  this.gender = gender;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.activity = activity;
  this.getCaloriesNorm = function() {
    if (this.gender == 'male') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * this.activity);
    };
    if (this.gender == 'female') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * this.activity);
    }; 
  };
  this.getCaloriesMininmal = function() {
    if (this.gender == 'male') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * this.activity * 0.85);
    };
    if (this.gender == 'female') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * this.activity * 0.85);
    };
  };
  this.getCaloriesMaximal = function() {
    if (this.gender == 'male') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * this.activity * 1.15);
    };
    if (this.gender == 'female') {
      return Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * this.activity * 1.15);
    };
  }
}

formSubmitButton.onclick = function() {
  counterResult.classList.remove('counter__result--hidden');
  let genderValue = document.querySelector('input[name="gender"]:checked').value;
  let ageValue = document.getElementById('age').value;
  let heightValue = document.getElementById('height').value;
  let weightValue = document.getElementById('weight').value;
  let activityValue = activityСoefficients[document.querySelector('input[name="activity"]:checked').value];

  // console.log(genderValue);
  // console.log(ageValue);
  // console.log(heightValue);
  // console.log(weightValue);
  // console.log(activityValue);

  let person = new Person(genderValue, ageValue, heightValue, weightValue, activityValue);

  // console.log(person);
  // console.log(person.getCaloriesNorm());
  caloriesNorm.textContent = person.getCaloriesNorm();
  caloriesMinimal.textContent = person.getCaloriesMininmal();
  caloriesMaximal.textContent = person.getCaloriesMaximal();
}

// formResetButton.onclick = function() {
//   for (let parameter of parameters) {
//     parameter.value = '';
//   }
//   counterResult.classList.add('counter__result--hidden');
// }
