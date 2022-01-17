import { webStorage } from "../../../infrastructure/storage";

export function signin(user: any) {
    return new Promise((resolve, reject) => {
        const users = webStorage().get('users') || [];
        const userAuthenticated = users.find((item: any) =>
            item.email === user.email && item.password === user.password
        );

        !!userAuthenticated 
            ? resolve({ status: 200, data: userAuthenticated })
            : reject({ error: 'Incorrect username or password', status: 400 });
    });
}

export function signout() {
    return new Promise((resolve, _reject) => {
        resolve({});
    });
}

export function signup(user: any) {
    return new Promise((resolve, reject) => {
        try {
            const users = webStorage().get('users') || [];
            webStorage().set('users', [...users, user]);
            resolve({});
        } catch(error) {
            reject({ error: 'Signup failed. Try later.' });
        }
    });
}