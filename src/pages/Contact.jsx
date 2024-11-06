import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className="contact-container ">
            <Helmet>
        <title>contact - Gadget Heaven</title>
        <meta name="description" content="Discover the latest in tech accessories on Gadget Heaven!" />
      </Helmet>
        <h1 className="text-center text-2xl text-white font-bold mb-4 min-h-[200px] bg-purple-500">Contact Us
            <br></br>
            <br></br>
            Please choose the following methods to contact us:
        </h1>

        <div className="contact-methods">
            

            <div className="email-section">
                <h2 className="font-semibold text-xl mt-4">Email:</h2>
                <p>If you have any questions, please feel free to contact us at support@abcdef.com. We will reply to emails within 24 hours due to the time difference.</p>
            </div>

            <div className="live-chat-section mt-6">
                <h2 className="font-semibold text-xl">Live Chat:</h2>
                <p>Please click the icon at the bottom-right corner to chat with the customer service team:</p>
                <ul>
                    <li><strong>Online:</strong> Have a talk with our customer service team directly; any questions will be answered instantly.</li>
                    <li><strong>Offline:</strong> Leave a message with your email address when we are offline, and check your response in your mailbox a few hours later.</li>
                </ul>
                <p><strong>Online Time (Monday - Friday):</strong></p>
                <ul>
                    <li>9:30AM - 1:30AM (Beijing / Hong Kong Time, GMT+8)</li>
                    <li>3:30AM - 7:30PM (Europe / Paris Time, GMT +2)</li>
                    <li>6:30PM - 10:30AM (North America Time, PDT)</li>
                </ul>
            </div>

            <div className="tips-section mt-6">
                <h2 className="font-semibold text-xl">Tips:</h2>
                <ul>
                    <li>Sometimes, our reply email may go to your spam/promotional mailbox. Please check it and add <strong>support@abcdef.com</strong> to the whitelist.</li>
                    <li>The Live Chat Team doesn't work on weekends. Please try to contact us via email so that you get a response early.</li>
                    <li>The Shipping Team doesn't work on weekends. If you place an order over the weekend, your order will be shipped out on Monday.</li>
     
                </ul>
            </div>
        </div>
    </div>
);
};

export default Contact;