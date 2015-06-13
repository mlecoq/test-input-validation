Meteor.publish('emails', function() {
  return Emails.find();
});

Emails.allow({
    'insert': function (userId,doc) {
      return true; 
    }
});