<template>
  <div>
    <el-form
      ref="form"
      :model="model"
      :rules="rules"
      :hide-required-asterisk="true"
      label-position="top"
    >
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="flex-1">
          <el-form-item :class="lang === 'ru' ? 'visible' : 'hidden'" label="Заголовок новости" prop="title">
            <el-input v-model="model.title" />
          </el-form-item>

          <el-form-item :class="lang === 'kg' ? 'visible' : 'hidden'" label="Заголовок новости" prop="title_kg">
            <el-input v-model="model.title_kg" />
          </el-form-item>

          <el-form-item label="Контент">
            <client-only>
              <editor
                class="border overflow-y-auto"
                style="height: 50rem;"
                :data="data"
                @save="onSave"
              />
            </client-only>
          </el-form-item>
        </div>

        <div class="lg:ml-8 lg:w-56">
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

          <el-form-item label="Обложка">
            <el-button @click="visible = true">
              Выбрать обложку
            </el-button>
          </el-form-item>

          <el-form-item v-if="model.cover_image_url">
            <div class="relative inline-block">
              <img class="inline-block h-32 border rounded" :src="model.cover_image_url">

              <div
                class="absolute top-0 w-full h-full flex justify-center items-center text-white cursor-pointer opacity-0 hover:bg-black hover:opacity-75 rounded"
                style="transition: all .25s;"
                @click="model.cover_image_url = ''"
              >
                <fa-icon icon="window-close" class="fa-fw" size="3x" />
              </div>
            </div>
          </el-form-item>

          <el-form-item label="Статус" prop="status">
            <el-select v-model="model.status">
              <el-option
                v-for="(item, i) in statusOptions"
                :key="i"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item prop="on_main_page">
            <el-checkbox v-model="model.on_main_page" label="Закрепить на главном блоке" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">
              Подтвердить
            </el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>

    <base-dialog
      :visible.sync="visible"
      title="Выбрать обложку"
      :fullscreen="true"
      @closed="visible = false"
    >
      <library v-if="visible" :image="model.cover_image_url" @cover="onApplyCover" @closed="visible = false" />
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from '@/components/admin/BaseDialog'
import Library from '@/components/admin/Library'
import RubricMixin from '@/mixins/RubricMixin'
import { postSchema } from '@/utils/schemas'
import { postRules } from '@/utils/rules'

export default {
  components: {
    BaseDialog,
    Library
  },
  mixins: [RubricMixin],
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
      ],
      visible: false
    }
  },
  watch: {
    lang (val) {
      const data = this.model[this.content()]
      this.data = JSON.parse(data)
    }
  },
  created () {
    this.rubricPageSize = 100
    this.fetchRubrics()
    this.lang = 'ru'
  },
  methods: {
    onApplyCover (url) {
      this.visible = false
      this.model.cover_image_url = url
    },
    content () {
      return this.lang === 'ru' ? 'content' : 'content_kg'
    },
    onSave (data) {
      const content = JSON.stringify(data)
      this.model[this.content()] = content
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

        const payload = this.model
        switch (typeof this.entity.id) {
          case 'undefined':
            this.$axios.$post('posts', payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          case 'number':
            this.$axios.$put(`posts/${this.entity.id}`, payload)
              .then(this.resolveHandler)
              .catch(this.rejectHandler)
            break
          default:
            break
        }
      })
    },
    resolveHandler () {
      this.$router.push('/admin/posts')
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
