import {defineStore} from 'pinia';
import {notification} from "src/helpers/notification";
import {v4 as uuidv4} from 'uuid';
import _ from 'lodash';
import {watch} from 'vue'

export const useListStore = defineStore('list', {
  state: () => ({
    items: JSON.parse(localStorage.getItem("items")) || [],
    searchedText: '',
    searchedStatus: 'all', //initiates in the created hook of the page
  }),
  getters: {
    filteredItems(state) {
      let tempItems = [];
      if (this.router.currentRoute.value.query.status) {
        tempItems = state.items.filter(task => {
          return task.status === this.router.currentRoute.value.query.status;
        })
      } else {
        tempItems = state.items;
      }
      if (state.searchedText && state.searchedText.length > 0) {
        return tempItems.filter(task => {
          return (task.title.includes(state.searchedText) || task.description.includes(state.searchedText));
        })
      } else {
        return tempItems;
      }
    },
  },
  actions: {
    async addTask(item) {
      if (!item?.title) {
        notification.showErrorMessage('Please enter the title.');
        throw new Error('Required fields does not have value.')
      } else {
        item.id = uuidv4();
        this.items.unshift(_.cloneDeep(item));
        return (item)
      }
    },
    deleteTask(id) {
    },
    async editTask(newItem) {
      if (!newItem?.title) {
        // notification.showErrorMessage('Please enter the title.');
        throw new Error('ID is required fo editing the item.')
      } else if (!newItem?.title) {
        notification.showErrorMessage('Title is required.');
        throw new Error('Required fields does not have value.')
      } else {
        const index = this.items.findIndex((task) => task.id === newItem.id);
        this.items[index].title = newItem.title
        this.items[index].description = newItem.description
        this.items[index].status = newItem.status
      }
    },
    getTask(id) {
      const index = this.items.findIndex((task) => task.id === id);
      return _.cloneDeep(this.items[index]);
    },
  },
});
watch(
  () => useListStore().items,
  (items) => localStorage.setItem('items', JSON.stringify(items)),
  {deep: true} // watch the items array deeply
)
