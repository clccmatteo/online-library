using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthorization();

builder.Services.AddDbContext<LibraryDBContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("LibraryDb"),
    new MySqlServerVersion(new Version(8, 0, 23)),
    mySqlOptions => mySqlOptions.EnableRetryOnFailure()));

builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddEntityFrameworkStores<LibraryDBContext>();

// Configurazione CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder
            .AllowAnyOrigin() 
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.MapControllers();

app.MapGroup("/identity").MapIdentityApi<IdentityUser>();

app.Run();
