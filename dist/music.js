const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    volume: 1.0,
    listFolded: true,
    audio: [
      {
        name: "インスタントヘヴン",
        artist: 'ナナヲアカリ / Eve',
        url: 'https://sharefs.yun.kugou.com/202001141509/096cefb506505050bf3dfa8baaa37860/G093/M0A/1F/09/_YYBAFu9xzyAb0GrADgq8k1aplM484.mp3',
        cover: 'http://p2.music.126.net/zMSJ1Rb6zJhnmKmoQZU-ZQ==/109951163408724555.jpg?param=300x300',
      },
      {
        name: 'ダダダダ天使',
        artist: 'ナナヲアカリ',
        url: 'http://m10.music.126.net/20200114135429/346ebaef191e3e3208e5d32795c9114e/ymusic/065c/0153/565b/162f3c137969b633fe38a1cef0d3d6f9.mp3',
        cover: 'http://p2.music.126.net/8BObP4WKV3-9A78dvrjlZw==/109951163881657846.jpg?param=130y130',
      },
      {
        name: 'Becoming a Legend',
        artist: 'John Dreamer',
        url: 'https://sharefs.yun.kugou.com/202001141510/c40fde0b22bf4196dc23207d1559c12d/G008/M0A/0E/05/qIYBAFUM1xKAJSWOADU3liA9n0A978.mp3',
        cover: 'http://p1.music.126.net/_brjkyl6iq9Axzi-YKp-pw==/5909874999459103.jpg?param=130y130',
      },
      {
        name: '狂妄之人',
        artist: 'Kyle Xian',
        url: 'https://sharefs.yun.kugou.com/202001141511/71925d501ad0193ea09cae3781eed0ab/G141/M07/18/1D/bZQEAFu1KMyAPCRcACAZUCjgvwA941.mp3',
        cover: 'http://p2.music.126.net/ebXwkUXYs5OtxTAoQNmyLw==/109951163552552420.jpg?param=130y130',
      },
      {
        name: 'JOJO的奇妙冒险花京院处刑曲电音版',
        artist: 'Kirara Magic',
        url: 'https://sharefs.yun.kugou.com/202001141511/3b08f75d61526b33f61e7c18f40f1c4e/G124/M02/17/04/XJQEAFx6p4SAEbdZAC8f2JtOGwA368.mp3',
        cover: 'http://p2.music.126.net/bp9k5d1QdPmZQcbpauiVTg==/109951163896982261.jpg?param=130y130',
      },
      {
        name: 'Demons',
        artist: 'Imagine Dragons',
        url: 'https://sharefs.yun.kugou.com/202001141512/deb58f477f3ffd74a3586a32ae41f7eb/G010/M01/1A/11/qoYBAFUWu9WAKhNPACr-o8fxWw0723.mp3',
        cover: 'http://p2.music.126.net/xjB2VeMBFT53xOrNb2Pp5A==/2539871861093257.jpg?param=130y130',
      },
      {
        name: 'Lone Survivor',
        artist: 'Steve Jablonsky',
        url: 'http://m10.music.126.net/20200114135738/339b97581a09183ea54829e5b9eeec51/ymusic/d171/e72d/2b54/6af2446cd32c368a8588f74146ff064b.mp3',
        cover: 'http://p1.music.126.net/e0Hg187nRYHsK-Dp5WP3pw==/5802122859896161.jpg?param=130y130',
      },
      {
        name: '耀世微光',
        artist: '顽乐团',
        url: 'https://sharefs.yun.kugou.com/202001141514/800f773fcab6e5a88d0436c40fd4116e/G177/M09/0A/1D/kZQEAF2g7fOAQf8LADd0LeHfYnU046.mp3',
        cover: 'http://p1.music.126.net/jRmUsadVpRS2UrrPPURV7Q==/109951164419703494.jpg?param=130y130',
      },
      {
        name: 'Connexion(少女前线-裂变链接结束曲)',
        artist: 'G.K',
        url: 'http://m10.music.126.net/20200114135837/3fcd328f182038945ee9235fc073efbd/ymusic/070c/055e/5359/0f4633d8d1244c717896d307c7425c8f.mp3',
        cover: 'http://p1.music.126.net/mtZXygV-SHb9k5q1R7maGw==/109951164426520053.jpg?param=130y130',
      },
      {
        name: 'Monster',
        artist: 'Starset',
        url: 'https://sharefs.yun.kugou.com/202001141515/fb999cd41f987817c16ce11d687b0d15/G079/M07/09/14/L5QEAFgefMeABNF4AD6Y4pVBOKs471.mp3',
        cover: 'http://p2.music.126.net/X0akTthxu28CdYtO74e1MQ==/17959422928314714.jpg?param=130y130',
      }
    ]
});