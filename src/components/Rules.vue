
<template>
  <div>
   <section id="sec-bg" class="mt-5 CoronavirusSymptoms">
    <div class="container  py-5">
        <h2 class="text-center pt-3 mb-5 title-hand">{{$t('Rules')}}</h2>
        <div class="row">
            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img :src="advice1" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Wear-Mask')}}
                    </div>

                </div>
            </div>
            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/dos-a.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Wash Your Hand')}}
                    </div>

                </div>
            </div>
            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/advice-c.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Cough Etiauette')}}
                    </div>

                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="bg-white  p-4 text-center borde-9">
                    <div class="text-center">
                        <img src="@/assets/img/hand-a.png" class="w-75 text-center rounded-circle" alt="" srcset="">
                    </div>
                    <div class="py-3 text-center">
                        {{$t('Clean & Disinfect')}}
                    </div>

                </div>
            </div>

        </div>

    </div>
</section>
  </div>
</template>

<script>
  import adviceD from '@/assets/img/advice-d.png';
export default {
  name: 'Rules',
  created() {
  },
  data() {
    return {
      advice1:adviceD

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

