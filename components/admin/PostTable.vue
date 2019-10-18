<template>
  <base-table :data="data">
    <el-table-column label="Заголовок новости" prop="title" />

    <el-table-column label="Заголовок новости на кырг." prop="title_kg" />

    <el-table-column label="Действия">
      <template #default="{ row }">
        <el-button
          size="mini"
          @click="onEdit(row.id)"
        >
          Редактировать
        </el-button>
        <el-button
          type="danger"
          size="mini"
          @click="$emit('delete', row)"
        >
          Удалить
        </el-button>
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
    onEdit (id) {
      this.$router.push(`/admin/posts/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
