import { WebStorage } from '../../protocols/storage';

export function webStorage(): WebStorage {
  return {
    get(key: string) {
      return JSON.parse(`${window.localStorage.getItem(key)}`);
    },
    set(key: string, data: any) {
      return window.localStorage.setItem(key, JSON.stringify(data));
    }
  }
}