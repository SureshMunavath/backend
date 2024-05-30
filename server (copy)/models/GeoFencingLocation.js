const mongoose = require('mongoose');

const GeoFencingLocationSchema = new mongoose.Schema({
    location_name: {
        type: String,
        required: true,
        maxlength: 100
    },
    latitude: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    radius: {
        type: Number, required: true
    } 
}, { timestamps: true });

module.exports = mongoose.model('GeoFencingLocation', GeoFencingLocationSchema);
