import { webStorage } from '../../infrastructure/storage';

export function signOut() {
    webStorage().set('isAuth', false);
}