import { atom } from "recoil";

const userState = atom< any | null>({key: 'userState', default: null})
export default userState