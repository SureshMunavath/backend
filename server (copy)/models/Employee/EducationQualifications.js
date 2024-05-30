const EducationAndQualificationsSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    highestDegree: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    universityOrInstitution: {
        type: String,
        required: true
    },
    yearOfGraduation: {
        type: Number,
        required: true
    },
    additionalCertifications: {
        type: [String]
    },
    languagesSpoken: {
        type: [String]
    },
    skills: {
        type: [String]
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('EducationAndQualifications', EducationAndQualificationsSchema);
  