import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeMenu from "../components/theme/ThemeMenu.tsx";
import { Toaster } from "../components/notifs/sonner";
import { toast } from "sonner"
import { getChecklist, updateChecklist, deleteChecklist } from "../API/crudChecklist.ts";
import type { Task } from "../types/Task.ts";

type DoneProps = {
  isDeployed: boolean;
  };

export default function Done({isDeployed}: DoneProps) {
  const location = useLocation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTaskDescription, setEditingTaskDescription] = useState<string>("");
  
  const handleUpdateChecklist = async (id: string, newDescription: string) => {
    const updatedTask = await updateChecklist(id, {
      description: newDescription, 
      createdAt: new Date().toISOString()
    });
    if (updatedTask) {
        setTasks((prev) =>
            prev.map((task) => 
                task.id === id ? {...task, description: updatedTask.description} : task
         )
      );
      toast.success("Task modified successfully!");
    }
};

 const handleDeleteCompletedChecklist = async () => {
   const completedChecklist = tasks.filter(task => task.isComplete);

  console.log("Tâches à supprimer:", completedChecklist.map(t=> t.description));

   const results = await Promise.allSettled(
    completedChecklist.map(task => deleteChecklist(task.id))
   )

  console.log("Tâches supprimées :", results);

   const successfulDeletes = completedChecklist.filter((_, i) => results[i].status === "fulfilled");

   setTasks(prev => 
    prev.filter(task => 
      !successfulDeletes.some(deleted => deleted.id === task.id)));

    toast.success("Completed tasks deleted successfully!");
 };

useEffect(() => {
  const fetchTasks = async () => {
    const allTasks = await getChecklist();
    setTasks(allTasks);
  }

  fetchTasks();
}
, [location.pathname]);

const doneTasks = tasks.filter(task => task.isComplete);

return (
      <div className="flex flex-row w-80 md:w-150 lg:w-200 mx-auto items-start">
            <ThemeMenu 
            isDeployed={isDeployed} 
            />
      <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col p-3 mt-5 lg:p-10 lg:mt-5 md:p-10 md:mt-8 rounded-[40px] gap-1 border-accent border-2 bg-secondary">
              {doneTasks.length === 0 && <div className="text-center text-text">nothing yet!!</div>}
              {doneTasks.map((task) => (
                <div 
                key={task.id}
                className="group flex flex-row items-center  px-10 text-sm md:text-md lg:text-lg hover:bg-text/20 hover:text-accent hover:font-bold p-3 rounded-2xl text-text hover:no-underline line-through">

                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={async() => {
                      const updatedTask = await updateChecklist(task.id, {
                          isComplete: !task.isComplete,
                      });
                      if (updatedTask) {
                        setTasks(prev => 
                            prev.map(t => 
                                t.id === task.id ? {...t, isComplete: updatedTask.isComplete} : t
                        ));
                        toast.success(`Task ${updatedTask.isComplete ? "completed" : "reopened"} successfully!`);
                      }
                    }}
                    className="mr-10 h-5 w-5 border-1 rounded hover:accent-secondary accent-accent border-tertiary"
                    aria-label="Mark as undone"
                  />

                  <div className="flex flex-row justify-between items-center w-full">
                            {editingTaskId === task.id ? (
                                <input
                                    className="text-left w-full border-2 border-accent text-tertiary rounded-full px-5 py-2"
                                    value={editingTaskDescription}
                                    onChange={(e) => setEditingTaskDescription(e.target.value)}
                                    autoFocus
                                    onBlur={() => {
                                        handleUpdateChecklist(task.id, editingTaskDescription);
                                        setEditingTaskId(null);
                                        setEditingTaskDescription("");
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUpdateChecklist(task.id, editingTaskDescription);
                                            setEditingTaskId(null);
                                            setEditingTaskDescription("");
                                        }
                                    }}
                                />
                            ) : (
                          <>
                          <div 
                          onClick={() => {
                            setEditingTaskId(task.id);
                            setEditingTaskDescription(task.description);
                          }}
                          className="text-left cursor-text">
                            {task.description}
                          </div>
                          <div className="text-right" >
                            {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'No date'}
                          </div>
                      </>
                      )}
                  </div>
                  
            </div>
    )
    
              )}
              
            </div>
            <button 
              onClick={handleDeleteCompletedChecklist}
              className="cursor-pointer bg-red-700 shadow text-primary font-extrabold rounded-full w-10 h-10 hover:bg-red-700/50">
                ×
            </button>
        </div>
        <Toaster/>
        </div>
    );
}