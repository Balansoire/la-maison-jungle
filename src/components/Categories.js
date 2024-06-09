import PropTypes from 'prop-types';
import Select from 'react-select'
import '../styles/Categories.css'

function Categories({ setActiveCategories, categories, activeCategories }) {
	const options = categories.map((category) => ({value: category, label: category.charAt(0).toUpperCase()+category.slice(1)}))

	function changeActives(opts) {
		let cats = opts.map((opt) => opt.value)
		setActiveCategories(cats)
	}

	return (
		<div className='lmj-categories'>
		<Select isMulti options={options} defaultValue={null} onChange={(opts) => changeActives(opts)}/>
		</div>
	)
}

Categories.propTypes = {
	setActiveCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
	activeCategories: PropTypes.array.isRequired
};

export default Categories
