$(document).ready(function(){


	// модальное окно
	let openModal = document.querySelector('.open-modal');
	let modalOverlay = document.querySelector('.modal-overlay');
	let closeModal = document.querySelector('.modal-close');

	openModal.addEventListener('click', (e) => {
		e.preventDefault();
		modalOverlay.classList.add('collapse');
	});

	closeModal.addEventListener('click', (e) => {
		e.preventDefault();
		modalOverlay.classList.remove('collapse');
	});


	
	// ================= НАСТРОЙКА ТАЙМЕРА =================
	const extraMinutes = 900; // доп минуты
	// =====================================================

	// Устанавливаем базовую дату (28 августа 2026, 00:00:00)
	const baseDeadline = new Date(2026, 7, 28, 0, 0, 0).getTime(); 

	const deadline = baseDeadline + (extraMinutes * 60 * 1000);

	const daysVal = document.querySelector('.timer-days');
	const hoursVal = document.querySelector('.timer-hours');
	const minutesVal = document.querySelector('.timer-minutes');
	const daysText = document.getElementById('days-text');

	// console.log('Элементы найдены?', { 
	// 	daysElement: !!daysVal, 
	// 	hoursElement: !!hoursVal, 
	// 	minutesElement: !!minutesVal 
	// });

	function getDaysWord(num) {
		const value = Math.abs(num) % 100;
		const lastDigit = value % 10;
		if (value > 10 && value < 20) return 'дней';
		if (lastDigit > 1 && lastDigit < 5) return 'дня';
		if (lastDigit === 1) return 'день';
		return 'дней';
	}

	function updateTimer() {
		const now = new Date().getTime();
		const diff = deadline - now;

		// console.log('Осталось миллисекунд до дедлайна:', diff);

		if (diff <= 0) {
			if (daysVal) daysVal.textContent = '00';
			if (hoursVal) hoursVal.textContent = '00';
			if (minutesVal) minutesVal.textContent = '00';
			clearInterval(timerId);
			return;
		}

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((diff / (1000 * 60)) % 60);

		if (daysVal) daysVal.textContent = String(days).padStart(2, '0');
		if (hoursVal) hoursVal.textContent = String(hours).padStart(2, '0');
		if (minutesVal) minutesVal.textContent = String(minutes).padStart(2, '0');

		if (daysText) daysText.textContent = getDaysWord(days);
	}

	updateTimer();
	const timerId = setInterval(updateTimer, 1000);
	

	





	


	const playButton = document.querySelectorAll('.start-wedding-btn');
    const audio = document.getElementById('wedding-audio');

	playButton.forEach(item => {
		if (playButton && audio) {
			item.addEventListener('click', function() {
				
				// Если музыка на паузе — включаем её
				if (audio.paused) {
					audio.play().then(() => {
						console.log("Музыка играет");
						
					}).catch(error => {
						console.error("Ошибка запуска:", error);
					});
				} 
				// Если музыка уже играет — выключаем её
				else {
					audio.pause();
					console.log("Музыка на паузе");
				}
				
			});
		}
	});




	// модальное окно приветствия
	let modalPreOverlay = document.querySelector('.modal-overlay-pre');
	let modalPreBtn = document.querySelector('.modalpre-btn');
	let bodyEl = document.querySelector('body');

	modalPreBtn.addEventListener('click', (e) => {
		e.preventDefault();
		modalPreOverlay.classList.remove('collapse');
		bodyEl.classList.remove('body-fixed');
	});
    


});