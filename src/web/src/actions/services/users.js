
// /api/v1/users
function getUserAuthToken(payload) {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      status: 200,
      resources: []
    }), 1000)
  }
}

// /api/v1/users?search=<name>
function getUsersSearch(payload) {

}

// /api/v1/users
function postUser(payload) {

}

// /api/v1/users/<username>
function deleteUser(payload) {

}
