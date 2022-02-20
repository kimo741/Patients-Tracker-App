<template>
  <div class="container">
    <div class="home">
      <div class="log">
        <div class="log__content">
          <h2 class="log__h2">WELCOME TO DASHBOARD</h2>

          <p class="log__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vero tenetur cumque totam esse neque iusto magnam mollitia
            blanditiis consectetur et
          </p>
        </div>
        <div class="log__form">
          <h3>SIGN IN</h3>
          <form class="log__form_con" @submit.prevent="formSubmit">
            <div class="log__form_inp log__form_div">
              <img class="log__icon" src="../assets/mail.svg" alt="" />
              <input
                class="log__form_inp"
                type="text"
                v-model="email"
                placeholder="Email@example.com"
              />
            </div>
            <div class="log__form_inp">
              <img class="log__icon" src="../assets/padlock.svg" alt="" />
              <input
                class="log__form_inp"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <div class="log__form_inp">
              <button class="log__form_but">sign in</button>
              <div class="span_div" v-if="err">
                <span class="span_err">
                  user name or password not corrected</span
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "login",

  data() {
    return {
      email: " ",
      password: null,
      err: false,
    };
  },
  methods: {
    formSubmit() {
      axios
        .post(
          "https://home.phi-pt.cat-sw.com/api/auth/login?email={{email}}&password={{password}}",
          {
            email: this.email,
            password: this.password,
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.$router.push("/dashboard");
          this.$store.state.token = response.data.token;
          console.log(response);
          // console.log(tok);
        })
        .catch((error) => {
          console.log("Error login");
          console.log(error);
          this.err = true;
        });
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.charts-1 .num,
.charts-1 .total,
h3 {
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
}
.home {
  width: 90%;
  height: 100%;
}
.log {
  background-image: url("../assets/bg.png");
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 400px;
  margin-left: 50px;
  margin-top: 50px;
  &__icon {
    position: relative;
    top: 50%;
    margin-right: 70%;
    width: 10px;
    height: 10px;
  }

  &__h2 {
    font-weight: bolder;
    font-size: 20px;
    display: block;
    text-align: start;
    margin: 30px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  &__p {
    display: block;
    font-size: 12px;
    text-align: start;
    margin: 30px;
    width: 70%;
    color: white;
  }
  &__content {
    word-spacing: 1px;
    margin-top: 30%;
    margin-left: 30px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 30%;
    align-content: center;
    &_div {
      margin-right: 20px !important;
    }
    &_con {
      display: flex;
      flex-direction: column;
      align-content: space-between;
    }
    &_inp {
      padding: 10px;
      margin-left: 15px;
      border-radius: 20px;
      border-color: rgba(172, 168, 161, 0.062);
      padding-left: 30px;
      &:focus {
        border-color: rgba(255, 255, 255, 0.877);
        box-shadow: 5px 5px rgba(124, 88, 88, 0.877);
        outline: none;
        box-shadow: none;
      }
    }
    &_but {
      padding: 10px;
      border-radius: 20px;
      margin: auto;
      background-color: #2c77fc;
      border-color: #2c77fc;
      width: 90%;
    }
  }
}
.span_err {
  font-size: 15px;
  color: white;
}
.span_div {
  background-color: rgba(255, 0, 0, 0.753);
  // border-radius: 3px;
  margin-top: 15px;
  border-radius: 10px;
}
</style>
