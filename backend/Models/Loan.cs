using System;

namespace backend.Models
{
public class Loan
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string BookIsbn { get; set; }
    public bool Returned { get; set; }
    public DateTime BorrowDate { get; set; }
    public DateTime? ReturnDate { get; set; }
    public User User { get; set; }
    public Book Book { get; set; }
}
}
