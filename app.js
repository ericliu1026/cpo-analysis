// =================================================
// 股票資料
// =================================================
const STOCKS = [
  { code:'3363', name:'上詮', name_en:'FOCI', tier:2, featured:true,
    badge:'2026 首推黑馬', badge_en:'2026 Top Pick',
    thesis:'台積電矽光子聯盟唯一 FAU 合作夥伴,開發 20/40/80 通道高階產品 ASP 跳躍式成長。大摩目標價從 607 元調升至 708 元,1.6T–6.4T FAU 已完成開發,12.8T 研發中。',
    thesis_en:'TSMC silicon photonics exclusive FAU partner. Morgan Stanley raised target from NT$607 to NT$708. 1.6T–6.4T FAU developed, 12.8T in R&D.',
    meta:[['大摩目標價','708 元'],['4/14 股價','~748 元'],['2 月營收年增','~30%']],
    meta_en:[['MS Target','NT$708'],['4/14 Price','~NT$748'],['Feb YoY','~30%']] },

  { code:'2345', name:'智邦', name_en:'Accton', tier:1, featured:true,
    badge:'長線必備', badge_en:'Core Holding',
    thesis:'白牌交換器全球龍頭,直接整合 CPO、散熱、光電模組為 800G/1.6T 交換機。AWS Trainium 3 關鍵供應商,法人目標價 2,400 元,調幅 59%,PEG 僅 0.4。',
    thesis_en:'Global white-box switch leader, integrating CPO/cooling/optics into 800G/1.6T switches. AWS Trainium 3 key supplier. Target NT$2,400 (+59%), PEG only 0.4.',
    meta:[['目標價','2,400 元'],['2026 EPS 估','80.2 元'],['前 2 月營收年增','77%']],
    meta_en:[['Target','NT$2,400'],['2026E EPS','NT$80.2'],['2M YoY','77%']] },

  { code:'3081', name:'聯亞', name_en:'LandMark', tier:2, featured:true,
    badge:'技術龍頭', badge_en:'Tech Leader',
    thesis:'磷化銦(InP)磊晶龍頭,1.6T 雷射核心材料,客戶涵蓋 AWS、Google、NVIDIA。本土投顧目標價從 1,375 元翻倍至 2,750 元,2 月營收年增逾 90%。',
    thesis_en:'InP epi leader, core material for 1.6T lasers. Clients: AWS/Google/NVIDIA. Target doubled from NT$1,375 to NT$2,750. Feb revenue +90% YoY.',
    meta:[['目標價','2,750 元'],['2026 EPS 估','39.34 元'],['4/14 股價','~2,175 元']],
    meta_en:[['Target','NT$2,750'],['2026E EPS','NT$39.34'],['4/14 Price','~NT$2,175']] },

  { code:'2330', name:'台積電', name_en:'TSMC', tier:1, featured:false,
    thesis:'COUPE 矽光子平台是整個 CPO 生態的根基,4/1 宣布年內量產。雖然 CPO 不是營收主要驅動,但在任何情境下都是受惠者,風險最低的核心持股。',
    thesis_en:'COUPE platform is the foundation of the CPO ecosystem. Low-risk core holding that benefits in any scenario.',
    meta:[['策略','回檔分批買'],['定位','產業壟斷者']],
    meta_en:[['Strategy','Buy on dips'],['Position','Industry monopolist']] },

  { code:'2455', name:'全新', name_en:'Visual Photonics', tier:2, featured:false,
    thesis:'InP 磊晶廠轉型代表,「想像空間最大」的族群。若成功切入 CPO 供應鏈,爆發力強;但轉型存在執行風險。',
    thesis_en:'InP epi transformation play. Largest upside if CPO supply chain entry succeeds, but execution risk remains.',
    meta:[['定位','轉型爆發'],['策略','拉回 10-20% 買']],
    meta_en:[['Position','Transformation'],['Strategy','Buy 10-20% dips']] },

  { code:'3163', name:'波若威', name_en:'Browave', tier:3, featured:false,
    thesis:'光纖被動元件代工龍頭,Branch FAU 支援 64 通道,CPO 產品 2025H2 驗證、2026 量產。菲律賓廠稼動率 70-80%。',
    thesis_en:'Fiber passive component leader, Branch FAU supports 64 channels. CPO validation 2025H2, mass production 2026.',
    meta:[['定位','NVIDIA 供應鏈'],['4/14 股價','~1,200 元']],
    meta_en:[['Position','NVIDIA chain'],['4/14 Price','~NT$1,200']] },

  { code:'6442', name:'光聖', name_en:'Browave Corp', tier:3, featured:false,
    thesis:'矽光子 7 劍客之一,800G → 1.6T 放量直接受惠,NVIDIA 供應鏈題材確認。但 3 月曾出現集體跌停,震盪極大。',
    thesis_en:'One of the Silicon Photonics 7 Swords. Direct 800G→1.6T beneficiary. High volatility.',
    meta:[['定位','題材彈性股'],['風險','高波動']],
    meta_en:[['Position','Momentum'],['Risk','High volatility']] },

  { code:'4979', name:'華星光', name_en:'HuaXing Opto', tier:3, featured:false,
    thesis:'NVIDIA 供應鏈題材,800G→1.6T 放量。「飆股波段」族群,震盪極大。',
    thesis_en:'NVIDIA supply chain, 800G→1.6T ramp. Swing trading stock, very volatile.',
    meta:[['定位','NVIDIA 鏈'],['策略','波段操作']],
    meta_en:[['Position','NVIDIA chain'],['Strategy','Swing']] },

  { code:'4977', name:'眾達-KY', name_en:'EZconn', tier:3, featured:false,
    thesis:'矽光子 7 劍客之一,NVIDIA 供應鏈,800G → 1.6T 放量直接受惠,但毛利較低。',
    thesis_en:'One of the Silicon Photonics 7 Swords. NVIDIA chain, 800G→1.6T beneficiary.',
    meta:[['定位','題材彈性股']],
    meta_en:[['Position','Momentum stock']] },

  { code:'3450', name:'聯鈞', name_en:'Luxnet', tier:2, featured:false,
    thesis:'光通訊與雷射二極體封測,受惠 Oracle 去中化政策對 400G AOC 需求增長,800G 產品 2025 年小量出貨。',
    thesis_en:'Optical communications and laser diode packaging. Oracle de-China policy beneficiary.',
    meta:[['定位','AOC / 400G→800G']],
    meta_en:[['Position','AOC / 400G→800G']] },

  { code:'4971', name:'IET-KY', name_en:'IET-KY', tier:3, featured:false,
    thesis:'英特磊,磊晶材料供應商,矽光子 7 劍客之一。定位類似聯亞但規模較小。',
    thesis_en:'InterEpi, epi material supplier. Similar to LandMark but smaller.',
    meta:[['定位','磊晶小型股']],
    meta_en:[['Position','Small-cap epi']] },

  { code:'6451', name:'訊芯-KY', name_en:'Kingsignal', tier:3, featured:false,
    thesis:'日月光集團旗下,負責高速光學封裝,被稱為「隱藏版輝達 CPO 概念股」。',
    thesis_en:'ASE Group subsidiary for high-speed optical packaging. Hidden NVIDIA CPO play.',
    meta:[['定位','封測隱形冠軍']],
    meta_en:[['Position','Hidden champion']] },

  { code:'6223', name:'旺矽', name_en:'MPI', tier:3, featured:false,
    thesis:'掌握 CP/FT 測試介面,台積電 CPO 三大關鍵環節之一。',
    thesis_en:'CP/FT test interface cards, one of TSMC CPO three key links.',
    meta:[['定位','測試介面卡龍頭']],
    meta_en:[['Position','Test interface leader']] },

  { code:'2409', name:'友達', name_en:'AUO', tier:4, featured:false,
    thesis:'面板雙雄之一,透過 MicroLED 切入 CPO 光源、PLP 封裝轉型半導體。轉型題材股。',
    thesis_en:'Display panel giant transforming via MicroLED into CPO light sources and PLP packaging.',
    meta:[['定位','轉型低基期']],
    meta_en:[['Position','Transformation play']] },

  { code:'3481', name:'群創', name_en:'Innolux', tier:4, featured:false,
    thesis:'面板雙雄之一,同樣透過 MicroLED 與 PLP 封裝切入半導體。低檔布局、不追高。',
    thesis_en:'Display panel giant, entering semiconductors via MicroLED and PLP. Buy low, no chasing.',
    meta:[['定位','轉型低基期']],
    meta_en:[['Position','Transformation play']] },

  { code:'3105', name:'穩懋', name_en:'WIN Semi', tier:3, featured:false,
    thesis:'GaAs 晶圓代工龍頭,隱藏版 CPO 概念股。原本主力為手機射頻,AI 光通訊轉型中。',
    thesis_en:'GaAs foundry leader, hidden CPO concept. Transitioning from RF to AI optical.',
    meta:[['定位','隱藏版概念股']],
    meta_en:[['Position','Hidden concept']] }
];

