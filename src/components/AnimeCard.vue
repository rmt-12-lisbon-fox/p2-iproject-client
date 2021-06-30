<template>
    <!-- <div class="box-card d-flex justify-content-center align-items-center "> -->
        <!-- <div class="row g-2 row-cols-2 "> -->

        <div class="text-start mx-5 col-3">
        <b-card no-body class="overflow-hidden image-card" text-variant="light">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-body>
                    <label class="h6">{{ el.title}}</label>
                <b-card-text >
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                <button type="button" class="btn btn-light btn-sm rounded-pill py-0 mt-1">Small button</button>
                </b-card-body>
            </b-col>
            <b-col md="6">
                <b-card-img :src="el.image_url" width="100%" height="250px" alt="" class=""></b-card-img>
            </b-col>
            </b-row>
        </b-card>
        </div>
    
</template>

<script>
export default {
    name: 'AnimeCard',
    props: ['el']
}
</script>

<style>
.image-card {
    border-radius: 10px !important;
    /* max-width: 450px; 
    max-height: 280px;  */
    width: 380px;
    height: 200px;
    background-image: linear-gradient(135deg, #1a2f7a 10%, #2f98a1 100%);
    filter: brightness(70%);
    font-size: 0.75em;
}

.image-card:hover {
    filter: none;
    transform: scale(1.1);
    transition: all .3s ease-in-out
}


</style>