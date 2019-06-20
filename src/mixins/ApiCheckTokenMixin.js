import store from '../store'
import axios from "axios";
export const ApiCheckTokenMixin = {
    methods: {
        checkToken() {
            axios
                .get(`${store.state.apiUrl}/check`, {
                    headers: {
                        "X-Auth-Token": store.state.token
                    }
                })
                .then(res => {
                    //login exipred
                    if (res.data.code === 101) {
                        console.log(res.data.code)
                        store.dispatch("setToken", "");
                        localStorage.removeItem("token");
                        store.dispatch("isLoginFalse");
                        // alert('登陆已过期，请重新登陆')
                        // store.dispatch('setExipredTrue');
                    }
                    if (res.data.msg === "ok") {
                        console.log(res.data.code)
                        store.dispatch("isLoginTrue");
                    }
                    if (res.data.msg === "refresh") {
                        console.log(res.data.code)
                        store.dispatch("setToken", res.data.result.token);
                        store.dispatch("isLoginTrue");
                    }
                })
            // .catch(err => console.log(err));
        }
    }
}