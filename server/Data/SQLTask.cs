
using Microsoft.EntityFrameworkCore;
using ToDoList.Models;

namespace ToDoList.Data
{
    public class SQLTask : ITask
    {
        private TaskDbContext context;

        public SQLTask(TaskDbContext context)
        {
            this.context = context;
        }

        public DoTask AddTask(DoTask task)
        {
            task.Id = Guid.NewGuid();

            int maxPriority = context.Tasks.Any() ? context.Tasks.Max(t => t.Priority) : 0;
            task.Priority = maxPriority + 1;

            context.Tasks.Add(task);
            context.SaveChanges();
            return task;
        }

        public void DeleteTask(DoTask task)
        {
            context.Tasks.Remove(task);
            context.SaveChanges();
        }

        public DoTask GetTask(Guid id)
        {
            var task = context.Tasks.Find(id);
            return task;
        }

        public List<DoTask> GetTasks()
        {
            return context.Tasks
                .OrderBy(t => t.Priority)
                .ToList();
        }

        public bool PrioritizeTask(Guid id)
        {
            var task = context.Tasks.Find(id);
            if (task == null) return false;

            var higherPriorityTask = context.Tasks
                .Where(t => t.Priority < task.Priority)
                .OrderByDescending(t => t.Priority)
                .FirstOrDefault();

            if(higherPriorityTask != null)
            {
                int tempPriority = task.Priority;
                task.Priority = higherPriorityTask.Priority;
                higherPriorityTask.Priority = tempPriority;

                context.Tasks.Update(task);
                context.Tasks.Update(higherPriorityTask);
                context.SaveChangesAsync();
            }

            return true;
        }

        public DoTask UpdateTask(DoTask task)
        {
            var existingTask = context.Tasks.Find(task.Id);
            if (existingTask != null)
            {
                existingTask.Name = task.Name;
                existingTask.Description = task.Description;
                context.Tasks.Update(existingTask);
                context.SaveChanges();
            }
            return task;
        }

        public void ReorderPriorities()
        {
            var tasks = context.Tasks.OrderBy(t => t.Priority).ToList();

            int priority = 1;
            foreach (var task in tasks)
            {
                task.Priority = priority++;
            }

            context.SaveChanges();
        }

    }
}
