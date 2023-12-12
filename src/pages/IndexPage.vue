<template>
  <!--  <img-->
  <!--    alt="Quasar logo"-->
  <!--    src="~assets/quasar-logo-vertical.svg"-->
  <!--    style="width: 200px; height: 200px"-->
  <!--  >-->
  <div>
    <lottie-player autoplay
                   loop
                   mode="normal"
                   src="/animations/empty-list.json" style="height: 30rem; width:22rem;">
    </lottie-player>
    <div class="bg-blur custom-rounded-borders q-pa-md text-center text-white">The list is empty</div>
  </div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      class="q-ma-md"
      fab
      color="teal"
      size="lg"
      icon="add"
      @click="openAddItem"
    />
  </q-page-sticky>
  <q-page-sticky expand position="top">
    <div class="row q-py-md system-header custom-rounded-borders--bottom justify-center items-center full-width">
      <q-input
        class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4"
        input-class="text-teal"
        rounded
        outlined
        v-model="searchedTitle"
        placeholder="Search"
        bg-color="white"
      >
        <template v-slot:append>
          <q-btn color="teal" round dense flat icon="search"/>
        </template>
      </q-input>
    </div>
  </q-page-sticky>
</template>

<script>
import {defineComponent, ref} from 'vue'
// the import ia essential in order to use vue-lottie component
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default defineComponent({
  name: 'IndexPage',
  components: {
  },
  setup(){
    const searchedTitle = ref(null)
    function openAddItem() {
    }
    return {
      searchedTitle,
      openAddItem,
    }
  }
})
</script>
