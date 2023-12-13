<template>
  <q-layout class="system-layout" view="lHh Lpr lFf">
    <q-header class="system-header q-pt-sm">
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-center">
          Fanap Todo list task
        </q-toolbar-title>
        <q-toggle
          :class="$q.screen.lt.md ? 'q-ml-xs': 'q-my-sm'"
          :color="utilState.darkTheme ? 'indigo-11': 'amber'"
          :model-value="!utilState.darkTheme"
          aria-label="switch-theme-btn"
          checked-icon="mdi-brightness-7"
          class="text-blue"
          keep-color
          unchecked-icon="mdi-weather-night"
          @update:model-value="toggleTheme"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="system-drawer"
      show-if-above
    >
      <q-list>
        <q-item-label
          header
        >
          <!--          Essential Links-->
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <background-pattern/>
        <router-view/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useUtilStore} from "stores/util-store"
import {useTheme} from "src/composables/theme"
import EssentialLink from 'components/EssentialLink.vue'
import BackgroundPattern from "components/BackgroundPattern.vue"

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    BackgroundPattern,
    EssentialLink
  },

  setup() {
    const utilStore = useUtilStore();
    const leftDrawerOpen = ref(false)
    const {toggleTheme} = useTheme();

    return {
      essentialLinks: linksList,
      utilState: utilStore.$state,
      leftDrawerOpen,
      toggleTheme,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
