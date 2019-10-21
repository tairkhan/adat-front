<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    label-position="top"
  >
    <el-form-item label="Выберите язык">
      <el-select v-model="lang">
        <el-option
          v-for="(item, i) in options"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Выберите категорию">
      <el-select v-model="lang">
        <el-option
          v-for="(item, i) in options"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Выберите обложку">
      <upload @result="cover" />
    </el-form-item>

    <el-form-item v-if="lang === 'ru'" label="Заголовок новости" prop="title">
      <el-input v-model="model.title" />
    </el-form-item>

    <el-form-item v-else label="Заголовок новости" prop="title_kg">
      <el-input v-model="model.title_kg" />
    </el-form-item>

    <el-form-item label="Контент">
      <client-only>
        <editor
          class="border overflow-y-auto"
          style="height: 24rem;"
          :data="data"
          @save="onSave"
        />
      </client-only>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        Отправить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { postSchema } from '@/utils/schemas'
import { postRules } from '@/utils/rules'
import Upload from '@/components/admin/Upload'

export default {
  components: {
    Upload
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
      lang: 'ru',
      options: [
        { label: 'Ру', value: 'ru' },
        { label: 'Кг', value: 'kg' }
      ],
      data: {},
      model: postSchema(this.entity),
      rules: postRules
    }
  },
  watch: {
    lang (val) {
      const data = this.lang === 'ru' ? this.model.content : this.model.content_kg
      this.data = JSON.parse(data)
    }
  },
  methods: {
    cover (url) {
      this.model.cover = url
    },
    onSave (data) {
      const content = JSON.stringify(data)
      if (this.lang === 'ru') {
        this.model.content = content
      } else {
        this.model.content_kg = content
      }
    },
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
