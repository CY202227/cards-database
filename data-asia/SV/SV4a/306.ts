import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プリン",
		'zh-tw': "胖丁",
		id: "Jigglypuff"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	dexId: [39],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
		'zh-tw': "當牠圓圓的大眼睛轉動時，就會唱起奇妙的歌曲， 讓人舒服地昏昏欲睡。",
		id: "Jigglypuff menyanyikan lagu ajaib yang menenangkan dan membuat siapa pun jadi mengantuk ketika mata bulatnya bergerak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みちびく",
			'zh-tw': "引路",
			id: "Menuntun"
		},

		effect: {
			ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			id: "Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふみふみ",
			'zh-tw': "踏踏",
			id: "Injak-injak"
		},

		damage: "20×",

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card