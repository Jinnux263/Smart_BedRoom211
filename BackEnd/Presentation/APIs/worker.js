const AdafruitController = require('../../Domain/System/UpdateDatabase/updateDatabase')
const { parentPort, workerData } = require('worker_threads');

AdafruitController.updateDatabase()
parentPort.postMessage("Update database successfully!");