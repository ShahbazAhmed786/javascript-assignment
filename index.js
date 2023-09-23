// Implement a function to find the most liked post and the user who posted it
function findMostLikedPost(profiles) {
    var mostLikedPost = null;
    var mostLikedUser = null;
    var maxLikes = 0;
    for (var _i = 0, profiles_1 = profiles; _i < profiles_1.length; _i++) {
        var profile = profiles_1[_i];
        for (var _a = 0, _b = profile.posts; _a < _b.length; _a++) {
            var post_1 = _b[_a];
            if (post_1.likes.length > maxLikes) {
                maxLikes = post_1.likes.length;
                mostLikedPost = post_1;
                mostLikedUser = profile;
            }
        }
    }
    return { post: mostLikedPost, user: mostLikedUser };
}
// Example usage:
var user1 = { id: 1, username: "user1" };
var user2 = { id: 2, username: "user2" };
var profile1 = {
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
var profile2 = {
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
var profiles = [profile1, profile2];
var _a = findMostLikedPost(profiles), post = _a.post, user = _a.user;
if (post && user) {
    console.log("Most Liked Post by ".concat(user.username, ": ").concat(post.content));
}
else {
    console.log("No posts found.");
}
