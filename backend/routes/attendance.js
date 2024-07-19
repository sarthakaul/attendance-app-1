const express = require('express');
const Attendance = require('../models/Attendance');
const User = require('../models/User');
const authenticateJWT = require('../middleware/authenticateJWT');
const router = express.Router();

// Check-in
router.post('/checkin', authenticateJWT, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const attendance = new Attendance({
            userId: user._id,
            name: user.name,
            rollNo: user.rollNo,
            email: user.email,
            timestamp: new Date(),
        });

        await attendance.save();
        res.json({ message: 'Check-in successful' });
    } catch (error) {
        res.status(500).json({ message: 'Check-in failed', error: error.message });
    }
});

module.exports = router;
