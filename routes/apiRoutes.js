// Simple array to keep track of appointments in object format
// Default data is Ki on Monday at 11am
const appointments = [{ name: 'Ki', day: 'Monday', hour: '11am' }];

module.exports = function(app) {
    // Sends appointment data to client
    app.get('/api/appointments', function(req, res) {
        console.log("get reqiested");
        res.json({ status: 200, data: appointments});
    });
    
    // Updates with appointment data from client then send success or failure
    app.post('/api/appointments', function (req, res) {
        console.log("post reqiested");
        if (appointments.includes(req.body.data)) {
            res.json({ status: 409 }); // appointment already exists, can happen if another user updated 
        } else {
            appointments.push(req.body.data);
            res.json({ status: 200, data: appointments});
        }
    });

    //app.delete -> when i have time
}