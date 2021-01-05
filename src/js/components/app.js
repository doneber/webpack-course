import React, { useState } from 'react'
import data from '../data.json'
import Loader from './loader'
import myIMage from '../../images/3mbyVbo.jpg'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'
import '../../less/less.less'

function App() {
	const [loaderList, setLoaderList] = useState([])
	function handleClick() {
		setLoaderList(data.loaders)
	}
	return (
		<div>
			<p>
				<img src={myIMage} alt="hackers" width="300" />
			</p>
			<p className="sass">
				i am $SASS 
			</p>
			<p className="stylus">
				i am STYLUS 
			</p>
			<p className="less">
				i am @LESS.. oh yeah! 
			</p>
			<p className="postcss">
				i am POSTCSS :-) 
			</p>
			<ul>
				{
					loaderList.map(item => <Loader {...item} key={item.id} />)
				}
			</ul>
			<button onClick={handleClick}> Mostrar lo aprendido</button>
		</div>
	)
}

export default App