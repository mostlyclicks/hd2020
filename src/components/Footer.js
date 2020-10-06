import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
    {/*
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      */}
      <ul className="copyright">
        <li>Hulse Dental</li>
        <li>1840 East Main Street</li>
        <li>Onalaska, WI 54650</li>
        <li>(608) 783-1306</li>
      </ul>
    </footer>
  );
}
