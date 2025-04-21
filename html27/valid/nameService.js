const names = [];

const getNames = () => {
  return names;
};

const addName = (obj) => {
 
  const namej = {
    name: obj.name,
  };
  
  names.push(namej);
  
  
};

export { addName, getNames };
