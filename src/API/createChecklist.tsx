type Task = {
    createdAt: string;
    description: string;
    isComplete: boolean;
    id: string;
};

const createCheckList = async (task: Task) => {
    try {
        const response = await fetch(
            `https://605375c645e4b30017291be6.mockapi.io/tasks`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(task),
            }
        );

        console.log(`Response: ${response.status} ${response.statusText}`);

        if (response.ok) {
        const data: Task = await response.json();
        console.log(data);
        return data;
        } else {
        throw new Error("Cannot create a new task");
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
          
export default createCheckList;