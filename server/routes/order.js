const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const Order = require('../models/Order');
const nodemailer = require('nodemailer');

router.post('/order', verifyToken, async (req, res) => {
  try {
    const { items, totalPrice, email } = req.body;
    const userId = req.user.userId;

    const newOrder = new Order({
      userId,
      items,
      totalPrice,
      email
    });

    await newOrder.save();

    // Set up nodemailer transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,       // your Gmail address
        pass: process.env.EMAIL_PASS        // your Gmail app password
      }
    });

    // Email message options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mbomvu103@gmail.com',   // your personal email where you want to receive orders
      subject: 'New Order Placed - ORI AMBIANCE',
      html: `
        <h2>New Order Received</h2>
        <p><strong>From user ID:</strong> ${userId}</p>
        <p><strong>Customer email:</strong> ${email}</p>
        <p><strong>Total Price:</strong> R${totalPrice}</p>
        <h3>Items:</h3>
        <ul>
          ${items.map(item => `<li>${item.name} - Quantity: ${item.quantity} - Price: R${item.price}</li>`).join('')}
        </ul>
      `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email send error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Order placed successfully and email sent', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
