const menu = [
	{
		label: 'Inicio',
		children: [
			{
				label: 'Introducción y objetivos del curso',
				link: '/Nutribabay-03.html',
			},
			{
				label: 'Video introductorio',
				link: '/Nutribabay-04.html',
			},
		],
	},
	{
		label: 'Módulo 1. Fundamentos de la nutrición infantil',
		children: [
			{
				label: 'Nutrición en los primeros años: la base de una vida saludable',
				link: '/Nutribabay-05.html',
			},
			{
				label: 'Lactancia materna y fórmulas infantiles: Pilares de la nutrición en la primera infancia',
				link: '/Nutribabay-07.html',
			},
		],
	},
]

let active = null

const handleSetChildren = (items, index) => {
	let htmlitems = ''

	for (let i = 0; i < items.length; i++) {
		if (window.location.pathname.includes(items[i].link)) active = index
		htmlitems += `<li class="item-children ${
			window.location.pathname.includes(items[i].link) ? 'active' : ''
		}"><a href=".${items[i].link}">${items[i].label}</a></li>`
	}
	return `
        <div class="items-container">
            <ul class="lista-contenido">
                ${htmlitems}
            </ul>
        </div>
    `
}

const handleSetItem = (element, index) => {
	return `
        <h3 class="menu-label" id="menu-${index}">${element.label}</h3>
        <div class="content-${index} content-data">
            ${handleSetChildren(element.children, index)}
        </div>
    `
}

const openAccordion = ($el) => {
	const el = $el.get(0)
	$el.css({ display: 'block', height: '0px' })
	el.offsetHeight
	const end = el.scrollHeight + 'px'
	$el.css('height', end)
	$el.one('transitionend', (e) => {
		if (e.originalEvent.propertyName === 'height') {
			$el.css('height', 'auto')
		}
	})
}

const closeAccordion = ($el) => {
	const el = $el.get(0)

	$el.css('height', el.scrollHeight + 'px')
	el.offsetHeight
	$el.css('height', '0px')
	$el.one('transitionend', (e) => {
		if (e.originalEvent.propertyName === 'height') {
			$el.css('display', 'none')
		}
	})
}

const closeSiblings = (index) => {
	$('.content-data').each(function (i) {
		if (i !== index) {
			const $c = $(this)
			if ($c.css('display') !== 'none') closeAccordion($c)
		}
	})
}

const handleSetEventElement = (selector, index) => {
	$(selector).on('click', () => {
		const $content = $(`.content-${index}`)

		if ($content.css('display') === 'none') {
			closeSiblings(index)

			openAccordion($content)
		} else {
			closeAccordion($content)
		}
	})
}

$(document).ready(() => {
	let htmlData = ''
	for (let i = 0; i < menu.length; i++) {
		htmlData += handleSetItem(menu[i], i)
	}

	$('.content').html(htmlData)

	for (let i = 0; i < menu.length; i++) {
		handleSetEventElement(`#menu-${i}`, i)
	}

    $('.close-button').on('click', () => {
        $('.menu').css('display', 'none')
    })

    $('.hamburguesa').on('click', () => {
        $('.menu').css('display', 'block')
    });
})
