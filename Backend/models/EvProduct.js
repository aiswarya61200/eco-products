// // const mongoose = require('mongoose');

// // const EvProductSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true
// //   },
// //   description: {
// //     type: String,
// //     required: true
// //   },
// //   price: {
// //     type: Number,
// //     required: true
// //   },
// //   imageUrl: {
// //     type: String,
// //     required: true
// //   },
// //   features: {
// //     type: [String],
// //     required: true
// //   },
// //   createdAt: {
// //     type: Date,
// //     default: Date.now
// //   }
// // });

// // module.exports = mongoose.model('EvProduct', EvProductSchema);

// const mongoose = require('mongoose');

// const EvProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
//   features: { type: [String], required: true },
//   brand: { type: String },
//   batteryCapacity: { type: String },
//   range: { type: String },
//   topSpeed: { type: String },
//   chargeTime: { type: String },
//   weight: { type: String },
//   motorPower: { type: String },
//   warranty: { type: String },
//   colorOptions: { type: [String] },
//   rating: { type: Number },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('EvProduct', EvProductSchema);

const mongoose = require('mongoose');

const EvProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },

  features: { type: [String], required: false },

  certifiedRange: { type: String, required: false },
  trueRange: { type: String, required: false },
  motorPowerNominalPeak: { type: String, required: false },
  chargingTime: { type: String, required: false },
  fastCharging: { type: String, required: false },

  motorType: { type: String, required: false },
  batteryType: { type: String, required: false },
  batteryCapacity: { type: String, required: false },

  keyType: { type: String, required: false },
  chargerType: { type: String, required: false },
  ignition: { type: String, required: false },

  frontTyreSize: { type: String, required: false },
  rearTyreSize: { type: String, required: false },

  brakingSystem: { type: String, required: false },
  frontBrakeDiameter: { type: String, required: false },
  rearBrakeDiameter: { type: String, required: false },
  frontBrakeType: { type: String, required: false },
  rearBrakeType: { type: String, required: false },

  frameType: { type: String, required: false },
  transmission: { type: String, required: false },

  topSpeed: { type: String, required: false },
  ridingModes: { type: String, required: false },
  trueRangeEcoMode: { type: String, required: false },
  trueRangeNormalMode: { type: String, required: false },
  zeroToForty: { type: String, required: false },
  braking60To0: { type: String, required: false },
  maxTorque: { type: String, required: false },

  instrumentCluster: { type: String, required: false },
  navigation: { type: String, required: false },
  reverseAssist: { type: String, required: false },
  cruiseControl: { type: String, required: false },
  chargingStationLocator: { type: String, required: false },
  sideStandAlert: { type: String, required: false },
  sideStandMotorCutoff: { type: String, required: false },
  safeguards: { type: String, required: false },
  usbPorts: { type: String, required: false },
  music: { type: String, required: false },
  remoteBootUnlock: { type: String, required: false },
  gpsConnectivity: { type: String, required: false },
  advancedRegen: { type: String, required: false },
  vacationMode: { type: String, required: false },
  predictiveMaintenance: { type: String, required: false },
  proximityUnlock: { type: String, required: false },
  hillHold: { type: String, required: false },
  footpegs: { type: String, required: false },

  weight: { type: String, required: false },
  length: { type: String, required: false },
  width: { type: String, required: false },
  height: { type: String, required: false },
  groundClearance: { type: String, required: false },
  gradeability: { type: String, required: false },
  wheelbase: { type: String, required: false },
  seatHeight: { type: String, required: false },
  seatLength: { type: String, required: false },
  floorboardSize: { type: String, required: false },
  waterWade: { type: String, required: false },

  underSeat: { type: String, required: false },
  glovebox: { type: String, required: false },

  batteryIP: { type: String, required: false },
  motorIP: { type: String, required: false },
  controllerIP: { type: String, required: false },

  chassisType: { type: String, required: false },
  frontSuspension: { type: String, required: false },
  rearSuspension: { type: String, required: false },

  bagHook: { type: String, required: false },
  pannierStay: { type: String, required: false },
  accessoryMounts: { type: String, required: false },

  vehicleWarranty: { type: String, required: false },
  batteryWarranty: { type: String, required: false },

  colors: { type: [String], required: false },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EvProduct', EvProductSchema);

