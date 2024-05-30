const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    check_in_time: {
        type: Date,
        required: true
    },
    check_out_time:{
        type: Date,
        required: true
    },
    check_in_ip:{
        type: String,
        maxlength: 45
    },
    check_out_ip: {
        type: String,
         maxlength: 45
    },
    check_in_latitude: {
        type: mongoose.Schema.Types.Decimal128, 
        required: true
    },
    check_in_longitude: {
        type: mongoose.Schema.Types.Decimal128, 
        required: true
    },
    check_out_latitude: {
        type: mongoose.Schema.Types.Decimal128,
         required: true
    },
    check_out_longitude: {
        type: mongoose.Schema.Types.Decimal128,
         required: true
    },
    check_in_verified: {
        type: Boolean, 
        default: false
    },
    check_out_verified: {
        type: Boolean, 
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
