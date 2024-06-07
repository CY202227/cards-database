import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバーンex",
		'zh-tw': "音波龍ex",
		id: "Noivern ex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おんみつひこう",
			'zh-tw': "隱密飛行",
			id: "Terbang Gaib"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			ja: "ドミネートエコー",
			'zh-tw': "制控迴響",
			id: "Dominate Echo"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、相手は手札から特殊エネルギーを出してつけられず、スタジアムも出せない。",
			'zh-tw': "在下個對手的回合，對手無法從手牌附上特殊能量卡，也無法使出競技場卡。",
			id: "Pada giliran lawan berikutnya, lawan tidak dapat mengenakan Energi Spesial maupun memasukkan Stadium dari Kartu Pegangan."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card