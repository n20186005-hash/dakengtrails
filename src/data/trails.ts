export type Difficulty = '親子' | '入門' | '中等' | '進階' | '挑戰';

type TrailBase = {
  id: string;
  name: string;
  short: string;
  verdict: string;
  difficulty: Difficulty;
  distance: number;
  duration: [number, number];
  elevation: [number, number];
  routeType: string;
  surfaces: string[];
  suitable: string[];
  features: string[];
  shade: '少' | '中等' | '多';
  parking: number;
  transit: number;
  family: number;
  image: string;
  imageAlt: string;
  reasons: string[];
  caution: string;
  access: string;
  parkingNote: string;
  transportNote: string;
  routeSteps: string[];
  related: string[];
};

const maps = (id: string) => {
  const query = encodeURIComponent(`大坑${id}號登山步道`);
  return {
    place: `https://www.google.com/maps/search/?api=1&query=${query}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=driving`,
  };
};

export type Trail = TrailBase & { maps: ReturnType<typeof maps> };

const rawTrails: TrailBase[] = [
  {
    id: '1', name: '大坑1號步道', short: '體能訓練場與經典山林路線',
    verdict: '適合想體驗大坑山徑與體能設施、已有基本運動習慣的健行者。',
    difficulty: '進階', distance: 1.6, duration: [90, 150], elevation: [420, 700], routeType: '往返／可銜接',
    surfaces: ['土徑', '圓木', '階梯'], suitable: ['朋友同行', '有經驗者'], features: ['山林', '體訓場', '圓木路段'],
    shade: '多', parking: 2, transit: 2, family: 2, image: '/images/trails/dakeng-1.jpg',
    imageAlt: '大坑登山步道第六號入口木製指示牌與林道',
    reasons: ['可感受大坑較原始的山徑環境', '體能訓練設施帶來不同體驗', '可與高地稜線步道銜接'],
    caution: '連續爬升與圓木路面會消耗腿力；雨後濕滑，不建議穿平底休閒鞋。',
    access: '導航請指定「大坑1號登山步道」，不要只輸入大坑風景區。山區道路較窄，會車時請減速。',
    parkingNote: '登山口周邊停車空間有限，假日建議提早抵達並依現場標線停放。',
    transportNote: '大眾運輸班距與步行距離較不利，較適合開車或機車前往。',
    routeSteps: ['登山口', '體能訓練場', '林間圓木路段', '稜線銜接點', '原路折返'],
    related: ['2', '5', '9'],
  },
  {
    id: '2', name: '大坑2號步道', short: '陡峭圓木與稜線感最鮮明',
    verdict: '適合想挑戰經典圓木坡、腿力與平衡感良好的登山者。',
    difficulty: '挑戰', distance: 1.2, duration: [90, 150], elevation: [470, 745], routeType: '往返／可銜接',
    surfaces: ['圓木', '陡坡', '土徑'], suitable: ['健腳者', '登山愛好者'], features: ['圓木棧道', '稜線', '山景'],
    shade: '中等', parking: 2, transit: 2, family: 1, image: '/images/trails/dakeng-4.jpg',
    imageAlt: '健行者行走於大坑山林木棧階梯',
    reasons: ['圓木路段辨識度高', '短距離內有明顯爬升', '可銜接頭嵙山方向'],
    caution: '圓木間距與陡度對膝蓋、腳踝要求高，雨後與下坡尤其需要放慢。',
    access: '山區支線多，請把具體登山口設為導航終點，看到入口指示後再依現場標誌前進。',
    parkingNote: '入口附近車位少，禁止占用轉彎處與農路；必要時改走其他步道。',
    transportNote: '公車下車後仍需步行較長距離，不建議把它當作無車旅客的首選。',
    routeSteps: ['登山口', '陡升圓木段', '休息平台', '稜線銜接點', '原路折返'],
    related: ['1', '3', '4'],
  },
  {
    id: '3', name: '大坑3號步道', short: '短而有感的圓木挑戰',
    verdict: '距離不長，但爬升集中，適合已有登山經驗、想快速運動的人。',
    difficulty: '進階', distance: 1.3, duration: [80, 140], elevation: [415, 795], routeType: '往返／可組合',
    surfaces: ['圓木', '階梯', '土徑'], suitable: ['朋友同行', '有經驗者'], features: ['圓木棧道', '陡升', '山林'],
    shade: '中等', parking: 2, transit: 2, family: 1, image: '/images/trails/dakeng-5.jpg',
    imageAlt: '大坑山林中的木棧階梯、岩石與繩索護欄',
    reasons: ['圓木與土徑交錯', '爬升感明確', '可和3-1號安排組合路線'],
    caution: '距離短不代表輕鬆；上坡容易爆發用力，下坡則要注意膝蓋與滑倒風險。',
    access: '導航至3號步道登山口後，依指標確認路線編號，避免誤入產業道路。',
    parkingNote: '假日入口周邊容易停滿，建議預留改走3-1號或其他步道的彈性。',
    transportNote: '大眾運輸不如9號一帶方便，安排回程時需先確認班次。',
    routeSteps: ['登山口', '前段山徑', '主要圓木陡坡', '高點銜接', '原路或轉3-1號'],
    related: ['3-1', '2', '4'],
  },
  {
    id: '3-1', name: '大坑3-1號步道', short: '連接3號與山區路網的短線',
    verdict: '適合想縮短距離或搭配3號步道的人，不宜把它當成毫無坡度的散步路線。',
    difficulty: '中等', distance: 0.7, duration: [45, 80], elevation: [470, 720], routeType: '往返／聯絡線',
    surfaces: ['階梯', '山徑', '木構路段'], suitable: ['一般健行者', '朋友同行'], features: ['短程', '山林', '路線組合'],
    shade: '多', parking: 2, transit: 2, family: 2, image: '/images/trails/dakeng-3.jpg',
    imageAlt: '大坑山林坡地與石階步道',
    reasons: ['路程精簡', '能與3號形成彈性搭配', '林蔭比例高'],
    caution: '短線仍有坡度與階梯；若與3號組合，請以整體爬升估算體力。',
    access: '先確認預計從哪一端進出，Google Maps 終點與實際登山口可能仍有步行距離。',
    parkingNote: '入口型態以山區道路為主，請依現場標線與告示，不要為了靠近入口違停。',
    transportNote: '建議以自駕或機車為主，無車旅客宜優先考慮9、9-1或10號。',
    routeSteps: ['入口', '林間階梯', '短程爬升', '3號銜接點', '折返或續行'],
    related: ['3', '4', '6'],
  },
  {
    id: '4', name: '大坑4號步道', short: '頭嵙山與高地稜線挑戰',
    verdict: '適合體力佳、希望登高看山景並完成大坑代表性挑戰的健行者。',
    difficulty: '挑戰', distance: 1.9, duration: [150, 240], elevation: [470, 859], routeType: '往返／稜線串連',
    surfaces: ['圓木', '陡坡', '山徑'], suitable: ['健腳者', '登山愛好者'], features: ['頭嵙山', '稜線', '展望'],
    shade: '中等', parking: 2, transit: 1, family: 1, image: '/images/trails/dakeng-4.jpg',
    imageAlt: '健行者沿著大坑木棧階梯穿越山林',
    reasons: ['可往頭嵙山方向前進', '坡度與稜線感鮮明', '是大坑具代表性的進階路線'],
    caution: '爬升大、回程仍需保留體力；高溫與雨後都會提高難度。',
    access: '請導航至4號步道登山口；山區訊號可能不穩，出發前先截圖或下載離線資訊。',
    parkingNote: '入口停車條件有限，假日請提早出發並遵守現場交通疏導。',
    transportNote: '公車便利度低，建議結伴自駕；若無車可改選9號或10號一帶。',
    routeSteps: ['登山口', '連續陡升', '稜線路段', '頭嵙山方向', '原路返回'],
    related: ['3', '5', '2'],
  },
  {
    id: '5', name: '大坑5號步道', short: '稜線縱走與山林展望',
    verdict: '適合想走較長稜線、已有半日時間與穩定腳力的健行者。',
    difficulty: '進階', distance: 1.4, duration: [120, 200], elevation: [595, 859], routeType: '稜線／可串連',
    surfaces: ['山徑', '圓木', '階梯'], suitable: ['有經驗者', '健腳者'], features: ['稜線', '山景', '路線串連'],
    shade: '中等', parking: 2, transit: 1, family: 1, image: '/images/trails/dakeng-3.jpg',
    imageAlt: '大坑林蔭山徑旁的山谷與綠色山景',
    reasons: ['稜線氣氛濃厚', '能連接多條高地步道', '適合規劃半日縱走'],
    caution: '實際體力消耗取決於進出路線，不應只看5號本身距離。',
    access: '規劃前先決定進出登山口與接駁方式，單純導航「5號」不足以完成縱走安排。',
    parkingNote: '若採不同入口進出，要先處理兩端交通；原路折返較容易掌握。',
    transportNote: '高地步道路線對大眾運輸不友善，建議結伴與預留回程備案。',
    routeSteps: ['進入稜線', '山林起伏', '觀景休息點', '鄰近步道岔口', '折返或串連'],
    related: ['5-1', '4', '1'],
  },
  {
    id: '5-1', name: '大坑5-1號步道', short: '銜接高地稜線的實用支線',
    verdict: '適合想進入5號稜線、並依體力彈性組合路線的一般健行者。',
    difficulty: '中等', distance: 1.6, duration: [90, 150], elevation: [510, 760], routeType: '往返／聯絡線',
    surfaces: ['階梯', '山徑', '木構路段'], suitable: ['一般健行者', '朋友同行'], features: ['山林', '稜線銜接', '組合彈性'],
    shade: '多', parking: 3, transit: 2, family: 2, image: '/images/trails/dakeng-5.jpg',
    imageAlt: '大坑步道林間岩石、繩索護欄與木階',
    reasons: ['進出5號稜線的選項之一', '林蔭多', '可依時間決定折返點'],
    caution: '進入稜線後容易低估回程距離，請設定明確折返時間。',
    access: '導航至5-1號入口，行經產業道路時留意步道標示與私人土地界線。',
    parkingNote: '停車後仍可能要走一段道路到入口，請穿著可長距離步行的鞋。',
    transportNote: '大眾運輸便利度普通，需把下車後步行時間納入整體行程。',
    routeSteps: ['入口', '林間上坡', '休息平台', '5號稜線銜接', '原路或續走'],
    related: ['5', '6', '4'],
  },
  {
    id: '6', name: '大坑6號步道', short: '林蔭與階梯兼具的平衡選擇',
    verdict: '適合一般健行者、朋友或有登山習慣的親子，難度介於散步與挑戰線之間。',
    difficulty: '中等', distance: 1.5, duration: [70, 120], elevation: [230, 373], routeType: '往返／可組合',
    surfaces: ['階梯', '山徑', '木棧道'], suitable: ['一般健行者', '朋友同行', '親子'], features: ['林蔭', '觀景點', '路線組合'],
    shade: '多', parking: 3, transit: 3, family: 4, image: '/images/trails/dakeng-1.jpg',
    imageAlt: '大坑6號登山步道入口木牌與周邊林地',
    reasons: ['難度適中', '林蔭比例高', '能與7、8號附近路線搭配'],
    caution: '階梯仍會對膝蓋造成負擔；帶小孩時要視年齡與平時活動量評估。',
    access: '導航至6號步道入口後，依現場編號確認；不要把鄰近步道入口當成同一位置。',
    parkingNote: '可先查看入口附近停車點，但假日仍建議提早並準備步行一段路。',
    transportNote: '可用大眾運輸接近大坑地區，再依即時公車資訊安排下車與步行。',
    routeSteps: ['登山口', '林蔭階梯', '主要爬升', '休息觀景點', '折返或銜接'],
    related: ['7', '8', '5-1'],
  },
  {
    id: '7', name: '大坑7號步道', short: '親子友善的林間健走線',
    verdict: '適合想走得輕鬆、又希望保有山林感的親子與登山新手。',
    difficulty: '入門', distance: 1.3, duration: [50, 90], elevation: [220, 340], routeType: '往返／可組合',
    surfaces: ['一般步道', '階梯', '木棧道'], suitable: ['親子', '新手', '朋友同行'], features: ['林蔭', '短程', '交通較方便'],
    shade: '多', parking: 4, transit: 3, family: 5, image: '/images/trails/dakeng-2.jpg',
    imageAlt: '大坑步道林蔭中的緩坡與中央階梯',
    reasons: ['距離與時間容易掌握', '林蔭路段舒適', '可和6或8號彈性安排'],
    caution: '仍有階梯與濕滑處，不適合推嬰兒車；雨後請放慢。',
    access: '以「大坑7號登山步道」為導航終點，到場後依路線牌確認起點。',
    parkingNote: '停車便利度相對較好，但熱門時段仍可能客滿，請勿併排或占用通道。',
    transportNote: '可從市區轉乘往大坑方向公車，下車後步行；班次請以出發當日資訊為準。',
    routeSteps: ['入口', '緩坡林道', '階梯路段', '休息點', '原路折返'],
    related: ['8', '6', '9'],
  },
  {
    id: '8', name: '大坑8號步道', short: '短程、林蔭與彈性折返',
    verdict: '適合時間不多的新手、親子與想進行輕量健走的人。',
    difficulty: '入門', distance: 0.95, duration: [40, 75], elevation: [210, 310], routeType: '往返／可組合',
    surfaces: ['一般步道', '階梯'], suitable: ['新手', '親子', '朋友同行'], features: ['短程', '林蔭', '彈性折返'],
    shade: '多', parking: 4, transit: 3, family: 5, image: '/images/trails/dakeng-2.jpg',
    imageAlt: '綠樹包圍的大坑緩坡步道與階梯',
    reasons: ['距離短', '大部分路段有樹蔭', '容易與附近路線組合'],
    caution: '短程仍包含高低差，長輩同行宜安排更多休息時間。',
    access: '導航指定8號步道，抵達後不要沿著產業道路一直走，先找路線指標。',
    parkingNote: '入口附近停車相對方便，但假日仍應預留替代車位與步行時間。',
    transportNote: '大眾運輸可接近大坑地區，適合無車旅客作為備選。',
    routeSteps: ['入口', '林間緩坡', '階梯上升', '休息點', '折返或銜接'],
    related: ['7', '6', '9-1'],
  },
  {
    id: '9', name: '大坑9號步道', short: '第一次到大坑的首選',
    verdict: '適合第一次造訪、親子、朋友與一般健行者，交通、補給與路線辨識都相對友善。',
    difficulty: '親子', distance: 1.6, duration: [50, 100], elevation: [170, 320], routeType: '往返／可組合',
    surfaces: ['階梯', '一般步道', '木棧道'], suitable: ['第一次造訪', '親子', '新手', '朋友同行'], features: ['城市景觀', '林蔭', '市集', '交通方便'],
    shade: '多', parking: 4, transit: 5, family: 5, image: '/images/trails/dakeng-4.jpg',
    imageAlt: '健行者走在大坑林間木棧階梯上',
    reasons: ['入口與經補庫停車場關係清楚', '大眾運輸與周邊補給較方便', '可與9-1號彈性組合'],
    caution: '熱門時段人多，部分階梯仍有坡度；幼兒與長輩要依體力調整折返點。',
    access: '建議導航到9號步道或經補庫停車場，再依現場指示步行至入口。',
    parkingNote: '優先查看經補庫停車場；假日容易客滿，請避開攤販與居民出入口。',
    transportNote: '可從臺鐵／捷運松竹站一帶轉乘往大坑方向公車，回程班次需提前確認。',
    routeSteps: ['經補庫周邊', '登山口', '林蔭階梯', '觀景休息點', '折返或接9-1號'],
    related: ['9-1', '10', '8'],
  },
  {
    id: '9-1', name: '大坑9-1號步道', short: '短程入門與市集順遊',
    verdict: '適合親子、長輩與只有一小時左右的人，是大坑最容易安排的短線之一。',
    difficulty: '親子', distance: 0.6, duration: [30, 60], elevation: [170, 260], routeType: '往返／可接9號',
    surfaces: ['木棧道', '階梯', '一般步道'], suitable: ['長輩', '親子', '新手', '時間有限'], features: ['短程', '補給方便', '城市景觀'],
    shade: '中等', parking: 4, transit: 5, family: 5, image: '/images/trails/dakeng-2.jpg',
    imageAlt: '大坑步道林蔭中的平緩路面與階梯',
    reasons: ['路程短', '交通與補給便利', '可依體力加走9號'],
    caution: '路面不是完全無障礙，仍不建議推嬰兒車；長輩下階梯時要慢。',
    access: '導航至9-1號步道或經補庫停車場，兩者不是同一個名稱，抵達後依指標前往。',
    parkingNote: '可利用經補庫停車場，再步行前往；熱門時段應提早抵達。',
    transportNote: '公車選擇相對多，是無車旅客優先考慮的路線。',
    routeSteps: ['停車或下車', '入口', '短程木棧階梯', '休息觀景', '原路返回'],
    related: ['9', '10', '8'],
  },
  {
    id: '10', name: '大坑10號步道', short: '城市近郊的入門健走',
    verdict: '適合新手、朋友與日常運動，路線時間容易掌握，大眾運輸相對方便。',
    difficulty: '入門', distance: 1.2, duration: [50, 90], elevation: [170, 310], routeType: '往返／可組合',
    surfaces: ['階梯', '一般步道', '木棧道'], suitable: ['新手', '朋友同行', '一般健走'], features: ['城市景觀', '林蔭', '交通方便'],
    shade: '中等', parking: 4, transit: 4, family: 4, image: '/images/trails/dakeng-3.jpg',
    imageAlt: '大坑步道旁的山林與石階路面',
    reasons: ['市區出發較方便', '難度與時間適中', '可與9號周邊安排同日行程'],
    caution: '部分路段較曝曬，夏季應避開正午並備足飲水。',
    access: '導航至10號登山步道，注意不要把9號入口當成同一處。',
    parkingNote: '周邊停車較便利，但仍以合法停車格與現場告示為準。',
    transportNote: '可從松竹站一帶轉乘往大坑公車，是無車旅客可考慮的路線。',
    routeSteps: ['入口', '前段階梯', '林間路段', '城市展望', '折返或銜接'],
    related: ['9', '9-1', '11'],
  },
  {
    id: '11', name: '大坑11號步道', short: '新興路線與城市山景',
    verdict: '適合一般健行者與希望避開高難度圓木路線的人，仍需保留基本爬坡體力。',
    difficulty: '中等', distance: 1.2, duration: [60, 100], elevation: [185, 335], routeType: '往返／可組合',
    surfaces: ['階梯', '一般步道'], suitable: ['一般健行者', '朋友同行'], features: ['城市景觀', '短程', '山林'],
    shade: '中等', parking: 3, transit: 3, family: 3, image: '/images/trails/dakeng-5.jpg',
    imageAlt: '大坑林間步道的木階、岩石與濃密植被',
    reasons: ['距離適中', '避開高難度圓木挑戰', '適合安排日常健走'],
    caution: '部分階梯與坡度仍需要體力，雨後岩面與落葉可能濕滑。',
    access: '導航到11號步道具體入口，到場後依現場指示確認是否有施工或管制。',
    parkingNote: '入口停車條件視現場而定，請預留步行與改停其他合法位置的時間。',
    transportNote: '可用公車接近大坑地區，但需依即時路線規劃最後一段步行。',
    routeSteps: ['入口', '階梯上升', '林蔭段', '觀景休息', '原路返回'],
    related: ['10', '9', '8'],
  },
];

export const trails: Trail[] = rawTrails.map((trail) => ({ ...trail, maps: maps(trail.id) }));

export const getTrail = (id: string) => trails.find((trail) => trail.id === id);

export const difficultyRank: Record<Difficulty, number> = {
  親子: 1, 入門: 2, 中等: 3, 進階: 4, 挑戰: 5,
};
