<template>
    <div class="my-dialog">
        <el-dialog :title="title" :visible.sync="dialogFormVisible" :show-close="false">
            <el-form :model="form">

                <el-form-item v-for="(item, index) in data" :key="index" :label="item" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('close')">{{ $t('cancel') }}</el-button>
                <el-button type="primary" @click="onSubmit">{{ $t('confirm') }}</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'MyDialog',
    props: {
        title: String,
        show: Boolean,
        data() {
            return Array
        }
    },
    data() {
        return {
            form: {},
            formLabelWidth: '120px',
        }
    },
    computed: {
        dialogFormVisible() {
            return this.show
        }
    },
    methods: {
        onSubmit() {
            this.$emit('close')
        }
    }

}
</script>

<style scoped></style>