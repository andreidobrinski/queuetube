import { get } from 'svelte/store';
import { authStore } from './authStore';

interface CheckTokenResponse {
  expires_in?: number;
  error?: string;
}

export async function checkToken() {
  const { token } = get(authStore);

  if (!token) return;

  const tokenInfoUrl = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`;

  const res = await fetch(tokenInfoUrl);
  const data: CheckTokenResponse = await res.json();

  // user has a valid token
  if (data.expires_in) {
    authStore.update(value => ({ ...value, isLoggedIn: true }))
  } else {
    authStore.set({ token: '', isLoggedIn: false }); // token is expired or invalid
  }
}