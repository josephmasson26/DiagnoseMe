const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Express server listening on ${port}`);