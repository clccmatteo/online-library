using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using backend.dtos.books;
using Microsoft.AspNetCore.Http.HttpResults;


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

        [HttpPut("{isbn}")]
        public IActionResult EditBookFromISBN([FromRoute] string isbn, [FromBody] UpdateBookRequestDTO updateDTO){
            var bookModel = _context.Books.FirstOrDefault(b => b.Isbn == isbn);

            if(bookModel == null){
                return NotFound();
            }

            bookModel.Genre = updateDTO.Genre;
            bookModel.Title = updateDTO.Title;
            bookModel.Author = updateDTO.Author;

            _context.SaveChanges();

            return Ok(bookModel);
        }

        [HttpDelete("{isbn}")]
        public IActionResult RemoveBookFromISBN([FromRoute] string isbn){
            var bookModel = _context.Books.FirstOrDefault(b => b.Isbn == isbn);

            if(bookModel == null){
                return NotFound();
            }

            _context.Books.Remove(bookModel);

            _context.SaveChanges();

            return NoContent();
            
        }
    }
}
