const EmploymentHistorySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    previousEmployerName: {
        type: String,
        required: true
    },
    previousJobTitle: {
        type: String,
        required: true
    },
    previousJobStartDate: {
        type: Date,
        required: true
    },
    previousJobEndDate: {
        type: Date,
        required: true
    },
    previousJobResponsibilities: {
        type: String,
        required: true
    },
    reasonForLeaving: {
        type: String,
        required: true
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('EmploymentHistory', EmploymentHistorySchema);
  