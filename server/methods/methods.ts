import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http'
import { User } from '../../both/models/user.model';
import { UserHTTP } from '../../both/models/userhttp.model';

Meteor.methods({
    loginUser: function (username:string, password:string) {
        check(username, String);
        check(password, String);
        let resulthandler: UserHTTP;
        let doc: User;

        try {
            let url = "***";
            
            let result = HTTP.call("POST", url,
                                {params: {
                                    username: username,
                                    password: password,
                                    action: 'login'
                                }});                                   
            if (result.data) {            
                
                resulthandler = result.data;                                

                doc = { 
                    username: username,
                    password: password                  
                };
                
                if (resulthandler.id) {                    
                        let user = Meteor.users.findOne({
                            "username": username
                        });                        
                        resulthandler.status = 'ok';                        
                        if (typeof user !== undefined && user != null) {
                            // @todo build in password change management
                            /*
                            if (user.passwordChange != undefined && user.passwordChange != null) {
                                Accounts.setPassword(user._id, user.passwordChange);
                                doc.passwordChange = null;
                            }
                            */                            

                            doc.profile = {
                                firstName: resulthandler.firstname,
                                lastName: resulthandler.lastname,
                                id: parseInt(resulthandler.id),
                                language: resulthandler.language,
                                password: password
                            };

                            Meteor.users.update(user._id, {
                                $set: doc
                            });

                        } else {
                            
                            doc = { 
                                username: username,
                                password: password
                            };

                            doc.profile = {
                                firstName: resulthandler.firstname,
                                lastName: resulthandler.lastname,
                                id: parseInt(resulthandler.id),
                                language: resulthandler.language,
                                password: password
                            };                                                        
                            Accounts.createUser(doc);
                        }
                } else {
                    resulthandler.status = "Authentication failed";
                }
                if (resulthandler.status != null) {
                    return resulthandler.status;
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
