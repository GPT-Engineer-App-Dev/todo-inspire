import React from "react";
import TaskList from "@/components/TaskList";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <TaskList />
    </div>
  );
};

export default ProjectsPage;