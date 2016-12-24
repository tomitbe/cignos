import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http'

Meteor.methods({
    loginUser: function (username:string, password:string) {
        check(username, String);
        check(password, String);

        //throw new Meteor.Error('403', 'You must be logged-in to reply');
        //this.unblock();
        try {
            let url = "https://euroclean.be/temconet/site/api/webuser/";
            
            var result = HTTP.call("POST", url,
                                {params: {
                                    username: username,
                                    password: password,
                                    action: 'login'
                                }});
                console.log(result);                
             
            if ((typeof result !== "undefined" && result !== null ? result.data : void 0) != null) {
                result = result.data;
                let doc = {};
                doc.email = email;
                doc.password = password;
                //console.log(result);

                if (result.id != null) {
                    if (result.id != null) {
                        user = Meteor.users.findOne({
                            "emails.0.address": email
                        });

                        result.status = 'ok';

                        if (typeof user !== undefined && user != null) {

                            if (user.passwordChange != undefined && user.passwordChange != null) {
                                Accounts.setPassword(user._id, user.passwordChange);
                                doc.passwordChange = null;
                            }

                            //Meteor.call("initCampaigns", user.profile.id);

                            doc.profile = {
                                firstName: result.firstname,
                                lastName: result.lastname,
                                id: parseInt(result.id),
                                language: result.language
                            };

                            Meteor.users.update(user._id, {
                                $set: doc
                            });

                        } else {
                            doc.username = email;

                            doc.profile = {
                                firstName: result.firstname,
                                lastName: result.lastname,
                                id: parseInt(result.id),
                                language: result.language
                            };

                            Accounts.createUser(doc);
                        }
                    }
                } else {
                    result.status = "Authentication failed";
                }
                if (result.status != null) {
                    return result.status;
                } else {
                    throw new Meteor.Error("Acces denied!");
                }
            } else {
                throw new Meteor.Error("Acces denied!");
            }

        



    } catch (e) {
        // Got a network error, time-out or HTTP error in the 400 or 500 range.
        throw new Meteor.Error('403', 'HTTP authentication failure');
        
    }
        

    }
});
