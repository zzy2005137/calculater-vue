<template>
    <div class="pmt-dialog">
        <el-dialog :title="title" :visible="visible" :show-close="false">
            <el-form :model="form">
                <el-form-item :label="$t('loanAmount')">
                    <el-input v-model="form.p" autocomplete="off" type="number"></el-input>
                </el-form-item>
                <el-form-item :label="$t('annualInterestRate')">
                    <el-input v-model="form.r" autocomplete="off" type="number"></el-input>
                </el-form-item>
                <el-form-item :label="$t('loanTermMonths')">
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
    name: 'PmtDialog',
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
            const pmt = this.calculateLoanPayment(p, r, n)
            this.$emit('submit', isNaN(pmt) ? '' : pmt)
        },
        calculateLoanPayment(PV, r, n) {
            const monthlyInterest = r / 12; // Convert annual interest rate to monthly
            const denominator = 1 - Math.pow(1 + monthlyInterest, -n);
            const payment = (PV * monthlyInterest) / denominator;
            return payment.toFixed(2);
        }
    }

}
</script>

<style scoped></style>

<i18n>
{
  "en": {
    "loanAmount":"Loan Amount",
    "annualInterestRate":"Annual Interest Rate",
    "loanTermMonths":"Loan Term Months",
    "invalid":"invalid input"
  },
  "zh":{
    "loanAmount":"贷款金额",
    "annualInterestRate":"年利率",
    "loanTermMonths":"贷款期限/月",
    "invalid":"输入无效"
  }
}
</i18n>