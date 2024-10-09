export interface IpInformationInterface {
  status: string; // Статус запроса, в данном случае всегда "success"
  country: string; // Название страны
  countryCode: string; // Код страны
  region: string; // Код региона
  regionName: string; // Название региона
  city: string; // Название города
  zip: string; // Почтовый индекс
  lat: number; // Широта
  lon: number; // Долгота
  timezone: string; // Часовой пояс
  isp: string; // Интернет-провайдер
  org: string; // Организация
  as: string; // Автономная система
  query: string; // IP-адрес или запрос
}

export interface ClientInformation {
  os: string;
  javascript: string;
  headers: string;
  browser: string;
  browserVersion: string;
}

export interface IpResponseWithHeaders {
  ipInfo: IpInformationInterface;
  headers: string;
}
