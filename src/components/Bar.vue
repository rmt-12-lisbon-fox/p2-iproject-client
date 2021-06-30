<template>
      <nav id="sidebar">
        <ul class="list-unstyled components">
            <li >
              <a ><strong>Just Curious About Food Nutrition? Search Then </strong></a>
              <div class="input-group input-group-sm mb-3 mx-auto w-75"  >
                <input v-model="substring" type="text" class="form-control m-auto " >
              </div>
            </li>
        </ul>

        <ul class="list-unstyled CTAs">
            <li>
                <a class="download clickable " @click="search" >Search</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      substring: '',
      status: ''
    }
  },
  methods: {
    search () {
      const payload = {}
      if (this.substring) payload.name = this.substring
      if (this.selectedGenres) payload.genre = this.selectedGenres
      this.$store.dispatch('search', payload)
      this.$router.push({ name : "Search"})
    }
  },
  computed: {
    genresDB () {
      return this.$store.state.genresDB
    }
  }
}
</script>

<style scoped >

.list-unstyled.components {
    margin-top: 20vh;
}

li {
    list-style-type: none;
}

.filterGenre{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filterGenre input {
    margin: 7px;

}

.input-group.input-group-sm.mb-3.mx-3.w-75{
    display: flex !important;
    flex-direction: row !important;
    margin: auto;
}

.input-group.input-group-sm.mb-3.mx-3.w-75 input{
    justify-content: center;
}

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    text-decoration: none;
    color: inherit;
    text-decoration: none;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
    z-index: 1;
    position: relative;
    height: 100vh;
    position: fixed;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
  </style>
