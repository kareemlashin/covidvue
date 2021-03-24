
<template>
  <div>
   <section>
    <div class="container all-top">
        <div class="row">

            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one bg-white shadow p-5 text-center border-10 border-bottom-first">
                    <p class="text-center">{{$t('confirmed')}}</p>

                    <h4 id="confirmed" class="text-center">
                        {{world.cases}}
                    </h4>


                </div>
            </div>

            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one shadow p-5 text-center border-10 border-bottom-second">

                    <p class="text-center">{{ $t('deaths')}}</p>

                    <h4 class="text-center" id="deaths">
                        {{world.deaths}}

                    </h4>

                </div>
            </div>

            <div class="col-md-4 my-2">
                <div class="bg-img-sectio border-sec-one shadow p-5 text-center border-10 border-bottom-first">

                    <p class="text-center">{{$t('recovered')}}</p>

                    <h4 class="text-center" id="recovered">
                        {{world.recovered}}

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
  name: 'Egypt',
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
      world() {

      return this.$store.getters.world;
    },
  },
  mounted() {
      
  },
}
</script>

<style lang="scss" scoped>

</style>

