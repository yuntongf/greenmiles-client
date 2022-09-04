import http from "./HttpService";
//const apiEndpoint = "http://localhost:3000";

export async function register(user) {
   const res = await http.post("/Register", user);
   localStorage.setItem("token", res.headers['x-token']);
   return;
}

export async function updateUser(user) {
   const res = await http.put("/UpdateUser", user);
   return;
}

export async function updateMessage(data) {
   const res = await http.put("/UpdateMessage", data);
   return;
}