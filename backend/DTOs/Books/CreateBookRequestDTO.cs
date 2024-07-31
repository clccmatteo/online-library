using System.ComponentModel.DataAnnotations;

namespace backend.dtos.books
{
    public class CreateBookRequestDTO
    {
        [Required]
        public string Isbn { get; set; } = string.Empty;

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Author { get; set; } = string.Empty;

        [Required]
        public string Genre { get; set; } = string.Empty;
    }
}
