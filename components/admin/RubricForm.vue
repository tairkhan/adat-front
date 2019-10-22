<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    label-position="top"
    @keyup.enter.native="onSubmit"
  >
    <el-form-item label="Название рубрики" prop="title">
      <el-input v-model="model.title" />
    </el-form-item>

    <el-form-item label="Название рубрики на кырг." prop="title_kg">
      <el-input v-model="model.title_kg" />
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="onSubmit">
        Подтвердить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { rubricSchema } from '@/utils/schemas'
import { rubricRules } from '@/utils/rules'

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
      model: rubricSchema(this.entity),
      rules: rubricRules
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }

        const action = typeof this.model.id === 'undefined' ? 'create' : 'update'
        this.$store.dispatch(`directories/${action}`, { name: 'rubrics', payload: this.model })
          .then(() => {
            this.$router.push('/admin/categories')
          })
          .catch((err) => {
            const status = err.response.status
            const message = err.response.data.message

            this.$notify({
              type: 'error',
              title: status,
              message
            })
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
