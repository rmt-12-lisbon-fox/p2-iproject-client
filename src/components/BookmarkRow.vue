<template>
  <tr>
    <th scope="row">{{i+1}}</th>
    <td class="">
      <img :src="el.image_url" alt="" width="80" height="100">
    </td>
    <td>{{ el.title }}</td>
    <td>
      <select class="form-select text-white bg-transparent">
        <option value="Plan to watch">Plan to Watch</option>
        <option value="Watched">Watched</option>
      </select>
    </td>
    <td>
      <a type="click" class="btn btn-outline-light ms-2" target="_blank"
        @click.prevent=""
       >Delete</a>
    </td>
  </tr>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'BookmarkRow',
  props: ['el', 'i'],
  data() {
    return {
    }
  },
  methods: {
    deleteBookmark(value) {
        this.$store.dispatch('deleteBookmark' , value)
    }
  }
}
</script>

<style>

</style>