/**
 * @description                     Function that sets Dark Mode in localStorage (bool)
 * 
 * @returns                         boolean
 */

function getDarkModeFromLocalStorage() {
    if (localStorage.getItem("isdarkmode") === "true") { 
      return true
    } else {
      localStorage.setItem("isdarkmode", false)
      return false
    };
  }

  export default getDarkModeFromLocalStorage;