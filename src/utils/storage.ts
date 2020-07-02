export const storage = {
  set: (key: string, value: string) => window.localStorage.setItem(key, value),
  get: (key: string) => window.localStorage.getItem(key),
};
