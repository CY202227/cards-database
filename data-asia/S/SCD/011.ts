import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "畢力吉翁"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "救出"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡，在給對手看過後加入手牌。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光束"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card