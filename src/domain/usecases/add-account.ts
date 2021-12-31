import { webStorage } from '../../infrastructure/storage';

export function addAccount(user: any) {
    const users = webStorage().get('users');
    const parsedUsers = JSON.parse(users) || [];
    webStorage().set('users', [...parsedUsers, user]);
}