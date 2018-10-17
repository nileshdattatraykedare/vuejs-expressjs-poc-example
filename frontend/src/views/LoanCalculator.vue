<template>
  <div class="container-fluid">
    <h3>LOAN CALCULATOR</h3>
  <form>

  <div class="form-group">

      <label for="borrow">Loan Amount</label>
      <p><input class="form-control" type="text" v-model="borrow" name="borrow" /></p>
      <label for="tenure">Tenure</label>
      <p><select class="form-control" name="tenure" v-model="tenure">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> </p>
      <label>Interest Rate</label>
      <p><input class="form-control" type="number" v-model="interest_rate" value="5.99" /> %</p>

  </div>
    </form>
    <p>Principal Installment: <span style="font-weight: bold">{{(borrow / (tenure * 12)).toFixed(2) }}</span></p>
    <p>Yearly Interest: <span style="font-weight: bold">{{((borrow * interest_rate) / 100).toFixed(2)}} </span></p>
    <p>Monthly Interest: <span style="font-weight: bold">{{(((borrow * interest_rate) / 100) / 12).toFixed(2)}}</span></p>
    <p>Monthly Repayment: <span style="font-weight: bold">{{((((borrow * interest_rate) / 100) / 12) + (borrow / (tenure * 12))).toFixed(2)}}</span></p>
  </div>

</template>
<script>
    require('../plugins/bootstrap-vue');
    //Monthly Repayment = Monthly Interest + Principal Installment;
    //Monthly Interest = Yearly Interest / 12;
    // Yearly Interest = (Loan Amount * interest Rate) / 100;
    // Principal Installment = Loan Amount / (Selected Tenure * 12);
    export default {
        name: 'LoanCalculator',
        data() {
            return {
                borrow: 0,
                tenure: 1,
                interest_rate: 5.99
            }
        }
    }
</script>
<style>
  input { padding:10px;}
</style>
