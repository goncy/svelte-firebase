import {auth, providers} from "../../firebase";

export default {
  login: () => auth.signInWithPopup(providers.google),
  logout: () => auth.signOut(),
};
