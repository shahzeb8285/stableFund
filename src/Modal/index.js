
import Realm from "realm";

import UserSchema from "./UserModal";

return  await Realm.open({
    path: "atomindRealm",
    schema: [UserSchema],
  });