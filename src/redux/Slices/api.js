export const url = 'https://api-shop-smartphone.onrender.com';

export const setHeaders = () => {
  const headers = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return headers;
};
