
const form = document.querySelector('form');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const dobInput = document.getElementById('dob');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const pinInput = document.getElementById('pin');
const stateInput = document.getElementById('state');
const membershipInput = document.getElementById('membership');
const specializationInputs = document.querySelectorAll('.specialization');
const passwordInput = document.getElementById('password');


function saveFormData(event) {
  event.preventDefault();

  
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const mobile = mobileInput.value;
  const gender = Array.from(genderInputs).find(input => input.checked)?.value;
  const dob = dobInput.value;
  const address = addressInput.value;
  const city = cityInput.value;
  const pin = pinInput.value;
  const state = stateInput.value;
  const membership = membershipInput.value;
  const specializations = Array.from(specializationInputs)
    .filter(input => input.checked)
    .map(input => input.value);
  const password = passwordInput.value;

  
  const formData = {
    firstName,
    lastName,
    email,
    mobile,
    gender,
    dob,
    address,
    city,
    pin,
    state,
    membership,
    specializations,
    password
  };

  
  console.log(formData);
 
}


form.addEventListener('submit', saveFormData);

