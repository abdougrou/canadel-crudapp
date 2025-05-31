using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions options) : base(options)
        {
        }

        protected ProductContext()
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}
