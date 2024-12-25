using Microsoft.EntityFrameworkCore.Storage;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class DoTask
    {
        [Key]
        public Guid Id { get; set; }

        public int Priority { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
