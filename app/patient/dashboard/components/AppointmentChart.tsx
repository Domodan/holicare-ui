"use client"
import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./ViewMode";
import { getStartEndDateForProject, initTasks } from "./helper";
// import "gantt-task-react/dist/index.css";
// import DashboardCard from "./DashboardCard";

// Init
const AppointmentChart = () => {
    const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
    const [tasks, setTasks] = React.useState<Task[] | any>(initTasks());
    const [isChecked, setIsChecked] = React.useState(true);
    let columnWidth = 65;
    if (view === ViewMode.Year) {
        columnWidth = 350;
    } else if (view === ViewMode.Month) {
        columnWidth = 300;
    } else if (view === ViewMode.Week) {
        columnWidth = 250;
    }

    const handleTaskChange = (task: Task) => {
        // console.log("On date change Id:" + task.id);
        let newTasks = tasks.map((t: { id: string; }) => (t.id === task.id ? task : t));
        if (task.project) {
            const [start, end] = getStartEndDateForProject(newTasks, task.project);
            const project = newTasks[newTasks.findIndex((t: { id: string | undefined; }) => t.id === task.project)];
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end };
                newTasks = newTasks.map((t: { id: string | undefined; }) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }
        setTasks(newTasks);
    };

    const handleTaskDelete = (task: Task) => {
        const conf = window.confirm("Are you sure about " + task.name + " ?");
        if (conf) {
            setTasks(tasks.filter((t: { id: string; }) => t.id !== task.id));
        }
        return conf;
    };

    const handleProgressChange = async (task: Task) => {
        setTasks(tasks.map((t: { id: string; }) => (t.id === task.id ? task : t)));
        console.log("On progress change Id:" + task.id);
    };

    const handleDblClick = (task: Task) => {
        alert("On Double Click event Id:" + task.id);
    };

    const handleClick = (task: Task) => {
        console.log("On Click event Id:" + task.id);
    };

    const handleSelect = (task: Task, isSelected: boolean) => {
        console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
    };

    const handleExpanderClick = (task: Task) => {
        setTasks(tasks.map((t: { id: string; }) => (t.id === task.id ? task : t)));
        console.log("On expander click Id:" + task.id);
    };

    return (

        < div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-boxdark w-full mb-6 shadow-lg rounded" >
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                            Patient&apos;s Appointments
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">Appointments</h2>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-full">
                    <div>
                        <ViewSwitcher
                            onViewModeChange={viewMode => setView(viewMode)}
                            onViewListChange={setIsChecked}
                            isChecked={isChecked}
                        />
                        <br />
                        <Gantt
                            tasks={tasks}
                            viewMode={view}
                            onDateChange={handleTaskChange}
                            onDelete={handleTaskDelete}
                            onProgressChange={handleProgressChange}
                            onDoubleClick={handleDblClick}
                            onClick={handleClick}
                            onSelect={handleSelect}
                            onExpanderClick={handleExpanderClick}
                            listCellWidth={isChecked ? "155px" : ""}
                            ganttHeight={600}
                            columnWidth={columnWidth}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppointmentChart;