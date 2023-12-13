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
          :left-swipe-function="goToItemPage"
          :list-click-function="goToItemPage"
          :right-swipe-function="deleteTask"
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
                @click.stop="openTaskDialog('edit',item)"
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
                @click.stop="deleteTask(item)"
              />
            </q-item-section>
          </template>
        </task-item>
      </transition-group>
    </q-list>
  </div>
  <div v-else class="flex flex-center margin-for-searchbar">
    <empty-list/>
  </div>
<!--  <router-view/>-->
  <task-dialog v-model="taskDialog" :mode="dialogMode"/>
  <q-page-sticky :offset="[18, 18]" position="bottom-right">
    <q-btn
      class="q-ma-md"
      color="teal"
      fab
      icon="add"
      size="lg"
      @click="openTaskDialog('add')"
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
import {defineComponent, watch, ref} from 'vue'
import {useListStore} from "stores/list-store";
import {useRouter, useRoute} from 'vue-router'
import { useQuasar } from 'quasar'
import _ from 'lodash';
import TaskItem from "components/TaskItem.vue";
import TaskDialog from "components/TaskDialog.vue";
import EmptyList from "components/EmptyList.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {EmptyList, TaskDialog, TaskItem},
  setup() {
    const listStore = useListStore();
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar()
    listStore.searchedStatus = route.query.status|| 'all'
    const taskDialog = ref(false)
    const dialogMode = ref('add')
    function openTaskDialog(mode = 'add', item) {
      dialogMode.value = mode;
      if(mode === 'add'){
        listStore.resetCurrentItem();
      }
      else{
        listStore.currentItem = _.cloneDeep(item);
      }
      taskDialog.value = true;
    }
    function goToItemPage(item) {
      const query = {
        id: item.id,
      }
      router.push({path: 'item', query})
    }
    function deleteTask(item) {
      console.log("delete")
      $q.dialog({
          title: 'Warning!',
          message: `Are you sure you want to delete ${item.title} ?`,
        ok: {
          push: true,
          color: 'negative',
          text:'title'
        },
        cancel: true,
          persistent: true
        })
        .onOk(() => {
          listStore.deleteTask(item.id)
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
      taskDialog,
      dialogMode,
      openTaskDialog,
      goToItemPage,
      deleteTask,
      updateStatusQuery,
    }
  }
})
</script>
