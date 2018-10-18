<template>
    <div class="personal-loan">


        <div class="row table__product.table__product--promo" v-for="plList in plLists">
            <div class="col-promo"></div>
            <div class="column"><img :src="base_imoney_url+plList.bankLogo" class="logo_pl"></div>
            <div class="column"><p><a :href="base_imoney_url+'/'+plList.product_path">{{plList.title}}</a></p>
                <p>{{plList.field_product_highlight}}</p>
            </div>
            <div class="column"><p class="col-rate--title col-rate--title-small">Interest Rate </p>
                <p class="col-rate--item">{{plList.minIrate}}%</p></div>
            <div class="column"><p>Monthly Repayment</p>
                <p>{{plList.minimum_financing_amount}}</p>
                <p>36 Months</p>
            </div>
            <div style="margin-bottom:5%;margin-top:5%;" class="  table__product--promo col-xs-18p">
                <div><router-link  :to="{ name: 'apply-now', params: { productName: plList.productName }}"><a href="#" class="btn btn-success btn-apply">Apply Now</a></router-link></div>
            </div>
        </div>

    </div>
</template>

<script>
    import {APIService} from "../APIService";

    const apiService = new APIService();
    export default {
        name: 'PersonalLoan',
        data() {

            return {
                base_imoney_url: 'https://www.imoney.my',
                plLists: [],
                numberOfPl: 0,

            };

        },

        methods: {

            getPersonalLoan() {
                apiService.getPersonalLoan().then((data) => {
                    console.log(data)
                    this.plLists = data;
                });
            },
        },

        mounted() {
            this.getPersonalLoan();
        },
    }
</script>

<style>
    body{
        max-width: 75%;
        margin: auto;
    }
    @media screen and (max-width: 600px) {
        .column {
            width: 100%;
        }
    }
    .logo_pl{
        padding-top: 20px;
        width:90px;
        height:auto;
        border: 0px;
    }
    .column {
        float: left;
        width: 15%;
        height: 200px;
        border-bottom: 1px solid cadetblue;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .col-promo {
        background: #CB9624;
        padding: 10px 15px;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); }
    .col-promo i {
        display: inline-block;
        margin-right: 10px;
        background: url(https://www.imoney.my/v4/img/sprites/icon-sprites-listing.png) no-repeat;
        background-size: auto 28px;
        background-position: -74px 0;
        width: 24px;
        height: 24px;
        vertical-align: middle; }
    .col-rate--title {
        color: #687179;
        display: block;
        white-space: nowrap;
        padding-bottom: 5px; }
    .col-rate--title-small {
        font-size: 12px; }

    .col-rate--item {
        font-size: 21px;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif;
        line-height: 1.1; }

    .table__product {
        border-bottom: 1px solid #d5dde5; }
    .table__product:first-child {
        border-radius: 3px 3px 0 0; }
    .table__product:first-child .col-promo {
        border-radius: 3px 3px 0 0; }
    .table__product .table-columns > * {
        vertical-align: top; }
    .table__product.table__product--promo {
        background-color: #fbf4dd;
        border-bottom-color: #e8d39c; }
    .table__product.table__product--promo .btn {
        background-color: #f5cd45;
        color: #68530b;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif; }
    .table__product.table__product--promo .btn.btn-qab:before {
        content: "";
        display: inline-block;
        background: url(https://www.imoney.my/v4/img/sprites/icon-sprites-listing.png) no-repeat;
        background-size: auto 28px;
        background-position: -70px 0;
        width: 10px;
        height: 16px;
        background-size: auto 20px;
        margin-right: 6px;
        vertical-align: middle; }
    .col-apply .btn-apply {
        display: block;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif; }
    .col-apply .btn-apply.btn-qab:before {
        content: "";
        display: inline-block;
        background: url(https://www.imoney.my/v4/img/sprites/icon-sprites-listing.png) no-repeat;
        background-size: auto 28px;
        background-position: -80px 0;
        width: 10px;
        height: 16px;
        background-size: auto 20px;
        margin-right: 6px;
        vertical-align: middle; }
    .table__product.table__product--promo .btn {
        background-color: #f5cd45;
        color: #68530b;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif; }
    .col-xs-18p {
        width: 18%; }
    .btn {
        box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2);
        border: none;
        padding-bottom: 8px;
        -webkit-transition: background-color 0.1s linear, color 0.1s linear;
        -o-transition: background-color 0.1s linear, color 0.1s linear;
        transition: background-color 0.1s linear, color 0.1s linear; }
    .btn-lg {
        padding: 12px 25px 13px;
        font-size: 16px;
        font-size: 1.6rem; }
    .btn-complement {
        color: #fff;
        background-color: #ef6700; }
    .btn-complement:hover, .btn-complement:focus, .btn-complement:active {
        color: #fff;
        background-color: #ef4400; }
    .btn-complement--gradient {
        background: -webkit-linear-gradient(-180deg, #ef6700 0%, #ef4400 78%);
        background: linear-gradient(-180deg, #ef6700 0%, #ef4400 78%);
        -webkit-transition: none;
        -o-transition: none;
        transition: none; }
    .btn-complement--gradient:hover, .btn-complement--gradient:focus, .btn-complement--gradient:active {
        background: #ef4400; }
    .btn-green {
        background-color: #0EAC6F;
        color: #ffffff; }
    .btn-green:hover, .btn-green:focus, .btn-green:active {
        color: #fff;
        background-color: #11BA79; }
    .btn-orange {
        background-color: #EA7C3E;
        color: #ffffff; }
    .btn-orange:hover, .btn-orange:focus, .btn-orange:active {
        color: #fff;
        background-color: #F68545; }
    .btn-blue {
        background-color: #358BD3;
        color: #ffffff; }
    .btn-blue:hover, .btn-blue:focus, .btn-blue:active {
        color: #fff;
        background-color: #3E99E4; }
    .btn-apply-complement {
        font-size: 16px;
        font-size: 1.6rem;
        box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2);
        background-color: #44b74d;
        background-image: -webkit-linear-gradient(top, #44b74d, #36923d);
        background-image: linear-gradient(to bottom,#44b74d, #36923d);
        -webkit-transition: 0.2s ease all;
        -o-transition: 0.2s ease all;
        transition: 0.2s ease all;
        display: inline-block;
        width: 100%;
        font-family: "open_sanssemibold", "Helvetica Neue", Arial, sans-serif;
        color: #ffffff; }
    .btn-apply-complement:hover, .btn-apply-complement:focus {
        background: #44b74d;
        color: #ffffff; }
    .btn-apply-complement[disabled] {
        box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2); }
    .btn-round {
        border-radius: 30px;
        padding-left: 20px;
        padding-right: 20px; }
    .btn-info {
        background-color: #1e7ea9; }
    .btn-outline {
        box-shadow: none;
        padding-bottom: 6px; }
    .btn-outline--white {
        border: 1px solid #fff; }
    .btn-outline--white:hover {
        color: #1e7ea9;
        background: #fff; }
    .btn-outline--dark {
        border: 1px solid #193d5a; }
    .btn-outline--dark:hover {
        background: #2a6696;
        color: #fff; }
    </style>