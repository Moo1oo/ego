<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 300px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @onChange="onChange"
            @onBlur="onBlur"
        />
    </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
export default {
  components: { Editor, Toolbar },
  data () {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        toolbarKeys: ['blockquote', 'header1', 'header2', 'header3', 'bold', 'underline', 'italic', 'through', 'color', 'bgColor', 'clearStyle', 'bulletedList', 'numberedList', 'todo', 'justifyLeft', 'justifyRight', 'justifyCenter', 'undo', 'redo']
      },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'simple' // or 'simple'
    }
  },
  methods: {
    // 这里带on开头的都是WangEditor自带的生命周期函数
    onCreated (editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    onChange (editor) {
      const toolbar = DomEditor.getToolbar(editor)
      const curToolbarConfig = toolbar.getConfig()
      console.log(curToolbarConfig.toolbarKeys)
    },
    onBlur () {
      // 在这里失去焦点之后，就传走
      // console.log(this.html)
      this.$emit('editorData', this.html)
    }
  },
  mounted () {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //   this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    // }, 1500)
  },
  // 销毁之前清空富文本编译器
  beforeDestroy () {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="less" scoped>

</style>
