import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙重渦輪能量",
		ja: "ダブルターボエネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 附有這張卡的寶可夢使用的招式，對對手的寶可夢造成的傷害「-20」點。",
		ja: "このカードは、ポケモンについているかぎり、エネルギー2個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。"
	},

	energyType: "Special",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card