const mongoose = require('mongoose');

const LeaveManagementSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Employee',
    required: true
  },
  organisationId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Organisation',
    required: true
  },
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["approved", "pending", "rejected"],
    default: "pending"
  },
  reason: {
    type: String,
    required: true,
    maxlength: 255, 
  },
  typeOfLeave: {
    type: String,
    enum: ["paid", "sick", "earned", "other"],
    required: true
  },
  checkInIp: {
    type: String,
    required: true
  },
  checkOutIp: {
    type: String,
    required: true
  },
  checkInLatitude: {
    type: Number,
    required: true
  },
  checkInLongitude: {
    type: Number,
    required: true
  },
  checkOutLatitude: {
    type: Number,
    required: true
  },
  checkOutLongitude: {
    type: Number,
    required: true
  }
}, { timestamps: true });


LeaveManagementSchema.virtual('noOfDays').get(function() {
  if (this.fromDate && this.toDate) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const diffDays = Math.round(Math.abs((this.toDate - this.fromDate) / oneDay)) + 1; 
    return diffDays;
  }
  return 0;
});


LeaveManagementSchema.set('toJSON', { virtuals: true });
LeaveManagementSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('LeaveManagement', LeaveManagementSchema);
