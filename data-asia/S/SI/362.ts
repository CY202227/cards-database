import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "阻撓"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "一同滾動"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card