let count = $state(0);
const useCountStore = () => {

    return {
      get count() {
        return count;
      },
      increment: () => count++,
    };
  };
  
  export { useCountStore };