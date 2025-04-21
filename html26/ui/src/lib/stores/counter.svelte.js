let initialCount = 0;
if (
  typeof window !== "undefined" &&
  localStorage.hasOwnProperty("count")
) {
  initialCount = parseInt(localStorage.getItem("count"));
}

let count = $state(initialCount);

const useCountStore = () => {
  return {
    get count() {
      return count;
    },
    increment: () => {
      count++;
      localStorage.setItem("count", count);
    },
  };
};

export { useCountStore };