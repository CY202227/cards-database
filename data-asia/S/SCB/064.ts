import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謎擬ＱV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "虛構娃娃"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。在下個對手的回合結束前，這隻「謎擬Ｑ【V】」不會受到對手的寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "羨慕之瞳"
		},

		effect: {
			'zh-tw': "將與對手已經獲得的獎賞卡的張數×3個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card