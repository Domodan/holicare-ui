export function initTasks() {
    const currentDate = new Date();
    const tasks = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Dr. Hilda",
            id: "ProjectSample",
            // progress: 25,
            type: "project",
            hideChildren: false
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                2,
                12,
                28
            ),
            name: "Dr. John",
            id: "Task 0",
            // progress: 45,
            type: "task",
            project: "ProjectSample"
        },
        // {
        //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
        //     name: "Research",
        //     id: "Task 1",
        //     // progress: 25,
        //     // dependencies: ["Task 0"],
        //     type: "task",
        //     project: "ProjectSample"
        // },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Dr. Liam",
            id: "Task 2",
            // progress: 10,
            // dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
            name: "Dr. Noah",
            id: "Task 3",
            // progress: 2,
            // dependencies: ["Task 2"],
            type: "task",
            project: "ProjectSample"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
            name: "Dr. Emma",
            id: "Task 4",
            type: "task",
            // progress: 70,
            // dependencies: ["Task 2"],
            project: "ProjectSample"
        },
        // {
        //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        //     name: "Release",
        //     id: "Task 6",
        //     // progress: currentDate.getMonth(),
        //     type: "task",
        //     // dependencies: ["Task 4"],
        //     project: "ProjectSample"
        // },
        // {
        //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
        //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
        //     name: "Party Time",
        //     id: "Task 9",
        //     // progress: 0,
        //     // isDisabled: true,
        //     type: "task",
        //     project: "ProjectSample"
        // }
    ];
    return tasks;
}
export function getStartEndDateForProject(tasks: any[], projectId: any) {
    const projectTasks = tasks.filter((t: { project: any; }) => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;
    for (let i = 0; i < projectTasks.length; i++) {
        const task = projectTasks[i];
        if (start.getTime() > task.start.getTime()) {
            start = task.start;
        }
        if (end.getTime() < task.end.getTime()) {
            end = task.end;
        }
    }
    return [start, end];
}
