import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキー",
		'zh-tw': "吉利蛋"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "HYOGONOSUKE",
	dexId: [113],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "持っている タマゴを 割らないように 気をつけて 歩く。 でも 逃げ足は とても 速い。",
		'zh-tw': "為了避免蛋被打破， 走起路來小心謹慎。 然而逃跑速度卻是快之無比。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ラッキーアタッチ",
			'zh-tw': "幸運貼附"
		},

		effect: {
			ja: "自分の手札から基本エネルギーを1枚選び、自分のポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張基本能量卡，附於自己的寶可夢身上。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "そこぢから",
			'zh-tw': "潛力"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card