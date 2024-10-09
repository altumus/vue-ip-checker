import axios from 'axios';
import { IpInformationInterface } from '../types/ipType';

export async function fetchIp(ip: string): Promise<IpInformationInterface> {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error as Error);
  }
}
