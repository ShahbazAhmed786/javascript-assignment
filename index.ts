// Define an interface for User
interface User {
    id: number;
    username: string;
  }
  
  // Create a type for Like
  type Like = {
    user: User;
    timestamp: Date;
  };
  
  // Define an interface for Comment
  interface Comment {
    id: number;
    user: User;
    content: string;
    timestamp: Date;
  }
  
  // Define an interface for Post
  interface Post {
    id: number;
    content: string;
    likes: Like[];
    comments: Comment[];
    user: User;
  }
  
  // Define an interface for Profile
  interface Profile {
    id: number;
    username: string;
    bio: string;
    posts: Post[];
  }
  
  // Implement a function to find the most liked post and the user who posted it
  function findMostLikedPost(profiles: Profile[]): { post: Post | null; user: User | null } {
    let mostLikedPost: Post | null = null;
    let mostLikedUser: User | null = null;
    let maxLikes = 0;
  
    for (const profile of profiles) {
      for (const post of profile.posts) {
        if (post.likes.length > maxLikes) {
          maxLikes = post.likes.length;
          mostLikedPost = post;
          mostLikedUser = profile;
        }
      }
    }
  
    return { post: mostLikedPost, user: mostLikedUser };
  }
  
  // Example usage:
  const user1: User = { id: 1, username: "user1" };
  const user2: User = { id: 2, username: "user2" };
  
  const profile1: Profile = {
    id: 1,
    username: "user1",
    bio: "Bio for user1",
    posts: [
      {
        id: 1,
        content: "Post 1 by user1",
        likes: [{ user: user1, timestamp: new Date("2023-01-15") }],
        comments: [],
        user: user1,
      },
      {
        id: 2,
        content: "Post 2 by user1",
        likes: [
          { user: user1, timestamp: new Date("2023-01-16") },
          { user: user2, timestamp: new Date("2023-01-17") },
        ],
        comments: [],
        user: user1,
      },
    ],
  };
  
  const profile2: Profile = {
    id: 2,
    username: "user2",
    bio: "Bio for user2",
    posts: [
      {
        id: 3,
        content: "Post 1 by user2",
        likes: [{ user: user1, timestamp: new Date("2023-01-18") }],
        comments: [],
        user: user2,
      },
    ],
  };
  
  const profiles: Profile[] = [profile1, profile2];
  
  const { post, user } = findMostLikedPost(profiles);
  
  if (post && user) {
    console.log(`Most Liked Post by ${user.username}: ${post.content}`);
  } else {
    console.log("No posts found.");
  }
  