interface Storage {
  set: (key: string, value: string) => void;
  get: (key: string) => string;
  has: (key: string) => boolean;
}

export const storage: Storage = {
  set: (key, value) => window.localStorage.setItem(key, value),
  get: (key) => window.localStorage.getItem(key) ?? '',
  has: (key) => !!window.localStorage.getItem(key),
};
