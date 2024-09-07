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
    },
  ];
  
  export default products;
  