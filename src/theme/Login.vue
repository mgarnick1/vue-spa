<template>
  <div class="content">
    <h2>Login</h2>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Username</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="Your username" v-model="username" />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Password</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="password" placeholder="Your password" v-model="password" />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button @click="login" class="button is-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appService from '../app.service.js';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      appService.login({ username: this.username, password: this.password })
      .then((data) => {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('tokenExpiration', data.expiration)
      })
      .catch(() => window.alert('Could not login!'))
    },
  },
};
</script>
