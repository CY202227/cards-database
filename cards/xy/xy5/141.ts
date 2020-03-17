import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-141",
	localId: 141,

	// Card informations
	name: {
		en: "Teammates",
		fr: "Senior et Junior",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/141/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/141/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/141/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",


	effect: {
		fr: "Vous pouvez jouer cette carte seulement si l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nCherchez jusqu'à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
	},

	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
