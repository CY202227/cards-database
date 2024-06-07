import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 閃電鳥V",
		th: "กาลาร์ ธันเดอร์V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鬥爭本能",
			th: "สัญชาตญาณการต่อสู้"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上的「寶可夢【V】」的數量。",
			th: "พลังงาน [ไร้สี] ที่จำเป็นสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลงตามจำนวน [โปเกมอน【V】] บนกระดานฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷鳴蹴擊",
			th: "ลูกเตะฟ้าคำราม"
		},

		effect: {
			'zh-tw': "在造成傷害前，選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			th: "ก่อนจะทำแดเมจ เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card