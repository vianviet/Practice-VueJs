import instance from ".";

const limitElements = 10;
const messageApi = {
  getMessage(query: string, page: number, bonus: number) {
    const computed = limitElements * page + bonus;
    const url = `/message/${query}?limit=${limitElements}&offset=${computed}`;
    return instance.get(url);
  },
};
export default messageApi;
