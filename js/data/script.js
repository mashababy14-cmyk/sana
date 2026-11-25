/**
 * Story Script — Chapter 1 (Bengali)
 * Protagonist (You) & Sana
 */
window.VN = window.VN || {};

window.VN.CHAPTERS = [
  { id: 1, label: "Chapter 1", title: "হলুদের ভিড়ে", startSceneId: "ch1_s01" },
  { id: 2, label: "Chapter 2", title: "তারিখের সকাল", startSceneId: "ch2_s01" },
  { id: 2.5, label: "Chapter 2.5", title: "ডেটের পর ছাদে", startSceneId: "ch2_5_s01" },
  { id: 3, label: "Chapter 3", title: "সকালের সিদ্ধান্ত", startSceneId: "ch3_s01" },
];

window.VN.STORY_SCENES = {
  ch1_s01: {
    id: "ch1_s01",
    chapter: 1,
    title: "হলুদের ভিড়ে",
    location: "haldi_courtyard",
    time: "Evening",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "হলুদের ভিড়ে তুমি একা।" },
      { speaker: "Narrator", text: "প্লটে হাত রেখে কোণায় দাঁড়িয়ে।" },
      { speaker: "Narrator", text: "তখন চোখ পড়ে তার ওপর।" },
      { speaker: "Narrator", text: "সবুজ-সোনালি শাড়ি।" },
      { speaker: "Sana", text: "(আয়নার সামনে চুল সরাচ্ছে)" },
      { speaker: "Narrator", text: "কোঁকড়ানো চুলে সাদা ফুল।" },
      { speaker: "Narrator", text: "গলায় ভারী সোনালি নেকলেস।" },
      { speaker: "Sana", text: "(হঠাৎ তোমার দিকে তাকায়)" },
      { speaker: "Narrator", text: "তুমি চোখ সরালে।" },
      { speaker: "Narrator", text: "অনেক দেরি হয়ে গেছে।" },
      { speaker: "Sana", text: "এই, তুমি।" },
      { speaker: "You", text: "হ্যাঁ? আমি?" },
      { speaker: "Sana", text: "দাঁড়াও, পালাও না।" },
      { speaker: "You", text: "পলাচ্ছি না, শুধু—" },
      { speaker: "Sana", text: "শুধু কী?" },
      { speaker: "You", text: "কিছু না।" },
      { speaker: "Sana", text: "মুখটা তো গম্ভীর।" },
      { speaker: "You", text: "গম্ভীর না, ক্লান্ত।" },
      { speaker: "Sana", text: "ক্লান্ত? এখানে কে ক্লান্ত হয়?" },
      { speaker: "You", text: "ভিড় দেখে।" },
      { speaker: "Sana", text: "(হাসে) ভিড় দেখে ক্লান্ত?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তাহলে দাঁড়াও, কিছু একটা করব।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "দেখছি।" },
      { speaker: "Narrator", text: "সে ফোন বের করে।" },
      { speaker: "You", text: "ফোন?" },
      { speaker: "Sana", text: "হ্যাঁ, একটা উপকার।" }
    ],
    choices: [
      {
        text: "সে দিকে তাকিয়ে থাকো",
        next: "ch1_s02",
        meterEffects: { sana: { love: 2, attraction: 3, trust: 1, intimacy: 0, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s02: {
    id: "ch1_s02",
    chapter: 1,
    title: "ছবি তোলার অজুহাত",
    location: "haldi_courtyard",
    time: "Evening",
    character: "sana",
    emotion: "playful",
    dialogue: [
      { speaker: "Sana", text: "একটু ছবি তুলে দেবে?" },
      { speaker: "You", text: "আমি?" },
      { speaker: "Sana", text: "হ্যাঁ, তুমিই।" },
      { speaker: "You", text: "আমি ভালো তুলতে পারি না।" },
      { speaker: "Sana", text: "হয়ে গেছে, তাহলে শিখে যাবে।" },
      { speaker: "You", text: "সত্যি বলছি, নষ্ট করব।" },
      { speaker: "Sana", text: "নষ্ট করলে দোষ তোমার না, আমার।" },
      { speaker: "You", text: "তা কেন?" },
      { speaker: "Sana", text: "আমি তোমাকে দিয়ে তুলিয়েছি।" },
      { speaker: "You", text: "(ফোন নিতে গিয়ে) হাত কাঁপছে আমার।" },
      { speaker: "Sana", text: "কাঁপুক, ধরো আগে।" },
      { speaker: "Narrator", text: "তুমি ফোনটা নাও।" },
      { speaker: "Sana", text: "ওই দেয়ালের সামনে আলোটা ভালো।" },
      { speaker: "You", text: "এই দেয়ালে?" },
      { speaker: "Sana", text: "হ্যাঁ, দাঁড়াও দেখাই।" },
      { speaker: "Narrator", text: "সে এগিয়ে যায় দেয়ালের কাছে।" },
      { speaker: "Sana", text: "একটু নিচ থেকে তুলবে?" },
      { speaker: "You", text: "নিচ থেকে?" },
      { speaker: "Sana", text: "হ্যাঁ, নাকি বড় লাগবে।" },
      { speaker: "You", text: "বড়?" },
      { speaker: "Sana", text: "মানে, সুন্দর লাগবে।" },
      { speaker: "You", text: "(হাসি চাপা) আচ্ছা।" },
      { speaker: "Sana", text: "প্রথমটা তোলো।" },
      { speaker: "Narrator", text: "প্রথম ছবি blur।" },
      { speaker: "Sana", text: "উফ! এটা কী!" },
      { speaker: "You", text: "দোষ তোমার না, আমার হাত।" },
      { speaker: "Sana", text: "তাহলে দ্বিতীয়টা ঠিক করো।" },
      { speaker: "You", text: "চোখ খুলে থাকো।" },
      { speaker: "Sana", text: "খোলাই তো আছি।" },
      { speaker: "Narrator", text: "দ্বিতীয়টাতে তার চোখ বন্ধ।" },
      { speaker: "Sana", text: "আবার!" },
      { speaker: "You", text: "এবার স্থির থাকো।" },
      { speaker: "Sana", text: "স্থির আছি তো।" }
    ],
    choices: [
      {
        text: "তৃতীয়বারের জন্য প্রস্তুত হও",
        next: "ch1_s03",
        meterEffects: { sana: { love: 1, attraction: 2, trust: 2, intimacy: 0, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s03: {
    id: "ch1_s03",
    chapter: 1,
    title: "হাতের কোণ ঠিক করা",
    location: "haldi_courtyard",
    time: "Evening",
    character: "sana",
    emotion: "flustered",
    dialogue: [
      { speaker: "You", text: "এবার তৃতীয়টা।" },
      { speaker: "Sana", text: "দাঁড়াও, একটা জিনিস।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "কোণটা ঠিক না।" },
      { speaker: "You", text: "কোণ?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু বাঁকা ধরেছ।" },
      { speaker: "You", text: "আমি তো শখের ছবি তুলি।" },
      { speaker: "Sana", text: "তাই তো দেখা যাচ্ছে।" },
      { speaker: "Narrator", text: "সে এগিয়ে আসে তোমার কাছে।" },
      { speaker: "Sana", text: "দাও, আমি দেখাই।" },
      { speaker: "You", text: "তুমি ধরে নেবে?" },
      { speaker: "Sana", text: "না, তোমার হাত ঠিক করব।" },
      { speaker: "Narrator", text: "তার আঙুল তোমার হাতের ওপর।" },
      { speaker: "Narrator", text: "দুই সেকেন্ড, বেশি না।" },
      { speaker: "You", text: "(গলা শুকিয়ে) আ... আচ্ছা।" },
      { speaker: "Sana", text: "এইরকম, বুঝলে?" },
      { speaker: "You", text: "বুঝেছি।" },
      { speaker: "Sana", text: "তাহলে তোলো।" },
      { speaker: "Narrator", text: "তৃতীয় ছবিটা পরিষ্কার।" },
      { speaker: "Sana", text: "ওয়াও! এটা ভালো!" },
      { speaker: "You", text: "সত্যি?" },
      { speaker: "Sana", text: "হ্যাঁ, সেরাটা।" },
      { speaker: "You", text: "তাহলে দোষ ছিল না আমার।" },
      { speaker: "Sana", text: "ছিল, কিন্তু ঠিক হলো।" },
      { speaker: "You", text: "আর একটা তুলব?" },
      { speaker: "Sana", text: "না, এইটাই রাখো।" },
      { speaker: "You", text: "যেমন বলো।" },
      { speaker: "Sana", text: "(নেকলেস ঠিক করতে গিয়ে) একটা কথা।" },
      { speaker: "You", text: "বলো।" },
      { speaker: "Sana", text: "ছবিগুলো পাঠাবে আমাকে।" },
      { speaker: "You", text: "এখনই?" },
      { speaker: "Sana", text: "হ্যাঁ, এখনই।" }
    ],
    choices: [
      {
        text: "নম্বর চাও",
        next: "ch1_s04",
        meterEffects: { sana: { love: 2, attraction: 2, trust: 3, intimacy: 1, respect: 1, jealousy: 0 } }
      },
      {
        text: "একটু ইতস্তত করো",
        next: "ch1_s04",
        meterEffects: { sana: { love: 1, attraction: 1, trust: 1, intimacy: 0, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch1_s04: {
    id: "ch1_s04",
    chapter: 1,
    title: "নামটা যে ভুলোনি",
    location: "haldi_courtyard",
    time: "Evening",
    character: "sana",
    emotion: "curious",
    dialogue: [
      { speaker: "You", text: "নম্বর দাও তাহলে।" },
      { speaker: "Sana", text: "দেখো, ফোনটা দাও আগে।" },
      { speaker: "Narrator", text: "তুমি ফোন বাড়াও।" },
      { speaker: "Sana", text: "(নিজের নম্বর টাইপ করে) নাও।" },
      { speaker: "You", text: "থ্যাংকস।" },
      { speaker: "Narrator", text: "ঠিক তখন একটা গলা।" },
      { speaker: "Friend", text: "এই, কী করছিস এখানে?" },
      { speaker: "You", text: "ছবি তুলছিলাম।" },
      { speaker: "Friend", text: "কার ছবি?" },
      { speaker: "You", text: "এই... উনার।" },
      { speaker: "Friend", text: "(সানার দিকে তাকিয়ে) আরে!" },
      { speaker: "Friend", text: "পরিচয় করিয়ে দিই—" },
      { speaker: "Sana", text: "দরকার নেই।" },
      { speaker: "Friend", text: "কিন্তু—" },
      { speaker: "Sana", text: "ও নিজেই বলবে।" },
      { speaker: "Sana", text: "(তোমার দিকে) বলো, আমার নাম কী?" },
      { speaker: "You", text: "আমি... জানি না তো।" },
      { speaker: "Sana", text: "তাহলে আজ থেকে জানলে।" },
      { speaker: "Friend", text: "ওর নাম সানা।" },
      { speaker: "You", text: "সানা।" },
      { speaker: "Sana", text: "হ্যাঁ, সানা।" },
      { speaker: "You", text: "ভালো নাম।" },
      { speaker: "Sana", text: "জানি, ভালো।" },
      { speaker: "You", text: "(হাসি) অহংকারী।" },
      { speaker: "Sana", text: "অহংকার না, আত্মবিশ্বাস।" },
      { speaker: "You", text: "দুটোতে তফাত আছে?" },
      { speaker: "Sana", text: "আছে, শিখবি।" },
      { speaker: "Narrator", text: "দূর থেকে একটা ডাক।" },
      { speaker: "Mother", text: "সানা! এদিকে আয়!" },
      { speaker: "Sana", text: "(দাঁড়িয়ে) যাই তাহলে।" }
    ],
    choices: [
      {
        text: "ছবি পাঠানোর কথা মনে করিয়ে দাও",
        next: "ch1_s05",
        meterEffects: { sana: { love: 1, attraction: 1, trust: 2, intimacy: 0, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s05: {
    id: "ch1_s05",
    chapter: 1,
    title: "যাওয়ার আগে",
    location: "haldi_courtyard",
    time: "Evening",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "You", text: "ছবিগুলো পাঠাব তো।" },
      { speaker: "Sana", text: "হ্যাঁ, ভুলো না।" },
      { speaker: "You", text: "ভুলব না।" },
      { speaker: "Sana", text: "একটা প্রশ্ন?" },
      { speaker: "You", text: "পুছো।" },
      { speaker: "Sana", text: "শাড়িটা কার পছন্দ?" },
      { speaker: "You", text: "তোমার?" },
      { speaker: "Sana", text: "হ্যাঁ, আমার।" },
      { speaker: "You", text: "তাহলে তোমারই ভালো লাগা।" },
      { speaker: "Sana", text: "মা বলছিল লাল পরতে।" },
      { speaker: "You", text: "তুমি সবুজ পরলে।" },
      { speaker: "Sana", text: "হ্যাঁ, আমার মতো।" },
      { speaker: "You", text: "চুলের ফুলগুলো?" },
      { speaker: "Sana", text: "ছোট বোন দিয়েছে।" },
      { speaker: "You", text: "মানিয়েছে তো ভালো।" },
      { speaker: "Sana", text: "হ্যাঁ, ওর হাত ভালো।" },
      { speaker: "You", text: "আর তুমি এত গম্ভীর কেন?" },
      { speaker: "Sana", text: "গম্ভীর না, ভাবছিলাম।" },
      { speaker: "You", text: "কী নিয়ে?" },
      { speaker: "Sana", text: "তুমি এখানে একা কেন।" },
      { speaker: "You", text: "কাউকে চিনি না বলে।" },
      { speaker: "Sana", text: "তাহলে এখন চিনলে।" },
      { speaker: "You", text: "হ্যাঁ, চিনলাম।" },
      { speaker: "Sana", text: "(ফোন বাড়িয়ে) ছবি এখন পাঠাও।" },
      { speaker: "You", text: "এখানেই?" },
      { speaker: "Sana", text: "হ্যাঁ, এখন।" },
      { speaker: "You", text: "মানুষ দেখছে।" },
      { speaker: "Sana", text: "দেখুক, সমস্যা কী?" },
      { speaker: "You", text: "(হাসি) আচ্ছা, পাঠাচ্ছি।" }
    ],
    choices: [
      {
        text: "ছবি পাঠাও",
        next: "ch1_s06",
        meterEffects: { sana: { love: 2, attraction: 2, trust: 3, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s06: {
    id: "ch1_s06",
    chapter: 1,
    title: "বিদায়ের শর্ত",
    location: "haldi_gate",
    time: "Night",
    character: "sana",
    emotion: "teasing",
    dialogue: [
      { speaker: "Narrator", text: "ছবি পাঠালে।" },
      { speaker: "Sana", text: "(ফোন দেখে) হুম, ভালো।" },
      { speaker: "You", text: "তাহলে?" },
      { speaker: "Sana", text: "তাহলে একটা শর্ত।" },
      { speaker: "You", text: "আবার শর্ত?" },
      { speaker: "Sana", text: "হ্যাঁ, শুনো।" },
      { speaker: "You", text: "বলো।" },
      { speaker: "Sana", text: "কাল সকালে good morning বলবে।" },
      { speaker: "You", text: "এটাই শর্ত?" },
      { speaker: "Sana", text: "হ্যাঁ, আমি চেক করব।" },
      { speaker: "You", text: "চেক করবে?" },
      { speaker: "Sana", text: "হ্যাঁ, ভুললে জানি।" },
      { speaker: "You", text: "এত কড়া?" },
      { speaker: "Sana", text: "আমি কড়া না, সৎ।" },
      { speaker: "You", text: "ঠিক আছে, বলব।" },
      { speaker: "Sana", text: "হুম, ভালো ছেলে।" },
      { speaker: "You", text: "ছেলে?" },
      { speaker: "Sana", text: "তুমি তো ছোট ভাইয়ের মতো।" },
      { speaker: "You", text: "আমি ছোট না।" },
      { speaker: "Sana", text: "ব্যবহারে ছোট।" },
      { speaker: "You", text: "(হাসি) আচ্ছা।" },
      { speaker: "Narrator", text: "সে ঘুরে দাঁড়ায়।" },
      { speaker: "Sana", text: "যাচ্ছি তাহলে।" },
      { speaker: "You", text: "হ্যাঁ, যাও।" },
      { speaker: "Sana", text: "(পেছন ফিরে) ছবি বিক্রি করবে না।" },
      { speaker: "You", text: "বিক্রি করব কেন?" },
      { speaker: "Sana", text: "জানি না, ভয় লাগে।" },
      { speaker: "You", text: "ভয় পাবে না।" },
      { speaker: "Sana", text: "হুম, থাকো ভালো।" },
      { speaker: "Narrator", text: "সে ভিড়ে মিলিয়ে যায়।" },
      { speaker: "You", text: "(মনে মনে) সানা।" }
    ],
    choices: [
      {
        text: "বাড়ি ফেরো",
        next: "ch1_s07",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 2, intimacy: 0, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch1_s07: {
    id: "ch1_s07",
    chapter: 1,
    title: "রাত ১:৪৭",
    location: "your_room",
    time: "Night",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "ঘরে ঢুকে বিছানায় বসলে।" },
      { speaker: "Narrator", text: "ফোনটা হাতে নিয়ে বারবার দেখো।" },
      { speaker: "You", text: "(টাইপ করছি) হাই?" },
      { speaker: "You", text: "না, এটা বোকা লাগবে।" },
      { speaker: "You", text: "হ্যালো? আরও বোকা।" },
      { speaker: "Narrator", text: "অবশেষে পাঠালে—" },
      { speaker: "You", text: "ছবিগুলো ঠিক আছে তো?" },
      { speaker: "Narrator", text: "রিপ্লাই এলো তিন মিনিট পর।" },
      { speaker: "Sana", text: "এটা আমার জীবনের সেরা ছবি।" },
      { speaker: "You", text: "সেরা? এত তাড়াহুড়ো?" },
      { speaker: "Sana", text: "তুমি বিপদে পড়লে।" },
      { speaker: "You", text: "আমি? কীভাবে?" },
      { speaker: "Sana", text: "এখন আমাকে বারবার তোমার কাছে ছবি তুলতে হবে।" },
      { speaker: "You", text: "এটাই বিপদ?" },
      { speaker: "Sana", text: "হ্যাঁ, বড় বিপদ।" },
      { speaker: "You", text: "(হাসি) তাহলে বাঁচাও আমাকে।" },
      { speaker: "Sana", text: "বাঁচাব, শর্তে।" },
      { speaker: "You", text: "আবার শর্ত।" },
      { speaker: "Sana", text: "কথা বলো ভালো।" },
      { speaker: "You", text: "কীভাবে বলব?" },
      { speaker: "Sana", text: "যেমন আজ বললে।" },
      { speaker: "You", text: "মানে গম্ভীর?" },
      { speaker: "Sana", text: "না, সৎ।" },
      { speaker: "You", text: "আমি সবসময় সৎ।" },
      { speaker: "Sana", text: "দেখি, প্রমাণ করো।" },
      { speaker: "You", text: "কী দিয়ে প্রমাণ?" },
      { speaker: "Sana", text: "কাল good morning দিয়ে।" },
      { speaker: "You", text: "আবার সেই শর্ত।" },
      { speaker: "Sana", text: "হুম, ওটাই প্রধান।" }
    ],
    choices: [
      {
        text: "ঠিক আছে, প্রতিশ্রুতি দাও",
        next: "ch1_s08",
        meterEffects: { sana: { love: 3, attraction: 1, trust: 3, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s08: {
    id: "ch1_s08",
    chapter: 1,
    title: "খাবার আর কলেজ",
    location: "your_room",
    time: "Night",
    character: "sana",
    emotion: "happy",
    dialogue: [
      { speaker: "You", text: "প্রতিশ্রুতি দিলাম।" },
      { speaker: "Sana", text: "হুম, ভালো।" },
      { speaker: "Sana", text: "একটা কথা?" },
      { speaker: "You", text: "বলো।" },
      { speaker: "Sana", text: "তোমার পছন্দের খাবার কী?" },
      { speaker: "You", text: "হঠাৎ?" },
      { speaker: "Sana", text: "জানতে ইচ্ছে করছে।" },
      { speaker: "You", text: "বিরিয়ানি।" },
      { speaker: "Sana", text: "সবাই বলে বিরিয়ানি।" },
      { speaker: "You", text: "কারণ সত্যি।" },
      { speaker: "Sana", text: "আমার পছন্দ পানি পুরি।" },
      { speaker: "You", text: "ওটা তো সবসময় খাও।" },
      { speaker: "Sana", text: "জানো কীভাবে?" },
      { speaker: "You", text: "অনুমান।" },
      { speaker: "Sana", text: "ভালো অনুমান।" },
      { speaker: "You", text: "তুমি কী পড়ো?" },
      { speaker: "Sana", text: "সাহিত্য।" },
      { speaker: "You", text: "সাহিত্য?" },
      { speaker: "Sana", text: "হ্যাঁ, গল্প-কবিতা।" },
      { speaker: "You", text: "তাহলে কথাও ভালো বলো।" },
      { speaker: "Sana", text: "সেটা তোমাকে বলতে হবে না।" },
      { speaker: "You", text: "বলছি তো।" },
      { speaker: "Sana", text: "হুম, শুনছি।" },
      { speaker: "You", text: "প্রিয় লেখক?" },
      { speaker: "Sana", text: "রবীন্দ্রনাথ।" },
      { speaker: "You", text: "ক্লাসিক।" },
      { speaker: "Sana", text: "ক্লাসিক মানে সেরা।" },
      { speaker: "You", text: "একমত।" },
      { speaker: "Sana", text: "তুমি কী পড়ো?" },
      { speaker: "You", text: "আমি? প্রায়ই না।" },
      { speaker: "Sana", text: "তাহলে পড়া শুরু করো।" },
      { speaker: "You", text: "তোমার জন্য?" },
      { speaker: "Sana", text: "হুম, আমার জন্য।" }
    ],
    choices: [
      {
        text: "হাসি দিয়ে রাজি হও",
        next: "ch1_s09",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 2, intimacy: 1, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch1_s09: {
    id: "ch1_s09",
    chapter: 1,
    title: "দেরি হয়ে গেছে",
    location: "your_room",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "You", text: "ঠিক আছে, শুরু করব।" },
      { speaker: "Sana", text: "হুম, ভালো।" },
      { speaker: "Narrator", text: "ঘড়িতে তাকালে।" },
      { speaker: "You", text: "ওহ, কটা বাজল!" },
      { speaker: "Sana", text: "কী হলো?" },
      { speaker: "You", text: "রাত দুটো প্রায়।" },
      { speaker: "Sana", text: "তাহলে?" },
      { speaker: "You", text: "তুমি ঘুমাবে না?" },
      { speaker: "Sana", text: "ঘুমাব, একটু পরে।" },
      { speaker: "You", text: "একটু পরে মানে?" },
      { speaker: "Sana", text: "তোমার সাথে কথা শেষ হলে।" },
      { speaker: "You", text: "কথা তো অনেক হলো।" },
      { speaker: "Sana", text: "আরও হবে।" },
      { speaker: "You", text: "কালও হবে তো।" },
      { speaker: "Sana", text: "কাল সকালে good morning।" },
      { speaker: "You", text: "ওটা আলাদা বিষয়।" },
      { speaker: "Sana", text: "হুম, আলাদা।" },
      { speaker: "You", text: "তাহলে আজ ঘুমাও।" },
      { speaker: "Sana", text: "তুমি আগে।" },
      { speaker: "You", text: "আমি পরে।" },
      { speaker: "Sana", text: "লড়াই করো না।" },
      { speaker: "You", text: "আমি লড়ছি না।" },
      { speaker: "Sana", text: "তাহলে ঘুমাও।" },
      { speaker: "You", text: "ঠিক আছে, ঘুমাচ্ছি।" },
      { speaker: "Sana", text: "good night বলো।" },
      { speaker: "You", text: "good night, সানা।" },
      { speaker: "Sana", text: "হুম, good night।" },
      { speaker: "Sana", text: "স্বপ্নে দেখা হবে?" },
      { speaker: "You", text: "জানি না।" },
      { speaker: "Sana", text: "দেখবে, আমি থাকব।" },
      { speaker: "You", text: "(হাসি) থাকবে?" },
      { speaker: "Sana", text: "হুম, থাকব।" },
      { speaker: "Narrator", text: "ফোন রাখলে।" },
      { speaker: "Narrator", text: "বুক ধড়ফড় করছিল।" }
    ],
    choices: [
      {
        text: "চোখ বন্ধ করো",
        next: "ch1_s10",
        meterEffects: { sana: { love: 3, attraction: 2, trust: 2, intimacy: 2, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s10: {
    id: "ch1_s10",
    chapter: 1,
    title: "সকালের প্রতিশ্রুতি",
    location: "your_room",
    time: "Morning",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "সকালে চোখ খুললেই ফোন।" },
      { speaker: "Narrator", text: "মনে পড়ল শর্তটা।" },
      { speaker: "You", text: "(টাইপ করছি) good morning?" },
      { speaker: "You", text: "না, প্রশ্নবোধক বসাব না।" },
      { speaker: "You", text: "good morning, সানা।" },
      { speaker: "Narrator", text: "পাঠালে।" },
      { speaker: "Narrator", text: "রিপ্লাই এলো এক মিনিট পর।" },
      { speaker: "Sana", text: "হুম, চেক করলাম।" },
      { speaker: "You", text: "পাস পেলাম?" },
      { speaker: "Sana", text: "পাস, এক নম্বরে।" },
      { speaker: "You", text: "এত সকালে জাগো?" },
      { speaker: "Sana", text: "হ্যাঁ, অপেক্ষা করছিলাম।" },
      { speaker: "You", text: "আমার good morning এর?" },
      { speaker: "Sana", text: "হুম, ওরই।" },
      { speaker: "You", text: "(হাসি) অদ্ভুত তুমি।" },
      { speaker: "Sana", text: "অদ্ভুত না, আলাদা।" },
      { speaker: "You", text: "আলাদা ঠিক।" },
      { speaker: "Sana", text: "নাস্তা করেছ?" },
      { speaker: "You", text: "এখন করব।" },
      { speaker: "Sana", text: "কী খাবে?" },
      { speaker: "You", text: "চা আর টোস্ট।" },
      { speaker: "Sana", text: "সাধারণ।" },
      { speaker: "You", text: "তুমি কী খাও?" },
      { speaker: "Sana", text: "আমি? মুড়ি আর চা।" },
      { speaker: "You", text: "ওটাও সাধারণ।" },
      { speaker: "Sana", text: "সাধারণ-ই তো ভালো।" },
      { speaker: "You", text: "একমত আবার।" },
      { speaker: "Sana", text: "আমরা মিলছি নাকি?" },
      { speaker: "You", text: "জানি না, দেখা যাক।" },
      { speaker: "Sana", text: "দেখব, আমি আছি।" }
    ],
    choices: [
      {
        text: "সারাদিন কথা বলার প্রস্তাব দাও",
        next: "ch1_s11",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 3, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch1_s11: {
    id: "ch1_s11",
    chapter: 1,
    title: "দিন গড়ালো",
    location: "your_room",
    time: "Afternoon",
    character: "sana",
    emotion: "playful",
    dialogue: [
      { speaker: "You", text: "সারাদিন কথা হবে?" },
      { speaker: "Sana", text: "হ্যাঁ, যদি বিরক্ত না হও।" },
      { speaker: "You", text: "বিরক্ত হব কেন?" },
      { speaker: "Sana", text: "মানুষ তো বিরক্ত হয়।" },
      { speaker: "You", text: "আমি হব না।" },
      { speaker: "Sana", text: "হুম, বিশ্বাস করলাম।" },
      { speaker: "Narrator", text: "দুপুরে একটা ছবি পাঠাল সে।" },
      { speaker: "Sana", text: "দেখো, আজ কী পরেছি।" },
      { speaker: "You", text: "নীল কুর্তি?" },
      { speaker: "Sana", text: "হ্যাঁ, ভালো লাগছে?" },
      { speaker: "You", text: "ভালো, তোমার মতো।" },
      { speaker: "Sana", text: "আমার মতো মানে?" },
      { speaker: "You", text: "সাদা, সরল।" },
      { speaker: "Sana", text: "(হাসি) সরল?" },
      { speaker: "You", text: "না, জটিল না।" },
      { speaker: "Sana", text: "আমি জটিল?" },
      { speaker: "You", text: "তুমি আলাদা, বললাম তো।" },
      { speaker: "Sana", text: "আলাদা-ই ভালো।" },
      { speaker: "You", text: "হ্যাঁ, ভালো।" },
      { speaker: "Narrator", text: "বিকেলে সে উদাস লাগল।" },
      { speaker: "You", text: "কী হয়েছে?" },
      { speaker: "Sana", text: "কিছু না, একটু ক্লান্ত।" },
      { speaker: "You", text: "কাজ বেশি?" },
      { speaker: "Sana", text: "হ্যাঁ, আর একা।" },
      { speaker: "You", text: "একা?" },
      { speaker: "Sana", text: "হুম, বাড়িতে সব ব্যস্ত।" },
      { speaker: "You", text: "আমি আছি তো।" },
      { speaker: "Sana", text: "তুমি?" },
      { speaker: "You", text: "হ্যাঁ, কথা বলি।" },
      { speaker: "Sana", text: "(নরম গলা) হুম, বলো।" },
      { speaker: "Narrator", text: "সেদিন রাতে ঘুম আসেনি ভালো।" },
      { speaker: "Narrator", text: "কিন্তু মনটা হালকা ছিল।" }
    ],
    choices: [
      {
        text: "পরদিনের কথা ভাবো",
        next: "ch1_s12",
        meterEffects: { sana: { love: 3, attraction: 1, trust: 4, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch1_s12: {
    id: "ch1_s12",
    chapter: 1,
    title: "অধ্যায় ১ সমাপ্ত",
    location: "your_room",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "হলুদের ভিড় থেকে শুরু হওয়া একটা ছোট্ট আলাপ, এখন প্রতিদিনের অপেক্ষায় বদলে গেছে।" },
      { speaker: "Sana", text: "কাল দেখা হচ্ছে তো?" },
      { speaker: "Narrator", text: "প্রথম অধ্যায় এখানেই শেষ। এবার শুরু হচ্ছে দ্বিতীয় অধ্যায়..." }
    ],
    choices: [
      {
        text: "অধ্যায় ২ শুরু করো",
        next: "ch2_s01",
        meterEffects: { sana: { love: 1, trust: 1 } }
      }
    ]
  },

  // ================= CHAPTER 2 =================
  ch2_s01: {
    id: "ch2_s01",
    chapter: 2,
    title: "তারিখের সকাল",
    location: "your_room",
    time: "Morning",
    character: null,
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "আজ যে তারিখ, সেটা জানো।" },
      { speaker: "Narrator", text: "কফির কথা হয়েছিল কাল।" },
      { speaker: "You", text: "(বিছানায় শুয়ে) উঠব কি?" },
      { speaker: "You", text: "না উঠলে দেরি হবে।" },
      { speaker: "You", text: "কিন্তু মুখ ধুয়েও কিছু থাকবে না।" },
      { speaker: "Narrator", text: "ফোনটা হাতে নিলে।" },
      { speaker: "You", text: "(টাইপ) গুড মর্নিং।" },
      { speaker: "You", text: "আজ রেডি?" },
      { speaker: "Narrator", text: "রিপ্লাই এলো দ্রুত।" },
      { speaker: "Sana", text: "গুড মর্নিং!" },
      { speaker: "Sana", text: "রেডি মানে?" },
      { speaker: "You", text: "মানে, বেরোবে তো?" },
      { speaker: "Sana", text: "হ্যাঁ, বেরোব।" },
      { speaker: "Sana", text: "তুমি ভয় পাচ্ছ?" },
      { speaker: "You", text: "ভয়? না।" },
      { speaker: "Sana", text: "মিথ্যা।" },
      { speaker: "You", text: "একটু।" },
      { speaker: "Sana", text: "একটু মানে অনেক।" },
      { speaker: "You", text: "ঠিক আছে, অনেক।" },
      { speaker: "Sana", text: "ভালো, সৎ।" },
      { speaker: "Sana", text: "আমিও ভয় পাচ্ছি।" },
      { speaker: "You", text: "তুমি?" },
      { speaker: "Sana", text: "হ্যাঁ, একা দেখা হবে।" },
      { speaker: "You", text: "আগে তো দেখা হয়েছে।" },
      { speaker: "Sana", text: "ওটা ভিড়ের মধ্যে।" },
      { speaker: "Sana", text: "আজ দুজনে।" },
      { speaker: "You", text: "সেটাই তো চাই।" },
      { speaker: "Sana", text: "হুম, আমিও।" }
    ],
    choices: [
      {
        text: "সময় ঠিক করে দাও",
        next: "ch2_s02",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 2, intimacy: 0, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch2_s02: {
    id: "ch2_s02",
    chapter: 2,
    title: "পোশাকের ছবি",
    location: "your_room",
    time: "Morning",
    character: "sana",
    emotion: "playful",
    dialogue: [
      { speaker: "You", text: "তাহলে সাড়ে বারো?" },
      { speaker: "Sana", text: "ঠিক আছে।" },
      { speaker: "Sana", text: "ক্যাফের সামনে?" },
      { speaker: "You", text: "হ্যাঁ, সামনেই।" },
      { speaker: "Sana", text: "দাঁড়াও, একটা জিনিস।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "(ছবি পাঠালো) দেখো।" },
      { speaker: "Narrator", text: "সাদা কুর্তি, নীল জিন্স।" },
      { speaker: "Narrator", text: "চুলে দুটো ফুল।" },
      { speaker: "You", text: "ওহ।" },
      { speaker: "Sana", text: "ওহ মানে?" },
      { speaker: "You", text: "মানে, ভালো।" },
      { speaker: "Sana", text: "শুধু ভালো?" },
      { speaker: "You", text: "খুব ভালো।" },
      { speaker: "Sana", text: "হুম, এটাই শুনতে চাই।" },
      { speaker: "You", text: "তুমি সবসময় ভালো।" },
      { speaker: "Sana", text: "এটা বেশি।" },
      { speaker: "Sana", text: "বাঁচাও।" },
      { speaker: "You", text: "সত্যি বলছি।" },
      { speaker: "Sana", text: "জানি।" },
      { speaker: "Sana", text: "তাই তো ভয় লাগে।" },
      { speaker: "You", text: "কেন?" },
      { speaker: "Sana", text: "সত্যি শুনলে অভ্যেস হয়।" },
      { speaker: "You", text: "হলে অভ্যেস করো।" },
      { speaker: "Sana", text: "(হাসি) তুমি পারবে?" },
      { speaker: "You", text: "চেষ্টা করব।" },
      { speaker: "Sana", text: "হুম, দেখছি।" },
      { speaker: "Sana", text: "এখন যাও রেডি হও।" }
    ],
    choices: [
      {
        text: "রেডি হতে যাও",
        next: "ch2_s03",
        meterEffects: { sana: { love: 2, attraction: 3, trust: 2, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch2_s03: {
    id: "ch2_s03",
    chapter: 2,
    title: "ক্যাফের সামনে",
    location: "cafe_front",
    time: "Afternoon",
    character: null,
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "সাড়ে বারোর আগে পৌঁছালে।" },
      { speaker: "Narrator", text: "ভেবেছিলে দেরি করবে।" },
      { speaker: "You", text: "(দাঁড়িয়ে) একটু তাড়াতাড়ি।" },
      { speaker: "You", text: "কিন্তু ভালোই।" },
      { speaker: "Narrator", text: "রাস্তার দিকে তাকিয়ে।" },
      { speaker: "You", text: "আসবে তো?" },
      { speaker: "You", text: "পালাবে না?" },
      { speaker: "Narrator", text: "তখনই দেখলে।" },
      { speaker: "Narrator", text: "সাদা কুর্তি, দূর থেকে।" },
      { speaker: "Narrator", text: "হাঁটছে, মাথা নিচু।" },
      { speaker: "You", text: "(মনে) এটাই সে।" },
      { speaker: "Narrator", text: "সে কাছে এলো।" },
      { speaker: "Sana", text: "তাড়াতাড়ি এসেছ?" },
      { speaker: "You", text: "হ্যাঁ, একটু।" },
      { speaker: "Sana", text: "আমিও তাড়াতাড়ি।" },
      { speaker: "Sana", text: "ঘুরে ঘুরে এলাম।" },
      { speaker: "You", text: "ভয় ছিল?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু।" },
      { speaker: "You", text: "আমারও।" },
      { speaker: "Sana", text: "তাহলে সমান।" },
      { speaker: "You", text: "হুম, সমান।" },
      { speaker: "Sana", text: "চলো ভেতরে?" },
      { speaker: "You", text: "হ্যাঁ, চলো।" },
      { speaker: "Narrator", text: "দুজনে ঢুকলে।" },
      { speaker: "Narrator", text: "কাঁধে কাঁধ মিলিয়ে।" },
      { speaker: "Narrator", text: "ছোঁয়া নয়, কিন্তু কাছে।" }
    ],
    choices: [
      {
        text: "ভেতরে যাও",
        next: "ch2_s04",
        meterEffects: { sana: { love: 2, attraction: 2, trust: 2, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch2_s04: {
    id: "ch2_s04",
    chapter: 2,
    title: "প্রথম ছাপ",
    location: "cafe_inside",
    time: "Afternoon",
    character: "sana",
    emotion: "shy",
    dialogue: [
      { speaker: "Narrator", text: "একটা কোণার টেবিল নিলে।" },
      { speaker: "Sana", text: "(বসে) এখানে ভালো?" },
      { speaker: "You", text: "হ্যাঁ, শান্ত।" },
      { speaker: "Sana", text: "আমি শান্ত পছন্দ করি।" },
      { speaker: "You", text: "জানি, সাহিত্য পড়ো।" },
      { speaker: "Sana", text: "মনে রাখো?" },
      { speaker: "You", text: "হ্যাঁ, মনে রাখি।" },
      { speaker: "Sana", text: "(চোখ নামিয়ে) ভালো।" },
      { speaker: "You", text: "মেনু দেখবে?" },
      { speaker: "Sana", text: "হ্যাঁ, দেখি।" },
      { speaker: "Narrator", text: "সে মেনু নিল।" },
      { speaker: "Narrator", text: "আঙুলগুলো কাঁপছিল সামান্য।" },
      { speaker: "You", text: "নার্ভাস?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু।" },
      { speaker: "Sana", text: "তুমি দেখছ বলে।" },
      { speaker: "You", text: "দেখব তো, অভ্যেস করো।" },
      { speaker: "Sana", text: "(হাসি) তুমি কঠিন।" },
      { speaker: "You", text: "না, সৎ।" },
      { speaker: "Sana", text: "হুম, সৎই কঠিন।" },
      { speaker: "Sana", text: "আমি কফি নেব।" },
      { speaker: "You", text: "আমিও।" },
      { speaker: "Sana", text: "আর কিছু খাবে?" },
      { speaker: "You", text: "কেক চাই?" },
      { speaker: "Sana", text: "চকোলেট?" },
      { speaker: "You", text: "হ্যাঁ, চকোলেট।" },
      { speaker: "Sana", text: "ঠিক আছে, অর্ডার করি।" },
      { speaker: "You", text: "না, আমি করি।" },
      { speaker: "Sana", text: "কেন?" },
      { speaker: "You", text: "আজ আমার দিন।" },
      { speaker: "Sana", text: "হুম, তোমার দিন।" }
    ],
    choices: [
      {
        text: "ওয়েটারকে ডাকো",
        next: "ch2_s05",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 2, intimacy: 1, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch2_s05: {
    id: "ch2_s05",
    chapter: 2,
    title: "অর্ডার আর বরফ গলা",
    location: "cafe_inside",
    time: "Afternoon",
    character: "sana",
    emotion: "happy",
    dialogue: [
      { speaker: "You", text: "দুটো কফি, একটা কেক।" },
      { speaker: "You", text: "চকোলেট।" },
      { speaker: "Waiter", text: "আর কিছু?" },
      { speaker: "Sana", text: "না, এইটুকু।" },
      { speaker: "Narrator", text: "ওয়েটার গেল।" },
      { speaker: "Narrator", text: "আবার দুজনে, একা।" },
      { speaker: "Sana", text: "চুপ কেন?" },
      { speaker: "You", text: "ভাবছি।" },
      { speaker: "Sana", text: "কী?" },
      { speaker: "You", text: "কথা বলব কী।" },
      { speaker: "Sana", text: "আমারও।" },
      { speaker: "You", text: "তাহলে সমস্যা সমান।" },
      { speaker: "Sana", text: "হুম, সমান।" },
      { speaker: "Sana", text: "শুরু করো তুমি।" },
      { speaker: "You", text: "ঠিক আছে।" },
      { speaker: "You", text: "পড়াশোনা কেমন?" },
      { speaker: "Sana", text: "ভালো, বোরিং।" },
      { speaker: "You", text: "বোরিং?" },
      { speaker: "Sana", text: "হ্যাঁ, একঘেয়ে।" },
      { speaker: "Sana", text: "কিন্তু গল্প পড়ি।" },
      { speaker: "Sana", text: "সেটা বোরিং না।" },
      { speaker: "You", text: "কোন গল্প?" },
      { speaker: "Sana", text: "আজকাল একটা নতুন।" },
      { speaker: "Sana", text: "লেখিকা নতুন।" },
      { speaker: "You", text: "মেয়ে লেখিকা?" },
      { speaker: "Sana", text: "হ্যাঁ, কেন?" },
      { speaker: "You", text: "না, জিজ্ঞেস করলাম।" },
      { speaker: "Sana", text: "(চোখ সরু) ভয়?" },
      { speaker: "You", text: "ভয় না, কৌতূহল।" },
      { speaker: "Sana", text: "হুম, কৌতূহল ঠিক।" }
    ],
    choices: [
      {
        text: "হাসি দিয়ে চালিয়ে যাও",
        next: "ch2_s06",
        meterEffects: { sana: { love: 1, attraction: 1, trust: 2, intimacy: 1, respect: 1, jealousy: 1 } }
      }
    ]
  },

  ch2_s06: {
    id: "ch2_s06",
    chapter: 2,
    title: "কফি এলো (পরবর্তী অংশ আসছে)",
    location: "cafe_inside",
    time: "Afternoon",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "কফি আর কেক এলো।" },
      { speaker: "Sana", text: "ওয়াও, সুন্দর।" },
      { speaker: "You", text: "খাবে?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু।" },
      { speaker: "Narrator", text: "সে চামচ নিল।" },
      { speaker: "Narrator", text: "প্রথম কামড়, চোখ বন্ধ।" },
      { speaker: "Sana", text: "মম।" },
      { speaker: "You", text: "ভালো?" },
      { speaker: "Sana", text: "খুব।" },
      { speaker: "Sana", text: "তুমিও নাও।" },
      { speaker: "You", text: "আমি কফি খাই আগে।" },
      { speaker: "Sana", text: "হুম, খাও।" },
      { speaker: "Narrator", text: "ডেটের বিকেল গড়িয়ে সন্ধ্যা নামে, এরপর দুজনে ছাদে যাও।" }
    ],
    choices: [
      {
        text: "ছাদে যাও (অধ্যায় ২.৫)",
        next: "ch2_5_s01",
        meterEffects: { sana: { love: 1, trust: 1 } }
      }
    ]
  },

  // ================= CHAPTER 2.5 =================
  ch2_5_s01: {
    id: "ch2_5_s01",
    chapter: 2.5,
    title: "ডেটের পর ছাদে",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "ডেট শেষে ছাদে এসেছো।" },
      { speaker: "Narrator", text: "নিচে শহরের আলো।" },
      { speaker: "Narrator", text: "সানা পাশে বসা।" },
      { speaker: "Sana", text: "চুপ কেন?" },
      { speaker: "You", text: "কিছু না।" },
      { speaker: "Sana", text: "মিথ্যা।" },
      { speaker: "You", text: "কী মিথ্যা?" },
      { speaker: "Sana", text: "তোর মুখ বলছে।" },
      { speaker: "You", text: "মুখ কী বলে?" },
      { speaker: "Sana", text: "ভয়।" },
      { speaker: "You", text: "ভয়?" },
      { speaker: "Sana", text: "হ্যাঁ।" },
      { speaker: "You", text: "কার ভয়?" },
      { speaker: "Sana", text: "আমার ভয় লাগে যখন তুই চুপ থাকিস।" },
      { speaker: "You", text: "সরি।" },
      { speaker: "Sana", text: "বল কেন চুপ ছিলি।" },
      { speaker: "You", text: "ভাবছিলাম।" },
      { speaker: "Sana", text: "কী নিয়ে?" },
      { speaker: "You", text: "আমাদের নিয়ে।" },
      { speaker: "Sana", text: "আমাদের কী হয়েছে?" },
      { speaker: "You", text: "কিছু হয়নি, হচ্ছে।" },
      { speaker: "Sana", text: "হওয়াটা খারাপ?" },
      { speaker: "You", text: "না, ভালো।" },
      { speaker: "Sana", text: "তাহলে ভয় কিসের?" },
      { speaker: "You", text: "আমি যাতে তোকে কষ্ট না দিই।" },
      { speaker: "Sana", text: "এইটাই ভয়?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তুই পাগল।" },
      { speaker: "You", text: "পাগল না, সিরিয়াস।" },
      { speaker: "Sana", text: "সিরিয়াস ভালো।" }
    ],
    choices: [
      {
        text: "তার হাত ধরো",
        next: "ch2_5_s02",
        meterEffects: {
          sana: { love: 2, attraction: 1, trust: 2, intimacy: 0, respect: 1, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s02: {
    id: "ch2_5_s02",
    chapter: 2.5,
    title: "হাতের উষ্ণতা",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "তুই তার হাত ধরিস।" },
      { speaker: "Sana", text: "ঠান্ডা হাত।" },
      { speaker: "You", text: "গরম করব?" },
      { speaker: "Sana", text: "হ্যাঁ।" },
      { speaker: "You", text: "কাছে আয়।" },
      { speaker: "Sana", text: "কাছেই তো আছি।" },
      { speaker: "You", text: "মানে হৃদয়ে।" },
      { speaker: "Sana", text: "ওফ।" },
      { speaker: "You", text: "সত্যি।" },
      { speaker: "Sana", text: "তুই মাঝে মাঝে কবি হয়ে যাস।" },
      { speaker: "You", text: "তোর সামনে।" },
      { speaker: "Sana", text: "কেন?" },
      { speaker: "You", text: "তুই প্রেরণা।" },
      { speaker: "Sana", text: "প্রেরণা? বড় কথা।" },
      { speaker: "You", text: "বড়ই।" },
      { speaker: "Sana", text: "আচ্ছা, কী ভাবছিলি সিরিয়াসলি?" },
      { speaker: "You", text: "আমরা কতটা নিরাপদ।" },
      { speaker: "Sana", text: "নিরাপদ?" },
      { speaker: "You", text: "হ্যাঁ, মন দিয়ে।" },
      { speaker: "Sana", text: "মন তো ভালো আছে।" },
      { speaker: "You", text: "শুধু মন না।" },
      { speaker: "Sana", text: "মানে শরীর?" },
      { speaker: "You", text: "শরীরও, কিন্তু ভয় না।" },
      { speaker: "Sana", text: "কিসের ভয়?" },
      { speaker: "You", text: "যদি একদিন সব বদলে যায়।" },
      { speaker: "Sana", text: "বদলাবে?" },
      { speaker: "You", text: "মানুষ বদলায়।" },
      { speaker: "Sana", text: "আমি বদলাব না।" },
      { speaker: "You", text: "কথা দিবি?" },
      { speaker: "Sana", text: "কথা দিচ্ছি, তবে একটা শর্ত।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "তুইও বদলাবি না।" }
    ],
    choices: [
      {
        text: "রাজি হও",
        next: "ch2_5_s03",
        meterEffects: {
          sana: { love: 2, attraction: 0, trust: 3, intimacy: 0, respect: 2, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s03: {
    id: "ch2_5_s03",
    chapter: 2.5,
    title: "সীমানার কথা",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "serious",
    dialogue: [
      { speaker: "You", text: "রাজি।" },
      { speaker: "Sana", text: "আবার শর্ত?" },
      { speaker: "You", text: "না, মানে একটা কথা।" },
      { speaker: "Sana", text: "বল।" },
      { speaker: "You", text: "আমি চাই আমরা তাড়াহুড়ো না করি।" },
      { speaker: "Sana", text: "তাড়াহুড়ো?" },
      { speaker: "You", text: "হ্যাঁ, শরীরের ব্যাপারে।" },
      { speaker: "Sana", text: "আমিও চাই না।" },
      { speaker: "You", text: "সত্যি?" },
      { speaker: "Sana", text: "তোর সাথে প্রথমবার ভয় লাগে।" },
      { speaker: "You", text: "আমাকেও।" },
      { speaker: "Sana", text: "তোকে দেখে মনে হয় না।" },
      { speaker: "You", text: "মনে হয় না কারণ আমি চুপ থাকি।" },
      { speaker: "Sana", text: "আজ থাক না।" },
      { speaker: "You", text: "থাকব না, বলব।" },
      { speaker: "Sana", text: "বল।" },
      { speaker: "You", text: "আমি চাই তুই নিরাপদ থাকিস।" },
      { speaker: "Sana", text: "কীভাবে?" },
      { speaker: "You", text: "কথা বলে, সীমানা রেখে।" },
      { speaker: "Sana", text: "সীমানা।" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "ভালো কথা।" },
      { speaker: "You", text: "তোর সীমানা কী?" },
      { speaker: "Sana", text: "আমি যা না চাই, সেটা নয়।" },
      { speaker: "You", text: "এবং?" },
      { speaker: "Sana", text: "এবং যদি না বলি, থামবি।" },
      { speaker: "You", text: "থামব।" },
      { speaker: "Sana", text: "যদি ইতস্তত করি?" },
      { speaker: "You", text: "জিজ্ঞেস করব।" },
      { speaker: "Sana", text: "যদি কাঁদি?" },
      { speaker: "You", text: "জড়িয়ে ধরব, কিছু চাইব না।" },
      { speaker: "Sana", text: "এটাই সীমানা?" },
      { speaker: "You", text: "হ্যাঁ, এটাই মূল।" }
    ],
    choices: [
      {
        text: "মাথা নাড়ো",
        next: "ch2_5_s04",
        meterEffects: {
          sana: { love: 1, attraction: 0, trust: 3, intimacy: 1, respect: 4, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s04: {
    id: "ch2_5_s04",
    chapter: 2.5,
    title: "প্রোটেকশনের দায়িত্ব",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "সানা একটু নড়ে বসে।" },
      { speaker: "Sana", text: "আর একটা কথা।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "যদি গর্ভের ভয় থাকে?" },
      { speaker: "You", text: "হবে না।" },
      { speaker: "Sana", text: "কেউ কেউ বলে।" },
      { speaker: "You", text: "আমি দায়িত্ব নেব।" },
      { speaker: "Sana", text: "কীভাবে?" },
      { speaker: "You", text: "প্রোটেকশন।" },
      { speaker: "Sana", text: "কনডম?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তুই কিনবি?" },
      { speaker: "You", text: "আমি কিনব, লজ্জা কিসের?" },
      { speaker: "Sana", text: "লজ্জা না, কিন্তু..." },
      { speaker: "You", text: "কিন্তু?" },
      { speaker: "Sana", text: "সবাই বলে ছেলেরা ভাবে না।" },
      { speaker: "You", text: "আমি ভাবি।" },
      { speaker: "Sana", text: "প্রমাণ?" },
      { speaker: "You", text: "আজ এই কথাটাই প্রমাণ।" },
      { speaker: "Sana", text: "হ্যাঁ।" },
      { speaker: "You", text: "আর যদি তুই চাস অন্য কিছু?" },
      { speaker: "Sana", text: "কী?" },
      { speaker: "You", text: "ডাক্তারের পরামর্শ।" },
      { speaker: "Sana", text: "আমি ভাবিনি।" },
      { speaker: "You", text: "ভাববি, আমি পাশে থাকব।" },
      { speaker: "Sana", text: "তুই সত্যি আলাদা।" },
      { speaker: "You", text: "তোর জন্য।" },
      { speaker: "Sana", text: "সবসময়?" },
      { speaker: "You", text: "যতদিন তুই চাস।" }
    ],
    choices: [
      {
        text: "চোখে চোখ রাখো",
        next: "ch2_5_s05",
        meterEffects: {
          sana: { love: 2, attraction: 0, trust: 3, intimacy: 0, respect: 2, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s05: {
    id: "ch2_5_s05",
    chapter: 2.5,
    title: "স্বাস্থ্য আর গোপনীয়তা",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Sana", text: "আর একটা ভয়।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "রোগ।" },
      { speaker: "You", text: "আমরা দুজনেই টেস্ট করাব?" },
      { speaker: "Sana", text: "হ্যাঁ, যদি সম্ভব হয়।" },
      { speaker: "You", text: "সম্ভব।" },
      { speaker: "Sana", text: "তুই ভয় পাস না?" },
      { speaker: "You", text: "পাই, কিন্তু সত্যিটা ভালো।" },
      { speaker: "Sana", text: "সত্যিই।" },
      { speaker: "You", text: "আমরা গোপন রাখব।" },
      { speaker: "Sana", text: "গোপন না, শুধু আমাদের।" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তুই কি অন্য কারো সাথে...?" },
      { speaker: "You", text: "না।" },
      { speaker: "Sana", text: "কথা দে।" },
      { speaker: "You", text: "কথা দিচ্ছি।" },
      { speaker: "Sana", text: "যদি মিথ্যা বলি?" },
      { speaker: "You", text: "তুই মিথ্যা বলবি না।" },
      { speaker: "Sana", text: "জানি না।" },
      { speaker: "You", text: "জানিস, তুই সৎ।" },
      { speaker: "Sana", text: "তোর বিশ্বাস আমাকে বাঁচায়।" },
      { speaker: "You", text: "আমি বাঁচাতে চাই না, সাথে থাকতে চাই।" },
      { speaker: "Sana", text: "সাথে?" },
      { speaker: "You", text: "হ্যাঁ, সমান।" },
      { speaker: "Sana", text: "সমান ভালো শব্দ।" },
      { speaker: "You", text: "তোর জন্য সব শব্দ ভালো।" },
      { speaker: "Sana", text: "আবার কবি।" },
      { speaker: "You", text: "আজ চলতে দে।" },
      { speaker: "Sana", text: "হ্যাঁ, চলতে দে।" }
    ],
    choices: [
      {
        text: "হাসো",
        next: "ch2_5_s06",
        meterEffects: {
          sana: { love: 2, attraction: 1, trust: 2, intimacy: 0, respect: 1, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s06: {
    id: "ch2_5_s06",
    chapter: 2.5,
    title: "চাওয়া আর থামা",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "playful",
    dialogue: [
      { speaker: "Narrator", text: "দুজনে হাসো।" },
      { speaker: "Sana", text: "আচ্ছা, একটা প্রশ্ন।" },
      { speaker: "You", text: "জিজ্ঞেস কর।" },
      { speaker: "Sana", text: "তুই আমাকে কতটা চাস?" },
      { speaker: "You", text: "অনেক।" },
      { speaker: "Sana", text: "অনেক কত?" },
      { speaker: "You", text: "যতটা নিরাপদে চাওয়া যায়।" },
      { speaker: "Sana", text: "উত্তরটা স্মার্ট।" },
      { speaker: "You", text: "তোর সামনে স্মার্ট হতে হয়।" },
      { speaker: "Sana", text: "আর যদি আমি নিরাপদ না চাই?" },
      { speaker: "You", text: "তাহলে আমি থামব।" },
      { speaker: "Sana", text: "সবসময়?" },
      { speaker: "You", text: "সবসময়।" },
      { speaker: "Sana", text: "তুই কি চাইলেই থামতে পারবি?" },
      { speaker: "You", text: "পারব, তোর জন্য।" },
      { speaker: "Sana", text: "দেখাবি?" },
      { speaker: "You", text: "দেখাব।" },
      { speaker: "Sana", text: "আজ না?" },
      { speaker: "You", text: "আজ কথা দিলাম, পরে দেখাব।" },
      { speaker: "Sana", text: "পরে কবে?" },
      { speaker: "You", text: "যখন তুই প্রস্তুত।" },
      { speaker: "Sana", text: "আমি কি প্রস্তুত?" },
      { speaker: "You", text: "সেটা তুই বলবি, আমি না।" },
      { speaker: "Sana", text: "ভালো নিয়ম।" },
      { speaker: "You", text: "আমাদের নিয়ম।" },
      { speaker: "Sana", text: "আমাদের?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "আচ্ছা।" }
    ],
    choices: [
      {
        text: "নরম করে মাথায় হাত বোলাও",
        next: "ch2_5_s07",
        meterEffects: {
          sana: { love: 2, attraction: 1, trust: 2, intimacy: 2, respect: 1, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s07: {
    id: "ch2_5_s07",
    chapter: 2.5,
    title: "শরীরের আগে মন",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "তুই তার চুলে হাত বোলাস।" },
      { speaker: "Sana", text: "আরাম লাগে।" },
      { speaker: "You", text: "ভালো।" },
      { speaker: "Sana", text: "তুই কি আমাকে শুধু শরীর হিসেবে দেখিস?" },
      { speaker: "You", text: "না।" },
      { speaker: "Sana", text: "কেন বললি না?" },
      { speaker: "You", text: "কারণ তুই আমার চোখ, কথা, হাসি।" },
      { speaker: "Sana", text: "আর?" },
      { speaker: "You", text: "আর ভয়, সাহস, একাকীত্ব।" },
      { speaker: "Sana", text: "তুই সব দেখিস?" },
      { speaker: "You", text: "দেখি, কারণ তুই আমাকে দেখাতে দিস।" },
      { speaker: "Sana", text: "আমি দেখাতে চাই।" },
      { speaker: "You", text: "তাহলে আমরা শরীরের আগে মন বুঝি।" },
      { speaker: "Sana", text: "মন তো বুঝেছি।" },
      { speaker: "You", text: "শরীরও বুঝতে হবে।" },
      { speaker: "Sana", text: "কীভাবে?" },
      { speaker: "You", text: "স্পর্শে, কথাতে, থেমে থেমে।" },
      { speaker: "Sana", text: "থেমে থেমে?" },
      { speaker: "You", text: "হ্যাঁ, প্রতিবার জিজ্ঞেস করে।" },
      { speaker: "Sana", text: "ঠিক আছে?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "আমিও জিজ্ঞেস করব।" },
      { speaker: "You", text: "ভালো।" },
      { speaker: "Sana", text: "তুই কি ঘাবড়াস?" },
      { speaker: "You", text: "ঘাবড়াই।" },
      { speaker: "Sana", text: "লজ্জা?" },
      { speaker: "You", text: "না, ভালোবাসা।" }
    ],
    choices: [
      {
        text: "নরম চুমু দাও",
        next: "ch2_5_s08",
        meterEffects: {
          sana: { love: 3, attraction: 3, trust: 2, intimacy: 3, respect: 1, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s08: {
    id: "ch2_5_s08",
    chapter: 2.5,
    title: "থামার সাহস",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "নরম চুমু।" },
      { speaker: "Sana", text: "থাম।" },
      { speaker: "You", text: "থামলাম।" },
      { speaker: "Sana", text: "তুই থামলি?" },
      { speaker: "You", text: "তুই বললি।" },
      { speaker: "Sana", text: "হ্যাঁ, দেখলাম।" },
      { speaker: "You", text: "দেখাটাই তো সীমানা।" },
      { speaker: "Sana", text: "তুই আমাকে শেখাচ্ছিস?" },
      { speaker: "You", text: "শেখাচ্ছি না, শিখছি।" },
      { speaker: "Sana", text: "শিখিস?" },
      { speaker: "You", text: "তোর কাছ থেকে।" },
      { speaker: "Sana", text: "আচ্ছা।" },
      { speaker: "You", text: "আবার চাই?" },
      { speaker: "Sana", text: "না, এখন না।" },
      { speaker: "You", text: "ঠিক আছে।" },
      { speaker: "Sana", text: "তুই রাগ করিস না?" },
      { speaker: "You", text: "রাগ কিসের?" },
      { speaker: "Sana", text: "আমি না বললাম।" },
      { speaker: "You", text: "না বলাই স্বাভাবিক।" },
      { speaker: "Sana", text: "তুই সত্যিই আলাদা।" },
      { speaker: "You", text: "তুইও।" },
      { speaker: "Sana", text: "আচ্ছা, একটা কথা।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "যদি একদিন আমি চাই, তুই কি প্রস্তুত থাকবি?" },
      { speaker: "You", text: "প্রস্তুত থাকব, কিন্তু চাপ দেব না।" },
      { speaker: "Sana", text: "চাপ না, সাথে।" },
      { speaker: "You", text: "হ্যাঁ, সাথে।" },
      { speaker: "Sana", text: "ভালো।" }
    ],
    choices: [
      {
        text: "জড়িয়ে ধরো",
        next: "ch2_5_s09",
        meterEffects: {
          sana: { love: 2, attraction: 0, trust: 3, intimacy: 2, respect: 2, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s09: {
    id: "ch2_5_s09",
    chapter: 2.5,
    title: "নিরাপদ আলিঙ্গন",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "তুই তাকে জড়িয়ে ধরিস।" },
      { speaker: "Sana", text: "গরম লাগে।" },
      { speaker: "You", text: "শীত।" },
      { speaker: "Sana", text: "শুধু শীত না।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "নিরাপদ লাগে।" },
      { speaker: "You", text: "আমি চাই তুই নিরাপদ থাকিস।" },
      { speaker: "Sana", text: "থাকি।" },
      { speaker: "You", text: "আবার ভয়?" },
      { speaker: "Sana", text: "হ্যাঁ, একটা।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "যদি সবাই জানে?" },
      { speaker: "You", text: "জানবে না।" },
      { speaker: "Sana", text: "পারবি না?" },
      { speaker: "You", text: "পারব, আমরা গোপন রাখব।" },
      { speaker: "Sana", text: "গোপন মানে লজ্জা?" },
      { speaker: "You", text: "না, গোপন মানে আমাদের।" },
      { speaker: "Sana", text: "আমাদের?" },
      { speaker: "You", text: "হ্যাঁ, শুধু আমাদের।" },
      { speaker: "Sana", text: "ভালো শব্দ।" },
      { speaker: "You", text: "তুই ভালো শব্দ পছন্দ করিস।" },
      { speaker: "Sana", text: "তুই বানাস।" },
      { speaker: "You", text: "তোর জন্য।" },
      { speaker: "Sana", text: "আবার?" },
      { speaker: "You", text: "হ্যাঁ, আবার।" },
      { speaker: "Sana", text: "তুই থাম না।" },
      { speaker: "You", text: "তুই চাইলে থামব।" },
      { speaker: "Sana", text: "এখন থাম না।" },
      { speaker: "You", text: "তাহলে শুনবি?" },
      { speaker: "Sana", text: "শুনছি।" }
    ],
    choices: [
      {
        "text": "কপালে চুমু দাও",
        "next": "ch2_5_s10",
        "meterEffects": {
          "sana": { "love": 3, "attraction": 0, "trust": 2, "intimacy": 1, "respect": 2, "jealousy": 0 }
        }
      }
    ]
  },

  ch2_5_s10: {
    id: "ch2_5_s10",
    chapter: 2.5,
    title: "পিল, কনডম আর নিজের শরীর",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "serious",
    dialogue: [
      { speaker: "Narrator", text: "কপালে নরম চুমু।" },
      { speaker: "Sana", text: "এটা অন্যরকম।" },
      { speaker: "You", text: "কীভাবে?" },
      { speaker: "Sana", text: "শরীর না, মন।" },
      { speaker: "You", text: "মনই তো আসল।" },
      { speaker: "Sana", text: "আচ্ছা, প্রোটেকশনের কথা ফিরি।" },
      { speaker: "You", text: "ফিরি।" },
      { speaker: "Sana", text: "কনডম ছাড়া কিছু?" },
      { speaker: "You", text: "যা তুই চাস, ডাক্তার বলে দেবে।" },
      { speaker: "Sana", text: "আমি পিল খেতে চাই না।" },
      { speaker: "You", text: "খেতে হবে না।" },
      { speaker: "Sana", text: "তুই মানবি?" },
      { speaker: "You", text: "মানব, এটা তোর শরীর।" },
      { speaker: "Sana", text: "শরীর আমার, দায়িত্ব আমাদের।" },
      { speaker: "You", text: "হ্যাঁ, দায়িত্ব আমাদের।" },
      { speaker: "Sana", text: "তুই কিনলে আমাকে বলবি?" },
      { speaker: "You", text: "বলব, লুকাব না।" },
      { speaker: "Sana", text: "লুকালে ভয় লাগে।" },
      { speaker: "You", text: "লুকাব না।" },
      { speaker: "Sana", text: "কথা?" },
      { speaker: "You", text: "কথা।" },
      { speaker: "Sana", text: "আর যদি শেষ মুহূর্তে না চাই?" },
      { speaker: "You", text: "থামব, কিছু বলব না।" },
      { speaker: "Sana", text: "মন খারাপ করবে না?" },
      { speaker: "You", text: "করব না, তোর মন আগে।" },
      { speaker: "Sana", text: "তুই..." },
      { speaker: "You", text: "কাঁদিস না।" },
      { speaker: "Sana", text: "কাঁদি না, ভালো লাগে।" },
      { speaker: "You", text: "ভালো লাগলে ভালো।" }
    ],
    choices: [
      {
        text: "চোখের জল মুছাও",
        next: "ch2_5_s11",
        meterEffects: {
          sana: { love: 2, attraction: 0, trust: 4, intimacy: 0, respect: 3, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s11: {
    id: "ch2_5_s11",
    chapter: 2.5,
    title: "নিজের থাকা",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "তুই তার চোখের জল মুছাস।" },
      { speaker: "Sana", text: "আচ্ছা, একটা শেষ কথা।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "আমরা কি সত্যিই এগোব?" },
      { speaker: "You", text: "এগোব, কিন্তু তোমার গতিতে।" },
      { speaker: "Sana", text: "আমার গতি?" },
      { speaker: "You", text: "হ্যাঁ, তুই যখন বলবি।" },
      { speaker: "Sana", text: "আর যদি কখনো না বলি?" },
      { speaker: "You", text: "তাহলে না-ই থাকবে, আমরা সুখী থাকব।" },
      { speaker: "Sana", text: "সুখী?" },
      { speaker: "You", text: "হ্যাঁ, শুধু জড়িয়ে ধরেও।" },
      { speaker: "Sana", text: "তুই কি সেটা মেনে নিবি?" },
      { speaker: "You", text: "নেব, কারণ তুই আমার।" },
      { speaker: "Sana", text: "তোমার?" },
      { speaker: "You", text: "হ্যাঁ, কিন্তু তুই নিজের।" },
      { speaker: "Sana", text: "এটা ভালো লাগল।" },
      { speaker: "You", text: "কী?" },
      { speaker: "Sana", text: "নিজের থাকা।" },
      { speaker: "You", text: "থাক, আমি তোর নিজের হতে দেব।" },
      { speaker: "Sana", text: "আচ্ছা, একটা শর্ত।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "যদি আমরা এগোই, তার আগে আবার কথা বলব।" },
      { speaker: "You", text: "বলব, প্রতিবার।" },
      { speaker: "Sana", text: "প্রতিবার না, গুরুত্বপূর্ণ মুহূর্তে।" },
      { speaker: "You", text: "ঠিক আছে।" },
      { speaker: "Sana", text: "আর একটা।" },
      { speaker: "You", text: "হ্যাঁ?" },
      { speaker: "Sana", text: "তুই আমাকে না বললে রাগ করবি না।" },
      { speaker: "You", text: "করব না।" },
      { speaker: "Sana", text: "শপথ?" },
      { speaker: "You", text: "শপথ না, কথা দিলাম।" },
      { speaker: "Sana", text: "কথাই যথেষ্ট।" }
    ],
    choices: [
      {
        text: "হাত ধরে বসা",
        next: "ch2_5_s12",
        meterEffects: {
          sana: { love: 2, attraction: 0, trust: 3, intimacy: 1, respect: 2, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s12: {
    id: "ch2_5_s12",
    chapter: 2.5,
    title: "কালের জন্য সিদ্ধান্ত",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "দুজনে হাত ধরে বসে থাকো।" },
      { speaker: "Sana", text: "কতক্ষণ?" },
      { speaker: "You", text: "যতক্ষণ তুই চাস।" },
      { speaker: "Sana", text: "চিরকাল?" },
      { speaker: "You", text: "চিরকাল কঠিন, কিন্তু আজ থেকে শুরু।" },
      { speaker: "Sana", text: "আজ থেকে?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "আচ্ছা, একটা প্রশ্ন।" },
      { speaker: "You", text: "জিজ্ঞেস কর।" },
      { speaker: "Sana", text: "তুই কি আমাকে ভালোবাসিস?" },
      { speaker: "You", text: "জানি না, কিন্তু চাই।" },
      { speaker: "Sana", text: "চাওয়াটাই কি ভালোবাসা?" },
      { speaker: "You", text: "শুরুটা।" },
      { speaker: "Sana", text: "শুরুটা ভালো।" },
      { speaker: "You", text: "তোর সাথে শুরুটা ভালো।" },
      { speaker: "Sana", text: "আচ্ছা, আমরা কি প্রস্তুত?" },
      { speaker: "You", text: "প্রস্তুতি মানে কী?" },
      { speaker: "Sana", text: "মন, শরীর, নিরাপত্তা।" },
      { speaker: "You", text: "মন প্রস্তুত, শরীর তোর হাতে, নিরাপত্তা আমাদের।" },
      { speaker: "Sana", text: "তাহলে..." },
      { speaker: "You", text: "তাহলে কী?" },
      { speaker: "Sana", text: "সিদ্ধান্ত নিতে হবে।" },
      { speaker: "You", text: "নিই, কিন্তু আজ না?" },
      { speaker: "Sana", text: "কেন?" },
      { speaker: "You", text: "কারণ আজ কথাগুলো নতুন, হজম করি।" },
      { speaker: "Sana", text: "হজম?" },
      { speaker: "You", text: "হ্যাঁ, কাল আবার কথা বলব।" },
      { speaker: "Sana", text: "কাল?" },
      { speaker: "You", text: "কাল সন্ধ্যায়, এই ছাদে।" },
      { speaker: "Sana", text: "আচ্ছা।" },
      { speaker: "You", text: "রাজি?" },
      { speaker: "Sana", text: "রাজি।" }
    ],
    choices: [
      {
        text: "কালকের প্রস্তুতি নাও",
        next: "ch2_5_s13",
        meterEffects: {
          sana: { love: 2, attraction: 1, trust: 3, intimacy: 1, respect: 2, jealousy: 0 }
        }
      }
    ]
  },

  ch2_5_s13: {
    id: "ch2_5_s13",
    chapter: 2.5,
    title: "অধ্যায় ২.৫ সমাপ্ত",
    location: "terrace",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "ছাদের খোলা বাতাসে তোমাদের কথা, সীমানা আর বিশ্বাস আরও স্পষ্ট হলো।" },
      { speaker: "Sana", text: "কাল সন্ধ্যায় দেখা হচ্ছে।" },
      { speaker: "Narrator", text: "অধ্যায় ২.৫ এখানেই শেষ। এবার শুরু হচ্ছে তৃতীয় অধ্যায়..." }
    ],
    choices: [
      {
        text: "অধ্যায় ৩ শুরু করো",
        next: "ch3_s01",
        meterEffects: { sana: { love: 1, trust: 1 } }
      }
    ]
  },

  // ================= CHAPTER 3 =================
  ch3_s01: {
    id: "ch3_s01",
    chapter: 3,
    title: "সকালের সিদ্ধান্ত",
    location: "sana_apartment",
    time: "Evening",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "কালকের ছাদের কথা মনে পড়ে।" },
      { speaker: "Narrator", text: "আজ সন্ধ্যা, সানার অ্যাপার্টমেন্ট।" },
      { speaker: "You", text: "(মনে) হ্যাঁ বলেছিলাম।" },
      { speaker: "You", text: "(মনে) সেও হ্যাঁ বলেছিল।" },
      { speaker: "Sana", text: "দরজায় কে?" },
      { speaker: "You", text: "আমি।" },
      { speaker: "Sana", text: "(হাসি) ভেতরে আয়।" },
      { speaker: "Narrator", text: "সে দরজা খোলে।" },
      { speaker: "Narrator", text: "হালকা সোনালি ল্যাম্প, নরম আলো।" },
      { speaker: "Sana", text: "চা খাবি?" },
      { speaker: "You", text: "হ্যাঁ, যদি তুই চাস।" },
      { speaker: "Sana", text: "চাই তো।" },
      { speaker: "You", text: "তুই নার্ভাস লাগছিস।" },
      { speaker: "Sana", text: "তুইও তো।" },
      { speaker: "You", text: "আমি?" },
      { speaker: "Sana", text: "হ্যাঁ, হাত কাঁপছে তোর।" },
      { speaker: "You", text: "(হাসি) লক্ষ্য করলি?" },
      { speaker: "Sana", text: "সব লক্ষ্য করি তোর।" },
      { speaker: "You", text: "আমরা কি ঠিক আছি?" },
      { speaker: "Sana", text: "ঠিক বলতে?" },
      { speaker: "You", text: "মানে, আজ।" },
      { speaker: "Sana", text: "আজ আমরা দুজনেই চাইছি।" },
      { speaker: "You", text: "তাহলে ঠিক।" },
      { speaker: "Sana", text: "তবে একটা শর্ত।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "যেকোনো সময় থামাবি।" },
      { speaker: "You", text: "থামাব।" },
      { speaker: "Sana", text: "আমিও থামাবো।" },
      { speaker: "You", text: "দুজনেই থামাব।" },
      { speaker: "Sana", text: "হ্যাঁ।" },
      { speaker: "Narrator", text: "সে চায়ের কাপ এনে দেয়।" },
      { speaker: "You", text: "থ্যাংকস।" },
      { speaker: "Sana", text: "আমাদের মধ্যে থ্যাংকস নয়।" }
    ],
    choices: [
      {
        text: "চায়ে চুমুক দাও",
        next: "ch3_s02",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 2, intimacy: 1, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch3_s02: {
    id: "ch3_s02",
    chapter: 3,
    title: "প্রোটেকশনের লজিক",
    location: "sana_apartment",
    time: "Evening",
    character: "sana",
    emotion: "serious",
    dialogue: [
      { speaker: "You", text: "একটা জিনিস আনলাম।" },
      { speaker: "Sana", text: "কী?" },
      { speaker: "You", text: "(পকেট থেকে ছোট বাক্স) এটা।" },
      { speaker: "Sana", text: "(তাকায়) কনডম?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তুই কিনেছিলি?" },
      { speaker: "You", text: "হ্যাঁ, ফার্মেসি থেকে।" },
      { speaker: "Sana", text: "লজ্জা পায়নি?" },
      { speaker: "You", text: "পায়নি, এটা দায়িত্ব।" },
      { speaker: "Sana", text: "(নরম গলা) তুই সত্যিই আলাদা।" },
      { speaker: "You", text: "কাল বলেছিলাম না, ভাবি।" },
      { speaker: "Sana", text: "ভাবিস, দেখলাম।" },
      { speaker: "You", text: "তুই চেক করবি?" },
      { speaker: "Sana", text: "হ্যাঁ, একবার।" },
      { speaker: "Narrator", text: "সে বাক্সটা হাতে নেয়।" },
      { speaker: "Sana", text: "এক্সপায়ারি ঠিক আছে।" },
      { speaker: "You", text: "হ্যাঁ, দেখেছি।" },
      { speaker: "Sana", text: "তুই সব ভেবেছিস।" },
      { speaker: "You", text: "তোর জন্য সব ভাবি।" },
      { speaker: "Sana", text: "(বাক্স রেখে) রাখি?" },
      { speaker: "You", text: "হ্যাঁ, পাশেই রাখ।" },
      { speaker: "Sana", text: "জরুরি হলেই নেব।" },
      { speaker: "You", text: "জরুরি মানে?" },
      { speaker: "Sana", text: "যখন আমরা প্রস্তুত হব।" },
      { speaker: "You", text: "আমি প্রস্তুত, তবে তাড়াহুড়ো নয়।" },
      { speaker: "Sana", text: "হ্যাঁ, তাড়াহুড়ো নয়।" },
      { speaker: "You", text: "তুই চাইলে থামবি?" },
      { speaker: "Sana", text: "থামাব, কথা দিলাম।" },
      { speaker: "You", text: "আমিও কথা দিলাম।" },
      { speaker: "Sana", text: "তাহলে এখন কিছু নয়।" },
      { speaker: "You", text: "এখন শুধু কথা।" },
      { speaker: "Sana", text: "হ্যাঁ, শুধু কথা।" }
    ],
    choices: [
      {
        text: "পাশে বসো",
        next: "ch3_s03",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 3, intimacy: 1, respect: 3, jealousy: 0 } }
      }
    ]
  },

  ch3_s03: {
    id: "ch3_s03",
    chapter: 3,
    title: "প্রথম চুম্বন, ধীরে",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "দুজনে সোফায় পাশাপাশি।" },
      { speaker: "Sana", text: "চুপ কেন আবার?" },
      { speaker: "You", text: "তোকে দেখছি।" },
      { speaker: "Sana", text: "দেখলে কী দেখলি?" },
      { speaker: "You", text: "চোখ, ঠোঁট, ডিম্পল।" },
      { speaker: "Sana", text: "(হাসি) ডিম্পলও?" },
      { speaker: "You", text: "হ্যাঁ, সব।" },
      { speaker: "Sana", text: "তুই খুব কথা বলিস।" },
      { speaker: "You", text: "তোর সামনে থামতে পারি না।" },
      { speaker: "Sana", text: "থাম না।" },
      { speaker: "Narrator", text: "সে একটু কাছে আসে।" },
      { speaker: "You", text: "ঠিক আছে?" },
      { speaker: "Sana", text: "হ্যাঁ, ঠিক।" },
      { speaker: "You", text: "চুমু দিতে পারি?" },
      { speaker: "Sana", text: "(ফিসফিস) পারি।" },
      { speaker: "Narrator", text: "নরম, ধীর প্রথম চুম্বন।" },
      { speaker: "Sana", text: "আহ..." },
      { speaker: "You", text: "ঠিক আছে?" },
      { speaker: "Sana", text: "হ্যাঁ, খুব।" },
      { speaker: "Narrator", text: "দ্বিতীয় চুম্বন, একটু গভীর।" },
      { speaker: "Sana", text: "তোর ঠোঁট নরম।" },
      { speaker: "You", text: "তোরও।" },
      { speaker: "Sana", text: "হাত কোথায় রাখবি?" },
      { speaker: "You", text: "তোর কোমরে, যদি চাস।" },
      { speaker: "Sana", text: "চাই।" },
      { speaker: "Narrator", text: "তোর হাত তার কোমরে।" },
      { speaker: "Sana", text: "গরম লাগছে।" },
      { speaker: "You", text: "আমিও।" },
      { speaker: "Sana", text: "থামবি না তো?" },
      { speaker: "You", text: "তুই না বললে থামব না।" },
      { speaker: "Sana", text: "তাহলে চল।" },
      { speaker: "You", text: "ধীরে?" },
      { speaker: "Sana", text: "হ্যাঁ, ধীরে।" }
    ],
    choices: [
      {
        text: "ধীরে এগোও",
        next: "ch3_s04",
        meterEffects: { sana: { love: 3, attraction: 3, trust: 2, intimacy: 3, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch3_s04: {
    id: "ch3_s04",
    chapter: 3,
    title: "কাপড়, সংকোচ, সম্মতি",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "nervous",
    dialogue: [
      { speaker: "Narrator", text: "চুম্বন থামে না, গভীর হয়।" },
      { speaker: "Sana", text: "একটা কথা।" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "কাপড়... লজ্জা লাগে।" },
      { speaker: "You", text: "লাগবে না, আমি আছি।" },
      { speaker: "Sana", text: "তুই দেখলে?" },
      { speaker: "You", text: "দেখব, তবে চোখ নামাব না।" },
      { speaker: "Sana", text: "মানে?" },
      { speaker: "You", text: "মানে, তোকে সুন্দর দেখব।" },
      { speaker: "Sana", text: "(ফিসফিস) ঠিক আছে।" },
      { speaker: "Narrator", text: "সে ধীরে ব্লাউজের বোতাম খোলে।" },
      { speaker: "You", text: "আমি সাহায্য করব?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু।" },
      { speaker: "Narrator", text: "তোর আঙুল বোতামে।" },
      { speaker: "Sana", text: "ঠান্ডা হাত তোর।" },
      { speaker: "You", text: "গরম করব।" },
      { speaker: "Sana", text: "হ্যাঁ।" },
      { speaker: "Narrator", text: "কাপড় সরে যায়, ধীরে।" },
      { speaker: "Sana", text: "চোখ বন্ধ করি?" },
      { speaker: "You", text: "না, খোলা রাখ।" },
      { speaker: "Sana", text: "কেন?" },
      { speaker: "You", text: "কারণ তোকে দেখতে চাই।" },
      { speaker: "Sana", text: "(কাঁপা গলা) ঠিক আছে।" },
      { speaker: "You", text: "তুই সুন্দর, সানা।" },
      { speaker: "Sana", text: "মিথ্যে বলছিস।" },
      { speaker: "You", text: "সত্যি বলছি।" },
      { speaker: "Sana", text: "তোর হাত আমার গালে।" },
      { speaker: "You", text: "হ্যাঁ, ছুঁচ্ছি।" },
      { speaker: "Sana", text: "আর কিছু না?" },
      { speaker: "You", text: "তুই যা চাস।" },
      { speaker: "Sana", text: "আমি... কাছে চাই।" },
      { speaker: "You", text: "কাছেই তো আছি।" }
    ],
    choices: [
      {
        text: "কোমলভাবে জড়িয়ে ধরো",
        next: "ch3_s05",
        meterEffects: { sana: { love: 3, attraction: 2, trust: 3, intimacy: 3, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s05: {
    id: "ch3_s05",
    chapter: 3,
    title: "শরীরের ভাষা",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "দুটি শরীর কাছে, নরম আলোয়।" },
      { speaker: "Sana", text: "হৃদস্পন্দন শুনছিস?" },
      { speaker: "You", text: "হ্যাঁ, দ্রুত।" },
      { speaker: "Sana", text: "আমারও তোর শুনছি।" },
      { speaker: "You", text: "দুজনেই কাঁপছি।" },
      { speaker: "Sana", text: "কাঁপাটা খারাপ?" },
      { speaker: "You", text: "না, সুন্দর।" },
      { speaker: "Sana", text: "তুই সব সুন্দর বলিস।" },
      { speaker: "You", text: "কারণ তোর সাথে সব সুন্দর।" },
      { speaker: "Narrator", text: "তোর হাত তার পিঠে, ধীরে।" },
      { speaker: "Sana", text: "আহ... ওখানে ভালো।" },
      { speaker: "You", text: "এখানে?" },
      { speaker: "Sana", text: "হ্যাঁ, সেখানেই।" },
      { speaker: "You", text: "বলতে থাক, থামাব না।" },
      { speaker: "Sana", text: "থামবি না জানি।" },
      { speaker: "Narrator", text: "শ্বাস ভারী হয়, দুজনের।" },
      { speaker: "Sana", text: "তোর গন্ধ ভালো লাগে।" },
      { speaker: "You", text: "তোরও।" },
      { speaker: "Sana", text: "চুমু আবার।" },
      { speaker: "You", text: "সবসময়।" },
      { speaker: "Narrator", text: "চুম্বন গড়ায় ঘাড়ে, কপালে।" },
      { speaker: "Sana", text: "সেখানে... হ্যাঁ।" },
      { speaker: "You", text: "ঠিক আছে?" },
      { speaker: "Sana", text: "খুব ঠিক।" },
      { speaker: "You", text: "কোনো ব্যথা?" },
      { speaker: "Sana", text: "না, শুধু উষ্ণতা।" },
      { speaker: "You", text: "তাহলে চল, ধীরে।" },
      { speaker: "Sana", text: "ধীরেই, কথা দিলাম।" },
      { speaker: "Narrator", text: "আলো আরও নরম হয়।" },
      { speaker: "Sana", text: "তুই আমার দিকে তাকিয়ে থাক।" },
      { speaker: "You", text: "থাকব, চোখ নামাব না।" }
    ],
    choices: [
      {
        text: "চোখে চোখ রেখে এগোও",
        next: "ch3_s06",
        meterEffects: { sana: { love: 3, attraction: 3, trust: 2, intimacy: 4, respect: 1, jealousy: 0 } }
      }
    ]
  },

  ch3_s06: {
    id: "ch3_s06",
    chapter: 3,
    title: "প্রস্তুতির মুহূর্ত",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "serious",
    dialogue: [
      { speaker: "Narrator", text: "কাছাকাছি, কিন্তু একটু থামো।" },
      { speaker: "You", text: "একটা জিনিস আগে।" },
      { speaker: "Sana", text: "কনডম?" },
      { speaker: "You", text: "হ্যাঁ।" },
      { speaker: "Sana", text: "তুই নেবি?" },
      { speaker: "You", text: "আমি নেব, তুই আরাম কর।" },
      { speaker: "Sana", text: "লজ্জা করছে না?" },
      { speaker: "You", text: "না, এটা আমাদের নিরাপত্তা।" },
      { speaker: "Sana", text: "(নরম) ঠিক বলেছিস।" },
      { speaker: "Narrator", text: "তুই বাক্স থেকে নিস, ধীরে।" },
      { speaker: "You", text: "ঠিক আছে তো?" },
      { speaker: "Sana", text: "হ্যাঁ, সব ঠিক।" },
      { speaker: "You", text: "কোনো তাড়া নেই।" },
      { speaker: "Sana", text: "জানি, তাড়া নেই।" },
      { speaker: "Narrator", text: "প্রস্তুত হয়, দুজনেই।" },
      { speaker: "Sana", text: "এখন?" },
      { speaker: "You", text: "এখন, যদি তুই চাস।" },
      { speaker: "Sana", text: "চাই।" },
      { speaker: "You", text: "কোনো ব্যথা হলে বল।" },
      { speaker: "Sana", text: "বলব, কথা দিলাম।" },
      { speaker: "You", text: "আমিও কথা দিলাম, থামব।" },
      { speaker: "Sana", text: "থামার দরকার হবে না।" },
      { speaker: "You", text: "তবুও কথা দিলাম।" },
      { speaker: "Sana", text: "(হাসি) তুই অজানিত।" },
      { speaker: "You", text: "তোর জন্য অজানিত।" },
      { speaker: "Narrator", text: "শ্বাস মিলে যায়, দুটির।" },
      { speaker: "Sana", text: "আমি আছি।" },
      { speaker: "You", text: "আমিও আছি।" },
      { speaker: "Sana", text: "একসাথে।" },
      { speaker: "You", text: "হ্যাঁ, একসাথে।" }
    ],
    choices: [
      {
        text: "ধীরে, সম্মতিতে এগোও",
        next: "ch3_s07",
        meterEffects: { sana: { love: 3, attraction: 2, trust: 4, intimacy: 4, respect: 3, jealousy: 0 } }
      }
    ]
  },

  ch3_s07: {
    id: "ch3_s07",
    chapter: 3,
    title: "এক হওয়া (fade)",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "আলো নরম, শ্বাস গভীর।" },
      { speaker: "Sana", text: "আহ..." },
      { speaker: "You", text: "ঠিক আছে?" },
      { speaker: "Sana", text: "হ্যাঁ, ধীরে।" },
      { speaker: "You", text: "ধীরেই আছি।" },
      { speaker: "Sana", text: "তোর চোখ আমার চোখে।" },
      { speaker: "You", text: "থাকবে, নামাব না।" },
      { speaker: "Narrator", text: "দুটি শরীর এক ছন্দে।" },
      { speaker: "Sana", text: "এই... হ্যাঁ।" },
      { speaker: "You", text: "বলতে থাক।" },
      { speaker: "Sana", text: "বলছি, শুনছিস?" },
      { speaker: "You", text: "শুনছি, সব।" },
      { speaker: "Narrator", text: "ঘরের শব্দ মিলিয়ে যায়।" },
      { speaker: "Narrator", text: "শুধু দুটি শ্বাস, দুটি হৃদয়।" },
      { speaker: "Sana", text: "তুই... আমার।" },
      { speaker: "You", text: "হ্যাঁ, তোর।" },
      { speaker: "Sana", text: "কোনো মিথ্যে নয়?" },
      { speaker: "You", text: "কোনো মিথ্যে নয়।" },
      { speaker: "Narrator", text: "ছন্দ বাড়ে, ধীরে ধীরে।" },
      { speaker: "Sana", text: "আহ... সানা..." },
      { speaker: "You", text: "আছি, এখানেই।" },
      { speaker: "Sana", text: "থামিস না।" },
      { speaker: "You", text: "থামব না, তোর সাথে।" },
      { speaker: "Narrator", text: "একটি দীর্ঘ শ্বাস, তারপর নীরবতা।" },
      { speaker: "Narrator", text: "শরীর দুটি একে অপরে হেলানো।" },
      { speaker: "Sana", text: "(ফিসফিস) হয়ে গেল।" },
      { speaker: "You", text: "হ্যাঁ, হয়ে গেল।" },
      { speaker: "Sana", text: "তুই ঠিক আছিস?" },
      { speaker: "You", text: "হ্যাঁ, তুই?" },
      { speaker: "Sana", text: "আমিও, খুব।" }
    ],
    choices: [
      {
        text: "তাকে বুকে টেনে নাও",
        next: "ch3_s08",
        meterEffects: { sana: { love: 4, attraction: 2, trust: 3, intimacy: 5, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s08: {
    id: "ch3_s08",
    chapter: 3,
    title: "আফটারকেয়ার",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "তুই তাকে বুকে টেনে নিস।" },
      { speaker: "Sana", text: "গরম লাগছে তোর বুকে।" },
      { speaker: "You", text: "থাক, যতক্ষণ চাস।" },
      { speaker: "Sana", text: "চিরকাল?" },
      { speaker: "You", text: "চিরকাল কঠিন, আজ থাক।" },
      { speaker: "Sana", text: "(হাসি) আজই যথেষ্ট।" },
      { speaker: "You", text: "পানি খাবি?" },
      { speaker: "Sana", text: "হ্যাঁ, একটু।" },
      { speaker: "Narrator", text: "তুই উঠে পানি আনিস।" },
      { speaker: "Sana", text: "থ্যাংকস।" },
      { speaker: "You", text: "আমাদের মধ্যে থ্যাংকস নয়।" },
      { speaker: "Sana", text: "(হাসি) আবার সেই কথা।" },
      { speaker: "You", text: "হ্যাঁ, বারবার বলব।" },
      { speaker: "Sana", text: "বল, শুনতে ভালো লাগে।" },
      { speaker: "Narrator", text: "সে কম্বল টানে, দুজনে।" },
      { speaker: "Sana", text: "ঠান্ডা লাগছে।" },
      { speaker: "You", text: "আমি আছি, গরম করব।" },
      { speaker: "Sana", text: "তোর হাত আমার চুলে।" },
      { speaker: "You", text: "হ্যাঁ, বোলাচ্ছি।" },
      { speaker: "Sana", text: "আরাম লাগে।" },
      { speaker: "You", text: "তাহলে চোখ বন্ধ কর।" },
      { speaker: "Sana", text: "না, তোকে দেখতে চাই।" },
      { speaker: "You", text: "দেখ, আমি পালাব না।" },
      { speaker: "Sana", text: "পালানোর কথা নয়।" },
      { speaker: "You", text: "জানি, তাই বললাম।" },
      { speaker: "Sana", text: "তুই সব বুঝিস।" },
      { speaker: "You", text: "তোর কথা শুনলে বুঝি।" },
      { speaker: "Sana", text: "আজকের দিনটা..." },
      { speaker: "You", text: "হ্যাঁ?" },
      { speaker: "Sana", text: "ভুলব না।" },
      { speaker: "You", text: "আমিও না।" }
    ],
    choices: [
      {
        text: "নরম চুমু দাও কপালে",
        next: "ch3_s09",
        meterEffects: { sana: { love: 3, attraction: 1, trust: 3, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s09: {
    id: "ch3_s09",
    chapter: 3,
    title: "মাঝরাতের কথা",
    location: "sana_apartment",
    time: "Night",
    character: "sana",
    emotion: "playful",
    dialogue: [
      { speaker: "Narrator", text: "কপালে নরম চুমু।" },
      { speaker: "Sana", text: "এটা অন্যরকম।" },
      { speaker: "You", text: "কীভাবে?" },
      { speaker: "Sana", text: "শরীর নয়, মায়া।" },
      { speaker: "You", text: "মায়াই তো আসল।" },
      { speaker: "Sana", text: "তুই কবি হয়ে গেছিস আবার।" },
      { speaker: "You", text: "তোর সামনে কবি হই।" },
      { speaker: "Sana", text: "(হাসি) থাক, কবি থাক।" },
      { speaker: "You", text: "একটা প্রশ্ন?" },
      { speaker: "Sana", text: "জিজ্ঞেস কর।" },
      { speaker: "You", text: "তুই খুশি?" },
      { speaker: "Sana", text: "খুব, মিথ্যে বলছি না।" },
      { speaker: "You", text: "কোনো অনুশোচনা?" },
      { speaker: "Sana", text: "না, কেন হবে?" },
      { speaker: "You", text: "জানি না, ভাবলাম।" },
      { speaker: "Sana", text: "তুই বেশি ভাবিস।" },
      { speaker: "You", text: "তোর জন্য ভাবি।" },
      { speaker: "Sana", text: "তাহলে কম ভাব, বেশি থাক।" },
      { speaker: "You", text: "থাকব, কথা দিলাম।" },
      { speaker: "Sana", text: "কথা না, কাজ দেখাবি।" },
      { speaker: "You", text: "দেখাব, সবসময়।" },
      { speaker: "Sana", text: "(ঘুমালু গলা) এখন ঘুম আয়।" },
      { speaker: "You", text: "তুই আগে।" },
      { speaker: "Sana", text: "দুজনে একসাথে।" },
      { speaker: "You", text: "হ্যাঁ, একসাথে।" },
      { speaker: "Sana", text: "চোখ বন্ধ?" },
      { speaker: "You", text: "বন্ধ, তবে হাত ধরে রাখ।" },
      { speaker: "Sana", text: "ধরে আছি।" },
      { speaker: "You", text: "ছাড়বি না?" },
      { speaker: "Sana", text: "না, ঘুমালেও ধরে থাকব।" }
    ],
    choices: [
      {
        text: "চোখ বন্ধ করো",
        next: "ch3_s10",
        meterEffects: { sana: { love: 2, attraction: 1, trust: 3, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s10: {
    id: "ch3_s10",
    chapter: 3,
    title: "সকালের আলো",
    location: "sana_apartment",
    time: "Morning",
    character: "sana",
    emotion: "soft",
    dialogue: [
      { speaker: "Narrator", text: "সকালের আলো জানালা দিয়ে।" },
      { speaker: "Narrator", text: "চোখ খোলে, পাশে সানা।" },
      { speaker: "Sana", text: "(ঘুমালু) হুম..." },
      { speaker: "You", text: "গুড মর্নিং।" },
      { speaker: "Sana", text: "(হাসি) চেক করলি?" },
      { speaker: "You", text: "হ্যাঁ, প্রথম দিনের শর্ত।" },
      { speaker: "Sana", text: "আজও শর্ত?" },
      { speaker: "You", text: "আজ শুধু ভালোলাগা।" },
      { speaker: "Sana", text: "ওটাও ভালো।" },
      { speaker: "Narrator", text: "সে চুল গোছায়, অলস।" },
      { speaker: "You", text: "ঘুম ভাঙেনি তো?" },
      { speaker: "Sana", text: "ভেঙেছে, তবে ভালো।" },
      { speaker: "You", text: "কীভাবে ভালো?" },
      { speaker: "Sana", text: "তোর পাশে জেগেছি।" },
      { speaker: "You", text: "(নরম) আমিও।" },
      { speaker: "Sana", text: "চা বানাবি?" },
      { speaker: "You", text: "হ্যাঁ, তোর জন্য।" },
      { speaker: "Sana", text: "আমার জন্য সব করিস।" },
      { speaker: "You", text: "করি, কারণ তুই আমার।" },
      { speaker: "Sana", text: "তোর? আবার?" },
      { speaker: "You", text: "হ্যাঁ, বলতে ইচ্ছে করে।" },
      { speaker: "Sana", text: "(হাসি) বল, শুনছি।" },
      { speaker: "You", text: "তুই আমার, সানা।" },
      { speaker: "Sana", text: "আর তুই আমার।" },
      { speaker: "You", text: "দুজনেই একে অপরের।" },
      { speaker: "Sana", text: "এটাই ভালো।" },
      { speaker: "Narrator", text: "রান্নাঘরে চায়ের শব্দ।" },
      { speaker: "Sana", text: "দু কাপ?" },
      { speaker: "You", text: "হ্যাঁ, দু কাপ।" }
    ],
    choices: [
      {
        text: "চা এনে দাও",
        next: "ch3_s11",
        meterEffects: { sana: { love: 3, attraction: 1, trust: 3, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s11: {
    id: "ch3_s11",
    chapter: 3,
    title: "সকালের টেবিল",
    location: "sana_apartment",
    time: "Morning",
    character: "sana",
    emotion: "happy",
    dialogue: [
      { speaker: "Narrator", text: "দুজনে টেবিলে, চায়ে চুমুক।" },
      { speaker: "Sana", text: "চা তোর হাতে ভালো হয়।" },
      { speaker: "You", text: "তুই শেখালে শিখব।" },
      { speaker: "Sana", text: "শেখাব, প্রতিদিন।" },
      { speaker: "You", text: "প্রতিদিন? এত?" },
      { speaker: "Sana", text: "হ্যাঁ, এত।" },
      { speaker: "You", text: "(হাসি) তাহলে রাজি।" },
      { speaker: "Sana", text: "রাজি থাক, পালাবি না।" },
      { speaker: "You", text: "পালাব না, কথা দিলাম।" },
      { speaker: "Sana", text: "কালকের ছাদের কথা মনে?" },
      { speaker: "You", text: "হ্যাঁ, সব মনে।" },
      { speaker: "Sana", text: "ওখানে ভয় ছিল।" },
      { speaker: "You", text: "আজ ভয় নেই?" },
      { speaker: "Sana", text: "নেই, তুই আছিস।" },
      { speaker: "You", text: "থাকব, সবসময়।" },
      { speaker: "Sana", text: "সবসময় কেউ থাকে না।" },
      { speaker: "You", text: "আমি থাকব, চেষ্টা করব।" },
      { speaker: "Sana", text: "চেষ্টাই যথেষ্ট।" },
      { speaker: "You", text: "তোর কাছে যথেষ্ট?" },
      { speaker: "Sana", text: "হ্যাঁ, আমার কাছে।" },
      { speaker: "Narrator", text: "সে হাত বাড়ায়, তুই ধরিস।" },
      { speaker: "Sana", text: "একটা কথা?" },
      { speaker: "You", text: "বল।" },
      { speaker: "Sana", text: "আমরা কি প্রেমে পড়েছি?" },
      { speaker: "You", text: "জানি না, তবে চাই।" },
      { speaker: "Sana", text: "চাওয়াটাই প্রেম?" },
      { speaker: "You", text: "শুরুটা, হ্যাঁ।" },
      { speaker: "Sana", text: "তাহলে শুরু করি।" },
      { speaker: "You", text: "ইতিমধ্যে করে ফেলেছি।" },
      { speaker: "Sana", text: "(হাসি) হ্যাঁ, করেছি।" }
    ],
    choices: [
      {
        text: "হাসি দিয়ে সায় দাও",
        next: "ch3_s12",
        meterEffects: { sana: { love: 4, attraction: 1, trust: 3, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s12: {
    id: "ch3_s12",
    chapter: 3,
    title: "নতুন স্বাভাবিক",
    location: "sana_apartment",
    time: "Morning",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "চা শেষ, দুজনেই শান্ত।" },
      { speaker: "Sana", text: "আজ কী করবি?" },
      { speaker: "You", text: "তোর সাথে, যদি চাস।" },
      { speaker: "Sana", text: "চাই, সারাদিন।" },
      { speaker: "You", text: "তাহলে কোথায় যাব?" },
      { speaker: "Sana", text: "যেখানে তুই বলবি।" },
      { speaker: "You", text: "ছাদে?" },
      { speaker: "Sana", text: "(হাসি) আবার ছাদ?" },
      { speaker: "You", text: "সেখানেই তো শুরু।" },
      { speaker: "Sana", text: "হ্যাঁ, সেখানেই।" },
      { speaker: "You", text: "তাহলে চল।" },
      { speaker: "Sana", text: "একটু রেডি হই।" },
      { speaker: "You", text: "অপেক্ষা করব।" },
      { speaker: "Sana", text: "দরজা বন্ধ করবি?" },
      { speaker: "You", text: "হ্যাঁ, তোর গোপনীয়তা।" },
      { speaker: "Sana", text: "(নরম) থ্যাংকস।" },
      { speaker: "You", text: "আবার থ্যাংকস?" },
      { speaker: "Sana", text: "একবার, আজ বিশেষ।" },
      { speaker: "You", text: "তাহলে নিলাম।" },
      { speaker: "Narrator", text: "সে ভেতরে যায়, তুই বসিস।" },
      { speaker: "Narrator", text: "ফোনে একটা নোট লেখিস।" },
      { speaker: "You", text: "(নোটে) 'সানা, আজ থেকে শুরু।'" },
      { speaker: "Narrator", text: "সে ফিরে আসে, রেডি।" },
      { speaker: "Sana", text: "চল?" },
      { speaker: "You", text: "চল, ছাদে।" },
      { speaker: "Sana", text: "হাত দে।" },
      { speaker: "You", text: "নিলাম, শক্ত করে।" },
      { speaker: "Sana", text: "ছাড়বি না?" },
      { speaker: "You", text: "না, আজ না, কালও না।" },
      { speaker: "Sana", text: "(হাসি) তাহলে চল।" }
    ],
    choices: [
      {
        text: "হাত ধরে ছাদে ওঠো",
        next: "ch3_s13",
        meterEffects: { sana: { love: 3, attraction: 1, trust: 3, intimacy: 2, respect: 2, jealousy: 0 } }
      }
    ]
  },

  ch3_s13: {
    id: "ch3_s13",
    chapter: 3,
    title: "আজ থেকে শুরু",
    location: "terrace",
    time: "Morning",
    character: "sana",
    emotion: "warm",
    dialogue: [
      { speaker: "Narrator", text: "সকালের রোদে ছাদ ঝলমল করছে। হাতে হাত রেখে তোমরা দুজন দাঁড়িয়ে।" },
      { speaker: "Sana", text: "এখন থেকে আর কোনো ভয় নেই।" },
      { speaker: "You", text: "হ্যাঁ, আজ থেকে আমাদের গল্প।" }
    ],
    choices: [
      {
        text: "গল্পের সমাপ্তি দেখো",
        next: "__ENDING__",
        meterEffects: { sana: { love: 2, trust: 2 } }
      }
    ]
  }
};

window.VN.ENDINGS = {
  true_love: {
    id: "true_love",
    badge: "True Love Ending",
    title: "আজ থেকে শুরু (Our Beginning)",
    description:
      "হলুদের সন্ধ্যা থেকে শুরু করে ছাদের প্রতিশ্রুতি এবং সকালের চা—সানা ও তোমার মাঝে গভীর ভালোবাসা ও বিশ্বাস গড়ে উঠেছে।"
  },
  deep_relationship: {
    id: "deep_relationship",
    badge: "Deep Relationship Ending",
    title: "পাশাপাশি (Side by Side)",
    description:
      "সম্মতি, সম্মান আর আন্তরিকতায় তোমাদের সম্পর্ক এক নতুন উচ্চতায় পৌঁছেছে।"
  },
  distance: {
    id: "distance",
    badge: "Quiet Ending",
    title: "ধীর সূচনা (Quiet Beginning)",
    description:
      "তোমরা সবে একে অপরকে চিনতে শুরু করেছ—সামনে আরও সময় ও সুযোগ অপেক্ষা করছে।"
  },
  default: {
    id: "default",
    badge: "Story Complete",
    title: "নতুন অধ্যায় (A New Chapter)",
    description:
      "সকালের আলোয় হাতে হাত রেখে তোমাদের নতুন গল্প শুরু হলো।"
  }
};
