var Schemas = {};

Schemas.Emails = new SimpleSchema({
  email: {
    type: String,
    unique: true,
    regEx: SimpleSchema.RegEx.Email
  }
});

Emails.attachSchema(Schemas.Emails);