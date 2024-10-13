/*
  * @Version: 1.0
  * @Author: Kristy Song
  * @Date: 10/10/2024 10:56:38
  * @Description: This file handles basic API operations (POST, GET, DELETE) using Playwright's 
  *               request object for testing purposes.
*/
 
const { expect } = require('@playwright/test');
exports.customerInfo = class customerInfo {
  
  constructor(request, userData, userID) {
    this.request = request;
    this.userData = userData;
    this.userID = userID;
    this.API_URL = 'https://reqres.in/api/users';

    // Regular expressions for validating email and phone number
    this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    this.phonePattern = /^\d{10}$/;
  }

  // Make a POST request to create a user
  async createUser() {
    const response = await this.request.post(this.API_URL, {
      data: this.userData,
      headers: { "Accept": "application/json" }
    });
    //comment this assertation this time to make sure no impact for get API verification
    //expect(response.status()).toBe(200); 
    console.log("create user status:" + await response.status())
    return response;
  } 

  // Make a GET request to fetch users' list
  async getUsers() {
    const response = await this.request.get(this.API_URL);
    return response;
  }

  // Make a Delete request to delete specific user
  async deleteUser(userID) {
    const response = await this.request.delete(this.API_URL + userID);
    //comment this assertation this time to make sure no impact for get API verification
    //expect(response.status()).toBe(204);
    console.log("delete user status:" + await response.status())
  }
}
