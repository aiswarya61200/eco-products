// const mongoose = require('mongoose');
// const connectDB = require('./config/db');
// const EvProduct = require('./models/EvProduct');
// const RtsProduct = require('./models/RtsProduct');
// const Comparison = require('./models/Comparison');

// connectDB();

// const seedEvProducts = [
//   {
//     name: "Eco Smart Scooter Pro",
//     description: "Premium electric scooter with advanced features for urban commuting",
//     price: 59999,
//     imageUrl: "https://stat.overdrive.in/wp-content/uploads/2022/07/Ather-450X-3rd-gen-1.jpg",
//     brand: "EcoRide",
//     batteryCapacity: "2.5 kWh",
//     range: "80 km",
//     topSpeed: "45 km/h",
//     chargeTime: "4 hours",
//     weight: "65 kg",
//     motorPower: "1500W",
//     warranty: "2 years",
//     colorOptions: ["Matte Black", "Arctic White", "Ocean Blue"],
//     features: [
//       "LED lighting system",
//       "Digital dashboard",
//       "Mobile app connectivity",
//       "Regenerative braking",
//       "Water resistant IP65"
//     ],
//     rating: 4.5
//   },
//   {
//     name: "Power EV Bike Xtreme",
//     description: "High-performance electric bike for adventure seekers",
//     price: 89999,
//     imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/7/SM/KC/VH/132871050/e-ashwa-future-2020-electric-scooty-1000x1000.jpg",
//     brand: "VoltRider",
//     batteryCapacity: "3.2 kWh",
//     range: "120 km",
//     topSpeed: "60 km/h",
//     chargeTime: "5 hours",
//     weight: "75 kg",
//     motorPower: "2000W",
//     warranty: "3 years",
//     colorOptions: ["Neon Red", "Stealth Grey", "Forest Green"],
//     features: [
//       "Suspension fork",
//       "All-terrain tires",
//       "USB charging port",
//       "Anti-theft alarm",
//       "Hill climb assist"
//     ],
//     rating: 4.8
//   },
//   {
//     name: "City Commuter Lite",
//     description: "Lightweight electric scooter for daily urban travel",
//     price: 42999,
//     imageUrl: "https://urbanacres.in/wp-content/uploads/2024/02/Ola-Resumes-Bike.jpg",
//     brand: "UrbanGlide",
//     batteryCapacity: "1.8 kWh",
//     range: "60 km",
//     topSpeed: "35 km/h",
//     chargeTime: "3.5 hours",
//     weight: "48 kg",
//     motorPower: "1200W",
//     warranty: "1 year",
//     colorOptions: ["Silver", "Rose Gold", "Graphite"],
//     features: [
//       "Foldable design",
//       "Quick charge capability",
//       "Bluetooth speakers",
//       "LED display",
//       "Portable charger included"
//     ],
//     rating: 4.3
//   }
// ];

// const seedRtsProducts = [
//   {
//     name: "Solar Home Premium 1KW",
//     description: "Complete rooftop solar solution with premium components",
//     price: 64999,
//     imageUrl: "https://www.csebkerala.org/wp-content/uploads/2023/08/s1-pro-gen-2-right-front-three-quarter-4-1024x576.png",
//     capacity: "1KW",
//     brand: "SunHarvest",
//     panelType: "Monocrystalline",
//     efficiency: "21%",
//     warranty: "25 years",
//     dimensions: "1650×992×40 mm",
//     weight: "19 kg",
//     outputVoltage: "24V",
//     features: [
//       "Weather resistant",
//       "Shadow optimization",
//       "Easy installation",
//       "MC4 connectors",
//       "PID resistant"
//     ],
//     includedComponents: [
//       "Solar panels (4x250W)",
//       "Inverter",
//       "Mounting structure",
//       "DC cables",
//       "Monitoring system"
//     ],
//     rating: 4.7
//   },
//   {
//     name: "Solar Home Deluxe 3KW",
//     description: "High-efficiency solar system for medium-sized homes",
//     price: 159999,
//     imageUrl: "https://www.tvsmotor.com/electric-scooter/src/images/iqube/electric-verient.png",
//     capacity: "3KW",
//     brand: "SolarMax",
//     panelType: "Bifacial",
//     efficiency: "23%",
//     warranty: "30 years",
//     dimensions: "1752×1038×35 mm",
//     weight: "21.5 kg",
//     outputVoltage: "48V",
//     features: [
//       "Dual glass design",
//       "High wind/snow load resistance",
//       "Low light performance",
//       "Anti-reflective coating",
//       "Salt mist corrosion resistant"
//     ],
//     includedComponents: [
//       "Solar panels (12x250W)",
//       "Hybrid inverter",
//       "Smart monitoring",
//       "Complete mounting kit",
//       "Lightning protector"
//     ],
//     rating: 4.9
//   },
//   {
//     name: "Solar Farm Pro 5KW",
//     description: "Commercial-grade solar solution for large energy needs",
//     price: 279999,
    
