import ServiceCard from "./utilitys/serviceCard";

export default function Service() {
  return (
    <div className="relative bg-linear-to-l from-secondary/10 to-background text-text py-24 sm:py-32 lg:py-40">
      <section className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Creative Design Solution
          </h1>
          <p className="text-sm sm:text-base text-text/80">
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid gap-6
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-3
                     xl:grid-cols-5"
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
    </div>
  );
}
