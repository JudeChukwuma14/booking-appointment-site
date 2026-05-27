 import React from 'react'
 
 const Contact = () => {
   return (
     <div>
       
     </div><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    body{
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-100">

  <!-- TOP BAR -->
  <div class="bg-red-700 text-white text-sm px-6 py-2 flex justify-between">
    <div>Emergency Services Unit | Admission Request</div>
    <button class="bg-white text-red-700 px-4 py-1 rounded font-semibold">
      Call Us
    </button>
  </div>

  <!-- NAVBAR -->
  <nav class="bg-white shadow-md px-10 py-4 flex justify-between items-center">
    <div class="text-2xl font-bold text-blue-900">
      HealthPulse
    </div>

    <ul class="hidden md:flex gap-8 text-gray-700 font-medium">
      <li><a href="#" class="hover:text-blue-700">Departments</a></li>
      <li><a href="#" class="hover:text-blue-700">Find a Doctor</a></li>
      <li><a href="#" class="hover:text-blue-700">About Us</a></li>
    </ul>

    <button class="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800">
      Book Appointment
    </button>
  </nav>

  <!-- HERO -->
  <section class="px-10 py-10">
    <h1 class="text-4xl font-bold text-blue-900 mb-2">
      Get in Touch
    </h1>

    <p class="text-gray-600 mb-8">
      We’re here to answer your questions and provide support.
      Contact our dedicated medical team for assistance anytime.
    </p>

    <!-- MAIN GRID -->
    <div class="grid lg:grid-cols-3 gap-6">

      <!-- LEFT SIDE -->
      <div class="space-y-6">

        <!-- Emergency -->
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 class="text-red-700 font-bold text-xl mb-3">
            Emergency 24/7
          </h2>

          <p class="text-gray-600 mb-4">
            For immediate medical emergencies please call our direct hotline.
          </p>

          <div class="text-red-700 font-bold text-lg">
            +1 (555) 987-6543
          </div>
        </div>

        <!-- Locations -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-blue-900 font-bold text-xl mb-5">
            Our Locations
          </h2>

          <div class="space-y-5 text-gray-600">

            <div>
              <h3 class="font-semibold text-gray-800">
                Main Hospital Campus
              </h3>
              <p>123 Healthcare Plaza</p>
              <p>Medical Center, NY 10001</p>
            </div>

            <div>
              <h3 class="font-semibold text-gray-800">
                Email Us
              </h3>
              <p>support@healthpulse.com</p>
              <p>info@healthpulse.com</p>
            </div>

            <div>
              <h3 class="font-semibold text-gray-800">
                Working Hours
              </h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>

          </div>
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="lg:col-span-2 space-y-6">

        <!-- MAP IMAGE -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://maps.google.com?utm_source=chatgpt.com"
            class="w-full h-[280px] object-cover"
            alt="map"
          />
        </div>

        <!-- CONTACT FORM -->
        <div class="bg-white rounded-lg shadow p-8">

          <h2 class="text-2xl font-bold text-blue-900 mb-2">
            Send a Message
          </h2>

          <p class="text-gray-500 mb-6">
            Have a non-urgent question? Fill out the form below and our team will respond within 24–48 hours.
          </p>

          <form class="space-y-5">

            <div class="grid md:grid-cols-2 gap-5">

              <div>
                <label class="block text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  class="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label class="block text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  class="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                />
              </div>

            </div>

            <div>
              <label class="block text-gray-700 mb-2">
                Subject
              </label>

              <select
                class="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-700"
              >
                <option>Select Inquiry</option>
                <option>Appointment</option>
                <option>Emergency</option>
                <option>Medical Question</option>
                <option>Billing Support</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="How can we help you?"
                class="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-700"
              ></textarea>
            </div>

            <div class="flex items-center gap-2">
              <input type="checkbox" />
              <p class="text-sm text-gray-500">
                I agree to the privacy policy and consent to being contacted.
              </p>
            </div>

            <button
              type="submit"
              class="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-white border-t mt-10">
    <div class="grid md:grid-cols-4 gap-8 px-10 py-10">

      <div>
        <h2 class="text-blue-900 text-2xl font-bold mb-3">
          HealthPulse
        </h2>

        <p class="text-gray-600">
          Dedicated healthcare solutions and advanced medical innovation.
        </p>
      </div>

      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Quick Links
        </h3>

        <ul class="space-y-2 text-gray-600">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Support
        </h3>

        <ul class="space-y-2 text-gray-600">
          <li>Contact Us</li>
          <li>Patient Portal</li>
          <li>Help Center</li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Connect
        </h3>

        <div class="flex gap-4 text-2xl">
          <span>🌐</span>
          <span>📘</span>
          <span>📷</span>
        </div>
      </div>

    </div>

    <div class="border-t px-10 py-4 text-center text-gray-500 text-sm">
      © 2026 HealthPulse Medical Systems. Certified Healthcare Provider.
    </div>
  </footer>

</body>
</html>
   )
 }
 
 export default Contact
 