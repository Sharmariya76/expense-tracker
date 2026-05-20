const express = require('express');
const path = require('path');

const app = express();
// Default to port 80 if no environment PORT variable is specified
const PORT = process.env.PORT || 80;

// Serve static assets from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to serve the application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 ExpenseTrack server running on http://localhost:${PORT}`);
});
