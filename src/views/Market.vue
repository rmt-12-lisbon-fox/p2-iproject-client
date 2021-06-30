<template>
  <section>
    <div id="mainCoantiner">
  <!--dust particel-->
  <div class="margin-body">

  <div>
    <div class="starsec"></div>
    <div class="starthird"></div>
    <div class="starfourth"></div>
    <div class="starfifth"></div>
  </div>
  <!--Dust particle end--->

  <div class="row">
    <div class="col-sm-12 col-md-12">
      <div class="wpb_text_column wpb_content_element ">
          <div class="wpb_wrapper">
            <div class="title-h1 text-center"><span><span class="light">Market </span> table</span></div>
          </div>
        </div>
    </div>
  </div>

  <div class="row">
    <div class="d-flex justify-content-center">
    <div class="col-sm-2 col-md-2 pricing-column-wrapper me-3">
         <div class="pricing-column">
              <div class="pricing-price-row">
                <div class="pricing-price-wrapper">
                  <div class="pricing-price">
                    <div class="pricing-cost">525 mil</div>
                    <div class="time">BTC-IDR</div>
                  </div>
                </div>
              </div>
              <div class="pricing-row-title">
                <div class="pricing_row_title">BTC - IDR</div>
              </div>
              <figure class="pricing-row">Real-Time price</figure>
              <figure class="pricing-row"><span>Conv: {{ convertbtc }} BTC</span></figure>
              <figure class="pricing-row">Low: {{ btclow1 }}</figure>
              <figure class="pricing-row">High: {{ btchigh1 }}</figure>
              <figure class="pricing-row">Last: {{ btclast1 }}</figure>
              <!-- <figure class="pricing-row strike">Lorem ipsum dolor</figure> -->
              <div class="pricing-footer">
                <div class="gem-button-container gem-button-position-center"><a href="https://www.google.com" target="_blank" class="gem-button gem-green">Watch Signal</a></div>
                <div class="gem-button-container gem-button-position-center"><a href="https://www.google.com" target="_blank" class="gem-button gem-green">Add watchlist</a></div>
              </div>
            </div>
    </div>
    <div class="col-sm-2 col-md-2 pricing-column-wrapper me-3">
       <div class="pricing-column">
              <div class="pricing-price-row">
                <div class="pricing-price-wrapper">
                  <div class="pricing-price">
                    <div class="pricing-cost">32 mil</div>
                    <div class="time">ETH - IDR</div>
                  </div>
                </div>
              </div>
              <div class="pricing-row-title">
                <div class="pricing_row_title">ETH - IDR</div>
              </div>
              <figure class="pricing-row">Real-Time price</figure>
              <figure class="pricing-row"><span>Conv: {{ converteth }} BTC</span></figure>
              <figure class="pricing-row">Low: {{ ethlow1 }}</figure>
              <figure class="pricing-row">High: {{ ethhigh1 }}</figure>
              <figure class="pricing-row">Last: {{ ethlast1 }}</figure>
              <!-- <figure class="pricing-row strike">Lorem ipsum dolor</figure> -->
              <div class="pricing-footer">
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-purpel">Watch Signal</a></div>
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-purpel">Add watchlist</a></div>
              </div>
            </div>
    </div>
    <div class="col-sm-2 col-md-2 pricing-column-wrapper me-3">
      <div class="pricing-column">
              <div class="pricing-price-row">
                <div class="pricing-price-wrapper">
                  <div class="pricing-price">
                    <div class="pricing-cost">2.2 mil</div>
                    <div class="time">LTC - IDR</div>
                  </div>
                </div>
              </div>
              <div class="pricing-row-title">
                <div class="pricing_row_title">LTC - IDR</div>
              </div>
              <figure class="pricing-row">Real-Time price</figure>
              <figure class="pricing-row"><span>Conv: {{ convertltc }} BTC</span></figure>
              <figure class="pricing-row">Low: {{ ltclow1 }}</figure>
              <figure class="pricing-row">High: {{ ltchigh1 }}</figure>
              <figure class="pricing-row">Last: {{ ltclast1 }}</figure>
              <!-- <figure class="pricing-row strike">Lorem ipsum dolor</figure> -->
              <div class="pricing-footer">
                <div class="gem-button-container gem-button-position-center"> <a class="gem-button gem-orange">Watch Signal</a></div>
                <div class="gem-button-container gem-button-position-center"> <a class="gem-button gem-orange">Add Watchlist</a></div>
              </div>
            </div>
    </div>
    <div class="col-sm-2 col-md-2 pricing-column-wrapper me-3">
      <div class="pricing-column">
              <div class="pricing-price-row">
                <div class="pricing-price-wrapper">
                  <div class="pricing-price">
                    <div style=" " class="pricing-cost">3.7 th</div>
                    <div class="time" style="display:inline-block;">DOGE - IDR</div>
                  </div>
                </div>
              </div>
              <div class="pricing-row-title">
                <div class="pricing_row_title">DOGE - IDR</div>
              </div>
              <figure class="pricing-row">Real-Time price</figure>
              <figure class="pricing-row"><span>Conv: {{ convertdoge }} BTC</span></figure>
              <figure class="pricing-row">Low: {{ dogelow1 }}</figure>
              <figure class="pricing-row">High: {{ dogehigh1 }}</figure>
              <figure class="pricing-row">Last: {{ dogelast1 }}</figure>
              <!-- <figure class="pricing-row strike">Lorem ipsum dolor</figure> -->
              <div class="pricing-footer">
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-yellow">Watch Signal</a></div>
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-yellow">Add Watchlist</a></div>
              </div>
            </div>
    </div>
    <div class="col-sm-2 col-md-2 pricing-column-wrapper me-3">
      <div class="pricing-column">
              <div class="pricing-price-row">
                <div class="pricing-price-wrapper">
                  <div class="pricing-price">
                    <div style=" " class="pricing-cost">10.5 th</div>
                    <div class="time" style="display:inline-block;">XRP - IDR</div>
                  </div>
                </div>
              </div>
              <div class="pricing-row-title">
                <div class="pricing_row_title">XRP - IDR</div>
              </div>
              <figure class="pricing-row">Real-Time price</figure>
              <figure class="pricing-row"><span>Conv: {{ convertxrp }} BTC</span></figure>
              <figure class="pricing-row">Low: {{ xrplow1 }}</figure>
              <figure class="pricing-row">High: {{ xrphigh1 }}</figure>
              <figure class="pricing-row">Last: {{ xrplast1 }}</figure>
              <!-- <figure class="pricing-row strike">Lorem ipsum dolor</figure> -->
              <div class="pricing-footer">
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-cyan">Watch Signal</a></div>
                <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-cyan">Add Watchlist</a></div>
              </div>
            </div>
    </div>
    </div>

  </div>
 </div>
