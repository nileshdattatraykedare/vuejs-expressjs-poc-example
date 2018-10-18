<template>
    <div class="container-fluid">
        <div v-if="thank">Thank you. We have received your application. </div>
    <form>
        <h3>APPLY NOW</h3>
    <div class="form-group" v-if="ok">
        <p v-if="isValidEmail" class="alert alert-danger">Please enter valid email address</p>
        <p v-if="isValidName" class="alert alert-danger">Name cannot be incomplete</p>
        <p v-if="isValidPhone" class="alert alert-danger">Phone cannot be incomplete or string</p>
        <label for="customerName">Name</label>
        <p><input class="form-control" type="text" v-model="user.customerName" placeholder="John Doe" name="customerName" /></p>
        <label for="customerEmail">Email</label>
        <p><input class="form-control" type="text" v-model="user.customerEmail" placeholder="johndoe@example.com" name="customerEmail" /> </p>

        <label for="phoneNumber">Phone Number</label>
        <p><input class="form-control" type="text" name="phoneNumber" placeholder="For example: 7710004852" v-model="user.phoneNumber" /> </p>
        <label for="productName">Product Name</label>
        <p><input class="form-control" type="text" disabled name="productName" v-model="routerValue" /> </p>
        <p><button type="button" v-on:click="created" class="btn btn-primary">Apply Now</button></p>
    </div>
    </form>

    </div>
</template>

<script>
    import validator from 'validator';

    import {APIService} from "../APIService";
    const apiService = new APIService();
    export default {
        name: "ApplyNow",
        props: ['productName'],
        data() {
            return {
                isValidEmail:false,
                isValidName: false,
                isValidPhone: false,
                ok: true,
                thank:false,
                routerValue:'',
                clickedProductName:'',
                user: {
                    customerName: '',
                    customerEmail: '',
                    phoneNumber: '',
                    productName: ''
                }
            }
        },
        methods: {
        created() {
            this.isValidEmail = false,this.isValidName=false,this.isValidPhone=false;
            this.user.productName = this.routerValue;

             if(!validator.isLength(this.user.customerName,{min:3, max:30})){
                this.isValidName = true;
            }
            else if(!validator.isEmail(this.user.customerEmail)) {
                this.isValidEmail = true;
            }
            else if(!validator.isLength(this.user.phoneNumber,{min:10, max:12}) && !validator.isNumeric(this.user.phoneNumber)){
                this.isValidPhone = true;
            }else {
                return apiService.saveLead(this.user).then((data) => {
                    this.thank = true;
                    this.ok = false;
                })
            }

        }
    },

        mounted() {
            console.log(this.$route.params.productName);
            this.routerValue = this.$route.params.productName;
        },
    }
</script>
