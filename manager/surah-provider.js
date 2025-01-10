const surahListBox = document.getElementById("surahListBox");

const surahList = [
  {
    name: "সূরা আল ফাতিহা",
    number: 1,
    url: "/1-fatiha.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল বাকারা",
    number: 2,
  },
  {
    name: "সূরা আল ইমরান",
    number: 3,
  },
  { name: "সূরা আন নিসা", number: 4 },
  { name: "সূরা আল মায়িদা", number: 5 },
  { name: "সূরা আল আন'আম", number: 6 },
  { name: "সূরা আল আরাফ", number: 7 },
  { name: "সূরা আল আনফাল", number: 8 },
  { name: "সূরা আত তওবা", number: 9 },
  { name: "সূরা ইউনুস", number: 10 },
  { name: "সূরা হুদ", number: 11 },
  { name: "সূরা ইউসুফ", number: 12 },
  { name: "সূরা আর রাদ", number: 13 },
  { name: "সূরা ইব্রাহিম", number: 14 },
  { name: "সূরা আল হিজর", number: 15 },
  { name: "সূরা আন নাহল", number: 16 },
  { name: "সূরা বনী ইসরাইল", number: 17 },
  { name: "সূরা আল কাহফ", number: 18 },
  { name: "সূরা মারইয়াম", number: 19 },
  { name: "সূরা তা-হা", number: 20 },
  { name: "সূরা আল আম্বিয়া", number: 21 },
  { name: "সূরা আল হাজ্জ", number: 22 },
  { name: "সূরা আল মুমিনূন", number: 23 },
  { name: "সূরা আন নূর", number: 24 },
  { name: "সূরা আল ফুরকান", number: 25 },
  { name: "সূরা আশ শুআরা", number: 26 },
  { name: "সূরা আন নামল", number: 27 },
  { name: "সূরা আল কাসাস", number: 28 },
  { name: "সূরা আল আনকাবুত", number: 29 },
  { name: "সূরা আর রুম", number: 30 },
  { name: "সূরা লোকমান", number: 31 },
  { name: "সূরা আস সাজদাহ", number: 32 },
  { name: "সূরা আল আহযাব", number: 33 },
  { name: "সূরা সাবা", number: 34 },
  { name: "সূরা ফাতির", number: 35 },
  {
    name: "সূরা ইয়াসিন",
    number: 36,
    url: "/36-yasin-64k.mp3",
    isLive: true,
  },
  { name: "সূরা আস সাফফাত", number: 37 },
  { name: "সূরা সাদ", number: 38 },
  { name: "সূরা আজ জুমার", number: 39 },
  { name: "সূরা আল মুমিন", number: 40 },
  { name: "সূরা হা-মীম আস সাজদাহ", number: 41 },
  { name: "সূরা আশ শূরা", number: 42 },
  { name: "সূরা আয যুখরুফ", number: 43 },
  { name: "সূরা আদ দোখান", number: 44 },
  { name: "সূরা আল জাসিয়া", number: 45 },
  { name: "সূরা আল আহকাফ", number: 46 },
  { name: "সূরা মুহাম্মাদ", number: 47 },
  { name: "সূরা আল ফাতহ", number: 48 },
  { name: "সূরা আল হুজুরাত", number: 49 },
  { name: "সূরা ক্বাফ", number: 50 },
  { name: "সূরা আয যারিয়াত", number: 51 },
  { name: "সূরা আত তুর", number: 52 },
  { name: "সূরা আন নজম", number: 53 },
  { name: "সূরা আল কামার", number: 54 },
  {
    name: "সূরা আর রহমান",
    number: 55,
    url: "/55-ar-rahmahn-64k.mp3",
    isLive: true,
  },
  { name: "সূরা আল ওয়াকিয়া", number: 56 },
  { name: "সূরা আল হাদিদ", number: 57 },
  { name: "সূরা আল মুজাদিলা", number: 58 },
  { name: "সূরা আল হাশর", number: 59 },
  { name: "সূরা আল মুমতাহিনা", number: 60 },
  { name: "সূরা আস সফ", number: 61 },
  { name: "সূরা আল জুমা", number: 62 },
  { name: "সূরা আল মুনাফিকুন", number: 63 },
  { name: "সূরা আত তাগাবুন", number: 64 },
  { name: "সূরা আত তালাক", number: 65 },
  { name: "সূরা আত তাহরিম", number: 66 },
  {
    name: "সূরা আল মুলক",
    number: 67,
    url: "/67-al-mulk-64k.mp3",
    isLive: true,
  },
  { name: "সূরা আল কলম", number: 68 },
  { name: "সূরা আল হাক্কা", number: 69 },
  { name: "সূরা আল মাআরিজ", number: 70 },
  { name: "সূরা নুহ", number: 71 },
  { name: "সূরা আল জিন", number: 72 },
  { name: "সূরা আল মুযযাম্মিল", number: 73 },
  { name: "সূরা আল মুদ্দাসসির", number: 74 },
  { name: "সূরা আল ক্বিয়ামাহ", number: 75 },
  { name: "সূরা আল ইনসান", number: 76 },
  { name: "সূরা আল মুরসালাত", number: 77 },
  { name: "সূরা আন নাবা", number: 78 },
  { name: "সূরা আন নাযিয়াত", number: 79 },
  { name: "সূরা আবাসা", number: 80 },
  { name: "সূরা আত তাকভীর", number: 81 },
  { name: "সূরা আল ইনফিতার", number: 82 },
  { name: "সূরা আল মুতাফফিফিন", number: 83 },
  { name: "সূরা আল ইনশিকাক", number: 84 },
  { name: "সূরা আল বুরূজ", number: 85 },
  { name: "সূরা আত তারিক", number: 86 },
  { name: "সূরা আল আ'লা", number: 87 },
  { name: "সূরা আল গাশিয়া", number: 88 },
  { name: "সূরা আল ফাজর", number: 89 },
  {
    name: "সূরা আল বালাদ",
    number: 90,
    url: "/90-balad.mp3",
    isLive: true,
  },
  {
    name: "সূরা আশ শামস",
    number: 91,
    url: "/91-shams.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল লাইল",
    number: 92,
    url: "/92-layel.mp3",
    isLive: true,
  },
  {
    name: "সূরা আদ দুহা",
    number: 93,
    url: "/93-duha.mp3",
    isLive: true,
  },
  {
    name: "সূরা আশ শারহ",
    number: 94,
    url: "/94-insirah.mp3",
    isLive: true,
  },
  {
    name: "সূরা আত তীন",
    number: 95,
    url: "/95-teen.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল আলাক",
    number: 96,
    url: "/96-alak.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল ক্বদর",
    number: 97,
    url: "/97-kodor.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল বাইয়্যিনাহ",
    number: 98,
    url: "/98-bayeenah.mp3",
    isLive: true,
  },
  {
    name: "সূরা আয যালযালাহ",
    number: 99,
    url: "/99-jiljal.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল আদিয়াত",
    number: 100,
    url: "/100-adiyath.mp3",
    isLive: true,
  },
  { name: "সূরা আল কারিয়াহ", number: 101 },
  {
    name: "সূরা আত তাকাসুর",
    number: 102,
    url: "/102-taksur.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল আসর",
    number: 103,
    url: "/103-asaer.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল হুমাযাহ",
    number: 104,
    url: "/104-humaja.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল ফীল",
    number: 105,
    url: "/105-al-feel.mp3",
    isLive: true,
  },
  {
    name: "সূরা কুরাইশ",
    number: 106,
    url: "/106-quraish.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল মাউন",
    number: 107,
    url: "/107-maun.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল কাউসার",
    number: 108,
    url: "/108-kausar.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল কাফিরুন",
    number: 109,
    url: "/109-kafirun.mp3",
    isLive: true,
  },
  {
    name: "সূরা আন নাসর",
    number: 110,
    url: "/110-nasar.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল মাসাদ",
    number: 111,
    url: "/111-lahab.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল ইখলাস",
    number: 112,
    url: "/112-ikhlas.mp3",
    isLive: true,
  },
  {
    name: "সূরা আল ফালাক",
    number: 113,
    url: "/113-falakh.mp3",
    isLive: true,
  },
  {
    name: "সূরা আন নাস",
    number: 114,
    url: "/114-naas.mp3",
    isLive: true,
  },
];

