const getCheckList = async () => {
    try {
        const response = await fetch(
            `https://605375c645e4b30017291be6.mockapi.io/tasks`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                  },
                }
              );
              console.log(`Response: ${response.status} ${response.statusText}`);
              if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
              } else {
                throw new Error("Cannot fetch checklists data");
              }
            } catch (error) {
              console.error(error);
              return;
            }
          };
          
          export default getCheckList;