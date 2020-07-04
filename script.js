// Create a variable for each element

const submitButton = document.querySelector('#submit-form');
const postList = document.querySelector('#post-list');
const postTitle = document.querySelector('#new-post-title');
const postContent = document.querySelector('#new-post-content');
const form = document.querySelector('form');

// These are for the checkbox

const checkboxForm = document.querySelector('#form-check');
const hobbiesCheckbox = document.querySelector('.form-check-inline');
const schoolLifeTagCheckbox = document.querySelector('#school-life-tag');
const personalTagCheckbox = document.querySelector('#personal-tag');



// Create elements

const divCard = document.createElement('div');
const divCardBody = document.createElement('div');
const newheading = document.createElement('h5');
const newParagraph = document.createElement('p');

// Add class to each new element

divCard.classList.add('card', 'some-space');
divCardBody.classList.add('card-body');
newheading.classList.add('card-title');
newParagraph.classList.add('card-text')

// Nesting element

divCardBody.appendChild(newheading);
divCardBody.appendChild(newParagraph);
divCard.appendChild(divCardBody);

// Create an event listener for the submit button

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    newheading.textContent = `${postTitle.value}`;
    newParagraph.textContent = `${postContent.value}`;
    postList.appendChild(divCard); // Nest the new elements into the Post-list element
    form.reset() // Clean up the form after submitting the result
});

