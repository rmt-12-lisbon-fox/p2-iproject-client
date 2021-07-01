<template>
<section>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active" style="background-image: url('https://images.unsplash.com/photo-1617854611335-e54f6f1b1f42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')">
      <!-- <div class="carousel-item active" style="background-image: url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')"> -->
        <div class="carousel-caption d-none d-md-block">
          <!-- <h3 class="display-4 text-dark fw-bold">Change strategy and customizable</h3>
          <p class="lead">Accurate signal never seen before</p> -->
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Second Slide</h3>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Third Slide</h3>
          <p class="lead">This is a description for the third slide.</p>
        </div>
      </div>
    </div>
    <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> -->
  </div>

  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center col-12">
  <div class="col-md-12 ">
    <!-- <div class="col-12">
    <img src="@/assets/logo3.jpg" style="width: 1300px; height: 500px;" alt=""> <br><br>
    </div> -->
    <div class="row ">
      <div class="d-flex justify-content-center">
        <div class="col-xl-3 col-lg-6 me-3">
            <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fab fa-bitcoin"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">BTC Bitcoin</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ btc }}
                            </h2>
                        </div>
                        <div class="col-4 text-right fs-3">
                            <span>{{ signalBtc }}</span>
                        </div>
                        <!-- <div class="col-4 text-right">
                            <span>12.5% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 me-3">
            <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fab fa-ethereum"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">ETH Ethereum</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ eth }}
                            </h2>
                        </div>
                        <div class="col-4 text-right fs-3">
                            <span>{{ signalEth }}</span>
                        </div>
                        <!-- <div class="col-4 text-right">
                            <span>9.23% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 me-3">
            <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fab fa-bitcoin"></i></div>
                    <!-- <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div> -->
                    <div class="mb-4">
                        <h5 class="card-title mb-0">LTC Litecoin</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ ltc }}
                            </h2>
                        </div>
                        <div class="col-4 text-right fs-3">
                            <span>{{ signalLtc }}</span>
                        </div>
                        <!-- <div class="col-4 text-right">
                            <span>10% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </div>
    <div class="row ">
      <div class="d-flex justify-content-center">
        <div class="col-xl-3 col-lg-6 me-3">
            <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fab fa-bitcoin"></i></div>
                    <!-- <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div> -->
                    <div class="mb-4">
                        <h5 class="card-title mb-0">DOGE Dogecoin</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ doge }}
                            </h2>
                        </div>
                        <div class="col-4 text-right fs-3">
                            <span>{{ signalDoge }}</span>
                        </div>
                        <!-- <div class="col-4 text-right">
                            <span>2.5% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6 me-3">
            <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fab fa-ethereum"></i></div>
                    <!-- <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div> -->
                    <div class="mb-4">
                        <h5 class="card-title mb-0">XRP Ripple</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ xrp }}
                            </h2>
                        </div>
                        <div class="col-4 text-right fs-3">
                            <span>{{ signalXrp }}</span>
                        </div>
                        <!-- <div class="col-4 text-right">
                            <span>2.5% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
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
  name: 'Signal',
  computed: {
    ...mapState(['userInfo', 'isLogin', 'activePage', 'market', 'converted',
      'convertbtc', 'converteth', 'convertltc', 'convertdoge', 'convertxrp',
      'xrplow', 'xrphigh', 'xrplast', 'dogelow', 'dogehigh', 'dogelast', 'ltclow',
      'ltchigh', 'ltclast', 'ethlow', 'ethhigh', 'ethlast', 'btclow', 'btchigh', 'btclast',
      'signalBtc', 'signalEth', 'signalLtc', 'signalDoge', 'signalXrp']),
    btc () { return `${(this.btclast + '').substring(0, 3)} jt` },
    eth () { return `${(this.ethlast + '').substring(0, 2)} jt` },
    ltc () { return `${(this.ltclast + '').substring(0, 1)}.${(this.ltclast + '').substring(1, 2)} jt` },
    doge () { return `${(this.dogelast + '').substring(0, 1)}.${(this.dogelast + '').substring(1, 2)} rb` },
    xrp () { return this.xrplast >= 10000 ? `${(this.xrplast + '').substring(0, 2)}.${(this.xrplast + '').substring(2, 3)} rb` : `${(this.xrplast + '').substring(0, 1)}.${(this.xrplast + '').substring(1, 2)} rb` }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('getMarket')
      this.$store.dispatch('getConverted')
      this.$store.dispatch('getBtc')
      this.$store.dispatch('getEth')
      this.$store.dispatch('getLtc')
      this.$store.dispatch('getDoge')
      this.$store.dispatch('getXrp')
    }
  }

}
</script>

<style>
.card {
    background-color: #fff;
    border-radius: 10px;
    border: none;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
}
.l-bg-cherry {
    background: linear-gradient(to right, #493240, #f09) !important;
    color: #fff;
}

.l-bg-blue-dark {
    background: linear-gradient(to right, #373b44, #4286f4) !important;
    color: #fff;
}

.l-bg-green-dark {
    background: linear-gradient(to right, #0a504a, #38ef7d) !important;
    color: #fff;
}

.l-bg-orange-dark {
    background: linear-gradient(to right, #a86008, #ffba56) !important;
    /* background: linear-gradient(to right, #d11bc8, #e65cd3) !important; */
    color: #fff;
}

.l-bg-purple {
    background: linear-gradient(to right, #d11bc8, #e65cd3) !important;
    color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
    font-size: 110px;
}

.card .card-statistic-3 .card-icon {
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    color: #000;
    position: absolute;
    right: -5px;
    top: 20px;
    opacity: 0.1;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}

.l-bg-green {
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
    color: #fff;
}

.l-bg-orange {
    background: linear-gradient(to right, #f9900e, #ffba56) !important;
    color: #fff;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}
</style>
