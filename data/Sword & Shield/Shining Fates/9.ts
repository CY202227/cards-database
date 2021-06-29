import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail V",
		en: "Dhelmise V",
		es: "Dhelmise V",
		it: "Dhelmise V",
		pt: "Dhelmise V",
		de: "Moruda V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Colère Ancrée",
			en: "Anchor Anger",
			es: "Anclaje Ira",
			it: "Ira d’Ancora",
			pt: "Âncora Furiosa",
			de: "Ankerwut"
		},

		effect: {
			fr: "Si l’un de vos Pokémon Grass a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
			es: "Si alguno de tus Pokémon Grass quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon Grass è stato messo KO dai danni inflitti da un attacco dell’avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
			pt: "Se algum dos seus Pokémon Grass tiver sido Nocauteado pelo dano de um ataque do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Grass-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Grass"]
	}, {
		name: {
			fr: "Giga Marteau",
			en: "Giga Hammer",
			es: "Gigamartillo",
			it: "Gigamartello",
			pt: "Gigamartelo",
			de: "Gigahammer"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
			en: "During your next turn, this Pokémon can’t use Giga Hammer.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Gigamartillo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Gigamartelo.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Gigahammer nicht einsetzen."
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card