module.exports = {
  title: 'Innovet-IOT-Inleiding-SO',
  description: 'Inleiding op het IOT project voor de 3de graad Industriële wetenschappen, Elektricteit-Elektronica en Industriële-ICT',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'www.sint-rembert.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/voorbeelden/', 'Voorbeelden'],
      ['/blokschema/', 'Blokschema'],
      ['/maatschappelijk-nut/', 'Maatschappelijk nut'],
      ['/privacy-en-veiligheid/', 'Privacy en veiligheid'],
      ['/communicatievormen/', 'Communicatievormen']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet_IOT_Inleiding_SO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
