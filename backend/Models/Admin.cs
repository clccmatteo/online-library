using System;

namespace backend.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PasswordHash { get; set; }

    }
}
