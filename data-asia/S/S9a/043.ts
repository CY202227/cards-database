import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝摔角鷹人",
		ja: "かがやくルチャブル"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後 使用華麗的絕招分出勝負。",
		ja: "身軽さを 活かした 戦法で 相手の 体力を 奪ってから 華麗な 大技を 決める。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "大型競賽",
			ja: "ビッグマッチ"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，自己的寶可夢使用的招式，對對手的戰鬥場的「寶可夢【VMAX】」造成的傷害「+30」點。",
			ja: "このポケモンがベンチにいるかぎり、自分のポケモンが使うワザの、相手のバトル場の「ポケモンVMAX」へのダメージは「+30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉踢",
			ja: "かいてんげり"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [701]
}

export default card