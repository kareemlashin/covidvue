
<template>
  <div>
   <section>
    <div class="container py-5">
        <h2 class="text-center  py-5">{{$t('numInEgypt')}}</h2>
        <div class="row" >
            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one p-5 shadow text-center border-10 border-bottom-second">
                    <p class="text-center">{{ $t('confirmed')}}</p>
                    <h4 id="confirmed-eg" class="text-center">
                        {{egypt.confirmed.value}}
                    </h4>


                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one p-5 shadow text-center border-10 border-bottom-first">
                    <p class="text-center">{{ $t('deaths')}}</p>
                    <h4 id="deathseg-eg" class="text-center">
                                                {{egypt.deaths.value}}

                    </h4>


                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one p-5 shadow text-center border-10 border-bottom-second">
                    <p class="text-center">{{ $t('recovered')}}</p>
                    <h4 id="recovered-eg" class="text-center">
                                                                        {{egypt.recovered.value}}

                    </h4>

                </div>
            </div>

        </div>
    </div>
</section>
  </div>
</template>

<script>
export default {
  name: 'World',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },computed: {
      egypt() {

      return this.$store.getters.egypt;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>

