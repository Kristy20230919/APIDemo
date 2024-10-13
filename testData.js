/*
  * @Version: 1.0
  * @Author: Kristy Song
  * @Date: 10/10/2024 10:56:40
  * @Description: This file is used to strore and manage test data
*/
module.exports = {
    users: [
         // normal user with correct email and phone number
        {  
            "id": "11",
            "name": "Kristy",
            "email": "abc@gmail.com",
            "phone_number": "1234567890"
        },
        // user with incorrect phone number
        {   
            "id": "12",
            "name": "John",
            "email": "john.doe@gmail.com",
            "phone_number": "987654321"
        },
        //user with incorrect email
        {   
            "id": "13",
            "name": "Kate",
            "email": "Kate.doegmail.com",
            "phone_number": "0987654321"
        }
    ]
};
