import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哥達鴨"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "游泳專家。能靈活地擺動長長的尾巴，連續游上整整２天。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "幻象光線"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card