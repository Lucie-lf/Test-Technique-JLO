import ThemeMenu from "../components/theme/ThemeMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "../components/notifs/sonner";
import type { Task } from "../types/Task.ts";
import {createChecklist, getChecklist, deleteChecklist, updateChecklist} from "../API/crudChecklist.ts";

type ToDoProps = {
    isDeployed: boolean;
    };

export default function ToDo({isDeployed}: ToDoProps) {

    const location = useLocation();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editingTaskDescription, setEditingTaskDescription] = useState<string>("");

    const handleCreateChecklist = async () => {
        if (newTask.trim() === "") {
            return false;
        }

        const task: Task = {
            id: "",
            createdAt: new Date().toISOString(),
            description: newTask,
            isComplete: false,
        };

        const createdTask = await createChecklist(task);
        if (createdTask) {
            setTasks([...tasks, createdTask]);
            setNewTask("");
            toast.success("Task created successfully!");
        } else {
            toast.error("Failed to create task.");
        }
    }

    useEffect(() => {
        async function fetchTasks() {
            
            const checklists = await getChecklist();
            if (checklists) {
                const sortedTasks = checklists.sort((a : any, b : any) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            setTasks(sortedTasks);
        }
    }
    fetchTasks();
    },[location.pathname]);

    const tasksUndone = tasks.filter(task => !task.isComplete);

    const handleDeleteChecklist = async (id: string) => {
        const deletedTask = await deleteChecklist(id);
        if (deletedTask) {
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
            toast.success("Task deleted successfully!");
        }
        else {
            toast.error("Failed to delete task.");
        }
    
    };

    const handleUpdateChecklist = async (id: string, newDescription: string) => {
        const updatedTask = await updateChecklist(id, {description: newDescription, createdAt: new Date().toISOString()});
        if (updatedTask) {
            setTasks((prevTasks) =>
                prevTasks.map((task) => 
                    (task.id === id ? {...task, description: updatedTask.description} : task))
            );
            toast.success("Task modified successfully!");
        }
        else {
            toast.error("Failed to update task.");
        }
    };

    return (
        <div className="flex flex-row w-80 md:w-150 lg:w-200 mx-auto items-start mb-5">
            <ThemeMenu 
            isDeployed={isDeployed} 
            />
        <div className="w-full flex flex-col gap-5">

            <div className="w-full flex flex-col p-3 mt-5 lg:p-10 lg:mt-5 md:p-10 md:mt-8 rounded-[40px] gap-1 border-accent border-2">
                {tasksUndone.length === 0 && <div className="text-center text-text">nothing yet!!</div>}
                {tasksUndone.map((task) => (
                <div 
                key={task.id}
                className="group flex flex-row items-center px-10 text-sm md:text-md lg:text-lg hover:bg-text/20 hover:text-accent hover:font-bold p-3 rounded-2xl text-text">
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
                        className="mr-10 h-5 w-5 border-1 rounded border-text hover:accent-accent hover:border-accent"
                        aria-label="Mark as finished"
                        />
                        
                        <div className="flex flex-row justify-between items-center w-full">
                            {editingTaskId === task.id ? (
                                <input
                                    className="text-left w-full border-2 border-accent text-text rounded-full px-5 py-2"
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
                        <button 
                        className="hidden group-hover:flex ml-10 h-5 w-6 justify-center items-center border-2 border-text text-text rounded-full hover:bg-red-700"
                        onClick={() => handleDeleteChecklist(task.id)}
                        aria-label="Delete task">
                            ×
                        </button>
                </div>
            ))}
            </div>

                {/*input*/}
            <div className="flex flex-row gap-5 items-center">
                <input 
                    className="border-2 border-accent  text-text rounded-full flex w-stretch px-5 py-2"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(f) => {
                    if (f.key === "Enter") {
                        handleCreateChecklist()}
                    }}
                />
                
                <button 
                onClick={handleCreateChecklist}
                className="cursor-pointer bg-accent text-primary font-extrabold rounded-full w-10 h-10 hover:bg-text/20"
                aria-label="Add the task">
                    +
                </button>

            </div>
        </div>   
        <Toaster/>
        </div>

      )
}