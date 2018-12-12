import axios from "axios";

export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
 
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user/Register", userData);
  },
  login: function(userData) {
    return axios.post("/api/user/Login", userData);
  }
};
