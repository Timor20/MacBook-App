import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: 
          <a href="#" className="text-blue-500 underline"> Find an Apple Store</a> or 
          <a href="#" className="text-blue-500 underline"> other retailer</a> near you. Or call 
          <a href="#" className="text-blue-500 underline"> 1-800-MY-APPLE</a> (1-800-692-7753).
        </p>
        <img src="/logo.svg" alt ="Apple logo"/>
      </div>

      <hr />
      <div className="links">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

          <ul>
              {footerLinks.map(({ label, link }) => (
                  <li key={label}>
                      <a href={link}>{label}</a>
                  </li>
              ))}
          </ul>
      </div>
    </footer>
  )
}

export default Footer