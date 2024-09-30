import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  // subcategory data 
  subCategorisFilterData = [
    { id: 1, categories: 'laptops', subcategories: 'Macbook' },
    { id: 2, categories: 'laptops', subcategories: 'Acer' },
    { id: 3, categories: 'laptops', subcategories: 'Microsoft' },
    { id: 4, categories: 'laptops', subcategories: 'HP' },
    { id: 5, categories: 'phones', subcategories: 'Iphone 11' },
    { id: 6, categories: 'phones', subcategories: 'Iphone 13' },
    { id: 7, categories: 'phones', subcategories: 'Iphone 14' },
    { id: 8, categories: 'phones', subcategories: 'Iphone 15' },
    { id: 9, categories: 'earphones', subcategories: 'Airpods' },
    { id: 10, categories: 'earphones', subcategories: 'Earpods' },
    { id: 11, categories: 'earphones', subcategories: 'Airpods Max' },
    { id: 12, categories: 'watches', subcategories: 'Apple Watch Ultra' },
    { id: 13, categories: 'watches', subcategories: 'Apple Watch Series 9' }
  ];


  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Phone',
      img: '../../assets/iphone.webp',
      code: 'phones',
    },
    {
      id: 2,
      name: 'Earphones',
      img: '../../assets/earphones.webp',
      code: 'earphones',
    },
    {
      id: 3,
      name: 'Laptops',
      img: '../../assets/laptops.jpg',
      code: 'laptops',
    },
    {
      id: 4,
      name: 'Watches',
      img: '../../assets/watches.webp',
      code: 'watches',
    },
  ];


  // product details 
  productData = [
    {
      pdId: 8565,
      pdName: "Apple MacBook Air 13 Silver, M3",
      pdDesc: "MacBook Air handles both work and play with ease, and with the MZ processor, the world's most popular notebook is even more powerful. With up to 18 hours of battery life, this ultra-portable MacBook Air will be your trusted companion in all situations.",
      pdPrice: 11499,
      pdCategory: "laptops",
      pdSubCategory: "Macbook",
      pdImg: "../../assets/laptop-blue-3.webp"
    },
    {
      pdId: 8566,
      pdName: "Apple MacBook Air 15 Starlight, M3",
      pdDesc: "MacBook Air handles both work and play with ease, and with the MZ processor, the world's most popular notebook is even more powerful. With up to 18 hours of battery life, this ultra-portable MacBook Air will be your trusted companion in all situations.",
      pdPrice: 79900,
      pdCategory: "laptops",
      pdSubCategory: "Macbook",
      pdImg: "../../assets/laptop-yellow-1.webp"
    },
    {
      pdId: 8567,
      pdName: "Apple MacBook Air 13 Rose Gold, M1",
      pdDesc: "Apple's thinnest and lightest laptop has been completely transformed with the introduction of the Apple M1 chip. The CPU is now up to 3.5 times faster. The graphics processor is up to 5 times faster. And thanks to Apple's advanced Neural Engine, machine learning is up to 9 times faster. ",
      pdPrice: 7450,
      pdCategory: "laptops",
      pdSubCategory: "Macbook",
      pdImg: "../../assets/laptop-pink-3.webp"
    },
    {
      pdId: 8568,
      pdName: "HP ENVY Silver",
      pdDesc: "HP ENVY notebook is a limitless platform for spending time for your favorite entertainment, because the high resolution of broadcasted content, reaching 1920x1080 pixels, contributes to the 17.3-inch screen with IPS matrix. ",
      pdPrice: 74000,
      pdCategory: "laptops",
      pdSubCategory: "HP",
      pdImg: "../../assets/laptop-hp-grey.png"
    },
    {
      pdId: 8569,
      pdName: "HP ENVY Pink",
      pdDesc: "HP ENVY notebook is a limitless platform for spending time for your favorite entertainment, because the high resolution of broadcasted content, reaching 1920x1080 pixels, contributes to the 17.3-inch screen with IPS matrix. ",
      pdPrice: 44990,
      pdCategory: "laptops",
      pdSubCategory: "HP",
      pdImg: "../../assets/laptop-hp-pink.jpg"
    },
    {
      pdId: 8570,
      pdName: "Microsoft Surface Laptop",
      pdDesc: "Microsoft Surface is a Windows 10 laptop with a 13.30-inch display and resolution of 2256x1504 pixels. It is powered by a Core i7 processor and it comes with 8GB of RAM. The Microsoft Surface packs 128GB of HDD storage.",
      pdPrice: 2199,
      pdCategory: "laptops",
      pdSubCategory: "Microsoft",
      pdImg: "../../assets/laptop-microsoft.jpg"
    },
    {
      pdId: 8571,
      pdName: "Apple iPhone 14 Pro Max 512GB - Gold",
      pdDesc: "The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less).",
      pdPrice: 1019,
      pdCategory: "phones",
      pdSubCategory: "Iphone 14",
      pdImg: "../../assets/phone-yellow.webp",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8572,
      pdName: "Apple iPhone 13 128GB - Starlight",
      pdDesc: "The iPhone 13 has a flat chassis analogous to that of contemporaneous Apple products with some differences such as the rear cameras being larger and arranged diagonally. The Face ID True Depth sensor housing on the iPhone is 20% smaller yet taller than its predecessors.",
      pdPrice: 759,
      pdCategory: "phones",
      pdSubCategory: "Iphone 13",
      pdImg: "../../assets/phone-white.webp",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8573,
      pdName: "Apple iPhone 15 128GB - Blue",
      pdDesc: "The iPhone 15 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less).",
      pdPrice: 1029,
      pdCategory: "phones",
      pdSubCategory: "Iphone 15",
      pdImg: "../../assets/phone-blue.webp",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8574,
      pdName: "Apple iPhone 15 128GB - Pink",
      pdDesc: "The iPhone 15 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less).",
      pdPrice: 1029,
      pdCategory: "phones",
      pdSubCategory: "Iphone 15",
      pdImg: "../../assets/phone-pink.webp",
      pdSize: [30, 32, 34]
    },
    {
      pdId: 8575,
      pdName: "Apple iPhone 11 128GB - Black",
      pdDesc: "A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. And the highest‑quality video in a smartphone, so your memories look better than ever.",
      pdPrice: 570,
      pdCategory: "phones",
      pdSubCategory: "Iphone 11",
      pdImg: "../../assets/phone-black.webp",
      pdSize: [26, 28, 30, 32, 34]
    },
    {
      pdId: 8576,
      pdName: "Apple AirPods Max - Silver",
      pdDesc: "Introducing AirPods Max headphones, where the highest quality sound is in perfect harmony with the magical simplicity of AirPods. It's sound in brilliant performance. AirPods Max is a whole new take on full-size headphones.",
      pdPrice: 549,
      pdCategory: "earphones",
      pdSubCategory: "Airpods Max",
      pdImg: "../../assets/earphone-white.jpg",
    },
    {
      pdId: 8577,
      pdName: "Apple AirPods Max - Space Gray",
      pdDesc: "Introducing AirPods Max headphones, where the highest quality sound is in perfect harmony with the magical simplicity of AirPods. It's sound in brilliant performance. AirPods Max is a whole new take on full-size headphones.",
      pdPrice: 549,
      pdCategory: "earphones",
      pdSubCategory: "Airpods Max",
      pdImg: "../../assets/earphone-black.jpg",
    },
    {
      pdId: 8578,
      pdName: "Apple AirPods Max - Starlight",
      pdDesc: "Introducing AirPods Max headphones, where the highest quality sound is in perfect harmony with the magical simplicity of AirPods. It's sound in brilliant performance. AirPods Max is a whole new take on full-size headphones. ",
      pdPrice: 549,
      pdCategory: "earphones",
      pdSubCategory: "Airpods Max",
      pdImg: "../../assets/earphone-starlight.jpg",
    },
    {
      pdId: 8579,
      pdName: "AirPods Pro",
      pdDesc: "AirPods Pro are unique active noise canceling headphones that continuously optimize sound based on the shape of your ear and the position of the ear pads. They perfectly cancel out external noise, so you can fully immerse yourself in your music. ",
      pdPrice: 249,
      pdCategory: "earphones",
      pdSubCategory: "Airpods",
      pdImg: "../../assets/earphone-airpods.webp",
    },
    {
      pdId: 8580,
      pdName: "Apple EarPods with USB-C",
      pdDesc: "The EarPods headphone speakers are specially designed to minimize sound loss and deliver the best sound possible. EarPods have a built-in remote that lets you adjust volume, control music and video playback, and answer or end calls with a single touch.",
      pdPrice: 25,
      pdCategory: "earphones",
      pdSubCategory: "Earpods",
      pdImg: "../../assets/earphone-wired.webp",
    },
    {
      pdId: 8581,
      pdName: "Apple Watch Ultra 2 GPS + Cellular",
      pdDesc: "Apple Watch Ultra 2 offers a unique combination of sophisticated design and advanced technology. This model becomes the perfect accessory for both everyday use and long journeys. Apple Watch Ultra 2 is built for outstanding performance. The lightweight titanium case is durable and corrosion-resistant, while protrusions protect the sapphire crystal from impact.",
      pdPrice: 399,
      pdCategory: "watches",
      pdSubCategory: "Apple Watch Ultra",
      pdImg: "../../assets/watch-grey.webp",
    },
    {
      pdId: 8582,
      pdName: "Apple Watch Series 9 with Sport Band Starlight",
      pdDesc: "Apple Watch Series 9 is a unique combination of sleek design and the latest technology, making it the perfect accessory for everyday use.",
      pdPrice: 268,
      pdCategory: "watches",
      pdSubCategory: "Apple Watch Series 9",
      pdImg: "../../assets/watch-sand.webp",
    },
    {
      pdId: 8583,
      pdName: "Apple Watch Series 9 with Sport Band White",
      pdDesc: "Apple Watch Series 9 is a unique combination of sleek design and the latest technology, making it the perfect accessory for everyday use.",
      pdPrice: 268,
      pdCategory: "watches",
      pdSubCategory: "Apple Watch Series 9",
      pdImg: "../../assets/watch-white.webp",
    },
    {
      pdId: 8584,
      pdName: "Apple Watch Series 9",
      pdDesc: "Apple Watch Series 9 is a unique combination of sleek design and the latest technology, making it the perfect accessory for everyday use.",
      pdPrice: 268,
      pdCategory: "watches",
      pdSubCategory: "Apple Watch Series 9",
      pdImg: "../../assets/watch-brown.webp",
    },
  ];
}