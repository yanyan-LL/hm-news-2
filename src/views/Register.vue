<template>
<div>
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="register">
    <van-field
        v-model="user.username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="rules.username"
    />
    <van-field
        v-model="user.nickname"
        label="昵称"
        placeholder="请输入昵称"
        :rules="rules.nickname"
    />
    <van-field
        v-model="user.password"
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
    <p class="tips">已有账号？去<router-link to="/register">注册</router-link></p>
</van-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '用户名长度是5-11位数字', trigger: 'onChange' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'onChange' },
          { pattern: /^[\u4e00-\u9fa5]{2,8}$/, message: '昵称必须是2-8位的中文', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度是3-9位的数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async register () {
    //   console.log(11)
      const res = await this.$axios.post('/register', this.user)
      //   console.log(res.data)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push('/login')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style>

</style>
