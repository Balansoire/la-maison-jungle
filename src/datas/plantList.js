import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'
import aloe from '../assets/aloe.jpg'
import lavender from '../assets/lavender.jpg'
import rosemary from '../assets/rosemary.jpg'
import bonsai from '../assets/bonsai.jpg'
import fern from '../assets/fern.jpg'
import snakePlant from '../assets/snakePlant.jpg'
import jadePlant from '../assets/jadePlant.jpg'
import orchid from '../assets/orchid.jpg'
import bromeliad from '../assets/bromeliad.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
		info: 'Le Monstera est une plante tropicale spectaculaire, connue pour ses grandes feuilles découpées. Facile d\'entretien, elle apporte une touche exotique à n\'importe quelle pièce. C\'est la plante parfaite pour créer une atmosphère de jungle urbaine.'
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
		info: 'Le Ficus Lyrata, ou figuier lyre, est apprécié pour ses grandes feuilles brillantes en forme de lyre. Cette plante majestueuse est idéale pour ajouter une note d\'élégance et de verdure dans votre maison.'
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		info: 'Le Pothos Argenté est une plante grimpante robuste, parfaite pour les débutants. Ses feuilles marbrées d\'argent ajoutent de la luminosité à votre espace intérieur tout en demandant peu d\'entretien.'
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
		info: 'La Calathea est une plante aux feuilles magnifiquement décorées. Elle est parfaite pour apporter une touche artistique à votre intérieur. Ses feuilles se replient la nuit, ajoutant une dynamique unique à votre espace.'
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
		info: 'L\'Olivier est un symbole de paix et de longévité. Facile à entretenir, il peut vivre très longtemps et s\'adapte bien aux climats ensoleillés. C\'est l\'arbre parfait pour votre jardin ou balcon.'
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		info: 'Le Cactus est une plante grasse très résistante, idéale pour les personnes ayant peu de temps pour l\'entretien. Avec ses formes variées et son allure exotique, il apporte une touche de désert à votre décoration.'
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		info: 'Le Basilic est une plante aromatique essentielle pour toute cuisine. Facile à cultiver, il ajoute une saveur fraîche et parfumée à vos plats. Parfait pour les amateurs de cuisine méditerranéenne.'
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		info: 'Les Succulentes sont des plantes grasses adorables et faciles à entretenir. Elles viennent dans une variété de formes et de couleurs, parfaites pour ajouter une touche moderne et tendance à votre maison.'
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		info: 'La Menthe est une plante aromatique polyvalente, idéale pour les thés, les cocktails et les plats culinaires. Elle pousse rapidement et ajoute une touche de fraîcheur à vos recettes.'
	},
	{
		name: 'aloe vera',
		category: 'plante médicinale',
		id: '10xy',
		light: 3,
		water: 1,
		cover: aloe,
		price: 12,
		info: 'L\'aloe vera est une plante succulente aux nombreuses vertus médicinales. Elle est facile à entretenir et idéale pour les débutants.'
	},
	{
		name: 'lavande',
		category: 'plante aromatique',
		id: '11yz',
		light: 3,
		water: 1,
		cover: lavender,
		price: 15,
		info: 'La lavande est connue pour son parfum apaisant et ses propriétés aromatiques. Parfaite pour les jardins et les pots d\'intérieur.'
	},
	{
		name: 'romarin',
		category: 'plante aromatique',
		id: '12ab',
		light: 3,
		water: 1,
		cover: rosemary,
		price: 7,
		info: 'Le romarin est une plante aromatique polyvalente qui peut être utilisée en cuisine. Elle est également décorative et facile à cultiver.'
	},
	{
		name: 'bonsai',
		category: 'art botanique',
		id: '13cd',
		light: 2,
		water: 2,
		cover: bonsai,
		price: 40,
		info: 'Le bonsaï est un art vivant qui demande patience et soin. Parfait pour les amateurs de plantes qui aiment les défis.'
	},
	{
		name: 'fougère',
		category: 'plante d\'ombre',
		id: '14ef',
		light: 1,
		water: 2,
		cover: fern,
		price: 10,
		info: 'La fougère est une plante d\'intérieur idéale pour les zones ombragées. Elle apporte une touche de verdure luxuriante à tout espace.'
	},
	{
		name: 'plante serpent',
		category: 'plante d\'intérieur',
		id: '15gh',
		light: 2,
		water: 1,
		cover: snakePlant,
		price: 18,
		info: 'La plante serpent, aussi connue sous le nom de Sansevieria, est très résistante et parfaite pour les débutants.'
	},
	{
		name: 'plante de jade',
		category: 'plante succulente',
		id: '16ij',
		light: 3,
		water: 1,
		cover: jadePlant,
		price: 20,
		info: 'La plante de jade est une succulente facile à entretenir qui est aussi considérée comme un symbole de chance et de prospérité.'
	},
	{
		name: 'orchidée',
		category: 'plante fleurie',
		id: '17kl',
		light: 2,
		water: 2,
		cover: orchid,
		price: 22,
		info: 'L\'orchidée est une plante fleurie élégante qui nécessite un peu de soin mais offre des fleurs magnifiques en retour.'
	},
	{
		name: 'broméliacée',
		category: 'plante tropicale',
		id: '18mn',
		light: 2,
		water: 2,
		cover: bromeliad,
		price: 25,
		info: 'La broméliacée est une plante tropicale aux couleurs vives, parfaite pour ajouter une touche exotique à votre intérieur.'
	}
]
