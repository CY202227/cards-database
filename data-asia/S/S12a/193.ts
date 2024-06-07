import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "自爆磁怪",
		ja: "ジバコイル"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "據說牠頭上的天線會接收來自宇宙的電波，讓牠被未知的對象控制。",
		ja: "頭の アンテナで 宇宙からの 電波を 受信して 何者かに コントロールされていると いわれる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "終極磁鐵",
			ja: "ギガマグネット"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方6張卡，從其中選擇任意數量的【鋼】能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			ja: "自分の番に1回使える。自分の山札を上から6枚見て、その中からエネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "强力光束",
			ja: "パワービーム"
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [462]
}

export default card