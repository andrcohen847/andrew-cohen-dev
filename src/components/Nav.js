import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => {
                onMenuToggle();
              }}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => {
                onMenuToggle();
              }}>
                <a href="#projects">Projects</a>
              </li>
            <li>
            <a href="http://andrew-b-cohen.com/" target="_blank">Media & Event Portfolio</a>
          </li>
          <li onClick={() => {
            onMenuToggle();
          }}>
            <a href="#contact">Contact</a>
          </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
