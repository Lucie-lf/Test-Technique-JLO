const deleteCheckList = async (id: string) => {
    try {
        const response = await fetch(
            `https://605375c645e4b30017291be6.mockapi.io/tasks/${id}`,
            {
                method: "DELETE",
            });
        
        if (response.ok) {
            return true;
        } 
        
        else {
            throw new Error("Cannot delete checklist");
        }
    } 
    catch (error) {
        console.error(error);
        return false;
    }
};
    
export default deleteCheckList;