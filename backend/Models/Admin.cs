using System;
using Microsoft.AspNetCore.Identity;

namespace backend.Models
{
    public class Admin : IdentityUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PasswordHash { get; set; }

    }
}
