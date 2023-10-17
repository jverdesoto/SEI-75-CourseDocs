<template>
  <h1>Login page</h1>
  <GoogleLogin :callback="callback" />
  <h2 v-if="isLoggedIn">Hello Logged in</h2>
  <h3>{{ username }}</h3>
  <button class="btn btn-primary" @click="handleLogOut">Logout</button>
  <MyButton />
</template>

<script>
import { useCookies } from "vue3-cookies";
import MyButton from "../../components/buildingBlocks/MyButton";
import { decodeCredential, googleLogout } from "vue3-google-login";
const ROOT_URL = "http://localhost:4000/login";

export default {
  name: "LoginForm",
  components: {
    MyButton,
  },
  data: () => ({
    isInit: false,
    isLoggedIn: false,
    username: "",
    userData: "",
  }),
  mounted() {
    if (this.$cookies.isKey("user_session")) {
      this.isLoggedIn = true;
      const userData = decodeCredential(this.$cookies.get("user_session"));
      this.userName = userData.given_name;
    }
  },
  methods: {
    callback: function (response) {
      this.isLoggedIn = true;
      const userData = decodeCredential(response.credential);
      console.log(userData);
      this.username = userData.name;
      this.userData = userData;
      this.$cookies.set("user_session", response.credential);

      fetch(`${ROOT_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.userData),
      })
        .then((response) => response.json())
        .then((message) => console.log(message));
    },
    handleLogOut: function () {
      googleLogout();
      this.$cookies.remove("user_session");
      this.isLoggedIn = false;
    },
  },
};
</script>
