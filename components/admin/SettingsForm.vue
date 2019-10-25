<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    label-position="top"
    @keyup.enter.native="onSubmit"
  >
    <el-form-item label="Старый пароль" prop="oldPassword">
      <el-input v-model="model.oldPassword" type="password" />
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
        oldPassword: '',
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

        this.$refs.form.resetFields()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
