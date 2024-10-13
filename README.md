# APIDemo
**Test Scenario**: 
I'm given an API that returns a list of customer objects in JSON format. 
Each customer object contains the following fields: 
● id (integer) 
● name (string) 
● email (string) 
● phone_number (string) 
Write an automated test script that: 
1. Verifies that the API returns a valid response (status code 200).
2. Ensures that each customer object has a valid email address format.
3. Verifies that the phone number is in the correct format (e.g., 10 digits).
**Tool selection**: 
Since I already have Playwright set up on my personal laptop, I used Playwright with JavaScript for this automation test. While Playwright may not be the ideal tool for long-term API testing, it was the most convenient option for completing this demo and demonstrating my approach to API automation.
**Design Pattern**:
![image](https://github.com/user-attachments/assets/df8ac948-ddc7-43cd-8088-2864a0ca5979)
**Benefit of Design Pattern**:
- **Separation of Concerns**: The API service class is responsible for the actual API calls while the test class is responsible for writing assertions based on the API responses, and the separate test data file is used to store and manage test data allowing that reuse and modification of test data without altering the core test logic.
- **Reusability**: The API service class can be used across multiple test cases, allowing to reuse API calls without duplicating code.
- **Scalability**: If the number of API endpoints and tests grows, it’s easy to add more methods to the service class and corresponding tests without increasing complexity. - Maintainability: If the API endpoint changes, we only need to update the service class. The test class remains unaffected.

