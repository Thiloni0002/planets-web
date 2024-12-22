"use client";
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HomePage = () => {
  return (
    <div className="banner">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link href="/planet" className="nav-link">About planets</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home-header">
        <div className="banner-text">
          <p>PlanetTech</p>
          <p>
            Explore, learn, and innovate<br /> in the world of technology and digital culture
          </p>
          <button className="btn btn-primary" onClick={() => console.log('Learn more clicked')}>Learn more</button>
        </div>
      </div>

      <style>{`
        .home-header {
          background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/image1.jpg');
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default HomePage;