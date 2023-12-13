<script>
// the import ia essential in order to use vue-lottie component
import * as LottiePlayer from "@lottiefiles/lottie-player";
export default {
  name: "EmptyList",
  props: {
    message: {
      type: String,
      default: 'The list is empty.',
    },
  },
}
</script>

<template>
  <div class="column">
    <lottie-player autoplay
                   class="empty-list-animation"
                   loop
                   mode="normal"
                   src="/animations/empty-list.json">
    </lottie-player>
    <div class="bg-blur custom-rounded-borders q-pa-md text-center text-white">{{message}}</div>
  </div>
</template>
