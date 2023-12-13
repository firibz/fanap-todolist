<template>
  <q-slide-item
    class="q-mt-md custom-rounded-borders bg-blue-grey-10"
    left-color="red"
    right-color="teal-14"
    v-bind="$attrs"
    @left="opt =>onLeftSwipe(opt, id)"
    @right="opt =>onRightSwipe(opt, id)"
  >
    <template v-slot:left>
      <div class="row items-center">
        <q-icon :name="leftSwipeIcon" left/>
        {{ leftSwipeText }}
      </div>
    </template>
    <template v-slot:right>
      <div class="row items-center">
        {{ rightSwipeText }}
        <q-icon :name="rightSwipeIcon" right/>
      </div>
    </template>
    <q-item
      v-ripple
      :class="{ 'done': status === 'done' }"
    >
      <q-item-section avatar>
        <q-checkbox
          :color="status === 'done' ? 'teal-14' : (status === 'doing'? 'amber':'grey')"
          keep-color
          :model-value="status"
          class="rounded"
          false-value="new"
          indeterminate-value="doing"
          toggle-indeterminate
          true-value="done"
          @update:model-value="$emit('update:status', $event)"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-white">{{ title }}</q-item-label>
        <q-item-label v-if="description" class="text-grey">{{ description }}</q-item-label>
      </q-item-section>
      <slot name="actions"/>
    </q-item>
  </q-slide-item>
</template>
<script>
export default {
  name: "TaskItem",
  components: {},
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    leftSwipeFunction: {
      type: Function,
      required: true,
    },
    rightSwipeFunction: {
      type: Function,
      required: true,
    },
    leftSwipeText: {
      type: String,
      default: "Delete",
    },
    rightSwipeText: {
      type: String,
      default: "Change status",
    },
    leftSwipeIcon: {
      type: String,
      default: "delete",
    },
    rightSwipeIcon: {
      type: String,
      default: "published_with_changes",
    },
  },
  emits: ['update:status'],
  setup(props) {
    function onLeftSwipe({reset}, index) {
      props.leftSwipeFunction(index);
      reset();
    }

    function onRightSwipe({reset}, index) {
      props.rightSwipeFunction(index);
      reset();
    }

    return {
      onLeftSwipe,
      onRightSwipe,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
