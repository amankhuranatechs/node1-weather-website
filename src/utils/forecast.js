const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1813b6d8bc976408a5f46b4e8ba7e560/'+longitude +','+latitude+'?units=si';
    request({url, json: true},(error, {body})=> {
        if(error) {
            callback('Unable to connect to wheather services', undefined);
        } else if(body.error) {
            callback('Unable to whether forecast. Try another service', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' out. There is a ' + body.currently.precipProbability + '% chance of rain today.' + 'The high temperature is ' +  body.daily.data[0].temperatureHigh + '. The daily low temperature is '+ body.daily.data[0].temperatureLow)  
        }
    })
}


module.exports = forecast;