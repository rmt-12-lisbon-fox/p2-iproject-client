<template>
  <tr>
    <td>{{ m.title }}</td>
    <td style="text-align:center">Otto</td>
    <td style="text-align:center">Otto</td>
    <td style="text-align:center">Otto</td>
    <td style="text-align:center">Otto</td>
    <td class="btn-action">
      <button class="btn btn-danger" >Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PortoRow',
  props: ['m', 'i']

}
</script>

<style>

</style>
