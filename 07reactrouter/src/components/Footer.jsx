import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <h1 className="text-3xl font-bold text-white">
              your<span className="text-orange-500">logo</span>
            </h1>

            <p className="mt-4 text-sm leading-7">
              Making React development easier with reusable
              components and modern UI.
            </p>
          </div>

          {/* Resources */}

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Resources
            </h2>

            <ul className="space-y-3">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/github">Github</Link>
              </li>

            </ul>
          </div>

          {/* Follow */}

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h2>

            <ul className="space-y-3">

              <li>Github</li>

              <li>LinkedIn</li>

              <li>Twitter</li>

              <li>Instagram</li>

            </ul>
          </div>

          {/* Legal */}

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Legal
            </h2>

            <ul className="space-y-3">

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

              <li>Cookies</li>

            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex justify-between items-center flex-col md:flex-row gap-4">

          <p className="text-sm">
            © 2026 Your Company. All Rights Reserved.
          </p>

          <p className="text-sm">
            Built using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;