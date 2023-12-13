<template>
  <div v-if="listState.items && listState.items.length>0" class="row full-width justify-center items-center">
    <q-list class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 q-mb-md q-mt-xl margin-for-searchbar">
      <transition-group
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <task-item
          v-for="(item, index) in listState.items"
          :id="item.id"
          :key="'transitionsTask'+index"
          v-model:status="item.status"
          :description="item.description"
          :left-swipe-function="deleteTask"
          :right-swipe-function="gotoAddItem"
          :title="item.title">
          <template #actions>
            <q-item-section side>
              <q-btn
                color="amber"
                dense
                flat
                icon="edit"
                rounded
                size="md"
                @click.stop="gotoEditItem(item.id)"
              />
            </q-item-section>
            <q-item-section side>
              <q-btn
                color="pink-14"
                dense
                flat
                icon="delete"
                rounded
                size="md"
                @click.stop="gotoAddItem"
              />
            </q-item-section>
          </template>
        </task-item>
      </transition-group>
    </q-list>
  </div>
  <div v-else class="flex flex-center margin-for-searchbar">
    <div class="column">
      <lottie-player autoplay
                     class="empty-list-animation"
                     loop
                     mode="normal"
                     src="/animations/empty-list.json">
      </lottie-player>
      <div class="bg-blur custom-rounded-borders q-pa-md text-center text-white">The list is empty</div>
    </div>
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
        class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 custom-rounded-borders"
        input-class="text-teal"
        outlined
        placeholder="Search"
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
import TaskItem from "components/TaskItem.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {TaskItem},
  setup() {
    const listStore = useListStore();
    const router = useRouter();

    function gotoAddItem() {
      router.push('/add')
    }

    function gotoEditItem(id) {
      router.push('/edit')
    }

    function deleteTask(id) {
      console.log("delete")
    }

    return {
      listState: listStore.$state,
      gotoAddItem,
      gotoEditItem,
      deleteTask,
    }
  }
})
</script>
