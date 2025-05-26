const updateCheckLists = async (
    id: string, 
    updatedFields: Partial<{
        description: string; 
        createdAt: string
        isComplete: boolean
    }>
) => {
    try {
        const response = await fetch(
            `https://605375c645e4b30017291be6.mockapi.io/tasks/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description: updatedFields.description,
                    createdAt: new Date().toISOString(),
                    isComplete: updatedFields.isComplete,
                }),

            }
        );
        console.log(`Response: ${response.status} ${response.statusText}`);
        
        if (response.ok) {
            const data = await response.json();
            return data;
        } 
        
        else {
            throw new Error(`Cannot modify task ${response.status}`);
        }
    } 
    catch (error) {
        console.error(error);
        return null;
    }
};
    
export default updateCheckLists;