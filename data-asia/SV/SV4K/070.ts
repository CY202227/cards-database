import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ミガルーサ",
		th: "มิกาลูซา"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	dexId: [976],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "無駄な 肉を 捨て去ると 心が 研ぎ澄まされ サイコパワーが 上がる。 贅肉は 淡白だが 美味しい。",
		th: "จิตใจจะถูกขัดเกลาและพลังจิตจะสูงขึ้นเมื่อละทิ้งกายเนื้อที่ไม่จำเป็น ไขมันส่วนเกินสีขาวอ่อนนั้นมีรสชาติดี"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みをきるおもい",
			th: "ยอมแลกด้วยเลือดเนื้อ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、このポケモンについているエネルギーを2枚まで選び、ベンチポケモン1匹につけ替える。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว เลือกการ์ดพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ได้สูงสุด 2 ใบ ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ",
			th: "ไฮโดรปั๊มพ์"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x20"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card