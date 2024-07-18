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

        [HttpGet("{isbn}")]
        public IActionResult GetBookFromISBN ([FromRoute] string isbn){
            var book = _context.Books.Find(isbn);
            if(book == null){
                return NotFound();
            }
            return Ok(book);
        }
    }
}
