const { Schema, model, SchemaTypeOptions } = require("mongoose");

// a new Schema for the user models in the database //
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// virtual that retrieves the length of the user's friends array field //
userSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});


const User = model("user", userSchema);
module.exports = User;
