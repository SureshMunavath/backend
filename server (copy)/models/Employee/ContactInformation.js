const ContactInformationSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    primaryEmailAddress: {
        type: String,
        required: true
    },
    secondaryEmailAddress: {
        type: String
    },
    primaryPhoneNumber: {
        type: String,
        required: true
    },
    secondaryPhoneNumber: {
        type: String
    },
    homeAddressLine1: {
        type: String,
        required: true
    },
    homeAddressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    stateOrProvince: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    emergencyContactName: {
        type: String,
        required: true
    },
    emergencyContactRelationship: {
        type: String,
        required: true
    },
    emergencyContactPhoneNumber: {
        type: String,
        required: true
    },
    emergencyContactAddress: {
        type: String,
        required: true
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('ContactInformation', ContactInformationSchema);
  