<template>
  <el-form :inline="true" :model="contact">
    <el-form-item label="Name">
      <el-input v-model="contact.name" placeholder="Name"></el-input>
    </el-form-item>
    <el-form-item label="Phone">
      <el-input v-model="contact.phone" placeholder="Phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onClick">Add contact</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {safeInvoke} from '../helper';

  export default {
    props: {
      contact: Object,
      onSubmit: Function
    },
    methods: {
      onClick() {
        safeInvoke(this.onSubmit, {...this.contact});
      }
    }
  }
</script>