surahList
  .sort((a, b) => {
    if (b.isLive === a.isLive) {
      return 0;
    }
    return b.isLive ? 1 : -1;
  })
  .map((item, index) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("surahButton");
    buttonElement.textContent = `${convertToBanglaNumber(item.number)}. ${
      item.name
    }`;
    buttonElement.id = `surah${item.number}`;

    if (!item.isLive) {
      buttonElement.style.border = "1px solid #A0A0A0";
      buttonElement.style.color = "#A0A0A0";
      buttonElement.disabled = true;
      buttonElement.title = "Available soon—looking forward to your response.";
    }

    buttonElement.addEventListener("click", () => {
      const allButtons = document.querySelectorAll(".surahButton");
      allButtons.forEach((btn) => {
        btn.style.border = "";
        btn.style.color = "";
      });

      buttonElement.style.border = "1px solid #565100";
      buttonElement.style.color = "#565100";

      localStorage.setItem(
        "nowPlaying",
        JSON.stringify({
          url: `${DEV.AUDIO_BASE_URL}${item.url}`,
          name: item.name,
          number: item.number,
        })
      );

      localStorage.setItem(
        "pauseAudio",
        JSON.stringify({
          preStage: 0,
        })
      );

      playButton.click();
    });

    surahListBox.appendChild(buttonElement);
  });

surahListBox.scrollLeft = 0;
