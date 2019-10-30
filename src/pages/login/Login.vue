<template>
  <div
    class="login"
    :class="{ login__signin: isSignIn, login__signup: isSignUp }"
  >
    <login-tabs @click.native="switchState" />
    <login-form />
  </div>
</template>
<script>
import LoginTabs from './components/LoginTabs'
import LoginForm from './components/LoginForm'

export default {
  components: {
    LoginTabs,
    LoginForm
  },
  data () {
    return {
      state: 1
    }
  },
  computed: {
    isSignIn () {
      return this.state === 1
    },
    isSignUp () {
      return this.state === 2
    }
  },
  methods: {
    switchState () {
      this.state = this.state === 1 ? 2 : 1
    }
  }
}
</script>
<style>
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
ul,
ol {
  list-style: none;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
}
body {
  background-color: #007dff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.app {
  display: flex;
  height: 100%;
  align-items: center;
}

.login {
  width: 100%;
  color: white;
  font-size: 14px;
}
</style>
