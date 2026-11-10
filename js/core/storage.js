export const store = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      return;
    }
  }
};
