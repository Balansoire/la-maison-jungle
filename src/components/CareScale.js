import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	let scaleType = ''
	switch (careType) {
		case 'light':
			scaleType = <img src={Sun} alt='sun-icon' />
			break
		case 'water':
			scaleType = <img src={Water} alt='water-icon' />
			break
		default:
			scaleType = ''
	}

	return (
		<div
			onClick={() => alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} 
					${careType === 'light' ? 'de lumière' : "d'arrosage"}`
			)}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
