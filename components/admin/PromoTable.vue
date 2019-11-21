<template>
  <base-table :data="data">
    <el-table-column label="Ссылка" prop="promo_url" />

    <el-table-column label="Обложка" prop="image_url" />

    <el-table-column label="Позиция" prop="position" />

    <el-table-column label="Статус">
      <template #default="{ row }">
        {{ row.active ? 'Активный' : 'Неактивный' }}
      </template>
    </el-table-column>

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
            {{ row.active }}
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
      this.$router.push(`/admin/promos/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
