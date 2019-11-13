<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    label-position="top"
    @keyup.enter.native="onSubmit"
  >
    <el-form-item label="Старый пароль" prop="password">
      <el-input v-model="model.password" type="password" />
    </el-form-item>

    <el-form-item label="Новый пароль" prop="newPassword">
      <el-input v-model="model.newPassword" type="password" />
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="onSubmit">
        Подтвердить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { settingsRules } from '@/utils/rules'

export default {
  props: {
    entity: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      model: {
        password: '',
        newPassword: ''
      },
      rules: settingsRules
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }

        this.$axios.$post('auth/user/update_password', this.model)
          .then(this.resolveHandler)
          .catch(this.rejectHandler)
      })
    },
    resolveHandler () {
      this.$message({
        type: 'success',
        message: 'Пароль успешно обновлён'
      })
      this.$refs.form.resetFields()
    },
    rejectHandler (err) {
      const status = err.response.status
      const message = err.response.data.message

      this.$notify({
        type: 'error',
        title: status,
        message
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
