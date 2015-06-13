Meteor.methods({
  insertEmail: function(email){
       return Emails.insert({"email": email}); 
  }
});