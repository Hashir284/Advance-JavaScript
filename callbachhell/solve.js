function login() {
    return new Promise((resolve) => {
        console.log("Login successful");
        setTimeout(() => {
            resolve("user123");
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise((resolve) => {
        console.log("Fetching profile for", userId);
        setTimeout(() => {
            resolve({ name: "Hashir", id: userId });
        }, 1000);
    });
}

function getPosts(user) {
    return new Promise((resolve) => {
        console.log("Getting posts for", user.name);
        setTimeout(() => {
            resolve(["post1", "post2", "post3"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        console.log("Fetching comments for", post);
        setTimeout(() => {
            resolve(["nice", "awesome"]);
        }, 1000);
    });
}

login()
    .then((userId) => {
        return getProfile(userId);
    })
    .then((user) => {
        return getPosts(user);
    })
    .then((posts) => {
        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("Final Comments:", comments);
    })
    .catch((err) => {
        console.log("Error:", err);
    });