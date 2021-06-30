<template>
    <div class="h-14 min-w-full px-8 z-20 fixed bg-third flex justify-between items-center shadow-xl">
      <div>
        <router-link to="/">
          <h2 class="font-mono text-2xl text-primary font-extrabold">Nreview</h2>
        </router-link>
      </div>
      <div class="flex space-x-3">
        <!-- <router-link  to="/bookmark" class="text-xl text-white hover:text-fourth">Bookmark</router-link> -->
        <button @click="logout" class="text-xl text-white hover:text-secondary">Logout</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logout() {
            localStorage.clear();
            this.$store.commit('LOGOUT');
            this.$router.push({ path: '/login' });
        }
    }
}
</script>

<style>

</style>