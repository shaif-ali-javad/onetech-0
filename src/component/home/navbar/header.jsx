import * as React from "react";
import "./navbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "./image/Artboard 1@00x.png";

import {
  Menu,
  Server,
  ShieldCheck,
  Users,
  Monitor,
  Cpu,
  ChevronRight,
  Headphones,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// DATA STRUCTURE
const services = {
  "IT Services": {
    icon: Monitor,
    items: [
      { name: "IT AMC", href: "/itamc" },
      { name: "IT Relocation", href: "/itrelocation" },
      { name: "IT Infrastructure", href: "/itinfrastructure" },
      { name: "IT Outsourcing", href: "/itoutsourcing" },
      { name: "IT Consultancy", href: "/itconsultancy" },
      { name: "Cloud Migration", href: "/cloudmigration" },
      { name: "ICT Solutions", href: "/ictsolutions" },
      { name: "New Office IT Setup", href: "/newofficeitsetup" },
    ],
  },
  "IT Infrastructure": {
    icon: Server,
    items: [
      { name: "VPN Solutions", href: "/vpnsolutions" },
      { name: "Data Backup & Recovery", href: "/databackupdisasterrecoveryservices" },
      { name: "Firewall Installation", href: "/firewallinstallation" },
      { name: "Server Virtualization", href: "/servervirtualizationservices" },
      { name: "Office 365 Services", href: "/office365services" },
      { name: "IT Hardware Services", href: "/ithardwareservices" },
      { name: "Office Telephone System", href: "/officetelephonesystem" },
      { name: "Structure Cabling", href: "/structurecabling" },
    ],
  },
  "ELV & Security": {
    icon: ShieldCheck,
    items: [
      { name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
      { name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
      { name: "Telephone Solutions", href: "/telephonesolutions" },
      { name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
    ],
  },
  Outsourcing: {
    icon: Users,
    items: [
      { name: "IT Outsourcing", href: "/itoutsourcing" },
      { name: "BPO Outsourcing", href: "/bpooutsourcing" },
    ],
  },
  Computer: {
    icon: Cpu,
    items: [
      { name: "Computer", href: "/computer" },
    ],
  },
};

// Helper function to get all service paths
const getAllServicePaths = () => {
  const paths = [];
  Object.values(services).forEach((category) => {
    category.items.forEach((item) => {
      paths.push(item.href);
    });
  });
  return paths;
};

export function MainNav() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  // Check if current path is a service page
  const allServicePaths = getAllServicePaths();
  const isServiceActive = allServicePaths.includes(pathname);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        
        {/* === MOBILE MENU === */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden p-2">
              <Menu className="h-6 w-6 text-gray-900" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white p-0 overflow-y-auto">
            <SheetHeader className="sticky top-0 z-10 bg-white p-4 border-b">
              <SheetTitle>
                <img src={logo} className="h-8 w-auto object-contain" alt="logo" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-2">
              {/* Mobile HOME */}
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "px-4 py-3 font-medium hover:bg-gray-100 text-gray-900 border-l-4 border-transparent",
                  pathname === "/" && "text-blue-900 border-l-blue-900 bg-blue-50"
                )}
              >
                HOME
              </Link>

              {/* Mobile Services Accordion */}
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(services).map(([category, data], index) => {
                  const IconComponent = data.icon;
                  // Check if any item in this category is active
                  const isCategoryActive = data.items.some(item => item.href === pathname);
                  return (
                    <AccordionItem value={`item-${index}`} key={category} className="border-0">
                      <AccordionTrigger 
                        className={cn(
                          "px-4 py-3 hover:bg-gray-100 hover:no-underline text-gray-900 border-l-4 border-transparent",
                          isCategoryActive && "text-blue-900 border-l-blue-900 bg-blue-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-4 w-4 text-blue-900" />
                          <span className="text-sm">{category}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="bg-gray-50 py-2">
                          {data.items.map((item) => (
                            <NavLink
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block pl-12 pr-4 py-2.5 text-sm hover:bg-gray-100 text-gray-700 transition-all border-l-4 border-transparent",
                                pathname === item.href && "text-blue-900 border-l-blue-900 bg-blue-50 font-medium"
                              )}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>

              {/* Mobile ABOUT */}
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "px-4 py-3 font-medium hover:bg-gray-100 text-gray-900 border-l-4 border-transparent",
                  pathname === "/about" && "text-blue-900 border-l-blue-900 bg-blue-50"
                )}
              >
                ABOUT US
              </Link>

              {/* Mobile CONTACT */}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "px-4 py-3 font-medium hover:bg-gray-100 text-gray-900 border-l-4 border-transparent",
                  pathname === "/contact" && "text-blue-900 border-l-blue-900 bg-blue-50"
                )}
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile CTA */}
            {/* <div className="p-4 border-t mt-4">
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                <Headphones className="mr-2 h-4 w-4 text-white" /><a href="" className="text-white">Contact Support</a> 
              </Button>
            </div> */}
          </SheetContent>
        </Sheet>

        {/* === LOGO (Mobile Center) === */}
        <Link to="/" className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} className="h-8 w-auto object-contain" alt="logo" />
        </Link>

        {/* === LOGO (Desktop) === */}
        <Link to="/" className="hidden lg:flex items-center mr-8">
          <img src={logo} className="h-10 w-auto object-contain" alt="logo" />
        </Link>

        {/* === DESKTOP NAVIGATION === */}
        <div className="hidden lg:flex flex-1 items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              {/* HOME - with bottom line */}
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-900",
                    pathname === "/" ? "text-blue-900" : "text-gray-900"
                  )}
                >
                  HOME
                  {/* Bottom Line */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300",
                      pathname === "/" ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </NavigationMenuItem>

              {/* SERVICES - with bottom line when any service is active */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "relative text-gray-900 font-medium bg-transparent hover:bg-transparent hover:text-blue-900 data-[state=open]:bg-transparent data-[state=open]:text-blue-900",
                    isServiceActive && "text-blue-900"
                  )}
                >
                  SERVICES
                  {/* Bottom Line - shows when any service page is active */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300",
                      isServiceActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </NavigationMenuTrigger>

                {/* ========== MEGA MENU DROPDOWN ========== */}
                <NavigationMenuContent>
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    
                    {/* Header */}
                    <div className="bg-blue-900 px-4 py-3">
                      <h3 className="text-white font-bold text-base">Our Services</h3>
                      <p className="text-blue-200 text-xs">Comprehensive IT solutions for your business</p>
                    </div>

                    {/* Services Grid - Responsive */}
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 p-4 max-h-[70vh] overflow-y-auto w-[500px] lg:w-[700px] xl:w-[900px]">
                      {Object.entries(services).map(([category, data]) => {
                        const IconComponent = data.icon;
                        // Check if any item in this category is active
                        const isCategoryActive = data.items.some(item => item.href === pathname);
                        
                        return (
                          <div key={category} className="space-y-2">
                            {/* Category Header - highlighted if active */}
                            <div 
                              className={cn(
                                "flex items-center gap-2 pb-2 border-b-2",
                                isCategoryActive ? "border-blue-900" : "border-gray-200"
                              )}
                            >
                              <IconComponent 
                                className={cn(
                                  "h-4 w-4 flex-shrink-0",
                                  isCategoryActive ? "text-blue-900" : "text-blue-900"
                                )} 
                              />
                              <h4 
                                className={cn(
                                  "font-bold text-xs uppercase tracking-wide truncate",
                                  isCategoryActive ? "text-blue-900" : "text-gray-900"
                                )}
                              >
                                {category}
                              </h4>
                            </div>

                            {/* All Links */}
                            <ul className="space-y-0.5">
                              {data.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "group relative flex items-center justify-between px-2 py-1.5 rounded text-xs transition-all",
                                      "text-gray-600 hover:text-blue-900 hover:bg-gray-50",
                                      pathname === item.href && "text-blue-900 font-medium bg-blue-50"
                                    )}
                                  >
                                    <span className="truncate">{item.name}</span>
                                    <ChevronRight className="h-3 w-3 opacity-0 flex-shrink-0 transition-all group-hover:opacity-100 text-blue-900" />
                                    
                                    {/* Bottom line for active item */}
                                    <span 
                                      className={cn(
                                        "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300",
                                        pathname === item.href ? "scale-x-100" : "scale-x-0"
                                      )}
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <p className="text-xs text-gray-600">
                        Need help choosing the right service?
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-xs font-medium text-blue-900 hover:text-blue-700"
                      >
                        <Headphones className="h-3 w-3" />
                        Talk to our experts
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ABOUT US - with bottom line */}
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-900",
                    pathname === "/about" ? "text-blue-900" : "text-gray-900"
                  )}
                >
                  ABOUT US
                  {/* Bottom Line */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300",
                      pathname === "/about" ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </NavigationMenuItem>

              {/* CONTACT US - with bottom line */}
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-900",
                    pathname === "/contact" ? "text-blue-900" : "text-gray-900"
                  )}
                >
                  CONTACT US
                  {/* Bottom Line */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300",
                      pathname === "/contact" ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

      </div>
    </header>
  );
}

export default MainNav;