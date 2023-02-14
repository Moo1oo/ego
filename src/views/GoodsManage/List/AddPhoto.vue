<template>
  <div>
    <el-upload
      :action="url"
      list-type="picture-card"
      ref="upload"
      :limit= '2'
      :on-preview="handlePictureCardPreview"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-exceed="handleExceed">
    <i class="el-icon-plus"></i>
    </el-upload>
    <div v-if="filelist.length>1" class="el-upload__tip" slot="tip" style="color: red;">只能上传jpg/png格式，只能上传2张图片</div>
    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { upload } from '../../../api/base'
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      url: upload,
      filelist: []
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
      this.filelist = fileList
    },
    handleExceed (files, fileList) {
      console.log('上传图片超出的', files, fileList)
    }
  }
}
</script>

<style>

</style>
