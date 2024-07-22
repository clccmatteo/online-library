using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Book
    {
        [Key]
        public string Isbn { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
    }
}
