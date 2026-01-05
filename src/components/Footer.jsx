function Footer() {
  return (
    <footer className="bg-blue-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p>
          © {new Date().getFullYear()} BILAN CARGO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
