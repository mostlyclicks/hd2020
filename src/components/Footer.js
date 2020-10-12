import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="copyright">
        Hulse Dental
        <br />
        1840 East Main Street
        <br />
        Onalaska, WI 54650
        <br />
        <a href="tel:(608) 783-1306">(608) 783-1306</a><br />
        <a href="mailto:KurtHulseDental@gmail.com">KurtHulseDental@gmail.com</a>
      </ul>
    </footer>
  );
}
