const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');

const halloween: string = '31 Oct 2022';

function countdown() {
	const halloweenDate = +new Date(halloween);
	const currentDate = +new Date();

	console.log(halloweenDate);
}

countdown();
setInterval(countdown, 1000);
