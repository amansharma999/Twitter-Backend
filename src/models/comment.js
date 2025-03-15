import mongoose from "mongoose";
const commentSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;