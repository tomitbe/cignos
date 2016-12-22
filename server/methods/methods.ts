import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    loginUser: function (username:string, password:string) {
        check(username, String);
        check(password, String);

        //throw new Meteor.Error('403', 'You must be logged-in to reply');
        

    }
});