// =================================================
// 多語系字典
// =================================================
const I18N = {
  zh: {
    brand: 'CPO 概念股深度分析 · 2026',
    toc_title: '目錄',
    toc_1: '技術原理與爆紅原因', toc_2: '產業鏈架構', toc_3: '長線 vs 短線',
    toc_4: '分級排行', toc_5: '2026 三檔推薦', toc_6: '風險提醒',
    hero_title: '台股 CPO 概念股深度產業分析',
    hero_subtitle: 'CPO(共同封裝光學)是 AI 資料中心從「電傳輸」邁向「光傳輸」的革命性技術。摩根史坦利預估 CPO 市場規模從 2023 年僅 800 萬美元,將在 2030 年暴增至 93 億美元,七年複合成長率高達 172%。台積電 COUPE 平台年內量產,標誌 CPO 正式進入商業化元年。',
    meta_updated: '更新於 2026 年 4 月',
    meta_sources: '資料來源:大摩、本土投顧、公開市場報告',
    s1_title: 'CPO 技術原理與爆紅原因',
    s1_lead: '速度越快,銅線能走的距離就越短。光,正一路從機房外殺進晶片核心。以下呈現光通訊技術三世代的演進,以及 CPO 為何在 2026 年爆紅的三大結構性驅動力。',
    mkt_title: '市場規模爆發:CAGR 172%',
    bar_2023: '800 萬美元', bar_2026: '5–8 億(元年)', bar_2028: '24 億美元', bar_2030: '93 億美元',
    s2_title: 'CPO 產業鏈架構與關連公司',
    s2_lead: 'CPO 不是單一公司能做的技術。從一塊磷化銦磊晶片到一台能插進 AI 資料中心的 1.6T 交換器,牽涉磊晶、雷射、封裝、光纖被動元件、晶圓代工到系統整合的完整生態系。',
    s3_title: '長線看好,還是短線炒作?',
    s3_lead: '點擊切換觀點,分別檢視兩派論述的核心證據。CPO 是「真產業趨勢 + 真獲利成長 + 真估值泡沫」三者並存的狀態。',
    tab_long: '長線結構派', tab_short: '短線炒作派', tab_verdict: '綜合結論',
    ev_l1_label: '需求面 · AI 資本支出',
    ev_l1_value: '亞馬遜 AWS 2026 資本支出飆升至 2,000 億美元,全部投入 AI 基礎建設。Meta、Oracle 已採用輝達 Spectrum-X CPO 交換器。',
    ev_l2_label: '技術面 · 物理極限驅動',
    ev_l2_value: '銅線在 1.6T 連機櫃內都守不住,光纖必須直接插到 GPU 晶片旁邊,這不是選擇題,是必考題。',
    ev_l3_label: '市場規模 · 七年 172% CAGR',
    ev_l3_value: '2023 年 800 萬美元 → 2030 年 93 億美元。光模塊市場 2025 全球銷售約 180 億美元,年增 70%。',
    ev_l4_label: '營收驗證 · 淡季不淡',
    ev_l4_value: '智邦 2026 前 2 月營收 451 億元年增 77%;聯亞 2 月年增逾 90% 創近兩年新高;上詮年增近 30%。',
    ev_l5_label: '法人評級 · 目標價一路上修',
    ev_l5_value: '大摩對上詮目標價從 607 元調升至 708 元;智邦從 1,505 元升至 2,400 元(+59%),聯亞從 1,375 元翻倍至 2,750 元。',
    ev_s1_label: '估值風險 · PE 已偏高',
    ev_s1_value: '多檔 CPO 概念股自 2025 年 4 月低點累計最大漲幅達 300–1,000%(A 股中際旭創累計漲幅 1,021%),估值已充分反映樂觀預期。',
    ev_s2_label: '基本面落地 · 2027-2028 才真正放量',
    ev_s2_value: 'NVIDIA 與 Broadcom 的 CPO 真正大規模放量預計 2027–2028,2026 年仍屬於元年,實際出貨量對財報貢獻有限。',
    ev_s3_label: '題材股 EPS 落差大',
    ev_s3_value: '上詮 2025 全年 EPS 0.16 元,全新、部分零組件廠毛利率低,容易被殺估值;股價炒在 2026-2027 想像題材。',
    ev_s4_label: '技術路線競爭 · CPO 非唯一解',
    ev_s4_value: 'LPO 線性驅動光學、Google 自主路徑 OCS、銅纜延壽方案 ALC 都在搶市,CPO 未必壟斷。',
    ev_s5_label: '短線資金波動劇烈',
    ev_s5_value: '3 月曾出現逾 10 檔矽光子飆股掛跌停,單日振幅動輒 5–10%。',
    ev_v1_label: '需求端',
    ev_v1_value: 'AI 資料中心建置是未來 5 年最確定趨勢,CPO 是物理極限下的必然解。',
    ev_v2_label: '供給端',
    ev_v2_value: '真正拿到台積電、NVIDIA 訂單的廠商(上詮、智邦、聯亞)長多,外圍題材股雷聲大雨點小。',
    ev_v3_label: '估值端',
    ev_v3_value: '多檔個股已先漲 5–10 倍,買點不在現在,回檔 15–25% 才是布局點。',
    tag_struct_long: '結構性長多', tag_divergent: '分化嚴重', tag_expensive: '短期偏貴',
    verdict_title: '結論:長多趨勢明確,短線操作需擇時',
    verdict_body: 'CPO 是「真產業趨勢 + 真獲利成長 + 真估值泡沫」三者並存的狀態。建議分三層配置:第一階核心王者(台積電、智邦)回檔分批長抱;第二階成長主升股(聯亞、上詮、全新)拉回 10-20% 找買點;第三階飆股(光聖、波若威、華星光)只做波段不追高。切忌一次 All-in。',
    s4_title: '2026 CPO 概念股分級排行',
    s4_lead: '依資金流、產業位階、技術壁壘與獲利可見度分級。點擊股票代號跳轉至 Yahoo 奇摩股市查看即時行情。',
    filter_all: '全部', filter_1: '第一階 · 核心王者', filter_2: '第二階 · 主升黑馬',
    filter_3: '第三階 · 飆股波段', filter_4: '第四階 · 題材轉型',
    s5_title: '2026 最推薦的三檔 CPO 概念股',
    s5_lead: '綜合技術壁壘、法人目標價、營收動能與風報比,給您的最終建議。',
    rec_1_medal: '🥇 首推黑馬',
    rec_1_body: '台積電矽光子聯盟唯一 FAU 合作夥伴,開發 20/40/80 通道高階產品 ASP 跳躍式成長。大摩目標價從 607 元調升至 708 元。',
    rec_1_p1: '技術特等席,FAU 單價非線性增長',
    rec_1_p2: 'LPO 2025 年底完成驗證',
    rec_1_p3: '1.6T CPO 預計 2026 Q3 認證',
    rec_1_p4: '每年 17.5 億 CAPEX 豪賭',
    rec_2_medal: '🥈 長線必備',
    rec_2_body: '白牌交換器全球龍頭,直接整合 CPO、散熱、光電模組為 800G/1.6T 交換機,是真正「賺整組錢」的廠商。',
    rec_2_p1: '目標價 2,400 元,調幅 59%',
    rec_2_p2: '2026 EPS 估 80.2 元',
    rec_2_p3: '前 2 月營收年增 77%',
    rec_2_p4: 'PEG 僅約 0.4,估值便宜',
    rec_3_medal: '🥉 技術主升',
    rec_3_body: 'InP 磊晶龍頭,是雷射光源的核心材料供應者。目標價從 1,375 元翻倍至 2,750 元。',
    rec_3_p1: '客戶 AWS/Google/NVIDIA',
    rec_3_p2: '2 月營收年增逾 90%',
    rec_3_p3: '2026 EPS 估 39.34 元',
    rec_3_p4: '漲多建議拉回承接',
    s6_title: '重要風險提醒',
    s6_lead: 'CPO 是真趨勢、有真需求、也有真獲利成長,但目前股價已走在基本面前面。以下是四個必須注意的風險。',
    risk_1_t: '估值已偏高',
    risk_1_b: 'A 股中際旭創股價自 2025 年 4 月低點累計最大漲幅 1,021%,新易盛累計最大漲幅 1,034%。台股雖不如 A 股誇張,但已反映大量預期,目前買點不在追高,而是等回檔。',
    risk_2_t: '元年 ≠ 放量年',
    risk_2_b: '2026 是「商轉元年」,但 CPO 真正放量預計 2027-2028 年。短期業績爆發力沒有想像中大,慎防預期落差。',
    risk_3_t: '技術路線仍有競爭',
    risk_3_b: 'Google 走 OCS 獨家路徑、Broadcom 走 CPO、部分廠商用銅纜 ALC 延壽,CPO 並非唯一解,路線不確定性仍存。',
    risk_4_t: '題材輪動劇烈',
    risk_4_b: '3 月曾出現矽光子族群單日逾 10 檔跌停,短線資金進出快速,紀律性停損比選股更重要。',
    final_title: '操作總結',
    final_body: 'CPO 是真趨勢、有真需求、也有真獲利成長,但目前股價已走在基本面前面。上詮 + 智邦當核心持股長抱,聯亞等拉回承接,其餘飆股只做波段。用分級配置取代 All-in,才是專業機構投資人在結構性趨勢中真正做對的方式。',
    footer_1: '本報告僅供學術與研究參考,不構成任何投資建議。投資有風險,請獨立判斷並承擔交易風險。',
    footer_2: '資料來源:摩根士丹利、本土投顧研究報告、公開資訊觀測站、Anue 鉅亨、數位時代等公開市場資料。',
    footer_3: '最後更新:2026 年 4 月 · 作者:Eric',
    tier_label: { 1: '核心王者', 2: '主升黑馬', 3: '飆股波段', 4: '題材轉型' },
    // SVG 文字
    t_gen3: '光通訊技術三世代演進',
    g1_t: '傳統可插拔',
    g1_l1: '速度:100G / 400G', g1_l2: '功耗:16–20W/模組', g1_l3: '位置:交換器前面板', g1_l4: '現狀:雲端時代主流',
    g2_t: 'LPO 過渡方案', g2_t_sub: '線性驅動可插拔',
    g2_l1: '速度:800G 主流', g2_l2: '功耗:較傳統降 30–50%', g2_l3: '位置:仍在面板,省 DSP', g2_l4: '現狀:2025 短期解方',
    g3_t: 'CPO 共同封裝',
    g3_l1: '速度:1.6T / 3.2T / 6.4T', g3_l2: '功耗:再降 50% 以上', g3_l3: '位置:光引擎進封裝', g3_l4: '現狀:2026 商轉元年',
    d_title: '三大結構性驅動力',
    d1_t: '功耗牆撞頂',
    d1_l1: '傳統 64 模組交換器', d1_l2: '功耗 1,024-1,280W', d1_l3: 'AI 百萬 GPU 叢集', d1_l4: '電費吃掉 ROI',
    d2_t: '頻寬需求爆炸',
    d2_l1: 'AI 訓練資料量', d2_l2: '每年翻倍成長', d2_l3: '1.6T 2026 放量', d2_l4: '銅線進入物理極限',
    d3_t: '巨頭集體背書',
    d3_l1: '輝達 Spectrum-X', d3_l2: '博通 Tomahawk 6', d3_l3: '台積電 COUPE', d3_l4: 'Meta、Oracle 採用',
    c_title: 'CPO 產業鏈垂直整合圖',
    c_sub: '從一塊磷化銦磊晶片,到一台能插進 AI 資料中心的 1.6T 交換器',
    up_title: '上游 · 磊晶與雷射光源',
    up1_l1: 'InP 磊晶龍頭', up1_l2: '1.6T 雷射核心',
    up2_l1: 'InP 轉型黑馬', up2_l2: '最具想像空間',
    up3_l1: '英特磊', up3_l2: '磊晶供應商',
    up4_l1: 'GaAs 代工', up4_l2: '隱藏版概念股',
    mid_title: '中游 · 光學引擎、FAU 與光收發模組',
    m1_l1: 'FAU 獨家技術', m1_l2: '台積電戰略夥伴', m1_l3: '黑馬首選',
    m2_l1: '光纖被動元件', m2_l2: 'Branch FAU 64 芯', m2_l3: '2026 量產',
    m3_l1: '光通訊元件', m3_l2: '高價漲倍股', m3_l3: '短線彈性大',
    m4_l1: 'NVIDIA 供應鏈',
    m5_t: '聯鈞 源傑', m5_l1: 'AOC 光纜', m5_l2: 'Oracle 去中化受惠',
    fdy_title: '晶圓代工與封裝測試',
    f1_l1: 'COUPE 矽光子平台', f1_l2: '2026 量產關鍵', f1_l3: '整個生態核心',
    f2_l1: '日月光集團', f2_l2: '高速光學封裝', f2_l3: '隱藏版輝達鏈',
    f3_l1: '測試介面卡', f3_l2: 'CP/FT 測試', f3_l3: '台積電三大關鍵',
    dn_title: '下游 · 交換器與系統整合',
    dn1_l: '白牌交換器龍頭 · AWS/Meta/NVIDIA 夥伴',
    dn2_t: '系統組裝廠'
  },
  en: {
    brand: 'CPO Stocks Deep Dive · 2026',
    toc_title: 'Contents',
    toc_1: 'Tech & Catalysts', toc_2: 'Supply Chain', toc_3: 'Long vs Short',
    toc_4: 'Tier Ranking', toc_5: 'Top 3 Picks', toc_6: 'Risks',
    hero_title: "Taiwan CPO Stocks Industry Deep Dive",
    hero_subtitle: "Co-Packaged Optics (CPO) is the revolutionary technology moving AI data centers from electrical to optical transmission. Morgan Stanley forecasts the CPO market to grow from $8M in 2023 to $9.3B in 2030, a 172% CAGR over 7 years. TSMC's COUPE platform begins mass production this year, marking CPO's official commercialization.",
    meta_updated: 'Updated April 2026',
    meta_sources: 'Sources: Morgan Stanley, domestic brokers, public market reports',
    s1_title: "CPO Technology & Why It's Exploding",
    s1_lead: 'The faster the speed, the shorter copper can travel. Light is pushing from the data center perimeter toward the chip core. Below shows three generations of optical technology and the three structural drivers behind CPO breakout in 2026.',
    mkt_title: 'Market Explosion: 172% CAGR',
    bar_2023: '$8M', bar_2026: '$500M-800M (Y1)', bar_2028: '$2.4B', bar_2030: '$9.3B',
    s2_title: 'CPO Supply Chain Architecture',
    s2_lead: 'CPO is not a technology any single company can build. From an InP epitaxial wafer to a 1.6T switch in an AI data center, it involves the complete ecosystem of epi, laser, packaging, fiber passives, foundry, and system integration.',
    s3_title: 'Long-Term Bullish or Short-Term Hype?',
    s3_lead: 'Click to toggle between perspectives and examine core evidence from both sides. CPO is a state where "real industry trend + real earnings growth + real valuation bubble" all coexist.',
    tab_long: 'Structural Bulls', tab_short: 'Short-Term Bears', tab_verdict: 'Verdict',
    ev_l1_label: 'Demand · AI Capex',
    ev_l1_value: 'AWS 2026 capex surged to $200B, fully dedicated to AI infrastructure. Meta and Oracle have adopted NVIDIA Spectrum-X CPO switches.',
    ev_l2_label: 'Technology · Physical Limits',
    ev_l2_value: "At 1.6T, copper can't survive inside a rack. Fiber must go directly next to the GPU chip. Not optional, mandatory.",
    ev_l3_label: 'Market Size · 7-Year 172% CAGR',
    ev_l3_value: '$8M in 2023 to $9.3B in 2030. Optical module market reached ~$18B globally in 2025 (+70% YoY).',
    ev_l4_label: 'Revenue Proof · Strong Off-Season',
    ev_l4_value: 'Accton Jan-Feb 2026 revenue NT$45.1B (+77% YoY). LandMark Feb +90% YoY. FOCI +30% YoY.',
    ev_l5_label: 'Broker Ratings · Target Prices Up',
    ev_l5_value: 'MS raised FOCI target from NT$607 to NT$708. Accton from NT$1,505 to NT$2,400 (+59%). LandMark from NT$1,375 to NT$2,750 (doubled).',
    ev_s1_label: 'Valuation Risk · PE Stretched',
    ev_s1_value: "Many CPO stocks gained 300-1,000% from April 2025 lows (China's Innolight +1,021%). Valuations fully reflect optimism.",
    ev_s2_label: 'Fundamentals · True Ramp 2027-2028',
    ev_s2_value: 'NVIDIA and Broadcom CPO true mass production expected 2027-2028. 2026 still Year 1.',
    ev_s3_label: 'Concept Stock EPS Gap',
    ev_s3_value: 'FOCI 2025 full-year EPS only NT$0.16. Some component makers have low margins, vulnerable.',
    ev_s4_label: 'Tech Path Competition',
    ev_s4_value: "LPO, Google's OCS, and ALC copper life extension all competing. CPO monopoly not guaranteed.",
    ev_s5_label: 'Volatile Short-Term Capital',
    ev_s5_value: 'March saw 10+ silicon photonics stocks hit limit-down in one day. Daily swings 5-10% common.',
    ev_v1_label: 'Demand Side',
    ev_v1_value: 'AI data center build-out is the most certain 5-year trend. CPO is inevitable under physical limits.',
    ev_v2_label: 'Supply Side',
    ev_v2_value: 'Real winners (FOCI, Accton, LandMark) with TSMC/NVIDIA orders bullish. Peripheral stocks lack substance.',
    ev_v3_label: 'Valuation Side',
    ev_v3_value: 'Many stocks already up 5-10x. Entry point is not now. 15-25% pullback is the better setup.',
    tag_struct_long: 'Structural Bull', tag_divergent: 'Divergent', tag_expensive: 'Short-Term Expensive',
    verdict_title: 'Verdict: Clear Long Trend, Time Your Entries',
    verdict_body: '3-tier allocation: Tier 1 core (TSMC, Accton) accumulate on pullbacks, hold long. Tier 2 leaders (LandMark, FOCI, Visual Photonics) buy on 10-20% dips. Tier 3 momentum (Browave, HuaXing) swing trade only. Never all-in. Discipline over emotion.',
    s4_title: '2026 CPO Stock Tier Ranking',
    s4_lead: 'Ranked by capital flow, industry position, technical moat, and earnings visibility. Click ticker for live quotes on Yahoo Finance.',
    filter_all: 'All', filter_1: 'Tier 1 · Core', filter_2: 'Tier 2 · Leaders',
    filter_3: 'Tier 3 · Swing', filter_4: 'Tier 4 · Transform',
    s5_title: 'Top 3 CPO Stock Picks for 2026',
    s5_lead: 'Final recommendations based on technical moat, broker targets, revenue momentum, and risk/reward.',
    rec_1_medal: '🥇 Top Dark Horse',
    rec_1_body: 'TSMC silicon photonics exclusive FAU partner. MS raised target from NT$607 to NT$708.',
    rec_1_p1: 'Privileged tech position, non-linear ASP growth',
    rec_1_p2: 'LPO validation completed end 2025',
    rec_1_p3: '1.6T CPO to certify Q3 2026',
    rec_1_p4: 'NT$1.75B capex bet 2 consecutive years',
    rec_2_medal: '🥈 Core Long Hold',
    rec_2_body: 'Global white-box switch leader, integrating CPO/cooling/optics into 800G/1.6T switches.',
    rec_2_p1: 'Target NT$2,400, +59% upgrade',
    rec_2_p2: '2026E EPS NT$80.2',
    rec_2_p3: 'Jan-Feb revenue +77% YoY',
    rec_2_p4: 'PEG only ~0.4, cheap',
    rec_3_medal: '🥉 Tech Leader',
    rec_3_body: 'InP epi leader, core material for laser sources. Target doubled from NT$1,375 to NT$2,750.',
    rec_3_p1: 'Clients: AWS/Google/NVIDIA',
    rec_3_p2: 'Feb revenue +90% YoY',
    rec_3_p3: '2026E EPS NT$39.34',
    rec_3_p4: 'Extended rally, wait for dip',
    s6_title: 'Critical Risk Reminders',
    s6_lead: 'CPO is a real trend with real demand and real earnings growth, but stock prices have run ahead of fundamentals. Four critical risks.',
    risk_1_t: 'Valuations Stretched',
    risk_1_b: "China's Innolight +1,021% from April 2025 lows, NewEase +1,034%. Taiwan CPO stocks less extreme but heavy expectations priced in. Entry point is not chasing highs, wait for pullbacks.",
    risk_2_t: 'Year 1 ≠ Ramp Year',
    risk_2_b: '2026 is commercial launch, but true CPO ramp expected 2027-2028. Short-term earnings impact smaller than imagined.',
    risk_3_t: 'Tech Path Competition',
    risk_3_b: "Google uses OCS, Broadcom uses CPO, others extend copper with ALC. CPO isn't the only solution.",
    risk_4_t: 'Violent Sector Rotation',
    risk_4_b: 'March saw 10+ silicon photonics stocks hit daily limit-down. Disciplined stop-loss matters more than picking.',
    final_title: 'Operational Summary',
    final_body: 'Hold FOCI + Accton as core positions long-term. Accumulate LandMark on pullbacks. Swing-trade other momentum names only. Use tiered allocation instead of all-in.',
    footer_1: 'This report is for academic and research reference only. It does not constitute investment advice. Investing carries risk.',
    footer_2: 'Sources: Morgan Stanley, domestic broker research, Taiwan MOPS, Anue cnyes, Business Next.',
    footer_3: 'Last updated: April 2026 · Author: Eric',
    tier_label: { 1: 'Core', 2: 'Leader', 3: 'Swing', 4: 'Transform' },
    t_gen3: 'Three Generations of Optical Technology',
    g1_t: 'Pluggable',
    g1_l1: 'Speed: 100G / 400G', g1_l2: 'Power: 16-20W/mod', g1_l3: 'Position: Front panel', g1_l4: 'Status: Cloud mainstream',
    g2_t: 'LPO Transition', g2_t_sub: 'Linear Pluggable',
    g2_l1: 'Speed: 800G mainstream', g2_l2: 'Power: 30-50% less', g2_l3: 'Position: Panel, no DSP', g2_l4: 'Status: 2025 short-term',
    g3_t: 'CPO Co-Packaged',
    g3_l1: 'Speed: 1.6T / 3.2T / 6.4T', g3_l2: 'Power: 50%+ drop', g3_l3: 'Position: Inside package', g3_l4: 'Status: 2026 Year 1',
    d_title: 'Three Structural Drivers',
    d1_t: 'Power Wall',
    d1_l1: 'Trad. 64-module switch', d1_l2: 'Power: 1,024-1,280W', d1_l3: 'Million-GPU cluster', d1_l4: 'Power bill eats ROI',
    d2_t: 'Bandwidth Explosion',
    d2_l1: 'AI training data', d2_l2: 'Doubles yearly', d2_l3: '1.6T ramps 2026', d2_l4: 'Copper physical limit',
    d3_t: 'Giant Consensus',
    d3_l1: 'NVIDIA Spectrum-X', d3_l2: 'Broadcom Tomahawk 6', d3_l3: 'TSMC COUPE', d3_l4: 'Meta, Oracle adopted',
    c_title: 'CPO Supply Chain Vertical Integration',
    c_sub: 'From an InP epi wafer to a 1.6T switch in an AI data center',
    up_title: 'Upstream · Epi & Laser Sources',
    up1_l1: 'InP epi leader', up1_l2: '1.6T laser core',
    up2_l1: 'InP transformation', up2_l2: 'Biggest upside',
    up3_l1: 'InterEpi', up3_l2: 'Epi supplier',
    up4_l1: 'GaAs foundry', up4_l2: 'Hidden concept',
    mid_title: 'Midstream · Optical Engine, FAU, Transceivers',
    m1_l1: 'FAU exclusive', m1_l2: 'TSMC partner', m1_l3: 'Top dark horse',
    m2_l1: 'Fiber passive', m2_l2: 'Branch FAU 64ch', m2_l3: '2026 mass prod',
    m3_l1: 'Optical comm', m3_l2: 'Multi-bagger', m3_l3: 'High elasticity',
    m4_l1: 'NVIDIA chain',
    m5_t: 'Luxnet & Sourcetech', m5_l1: 'AOC cable', m5_l2: 'Oracle de-China',
    fdy_title: 'Foundry & ATP',
    f1_l1: 'COUPE SiPh platform', f1_l2: '2026 MP key', f1_l3: 'Ecosystem core',
    f2_l1: 'ASE Group', f2_l2: 'Optical ATP', f2_l3: 'Hidden NVIDIA chain',
    f3_l1: 'Test interface card', f3_l2: 'CP/FT testing', f3_l3: 'TSMC 3 keys',
    dn_title: 'Downstream · Switches & Integration',
    dn1_l: 'White-box switch leader · AWS/Meta/NVIDIA partner',
    dn2_t: 'System Integrators'
  }
};

