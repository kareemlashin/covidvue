
<template>
  <div>
<section id="sec-bg" class="mb-5 CoronavirusSymptoms">
    <div class="container  py-5">
        <h2 class="text-center pt-3 mb-5 title-hand">{{$t('CoronavirusSymptoms')}}</h2>
        <div class="row">

            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/symptom-a.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Fever')}}
                    </div>

                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/advice-c.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Cough')}}
                    </div>
                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/symptom-b.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Shortness-of-breath')}}
                    </div>
                </div>

            </div>

            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/symptom-b.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Hot-Fever')}}
                    </div>
                </div>
            </div>


        </div>

    </div>
</section>
  </div>
</template>

<script>
export default {
  name: 'Symptoms',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

