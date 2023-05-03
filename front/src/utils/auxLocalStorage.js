const USER = 'user';

export const setUserLocalStorage = (user) => {
  const { email, token } = user;
  localStorage.setItem(USER, JSON.stringify({ email, token }));
};

export const getUserLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem(USER)) || [];  
  return user.email;
}