import { defineStore } from 'pinia';
import * as Api from '../services/ipService';

export const useIpStore = defineStore('ipStore', {
  state: () => ({
    fetchedIps: [],
    detailedIpInfo: null,
  }),
  actions: {
    async fetchIpList(list: string[]) {
      Api.fetchIpList(list);
    },
  },
});
