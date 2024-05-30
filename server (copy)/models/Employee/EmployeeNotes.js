const EmployeeNotesSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    notes: {
        type: String
    },
    feedback: {
        type: String
    },
    grievances: {
        type: String
    },
    achievements: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeNotes', EmployeeNotesSchema);