// =================================================
// 渲染股票列表
// =================================================
function renderStocks() {
  const container = document.getElementById('stock-list');
  if (!container) return;
  const lang = document.documentElement.getAttribute('data-lang') || 'zh';
  const labels = I18N[lang].tier_label;

  container.innerHTML = STOCKS.map(s => {
    const name = lang === 'en' ? s.name_en : s.name;
    const thesis = lang === 'en' ? s.thesis_en : s.thesis;
    const badge = lang === 'en' ? s.badge_en : s.badge;
    const meta = lang === 'en' ? s.meta_en : s.meta;

    const metaHtml = meta && meta.length ? `
      <div class="stock-meta">
        ${meta.map(m => `<span>${m[0]} <strong>${m[1]}</strong></span>`).join('')}
      </div>` : '';

    return `
      <div class="stock-card ${s.featured ? 'featured' : ''}" data-tier="${s.tier}">
        <div class="stock-header">
          <div class="stock-name-block">
            <p class="stock-name">${name}</p>
            <a href="https://tw.stock.yahoo.com/quote/${s.code}" target="_blank" rel="noopener" class="stock-code-link" title="Yahoo Finance">
              ${s.code}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            ${badge ? `<span class="featured-badge">${badge}</span>` : ''}
          </div>
          <span class="stock-tier tier-${s.tier}">${labels[s.tier]}</span>
        </div>
        <p class="stock-thesis">${thesis}</p>
        ${metaHtml}
      </div>`;
  }).join('');
}

