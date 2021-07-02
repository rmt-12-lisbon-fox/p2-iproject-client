<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
          <div class="container">
            <div class=" text-center mt-5 "> <br><br><br><br><br>
              <h1 class="text-dark">Add your Investment to this Portofolio</h1>
            </div>
            <div class="row ">
              <div class="col-sm-12 mx-auto">
                <div class="card mt-2 mx-auto p-4 bg-light">
                  <div class="card-body bg-light">
                    <div class="container">
                      <form @submit.prevent="addPorto">
                        <div class="mb3">
                          <label for="ticker">Tickers</label>
                          <select class="form-select" id="specificSizeSelect" v-model="porto.title">
                            <option selected>Choose...</option>
                            <option class="text-primary" value="BTCIDR">BTC-IDR</option>
                            <option class="text-primary" value="ETHIDR">ETH-IDR</option>
                            <option class="text-primary" value="LTCIDR">LTC-IDR</option>
                            <option class="text-primary" value="LTCIDR">DOGE-IDR</option>
                            <option class="text-primary" value="LTCIDR">XRP-IDR</option>
                          </select>
                        </div>

                        <div class="mb3">
                          <label for="quantity">Quantity</label>
                          <input type="text" id="quantity" class="form-control text-primary" v-model="porto.quantity"
                            placeholder="jumlah uang dalam rupiah">
                        </div>
                        <div class="mb3">
                          <label for="quantity">Price</label>
                          <input type="text" id="quantity" class="form-control text-primary" v-model="porto.price"
                            placeholder="harga saat transaksi">
                        </div>
                        <div class="mb3">
                          <label for="ticker">Status</label>
                          <select class="form-select" id="specificSizeSelect" v-model="porto.status">
                            <option selected>Choose...</option>
                            <option class="text-primary" value="buy">BUY</option>
                            <option class="text-primary" value="sell">SELL</option>
                          </select>
                        </div> <br>
                        <button type="submit" class="btn btn-primary">Add Porto</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br><br><br><br><br><br><br><br>
        </div>
        <div class="col-sm-6"> <br><br><br><br><br>
          <div class=" text-center mt-5 ">
            <h1 class="text-dark">My Portofolio</h1>
          </div><br>
          <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <PortoRow
              v-for="(m,i) in siporto" :key="i" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  mapState
} from 'vuex'
import PortoRow from '../components/PortoRow.vue'
export default {
  name: 'Portofolio',
  components: {
    PortoRow
  },
  data () {
    return {
      porto: {
        title: '',
        quantity: '',
        price: '',
        status: ''
      }
    }
  },
  methods: {
    addPorto () {
      const payload = {
        ...this.porto
      }
      this.$store.dispatch('addPorto', payload)
    },
    Porto () {
      this.$store.dispatch('siporto')
    }
  },
  computed: {
    ...mapState(['siporto'])
  },
  created () {
    this.Porto()
  }

}
</script>

<style scoped>
  /* aaaaaaaaaaaa */
  body {
    font-family: 'Lato', sans-serif
  }

  h1 {
    margin-bottom: 40px
  }

  label {
    color: #0c0c0c
  }

  .btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 80%;
    margin-left: 3px
  }

  .help-block.with-errors {
    color: #ff5050;
    margin-top: 5px
  }

  .card {
    margin-left: 10px;
    margin-right: 10px
  }
</style>
