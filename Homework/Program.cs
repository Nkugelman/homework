namespace Clothing_Store {
   
        
    public class Program {
        static string[] colors = { "red", "green", "orange" };
        static string[] design = { "stripe", "solid", "suede" };
        public class Shirt {
           public string Color { get; set; }
           public string Design { get; set; }
            public Shirt(string color, string design) {
                this.Color = color;
                this.Design = design;
                }

            public override string ToString() {
                return $"{Color}:{Design}";
                }
            }

            static void Main(string[] args) {
            List<Shirt> shirts = new List<Shirt>();
            for (int i = 0; i < colors.Length; i++) {
                for (int j = 0; j < design.Length; j++) {
                    shirts.Add(new Shirt(colors[i], design[j]));

                    }

                }
            foreach(var shirt in shirts) {
                Console.WriteLine(shirt);
                }

            }
        }
    }
