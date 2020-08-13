using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
using System.Linq;

namespace PropertyRental.Controllers{

    public class CatalogController : Controller{

        private DataContext dbContext;
        public CatalogController(DataContext db){
            this.dbContext = db;
        }

        public IActionResult Test(){
            return View();
        }

        public IActionResult Index(){
            return View();
        }

        public IActionResult Register(){
            return View();
        }

        [HttpGet]

        public IActionResult GetCatalog(){
            // paginate with linq, use skip and take
            // get the data from the database
            // var list = dbContext.Properties.Take(100).OrderBy(p => p.Price).ToList();
            var list = dbContext.Properties.Take(100).ToList();

            // return the data as a JSON object
            return Json(list);
        }

        //catalog/register property
        [HttpPost]

        public IActionResult RegisterProperty([FromBody] Property p){
            System.Console.WriteLine("user is saving something");
            
            dbContext.Properties.Add(p); // ORM generate: insert into properties (name, rooms, bathrooms, etc.)
            dbContext.SaveChanges();


            return Json(p);
        }
    }
}