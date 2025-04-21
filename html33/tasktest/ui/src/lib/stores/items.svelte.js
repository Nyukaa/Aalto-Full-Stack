const useItemStore = () => {
    let items = $state([]);
  
    return {
      get items() {
        return items;
      },
      add: (item) => {
        items = [item, ...items];
      },
    };
  };
  
  export { useItemStore };