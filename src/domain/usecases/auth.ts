import { webStorage } from "../../infrastructure/storage";

export function auth(user: any) {
  const users = webStorage().get('users');
  const parsedUsers = JSON.parse(users);
  const isAuth = !!parsedUsers.find((item: any) =>
    item.email === user.email && item.password === user.password
  );
  isAuth && webStorage().set('isAuth', true);

  return isAuth;
}