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

    <el-form-item label="Выберите обложку">
      <upload @result="onCover" />
      <img class="border h-32 w-32" :src="model.cover_img_url">
    </el-form-item>

    <el-form-item v-if="lang === 'ru'" label="Заголовок новости" prop="title">
      <el-input v-model="model.title" />
    </el-form-item>

    <el-form-item v-else label="Заголовок новости" prop="title_kg">
      <el-input v-model="model.title_kg" />
    </el-form-item>

    <el-form-item label="Контент">
      <editor
        class="border rounded"
        :autofocus="false"
        :init-data="content"
        @save="onSave"
        @ready="onReady"
        @change="onChange"
      />
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
      initData: {},
      savedData: {},
      model: postSchema(this.entity),
      rules: postRules
    }
  },
  computed: {
    content () {
      return this.lang === 'ru' ? this.model.content : this.model.content_kg
    }
  },
  methods: {
    onCover (url) {
      this.model.cover_img_url = url
    },
    save () {
      this.$refs.editor.save()
    },
    load () {
      this.initData = this.savedData
    },
    loadData () {
      this.initData = JSON.parse('{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.13"}')
    },
    onSave (response) {
      console.log(JSON.stringify(response))
      this.savedData = response
    },
    onReady () {
      console.log('ready')
    },
    onChange () {
      console.log('changed')
    },
    onSubmit () {
      console.log(this.model)
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
