const express = require("express");
const router = express.Router();

router.post("/chatbot", (req, res) => {
  const { message } = req.body;

  let reply;
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    reply = 'Hi there! How can I assist you today?';
  } else if (message.toLowerCase().includes('how are you')) {
    reply = 'I’m just a bot, but I’m here and ready to help you!';
  } else if (message.toLowerCase().includes('services')) {
    reply = 'We offer web development, mobile app development, chatbot development, and digital marketing services.';
  } else if (message.toLowerCase().includes('contact')) {
    reply = 'You can reach us at Email: hr@evirexsoft.com, Phone: +91 6282118829.';
  } else if (message.toLowerCase().includes('pricing') || message.toLowerCase().includes('cost')) {
    reply = 'Our pricing depends on the scope of your project. Please contact us for a detailed quote.';
  } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('where are you')) {
    reply = 'We are based in India but provide services globally!';
  } else if (message.toLowerCase().includes('portfolio') || message.toLowerCase().includes('projects')) {
    reply = 'We have worked on a range of projects including e-commerce websites, mobile apps, and AI chatbots. Let us know if you want to see examples!';
  } else if (message.toLowerCase().includes('technology') || message.toLowerCase().includes('stack')) {
    reply = 'We use cutting-edge technologies including React, Node.js, Python, Flutter, and more.';
  } else if (message.toLowerCase().includes('support') || message.toLowerCase().includes('help')) {
    reply = 'We provide 24/7 customer support. Let us know how we can assist you!';
  } else if (message.toLowerCase().includes('team') || message.toLowerCase().includes('people')) {
    reply = 'Our team consists of skilled developers, designers, and digital marketing experts.';
  } else if (message.toLowerCase().includes('career') || message.toLowerCase().includes('jobs')) {
    reply = 'We’re always looking for talented individuals. Email your resume to hr@evirexsoft.com.';
  } else if (message.toLowerCase().includes('payment') || message.toLowerCase().includes('methods')) {
    reply = 'We accept bank transfers, PayPal, and other secure payment methods.';
  } else if (message.toLowerCase().includes('delivery') || message.toLowerCase().includes('timeline')) {
    reply = 'The delivery timeline depends on the project size. Typically, smaller projects take 2-4 weeks, and larger ones take 2-3 months.';
  } else if (message.toLowerCase().includes('refund') || message.toLowerCase().includes('cancellation')) {
    reply = 'Our refund and cancellation policies are project-specific. Please contact us for more details.';
  } else if (message.toLowerCase().includes('testimonial') || message.toLowerCase().includes('reviews')) {
    reply = 'Our clients love working with us! Contact us if you want to see some testimonials.';
  } else if (message.toLowerCase().includes('about') || message.toLowerCase().includes('company')) {
    reply = 'We are Evirex Soft, a company dedicated to delivering innovative tech solutions for businesses of all sizes.';
  } else if (message.toLowerCase().includes('security') || message.toLowerCase().includes('privacy')) {
    reply = 'We take security and privacy very seriously. All our projects adhere to the latest security protocols.';
  } else if (message.toLowerCase().includes('education') || message.toLowerCase().includes('training')) {
    reply = 'We provide training and workshops in web development, app development, and digital marketing.';
  } else if (message.toLowerCase().includes('languages') || message.toLowerCase().includes('programming')) {
    reply = 'We work with various programming languages including JavaScript, Python, Java, and C++.';
  } else {
    reply = 'I am here to help! Please let me know what you need assistance with.';
  }

  res.json({ reply });
});

module.exports = router;
