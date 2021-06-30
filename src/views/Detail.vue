<template>
    <div class="container p-4 rounded border border-2" style="width: 50%;" >
        <div class="text-start nav">
            <router-link :to="{path: '/'}" class="text-decoration-none"> 
                <span class="material-icons">
                arrow_back
                </span>
            </router-link>

        </div>
        <div class="mt-1 mb-3 p-2">
            <h3 class="display-6"> hehe</h3>
        </div>

        <div class="d-flex justify-content-center align-items-center px-5">
            <div class="">
                <img src=""
                alt="Image"
                class="rounded"
                style="width: 15em; height:12em;"
                />

            </div>

            <div class=" ms-5">
                <div class="row gy-1 text-start h6">
                    <dt class="col-sm-4">Price</dt>
                    <dd class="col-sm-8">Rp. </dd>

                    <dt class="col-sm-4">Category</dt>
                    <dd class="col-sm-8">haha</dd>

                    <dt class="col-sm-4">Description</dt>
                    <dd class="col-sm-8">haha</dd>

                    <dt class="col-sm-4">Added By</dt>
                    <dd class="col-sm-8">haha</dd>

                </div>
            </div>

        </div>

        <div class="my-4 ">
            <h5>Scan it to share this delicious food</h5>
            <div>
                QR CODE
            </div>
        </div>

    </div>

</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style>

</style>