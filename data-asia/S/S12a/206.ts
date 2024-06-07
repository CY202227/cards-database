import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "草苗龜",
		ja: "ナエトル"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "用全身進行光合作用，製造氧氣。當口渴的時候，頭上的葉子就會枯萎。",
		ja: "全身で 光合成を して 酸素を 作る。 のどが 渇くと 頭の 葉っぱが しおれてしまう。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			ja: "かみつく"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊",
			ja: "とびだしヘッド"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [387]
}

export default card