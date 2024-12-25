using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext (DbContextOptions options) : base (options)
        {

        }

        public DbSet<DoTask> Tasks { get; set; }
    }
}
