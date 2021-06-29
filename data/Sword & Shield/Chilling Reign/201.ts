import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken VMAX",
		fr: "Braségali VMAX",
		es: "Blaziken VMAX",
		it: "Blaziken VMAX",
		pt: "Blaziken VMAX",
		de: "Lohgock VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Clutch",
			fr: "Serre",
			es: "Embrague",
			it: "Grinfie",
			pt: "Agarramento",
			de: "Greifer"
		},

		damage: 60,

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Max Blaze",
			fr: "Brasiomax",
			es: "Maxillamas",
			it: "Dynavampata",
			pt: "Incêndio Max",
			de: "Dyna-Großbrand"
		},

		damage: 130,

		effect: {
			en: "Choose up to 2 of your Benched Rapid Strike Pokémon and attach an Energy card from your discard pile to each of them.",
			fr: "Choisissez jusqu’à 2 de vos Pokémon Mille Poings de Banc, puis attachez une carte Énergie de votre pile de défausse à chacun d’eux.",
			es: "Elige hasta 2 de tus Pokémon Golpe Fluido en Banca y une 1 carta de Energía de tu pila de descartes a cada uno de ellos.",
			it: "Scegli fino a due dei tuoi Pokémon Colpo Rapido in panchina e assegna a ognuno di essi una carta Energia dalla tua pila degli scarti.",
			pt: "Escolha até 2 dos seus Pokémon Golpe Fluido no Banco e ligue 1 carta de Energia da sua pilha de descarte a cada um deles.",
			de: "Wähle bis zu 2 Fließender-Angriff-Pokémon auf deiner Bank und lege 1 Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card