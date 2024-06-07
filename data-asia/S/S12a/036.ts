import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咩利羊",
		th: "เมรีป",
		ja: "メリープ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會累積絨毛摩擦時所產生的電力。如果因為牠可愛而直接用手去摸， 就會被電得又麻又痛。",
		th: "ขนจะเสียดสีกันจนเกิดไฟฟ้าสะสม พอยื่นมือไปแตะเพราะเห็นว่าน่ารักก็จะถูกช็อตจนรู้สึกเจ็บชา",
		ja: "綿毛が こすれ 電気が たまる。 かわいいからと 素手で 触ると バチッと 痺れて 痛いのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ja: "うしろげり"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			ja: "エレキボール"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [179]
}

export default card