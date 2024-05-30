const EmployeeDocumentsSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    documents: [{
        documentType: {
            type: String,
            required: true
        },
        documentUrl: {
            type: String,
            required: true
        },
    }],
  }, { timestamps: true });
  
  module.exports = mongoose.model('EmployeeDocuments', EmployeeDocumentsSchema);
  