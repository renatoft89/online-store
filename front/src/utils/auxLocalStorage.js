const USER = 'user';

export const setUserLocalStorage = (user) => {
  const { email, token } = user;
  localStorage.setItem(USER, JSON.stringify({ email, token }));
};