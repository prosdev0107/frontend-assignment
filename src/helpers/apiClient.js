import axios from "axios";

class HttpClient {
  constructor(baseURL) {
    const httpClient = axios.create({
      baseURL,
    });
    this.httpClient = httpClient;
  }

  isHandlerEnabled(config = {}) {
    return !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);
  }

  get(apiEndpoint, params) {
    return this.httpClient.get(apiEndpoint, { params });
  }

  getWithToken(apiEndpoint, params) {
    return this.httpClient.get(apiEndpoint, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        language: "en-US",
        ...params,
      },
    });
  }

  post(apiEndpoint, params) {
    return this.httpClient.post(apiEndpoint, params);
  }

  delete(apiEndpoint, params) {
    return this.httpClient.delete(apiEndpoint, { params });
  }
}

export const movieClient = new HttpClient(process.env.REACT_APP_API_DOMAIN);
