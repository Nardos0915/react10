import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row text-center">
          {/* Features Column */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Features</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Cool stuff</a></li>
              <li><a href="#" className="text-decoration-none">Random feature</a></li>
              <li><a href="#" className="text-decoration-none">Team feature</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Resource</a></li>
              <li><a href="#" className="text-decoration-none">Resource name</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">About</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Team</a></li>
              <li><a href="#" className="text-decoration-none">Locations</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-muted py-2">
        <small>© Company name, 2024</small>
      </div>
    </footer>
  );
}
