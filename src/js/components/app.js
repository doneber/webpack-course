import React, { useState } from 'react'
import data from '../data.json'
import Loader from './loader'
import myIMage from '../../images/3mbyVbo.jpg'

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