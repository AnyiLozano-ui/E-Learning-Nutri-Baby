const handleStartQuiz = () => {
    console.log(window.location.pathname.includes('Nutribabay-14.html'))
    if (window.location.pathname.includes('Nutribabay-14.html')) 
        localStorage.setItem('responses', JSON.stringify([]))
}

const handleValidateCorrect = () => {
    $('#correct')[0].play()
    const responses = JSON.parse(localStorage.getItem('responses'))
    if (!responses) window.location.href = './Nutribabay-14.html'
    $('.correct img').fadeIn()
    $('.pregunt1').fadeOut()
    $('.personcorrec').fadeIn()
    $('.questnext').fadeIn()
    responses.push('Check')
    localStorage.setItem('responses', JSON.stringify(responses))
    if (window.location.pathname.includes('Nutribabay-15.html'))
        $('.objecto1').fadeIn()
    if (window.location.pathname.includes('Nutribabay-16.html'))
        $('.objecto2').fadeIn()
    if (window.location.pathname.includes('Nutribabay-17.html'))
        $('.objecto3').fadeIn()
    if (window.location.pathname.includes('Nutribabay-18.html'))
        $('.objecto4').fadeIn()
    if (window.location.pathname.includes('Nutribabay-19.html'))
        $('.objecto5').fadeIn()
    if (window.location.pathname.includes('Nutribabay-20.html'))
        $('.objecto6').fadeIn()
    if (window.location.pathname.includes('Nutribabay-21.html'))
        $('.objecto7').fadeIn()
    if (window.location.pathname.includes('Nutribabay-22.html'))
        $('.objecto8').fadeIn()
    if (window.location.pathname.includes('Nutribabay-23.html'))
        $('.objecto9').fadeIn()
    if (window.location.pathname.includes('Nutribabay-24.html'))
        $('.objecto10').fadeIn()
}

const handleValidateIncorrect = () => {
    $('#incorrect')[0].play()
    const responses = JSON.parse(localStorage.getItem('responses'))
    if (!responses) window.location.href = './Nutribabay-14.html'
    $('.personincorrec').fadeIn()
    $('.questnext').fadeIn()
    $('.pregunt1').fadeOut()
    responses.push('X')
    localStorage.setItem('responses', JSON.stringify(responses))
    if (window.location.pathname.includes('Nutribabay-15.html'))
        $('.Equis1').fadeIn()
    if (window.location.pathname.includes('Nutribabay-16.html'))
        $('.Equis2').fadeIn()
    if (window.location.pathname.includes('Nutribabay-17.html'))
        $('.Equis3').fadeIn()
    if (window.location.pathname.includes('Nutribabay-18.html'))
        $('.Equis4').fadeIn()
    if (window.location.pathname.includes('Nutribabay-19.html'))
        $('.Equis5').fadeIn()
    if (window.location.pathname.includes('Nutribabay-20.html'))
        $('.Equis6').fadeIn()
    if (window.location.pathname.includes('Nutribabay-21.html'))
        $('.Equis7').fadeIn()
    if (window.location.pathname.includes('Nutribabay-22.html'))
        $('.Equis8').fadeIn()
    if (window.location.pathname.includes('Nutribabay-23.html'))
        $('.Equis9').fadeIn()
    if (window.location.pathname.includes('Nutribabay-24.html'))
        $('.Equis10').fadeIn()
}

const handleSetControls = () => {
    if ($('.correct')) $('.correct').on('click', handleValidateCorrect)
    if ($('.incorrect')) $('.incorrect').on('click', handleValidateIncorrect)
    if ($('.incorrect1')) $('.incorrect1').on('click', handleValidateIncorrect)
    if ($('.incorrect2')) $('.incorrect2').on('click', handleValidateIncorrect)
}

const handleSendToOtherQuestion = () => {
    if ($('.questnext')) 
        $('.questnext').on('click', () => {
            const responses = JSON.parse(localStorage.getItem('responses'))
            if (window.location.pathname.includes('Nutribabay-15.html'))
                window.location.href = "./Nutribabay-16.html"
            if (window.location.pathname.includes('Nutribabay-16.html'))
                window.location.href = "./Nutribabay-17.html"
            if (window.location.pathname.includes('Nutribabay-17.html'))
                window.location.href = "./Nutribabay-18.html"
            if (window.location.pathname.includes('Nutribabay-18.html'))
                window.location.href = "./Nutribabay-19.html"
            if (window.location.pathname.includes('Nutribabay-19.html'))
                window.location.href = "./Nutribabay-20.html"
            if (window.location.pathname.includes('Nutribabay-20.html'))
                window.location.href = "./Nutribabay-21.html"
            if (window.location.pathname.includes('Nutribabay-21.html'))
                window.location.href = "./Nutribabay-22.html"
            if (window.location.pathname.includes('Nutribabay-22.html'))
                window.location.href = "./Nutribabay-23.html"
            if (window.location.pathname.includes('Nutribabay-23.html'))
                window.location.href = "./Nutribabay-24.html"
            if (window.location.pathname.includes('Nutribabay-24.html')) {
                if (responses.length > 10) window.location.href = "./Nutribabay-14.html"
                if (responses.filter((item) => item === 'Check').length < 8) window.location.href = "./Nutribabay-25.html" 
                if (responses.filter((item) => item === 'Check').length >= 8) window.location.href = "./Nutribabay-26.html" 
            }
        })
}

const handleValidateResponses = () => {
    const responses = JSON.parse(localStorage.getItem('responses'))
    for(let i = 0; i < responses.length; i++) {
        if (responses[i] === 'X') $(`.Equis${i+1}`).fadeIn()
        if (responses[i] === 'Check') $(`.objecto${i+1}`).fadeIn()
    }
}

$(document).ready(() => {
    handleStartQuiz()
    handleValidateResponses()
    handleSetControls()
    handleSendToOtherQuestion()
});