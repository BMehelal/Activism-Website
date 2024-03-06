
  let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
  };

  let revealableContainers = document.querySelectorAll('.revealable');

  const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
      let windowHeight = window.innerHeight;
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add('active');
      } else {
        revealableContainers[i].classList.remove('active');
      }
    }
  }

  // Adding reveal as an event listener to the 'scroll' event on the window
  window.addEventListener('scroll', reveal);


let themeButton = document.getElementById("theme-button");

// Complete the toggleDarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener('click', toggleDarkMode);

// Add your query for the sign-now button with the ID "sign-now-button"
let signNowButton = document.getElementById("sign-now-button");
let count = 5;

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };
  const email = document.getElementById('email');
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
      const inputName = petitionInputs[i].name;

      alert("Please enter a correct " + inputName)
      return; 
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
    if (!email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
      alert("Invalid email");
      return; 
    }else{
      email.classList.remove('error');
    }
if(containsErrors == false){
  addSignature(person);
  toggleModal(person);
  for (let i = 0; i < petitionInputs.length; i++){
    petitionInputs[i].value = "";
    containsErrors = false;
  }
}
  
}




  const addSignature = (person) => {
  // const nameInput = document.getElementById("name");
  // const neighborhoodInput = document.getElementById("neighborhood");

 const newParagraph = document.createElement('p');
    newParagraph.textContent = "🖊️" + person.name + " from " + person.hometown + " supports this.";
    const referenceElement = document.querySelector("#signatures p:nth-last-child(2)");

   
    referenceElement.insertAdjacentElement("afterend", newParagraph);
   
  count++;
  updateCounter();
};

const updateCounter = () => {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";
};

updateCounter();

const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("text-content");
  modal.style.display = "flex";
  modalContent.innerHTML = "Thank you for signing the petition, " + person.name + ". Shout out to all the dawgs from " + person.hometown + "!";


  // Set up the interval for scaleImage
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    // Stop the animation after 4 seconds
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}


signNowButton.addEventListener('click', validateForm);

 window.addEventListener('scroll', reveal);

  