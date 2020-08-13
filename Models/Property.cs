namespace PropertyRental.Models {

    public class Property {

        public int Id {get; set;}

        public string Name {get; set;}

        public int Rooms {get; set;}

        public decimal Bathrooms {get; set;}

        public int SqrFeet {get; set;}

        public string ImageUrl {get; set;}

        public string Description {get; set;}
    }
}