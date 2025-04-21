import * as countApi from "../../http-actions/count-api.js";

let count = $state(0);

const initCount = async () => {
  count = await countApi.getCount();
}

initCount();

const useCountStore = () => {
  return {
    get count() {
      return count;
    },
    increment: () => {
      count++;
      countApi.incrementCount();
    },
  };
};

export { useCountStore };