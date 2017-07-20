<template>
  <el-form :inline="true">
    <el-form-item label="Search">
      <el-input v-model="query" placeholder="Search"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  import {safeInvoke} from '../helper';

  export default {
    props: {
      onSearch: Function
    },
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query(value) {
        safeInvoke(this.onSearch, value);
      }
    }
  }
</script>
