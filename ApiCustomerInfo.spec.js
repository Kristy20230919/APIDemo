/*
  * @Version: 1.0
  * @Author: Kristy Song
  * @Date: 10/10/2024 10:56:50
  * @Description: This file is used to define test logic
*/

import { customerInfo } from '../.vscode/api/customerInfo';
import { users } from '../.vscode/data/testData';
const { test, expect } = require('@playwright/test');
const createdUsers = [];

test('API_GetUser Test', async ({ request }) => {

    // Step 1: Loop through each user in testData.js to create test users
    for (const userData of users) {
        const user = new customerInfo(request, userData); 
        // Create the user
        await user.createUser();
        // Keep track of the user IDs for deletion later
        createdUsers.push(userData.id); 
    }

    // Step 2: Call method to get a list of users 
    const returnUser = new customerInfo(request); 
    const response = await returnUser.getUsers();
    const customers = (await response.json()).data;

    // Step 2-1: Verify that the API returns a valid response (status code 200)
    expect.soft(response.status()).toBe(200);

    // Step 2-2: Parse the JSON response and verify each customer object
    for (const customer of customers) {
        // Ensure 'email' field exists and has a valid format
        expect.soft(customer.email).not.toBeNull();
        expect.soft(returnUser.emailPattern.test(customer.email)).toBe(true, `Invalid email address: ${customer.email}`);

        // Ensure 'phone_number' field exists and is 10 digits long
        expect.soft(customer.phone_number).not.toBeNull();
        expect.soft(returnUser.phonePattern.test(customer.phone_number)).toBe(true, `Invalid phone number: ${customer.phone_number}`);
    }

    // Step 3: Loop through the createdUsers array and delete each user to ensure the test data is cleaned up
    for (const userId of createdUsers) {
        await returnUser.deleteUser(userId);
    }
});