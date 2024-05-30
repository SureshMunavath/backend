const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter first name'],
        maxlength: [50, 'Max length is 50 characters'],
    },
    last_name: {
        type: String,
        required: [true, 'Please enter last name'],
        maxlength: [50, 'Max length is 50 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        maxlength: [100, 'Max length is 100 characters'],
    },
    phone_number: {
        type: String,
        required: [true, 'Please enter a contact number'],
        maxlength: [15, 'Max length is 15 characters'],
    },
    department: {
        type: String,
        required: [true, 'Please enter a department'],
        maxlength: [50, 'Max length is 50 characters'],
    },
    position: {
        type: String,
        required: [true, 'Please enter a position'],
        maxlength: [50, 'Max length is 50 characters'],
    },
    hire_date: {
        type: Date,
        required: [true, 'Please enter a hire date'],
    },
    status: {
        type: String,
        required: [true, 'Please enter employment status'],
        maxlength: [20, 'Max length is 20 characters'],
        enum: ['active', 'inactive'], 
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organisation',
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
