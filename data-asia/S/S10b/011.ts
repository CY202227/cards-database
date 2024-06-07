import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝噴火龍"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。有時會引發森林火災。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激動之心"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "烈焰爆"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「烈焰爆」。"
		},

		damage: 250,
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card