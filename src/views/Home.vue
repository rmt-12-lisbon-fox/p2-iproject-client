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
              placeholder="Masukkan text bahasa indonesia"
            />
            <button
              class="ms-3 me-3 fas fa-arrows-alt-h btn-secondary d-inline-block rounded"
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
              placeholder="Hasil text bahasa inggris"
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
              class="ms-3 me-3 fas fa-arrows-alt-h btn-secondary d-inline-block rounded"
              style="height: 38px; width: 38px;position:absolute; margin: 13px 0px 0px 28px;"
              @click.prevent="buttonChange"
            ></button>
            <label for="textTranslateResultInd" class="sr-only"></label>
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

          <h5 class="card-title mt-2">Grammer Check</h5>
          <label for="textTranslateResultInd" class="sr-only"></label>
          <form @submit.prevent="submitGrammerCheck">
            <textarea
              type="text"
              v-model="grammerCheck"
              id="grammerCheck"
              style="width: 100%;"
              class="form-control d-inline-block"
              placeholder="Silahkan masukkan kalimat yang mau dicek grammernya"
            />
            <div class="form-control mb-2" v-if="grammerCheckResult.length">
              <div v-for="(err, index) in grammerCheckResult" :key="index">
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
            <button class="btn btn-secondary mt-1" type="submit">Check</button>
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
  computed: mapState(["translate", "grammerCheckResult"]),
  data() {
    return {
      textInd: "",
      textResultInd: "",
      textEng: "",
      textResultEng: "",
      typeTranslate: 0,
      grammerCheck: ""
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
      this.$store.dispatch("submitGrammerCheck", this.grammerCheck);
    }
  },
  created() {
    this.toHomePage();
  }
};
</script>
