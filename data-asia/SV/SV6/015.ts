import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン みどりのめん",
		'zh-tw': "厄鬼椪 碧草面具"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Sanosuke Sakuma",
	dexId: [1017],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "いたずら好きで 好奇心旺盛。 仮面に こめられた タイプの エネルギーを 引き出して 戦う。",
		'zh-tw': "喜歡惡作劇，好奇心旺盛。 能激發出面具蘊藏的 屬性的能量來戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "やまあるき",
			'zh-tw': "步山"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "おにがえし",
			'zh-tw': "鬼返"
		},

		damage: "20+",

		effect: {
			ja: "相手のベンチポケモンの数×20ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card