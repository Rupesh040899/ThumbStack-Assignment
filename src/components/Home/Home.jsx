export default function Home() {
  return (
    <section className="w-full bg-[#E9FF6A]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <span className="font-semibold text-sm tracking-wide">APURA</span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:opacity-70">Products</a>
          <a href="#" className="hover:opacity-70">Road map</a>
          <a href="#" className="hover:opacity-70">Our mission</a>
          <a href="#" className="hover:opacity-70">For devs</a>
          <a href="#" className="hover:opacity-70">Contact us</a>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden text-xl">☰</button>
      </header>

      {/* Hero */}
      <div className="flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          By Europeans, for Europeans
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-black/80">
          Privacy and security that europeans need, demand and expect.
          Without giving other nations control over our data.
        </p>
      </div>

      {/* Feature Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 pb-24 max-w-7xl mx-auto text-left text-xs">
        <Feature
          title="No interference"
          description="No third-party interference"
        />
        <Feature
          title="1st cloud platform"
          description="To allow data control and ownership"
        />
        <Feature
          title="1st cloud infrastructure"
          description="To provide transparency over your data streams"
        />
        <Feature
          title="Dynamic infrastructure"
          description="Cloud, hybrid, or on-prem form"
        />
      </div>

      {/* CTA */}
      <div className="bg-white px-6 py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-xl font-semibold">
            Join the future of data sovereignty
          </h2>

          <div className="flex w-full md:w-auto border rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 flex-1 text-sm outline-none"
            />
            <button className="px-6 bg-black text-white text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}

function Feature({ title, description }) {
  return (
    <div>
      <div className="h-px w-10 bg-black mb-3" />
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-black/70">{description}</p>
    </div>
  );
}
