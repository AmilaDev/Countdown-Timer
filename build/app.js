'use strict';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');
const halloween = '31 Oct 2022';
function countdown() {
	const halloweenDate = +new Date(halloween);
	const currentDate = +new Date();
	const totalSeconds = (halloweenDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;
	daysEl.innerHTML = days.toString();
	hoursEl.innerHTML = hours.toString();
	minsEl.innerHTML = mins.toString();
	secondsEl.innerHTML = seconds.toString();
	console.log(halloweenDate);
}
countdown();
setInterval(countdown, 1000);
