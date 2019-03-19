// Simple array to keep track of appointments in object format
const appointments = [{ name: 'Ki', day: 'Monday', hour: '11am' }];

// Define weekdays to be shown on schedule, as well as hour heading
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Define specific hours to be shown per day
const DAY_HOURS = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];


// check if slot is already occupied, which can happen if another user submits appointment post data retrieval by user 
function checkDupAppointments(aList, a2) {
    for (let a1 of aList) {
        if (a1.day === a2.day && a1.hour === a2.hour) {
            return true;
        };
    };
    return false;
};

module.exports = function(app) {
    // Sends appointment data to client
    app.get('/api/appointments', function(req, res) {
        res.json({ status: 200, data: appointments});
    });
    
    // Updates with appointment data from client then send success or failure
    app.post('/api/appointments', function (req, res) {
        if (checkDupAppointments(appointments, req.body)) {
            res.json({ status: 409, data: appointments });
        } else {
            appointments.push(req.body);
            res.json({ status: 200, data: appointments});
        };
    });

    //app.delete -> maybe if i have time
};