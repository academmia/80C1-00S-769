"use strict";
var _a, _b;
function fetchTasks() {
    let tasks = [
        { id: 1, subject: 'Task Seven', },
        { id: 2, subject: 'Task Seventeen', description: 'Desc Task 17' },
        { id: 2, subject: 'Task Seventeen Seventeen', description: 'Desc Task 1717' }
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks);
        }, 2000);
    });
}
const getTaskByName = async (name) => {
    // debugger;
    const allTasks = await fetchTasks();
    return allTasks.filter(task => task.subject.includes(name));
};
(_a = document.getElementById('loadSeven')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', async (ev) => {
    let result = await getTaskByName('Seven');
    console.log(result);
});
(_b = document.getElementById('loadSeventeen')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', async (ev) => {
    let result = await getTaskByName('Seventeen');
    console.log(result);
});
//# sourceMappingURL=index.js.map