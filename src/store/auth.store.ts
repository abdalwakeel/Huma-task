interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

export const authInitialState: AuthState = {
  isAuthenticated: false,
  user: null,
};