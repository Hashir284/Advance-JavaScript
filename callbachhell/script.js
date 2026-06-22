function login(callback) {
    console.log("Login successful");

    setTimeout(() => {
        callback("user123");
    }, 1000);
}

function getProfile(userId, callback) {
    console.log("Fetching profile for", userId);

    setTimeout(() => {
        callback({ name: "Hashir", id: userId });
    }, 1000);
}

function getPosts(user, callback) {
    console.log("Getting posts for", user.name);

    setTimeout(() => {
        callback(["post1", "post2", "post3"]);
    }, 1000);
}

function getComments(post, callback) {
    console.log("Fetching comments for", post);

    setTimeout(() => {
        callback(["nice", "awesome"]);
    }, 1000);
}

login(function(userId) {
    getProfile(userId, function(user) {
        getPosts(user, function(posts) {
            getComments(posts[0], function(comments) {
                console.log("Final Comments:", comments);
            });
        });
    });
});

