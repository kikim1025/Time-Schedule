// Simple array to keep track of appointments in object format
// Default data is Ki on Monday at 11am
const appointments = [{ name: 'Ki', day: 'Monday', hour: '11am' }];

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
        console.log("get reqiested");
        res.json({ status: 200, data: appointments});
    });
    
    // Updates with appointment data from client then send success or failure
    app.post('/api/appointments', function (req, res) {
        console.log("post reqiested");
        console.log(req.body);
        if (checkDupAppointments(appointments, req.body)) {/////new include
            console.log('duplicate')
            console.log(appointments)
            res.json({ status: 409, data: appointments }); // appointment already exists, can happen if another user updated 
        } else {
            console.log(appointments);
            appointments.push(req.body);
            console.log(appointments);
            res.json({ status: 200, data: appointments});
        };
    });

    //app.delete -> maybe if i have time
};