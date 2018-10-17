<template>
  <div class="LoanCalculator">
    <h1>This is an Loan calculator page</h1>
    <form>
      <label>Borrow</label>
      <p><input type="text" v-model="borrow" /> <span>{{borrow}}</span></p>
      <label>Tenure</label>
      <p><select v-model="tenure">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> <span>{{tenure}}</span></p>
      <label>Interest Rate</label>
      <p><input type="number" v-model="interest_rate" value="5.99" /> <span>{{interest_rate}} %</span></p>

    
    </form>
    <p>Principal Installment: {{ borrow / (tenure * 12) }}</p>
      <p>Yearly Interest: {{(borrow * interest_rate) / 100}} </p>
      <p>Monthly Interest: {{((borrow * interest_rate) / 100) / 12}}</p>
      <p>Monthly Repayment: {{(((borrow * interest_rate) / 100) / 12) + (borrow / (tenure * 12))}}</p>
  </div>

</template>
<script>
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
