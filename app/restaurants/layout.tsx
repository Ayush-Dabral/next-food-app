import Navbar from "@/components/Navbar";

export default function RestaurantLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      {children}
    </div>
  );
}
