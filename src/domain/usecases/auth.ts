import { webStorage } from "../../infrastructure/storage";

export async function authenticate(user: any) {
  const authPromise = new Promise((resolve, reject) => {
    const users = webStorage().get('users');
    const userAuthenticated = users.find((item: any) =>
      item.email === user.email && item.password === user.password
    );

    if(!!userAuthenticated) {
      resolve({ status: 200, data: userAuthenticated });
      webStorage().set('isAuth', true);
    } else {
      reject({ errorMessage: 'Incorrect username or password', status: 400 });
    }
  });
  try {
    const response = await authPromise;
    return response;
  } catch (error) {
    throw (error);
  }
}