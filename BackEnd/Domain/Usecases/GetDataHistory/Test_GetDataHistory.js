const database = require('../../../Data/dataSource/databaseConnect')

function getHistory(req, res, id) {
    results = [
        {
            time : '12-12-2020',
            isOn : true,
            isAuto : true,
        }, 
        {
            time : '13-12-2020',
            isOn : false,
            isAuto : true,
        }
    ]
    res.send(results)
};

module.exports = {
    getHistory,
}