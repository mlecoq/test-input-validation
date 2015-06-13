Meteor.subscribe("emails");

Template.index.events({
	 "submit form" : function(event, template){

	 event.preventDefault()

     var email = template.find("#email").value;

     Meteor.call("insertEmail", email, function(error, result) {
       if(error){
         console.log(error.reason);
       }  
       return false;
    });
   	
	}	

});