</div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Market',
  methods: {
    getMarket () {
      this.$store.dispatch('getMarket')
    },
    getConverted () {
      this.$store.dispatch('getConverted')
    }
  },
  created () {
    this.getMarket()
    this.getConverted()
  },
  computed: {
    ...mapState(['userInfo', 'isLogin', 'activePage', 'market', 'converted',
      'convertbtc', 'converteth', 'convertltc', 'convertdoge', 'convertxrp',
      'xrplow', 'xrphigh', 'xrplast', 'dogelow', 'dogehigh', 'dogelast', 'ltclow',
      'ltchigh', 'ltclast', 'ethlow', 'ethhigh', 'ethlast', 'btclow', 'btchigh', 'btclast']),
    xrplow1 () { return (this.xrplow).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    xrphigh1 () { return (this.xrphigh).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    xrplast1 () { return (this.xrplast).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    dogelow1 () { return (this.dogelow).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    dogehigh1 () { return (this.dogehigh).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    dogelast1 () { return (this.dogelast).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ltclow1 () { return (this.ltclow).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ltchigh1 () { return (this.ltchigh).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ltclast1 () { return (this.ltclast).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ethlow1 () { return (this.ethlow).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ethhigh1 () { return (this.ethhigh).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    ethlast1 () { return (this.ethlast).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    btclow1 () { return (this.btclow).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    btchigh1 () { return (this.btchigh).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    btclast1 () { return (this.btclast).toLocaleString('id', { style: 'currency', currency: 'IDR' }) }
  }
}
</script>

<style>
body
{
  background-color: #181828;
}

#mainCoantiner
{
  background-image:url("https://1.bp.blogspot.com/-Fo3iRt97ZXY/XvSG4EMwi0I/AAAAAAAAVEo/mrApRTcVVRk1m-fX9K-ffNwRUXlHUocdwCLcBGAsYHQ/s1600/h.jpg");
  background-color: #181828;
  height:100%;
  width:100%;
  padding-bottom: 50px;
}

.mystyleSec
{
  background-image: url(http://thepatternlibrary.com/img/h.jpg);
}

.mystylethird
{
background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/binding_dark.png");
}
/*************header*******/

.main-header {
    top: 0;
    left: 0;
    z-index: 20;
    -webkit-transform: translate3d(0,0,0);
    height: 70px;
    width: 100%;
    bottom: inherit;
    text-align: center;
    background: rgba(28, 31, 47, 0.16);
    overflow: hidden;
    border: 1px solid #2e344d;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03);
    border-width: 1px 0px 0 1px;
}

.folio-btn {
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.03);
    border-top: 1px solid rgba(255,255,255,0.1);
    right: 0;
    height: 70px;
    width: 70px;
}

.folio-btn-item {
position: absolute;
    width: 40px;
    height: 40px;
    left: 15px;
    top: 15px;
}

.folio-btn-dot {
    float: left;
    width: 33.3%;
    height: 33.3%;
    position: relative;
}

.folio-btn-dot:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    transition: all 300ms linear;
    transform: scale(1.0);
}

.folio-btn-dot:before
{
  background: #00BCD4;
}

.folio-btn:hover .folio-btn-dot:first-child:before, .folio-btn:hover .folio-btn-dot:nth-child(3):before, .folio-btn:hover .folio-btn-dot:nth-child(4):before, .folio-btn:hover .folio-btn-dot:nth-child(8):before {
    transform: scale(1.8);
    opacity: 0.5;
}

/***social***/
.header-social {
position: absolute;
    z-index: 20;
    width: auto;
    bottom: 17px;
    right: 90px;
    padding: 0;
    min-width: 140px;
    box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
    border-width: 1px 0px 0px 1px;
    border-style: solid;
    border-color: #2e344d;
}

.header-social:before
{
  background: #00BCD4;
}

.header-social:before {
    content: '';
    position: absolute;
    left: 50%;
    top: -3px;
    width: 36px;
    margin-left: -18px;
    height: 6px;
}

.header-social li {
    display: block;
    float: left;
    margin-top: 0;
}

.header-social li a {
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    font-size: 12px;
    border-style: solid;
    color: rgba(255, 255, 255, 0.41);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 300ms linear;
}

.header-social li a:hover
{
  color:  #00BCD4;
  cursor:pointer;
}

ul, li
{
      border: none;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    text-decoration: none;
    margin: 0;
    padding: 0;
}

ol, ul {
    list-style: none;
}

.main-header:before {
    content: '';
    position: absolute;
    left: 10px;
    width: 60px;
    height: 1px;
    bottom: 120px;
    background: rgba(255,255,255,0.1);
}

/***end*****/

.card{    border: none;
    border-radius: 30px;
background-color: #14edaa;}

.wow-bg
{
  background-color: #141421;
  border: 1px solid #2e2e4c;
  box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
  border-radius: 10px;
  margin-top: 4px;
}

.starsec{
  content: " ";
    position: absolute;
    width: 3px;
    height: 3px;
    background: transparent;
   box-shadow: 571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336;
  animation: animStar 150s linear infinite;
}

.starthird
{
  content: " ";
    position: absolute;
    width: 3px;
    height: 3px;
    background: transparent;
   box-shadow: 571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336;
  animation: animStar 10s linear infinite;
}

.starfourth
{
  content: " ";
    position: absolute;
    width: 2px;
    height: 2px;
    background: transparent;
   box-shadow: 571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336;
  animation: animStar 50s linear infinite;
}

.starfifth
{
  content: " ";
    position: absolute;
    width: 1px;
    height: 1px;
    background: transparent;
   box-shadow: 571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336;
  animation: animStar 80s linear infinite;
}

@keyframes animStar
{
  0% {
    transform: translateY(0px);
}
  100% {
    transform: translateY(-2000px);
}
}

.logn-btn
{
     background: #1c1f2f;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #2e344d;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    /* box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04); */
    box-shadow: 0px 2px 26px rgb(0,0,0,0.5), 0px 7px 13px rgba(255,255,255, 0.03);
    margin-top: 30px;
}

.logn-btn:hover
{
  background-color: #1c1f2f;
    border-radius: 50px;
    min-width: 140px;
    /* box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04); */
    box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
    border-width: 1px 0px 0px 1px;
    border-style: solid;
    border-color: #2e344d;
}

.textbox-dg
{
  background: rgba(28, 31, 47, 0.16);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #2e344d;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    /* box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04); */
    box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03);
    border-width: 1px 0px 0 1px;
      margin-top: 15px;
}

.form-control:focus
{
  border: 1px solid #344d2e;
  color: #495057;
    outline: 0;
    background: rgb(17, 20, 31);
    border-radius: 4px;
  transition: all 0.3s ease-in-out 0s;
    /* box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04); */
    box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03);
}

.btn-link {
    color: #344d2e;
}

.btn-link:hover {
    color: #2b7a19;
    text-decoration: underline;
}

.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #807f7f;
    background-color: transparent;
    border-color: #2b7a19;
}

.btn-primary.focus, .btn-primary:focus {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    box-shadow: 0 0 0 0.2rem rgba(0, 255, 110, 0.25);
}

.mt-6, .my-6 {
    margin-top: 2rem !important;
}

.socila-btn
{
  height: 40px;
    border-radius: 10%;
    width: 40px;
    box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
    border-width: 1px 0px 0px 1px;
    border-style: solid;
    border-color: rgba(255,255,255, 0.2);
    margin-right: 10px;
}

.fb-color
{
  color:#3b5998 ;
}

.incolor
{
  color:#007bff;
}

.tweetcolor
{
  color:#41a4f7;
}
.driblecolor
{
  color:#e83e8c;
}

.colorboard
{
  color: #00ffaaed;
}

/***********pricing table**********/
.title-h1 {
  margin-top:0.5em;
       margin-bottom: 1.4em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: inherit;
    color: #ffffff;
    font-size: 38px;
}

.title-h1 .light
{
  font-weight: normal;
}

.pricing-price-wrapper
{
      background-color: rgba(71, 71, 72, 0.2);
  border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    padding-top: 45px;
  padding-bottom: 34px;
      text-align: center;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.13), -20px -20px 60px rgba(29, 29, 29, 0.08);
}
.pricing-price
{
  background-color: #393b4a;
  background-color: #00bcd4;
    -webkit-box-shadow: 0px 0px 0px 10px rgba(0, 188, 212, 0.31);
    -moz-box-shadow: 0px 0px 0px 10px rgba(0, 188, 212, 0.31);
    box-shadow: 0px 0px 0px 10px rgba(0, 188, 212, 0.31);
  color: #fff;
  border-radius: 50%;
    height: 180px;
    width: 180px;
    display: inline-block;
    padding-top: 46px;
}

.pricing-cost {
    font-size: 50px;
    font-weight: 300;
    line-height: 1;
}

.pricing-table-style-4 .time {
    font-size: 24px;
    font-weight: 300;
}

.pricing-row-title
{
  background-color: #303241;
  padding: 26px 10px;
      text-align: center;
}

.pricing_row_title {
    color: #00bcd4;
  line-height: 38px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.pricing-table.pricing-table-style-4 .pricing-row
{
  background-color: #393b4a;
}
.pricing-table-style-4 figure.pricing-row:first-of-type {
    padding-top: 15px;
}
.pricing-table-style-4 .pricing-row {
    padding: 5px 10px;
}
figure {
    margin: 0;
  display: block;
}

figure {
display: block;
    padding-block-start: 0.4em;
    padding-block-end: 0.4em;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    background-color: rgba(51, 51, 51, 0.4117647058823529);
    text-align: left;
}

.pricing-row:before {
    vertical-align: middle;
   content: "\f058";
    font-family: "Font Awesome 5 Free";
    /* color: #4be445; */
    color: #00bfa5;
    text-align: center;
    padding-right: 10px;
}

.strike:before
{
  content:none;
}
.pricing_row_title {
    /* color: #4cce24; */
    color: #00bcd4;
}

body
{
  color: #0fb926;
  /* color: #5f727f; */
}

.pricing-column
{
  float: none;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin-bottom: 42px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.pricing-column-wrapper {
    min-width: 271px;
  text-align: center;
}

.pricing-row-title {
    /* background-color: rgba(45, 63, 196, 0.2); */
    background-color: rgba(48, 50, 65, 0.2);
}

.margin-body
{
        position: relative;
    width: 90%;
    box-sizing: border-box;
    margin: auto;
}

.pricing-row
{
  /* border-top: 1px solid #2dbd2d3b; */
  border-top: 1px solid #7273723b;
}

.pricing-price-wrapper
{
  border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    padding-top: 45px;
}

.pricing-column-wrapper + .pricing-column-wrapper .pricing-price {
    /* background-color: #33d340; */
    /* ! kedua */
    background-color: #a637ec;
    -webkit-box-shadow: 0px 0px 0px 10px rgba(166, 55, 236, 0.31);
    -moz-box-shadow: 0px 0px 0px 10px rgba(166, 55, 236, 0.31);
    box-shadow: 0px 0px 0px 10px rgba(166, 55, 236, 0.31);
}

.strike
{
  text-decoration: line-through;
    color: #99a9b5;
}

.pricing-column-wrapper + .pricing-column-wrapper .pricing_row_title {
    color: #a637ec;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing_row_title {
    color: #ee417c;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-price {
    /* background-color: #3330e7; */
    background-color: #ee417c;
    -webkit-box-shadow: 0px 0px 0px 10px rgba(238, 65, 124, 0.31);
    -moz-box-shadow: 0px 0px 0px 10px rgba(238, 65, 124, 0.31);
    box-shadow: 0px 0px 0px 10px rgba(238, 65, 124, 0.31);
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing_row_title {
    /* color: #c8da2d; */
    color: #ff994e;
}
/* ! kelimaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa KELIMA */
.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing_row_title {
    /* color: #c8da2d; */
    color: #78DEC7;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-price {
    /* background-color: #0cd115; */
    /* ! keempat */
    background-color: #ff994e;
    /* -webkit-box-shadow: 0px 0px 0px 10px rgba(219, 44, 21, 0.31); */
    -webkit-box-shadow: 0px 0px 0px 10px rgba(255, 153, 78, 0.31);
    /* -moz-box-shadow: 0px 0px 0px 10px rgba(219, 44, 21, 0.31); */
    -moz-box-shadow: 0px 0px 0px 10px rgba(255, 153, 78, 0.31);
    /* box-shadow: 0px 0px 0px 10px rgba(219, 44, 21, 0.31); */
    box-shadow: 0px 0px 0px 10px rgba(255, 153, 78, 0.31);
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-price {
    /* background-color: #0cd115; */
    /* ! KELIMA */
    background-color: #78DEC7;
    -webkit-box-shadow: 0px 0px 0px 10px rgba(80, 241, 247, 0.31);
    -moz-box-shadow: 0px 0px 0px 10px rgba(80, 241, 247, 0.31);
    box-shadow: 0px 0px 0px 10px rgba(80, 241, 247, 0.31);
}

.pricing-column-wrapper + .pricing-column-wrapper .pricing-row:before{
    color: #a637ec;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-row:before
{
  color: #ee417c;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-row:before
{
  /* color: #272ae0; */
  color: #ff994e;
}
 /* ! // tombol */
.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-row:before
{
  /* color: #272ae0; */
  color: #78DEC7;
}

.gem-button
{
  cursor: pointer;
  border-width: 2px;
  line-height: 36px;
  border-style: solid;
  background: transparent;
  height: 40px;
  line-height: 40px;
  padding: 0 17px;
  font-size: 14px;
  margin: 25px;
  position: relative;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  vertical-align: middle;
}
.gem-green
{
  border-radius: 0px;
  border-color: rgb(0, 188, 212);
  color: rgb(0, 188, 212) !important;
}
.gem-green:hover
{
  background-color: rgb(0, 188, 212);
  color: rgb(255, 255, 255) !important;
}

.gem-purpel
{
  border-radius: 0px;
  border-color: rgb(166, 55, 236);
  color: rgb(166, 55, 236) !important;
}

.gem-purpel:hover
{
  background-color: #a637ec;
  color: rgb(255, 255, 255) !important;
}

.gem-orange
{
  border-radius: 0px;
  border-color: #ee417c;
  color: #ee417c !important;
}

.gem-orange:hover
{
  background-color: #ee417c;
  color: rgb(255, 255, 255) !important;
}

.gem-yellow
{
  border-radius: 0px;
  border-color: #ff994e;
  color: #ff994e !important;
}
.gem-yellow:hover
{
  background-color: #ff994e;
  color: rgb(255, 255, 255) !important;
}
/* ! BUTTON tombol */
.gem-cyan
{
  border-radius: 0px;
  border-color: #78DEC7;
  color: #78DEC7 !important;
}
.gem-cyan:hover
{
  background-color: #78DEC7;
  color: rgb(255, 255, 255) !important;
}

.gem-button-position-center {
  text-align: center;
  display: block;
  background-color: rgba(0, 0, 0, 0.16862745098039217);
  border-radius: 0px 0px 10px 10px;
}
/* ! CAHAYA BOX lighting lightiiiiiiiiiiiiiiiiiiiiiiiing */
.pricing-column:hover .pricing-price-wrapper
{
  box-shadow: 0px 35px 80px rgba(4, 255, 236, 0.25), 0px 0px 0px rgba(10, 197, 173, 0.33);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.pricing-column:hover
{
  overflow:hidden;
}

.pricing-column-wrapper + .pricing-column-wrapper .pricing-column:hover .pricing-price-wrapper
{
  box-shadow: 0px 35px 80px rgba(230, 2, 241, 0.34), 0px 0px 0px rgba(21, 21, 20, 0.79);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-column:hover .pricing-price-wrapper
{
  box-shadow: 0px 35px 80px rgba(255, 4, 166, 0.25), 0px 0px 0px rgba(222, 6, 84, 0.33);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-column:hover .pricing-price-wrapper
{
  box-shadow: 0px 35px 80px rgba(241, 139, 2, 0.34), 0px 0px 0px rgba(21, 21, 20, 0.79);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper + .pricing-column-wrapper .pricing-column:hover .pricing-price-wrapper
{
  box-shadow: 0px 35px 80px rgba(4, 255, 236, 0.25), 0px 0px 0px rgba(10, 197, 173, 0.33);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
</style>
