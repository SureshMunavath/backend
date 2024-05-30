const HealthAndSafetySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    bloodGroup: {
        type: String
    },
    allergies: {
        type: [String]
    },
    chronicDiseases: {
        type: [String]
    },
    emergencyInstructions: {
        type: String
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('HealthAndSafety', HealthAndSafetySchema);
  