export const isAuthenticated = () => !!localStorage.getItem('authToken');
export const getAuthToken = (): AuthToken|undefined => isAuthenticated() && JSON.parse(localStorage.getItem('authToken') || '');
export const setAuthToken = (authToken: AuthToken) => {
  localStorage.setItem('authToken', JSON.stringify(authToken));
};
export const removeAuthToken = () => localStorage.removeItem('authToken');
export async function signin(signinValues: SigninValues) {
  await new Promise((r) => setTimeout(r, 1000)); // fake delay
  if (signinValues.username === 'admin' && signinValues.password === 'admin') {
    const authToken: AuthToken = {
      token: 'fake-token',
      refreshToken: 'fake-access-token'
    };
    setAuthToken(authToken);
    return true;
  }
  throw new Error('authentication failed');
}
export async function signout() {
  await new Promise((r) => setTimeout(r, 1000)); // fake delay
  removeAuthToken();
}
