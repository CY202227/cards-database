import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒骷蛙"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "制服了獵物之後，便會呱呱地發出勝利的歡呼。與蟾蜍王是相近的物種。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡棍猛毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為4個。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "增量拳"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card