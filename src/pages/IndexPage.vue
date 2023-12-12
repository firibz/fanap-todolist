<template>
  <!--  <img-->
  <!--    alt="Quasar logo"-->
  <!--    src="~assets/quasar-logo-vertical.svg"-->
  <!--    style="width: 200px; height: 200px"-->
  <!--  >-->
  <div v-if="listState.items && listState.items.length>0">
    {{ listState.items }}
  </div>
  <div v-else>
    <lottie-player autoplay
                   class="empty-list-animation"
                   loop
                   mode="normal"
                   src="/animations/empty-list.json">
    </lottie-player>
    <div class="bg-blur custom-rounded-borders q-pa-md text-center text-white">The list is empty</div>
  </div>
  <router-view/>
  <q-page-sticky :offset="[18, 18]" position="bottom-right">
    <q-btn
      class="q-ma-md"
      color="teal"
      fab
      icon="add"
      size="lg"
      @click="gotoAddItem"
    />
  </q-page-sticky>
  <q-page-sticky expand position="top">
    <div class="row q-py-md system-header custom-rounded-borders--bottom justify-center items-center full-width">
      <q-input
        v-model="listState.searchedTitle"
        bg-color="white"
        class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4"
        input-class="text-teal"
        outlined
        placeholder="Search"
        rounded
      >
        <template v-slot:append>
          <q-btn color="teal" dense flat icon="search" round/>
        </template>
      </q-input>
    </div>
  </q-page-sticky>
</template>

<script>
import {defineComponent} from 'vue'
// the import ia essential in order to use vue-lottie component
import * as LottiePlayer from "@lottiefiles/lottie-player";
import {useListStore} from "stores/list-store";
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    const listStore = useListStore();
    const router = useRouter();

    function gotoAddItem() {
      router.push('/add')
    }

    return {
      listState: listStore.$state,
      gotoAddItem,
    }
  }
})
</script>
