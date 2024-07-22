using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class LibraryDBContext : DbContext
    {
        public LibraryDBContext(DbContextOptions<LibraryDBContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admin { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Book>()
                .HasKey(b => b.Isbn);

            modelBuilder.Entity<Loan>()
                .HasOne(l => l.Book)
                .WithMany()
                .HasForeignKey(l => l.BookIsbn);

            modelBuilder.Entity<Loan>()
                .HasOne(l => l.User)
                .WithMany()
                .HasForeignKey(l => l.UserId);
        }
    }

    
}
