const PerformanceAndTrainingSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    performanceReviewDate: {
        type: Date
    },
    performanceReviewRating: {
        type: String
    },
    trainingCompleted: {
        type: String
    },
    trainingDate: {
        type: Date
    },
    trainingProvider: {
        type: String
    },
    skillsAcquired: {
        type: [String]
    },
    professionalDevelopmentGoals: {
        type: [String]
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('PerformanceAndTraining', PerformanceAndTrainingSchema);
  