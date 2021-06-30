<template>
  <tr  >
    <th scope="row">1</th>
    <td> {{ formattedDate }} </td>
    <td> {{ row.Food.name}} </td>
    <td> {{ row.Food.protein}} </td>
    <td> {{ row.Food.energy}} </td>
    <td> {{ row.Food.fat}} </td>
    <td> {{ row.Food.cholesterol}} </td>
    <td> {{ row.Food.carbohydrate}} </td>
    <td> {{ row.Food.sugars}} </td>
</tr>
</template>

<script>

export default {
  props : ["row"],
  computed : {
    formattedDate() {
      return new Date(this.row.createdAt).toString().substring(0, 25)
    }
  }
}
</script>

<style>

</style>