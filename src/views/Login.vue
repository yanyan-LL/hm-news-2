<template>
<div>
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="login">
    <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="rules.username"
    />
    <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
    />
    <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
        登录
        </van-button>
    </div>
    <p class="tips">没有账号？去<router-link to="/register">注册</router-link></p>
</van-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '用户名长度是5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度是3-9位的数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async login () {
    //   console.log(11)
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      //   console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less">
.tips {
    padding: 0 18px;
    font-size: 18px;
    text-align: right;
    a {
        color: red;
    }
}
</style>
