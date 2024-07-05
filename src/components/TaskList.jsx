import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", dueDate: "" });

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", dueDate: "" });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Task</Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Task Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <Input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
              <Button onClick={addTask}>Add Task</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center space-x-2">
              <Checkbox />
              <span>{task.title}</span>
              <span className="text-sm text-muted-foreground">
                {task.dueDate && format(new Date(task.dueDate), "PPP")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col gap-4">
                    <Input
                      placeholder="Task Title"
                      value={task.title}
                      onChange={(e) => editTask(task.id, { ...task, title: e.target.value })}
                    />
                    <Input
                      type="date"
                      value={task.dueDate}
                      onChange={(e) => editTask(task.id, { ...task, dueDate: e.target.value })}
                    />
                    <Button onClick={() => editTask(task.id, task)}>Save</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;