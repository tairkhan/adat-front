<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :hide-required-asterisk="true"
    label-position="top"
  >
    <el-form-item label="Язык">
      <el-select v-model="lang">
        <el-option
          v-for="(item, i) in langOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Рубрика" prop="rubrics">
      <el-select v-model="model.rubrics" multiple placeholder="Рубрика">
        <el-option
          v-for="item in rubrics"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Обложка" prop="cover_image_url">
      <upload :image-url="model.cover_image_url" @result="cover" />
    </el-form-item>

    <el-form-item :class="lang === 'ru' ? 'visible' : 'hidden'" label="Заголовок новости" prop="title">
      <el-input v-model="model.title" />
    </el-form-item>

    <el-form-item :class="lang === 'kg' ? 'visible' : 'hidden'" label="Заголовок новости" prop="title_kg">
      <el-input v-model="model.title_kg" />
    </el-form-item>

    <el-form-item label="Контент" :prop="content">
      <client-only>
        <editor
          class="border overflow-y-auto"
          style="height: 50rem;"
          :data="data"
          @save="onSave"
        />
      </client-only>
    </el-form-item>

    <el-form-item label="Выберите статус" prop="status">
      <el-select v-model="model.status">
        <el-option
          v-for="(item, i) in statusOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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
      data: {},
      model: postSchema(this.entity),
      rules: postRules,
      lang: '',
      langOptions: [
        { label: 'Ру', value: 'ru' },
        { label: 'Кг', value: 'kg' }
      ],
      statusOptions: [
        { label: 'Черновик', value: 'draft' },
        { label: 'Опубликовано', value: 'published' }
      ]
    }
  },
  computed: {
    content () {
      return this.lang === 'ru' ? 'content' : 'content_kg'
    },
    rubrics () {
      return this.$store.state.directories.rubrics.results
    },
    total () {
      return this.$store.state.directories.rubrics.total
    }
  },
  watch: {
    lang (val) {
      const data = this.model[this.content]
      this.data = JSON.parse(data)
    }
  },
  created () {
    this.fetch()
    this.lang = 'ru'
  },
  methods: {
    fetch () {
      const params = { page_size: 100, sort_direction: 'asc' }
      this.$store.dispatch('directories/fetch', { name: 'rubrics', params })
    },
    cover (url) {
      this.model.cover_image_url = url
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
          this.$message({
            type: 'warning',
            message: 'Заполните поля на всех языках'
          })

          return false
        }

        let action
        const data = { name: 'posts', payload: this.model }
        switch (typeof this.entity.id) {
          case 'undefined':
            action = 'create'
            break
          case 'number':
            action = 'update'
            data.id = this.entity.id
            delete this.model.id
            break
          default:
            return false
        }

        this.$store.dispatch(`directories/${action}`, data)
          .then(() => {
            this.$router.push('/admin/posts')
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
