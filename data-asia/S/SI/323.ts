import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆焰龜獸"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "陷阱甲殼"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置8個傷害指示物。"
		},

		damage: 30,
		cost: ["Fire", "Fighting"]
	}, {
		name: {
			'zh-tw': "高溫重壓"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card