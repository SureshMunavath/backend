const AssetManagementSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    assignedAssets: [{
        assetName: {
            type: String,
            required: true
        },
        assetSerialNumber: {
            type: String,
            required: true
        },
        dateOfIssue: {
            type: Date,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        returnDate: {
            type: Date
        },
        remarks: {
            type: String
        },
    }]
  }, { timestamps: true });
  
  module.exports = mongoose.model('AssetManagement', AssetManagementSchema);
  