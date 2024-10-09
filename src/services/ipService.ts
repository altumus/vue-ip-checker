import axios from 'axios';
import { IpInformationInterface, IpResponseWithHeaders } from '../types/ipType';

export async function fetchIp(ip: string): Promise<IpInformationInterface> {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function fetchIpWithHeaders(
  ip: string
): Promise<IpResponseWithHeaders> {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return { ...response.data, headers: JSON.stringify(response.headers) };
  } catch (error) {
    return Promise.reject(error);
  }
}
