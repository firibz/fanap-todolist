<template>
  <q-dialog
    :model-value="modelValue"
    class="bg-blur task-dialog custom-rounded-borders--top"
    persistent
    position="bottom"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card class="task-dialog__card q-pa-sm custom-rounded-borders--top">
      <q-form @submit="submitForm">
        <q-toolbar>
          <q-avatar>
            <q-icon :name="mode === 'edit' ? 'mdi-pencil' : 'mdi-pencil-plus'" size="md"/>
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">{{ mode === 'edit' ? 'Edit task' : 'Add task' }}</span>
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
                  v-model="listState.currentItem.title"
                  :rules="[$va.required]"
                  autofocus
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
                  v-model="listState.currentItem.description"
                  autogrow
                  class="full-width"
                  color="system-primary"
                  filled
                  label="Description"
                  label-color="system-primary"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                Status:
              </q-item-section>
              <q-item-section>
                <q-checkbox
                  v-model="listState.currentItem.status"
                  :color="listState.currentItem.status === 'done' ? 'teal-14' : (listState.currentItem.status === 'doing'? 'amber':'grey')"
                  :label="listState.currentItem.status"
                  class="rounded"
                  false-value="new"
                  indeterminate-value="doing"
                  keep-color
                  toggle-indeterminate
                  true-value="done"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn
            :color="mode === 'edit' ? 'amber' : 'teal'"
            :label="mode === 'edit' ? 'Edit' : 'Submit'"
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
import {useListStore} from "stores/list-store";

export default {
  name: "TaskDialog",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    mode: {
      type: String,
      default: 'add',
      validator(value) {
        // The value must match one of these strings
        return ["add", "edit"].includes(value);
      },
    },
  },
  emits: ['update:modelValue', "added", "edited"],
  setup(props, {emit}) {
    const listStore = useListStore();

    function closeDialog() {
      emit('update:modelValue', false)
    }

    function submitForm() {
      if (props.mode === 'add') {
        listStore.addTask(listStore.currentItem).then((item) => {
          emit("added", item)
          closeDialog();
        })
      } else {
        listStore.editTask(listStore.currentItem).then((item) => {
          emit("edited", item)
          closeDialog();
        })
      }
    }

    return {
      listState: listStore.$state,
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
