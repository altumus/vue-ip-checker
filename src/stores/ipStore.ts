import { defineStore } from 'pinia';
import * as Api from '../services/ipService';
import { ClientInformation, IpInformationInterface } from '../types/ipType';
import { UAParser } from 'ua-parser-js';

const userParser = new UAParser();
const userParseResults = userParser.getResult();

export const useIpStore = defineStore('ipStore', {
  state: () => ({
    fetchedIpList: [] as IpInformationInterface[],
    detailedIpInfo: null as IpInformationInterface | null,
    userInfo: null as ClientInformation | null,
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
    async fetchIpWithClientInfo(ip: string) {
      const response = await Api.fetchIpWithHeaders(ip);
      this.detailedIpInfo = response.ipInfo;

      this.userInfo = {
        headers: response.headers,
        os: userParseResults.os.name || '???',
        browser: userParseResults.browser.name || '???',
        browserVersion: userParseResults.browser.version || '???',
        javascript: userParseResults.engine.name || '???',
      };
    },
    removeIpInfo(ipToDelete: string) {
      const ipIndex = this.fetchedIpList.findIndex(
        (ipItem) => ipItem.query === ipToDelete
      );

      if (ipIndex === -1) return;

      this.fetchedIpList.splice(ipIndex, 1);
    },
  },
});
