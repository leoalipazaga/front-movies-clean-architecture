import { webStorage } from "../../infrastructure/storage";

export function isAuth() {
    return webStorage().get('isAuth');
}