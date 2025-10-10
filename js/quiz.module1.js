const handleStartQuiz = () => {
	if (window.location.pathname.includes('Nutribabay-44.html'))
		localStorage.setItem('responses', JSON.stringify([]))
}

const handleValidateCorrect = () => {
	$('#correct')[0].play()
	const responses = JSON.parse(localStorage.getItem('responses'))
	if (!responses) window.location.href = './Nutribabay-44.html'
	$('.correct img').fadeIn()
	$('.pregunt1').fadeOut()
	$('.personcorrec').fadeIn()
	responses.push('Check')
	localStorage.setItem('responses', JSON.stringify(responses))
	if (window.location.pathname.includes('Nutribabay-45.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-46.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-46.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-47.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-47.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-48.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-48.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-49.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-49.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-50.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-50.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-51.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-52.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-53.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-53.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-54.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-54.html')) {
		if (responses.length > 10) window.location.href = './Nutribabay-44.html'
		if (responses.filter((item) => item === 'Check').length < 8)
			setTimeout(() => {
				window.location.href = './Nutribabay-55.html'
			}, 4000)
		if (responses.filter((item) => item === 'Check').length >= 8)
			setTimeout(() => {
				window.location.href = './Nutribabay-56.html'
			}, 4000)
	}
}

const handleValidateIncorrect = () => {
	$('#incorrect')[0].play()
	const responses = JSON.parse(localStorage.getItem('responses'))
	if (!responses) window.location.href = './Nutribabay-44.html'
	$('.personincorrec').fadeIn()
	responses.push('X')
	localStorage.setItem('responses', JSON.stringify(responses))
	if (window.location.pathname.includes('Nutribabay-45.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-46.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-46.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-47.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-47.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-48.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-48.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-49.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-49.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-50.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-50.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-51.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-52.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-53.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-53.html'))
		setTimeout(() => {
			window.location.href = './Nutribabay-54.html'
		}, 4000)
	if (window.location.pathname.includes('Nutribabay-54.html')) {
		if (responses.length > 10) window.location.href = './Nutribabay-44.html'
		if (responses.filter((item) => item === 'Check').length < 8)
			setTimeout(() => {
				window.location.href = './Nutribabay-55.html'
			}, 4000)
		if (responses.filter((item) => item === 'Check').length >= 8)
			setTimeout(() => {
				window.location.href = './Nutribabay-56.html'
			}, 4000)
	}
}

