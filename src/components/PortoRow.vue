<template>
  <tr>
    <td>{{ i + 1 }}</td>
    <td style="text-align:center">{{ m.title }}</td>
    <td style="text-align:center">{{ quantity }}</td>
    <td style="text-align:center">{{ price }}</td>
    <td style="text-align:center">{{ m.status }}</td>
    <td style="text-align:center">{{ profitNloss }}</td>
    <td style="text-align:center" class="btn-action">
      <button @click="toDelete(m.id)" class="btn btn-danger" >Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PortoRow',
  props: ['m', 'i'],
  methods: {
    toDelete (payload) {
      this.$store.dispatch('toDelete', payload)
    }
  },
  computed: {
    ...mapState(['btclast', 'ethlast', 'ltclast', 'dogelast', 'xrplast']),
    quantity () { return (this.m.quantity).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    price () { return (this.m.price).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    profitNloss () { return this.m.title === 'BTCIDR' ? `${Math.round(((this.btclast / this.m.price) - 1) * 100)} %` : this.m.title === 'ETHIDR' ? `${Math.round(((this.ethlast / this.m.price) - 1) * 100)} %` : this.m.title === 'LTCIDR' ? `${Math.round(((this.ltclast / this.m.price) - 1) * 100)} %` : this.m.title === 'XRPIDR' ? `${Math.round(((this.xrplast / this.m.price) - 1) * 100)} %` : `${Math.round(((this.dogelast / this.m.price) - 1) * 100)} %` }
  }

}
</script>

<style>

</style>
