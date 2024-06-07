import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花兒"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "盛開的花瓣中散發出的微微香氣會吸引蟲寶可夢聚集而來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "春爛漫"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【草】能量卡，附於自己的寶可夢（「擁有規則的寶可夢」除外）身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card