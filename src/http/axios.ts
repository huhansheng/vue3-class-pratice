import axios from "axios";
interface Result {
    result: number;
}
axios.defaults.baseURL = "/mock/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// response interceptors handler
axios.interceptors.response.use(
  function(response) {
    const res: Result = response.data;
    let data;
    
    if (res.result === 0) {
      data = res.data;
      data.system = res.system;
    }
    return data;
  },
  function(error) {
    const data: Result = {
      info: "axios response error",
      result: -1
    };
    return data;
  }
);

export default axios;
