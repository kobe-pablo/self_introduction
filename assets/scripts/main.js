new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    drawer: false,
    model: null,
    tabs: ["HOME", "ABOUT US"],
    items: [
      { header: 'Pabloメンバーの自己紹介のページです．' },
      {
        avatar: 'https://1.bp.blogspot.com/-ArjRdInEWeA/X6tmhYIIYTI/AAAAAAABcMU/w7I_OpFBIzo1Yaz168UKnoB1eSccec2UACNcBGAsYHQ/s400/souji_zoukin_boy.png',
        title: '<a href="https://kobe-pablo.github.io" target="_blank" style="color: black;">Pablo太郎と申します．</a>',
        subtitle: 'よろしくね．',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://1.bp.blogspot.com/-ArjRdInEWeA/X6tmhYIIYTI/AAAAAAABcMU/w7I_OpFBIzo1Yaz168UKnoB1eSccec2UACNcBGAsYHQ/s400/souji_zoukin_boy.png',
        title: '<a href="https://kobe-pablo.github.io/self_introduction/pages/pageyn.html" target="_blank" style="color: black;">ゆっきー</a>',
        subtitle: 'よろしく',
      },
      { divider: true, inset: true },
      {
        avatar: './media/ricon.jpeg',
        title: '<a href="https://kobe-pablo.github.io/self_introduction/pages/pagerk.html" target="_blank" style="color: black;">tyaryu</a>',
        subtitle: 'こんにちは',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://1.bp.blogspot.com/-ArjRdInEWeA/X6tmhYIIYTI/AAAAAAABcMU/w7I_OpFBIzo1Yaz168UKnoB1eSccec2UACNcBGAsYHQ/s400/souji_zoukin_boy.png',
        title: '<a href="https://kobe-pablo.github.io/self_introduction/pages/yo.html" target="_blank" style="color: black;">ヨ</a>',
        subtitle: '雲になりたい',
      },
      { divider: true, inset: true },
    ],
    links: [
      { header: 'Pabloは神戸大学のサークルです．' },
      {
        title: '<a href="https://kobe-pablo.github.io">ホームページ</a>',
      },
      { divider: true, inset: true }
    ]
  }),
  mounted() {
    this.drawer = false;
  }
}
)
