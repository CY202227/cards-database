import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドドゲザン",
		'zh-tw': "仆斬將軍",
		id: "Kingambit"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [983],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "ドドゲザンに 進化できるのは 大軍勢の 頂点に 立った １匹の キリキザンだけなのだ。",
		'zh-tw': "在勢力浩大的軍團中，唯有站上頂點的那１隻劈斬司令， 才能進化成仆斬將軍。",
		id: "Hanya Bisharp yang berada pada posisi teratas di dalam pasukannya yang dapat berevolusi menjadi Kingambit."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とうそつりょく",
			'zh-tw': "統率力",
			id: "Kepemimpinan"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のたねポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			'zh-tw': "只要這隻寶可夢在場上，自己的【基礎】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon Basic sendiri kepada Pokémon Bertarung lawan bertambah sejumlah 30."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ぶったぎり",
			'zh-tw': "猛斬",
			id: "Sabetan Membelah"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card