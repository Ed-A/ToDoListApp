using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Controllers
{

    [ApiController]
    public class DoTasksController : ControllerBase
    {
        private ITask _iTask;

        public DoTasksController(ITask iTask)
        {
            _iTask = iTask;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetTasks()
        {
            return Ok(_iTask.GetTasks());
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetTask(Guid id)
        {
            var task = _iTask.GetTask(id);
            if (task != null)
            {
                return Ok(task);
            }
            return NotFound();
        }

        [HttpPost]
        [Route("api/[controller]")] 
        public IActionResult AddTask(DoTask task)
        { 
            _iTask.AddTask(task);
            return Created($"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}{HttpContext.Request.Path}/{task.Id}", task);
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult DeleteTask(Guid id)
        {
            var task = _iTask.GetTask(id);

            if (task != null)
            {
                _iTask.DeleteTask(task);
                _iTask.ReorderPriorities();
                return Ok($"Employee with the Id: {id} deleted successfully");
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult UpdateTask(DoTask task)
        {
            var existingTask = _iTask.GetTask(task.Id);

            if (task != null)
            {
                task.Id = existingTask.Id;
                _iTask.UpdateTask(task);
            }
            return Ok();
        }

        [HttpPut]
        [Route("api/[controller]/{id}/up")]
        public IActionResult PrioritizeTask(Guid id)
        {
            var result = _iTask.PrioritizeTask(id);

            if (result != false)
            {
                return Ok(result);
            }
            return NotFound();
        }


    }
}
