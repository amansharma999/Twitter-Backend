import CrudRepository from "./crud-repository.js";
import Tweet from "../models/tweet.js";
class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  // async get(id) {
  //   try {
  //     const tweet = await Tweet.findById(id);
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean(); //populate is used to get the comments of the tweet and lean is used to get the plain javascript object
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  // async update(id,data){
  //     try {
  //         const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});//new:true returns the updated document
  //         return tweet;
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

  // async destroy(id) {
  //   try {
  //     const tweet = await Tweet.findByIdAndRemove(id);
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit).lean(); //skip is used to skip the first n documents and limit is used to limit the number of documents returned.
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
