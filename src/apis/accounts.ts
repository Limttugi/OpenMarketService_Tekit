import { Dispatch, SetStateAction } from 'react';
import { instance, setInstanceHeaders } from 'apis';

export interface ErrorI {
  response: {
    status: number;
  };
}

interface loginI {
  username: string;
  password: string;
  login_type: string;
  setLoginSuccess: Dispatch<SetStateAction<boolean>>;
}

export const loginRequest = async ({ username, password, login_type, setLoginSuccess }: loginI) => {
  const res = await instance.post('accounts/login/', { username, password, login_type });
  const JWT = res.data.token;

  localStorage.setItem('JWT', JWT);
  setInstanceHeaders(JWT);

  return res;
};
