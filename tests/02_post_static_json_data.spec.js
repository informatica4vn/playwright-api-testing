// @ts-check
const { test, expect } = require('@playwright/test');
// Test data
const bookingDetails = require('../test-data/booking-details.json');
//testcase 2
test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(`/booking`, {
        data: bookingDetails
    });
    // Log the response body
    console.log(await response.json());
    // Assertions for the response
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    // Verify the response body
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});