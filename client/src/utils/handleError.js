export function handleError(error) {
    console.error("An error occurred:", error);
  
    if (error.response) {

      const { status, data } = error.response;
      console.error(`Status: ${status}`);
      console.error("Response data:", data.message);

    } else if (error.request) {
      console.error("No response received from the server.");
    } else {
      console.error("An error occurred:", error.message);

    }
  }