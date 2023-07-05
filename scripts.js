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
		case 'left-2':
			infoTitle.innerHTML = 'Planes de Entrenamiento';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'left-3':
			infoTitle.innerHTML = 'Aprende de los Mejores';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'left-4':
			infoTitle.innerHTML = 'Clases Magistrales';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'right-1':
			infoTitle.innerHTML = 'Practicar lo aprendido';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'right-2':
			infoTitle.innerHTML = 'Torneos Quincenales';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'right-3':
			infoTitle.innerHTML = 'Roce Internacional';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		case 'right-4':
			infoTitle.innerHTML = 'Simultáneas Quincenales';
			infoDescription.innerHTML = 'lorem ipsum DESCRIPTION';
			break;
		default:
			infoTitle.innerHTML = 'Sin título';
			infoDescription.innerHTML = 'Sin descripción';
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

/* Hover en tarjetas */
let card1 = document.querySelector('#card-1');
let card2 = document.querySelector('#card-2');
let scard1 = document.querySelector('#scard-1');
let scard2 = document.querySelector('#scard-2');
let scard1_svg = document.querySelector('#scard-1 svg');
let scard2_svg = document.querySelector('#scard-2 svg');
let cl1 = document.querySelector('#cl-1');
let cl2 = document.querySelector('#cl-2');

card1.onmouseover = function(e) {
	cl1.classList.add('ds_bg-golden');
	scard1.classList.add('ds_golden');
	scard1.classList.add('border-ds-golden');
	scard1_svg.classList.add('ds_golden');
}
card1.onmouseout = function(e){
	cl1.classList.remove('ds_bg-golden');
	scard1.classList.remove('ds_golden');
	scard1.classList.remove('border-ds-golden');
	scard1_svg.classList.remove('ds_golden');
}

card2.onmouseover = function(e) {
	cl2.classList.add('ds_bg-golden');
	scard2.classList.add('ds_golden');
}
card2.onmouseout = function(e){
	cl2.classList.remove('ds_bg-golden');
	scard2.classList.remove('ds_golden');
}