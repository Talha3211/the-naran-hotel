import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] h-full gap-6 md:gap-12 px-4 sm:px-8">
      {/* Sidebar Navigation */}
      <SideNavigation />

      {/* Main content */}
      <div className="py-4 md:py-1">{children}</div>
    </div>
  );
}
