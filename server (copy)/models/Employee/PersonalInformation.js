const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Widowed']
    },
    nationality: {
        type: String
    },
    passportNumber: {
        type: String
    },
    passportExpiryDate: {
        type: Date
    },
    nationalId: {
        type: String
    },
    panNumber: {
        type: String
    },
    driversLicenseNumber: {
        type: String
    },
    driversLicenseExpiryDate: {
        type: Date
    },
}, { timestamps: true });

module.exports = mongoose.model('PersonalInformation', EmployeeSchema);
