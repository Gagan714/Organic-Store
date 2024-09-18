// Product.js
const products = [
    {
      id: 1,
      name: "Assorted Coffee",
      price: 350.00,
      image: "coffee-asorted.jpg", // Add image path later
      review: 4.5, // Random review between 3.0 and 5.0
      comments: [
        { user: "John", text: "Great taste and aroma!" },
        { user: "Jane", text: "Perfect for mornings." }
      ],
      category: "Groceries",
    },
    {
      id: 2,
      name: "Cashew Butter",
      price: 255.00, // Sale price
      image: "cashew-butter.jpg",
      review: 4.2,
      comments: [
        { user: "Alex", text: "Smooth and delicious!" },
        { user: "Chris", text: "Perfect for a healthy snack." }
      ],
      category: "Groceries",
    },
    {
      id: 3,
      name: "Diabetic Cookies",
      price: 125.00, // Sale price
      image: "diabetic-cookies.jpg",
      review: 4.0,
      comments: [
        { user: "Sam", text: "A great snack without the sugar." },
        { user: "Emma", text: "Tastes just like regular cookies!" }
      ],
      category: "Groceries",
    },
    {
      id: 4,
      name: "Farm Fresh Eggs",
      price: 134.00,
      image: "eggs.jpg",
      review: 4.7,
      comments: [
        { user: "Tom", text: "Fresh and organic!" },
        { user: "Lily", text: "Perfect for breakfast." }
      ],
      category: "Juice",
    },
    {
      id: 5,
      name: "Fresh Orange Juice",
      price: 118.00,
      image: "orage-juice-kariz.jpg",
      review: 4.8,
      comments: [
        { user: "Harry", text: "So refreshing and natural!" },
        { user: "Mia", text: "Tastes amazing." }
      ],
      category: "Juice",
    },
    {
      id: 6,
      name: "Fresh Organic Honey",
      price: 345.00,
      image: "organic-honey.jpg",
      review: 4.9,
      comments: [
        { user: "Mark", text: "Pure and rich flavor!" },
        { user: "Emily", text: "Perfect for tea and baking." }
      ],
      category: "Groceries",
    },
    {
      id: 7,
      name: "Hand Sanitizer",
      price: 115.00,
      image: "sanitizer.jpg",
      review: 4.3,
      comments: [
        { user: "Nina", text: "Handy and effective." },
        { user: "Oscar", text: "Cleans well, no sticky residue." }
      ],
      category: "Groceries",
    },
    {
      id: 8,
      name: "Handpicked Red Chillies",
      price: 49.00,
      image: "red-chillies.jpg",
      review: 4.6,
      comments: [
        { user: "Paul", text: "Perfect for spicy dishes." },
        { user: "Rita", text: "Adds a great kick to my meals." }
      ],
      category: "Groceries",
    },
    {
      id: 9,
      name: "Natural Extracted Edible Oil",
      price: 215.00, // Sale price
      image: "edible-oil.jpg",
      review: 4.5,
      comments: [
        { user: "David", text: "Healthy and natural." },
        { user: "Sophia", text: "Great for cooking." }
      ],
      category: "Groceries",
    },
    {
      id: 10,
      name: "Organic Face Scrub",
      price: 235.00,
      image: "face-wash.jpg",
      review: 4.4,
      comments: [
        { user: "Jenny", text: "Gentle and refreshing." },
        { user: "Diana", text: "Makes my skin feel smooth." }
      ],
      category: "Groceries",
    },
    {
      id: 11,
      name: "Pulses From Organic Farm",
      price: 200.00,
      image: "pulses.jpg",
      review: 4.6,
      comments: [
        { user: "Peter", text: "Very fresh and healthy." },
        { user: "Lucy", text: "Perfect for everyday meals." }
      ],
      category: "Groceries",
    },
    {
      id: 12,
      name: "Wheat From Organic Farms",
      price: 134.00,
      image: "wheat.jpg",
      review: 4.7,
      comments: [
        { user: "George", text: "Top quality, fresh grains." },
        { user: "Anna", text: "Ideal for making bread." }
      ],
      category: "Groceries",
    },{
      id: 13,
      name: "Almond Milk",
      price: 150.00,
      image: "almond milk.jpg",
      review: 4.3,
      comments: [
        { user: "Alex", text: "Creamy and delicious!" },
        { user: "Sophia", text: "Great alternative to dairy." }
      ],
      category: "Juice",
    },
    {
      id: 14,
      name: "Green Tea",
      price: 120.00,
      image: "green-tea.jpg",
      review: 4.6,
      comments: [
        { user: "Liam", text: "Refreshing and calming." },
        { user: "Olivia", text: "Perfect for a healthy boost." }
      ],
      category: "Juice",
    },
    {
      id: 15,
      name: "Quinoa",
      price: 290.00,
      image: "quinoa.jpg",
      review: 4.4,
      comments: [
        { user: "Noah", text: "Nutritious and versatile." },
        { user: "Emma", text: "Great for salads and bowls." }
      ],
      category: "Groceries",
    },
    {
      id: 16,
      name: "Organic Avocados",
      price: 200.00,
      image: "Avocado.jpg",
      review: 4.8,
      comments: [
        { user: "Mia", text: "Fresh and creamy." },
        { user: "James", text: "Great for guacamole." }
      ],
      category: "Groceries",
    },
    {
      id: 17,
      name: "Coconut Water",
      price: 85.00,
      image: "coconut-water.jpg",
      review: 4.7,
      comments: [
        { user: "Isabella", text: "Hydrating and tasty." },
        { user: "Ethan", text: "Perfect for a quick refresh." }
      ],
      category: "Juice",
    },
    {
      id: 18,
      name: "Organic Peanut Butter",
      price: 275.00,
      image: "peanut-butter.jpg",
      review: 4.5,
      comments: [
        { user: "Charlotte", text: "Smooth and rich flavor." },
        { user: "Daniel", text: "Great for sandwiches and snacks." }
      ],
      category: "Groceries",
    },
    {
      id: 19,
      name: "Cold Pressed Olive Oil",
      price: 350.00,
      image: "olive-oil.jpg",
      review: 4.6,
      comments: [
        { user: "Lucas", text: "High quality and great taste." },
        { user: "Grace", text: "Perfect for cooking and dressings." }
      ],
      category: "Groceries",
    },
    {
      id: 20,
      name: "Berry Smoothie Mix",
      price: 180.00,
      image: "berry.jpg",
      review: 4.5,
      comments: [
        { user: "Ava", text: "Delicious and easy to make." },
        { user: "Michael", text: "Great for a quick breakfast." }
      ],
      category: "Juice",
    },
    {
      id: 21,
      name: "Raw Almonds",
      price: 320.00,
      image: "almonds.jpg",
      review: 4.7,
      comments: [
        { user: "Ella", text: "Crunchy and fresh." },
        { user: "Liam", text: "Perfect for snacking and recipes." }
      ],
      category: "Groceries",
    },
    {
      id: 22,
      name: "Herbal Tea",
      price: 110.00,
      image: "tea.jpg",
      review: 4.3,
      comments: [
        { user: "Benjamin", text: "Soothing and fragrant." },
        { user: "Avery", text: "Great for relaxation." }
      ],
      category: "Juice",
    },
    {
      id: 23,
      name: "Gluten-Free Pasta",
      price: 220.00,
      image: "pasta.jpg",
      review: 4.6,
      comments: [
        { user: "Oliver", text: "Great texture and taste." },
        { user: "Lily", text: "Perfect for gluten-free diets." }
      ],
      category: "Groceries",
    },
    {
      id: 24,
      name: "Fresh Mint Leaves",
      price: 60.00,
      image: "mint-leaves.jpg",
      review: 4.4,
      comments: [
        { user: "Henry", text: "Adds a fresh touch to dishes." },
        { user: "Sofia", text: "Great for teas and garnishes." }
      ],
      category: "Groceries",
    },
  ];
  
  export default products;
  