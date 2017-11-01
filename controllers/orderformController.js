let mongoose = require('mongoose');
let db = require('../db/db');


let orderFormSchema = new mongoose.Schema({
    adStatus: String,
    adName: String, adType: String,
    adBeginDate: Date, adEndDate: Date,
    spreadType: String, spreadAmount: Number,
    draweeName: String, paymentMethod: String,
    receivePosition: String, spreadPosition: String,
    dealerWechat: String, dealerPhone: String,
    remark: String,
    create_time: Date
});