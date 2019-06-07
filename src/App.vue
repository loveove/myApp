<template>
  <v-app>
    <v-content class="yellow darken-4">
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
import axios from "axios";
const qs = require("qs");
export default {
  name: "App",
  components: {
    BottomNav
  },
  data() {
    return {
      //
    };
  },
  methods: {
    // login() {
    //   axios
    //     .post(
    //       "http://47.90.100.229:20000/api/login",
    //       qs.stringify({
    //         username: "phawphaw",
    //         password: "phawphaw123"
    //       })
    //     )
    //     .then(function(response) {
    //       console.log(response.data.result.token);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },

    // getUserInfo() {
    //   axios({
    //     method: "get",
    //     url: "http://47.90.100.229:20000/api/account/getUserInfo",

    //     // responseType: "stream"
    //     headers: {
    //       "X-Auth-Token":
    //         "bacb80fed319b89aa90b11cf07a0c70de59fe4f1b95a46d9ba2c96b9b6022f2455aa0f87781df35274a298f030872483b24fb54a696ab651f8e125f8f6d1fd3aUSeu3wPXHq7ZtjhmhYpiXH2k/69NZFDRanoZk0M7P7UmRVyQd+bRZQCyOyjpe+oA0orjn7MW7e9Dw0m//4ZHApAHtX8ZnNU1BTdAd2iwa3nzEMjqQQRE84HFc2ScfXLFOqvCuSPc6i2VCjG1/7qXs6A2a8wKzmaCFeoToMynqio="
    //     }
    //   })
    //     .then(function(response) {
    //       // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // Updatelogin() {
    //   axios({
    //     method: "post",
    //     url: "http://47.90.100.229:20000/api/user/updatePassword",
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded",
    //       "X-Auth-Token":
    //         "dd846b90cb99dafc8c9497b546056a180ddd3bddf4b6aa3be5f25c9a48a521bced54b7b720664c5974b0f7768143aa3e5745528674103e24dcdf12c7062723942lBMJeYtkH5LDVv+oUEQTFFzB+pX1KFoFy3qOlkraDfsCndRD1k83oRSrFt8OsGt8+gd3SrMq7ErMXk3GkB8pPziAjGhdc4oC4ULNZtBbkcKbWv4q5tvUWPOOq1yNhLUIMWN6CaX1p8zc7p0QEKbfBGLHLXEIViksZSMZQxaEJM="
    //     },
    //     data: qs.stringify({
    //       oldpassword: "testuser",
    //       password: "testuser123",
    //       repassword: "testuser123"
    //     })
    //   })
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
    // Updatelogin() {
    //   axios
    //     .post(
    //       "http://47.90.100.229:20000/api/user/updatePassword",
    //       qs.stringify({
    //         oldpassword: "phawphaw",
    //         password: "phawphaw123",
    //         repassword: "phawphaw123"
    //       }),
    //       {
    //         headers: {
    //           "X-Auth-Token":
    //             "21fdca70cde727daedf2015e63a493dd99e209297116bb77ccd364cdaf0b0226d0d4fbf7ba5dc8a29f08ed30239290289840b674a65f1e12aae41888fb8248ddFTKfBuoYi1H0oDXs02Z0HSHHQbtFFI9o/oIiLqL9w0XzbQEBe8T0lwwy7BYFHGMoUZq2rxMQ1OzX6RzURuhNdfG8Fq2EnP+c3ZkkmsIg+KqaMPEQLNSCqOGhNtw2+8YjAst6uNbGN8zaKogKHYwFJwYUTXzvkwbidGGyL+cLSso="
    //         }
    //       }
    //     )
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // GetBankList() {
    //   axios
    //     .post(
    //       "http://47.90.100.229:20000/api/user/bankCards",
    //       // qs.stringify({
    //       //   oldpassword: "testuser123",
    //       //   password: "testuser",
    //       //   repassword: "testuser"
    //       // }),
    //       {
    //         headers: {
    //           "X-Auth-Token":
    //             "a09e5cf5e71d817e87d0aec302323cbd229a78bf950982700d487812ccf5907291235eb287bb105d4ba67fc377ceeafdb06071b1639d4af6fee8bf508deb7ee3x4IQ2MZ2Dz2qkC/l00iyzUbfHo3pmIJin3CRyUh4pppP2apqi0X+e291R+8AzV6jYipQID4o2RynfSmgxx2QR5Y62xXPwE89Wv5yIzfhH5Xq5udd1nwOfsBwZBONPbgBHzQAViHVgFcs4BxLEI+8H0ICb9mRo50YE0Gvq1iWf14="
    //         }
    //       }
    //     )
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // AddBankList() {
    //   axios
    //     .post(
    //       "http://47.90.100.229:20000/api/user/bankCard/add",
    //       qs.stringify({
    //         account: "phawphaw",
    //         bank_no: "14625537635487112",
    //         bank_name: "KBZ",
    //         bank_branch: "HlingTharYar"
    //       }),
    //       {
    //         headers: {
    //           "X-Auth-Token":
    //             "a536d9f74927bcd965f0d0a072b12addae12e10ecb69297291039458a0c205d5340fe8e092776885d79664949ffb45d3aa54cdd3660a1b4f2e8dbf058838667af2e5fNw5/Galfcgu8jI8PDP3bLh2v7TVqaWxfAjHbEp+JI52IdgAL6i+pEdYgiAEdzOKmr3rfO5oi0MpjNqh52pnRH/5oGLOTa+A5e4JbjVsvFxWORxDvLMjjZJ92OCjG5y1d+230rVHQqZgMcJHH6S9s31RGs3RWx3jUaJqkF8="
    //         }
    //       }
    //     )
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // CheckLogin() {
    //   axios({
    //     method: "get",
    //     url: "http://47.90.100.229:20000/api/account/check",

    //     // responseType: "stream"
    //     headers: {
    //       "X-Auth-Token":
    //         "aff72ceca3272ed4a9184e395a0f6e1d5d828191ac0d1a7017200c3adf084f161cd6238ed7ebe622f32a39a837f3b3bcbe5413cfc44bf2d11d04f4bff126b0a1fDTesV1YD2IeWAAoez7nLgcdmM+xGzA3Gl/rH0L3w9EeOg+eDqrzFT7tJxFIRVUrbF49Uk8KmI9nBV0Ef/jsYTRwEvO/jmdo0qSMbJq7f7jj58/Oy8X9HfUnqQoJPUdKlWJBfTZCSTzF6gprFVplcdXSKf/JkwmDxFiXokYj0LE="
    //     }
    //   })
    //     .then(function(response) {
    //       // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // ModifyData() {
    //   axios({
    //     method: "post",
    //     url: "http://47.90.100.229:20000/api/user/update/",
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded",
    //       "X-Auth-Token":
    //         "839476b295d19f32194bdf4c9506ad91b7bca42c7b5969ac2eea80387af3993b1a5c796bfe935e0470b838c3db19fa9cf429a16000424bd371ddaf733845c3d5sXZbcJgPgd9muK9Ma+LKEs9wDJEFfMrx8FOunenZgn7P/svNUilWDEvcYL9RT7nRQCtm3YEHQx0+rN4zRDl6pe1wIhH0q+S0LFYPqkKmtZwE3/cjKwj2WUzMveE66ECTeXhGLm6meZKCAokyYELvL9wz9Pw1HhMg0k/jvWwT+O8="
    //     },
    //     data: qs.stringify({
    //       real_name: "phawphaw",
    //       mobile: "13123456789",
    //       email: "phawphaw@gmail.com"
    //     })
    //   })
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // logout() {
    //   axios({
    //     method: "get",
    //     url: "http://47.90.100.229:20000/api/logout",

    //     // responseType: "stream"
    //     headers: {
    //       "X-Auth-Token":
    //         "354df43ad1c9a637210fb9617a67c217c48c575a1cecd06f4ad27014a1c101f33e1d08946dd7fa6a91c05f1caf1a4b2f1d23c66a580716613af30ca046b804cf+Shh90EWHfZFRWTjmoRCYqYYetCBqp1Hl2GuN3nWNAZmbFcVmFZZ7pv/NOwvY59H/KqKwAobrRRgMtdlYyf+1NWACE+esqqRzwfp+Q5KnrX4tEPGbfEV4Gz9At1LyndcHYH+IJOmymx6XAdSg2NsKNYWBOjuduBXHT2So2IhMvU="
    //     }
    //   })
    //     .then(function(response) {
    //       // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // delete() {
    //   axios({
    //     method: "post",
    //     url: "http://47.90.100.229:20000/api/user/bankCard/del",
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded",
    //       "X-Auth-Token":
    //         "d3b4b06af0d63a097d9ddf41ebb149120052e05d899c746307203f432dbbd84ec5cc52c0c7b9ef4287dacad5927ba422baabc883a2610652ef3da66949d68ea7vG1auVvUBaMXr7sn1vxGeSUfZJfSY8sPcawA4Wwh6HZ521rgMfYeCCi0AAbMK5QmMQg+YU1/j3hh/xtqvntVFt+/0Tz4wJrNzuV1/VC66wjNkquXXWGIeu7SVRGZYFGvJqfH8u9KNU2x7XBVRsBYRrpQhclKgsbrSQ+b4Q4+Kxo="
    //     },
    //     data: qs.stringify({
    //       real_name: 12
    //     })
    //   })
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    modifywidthdrawpass() {
      axios({
        method: "post",
        url: "http://47.90.100.229:20000/api/user/updateAccountPassword",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-Auth-Token":
            "344aa07e4b4b0a8fc1e9d2d4f063b3d978da61f096bb777070aa73817f9223feeb4dea6e3422904d8e445a0187b7422a05dede52d1eb42d7127f833c842a457cPIXkIXlt1qob/9bHo+Spt9mRlPe7h7UxtJ1txEvpTb7g5zwnNb7t4UkMFdoAvI5XKCUDNvIW0QwKZph4msjHjs1gZYgFiPvL2RcNtFPPB/E4BO0hQg1FXzycofKeQuh2b2Z48ya+dL7tF/PZ+ynn50y8WxmZQ84GVd5m5FF2f38="
        },
        data: qs.stringify({
          oldpassword: "phawphaw123",
          password: "phawphaw",
          repassword: "phawphaw"
        })
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    // this.login();
    // this.getUserInfo();
    // this.userRegisteration();
    // this.Updatelogin();
    // this.GetBankList();
    // this.AddBankList();
    // this.CheckLogin();
    // this.ModifyData();
    // this.logout();
    // this.delete();
    // this.modifywidthdrawpass();
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      //check login status api should be applied here
      // apiMethods.checkToken();
    }
  }
};
</script>


