import * as React from "react";
import "./navbar.css"
import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "./image/Artboard 1@00x.png";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = {
"IT Services": [
{ name: "IT AMC", href: "/itamc" },
{ name: "IT Relocation", href: "/itrelocation" },
{ name: "IT Infrastructure", href: "/itinfrastructure" },
{ name: "IT Outsourcing", href: "/itoutsourcing" },
{ name: "IT Consultancy", href: "/itconsultancy" },
{ name: "Cloud Migration", href: "/cloudmigration" },
{ name: "ICT Solutions", href: "/ictsolutions" },
{ name: "New Office IT Setup", href: "/newofficeitsetup" },
],
"IT Infrastructure": [
{ name: "VPN Solutions", href: "/vpnsolutions" },
{ name: "Data Backup & Disaster Recovery", href: "/databackupdisasterrecoveryservices" },
{ name: "Firewall Installation", href: "/firewallinstallation" },
{ name: "Server Virtualization", href: "/servervirtualizationservices" },
{ name: "Office 365 Services", href: "/office365services" },
{ name: "IT Hardware Services", href: "/ithardwareservices" },
{ name: "Office Telephone System", href: "/officetelephonesystem" },
{ name: "Structure Cabling", href: "/structurecabling" },
],
"ELV & Security": [
{ name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
{ name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
{ name: "Telephone Solutions", href: "/telephonesolutions" },
{ name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
],
Outsourcing: [
{ name: "IT Outsourcing", href: "/itoutsourcing" },
{ name: "BPO Outsourcing", href: "/bpooutsourcing" },
],
Computer: [{ name: "Computer", href: "/computer" }],
};

export function MainNav() {
const pathname = useLocation();
const [isOpen, setIsOpen] = React.useState(false);

return (
<header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm"> {/* bg-white for white background */}
<div className="container flex h-16 items-center">
<Sheet open={isOpen} onOpenChange={setIsOpen}>
<SheetTrigger asChild>
<Button
variant="ghost"
className="mr-2 px-0 text-base hover:bg-white focus-visible:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
>
<Menu className="h-6 w-6" />
<span className="ml-2 text-xl font-bold text-gray-900 fixed left-1/2 transform -translate-x-1/2">
    <a href="/">
                <img src={logo} className="logo" alt="logo" />
              </a>
</span>
<span className="sr-only">Toggle menu</span>
</Button>
</SheetTrigger>
<SheetContent side="left" className="w-[300px] p-0 bg-white"> {/* bg-white for white background */}
<SheetHeader className="p-4 border-b">
<SheetTitle className="flex items-center">
<span className="h-6 w-6 rounded-lg bg-primary" />
<span className="ml-2 text-xl font-bold text-gray-900">
    <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          </span>
</SheetTitle>
</SheetHeader>
<div className="flex flex-col">
<Link
to="/"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/" && "bg-gray-100", /* Using gray-100 for active */
)}
>
HOME
</Link>
<Accordion type="single" collapsible className="w-full bg-white"> {/* bg-white for white background */}
{Object.entries(services).map(([category, items], index) => (
<AccordionItem value={`item-${index}`} key={category}>
<AccordionTrigger className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:no-underline">
{category}
</AccordionTrigger>
<AccordionContent className="pb-0">
<div className="bg-gray-50"> {/* bg-gray-50 or white */}
{items.map((item) => (
<NavLink
key={item.href}
to={item.href}
onClick={() => setIsOpen(false)}
className="block px-6 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-accent-foreground"
>
{item.name}
</NavLink>
))}
</div>
</AccordionContent>
</AccordionItem>
))}
</Accordion>
<Link
to="/about"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/about" && "bg-gray-100", /* Using gray-100 for active */
)}
>
ABOUT US
</Link>
<Link
to="/contact"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/contact" && "bg-gray-100", /* Using gray-100 for active */
)}
>
CONTACT US
</Link>
</div>
</SheetContent>
</Sheet>
<NavLink to="/" className="mr-6 hidden items-center md:flex">
<span className="h-6 w-6 rounded-lg bg-primary" />
<span className="ml-2 text-xl font-bold text-gray-900">
    <a href="/">
                <img src={logo} className="logo" alt="logo" />
              </a>
</span>
</NavLink>
<div className="hidden md:flex md:flex-1 ">
<NavigationMenu >
<NavigationMenuList >
<NavigationMenuItem >
<Link to="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
HOME
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<NavigationMenuTrigger className="m-auto">SERVICES</NavigationMenuTrigger>
<NavigationMenuContent className="bg-white m-auto">
<div className="grid w-[700px] grid-cols-5 lg-grid-cols-4 gap-3 p-4">
{Object.entries(services).map(([category, items]) => (
<div key={category} className="space-y-2">
<h4 className="text-sm font-medium leading-none text-black border-b-2 border-b-gray-900 pb-4">{category}</h4>
<hr className="my-2" />
<div className="grid gap-1">
{items.map((item) => (
<Link
key={item.href}
to={item.href}
className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-gray-100 focus:text-accent-foreground"
>
{item.name}
</Link>
))}
</div>
</div>
))}
</div>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/about" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
ABOUT US
</Link>
</NavigationMenuItem>
<NavigationMenuItem>
<Link to="/contact" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
CONTACT US
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