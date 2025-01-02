import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,  
  },
  password: {
    type: String,
    required: [true, "Mật khẩu là bắt buộc"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"]
  }
},{
  timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
