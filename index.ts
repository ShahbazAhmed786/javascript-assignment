// Define an interface for Author
interface Author {
    id: number;
    name: string;
    bio: string;
  }
  
  // Create a type for Comment
  type Comment = {
    author: Author;
    content: string;
    timestamp: Date;
  };
  
  // Define an interface for Post
  interface Post {
    id: number;
    title: string;
    content: string;
    author: Author;
    comments: Comment[];
  }
  
  // Implement a function to sort posts based on the number of comments
  function sortPostsByComments(posts: Post[]): Post[] {
    return posts.slice().sort((postA, postB) => postB.comments.length - postA.comments.length);
  }
  
  // Example usage:
  const author1: Author = {
    id: 1,
    name: "John Doe",
    bio: "A passionate writer.",
  };
  
  const author2: Author = {
    id: 2,
    name: "Jane Smith",
    bio: "An avid reader and blogger.",
  };
  
  const post1: Post = {
    id: 1,
    title: "Post 1",
    content: "This is the content of Post 1.",
    author: author1,
    comments: [
      {
        author: author2,
        content: "Great post!",
        timestamp: new Date("2023-01-15"),
      },
      {
        author: author1,
        content: "Thank you!",
        timestamp: new Date("2023-01-16"),
      },
    ],
  };
  
  const post2: Post = {
    id: 2,
    title: "Post 2",
    content: "This is the content of Post 2.",
    author: author2,
    comments: [
      {
        author: author1,
        content: "Interesting read.",
        timestamp: new Date("2023-01-17"),
      },
    ],
  };
  
  const posts: Post[] = [post1, post2];
  
  // Sort posts by the number of comments
  const sortedPosts = sortPostsByComments(posts);
  
  console.log("Sorted Posts by Number of Comments:");
  sortedPosts.forEach((post) => {
    console.log(`Title: ${post.title}, Comments: ${post.comments.length}`);
  });
  