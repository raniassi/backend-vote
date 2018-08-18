const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
 
const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    noKtp: {
        type: String,
        required: true,
        unique: true,
    },
    noKk: {
        type: String,
        required: true,
    },  
   
    role: {
        type: String,
        required: true,
        default: 1
    }, 
    idKtp: {
        type: Schema.Types.ObjectId,
        type: String,
        ref: 'ktp',
        required: true
    },  
    isVotedIdCandidate: {
        type: Schema.Types.ObjectId,
        ref: 'presiden',
        default: null
    },    
    provinceId: {
        type: Schema.Types.ObjectId,
        ref: 'province',
        required: true,
    },    
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    isVoted: {
        type: Boolean,
        required: true,
        default: false,
    },
    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    deletedAt: {
        type: Date,
        default: null,
    }
});

UserSchema.set('toObject', {
    virtuals: true
});
UserSchema.set('toJSON', {
    virtuals: true
});

UserSchema.pre("save", function (next) {
    var user = this;
    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('user', UserSchema);

module.exports = User;