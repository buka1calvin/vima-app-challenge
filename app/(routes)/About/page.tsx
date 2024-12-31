import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen text-center w-full py-8 md:px-20 px-4 h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to our blog! We are passionate about sharing insightful and engaging content that inspires, educates, and entertains our readers. Our mission is to create a platform where ideas, stories, and knowledge come together to make a difference.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          We aim to become a trusted resource for valuable information, thought-provoking discussions, and creative inspiration. Whether you're here to learn, explore, or connect, we strive to provide content that resonates with you.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join Us</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Become a part of our growing community by subscribing to our newsletter, engaging with our posts, and sharing your thoughts. Together, let's make this platform a hub for creativity, learning, and connection.
        </p>
    </main>
  );
};

export default AboutPage;
