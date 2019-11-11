<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    :status-icon="true"
    label-position="left"
    label-width="70px"
    size="small"
    @keyup.enter.native="onSubmit"
  >
    <el-form-item label="логин:" prop="username">
      <el-input v-model="model.username" autofocus />
    </el-form-item>

    <el-form-item label="пароль:" prop="password">
      <el-input v-model="model.password" type="password" />
    </el-form-item>

    <el-form-item>
      <el-button type="info" plain @click="onSubmit">
        войти
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { loginRules } from '@/utils/rules'

export default {
  data () {
    return {
      rules: loginRules,
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }

        const { username, password } = this.model
        this.$auth.loginWith('local', { data: { username, password } })
          .then(() => {
            this.$router.push('/admin/posts')
          })
          .catch((err) => {
            const status = err.response.status

            if (status === 401) {
              this.$notify({
                type: 'error',
                title: 'Ошибка',
                message: 'Неверный логин или пароль'
              })
            }
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
