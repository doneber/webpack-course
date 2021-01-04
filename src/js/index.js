import '../css/index.css'

import page from './page'

page()

if (module.hot) {
	console.log('Estamos en caliente')
	module.hot.accept('./page.js', function () {
		console.log('Hemos recargado en caliente!!')
		page()
	})
}