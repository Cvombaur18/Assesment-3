
function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('form submit')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let submitButton  = document.querySelector('input[typ-submit]')
	
submitButton.addEventListener('click', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () =>
{
	alert('I like you')
})