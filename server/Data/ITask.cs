using ToDoList.Models;

namespace ToDoList.Data
{
    public interface ITask
    {
        List<DoTask> GetTasks();   //Sabai tasks nikalxa in list

        DoTask GetTask(Guid id);

        DoTask AddTask(DoTask task);

        DoTask UpdateTask(DoTask task);

        void DeleteTask(DoTask task);

        bool PrioritizeTask(Guid id);

        void ReorderPriorities();

    }
}
