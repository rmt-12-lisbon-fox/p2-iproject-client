<template>
  <tr>
    <td>{{ i + 1 }}</td>
    <td style="text-align:center">{{ m.title }}</td>
    <td style="text-align:center">{{ quantity }}</td>
    <td style="text-align:center">{{ price }}</td>
    <td style="text-align:center">{{ m.status }}</td>
    <td style="text-align:center">{{ profitNloss }}</td>
    <td style="text-align:center" class="btn-action">
      <button class="btn btn-danger" >Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PortoRow',
  props: ['m', 'i'],
  computed: {
    ...mapState(['btclast', 'ethlast', 'ltclast', 'dogelast', 'xrplast']),
    quantity () { return (this.m.quantity).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    price () { return (this.m.price).toLocaleString('id', { style: 'currency', currency: 'IDR' }) },
    profitNloss () { return this.m.title === 'BTCIDR' ? (+this.btclast) : (this.m.status) }
  }

}
</script>

<style>

</style>