//     imageUrl: "https://ic1.maxabout.us/autos/tw_india/H/2022/10/hero-vida-v1-plus-side-view.jpg",
//     capacity: "5KW",
//     brand: "EcoPower",
//     panelType: "PERC",
//     efficiency: "22.5%",
//     warranty: "25 years",
//     dimensions: "2000×1000×40 mm",
//     weight: "23 kg",
//     outputVoltage: "96V",
//     features: [
//       "Industrial-grade durability",
//       "Smart grid compatibility",
//       "Remote monitoring",
//       "High temperature tolerance",
//       "PID free technology"
//     ],
//     includedComponents: [
//       "Solar panels (20x250W)",
//       "Grid-tie inverter",
//       "Power optimizers",
//       "Commercial racking",
//       "Monitoring software"
//     ],
//     rating: 5.0
//   }
// ];

// const seedDatabase = async () => {
//   try {
//     await EvProduct.deleteMany();
//     await RtsProduct.deleteMany();
//     await Comparison.deleteMany();

//     const createdEvProducts = await EvProduct.insertMany(seedEvProducts);
//     const createdRtsProducts = await RtsProduct.insertMany(seedRtsProducts);

//     // Create multiple comparisons
//     const comparisons = [
//       {
//         product1: createdEvProducts[0]._id,
//         product2: createdEvProducts[1]._id,
//         comparisonType: "EV Scooters",
//         features: {
//           "Price": [`₹${seedEvProducts[0].price}`, `₹${seedEvProducts[1].price}`],
//           "Range": [seedEvProducts[0].range, seedEvProducts[1].range],
//           "Top Speed": [seedEvProducts[0].topSpeed, seedEvProducts[1].topSpeed],
//           "Battery Capacity": [seedEvProducts[0].batteryCapacity, seedEvProducts[1].batteryCapacity],
//           "Charge Time": [seedEvProducts[0].chargeTime, seedEvProducts[1].chargeTime],
//           "Warranty": [seedEvProducts[0].warranty, seedEvProducts[1].warranty]
//         }
//       },
//       {
//         product1: createdRtsProducts[0]._id,
//         product2: createdRtsProducts[1]._id,
//         comparisonType: "Solar Systems",
//         features: {
//           "Price": [`₹${seedRtsProducts[0].price}`, `₹${seedRtsProducts[1].price}`],
//           "Capacity": [seedRtsProducts[0].capacity, seedRtsProducts[1].capacity],
//           "Efficiency": [seedRtsProducts[0].efficiency, seedRtsProducts[1].efficiency],
//           "Panel Type": [seedRtsProducts[0].panelType, seedRtsProducts[1].panelType],
//           "Warranty": [seedRtsProducts[0].warranty, seedRtsProducts[1].warranty],
//           "Weight per Panel": [seedRtsProducts[0].weight, seedRtsProducts[1].weight]
//         }
//       }
//     ];

//     await Comparison.insertMany(comparisons);

//     console.log('Database seeded successfully with detailed products');
//     process.exit();
//   } catch (err) {
//     console.error('Error seeding database:', err);
//     process.exit(1);
//   }
// };

// seedDatabase();