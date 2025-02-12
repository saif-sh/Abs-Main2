import React from 'react';

const Header = () => (
  <header className="text-center mb-12">
    {/* Subtitle */}
    <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
      Inc. This Morning
    </h2>

    {/* Main Title */}
    <h1 className="text-5xl font-bold text-black mt-4 mb-6">
      <span className="text-gray-400">&ldquo;</span> Blog{' '}
      <span className="text-gray-400">&rdquo;</span>
    </h1>

    {/* Description */}
    <p className="text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
      Awesome place to make oneself productive and entertained through daily
      updates.
    </p>
  </header>
);

export default Header;