using BL;
using DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddTransient<ILocation, Location>();
builder.Services.AddTransient<ILocationProvider, LocationProvider>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}
app.UseStaticFiles();
app.UseRouting();

app.UseCors(opt=> opt.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod() );

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
