function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three dictionaries representing different albums
var album1 = make_album('Artist 1', 'Album 1', 10);
var album2 = make_album('Artist 2', 'Album 2');
var album3 = make_album('Artist 3', 'Album 3', 15);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
