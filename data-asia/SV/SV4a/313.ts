import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホシガリス",
		'zh-tw': "貪心栗鼠",
		id: "Skwovet"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	dexId: [819],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "どんなに お腹いっぱい 食べても また 腹ペコになるのが 不安で 頬と 尻尾に 木の実を 溜める。",
		'zh-tw': "不管吃得再怎麼飽，都還是因為會擔心肚子餓， 而往頰囊和尾巴裡儲藏樹果。",
		id: "Meskipun sudah makan hingga kenyang, Skwovet menyimpan stok buah beri di dalam ekor dan pipinya karena khawatir jika dirinya menjadi lapar lagi."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すあなにかくす",
			'zh-tw': "藏身巢穴",
			id: "Sembunyikan di Sarang"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札をすべてウラにして切り、山札の下にもどす。その後、山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，從牌庫抽出1張卡。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Kocok semua Kartu Pegangan sendiri dengan sisi depan menghadap ke bawah, lalu kembalikan ke bawah Deck. Setelah itu, ambil 1 kartu dari atas Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			id: "Menggigit"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card