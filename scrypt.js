document.body.style.backgroundColor = '#737c99';
var ball = document.createElement("img");
ball.src = "MagicBall.png";
var answer = document.createElement("pre");
answer.innerHTML =   " Задайте\n вопрос и\n получите\n  ответ";
var question = document.createElement("input");
document.body.appendChild(answer);
document.body.appendChild(ball);
document.body.appendChild(question);
question.className = "question";
answer.className = "answer";
ball.className = "ball";
var answerList = ["\n   Да", "\n   Нет", "  Духи  \nговорят да",  "\nСпросите \n  снова", "\nВозможно", "\nНе сейчас", "\n  Шансы \n хорошие"]
ball.addEventListener("click", getAnswer, false);

function getAnswer(){
	answer.innerHTML =   "";
	ball.classList.add("animation");
	setTimeout(function(){
	let getAnswer = Math.round(Math.random()*6);
	answer.innerHTML =   answerList[getAnswer];
	ball.classList.remove("animation");
	},500);
}
