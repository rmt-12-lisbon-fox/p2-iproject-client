<template>
  <div class="d-flex justify-content-center mb-5">
    <div class="card mt-5 w-50 card shadow mb-5 p-3 bg-body rounde">
      <a
        href=""
        @click.prevent="backGames"
        v-if="challenge.data.length"
        class="fas mb-3 fa-arrow-circle-left fa-lg text-decoration-none"
        style="width : 40px; color: black;"
      >
      </a>
      <img
        src="https://images.prismic.io/etswebsiteprod/1ece52b2c9683b045136669c4f3ec12e40551446_alphabet-close-up-communication-256417.jpg?auto=compress,format"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div v-if="!challenge.data.length">
          <h5 class="card-title">Word Games</h5>
          <p class="card-text">
            Permainan word games merupakan permainan untuk meningkatkan kosa
            kata bahasa inggris. Selamat bermain :)
          </p>
          <h5 class="card-title">Select Games</h5>
          <button
            @click.prevent="selectChallenge(1)"
            class="btn btn-primary me-3"
          >
            1 Word
          </button>
          <button
            @click.prevent="selectChallenge(2)"
            class="btn btn-danger me-3"
          >
            2 Words
          </button>
          <button
            @click.prevent="selectChallenge(3)"
            class="btn btn-success me-3 "
          >
            3 Words
          </button>
        </div>

        <div v-if="challenge.data.length">
          <h5 class="card-title mb-3">
            Silahkan Susun Jadi Kata Bahasa Inggris
          </h5>
          <form @submit.prevent="submitChallenge">
            <div class="row d-flex ">
              <div
                v-for="(kata, index) in challenge.data"
                :key="index"
                class="mt-4 mb-2"
              >
                <div
                  style="margin-top: -25px"
                  class="fs-5 "
                  v-if="challenge.data.length !== 1"
                >
                  Kata {{ index + 1 }}
                </div>
                <div class="d-flex flex-row">
                  <div
                    v-for="(huruf, index) in kata"
                    :key="index"
                    class="d-flex flex-row mb-0 me-2 justify-content-center"
                  >
                    <div
                      class="btn-primary card-title d-flex justify-content-center fs-5 fw-bold text-center text-light flex-column"
                      style="width: 40px; height: 40px;"
                    >
                      {{ huruf }}
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px;"
                        v-if="
                          huruf === 'A' ||
                            huruf === 'E' ||
                            huruf === 'I' ||
                            huruf === 'L' ||
                            huruf === 'N' ||
                            huruf === 'O' ||
                            huruf === 'R' ||
                            huruf === 'S' ||
                            huruf === 'T' ||
                            huruf === 'U'
                        "
                        >1</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="huruf === 'D' || huruf === 'G'"
                        >2</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="
                          huruf === 'B' ||
                            huruf === 'C' ||
                            huruf === 'M' ||
                            huruf === 'P'
                        "
                        >3</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="
                          huruf === 'F' ||
                            huruf === 'H' ||
                            huruf === 'V' ||
                            huruf === 'W' ||
                            huruf === 'Y'
                        "
                        >4</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="huruf === 'K'"
                        >5</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="huruf === 'J' || huruf === 'X'"
                        >8</span
                      >
                      <span
                        style="position:absolute; font-size:10px; margin: 22px 0px 0px 28px"
                        v-if="huruf === 'Q' || huruf === 'Z'"
                        >10</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div>{{ challenge.data }}</div> -->
            <div v-if="!challenge.word.length">
              <div class="form-group " v-if="challenge.data.length === 1">
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata"
                  name="kata"
                  id="kata"
                  class="form-control"
                  placeholder="Masukkan kata"
                />
              </div>
              <div
                class="form-group"
                v-if="
                  challenge.data.length === 2 || challenge.data.length === 3
                "
              >
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata1"
                  name="kata1"
                  id="kata1"
                  class="form-control mt-3 mb-3"
                  placeholder="Masukkan kata 1"
                />
              </div>
              <div
                class="form-group"
                v-if="
                  challenge.data.length === 2 || challenge.data.length === 3
                "
              >
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata2"
                  name="kata2"
                  id="kata2"
                  class="form-control"
                  placeholder="Masukkan kata 2"
                />
              </div>
              <div class="form-group" v-if="challenge.data.length === 3">
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata3"
                  name="kata3"
                  id="kata3"
                  class="form-control mt-3"
                  placeholder="Masukkan kata 3"
                />
              </div>
              <button
                class="btn btn-block btn-danger mt-4 mb-3 ms form-control"
                type="submit"
              >
                Send
              </button>
            </div>

            <div v-if="challenge.word.length">
              <div class="form-group " v-if="challenge.data.length === 1">
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  disabled
                  v-model="kata"
                  name="kata"
                  id="kata"
                  class="form-control"
                  placeholder="Masukkan kata"
                />
              </div>
              <div
                class="form-group"
                v-if="
                  challenge.data.length === 2 || challenge.data.length === 3
                "
              >
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  disabled
                  v-model="kata1"
                  name="kata1"
                  id="kata1"
                  class="form-control mt-3 mb-3"
                  placeholder="Masukkan kata 1"
                />
              </div>
              <div
                class="form-group"
                v-if="
                  challenge.data.length === 2 || challenge.data.length === 3
                "
              >
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata2"
                  disabled
                  name="kata2"
                  id="kata2"
                  class="form-control"
                  placeholder="Masukkan kata 2"
                />
              </div>
              <div class="form-group" v-if="challenge.data.length === 3">
                <label for="input-kata" class="sr-only"></label>
                <input
                  type="text"
                  v-model="kata3"
                  disabled
                  name="kata3"
                  id="kata3"
                  class="form-control mt-3"
                  placeholder="Masukkan kata 3"
                />
              </div>
              <button
                class="btn btn-block btn-dark mt-4 mb-3 ms form-control"
                @click.prevent="backGames"
              >
                Back
              </button>
            </div>
          </form>
          <div v-if="challenge.word.length">
            <div
              class="card text-dark mt-3 bg-light mb-3 "
              style="max-width: 18rem;"
            >
              <div class="card-header">Result</div>
              <div class="card-body">
                <h5 class="card-title">
                  Total score : {{ challenge.score.score }}
                </h5>
                <p
                  class="card-text"
                  v-for="(word, index) in challenge.word"
                  :key="index"
                >
                  Kata {{ index + 1 }} : {{ word }} : score :
                  {{ challenge.score.totalWordValue[index] }}
                </p>
              </div>
            </div>
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
  name: "Games",
  computed: mapState(["challenge"]),
  data() {
    return {
      kata: "",
      kata1: "",
      kata2: "",
      kata3: ""
    };
  },
  methods: {
    selectChallenge(id) {
      this.$store.dispatch("selectChallenge", id);
    },
    submitChallenge() {
      this.$store.dispatch("submitChallenge", {
        kata: this.kata,
        kata1: this.kata1,
        kata2: this.kata2,
        kata3: this.kata3
      });
    },
    backGames() {
      this.kata = "";
      this.kata1 = "";
      this.kata2 = "";
      this.kata3 = "";
      this.$store.dispatch("backGames");
    },
    toGamesPage() {
      this.$store.dispatch("toGamesPage");
    }
  },
  created() {
    this.toGamesPage();
  }
};
</script>
