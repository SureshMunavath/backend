const EmploymentDetailsSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    employmentType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Intern'],
        required: true
    },
    employmentStatus: {
        type: String,
        enum: ['Active', 'Inactive', 'On Leave', 'Terminated'],
        required: true
    },
    dateOfHire: {
        type: Date,
        required: true
    },
    dateOfTermination: {
        type: Date
    },
    reasonForTermination: {
        type: String
    },
    workLocation: {
        type: String,
        required: true
    },
    employeeBadgeNumber: {
        type: String
    },
    jobGrade: {
        type: String
    },
    jobDescription: {
        type: String
    },
    workPhoneNumber: {
        type: String
    },
    workEmailAddress: {
        type: String
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('EmploymentDetails', EmploymentDetailsSchema);
  