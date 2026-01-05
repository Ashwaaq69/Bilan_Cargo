function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p>
          © {new Date().getFullYear()} BILAN CARGO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
