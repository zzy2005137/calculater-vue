<template>
  <div id="app">
    <h1>{{ $t("message") }}</h1>
    <button @click="changeLocale">click</button>
    <el-button type="text" @click="dialogFormVisible = true">打开pmt表单的 Dialog</el-button>
    <el-button type="text" @click="compoundDialogVisible = true">打开复利表单的 Dialog</el-button>
    <PmtDialog :visible="dialogFormVisible" @submit="onSubmit" @close="dialogFormVisible = false"></PmtDialog>
    <CompoundDialog :visible="compoundDialogVisible" @submit="onSubmit" @close="compoundDialogVisible = false">
    </CompoundDialog>
  </div>
</template>

<script>
import PmtDialog from './components/PmtDialog.vue';
import CompoundDialog from './components/CompoundDialog.vue';

export default {
  name: "app",
  components: {
    PmtDialog,
    CompoundDialog
  },
  data() {
    return {
      dialogFormVisible: false,
      compoundDialogVisible: false,
    };

  },
  methods: {
    changeLocale() {
      const locale = this.$i18n.locale;
      this.$i18n.locale = locale === "zh" ? "en" : "zh";
    },
    closeDialog() {
      this.dialogFormVisible = false;
    },
    onSubmit(res) {
      console.log(res)
      this.dialogFormVisible = false
      this.compoundDialogVisible = false
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
