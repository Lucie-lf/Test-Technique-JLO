const updateCheckLists = async () => {
    try {
        const response = await fetch(
            `https://605375c645e4b30017291be6.mockapi.io/tasks`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description: "Updated task description",
                    createdAt: new Date().toISOString(),
                }),

            }
        );
        console.log(`Response: ${response.status} ${response.statusText}`);
        
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
        } 
        
        else {
        throw new Error(`Status: ${response.status}`);
        }
    } 
    catch (error) {
        console.error(error);
        return;
    }
};
    
export default updateCheckLists;