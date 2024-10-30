export async function AdvancedFetch(url, method = "GET", data = null) {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      });
      console.log(response);
  
      if (!response.ok) {
        return { response: null, status: response.status, error: response.statusText };
      }
  
      const responseData = await response.json();
      return { response: responseData, status: response.status, error: null };
    } catch (error) {
      console.log(error);
      return { response: null, status: 500, error: error.message };
    }
  }