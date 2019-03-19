// Simple array to keep track of appointments in object format
const appointments = [{ name: 'Ki', day: 'Monday', hour: '11am' }];

// Define weekdays to be shown on schedule, as well as hour heading
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Define specific hours to be shown per day
const DAY_HOURS = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];


// check if slot is already occupied, which can happen if another user submits appointment post data retrieval by user 
function checkDupAppointments(aList, a2) {
    for (let i = 0; i < aList.length; i++) {
        if (aList[i].day === a2.day && aList[i].hour === a2.hour) {
            return i;
        };
    };
    return -1;
};

// check if request has correct format
function checkReqForm(req){
    if (req.body.name && req.body.day && req.body.hour) {
        if (WEEK_DAYS.includes(req.body.day) && DAY_HOURS.includes(req.body.hour)) {
            return true;
        } else {
            return false;
        };
    } else {
        return false;
    };
};

module.exports = function(app) {
    // Sends appointment data to client
    app.get('/api/appointments', function(req, res) {
        res.json({ status: 200, data: appointments});
    });
    
    app.post('/api/appointments', function (req, res) {
        if (checkReqForm(req)) {
            if (checkDupAppointments(appointments, req.body) === -1) {
                appointments.push({name: req.body.name, day: req.body.day, hour: req.body.hour});
                res.json({ status: 200, data: appointments});
            } else {
                res.json({ status: 409, data: appointments });
            };
        } else {
            res.json({ status: 400, message: 'Please use the website to send api requests'});
        };
        
    });

    //app.delete -> maybe if i have time
};