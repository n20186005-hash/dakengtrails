export const routeGuides = [
  { slug: 'first-time', title: '第一次去大坑', kicker: '不迷路的起手式', description: '優先從9號或9-1號開始，先熟悉入口、停車與大坑的步道路面。', trails: ['9', '9-1'], minutes: 120, audience: ['第一次造訪', '外地旅客'] },
  { slug: 'family', title: '親子半日路線', kicker: '保留彈性，玩得剛好', description: '從7、8、9號選一條，依孩子體力決定折返點，再安排周邊用餐。', trails: ['7', '8', '9'], minutes: 180, audience: ['親子', '家庭'] },
  { slug: 'seniors', title: '長輩輕鬆健走', kicker: '短距離、多休息', description: '以9-1號或8號為主，避開圓木陡坡，回程時間先確認。', trails: ['9-1', '8'], minutes: 100, audience: ['長輩同行'] },
  { slug: 'beginner', title: '新手入門選擇', kicker: '先走穩，再走遠', description: '從7、8、9、10號中選擇，先建立對階梯與山徑的感覺。', trails: ['7', '8', '9', '10'], minutes: 120, audience: ['登山新手'] },
  { slug: 'log-stairs', title: '圓木棧道體驗', kicker: '大坑最經典的路感', description: '2、3、4號圓木路段挑戰明顯，建議有經驗者結伴並避開雨後。', trails: ['2', '3', '4'], minutes: 210, audience: ['有經驗者'] },
  { slug: 'challenge', title: '高地挑戰路線', kicker: '爬升、稜線、頭嵙山', description: '以4號及高地串連為主，先確認通行情形並保留充足回程體力。', trails: ['4', '5', '2'], minutes: 300, audience: ['健腳者'] },
  { slug: 'two-hours', title: '兩小時快速健行', kicker: '週末臨時也能走', description: '選9、10或6號單走，設定明確折返時間，回到入口補給。', trails: ['9', '10', '6'], minutes: 120, audience: ['時間有限', '本地健行者'] },
  { slug: 'half-day', title: '大坑半日遊', kicker: '步道加周邊用餐', description: '上午健行，中午回到大坑商圈用餐；路線難度依同行者選擇。', trails: ['9', '7', '4'], minutes: 240, audience: ['朋友同行', '親子'] },
  { slug: 'one-day', title: '大坑與新社一日遊', kicker: '山林、午餐、近郊景點', description: '上午走入門步道，午後順遊新社；山區移動請預留車程。', trails: ['9', '8'], minutes: 480, audience: ['外地旅客', '自駕'] },
];

export const guides = [
  { slug: 'what-to-bring', title: '大坑步道行前準備', description: '鞋子、飲水、防曬、防蚊、離線資訊與折返時間，一次整理出發前真正需要的項目。' },
  { slug: 'rainy-day', title: '下雨後適合走大坑嗎？', description: '雨後圓木、岩面與落葉會提高滑倒風險；如何判斷是否改期，以及替代安排。' },
  { slug: 'summer-hiking', title: '夏季走大坑的避熱策略', description: '整理夏季走大坑步道的出發時間、補充水分、熱不適辨識與遮蔭路線選擇，避開正午高溫。' },
  { slug: 'log-stairs-safety', title: '圓木棧道安全指南', description: '整理大坑圓木棧道的圓木間距、落腳位置、下坡重心、鞋底抓地與雨後濕滑風險。' },
  { slug: 'hiking-with-children', title: '帶孩子走大坑怎麼選？', description: '用年齡、平時活動量、階梯能力與可折返性，選出適合的親子路線。' },
];

export const nearby = [
  { slug: 'food', title: '大坑健行後吃什麼', description: '整理大坑健行後從步道口小吃、商圈餐廳到在地農產的用餐方向，依停車與回程動線安排補給。' },
  { slug: 'hot-springs', title: '大坑溫泉順遊', description: '整理大坑健行後的溫泉順遊安排，泡湯前先補水、休息，並在出發當日確認營業與預約資訊。' },
  { slug: 'attractions', title: '大坑與新社周邊景點', description: '整理大坑地震公園、生態園區與新社近郊景點，依同行者與交通安排半日或一日順遊行程。' },
];
