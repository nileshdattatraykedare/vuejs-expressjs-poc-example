<template>
  <div class="LoanCalculator">
    <h1>This is an Loan calculator page</h1>
    <form>
      <label>Borrow</label>
      <p><input type="text" v-model="borrow" id="borrow" name="borrow" /></p>
      <label>Tenure</label>
      <p><select v-model="tenure" name="tenure">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select></p>
      <label>Interest Rate</label>
      <p><input type="number" v-model="interest_rate" name="interest_rate" value="5.99" /> %</p>

    <div>Principal Installment: {{ borrow / (tenure * 12) }}</div>
      <div>Yearly Interest: {{(borrow * interest_rate) / 100}} </div>
      <div>Monthly Interest: {{((borrow * interest_rate) / 100) / 12}}</div>
      <div>Monthly Repayment: {{(((borrow * interest_rate) / 100) / 12) + (borrow / (tenure * 12))}}</div>
    </form>
  </div>

</template>

<style>
  input { padding:10px;}
  </style>
