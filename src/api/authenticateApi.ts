import instance from ".";

const authenticateApi = {
  login(query: any) {
    const url = "/login";
    return instance.post(url, query);
  },
};
export default authenticateApi;
