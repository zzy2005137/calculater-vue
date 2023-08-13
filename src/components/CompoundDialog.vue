<template>
    <div class="compound-dialog">
        <el-dialog :title="title" :visible="visible" :show-close="false">
            <el-form :model="form">
                <el-form-item :label="$t('principal')">
                    <el-input v-model="form.p" autocomplete="off" type="number"></el-input>
                </el-form-item>
                <el-form-item :label="$t('annualInterestRate')">
                    <el-input v-model="form.r" autocomplete="off" type="number"></el-input>
                </el-form-item>
                <el-form-item :label="$t('years')">
                    <el-input v-model="form.n" autocomplete="off" type="number"></el-input>
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
    name: 'CompoundDialog',
    props: {
        title: String,
        visible: Boolean
    },
    data() {
        return {
            form: {
                p: 0,
                r: 0,
                n: 0,
            },
        }
    },
    computed: {

    },
    methods: {
        onSubmit() {
            const { p, r, n } = this.form
            const res = this.calculate(p, r, n)
            this.$emit('submit', isNaN(res) ? '' : res)
        },
        calculate(p, r, n) {
            return (p * Math.pow(1 + Number(r), n)).toFixed(2)
        }
    }

}
</script>

<style scoped></style>

<i18n>
{
  "en": {
    "principal":"Principal ",
    "annualInterestRate":"Annual Interest Rate",
    "years":"Years",
    "invalid":"invalid input"
  },
  "zh":{
    "principal":"本金 ",
    "annualInterestRate":"年利率",
    "years":"年数",
    "invalid":"invalid input"
  }
}
</i18n>