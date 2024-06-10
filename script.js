const num1 = document.querySelector('.number1');
const num2 = document.querySelector('.number2');
const signsBlock = document.querySelector('.signs');
const singsEl = document.querySelectorAll('.button-sign');
const out = document.querySelector('.out');

singsEl.forEach(sign => {
	sign.addEventListener('click', calculate)
})
function calculate(e) {
	const num1Value = +num1.value;
	const num2Value = +num2.value;
	const sign = e.target.textContent;
	let result;

	switch ( sign ) {
		case '+':
			result = num1Value + num2Value
			break;
		case '-':
			result = num1Value - num2Value
			break;
		case '*':
			result = num1Value * num2Value
			break;
		case '/':
			result = num1Value / num2Value
			break;
	}
	out.textContent = result
}