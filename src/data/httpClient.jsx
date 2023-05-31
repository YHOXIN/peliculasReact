const API ="https://api.themoviedb.org/3";

export function get(path) {
    return fetch (API + path,{
        headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2U4NWM0Mzk1YzI1ZWIzOTY3MTllYWZmMDUyY2ZlZCIsInN1YiI6IjY0NzUyNjZjZGQyNTg5MDEyMDA1Njc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEl0KBx-8g5gklZZekMibXjJ4u5W4zGN-ew3iLUnmVs",
        "Content-Type": "aplication/json;charset=utf-8",
         },
    }).then((result) => result.json());
}
