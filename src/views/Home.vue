<template>
  <div class="home">
    <h1>KetawaIN</h1>
    <div class="container">
    <div id="kata-pengantar" class="desktop-12 mobile-3">
      <div style="margin: 40px 20% 30px 20%; width: 60%; text-align: center; padding: 25px; border: 1px solid #ffffff;">
        <h3 style="margin-bottom: 20px;">Tempat dimana anda dapat berbagi tawa dan referensi komedi yang anda miliki dengan orang lain</h3>
        <p style="text-align: left; padding-bottom: 10px;">* JIKA SUDAH PUNYA AKUN: Klik tombol log in dibawah.</p>
        <p style="text-align: left; padding-bottom: 10px;">* JIKA BELUM PUNYA AKUN: Klik tombol register dibawah.</p>
        <p style="text-align: left; padding-bottom: 10px;">* KALAU SUDAH NGELAKUIN 2 HAL DIATAS: Tinggal masuk dan nikmatin.<br><br><i>NOTE: Harap jangan nyebelin :)</i></p>
      </div>
    </div>
    </div>
    <div>
      <b-button block variant="danger" class="login-btn" @click.prevent="toPage('/login')">Log In</b-button>
    </div>
    <div>
      <b-button block variant="outline-danger" class="register-btn">Register</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toPage (page) {
      this.$router.push(page).catch(() => {})
    }
  }
}
</script>

<style>
.home h1{
  color: rgba(245, 245, 245, 0.808);
  font-family:fantasy;
  background: #363636;
  margin-left: 40%;
  margin-right: 40%;
}
#kata-pengantar {
  color: rgba(245, 245, 245, 0.808);
}
.login-btn {
  margin: 10px;
  width: 500px;
}
.register-btn {
  margin: 10px;
  margin-bottom: 50px;
  width: 500px;
}
.register-btn:hover {
  margin: 10px;
  margin-bottom: 50px;
  width: 500px;
  color: red !important;
  background-color:rgb(68, 27, 20) !important;
}
</style>
