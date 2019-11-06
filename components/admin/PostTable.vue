<template>
  <base-table :data="data">
    <el-table-column label="Заголовок новости" prop="title" />

    <el-table-column label="Заголовок новости на кырг." prop="title_kg" />

    <el-table-column label="Рубрики">
      <template #default="{ row }">
        <span
          v-for="item in row.rubrics"
          :key="item.id"
          class="border px-1 mr-1 text-xs rounded"
        >
          {{ item.title }}
        </span>
      </template>
    </el-table-column>

    <el-table-column label="Статус">
      <template #default="{ row }">
        <span v-if="row.status === 'draft'">Черновик</span>
        <span v-else-if="row.status === 'published'">Опубликовано</span>
        <span v-else-if="row.status === 'trashed'">В корзине</span>
      </template>
    </el-table-column>

    <el-table-column label="Действия" width="350">
      <template #default="{ row }">
        <el-button-group>
          <el-button
            v-if="row.status !== 'trashed'"
            size="mini"
            @click="onEdit(row.id)"
          >
            Редактировать
          </el-button>
          <el-button
            v-else
            size="mini"
            @click="onRestore(row.id)"
          >
            Восстановить
          </el-button>
          <el-button
            type="danger"
            size="mini"
            @click="$emit('delete', row)"
          >
            Удалить {{ row.status !== 'trashed' ? ' в корзину' : '' }}
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </base-table>
</template>

<script>
import BaseTable from '@/components/admin/BaseTable'

export default {
  components: {
    BaseTable
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    onRestore (id) {
      this.$emit('restore', id)
    },
    onEdit (id) {
      this.$router.push(`/admin/posts/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
