<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      ref="upload"
      :on-preview="handlePictureCardPreview"
      :on-success="handleSuccess"
      :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleSuccess (response, file, fileList) {
      console.log('uploadSuccess', response, file, fileList)
    }
  }
}
</script>

<style>

</style>
