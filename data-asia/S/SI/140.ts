import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "一旦感知到危險， 全身的體毛就會發光， 趁對手眼睛被閃到時逃之夭夭。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card