import { defineStore } from 'pinia';
import * as Api from '../services/ipService';
import { IpInformationInterface } from '../types/ipType';

export const useIpStore = defineStore('ipStore', {
  state: () => ({
    fetchedIpList: [] as IpInformationInterface[],
    detailedIpInfo: null as IpInformationInterface | null,
  }),
  actions: {
    async fetchIpList(list: string[]) {
      const requests = [];
      for (let i = 0; i < list.length; i++) {
        requests.push(Api.fetchIp(list[i]));
      }

      const responses: IpInformationInterface[] = await Promise.all(requests);
      this.fetchedIpList = [...responses];
    },
    async fetchIp(ip: string) {
      const response = await Api.fetchIp(ip);
      this.detailedIpInfo = { ...response };
    },
  },
});
