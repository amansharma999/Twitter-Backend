import mongoose from "mongoose";
const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    //a hashtag can have many tweets and a tweet can have many hashtags
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

// hashtagSchema.pre("save", function (next) {
// this.title = this.title.toLowerCase();
//   next();
// });

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;