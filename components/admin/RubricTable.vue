<template>
  <base-table :data="data">
    <el-table-column label="Название рубрики" prop="title" />

    <el-table-column label="Название рубрики на кырг." prop="title_kg" />

    <el-table-column label="Действия">
      <template #default="{ row }">
        <el-button-group class="w-full">
          <el-button
            class="w-1/2"
            @click="onEdit(row.id)"
          >
            Редактировать
          </el-button>
          <el-button
            class="w-1/2"
            type="danger"
            @click="$emit('delete', row)"
          >
            Удалить
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
    onEdit (id) {
      this.$router.push(`/admin/categories/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
