<template>
  <el-table
    :data="contacts"
    v-on:sort-change="onSort"
    empty-text="Your phone book is empty">
    <el-table-column
      prop="name"
      sortable
      label="Name">
    </el-table-column>
    <el-table-column
      prop="phone"
      sortable="custom"
      label="Phone">
    </el-table-column>
    <el-table-column
      label="Operations"
      width="120">
      <template scope="scope">
        <el-button @click.native.prevent="onClickDelete(scope.$index)" type="text" size="small">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {safeInvoke} from '../helper';

  export default {
    props: {
      contacts: Array,
      onDelete: Function,
      onSort: Function
    },
    methods: {
      onClickDelete(index) {
        safeInvoke(this.onDelete, index);
      }
    }
  }
</script>
