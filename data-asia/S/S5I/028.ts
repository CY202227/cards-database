import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猴怪",
		th: "แมนคี"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "只要有１隻發怒，周圍的猴怪也會跟著開始發起怒來，所以猴怪群從沒有一刻是安靜的。",
		th: "ถ้าโกรธขึ้นมาตัวนึงแล้ว ตัวอื่นรอบ ๆ จะโกรธตามไปด้วย ฝูงแมนคีจึงไม่เคยมีความสงบเงียบ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "真氣突刺",
			th: "ฮึดสู้"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย การโจมตีนี้ล้มเหลว"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card