const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let numeroslide = 0;
changedots ();

// Eventlistener pour fleche gauche
const Arrowleft = document.querySelector(".arrow_left");

Arrowleft.addEventListener("click", () => {
	changeslide(-1);
console.log(Arrowleft);
});

// Eventlistener pour fleche droite
const Arrowright = document.querySelector(".arrow_right");
Arrowright.addEventListener("click", () => {
	changeslide(1);
	console.log(Arrowright);
});


function changedots () {
	const dotsDiv = document.querySelector(".dots");
	dotsDiv.innerHTML ='';
// Ajout des bullets
	for (let i = 0; i < slides.length; i++) {
	
		const dot = document.createElement('span'); 
		dot.classList.add('dot'); // parent
		dotsDiv.appendChild(dot); // enfant
	
		if(i===numeroslide){
			dot.classList.add('dot_selected');
		}
	
		
	}
}

// Fonction permettant de faire défiler les slides
function changeslide(direction)  {
numeroslide = numeroslide + direction;

if (numeroslide > slides.length -1)
    numeroslide = 0;
if (numeroslide < 0)
numeroslide = slides.length -1;
// Récuperation des images 
let src='./assets/images/slideshow/'+ slides[numeroslide]['image'];
document.querySelector(".banner-img").src=src ;
// Récuperation des textes
document.getElementById("text").innerHTML=slides[numeroslide]['tagLine'];
	
changedots ();

}