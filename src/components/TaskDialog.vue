<template>
  <q-dialog
    :model-value="modelValue"
    class="bg-blur task-dialog"
    persistent
    position="bottom"
  >
    <q-card class="task-dialog__card q-pa-sm">
      <q-form @submit="submitForm">
        <q-toolbar>
          <q-avatar>
            <q-icon :name="form.id ? 'mdi-pencil' : 'mdi-pencil-plus'" size="md"/>
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">{{ form.id ? 'Edit task' : 'Add task' }}</span>
          </q-toolbar-title>

          <q-btn color="negative" dense flat icon="close" round @click="closeDialog"/>
        </q-toolbar>
        <q-card-section class="row items-center no-wrap">
          <q-list class="col">
            <q-item>
              <q-item-section side>
                <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
              </q-item-section>
              <q-item-section>
                <q-input
                  v-model="form.title"
                  :rules="[$va.required]"
                  class="full-width"
                  color="system-primary"
                  filled
                  label="Title"
                  label-color="system-primary"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-icon color="system-primary" name="mdi-text-box" size="sm"/>
              </q-item-section>
              <q-item-section>
                <q-input
                  v-model="form.description"
                  autogrow
                  class="full-width"
                  color="system-primary"
                  filled
                  label="Description"
                  label-color="system-primary"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn
            :color="form.id ? 'amber' : 'teal'"
            :label="form.id ? 'Edit' : 'Submit'"
            class="full-width"
            push
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import {reactive} from 'vue';
import {useListStore} from "stores/list-store";
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "TaskDialog",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["added", "edited"],
  setup(__props, {emit}) {
    const listStore = useListStore();
    const router = useRouter();
    const route = useRoute();
    let form = reactive({
      id: route.query.id,
      title: '',
      body: '',
      status: 'new'
    });

    function closeDialog() {
      router.push('/')
    }

    function submitForm() {
      if (!form.id) {
        listStore.addTask(form).then((item) => {
          emit("added", item)
          closeDialog();
        })
      } else {
        listStore.editTask(form.id).then((item) => {
          emit("edited", item)
          closeDialog();
        })
      }
    }

    return {
      listState: listStore.$state,
      form,
      closeDialog,
      submitForm,
    };
  },
};
</script>
<style lang="scss">
.task-dialog__card {
  width: 350px;
}
</style>
