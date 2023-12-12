import { defineStore } from 'pinia';
import {notification} from "src/helpers/notification";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

export const useListStore = defineStore('list', {
  state: () => ({
    items: [],
    searchedTitle: '',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async addTask(item) {
      if (!item?.title) {
        notification.showErrorMessage('Please enter the title.');
        throw new Error('Required fields does not have value.')
      } else {
        item.id = uuidv4();
        this.items.unshift(_.cloneDeep(item));
        return(item)
      }
    },
    deleteTask(id) {
    },
    editTask(id) {
    },
  },
});
