import { phoneApi } from "./phone";
import { compApi } from "./computer";
import { registerApi } from "./register";
import { loginApi } from "./login";

export default [phoneApi, compApi, registerApi, loginApi];

export const serviceReducer = {
    [compApi.reducerPath]: compApi.reducer,
    [phoneApi.reducerPath]: phoneApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
};
