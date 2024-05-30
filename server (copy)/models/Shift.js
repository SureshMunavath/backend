const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema({
    shift_name: {
        type: String, required: true, unique: true, maxlength: 50
    },
    start_time: {
        type: String, required: true
    },
    end_time: {
        type: String, required: true
    },
    break_duration: {
        type: Number, required: true
    } 
}, { timestamps: true });

module.exports = mongoose.model('Shift', ShiftSchema);
