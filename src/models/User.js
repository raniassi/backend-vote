const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
<<<<<<< HEAD
const uniqueValidator = require('mongoose-unique-validator');
 
=======

>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    noKtp: {
<<<<<<< HEAD
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
=======
        type: String
    },
    noKk: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349
    password: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    confirmpassword: {
        type: String,
        required: true,
    },
    isVoted: {
        type: Boolean,
        required: true,
        default: false,
=======
    token: {
        type: String,
        required: false,
    },
    confirmpassword: {
        type: String,
        required: true,
>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349
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
<<<<<<< HEAD
        default: null,
    }
});

UserSchema.set('toObject', {
    virtuals: true
});
UserSchema.set('toJSON', {
    virtuals: true
});

=======
        default: null
    }
});

>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349
UserSchema.pre("save", function (next) {
    var user = this;
    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
<<<<<<< HEAD
=======

>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
<<<<<<< HEAD
});

UserSchema.plugin(uniqueValidator);
=======


});
>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349

const User = mongoose.model('user', UserSchema);

module.exports = User;