// =================================================
// 互動邏輯
// =================================================
function switchThesisTab(e, name) {
  document.querySelectorAll('.tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function filterTier(e, tier) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelectorAll('.stock-card').forEach(c => {
    if (tier === 'all' || c.dataset.tier === tier) c.classList.remove('hidden');
    else c.classList.add('hidden');
  });
}

// =================================================
// 語言切換
// =================================================
function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');

  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-svg]').forEach(el => {
    const key = el.getAttribute('data-i18n-svg');
    if (dict[key]) el.textContent = dict[key];
  });

  document.getElementById('lang-label').textContent = lang === 'zh' ? 'EN' : '中';
  renderStocks();

  try { localStorage.setItem('cpo-lang', lang); } catch(e) {}
}

// =================================================
// 初始化
// =================================================
document.addEventListener('DOMContentLoaded', () => {
  // 目錄抽屜
  const tocEl = document.getElementById('toc');
  const tocBackdrop = document.getElementById('toc-backdrop');
  const tocToggle = document.getElementById('toc-toggle');

  tocToggle.addEventListener('click', () => {
    tocEl.classList.add('open');
    tocBackdrop.classList.add('show');
  });
  tocBackdrop.addEventListener('click', () => {
    tocEl.classList.remove('open');
    tocBackdrop.classList.remove('show');
  });
  document.querySelectorAll('.toc-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        tocEl.classList.remove('open');
        tocBackdrop.classList.remove('show');
      }
    });
  });

  // 目錄高亮
  const sections = document.querySelectorAll('section[id]');
  const tocItems = document.querySelectorAll('.toc-item');
  function updateActiveToc() {
    let current = '';
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (scrollY >= top) current = sec.id;
    });
    tocItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) item.classList.add('active');
    });
  }

  // 回到頂部
  const backToTop = document.getElementById('back-to-top');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  function updateBackToTop() {
    if (window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }

  window.addEventListener('scroll', () => {
    updateActiveToc();
    updateBackToTop();
  }, { passive: true });

  // 語言切換
  document.getElementById('lang-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || 'zh';
    applyLang(current === 'zh' ? 'en' : 'zh');
  });

  // 初始化語言
  let savedLang = 'zh';
  try { savedLang = localStorage.getItem('cpo-lang') || 'zh'; } catch(e) {}
  applyLang(savedLang);
  updateActiveToc();
});
