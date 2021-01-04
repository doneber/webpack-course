function render(data) {
	const pokeName = data.name
	document.body.innerHTML = `<p>${pokeName}</p>`
	const pokemon = document.createElement('img')
	pokemon.setAttribute('src', data.sprites.front_default)
	document.body.append(pokemon)
}

export default render