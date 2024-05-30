const FamilyDetailsSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    spouseName: {
        type: String
    },
    spouseDateOfBirth: {
        type: Date
    },
    childrenCount: {
        type: Number
    },
    childrenDetails: [{
        name: {
            type: String
        },
        dateOfBirth: {
            type: Date
        },
        gender: {
            type: String
        },
    }],
    dependents: {
        type: [String]
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('FamilyDetails', FamilyDetailsSchema);
  