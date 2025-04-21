let initialLocation = { x: 0, y: 0 };
if (
    typeof window !== "undefined" &&
    localStorage.hasOwnProperty("location.x")
  ) {
    initialLocation = {
      x: parseInt(localStorage.getItem("location.x")), 
      y: parseInt(localStorage.getItem("location.y")), 
    };
  }


let location = $state(initialLocation);
const useLocationStore = () => {
  return {
    get location() {
      return location;
    },
    up: () => {
      location.y++;
      location = { ...location };
      localStorage.setItem("location.y", location.y);
    },
    down: () => {
        location.y--;
        location = { ...location };
        localStorage.setItem("location.y", location.y);
      },
    right: () => {
        location.x++;
        location = { ...location };
        localStorage.setItem("location.x", location.x);
      },  
    left: () => {
        location.x--;
        location = { ...location };
        localStorage.setItem("location.x", location.x);
      },  
  };
};

export { useLocationStore };