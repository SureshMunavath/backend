const mongoose = require('mongoose');

const AttendanceExceptionSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Employee',
        required: true
    },
    attendanceId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Attendance',
        required: true
    },
    exception_type: {
        type: String, required: true,
        maxlength: 50
    },
    exception_date: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        maxlength: 255
    }
}, { timestamps: true });

module.exports = mongoose.model('AttendanceException', AttendanceExceptionSchema);
