const AdafruitController = require('../../Domain/System/UpdateDatabase/updateDatabase')
const { parentPort, workerData } = require('worker_threads');

console.log("Start update Database...");
AdafruitController.updateDatabase()
parentPort.postMessage("Update database successfully!");