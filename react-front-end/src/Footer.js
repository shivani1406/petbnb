import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footerStyles">
        <div className="footer-copyright">
          <div className="container">
              © 2022 PetBnB
              <div className="grey-text text-lighten-4 right">
                <a className="grey-text text-lighten-3" href="/" target="_blank" style={{padding: "1em"}}><i className="fab fa-facebook"></i></a>
                <a className="grey-text text-lighten-3" href="/" target="_blank" style={{padding: "1em"}}><i className="fab fa-twitter"></i></a>
                <a className="grey-text text-lighten-3" href="/" target="_blank"style={{padding: "1em"}}><i className="fab fa-instagram"></i></a>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;