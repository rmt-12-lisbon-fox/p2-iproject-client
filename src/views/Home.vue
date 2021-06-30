<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <div class="card mb-3 mt-5 mb-3 w-75 card shadow p-3 mb-5 bg-body rounde">
        <img
          src="https://ministry-to-children.com/wp-content/uploads/2015/11/paper-chain.jpg"
          class="card-img-top"
          alt="image"
          style=""
        />
        <div class="card-body">
          <h5 class="card-title  flex-row d-inline">Translate</h5>
          <!-- <div class="form-group " v-if="translate === 'ind-en'"> -->
          <div
            class="translateIndEng flex-column mt-2"
            v-if="typeTranslate % 2 === 0"
          >
            <label for="input-kata" class="sr-only"></label>
            <input
              type="text"
              v-model="textInd"
              @keyup="translateText"
              name="textInd"
              id="textInd"
              class="form-control d-inline-block rounded"
              style="width: 470px"
              placeholder="Masukkan teks bahasa indonesia"
            />
            <button
              class="ms-3 me-3 fas fa-arrows-alt-h btn-secondary d-inline-block rounded"
              style="height: 38px; width: 38px;"
              @click.prevent="buttonChange"
            ></button>
            <label for="textTranslateResultInd" class="sr-only"></label>
            <input
              type="text"
              v-model="translate.resultTextInd"
              name="textTranslateResultInd"
              id="textResultInd"
              style="width: 470px"
              class="form-control d-inline-block"
              placeholder="Hasil teks bahasa inggris"
            />
          </div>

          <div
            class="translateEngInd flex-column mt-2"
            v-if="typeTranslate % 2 !== 0"
          >
            <label for="input-kata" class="sr-only"></label>
            <input
              type="text"
              v-model="textEng"
              @keyup="translateText"
              name="textEng"
              id="textEng"
              class="form-control d-inline-block"
              style="width: 470px"
              placeholder="Masukkan teks bahasa inggris"
            />
            <button
              class="ms-3 me-3 fas fa-arrows-alt-h btn-secondary d-inline-block rounded"
              style="height: 38px; width: 38px;"
              @click.prevent="buttonChange"
            ></button>
            <label for="textTranslateResultInd" class="sr-only"></label>
            <input
              type="text"
              v-model="translate.resultTextEng"
              name="textTranslateResultInd"
              id="textResultEng"
              style="width: 470px"
              class="form-control d-inline-block"
              placeholder="Hasil teks bahasa indonesia"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: mapState(["translate"]),
  data() {
    return {
      textInd: "",
      textResultInd: "",
      textEng: "",
      textResultEng: "",
      typeTranslate: 0
    };
  },
  methods: {
    translateText() {
      this.$store.dispatch("translateText", {
        textInd: this.textInd,
        textEng: this.textEng,
        typeTranslate: this.typeTranslate
      });
    },
    buttonChange() {
      this.typeTranslate++;
    },
    toHomePage() {
      this.$store.dispatch("toHomePage");
    }
  },
  created() {
    this.toHomePage();
  }
};
</script>
