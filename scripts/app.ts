const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');

const halloween: string = '31 Oct 2022';

function countdown() {
	const halloweenDate = +new Date(halloween);
	const currentDate = +new Date();

	const totalSeconds: number = (halloweenDate - currentDate) / 1000;

	const days: number = Math.floor(totalSeconds / 3600 / 24);
	const hours: number = Math.floor(totalSeconds / 3600) % 24;
	const mins: number = Math.floor(totalSeconds / 60) % 60;
	const seconds: number = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days.toString();
	hoursEl.innerHTML = hours.toString();
	minsEl.innerHTML = mins.toString();
	secondsEl.innerHTML = seconds.toString();

	console.log(halloweenDate);
}

countdown();
setInterval(countdown, 1000);
