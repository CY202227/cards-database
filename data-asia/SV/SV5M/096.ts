import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "賽吉",
		th: "เซจ"
	},

	illustrator: "Tetsu Kayama",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張自己的1隻場上寶可夢進化而來的卡（擁有特性的寶可夢除外），放置於那隻寶可夢身上完成進化。並且重洗牌庫。（對對戰準備時使出的寶可夢或這個回合剛使出的寶可夢也可使用。）",
		th: "เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอน 1 ตัวบนกระดานฝ่ายเรา (ยกเว้นโปเกมอนที่มีความสามารถ) 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนั้นเพื่อวิวัฒนาการ แล้วสับสำรับการ์ด (โปเกมอนที่วางเพื่อเตรียมแบตเทิล และโปเกมอนที่เพิ่งออกมาในเทิร์นนี้ก็ใช้ได้)"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card