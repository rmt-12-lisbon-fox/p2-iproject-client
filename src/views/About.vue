<template>
  <div class="about page">
    <div
      v-bind:style="{ backgroundImage: 'url(' + background.img + ')' }"
      class="bg-img bg-opaque d-flex align-items-end"
    >
      <div class="mb-5" id="about-card">
        <div class="card-title">
          <div class="container p-3">
            <h5 class="text-center">About Background</h5>
            <h6>{{ background.title }}</h6>
            <p
              v-if="background.explanation.length > 550"
              id="explanation"
            >{{ truncatedExplanation }}
            <a class="link" data-bs-toggle="modal" data-bs-target="#background-modal">
              view more
            </a>
            </p>
            <div class="modal fade" id="background-modal" tabindex="-1">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="background-modal-label">{{ background.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img
                      :src="background.img"
                      :alt="background.title"
                      class="img-fluid my-3"
                    >
                    <p>{{ background.explanation }}</p>
                  </div>
                  <div class="modal-footer">
                    <a class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                  </div>
                </div>
              </div>
            </div>
            <p
              v-if="background.explanation.length <= 550"
            >{{ background.explanation }}</p>
          </div>
        </div>
      </div>
      <router-link to="/">
        <i
          class="position-absolute translate-middle fas fa-chevron-left 3x"
        ></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    background () {
      return this.$store.state.background
    },
    truncatedExplanation () {
      if (this.background.explanation.length > 550) {
        return this.background.explanation.substr(0, 550 - 1) + '...'
      } else {
        return this.background.explanation
      }
    }
  }
}
</script>

<style>

</style>
