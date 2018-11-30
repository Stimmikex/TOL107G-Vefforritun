Verkefni_1:
    Verkefnina lýsing: 
      Setja skal upp tvær síður, aðgengilegar af internetinu.
        1. Forsíða index.html með einhverjum texta ásamt tengli yfir á aðra síðu
        2. Önnur síða (t.d. about.html) þar sem fram kemur nafn, netfang og mynd ásamt tengli yfir á forsíðu
          2a. Mynd skal geymd í möppu sem heitir img/
          
    Síður skal nota utf-8 stafasett.

Setja skal síður upp á heimasvæði RHÍ, (http://rhi.hi.is/node/155) undir möppu .public_html/vefforritun/verkefni1 svo verkefnið verði aðgengilegt á https://notendur.hi.is/<notendanafn>/vefforritun/verkefni1 þar sem <notendnafn> er notendanafnið þitt (t.d. osk).

1.
  index.html
    <body> // þetta er "the body" sem er líkaminn á verkefninu.
      <p></p> // <p> er notað til að skila texta strengjum.
      <button> // <button> er notað til að gera takka, notað oft í <form> töggum.
        <a href="about.html"> // <a href> er notað til að koma einstaklingum á milli síða, það færi í þessu tilviki frá index -> about.html.
      </button>
    </body>
    
  About.html
    <body>
      <sama og var í index.html> // nema bætti þannig að takkinn fari frá about aftur til index.html.
      <h1></h1>
      <p>
        <b></b> // notað til að gera textan "bold" aka feitletraðan.
      </p>
      <p>
        <b></b>
      </p>
      <a href="mail-to: sot13@hi.is"> // mail-to er notað til að senda email til viðkomandi.
      <img src="mynd.jpg/png"> // skilar mynd frá src.
    </body>
