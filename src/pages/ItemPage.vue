<template>
  <div class="row full-width justify-center items-center">
    <div class="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 q-mb-md q-mt-xl">
      <div v-if="route.query.id && item && item.id" class="column bg-blur custom-rounded-borders q-pa-lg">
        <hr class="full-width green-hr"/>
        <div class="q-my-md">
          <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
          ID: {{item.id}}
        </div>
        <div class="q-my-md">
          <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
          Title: {{item.title}}
        </div>
        <div class="q-my-md">
          <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
          Description: {{item.description}}
        </div>
        <div class="q-my-md">
          <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
          status: {{item.status}}
        </div>
        <hr class="full-width green-hr"/>
      </div>
      <div v-else class="flex flex-center">
        <empty-list message="Item not found."/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useListStore} from "stores/list-store";
import {useRoute} from 'vue-router'
import EmptyList from "components/EmptyList.vue";

export default defineComponent({
  name: 'ItemPage',
  components: {EmptyList},
  setup() {
    const listStore = useListStore();
    const route = useRoute();
    const item = listStore.getTask(route.query.id)
    return {
      listStore,
      route,
      item,
    }
  }
})
</script>
