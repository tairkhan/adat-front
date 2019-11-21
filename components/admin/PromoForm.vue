<template>
  <div>
    <el-form
      ref="form"
      :model="model"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <el-form-item label="Ссылка" prop="promo_url">
        <el-input v-model="model.promo_url" />
      </el-form-item>

      <el-form-item label="Обложка" prop="image_url">
        <el-button @click="visible = true">
          Выбрать обложку
        </el-button>
      </el-form-item>

      <el-form-item v-if="model.image_url">
        <img class="inline-block h-32 border rounded" :src="model.image_url">
      </el-form-item>

      <el-form-item label="Позиция" prop="position">
        <el-select v-model="model.position">
          <el-option
            label="Основной верхний блок"
            value="header_main"
          />

          <el-option
            label="Второстепенный верхний блок"
            value="header_secondary"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Статус" prop="active">
        <el-radio-group v-model="model.active">
          <el-radio :label="false">
            Неактивный
          </el-radio>
          <el-radio :label="true">
            Активный
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Подтвердить
        </el-button>
      </el-form-item>
    </el-form>

    <base-dialog
      :visible.sync="visible"
      title="Выбрать обложку"
      :fullscreen="true"
      @closed="visible = false"
    >
      <library v-if="visible" :image="model.image_url" @cover="onApplyCover" @closed="visible = false" />
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from '@/components/admin/BaseDialog'
import Library from '@/components/admin/Library'
import { promoSchema } from '@/utils/schemas'
import { promoRules } from '@/utils/rules'

export default {
  components: {
    BaseDialog,
    Library
  },
  props: {
    entity: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      model: promoSchema(this.entity),
      rules: promoRules,
      visible: false
    }
  },
  methods: {
    onApplyCover (url) {
      this.visible = false
      this.model.image_url = url
    },
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }

        const payload = this.model
        switch (typeof this.entity.id) {
          case 'undefined':
            this.$axios.$post('promos', payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          case 'number':
            this.$axios.$put(`promos/${this.entity.id}`, payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          default:
            break
        }
      })
    },
    resolveHandler () {
      this.$router.push('/admin/promos')
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
