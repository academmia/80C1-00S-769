interface ITask {
    id: number;
    subject: string;
    description?: string;
}

function fetchTasks(): Promise<ITask[]> {
    let tasks = [
        { id: 1, subject: 'Task Seven', },
        { id: 2, subject: 'Task Seventeen', description: 'Desc Task 17' },
        { id: 2, subject: 'Task Seventeen Seventeen', description: 'Desc Task 1717' }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks)
        }, 2000);
    });

}

const getTaskByName = async (name: string): Promise<ITask[]> => {
    // debugger;
    const allTasks = await fetchTasks();
    return allTasks.filter(task => task.subject.includes(name));

}

document.getElementById('loadSeven')?.addEventListener('click', async (ev) => {
    let result = await getTaskByName('Seven');
    console.log(result);
});

document.getElementById('loadSeventeen')?.addEventListener('click', async (ev) => {
    let result = await getTaskByName('Seventeen');
    console.log(result);
});
