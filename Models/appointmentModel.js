const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema({
    _id: {
        type: Number
    },
    clinic: {
        type: Number,
        ref: 'clinics',
        required: [true, 'the clinic reference is required']
    },
    doctor: {
        type: Number,
        ref: 'doctors',
        required: [true, 'the doctor reference is required']
    },
    patient: {
        type: Number,
        ref: "patients",
    },
    booked: {
        type: Boolean,
        required: true,
    },
    date: {
        type: String,
        match: [/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, 'Date must be like 30/03/2023'],
        required: [true, 'the date is required']
    },
    timeFrom: {
        type: String,
        match: [/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, 'timeFrom must be like 8:30 am'],
        required: [true, 'timeFrom is required']
    },
    timeTo: {
        type: String,
        match: [/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, 'timeTo must be like 8:30 am'],
        required: [true, 'timeTo is required']
    }
})

schema.plugin(AutoIncrement, {
    inc_field: '_id',
    start_seq: 1,
    id: 'Appointment_Id'
})

mongoose.model('appointments', schema);