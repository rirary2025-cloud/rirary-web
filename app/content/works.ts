export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  role: readonly string[];
  solution: string;
  outcome?: string;
  image?: string;
  images?: readonly { src: string; alt: string }[];
  metrics?: readonly { label: string; value: string }[];
  links?: readonly { label: string; href: string }[];
};

// 公開許可・事実確認が完了した案件のみ追加する。
// 数値、固有名詞、成果を推測で入力しない。
export const works: readonly WorkItem[] = [
  {
    slug: "jimoko-tomakomai-shiraoi",
    title: "ジモコ in 苫小牧・白老",
    category: "REGIONAL PROJECT",
    summary: "地域主体の公式LINEを起点に、YouTube・Instagram・ポスターを組み合わせた地域メディアを制作・運用しています。",
    challenge: "地域の情報を届けるには、オンライン上の発信だけでなく、日常生活の中で地域の人が接触できるきっかけが必要でした。企業や店舗の情報を継続的に発信し、地域内の消費や交流につなげる仕組みも求められていました。",
    role: ["地域メディアの企画・設計", "公式LINEを中心とした発信基盤の構築", "YouTube・Instagram・ポスターの発信設計", "メディアの継続運用"],
    solution: "公式LINEを情報の入口として設計し、動画やSNSで地域の情報を発信。市内各所へのポスター掲示も組み合わせることで、デジタル上だけではなく、街の中でもジモコを知るきっかけをつくっています。抽選会などの地域参加型企画も実施し、情報を受け取るだけではない接点を育てています。",
    outcome: "2026年4月の開始から、2026年8月時点で公式LINEの友だち数は450名を超えています。開始から約3か月となる2026年7月に実施した抽選会では、150名を超える応募がありました。",
    image: "/images/works/jimoko/poster.jpg",
    images: [
      { src: "/images/works/jimoko/poster.jpg", alt: "ジモコの公式LINE友だち追加を案内するポスター" },
      { src: "/images/works/jimoko/brochure.jpg", alt: "ジモコの仕組みと活用方法を紹介するパンフレット" },
      { src: "/images/works/jimoko/icon.png", alt: "ジモコの公式アイコン" },
    ],
    metrics: [
      { label: "開始", value: "2026.04" },
      { label: "公式LINE友だち数（2026年8月時点）", value: "450名超" },
      { label: "2026年7月抽選会 応募数", value: "150名超" },
    ],
    links: [
      { label: "YouTubeを見る", href: "https://www.youtube.com/@JIMOKO-ts" },
      { label: "Instagramを見る", href: "https://www.instagram.com/jimoko_line/" },
      { label: "公式LINEを友だち追加", href: "https://line.me/R/ti/p/@562hwrok" },
    ],
  },
  {
    slug: "up-down-line-rebuild",
    title: "お笑いコンビ「アップダウン」",
    category: "DIGITAL / OFFICIAL LINE",
    summary: "ライブやYouTubeの情報発信を、ファンとの接点づくりまでつなげる公式LINEへ再構築しました。",
    image: "/images/works/up-down-line-rebuild/line.png",
    images: [{ src: "/images/works/up-down-line-rebuild/line.png", alt: "アップダウンの公式LINE画面" }],
    challenge: "以前の公式LINEでは情報発信が中心で、リッチメニューや、どの情報がクリックされているかを把握する導線が整っていませんでした。",
    role: ["公式LINEアカウントの再構築", "リッチメニュー設計", "ライブ・YouTube情報の発信設計", "公演会場から友だち追加へつなげる導線設計"],
    solution: "リッチメニューを整備し、ライブやYouTubeの新作情報へアクセスしやすい構成に改善。全国各地での公演を活かし、会場でLINE公式アカウントを知り、友だち追加できる流れをつくりました。",
    outcome: "情報へのクリック状況を確認しながら、ファンとの継続的な接点を運用できる形へ整えました。",
  },
  {
    slug: "cher-noir-line-operation",
    title: "スナック「cher Noir」",
    category: "DIGITAL / OFFICIAL LINE",
    summary: "クーポンや営業情報の発信を通じて、店舗とお客様の継続的な接点をつくりました。",
    image: "/images/works/cher-noir-line-operation/line.png",
    images: [{ src: "/images/works/cher-noir-line-operation/line.png", alt: "cher Noirの公式LINE画面" }],
    challenge: "地方都市の店舗で公式LINEを活用し、来店につながる情報発信と、店舗からのお知らせを効率よく届ける必要がありました。",
    role: ["公式LINE運用設計", "クーポン施策", "営業情報・休日のお知らせ設計", "Instagramとの連携"],
    solution: "クーポンや営業情報を公式LINEから発信し、Instagramとも連携。店内の雰囲気や店舗情報に触れられる導線を整え、店舗からお客様への伝達を継続できる形にしました。",
    outcome: "クーポン施策と日常的な情報発信を組み合わせ、来店状況や店舗情報を継続的に把握・改善できる運用へ整えました。",
  },
  {
    slug: "yurara-higashimemuro-line-redesign",
    title: "サロン「ゆらら東めむろ」",
    category: "DIGITAL / OFFICIAL LINE",
    summary: "既存の公式LINEを、地域での認知とリピートにつながる情報導線へ再設計しました。",
    image: "/images/works/yurara-higashimemuro-line-redesign/line.png",
    images: [{ src: "/images/works/yurara-higashimemuro-line-redesign/line.png", alt: "ゆらら東めむろの公式LINE画面" }],
    challenge: "既存の公式LINEは利用されていましたが、ブース出展や個別チャットが中心で、地域の人がサービス情報やイベント情報へ進みやすい構成になっていませんでした。",
    role: ["既存公式LINEの運用再設計", "リッチメニュー改善", "事例紹介ページの導線設計", "イベント確認ページの設計"],
    solution: "地域での認知獲得とリピートを意識し、リッチメニューから事例紹介や友だち向けのイベント確認ページへ進める構成に変更。公式LINEを個別連絡だけでなく、情報を蓄積して届ける場所として再設計しました。",
    outcome: "サービス内容やイベント情報を整理して届けられる、継続運用を前提とした公式LINEへ改善しました。",
  },
  {
    slug: "sanzoku-line-operation",
    title: "焼肉屋「山賊」",
    category: "DIGITAL / OFFICIAL LINE",
    summary: "公式LINEの構築から継続的な編集・改善まで、店舗に合わせた運用を支援しました。",
    image: "/images/works/sanzoku-line-operation/line.png",
    images: [{ src: "/images/works/sanzoku-line-operation/line.png", alt: "焼肉屋 山賊の公式LINE画面" }],
    challenge: "公式LINEに関心はあったものの、アカウントをどのように構築し、日々の運用へつなげるかが整理されていませんでした。",
    role: ["公式LINEの初期構築", "運用方法の整理", "継続的な編集・改善", "運用フォロー"],
    solution: "初期構築だけで完了させず、運用しながら内容を編集・改善できる形を整備。店舗の状況に合わせてフォローし、公式LINEを継続的に活用できる運用を支援しました。",
    outcome: "構築と運用を分けず、改善を重ねながら店舗に合う公式LINEへ育てる支援を行いました。",
  },  {
    slug: "minna-de-hasshin",
    title: "みんなで発信",
    category: "BUSINESS SUPPORT / PRODUCT DEVELOPMENT",
    summary: "LINEに写真とひと言を送るだけで、複数のSNS向け投稿を作成できる情報発信支援Webアプリを開発・運用しています。",
    image: "/images/works/minna-de-hasshin/how-it-works.jpg",
    images: [
      { src: "/images/works/minna-de-hasshin/how-it-works.jpg", alt: "みんなで発信の利用イメージを紹介する漫画パネル" },
      { src: "/images/works/minna-de-hasshin/line-flow.jpg", alt: "みんなで発信をLINEで利用する流れを紹介する漫画パネル" },
      { src: "/images/works/minna-de-hasshin/sns-example.jpg", alt: "みんなで発信で作成されるSNS投稿の利用イメージ" },
    ],
    challenge: "地方の小さな店舗や団体では、SNSで発信したいと思っていても、投稿文を考える時間や担当者が限られています。複雑な操作や新しいアプリの導入を前提にせず、日常の情報を継続的に発信できる仕組みが必要でした。",
    role: ["サービス企画", "Webアプリ開発", "LINEを入口とした利用導線の設計", "SNS別の投稿文・ハッシュタグ生成設計", "サービス運用・改善"],
    solution: "写真とひと言をLINEで送るだけで、Instagram・TikTok・Facebook・X・Threadsなど各SNSに合わせた投稿文とハッシュタグを作成。店主やスタッフがそれぞれのタイミングで使えるようにし、発信を一人の担当者に集中させない運用を目指しています。",
    outcome: "LINEを入口に、写真撮影・短い入力・投稿文の作成までをつなげる、地域の小規模事業者や団体向けの情報発信基盤として運用しています。",
    links: [{ label: "みんなで発信のサイトを見る", href: "https://minna-de-deploy.com/" }],
  },];
