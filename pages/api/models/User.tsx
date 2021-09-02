import * as mongoose from "mongoose";

export interface UserDoc extends mongoose.Document {
  name: string;
  age: number;
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
});

const User = mongoose.model<UserDoc>("user", UserSchema);
export default User;
