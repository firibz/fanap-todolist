<template>
  <div v-if="listStore.filteredItems && listStore.filteredItems.length>0"
       class="row full-width justify-center items-center">
    <q-list class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 q-mb-md q-mt-xl margin-for-searchbar">
      <transition-group
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <task-item
          v-for="(item, index) in listStore.filteredItems"
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
                @click.stop="deleteTask(item.id)"
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
        v-model="listStore.searchedText"
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
      <div class="row full-width items-center justify-center q-mt-xs">
        <q-radio v-model="listStore.searchedStatus" class="q-mx-sm"
                 color="primary" label="All" val="all" @click="updateStatusQuery(undefined)"/>
        <q-radio v-model="listStore.searchedStatus" class="q-mx-sm"
                 color="white" label="new" val="new" @click="updateStatusQuery('new')"/>
        <q-radio v-model="listStore.searchedStatus" class="q-mx-sm"
                 color="amber" label="doing" val="doing" @click="updateStatusQuery('doing')"/>
        <q-radio v-model="listStore.searchedStatus" class="q-mx-sm"
                 color="teal-14" label="done" val="done" @click="updateStatusQuery('done')"/>
      </div>
    </div>
  </q-page-sticky>
</template>

<script>
import {defineComponent, watch} from 'vue'
// the import ia essential in order to use vue-lottie component
import * as LottiePlayer from "@lottiefiles/lottie-player";
import {useListStore} from "stores/list-store";
import {useRouter, useRoute} from 'vue-router'
import { useQuasar } from 'quasar'
import TaskItem from "components/TaskItem.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {TaskItem},
  setup() {
    const listStore = useListStore();
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar()
    listStore.searchedStatus = router.currentRoute.value.query.status || 'all'

    function gotoAddItem() {
      router.push('/add')
    }

    function gotoEditItem(id) {
      router.push({
        path: '/edit',
        query: {
          id: id
        }
      });
    }

    function deleteTask(id) {
      console.log("delete")
      $q.dialog({
          title: 'Warning!',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          listStore.deleteTask(id)
        });
    }

    const updateStatusQuery = (status) => {
      const query = {
        status: status,
      }
      router.replace({query})
    }
    watch(() => route.query, () => {
      listStore.searchedStatus = route.query.status || 'all'
    });
    return {
      listStore,
      gotoAddItem,
      gotoEditItem,
      deleteTask,
      updateStatusQuery,
    }
  }
})
</script>
