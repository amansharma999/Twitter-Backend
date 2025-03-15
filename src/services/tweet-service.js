import { TweetRepository, HashtagRepository } from "../repository/index.js";
class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1))
      .map((tag) => tag.toLowerCase()); //extract hashtags from content and convert them to lowercase
    // console.log("Extracted Tags are :",tags);
    const tweet = await this.tweetRepository.create(data);

    let alreadyPresentTags = await this.hashtagRepository.findByName(tags); //find tags that already exist in the database
    let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag)); //find tags that do not exist in the database
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    }); //create an array of objects with the title of the tag and the id of the tweet
 await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
}

export default TweetService;
