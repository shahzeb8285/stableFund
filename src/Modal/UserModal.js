
const UserSchema = {
    name: "User",
    properties: {
      email:"string?",
      name: "string?",
      status: "boolean?",
      avatar:"string?",
      wallet:"string?",
      pin:"string?"
    },
    primaryKey: "email",
  };


  export default UserSchema

