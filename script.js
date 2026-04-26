const works = [
  { year: "1999", title: "The Mild Mild West", place: "Bristol", type: "street", tag: "壁画", note: "テディベアが火炎瓶を投げる構図で、ブリストル期の代表的な壁画として語られる作品。" },
  { year: "2002", title: "Girl with Balloon", place: "London", type: "street", tag: "壁画", note: "赤いハート型の風船と少女のイメージで知られ、後のオークション介入にもつながる象徴作。" },
  { year: "2003", title: "Love is in the Air / Flower Thrower", place: "Jerusalem", type: "street", tag: "壁画", note: "投げる動作と花束を組み合わせ、暴力と平和のイメージを反転させた代表作。" },
  { year: "2004", title: "Kissing Coppers", place: "Brighton", type: "street", tag: "壁画", note: "制服警官のキスを描き、権威、公共性、ジェンダーをめぐる議論を呼んだ作品。" },
  { year: "2004", title: "Napalm", place: "Print / Edition", type: "market", tag: "版画", note: "消費社会のアイコンと戦争写真の記憶を衝突させる、強い批評性を持つ作品。" },
  { year: "2005", title: "Show Me the Monet", place: "Crude Oils", type: "market", tag: "絵画", note: "モネ風の池にショッピングカートなどを沈め、名画と環境破壊を重ねた作品。" },
  { year: "2005", title: "West Bank Barrier Works", place: "Bethlehem", type: "street", tag: "壁画", note: "分離壁を支持体に、窓や風景のイリュージョンを描いた一連の作品。" },
  { year: "2006", title: "Sweep It Under the Carpet", place: "London", type: "street", tag: "壁画", note: "問題を隠す社会の態度を、掃除婦のイメージで皮肉る作品。" },
  { year: "2008", title: "One Nation Under CCTV", place: "London", type: "street", tag: "壁画", note: "監視社会への批判を、巨大なタイポグラフィと作業員の姿で示した壁画。" },
  { year: "2009", title: "Devolved Parliament", place: "Bristol Museum", type: "market", tag: "絵画", note: "英国議会をチンパンジーで置き換え、政治制度への不信を風刺した大作。" },
  { year: "2010", title: "Exit Through the Gift Shop", place: "Film", type: "exhibition", tag: "映画", note: "ストリートアートと市場化をめぐるドキュメンタリー的な映像作品。" },
  { year: "2015", title: "Dismaland", place: "Weston-super-Mare", type: "exhibition", tag: "展示", note: "テーマパークを反転させた大型プロジェクト。消費、娯楽、政治をまとめて批評した。" },
  { year: "2015", title: "The Son of a Migrant from Syria", place: "Calais", type: "street", tag: "壁画", note: "スティーブ・ジョブズを題材に、移民と経済的貢献をめぐる視点を提示。" },
  { year: "2017", title: "The Walled Off Hotel", place: "Bethlehem", type: "exhibition", tag: "プロジェクト", note: "分離壁のそばに開いたホテル型プロジェクト。宿泊体験と政治的文脈を結びつけた。" },
  { year: "2018", title: "Season's Greetings", place: "Port Talbot", type: "street", tag: "壁画", note: "雪のように見える灰を浴びる子どもを描き、産業公害の問題に接続した作品。" },
  { year: "2018", title: "Love is in the Bin", place: "Sotheby's London", type: "market", tag: "オークション", note: "落札直後に作品がシュレッダーで裁断され、オークションの場で新作として成立した介入。" },
  { year: "2020", title: "Valentine's Banksy", place: "Bristol", type: "recent", tag: "壁画", note: "少女と赤い花の炸裂を組み合わせた、バレンタイン時期に現れた作品。" },
  { year: "2020", title: "Game Changer", place: "Southampton", type: "recent", tag: "絵画", note: "医療従事者をヒーローとして描き、NHS支援のオークションにもつながった作品。" },
  { year: "2020", title: "Aachoo!!", place: "Bristol", type: "recent", tag: "壁画", note: "くしゃみをする人物を坂道の住宅壁に描き、場所の傾きも作品効果に取り込んだ。" },
  { year: "2021", title: "A Great British Spraycation", place: "East Anglia", type: "recent", tag: "シリーズ", note: "英国沿岸部に現れた一連の作品。観光、労働、日常のユーモアを扱う。" },
  { year: "2022", title: "Ukraine Works", place: "Ukraine", type: "recent", tag: "シリーズ", note: "戦争下のウクライナで確認された一連の作品。瓦礫や建物の破壊を文脈に取り込む。" },
  { year: "2023", title: "Valentine's Day Mascara", place: "Margate", type: "recent", tag: "壁画", note: "家庭内暴力への批評として読まれた作品。実物要素と壁画が組み合わされた。" },
  { year: "2024", title: "London Animal Series", place: "London", type: "recent", tag: "シリーズ", note: "ヤギ、象、猿、狼、ペリカン、猫、ピラニア、サイ、ロンドン動物園のゴリラへ続く9日間のシリーズ。" },
  { year: "2024", title: "London Zoo Gorilla", place: "London Zoo", type: "recent", tag: "壁画", note: "動物園入口シャッターに現れたシリーズ最終作。動物を解放するゴリラの構図で報じられた。" }
];

const grid = document.querySelector("#works-grid");
const buttons = document.querySelectorAll(".filter-button");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

const renderWorks = (filter = "all") => {
  const filtered = filter === "all" ? works : works.filter((work) => work.type === filter);
  grid.innerHTML = filtered.map((work) => `
    <article class="work-card">
      <div class="work-meta">
        <span>${work.year}</span>
        <span>${work.tag}</span>
      </div>
      <h3>${work.title}</h3>
      <p class="place">${work.place}</p>
      <p>${work.note}</p>
    </article>
  `).join("");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderWorks(button.dataset.filter);
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

renderWorks();

