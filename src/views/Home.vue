<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <div class="card mb-3 mt-5 mb-3 w-50 card shadow p-3 mb-5 bg-body rounde">
        <img
          src="https://ministry-to-children.com/wp-content/uploads/2015/11/paper-chain.jpg"
          class="card-img-top"
          alt="image"
          style=""
        />
        <div class="card-body rounded">
          <h5 class="card-title  flex-row d-inline">Translate</h5>
          <!-- <div class="form-group " v-if="translate === 'ind-en'"> -->
          <div
            class="translateIndEng flex-column mt-2 justify-content-between"
            v-if="typeTranslate % 2 === 0"
          >
            <label for="input-kata" class="sr-only"></label>
            <textarea
              type="text"
              v-model="textInd"
              @keyup="translateText"
              name="textInd"
              id="textInd"
              class="form-control d-inline-block rounded"
              style="width: 44%;"
              placeholder="Masukkan teks bahasa indonesia"
            />
            <button
              class="ms-3 me-3 fas fa-arrows-alt-h btn-primary d-inline-block rounded"
              style="height: 38px; width: 38px;position:absolute; margin: 13px 0px 0px 28px;"
              @click.prevent="buttonChange"
            ></button>
            <label for="textTranslateResultInd" class="sr-only"></label>
            <textarea
              type="text"
              v-model="translate.resultTextInd"
              name="textTranslateResultInd"
              id="textResultInd"
              style="width: 44%;  margin: 0px 0px 0px 73px;"
              class="form-control d-inline-block"
              placeholder="Hasil teks bahasa inggris"
            />
          </div>

          <div
            class="translateEngInd flex-column mt-2 justify-content-between"
            v-if="typeTranslate % 2 !== 0"
          >
            <label for="input-kata" class="sr-only"></label>
            <textarea
              type="text"
              v-model="textEng"
              @keyup="translateText"
              name="textEng"
              id="textEng"
              class="form-control d-inline-block"
              style="width: 44%"
              placeholder="Masukkan teks bahasa inggris"
            />
            <button
              class="ms-3 me-3 fas fa-arrows-alt-h btn-primary d-inline-block rounded"
              style="height: 38px; width: 38px;position:absolute; margin: 13px 0px 0px 28px;"
              @click.prevent="buttonChange"
            ></button>
            <label for="textTranslateResultInd" class="sr-only mb-4"></label>
            <textarea
              type="text"
              v-model="translate.resultTextEng"
              name="textTranslateResultInd"
              id="textResultEng"
              style="width: 44%;  margin: 0px 0px 0px 73px;"
              class="form-control d-inline-block"
              placeholder="Hasil teks bahasa indonesia"
            />
          </div>

          <h5 class="card-title d-inline-block mt-3">Grammer Check</h5>
          <div class="d-inline " v-if="grammerCheck.value">
            <i style="color: green" class="fas ms-3 fa-check-square fa-lg"></i>
            <h6 class="card-title ms-1 d-inline mt-2">no mistakes</h6>
          </div>
          <label for="textTranslateResultInd" class="sr-only"></label>
          <form @submit.prevent="submitGrammerCheck">
            <textarea
              type="text"
              v-model="grammerCheckModel"
              id="grammerCheck"
              style="width: 100%;"
              class="form-control d-inline-block"
              placeholder="Silahkan masukkan kalimat yang mau dicek grammernya"
            />
            <div class="form-control mb-2" v-if="grammerCheck.result.length">
              <div v-for="(err, index) in grammerCheck.result" :key="index">
                <div v-if="err.message">
                  <h6 style="color: red;">
                    {{ err.message }}
                  </h6>
                  <div
                    class="d-inline"
                    v-for="(replace, index) in err.replacements"
                    :key="index"
                  >
                    <div class="d-inline flex-col">
                      <h6>Replace with: {{ replace.value }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary mt-1" type="submit">Check</button>
            <button
              class="btn btn-danger ms-2 mt-1"
              @click.prevent="resetFormGrammerCheck"
            >
              Reset
            </button>
          </form>
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
  computed: mapState(["translate", "grammerCheck"]),

  data() {
    return {
      textInd: "",
      textResultInd: "",
      textEng: "",
      textResultEng: "",
      typeTranslate: 0,
      grammerCheckModel: ""
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
      this.translate.resultTextInd = "";
      this.translate.resultTextEng = "";
      this.textInd = "";
      this.textEng = "";
    },
    toHomePage() {
      this.$store.dispatch("toHomePage");
    },
    submitGrammerCheck() {
      this.$store.dispatch("submitGrammerCheck", this.grammerCheckModel);
    },
    resetFormGrammerCheck() {
      this.grammerCheckModel = "";
      this.$store.dispatch("resetFormGrammerCheck");
    }
  },
  created() {
    this.toHomePage();
  }
};
</script>
