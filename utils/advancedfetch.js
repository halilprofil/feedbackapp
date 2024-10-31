export async function AdvancedFetch(url, method = "GET", data = null, cacheControl = "no-store") {
    try {
        // Benzersiz bir parametre ekleyerek URL'yi güncelle
        const uniqueUrl = `${url}${url.includes('?') ? '&' : '?'}_=${Date.now()}`;
        
        const response = await fetch(uniqueUrl, {
            method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Cache-Control": cacheControl,
                "Pragma": "no-cache",
                "Expires": "0",
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
