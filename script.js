
const formCheckBox = document.getElementsByClassName('form-check');
const hobbiesCheckBox = document.querySelector('.form-check-inline');
const submitButton = document.querySelector('#submit-form');
const postList = document.querySelector('#post-list')
const postTitle = document.querySelector('#new-post-title')
const postContent = document.querySelector('#new-post-content')

const divCard = document.createElement('div');
const divCardBody = document.createElement('div');
const newheading = document.createElement('h5');
const newParagraph = document.createElement('p');

divCard.classList.add('card', 'some-space');
divCardBody.classList.add('card-body');
newheading.classList.add('card-title');
newParagraph.classList.add('card-text');


submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    newheading.textContent = `${postTitle.value}`;
    newParagraph.textContent = `${postContent.value}`;

});


divCardBody.appendChild(newheading);
divCardBody.appendChild(newParagraph);
divCard.appendChild(divCardBody);
postList.appendChild(divCardBody);


