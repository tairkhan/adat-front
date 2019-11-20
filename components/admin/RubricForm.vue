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
      <el-button type="primary" @click="onSubmit">
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

        const payload = this.model
        switch (typeof this.entity.id) {
          case 'undefined':
            this.$axios.$post('rubrics', payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          case 'number':
            this.$axios.$put(`rubrics/${this.entity.id}`, payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          default:
            break
        }
      })
    },
    resolveHandler () {
      this.$router.push('/admin/categories')
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
