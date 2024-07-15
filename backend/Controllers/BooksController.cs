using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/books")]
    public class BooksController : ControllerBase
    {
        private readonly LibraryDBContext _context;

        public BooksController(LibraryDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            var books = _context.Books.ToList();
            return Ok(books);
        }
    }
}
