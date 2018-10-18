<template>
    <div class="container-fluid">
        <div v-if="thank">Thank you. We have received your application. </div>
    <form>
        <h3>APPLY NOW</h3>
    <div class="form-group" v-if="ok">
        <label for="customerName">Name</label>
        <p><input class="form-control" type="text" v-model="user.customerName" name="customerName" /></p>
        <label for="customerEmail">Email</label>
        <p><input class="form-control" type="text" v-model="user.customerEmail" name="customerEmail" /> </p>
        <label for="phoneNumber">Phone Number</label>
        <p><input class="form-control" type="text" name="phoneNumber" v-model="user.phoneNumber" /> </p>
        <label for="productName">Product Name</label>
        <p><input class="form-control" type="text" disabled name="productName" v-model="routerValue" /> </p>
        <p><button type="button" v-on:click="created" class="btn btn-primary">Apply Now</button></p>
    </div>
    </form>

    </div>
</template>

<script>
    import {APIService} from "../APIService";
    const apiService = new APIService();
    export default {
        name: "ApplyNow",
        props: ['productName'],
        data() {
            return {
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
            this.user.productName = this.routerValue;
            return apiService.saveLead(this.user).then((data) => {
                this.thank = true;
                this.ok = false;
            })
        }
    },

        mounted() {
            console.log(this.$route.params.productName);
            this.routerValue = this.$route.params.productName;
        },
    }
</script>
