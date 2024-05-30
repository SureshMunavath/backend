const mongoose = require('mongoose');

const IPFencingSchema = new mongoose.Schema({
    start_ip: {
        type: String, required: true,
        maxlength: 45
    },
    end_ip: {
        type: String, required: true,
        maxlength: 45
    },
    description: {
        type: String,
        maxlength: 100
    }
}, { timestamps: true });

module.exports = mongoose.model('IPFencing', IPFencingSchema);
