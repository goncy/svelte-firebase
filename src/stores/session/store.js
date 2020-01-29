import {readable} from "svelte/store";

import api from "./resources";

export default readable(null, api.onChange);
