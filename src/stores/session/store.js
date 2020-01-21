import { readable } from 'svelte/store';
import {authState} from "rxfire/auth"
  
import {auth} from "../../firebase"

export default readable(null, (set) => authState(auth).subscribe(set))
