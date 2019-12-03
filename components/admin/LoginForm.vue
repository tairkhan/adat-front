<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    @keyup.enter.native="onSubmit"
  >
    <el-form-item>
      <h2>Вход</h2>
    </el-form-item>

    <el-form-item prop="username">
      <el-input v-model="model.username" autofocus placeholder="Логин">
        <template slot="prepend">
          <fa-icon icon="user" class="fa-fw" />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="model.password" type="password" placeholder="Пароль">
        <template slot="prepend">
          <fa-icon icon="lock" class="fa-fw" />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="w-full" type="primary" @click="onSubmit">
        Войти
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button plain size="mini" @click="$router.push('/')">
        <fa-icon icon="arrow-left" class="fa-fw" />
        Вернуться на сайт
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
            this.$i18n.setLocaleCookie('ru')
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
