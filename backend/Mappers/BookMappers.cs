using System;
using backend.dtos.books;
using backend.Models;

namespace backend.Mappers{
  public static class BookMappers{

    public static Book ToBookDto(this Book bookModel){
      return new Book
      {
        Isbn = bookModel.Isbn,
        Title = bookModel.Title,
        Author = bookModel.Author,
        Genre = bookModel.Genre, 
      };
    }

    public static Book ToBookFromCreateDTO(this CreateBookRequestDTO bookDTO)
    {
      return new Book
      {
        Isbn = bookDTO.Isbn,
        Title = bookDTO.Title,
        Author = bookDTO.Author,
        Genre = bookDTO.Genre, 
      };
    }
  }
}