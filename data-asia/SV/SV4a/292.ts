import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コマタナ",
		'zh-tw': "駒刀小兵",
		id: "Pawniard"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	dexId: [624],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "強敵にも 恐れず 挑む。 いざとなると 相手に しがみつき 体中の 刃で 貫く。",
		'zh-tw': "遇上強敵也是不畏挑戰。在緊要關頭時會緊緊抓住對手， 以身上的刀刃將其刺穿。",
		id: "Pawniard tidak takut menantang musuh kuat sekalipun. Ketika waktunya tiba, Pokémon ini mencengkeram dan menusuk musuh tersebut dengan pedang di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			id: "Menggaruk"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺",
			id: "Melubangi"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card