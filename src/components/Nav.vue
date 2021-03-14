
<template>
  <div>
   <nav id="nav" class="shadow navbar navbar-expand-lg navbar-light bg-white fixed-top padding-nav">
    <a class="navbar-brand">{{$t('logo')}} </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav mRL-auto">
            <li class="nav-item active">
                <a class="nav-link">{{$t('comingSoon')}} <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link">{{$t('comingSoon')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">{{$t('comingSoon')}}</a>
            </li>
            <li>
                <div class="rtlOrLtr mb px-3 rounded-pill mt-1">
                    <a @click="language('ar')" v-if="lang=='en'?true:false">
                      العربيه
                    </a>
                    <a @click="language('en')" v-if="lang=='ar'?true:false">
                      English
                    </a>
                    
                </div>
            </li>

        </ul>

    </div>
</nav>
<div :style="{'marginTop':margin}"></div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  created() {

  },
  data() {
    return {
    margin:'',
    dir:'',
    lang:''
    }
  },
  props: {
   
  },
  methods: {
   language(lang){
    if(lang =='ar'){
      this.dir='rtl';
      this.$emit('dir','rtl');
    }else{
      this.dir='ltr';
      this.$emit('dir','ltr');

    }
          this.$i18n.locale = lang;
          this.lang=lang;
   
      localStorage.setItem('dir',this.dir);
      localStorage.setItem('lang',this.lang);
        }
  },
  mounted() {
    let x=document.getElementById("nav");
    this.margin=x.clientHeight/2+'px';
    
      this.$i18n.locale = 'en'||localStorage.getItem('lang');
      this.lang=this.$i18n.locale;
      this.dir=this.$i18n.locale=="en"?'ltr':'rtl';
  },
}
</script>

<style lang="scss" scoped>

</style>

