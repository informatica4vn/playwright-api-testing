// @ts-check
const { test, expect } = require('@playwright/test');

// Define a test case 
test('should be able to create a booking', async ({ request }) => {
    // Send a POST request to the /booking endpoint
    const response  = await request.post(`/booking`, {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    // Log the response body
    console.log(await response.json());
    // Assertions for the response
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    // Verify the response body
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});