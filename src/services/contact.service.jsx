// contactApi.ts

export const sendContactForm = async (formData) => {
  const apiUrl = 'https://gitagroup.ca/server/api/email';
  const apiKey = 'D524A52C-14DE-491A-B172-FFB3AEC1940E'; // Replace with your actual x-api-key

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You can handle the response here if needed
    const responseData = await response.json();
    console.log('Response:', responseData);
  } catch (error) {
    console.error('Error:', error.message);
    // Handle error as needed
  }
};
