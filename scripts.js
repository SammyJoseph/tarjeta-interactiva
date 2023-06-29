let openCards = document.querySelectorAll('.openCard');
let infoScreen = document.querySelector('#sc_screen-info');
let infoCard = document.querySelector('#sc_card-info');
let infoText = document.querySelector('#sc_text-info');
let infoTitle = document.querySelector('#sc_title-info');
let infoDescription = document.querySelector('#sc_description-info');

for (var i = 0; i < openCards.length; i++) {
	openCards[i].addEventListener('click', function() {

		let position = Array.from(openCards).indexOf(this);
		infoScreen.classList.remove('hidden');

		setTimeout(() => {
			infoScreen.classList.add('opacity-100');
		}, 100);

	});
}

function openCard(cardPosition){
	switch (cardPosition) {
		case 'left-1':
			infoTitle.innerHTML = 'Entrenamiento Constante';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		default:
			// statements_def
			break;
	}

	infoScreen.classList.remove('hidden');

	setTimeout(() => {
		infoScreen.classList.add('opacity-100');
	}, 100);
}

/* Cerrar infoScreen al dar clic fuera de infoCard */
infoScreen.addEventListener('click', (event) => {
	if (!infoCard.contains(event.target)) {
		closeCard();
	}
});

function closeCard(){
	infoScreen.classList.remove('opacity-100');	

	setTimeout(() => {
		infoScreen.classList.add('hidden');
	}, 500);
}