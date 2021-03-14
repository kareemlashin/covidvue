
<template>
  <div>
   <header class="d-flex align-items-center" :style="{'background-image':`url('${imges}')`}">
    <div class="container ">
        <div class="row">
            <div class="col-md-6 d-flex align-items-center ">
                <div class="-100">
                    <p class="">
                        {{$t('header')}}
                    </p>

                </div>
            </div>
            <div class="col-md-6">
                <img :src="banner" class="w-100 img-fluid" alt="" srcset="">
            </div>
        </div>
    </div>
</header>
  </div>
</template>

<script>
import shape from '@/assets/img/shape-b.png';
import imgHeader from '@/assets/img/banner.png';
export default {
  name: 'Header',
  created() {
  },
  data() {
    return {
          imges:shape,
          banner:imgHeader

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

