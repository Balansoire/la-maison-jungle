import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializePlantList } from '../features/plantSlice'
import Banner from './Banner'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import PlantAdmin from './PlantAdmin'
import About from './About'
import Reset from './Reset'
import Footer from './Footer'
import '../styles/Layout.css'
import { useEffect } from 'react'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializePlantList())
	}, [dispatch])
	return (
		<BrowserRouter>
			<div>
				<Banner>
					
					<h1 className='lmj-title'><img src={logo} alt='La maison jungle' className='lmj-logo' /> La maison jungle</h1>
					<nav className='lmj-nav'>
						<ul>
							<li><NavLink className='navLink' to='/' >Magasin</NavLink></li>
							<li><NavLink className='navLink' to='/plant-admin'>Gestion des plantes</NavLink></li>
							<li><NavLink className='navLink' to='/about' >À propos</NavLink></li>
						</ul>
					</nav>
				</Banner>
				<Routes>
					<Route exact path='/' Component={ShoppingList}/>
					<Route path='/plant-admin' Component={PlantAdmin}/>
					<Route path='/about' Component={About}/>
					<Route path='/reset' Component={Reset}/>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
