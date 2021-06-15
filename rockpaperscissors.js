var container = document.getElementById('result-container');
var humanPoints = document.getElementById('human');
var computerPoints = document.getElementById('computer');
var pointsHuman = 0;
var pointsComputer = 0;
var scissorsInput = document.getElementById('')
var humanPick = document.getElementById('human-pick');
var pcPick = document.getElementById('pc-pick');
var wasRock = 0;
var wasPaper = 0;
var wasScissors = 0;



function choice(a){
	let randomArray = [1,2,3]; //1 = scissors, 2 = rock, 3 = paper
	let randomNumber = randomArray[Math.floor(Math.random() * randomArray.length)]; //z array som vytiahol nahodne cislo, zaokruhlene na cele cisla * dlzka array(3) namiesto array[0], je teda array[random cislo];

	//DRAW
	if (a == randomNumber) {
		draw();
	if (randomNumber == 1) {
		humanPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
		pcPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
	}else if (randomNumber == 2){
		humanPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
		pcPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
	}else if(randomNumber == 3){
		humanPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
		pcPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
		}
	}

//SCISSORS
	if (a == 1) {
		wasScissors ++;
		wasPaper = 0;
		wasRock = 0;
		if (wasScissors >= 3) {
			pcPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
			lose();
		}else if (randomNumber == 2) {
			humanPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
			pcPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
			lose();
		}else if (randomNumber == 3) {
			humanPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
			pcPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
			win();		
		}
	}

//ROCK
	if (a == 2) {
		wasScissors = 0;
		wasPaper = 0;
		wasRock ++;
		if (wasRock >= 3) {
			pcPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
			lose();
		}else if (randomNumber == 1) {
			humanPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
			pcPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
			win();		
		}else if (randomNumber == 3) {
			humanPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
			pcPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
			lose();		
		}
	}

	//PAPER
	if (a == 3) {
		wasScissors = 0;
		wasPaper ++;
		wasRock = 0;
		if (wasPaper >= 3) {
			pcPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
			lose();
		}else if (randomNumber == 1) {
			humanPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
			pcPick.src = "https://i0.wp.com/freepngimages.com/wp-content/uploads/2019/06/open-scissors.png?fit=895%2C895";
			lose();
		}else if (randomNumber == 2) {
			humanPick.src = "https://www.onlygfx.com/wp-content/uploads/2020/02/crumpled-up-ball-paper-2.png";
			pcPick.src = "https://www.pngkit.com/png/full/0-8926_stones-and-rocks-png-image-rock-transparent-background.png";
			win();
		}
	}


}

function win(){
	document.getElementById('tie').textContent = "You Won";
	container.style.display = "block";
	container.style.backgroundColor = "green";
	pointsHuman ++;
	humanPoints.textContent = pointsHuman;
	document.getElementById('choice-container').style.display = "block";
}

function lose(){
	document.getElementById('tie').textContent = "You lost";
	container.style.display = "block";
	container.style.backgroundColor = "red";
	pointsComputer ++;
	computerPoints.textContent = pointsComputer;
	document.getElementById('choice-container').style.display = "block";
}

function draw(){
	document.getElementById('tie').textContent = "Draw";
	container.style.display = "block";
	container.style.backgroundColor = "cyan";
	document.getElementById('choice-container').style.display = "block";

}