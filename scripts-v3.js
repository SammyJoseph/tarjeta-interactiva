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
			infoDescription.innerHTML = 'En la escuela hay actualmente 6 planes de entrenamiento divididos en varios niveles. Estos planes de entrenamiento están muy bien detallados para resolver problemas diarios de distintos temas por el periodo del plan de entrenamiento.';
			break;
		case 'left-2':
			infoTitle.innerHTML = 'Aprende de los Mejores';
			infoDescription.innerHTML = 'Las clases grupales de la escuela son preparadas a detalles por cada entrenador, y cada uno de ellos es especialista en su tema a enseñar.';
			break;
		case 'right-1':
			infoTitle.innerHTML = 'Practicar lo aprendido';
			infoDescription.innerHTML = 'En la escuela se realizan torneos cada dos semanas con el objetivo de practicar lo aprendido, varios de estos torneos son temáticos de la apertura que se haya enseñado en la escuela.';
			break;
		case 'right-2':
			infoTitle.innerHTML = 'Roce Internacional';
			infoDescription.innerHTML = 'En la escuela se realizan simultáneas contra los maestros cada dos semanas. Esto es importante para medirse contra jugadores fuertes y aprender de ellos.';
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
let card3 = document.querySelector('#card-3');
let card4 = document.querySelector('#card-4');

let card3_svg = document.querySelector('#card-3 svg');
let card4_svg = document.querySelector('#card-4 svg');


card3.onmouseover = function(e) {
	card3_svg.classList.add('stroke-white');
}
card3.onmouseout = function(e){
	card3_svg.classList.remove('stroke-white');
}

card4.onmouseover = function(e) {
	card4_svg.classList.add('stroke-white');
}
card4.onmouseout = function(e){
	card4_svg.classList.remove('stroke-white');
}