const handleSetControls = () => {
	if (!window.location.pathname.includes('Nutribabay-51.html')) {
		if ($('.correct')) $('.correct').on('click', handleValidateCorrect)
		if ($('.incorrect'))
			$('.incorrect').on('click', handleValidateIncorrect)
		if ($('.incorrect1'))
			$('.incorrect1').on('click', handleValidateIncorrect)
		if ($('.incorrect2'))
			$('.incorrect2').on('click', handleValidateIncorrect)
	} else {
		let item = 0,
			posicion = []
		$('.correct').on('click', () => {
			if (item === 0) {
				$('.correct').css('top', '26.3%')
				$('.correct').css('left', '6.3%')
				posicion.push(1)
				item++
			} else {
				$('.correct').css('top', '26.3%')
				$('.correct').css('left', '27.4%')
				posicion.push(1)
				item++
			}

			if (item === 2) {
				if (posicion[0] === 1 && posicion[1] === 2) {
					$('#correct')[0].play()
					const responses = JSON.parse(
						localStorage.getItem('responses')
					)
					if (!responses)
						window.location.href = './Nutribabay-44.html'
					$('.personcorrec').fadeIn()
					responses.push('Check')
					localStorage.setItem('responses', JSON.stringify(responses))
					setTimeout(() => {
						window.location.href = './Nutribabay-52.html'
					}, 4000)
				} else {
					$('#incorrect')[0].play()
					const responses = JSON.parse(
						localStorage.getItem('responses')
					)
					if (!responses)
						window.location.href = './Nutribabay-44.html'
					$('.personincorrec').fadeIn()
					responses.push('X')
					localStorage.setItem('responses', JSON.stringify(responses))
					setTimeout(() => {
						window.location.href = './Nutribabay-52.html'
					}, 4000)
				}
			}
		})

		$('.correct1').on('click', () => {
			if (item === 0) {
				$('.correct1').css('top', '26.3%')
				$('.correct1').css('left', '6.3%')
				posicion.push(2)
				item++
			} else {
				$('.correct1').css('top', '26.3%')
				$('.correct1').css('left', '27.4%')
				posicion.push(2)
				item++
			}

			if (item === 2) {
				if (posicion[0] === 1 && posicion[1] === 2) {
					$('#correct')[0].play()
					const responses = JSON.parse(
						localStorage.getItem('responses')
					)
					if (!responses)
						window.location.href = './Nutribabay-44.html'
					$('.personcorrec').fadeIn()
					responses.push('Check')
					localStorage.setItem('responses', JSON.stringify(responses))
					setTimeout(() => {
						window.location.href = './Nutribabay-52.html'
					}, 4000)
				} else {
					$('#incorrect')[0].play()
					const responses = JSON.parse(
						localStorage.getItem('responses')
					)
					if (!responses)
						window.location.href = './Nutribabay-44.html'
					$('.personincorrec').fadeIn()
					responses.push('X')
					localStorage.setItem('responses', JSON.stringify(responses))
					setTimeout(() => {
						window.location.href = './Nutribabay-52.html'
					}, 4000)
				}
			}
		})
	}
}

// const handleSendToOtherQuestion = () => {
// 	if ($('.questnext'))
// 		$('.questnext').on('click', () => {
// 			const responses = JSON.parse(localStorage.getItem('responses'))
// 			if (window.location.pathname.includes('Nutribabay-15.html'))
// 				window.location.href = './Nutribabay-16.html'
// 			if (window.location.pathname.includes('Nutribabay-16.html'))
// 				window.location.href = './Nutribabay-17.html'
// 			if (window.location.pathname.includes('Nutribabay-17.html'))
// 				window.location.href = './Nutribabay-18.html'
// 			if (window.location.pathname.includes('Nutribabay-18.html'))
// 				window.location.href = './Nutribabay-19.html'
// 			if (window.location.pathname.includes('Nutribabay-19.html'))
// 				window.location.href = './Nutribabay-20.html'
// 			if (window.location.pathname.includes('Nutribabay-20.html'))
// 				window.location.href = './Nutribabay-21.html'
// 			if (window.location.pathname.includes('Nutribabay-21.html'))
// 				window.location.href = './Nutribabay-22.html'
// 			if (window.location.pathname.includes('Nutribabay-22.html'))
// 				window.location.href = './Nutribabay-23.html'
// 			if (window.location.pathname.includes('Nutribabay-23.html'))
// 				window.location.href = './Nutribabay-24.html'
// 			if (window.location.pathname.includes('Nutribabay-24.html')) {
// 				if (responses.length > 10)
// 					window.location.href = './Nutribabay-14.html'
// 				if (responses.filter((item) => item === 'Check').length < 8)
// 					window.location.href = './Nutribabay-25.html'
// 				if (responses.filter((item) => item === 'Check').length >= 8)
// 					window.location.href = './Nutribabay-26.html'
// 			}
// 		})
// }

const handleValidateResponses = () => {
	const responses = JSON.parse(localStorage.getItem('responses'))
	for (let i = 0; i < responses.length; i++) {
		if (responses[i] === 'X') $(`.Equis${i + 1}`).fadeIn()
		if (responses[i] === 'Check') $(`.objecto${i + 1}`).fadeIn()
	}
}

$(document).ready(() => {
	handleStartQuiz()
	handleValidateResponses()
	handleSetControls()
	handleSendToOtherQuestion()
})
