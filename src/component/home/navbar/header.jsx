import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
Outsourcing: [
{ name: "IT Outsourcing", href: "/itoutsourcing" },
{ name: "BPO Outsourcing", href: "/bpooutsourcing" },
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
Computer: [{ name: "Computer", href: "/computer" }],
};

export function MainNav() {
const pathname = useLocation();
const [isOpen, setIsOpen] = React.useState(false);

return (
<header className="sticky top-0 z-50 w-full border-b bg-white"> {/* bg-white for white background */}
<div className="container flex h-16 items-center">
<Sheet open={isOpen} onOpenChange={setIsOpen}>
<SheetTrigger asChild>
<Button
variant="ghost"
className="mr-2 px-0 text-base hover:bg-white focus-visible:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
>
<Menu className="h-6 w-6" />
<span className="sr-only">Toggle menu</span>
</Button>
</SheetTrigger>
<SheetContent side="left" className="w-[300px] p-0 bg-white"> {/* bg-white for white background */}
<SheetHeader className="p-4 border-b">
<SheetTitle className="flex items-center">
<span className="h-6 w-6 rounded-lg bg-primary" />
<span className="ml-2 text-xl font-bold">Logo</span>
</SheetTitle>
</SheetHeader>
<div className="flex flex-col">
<NavLink
href="/"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/" && "bg-gray-100", /* Using gray-100 for active */
)}
>
HOME
</NavLink>
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
href={item.href}
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
<NavLink
href="/about"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/about" && "bg-gray-100", /* Using gray-100 for active */
)}
>
ABOUT US
</NavLink>
<NavLink
href="/contact"
onClick={() => setIsOpen(false)}
className={cn(
"px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100", /* Using gray-100 for hover */
pathname === "/contact" && "bg-gray-100", /* Using gray-100 for active */
)}
>
CONTACT US
</NavLink>
</div>
</SheetContent>
</Sheet>
<NavLink href="/" className="mr-6 hidden items-center md:flex">
<span className="h-6 w-6 rounded-lg bg-primary" />
<span className="ml-2 text-xl font-bold">Logo</span>
</NavLink>
<div className="hidden md:flex md:flex-1 ">
<NavigationMenu >
<NavigationMenuList >
<NavigationMenuItem >
<NavLink href="/" legacyBehavior passHref>
<NavigationMenuLink
className={cn(
"group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus: bg-gray-100 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-50 data-[state=open:bg-gray-50",
pathname === "/" && "bg-gray-50",
)}
>
HOME
</NavigationMenuLink>
</NavLink>
</NavigationMenuItem>
<NavigationMenuItem>
<NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
<NavigationMenuContent className="bg-white">
<div className="grid w-[800px] grid-cols-5 gap-3 p-4 ">
{Object.entries(services).map(([category, items]) => (
<div key={category} className="space-y-2">
<h4 className="text-sm font-medium leading-none text-black border-b-2 border-b-gray-900 pb-4">{category}</h4>
<hr className="my-2" />
<div className="grid gap-1">
{items.map((item) => (
<NavLink
key={item.href}
href={item.href}
className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-gray-100 focus:text-accent-foreground"
>
{item.name}
</NavLink>
))}
</div>
</div>
))}
</div>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem>
<NavLink href="/about" legacyBehavior passHref>
<NavigationMenuLink
className={cn(
"group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-50 data-[state=open]:bg-gray-50",
pathname === "/about" && "bg-gray-50",
)}
>
ABOUT US
</NavigationMenuLink>
</NavLink>
</NavigationMenuItem>
<NavigationMenuItem>
<NavLink href="/contact" legacyBehavior passHref>
<NavigationMenuLink
className={cn(
"group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-50 data-[state=open]:bg-gray-50",
pathname === "/contact" && "bg-gray-50",
)}
>
CONTACT US
</NavigationMenuLink>
</NavLink>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
</div>
</div>
</header>
);
}

export default MainNav;














// import * as React from "react"
// import { NavLink, useLocation } from "react-router-dom"
// import { Menu } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// const services = {
//   "IT Services": [
//     { name: "IT AMC", href: "/itamc" },
//     { name: "IT Relocation", href: "/itrelocation" },
//     { name: "IT Infrastructure", href: "/itinfrastructure" },
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "IT Consultancy", href: "/itconsultancy" },
//     { name: "Cloud Migration", href: "/cloudmigration" },
//     { name: "ICT Solutions", href: "/ictsolutions" },
//     { name: "New Office IT Setup", href: "/newofficeitsetup" },
//   ],
//   Outsourcing: [
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "BPO Outsourcing", href: "/bpooutsourcing" },
//   ],
//   "IT Infrastructure": [
//     { name: "VPN Solutions", href: "/vpnsolutions" },
//     { name: "Data Backup & Disaster Recovery", href: "/databackupdisasterrecoveryservices" },
//     { name: "Firewall Installation", href: "/firewallinstallation" },
//     { name: "Server Virtualization", href: "/servervirtualizationservices" },
//     { name: "Office 365 Services", href: "/office365services" },
//     { name: "IT Hardware Services", href: "/ithardwareservices" },
//     { name: "Office Telephone System", href: "/officetelephonesystem" },
//     { name: "Structure Cabling", href: "/structurecabling" },
//   ],
//   "ELV & Security": [
//     { name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
//     { name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
//     { name: "Telephone Solutions", href: "/telephonesolutions" },
//     { name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
//   ],
//   Computer: [{ name: "Computer", href: "/computer" }],
// }

// export function MainNav() {
//   const pathname = useLocation()
//   const [isOpen, setIsOpen] = React.useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 bg-white">
//       <div className="container flex h-16 items-center">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-white focus-visible:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] p-0">
//             <SheetHeader className="p-4 border-b">
//               <SheetTitle className="flex items-center">
//                 <span className="h-6 w-6 rounded-lg bg-primary" />
//                 <span className="ml-2 text-xl font-bold">Logo</span>
//               </SheetTitle>
//             </SheetHeader>
//             <div className="flex flex-col">
//               <NavLink
//                 href="/"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/" && "bg-accent",
//                 )}
//               >
//                 HOME
//               </NavLink>
//               <Accordion type="single" collapsible className="w-full bg-white">
//                 {Object.entries(services).map(([category, items], index) => (
//                   <AccordionItem value={`item-${index}`} key={category}>
//                     <AccordionTrigger className="px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline">
//                       {category}
//                     </AccordionTrigger>
//                     <AccordionContent className="pb-0">
//                       <div className="bg-muted/50">
//                         {items.map((item) => (
//                           <NavLink
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setIsOpen(false)}
//                             className="block px-6 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
//                           >
//                             {item.name}
//                           </NavLink>
//                         ))}
//                       </div>
//                     </AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//               <NavLink
//                 href="/about"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/about" && "bg-accent",
//                 )}
//               >
//                 ABOUT US
//               </NavLink>
//               <NavLink
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/contact" && "bg-accent",
//                 )}
//               >
//                 CONTACT US
//               </NavLink>
//             </div>
//           </SheetContent>
//         </Sheet>

//         <NavLink href="/" className="mr-6 hidden items-center md:flex">
//           <span className="h-6 w-6 rounded-lg bg-primary" />
//           <span className="ml-2 text-xl font-bold">Logo</span>
//         </NavLink>

//         <div className="hidden md:flex md:flex-1 ">
//           <NavigationMenu >
//             <NavigationMenuList >
//               <NavigationMenuItem >
//                 <NavLink href="/" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus: bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/" && "bg-accent/50",
//                     )}
//                   >
//                     HOME
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid w-[800px] grid-cols-5 gap-3 p-4">
//                     {Object.entries(services).map(([category, items]) => (
//                       <div key={category} className="space-y-2">
//                         <h4 className="text-sm font-medium leading-none">{category}</h4>
//                         <hr className="my-2" />
//                         <div className="grid gap-1">
//                           {items.map((item) => (
//                             <NavLink
//                               key={item.href}
//                               href={item.href}
//                               className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {item.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink href="/about" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/about" && "bg-accent/50",
//                     )}
//                   >
//                     ABOUT US
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink href="/contact" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/contact" && "bg-accent/50",
//                     )}
//                   >
//                     CONTACT US
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default MainNav;
























// import * as React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Import X for close icon
// import { useState } from "react"; // Import useState
// import { cn } from "@/lib/utils";

// const services = {
//   "IT Services": [
//     { name: "IT AMC", href: "/itamc" },
//     { name: "IT Relocation", href: "/itrelocation" },
//     { name: "IT Infrastructure", href: "/itinfrastructure" },
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "IT Consultancy", href: "/itconsultancy" },
//     { name: "Cloud Migration", href: "/cloudmigration" },
//     { name: "ICT Solutions", href: "/ictsolutions" },
//     { name: "New Office IT Setup", href: "/newofficeitsetup" },
//   ],
//   Outsourcing: [
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "BPO Outsourcing", href: "/bpooutsourcing" },
//   ],
//   "IT Infrastructure": [
//     { name: "VPN Solutions", href: "/vpnsolutions" },
//     { name: "Data Backup & Disaster Recovery", href: "/databackupdisasterrecoveryservices" },
//     { name: "Firewall Installation", href: "/firewallinstallation" },
//     { name: "Server Virtualization", href: "/servervirtualizationservices" },
//     { name: "Office 365 Services", href: "/office365services" },
//     { name: "IT Hardware Services", href: "/ithardwareservices" },
//     { name: "Office Telephone System", href: "/officetelephonesystem" },
//     { name: "Structure Cabling", href: "/structurecabling" },
//   ],
//   "ELV & Security": [
//     { name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
//     { name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
//     { name: "Telephone Solutions", href: "/telephonesolutions" },
//     { name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
//   ],
//   Computer: [{ name: "Computer", href: "/computer" }],
// };

// function MainNav() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false); // Use useState
//   const [openCategories, setOpenCategories] = useState([]); // Use useState

//   const toggleCategory = (category) => {
//     setOpenCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white text-gray-800">
//       <div className="container flex h-16 items-center justify-between px-4"> {/* Added justify-between and px-4 */}
//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           {isOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </button>

//         {/* Logo */}
//         <NavLink to="/" className="mr-6 flex items-center">
//           <span className="h-6 w-6 rounded-lg bg-primary" />
//           <span className="ml-2 text-lg font-bold">Logo</span>
//         </NavLink>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <NavLink
//             to="/"
//             className={cn(
//               "transition-colors hover:text-primary",
//               location.pathname === "/" ? "font-semibold text-primary" : "text-gray-500"
//             )}
//           >
//             Home
//           </NavLink>

//           {/* Services Dropdown */}
//           <div className="relative group">
//             <button className="transition-colors hover:text-primary focus:outline-none">
//               Services
//             </button>
//             <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
//               <div className="py-2">
//                 {Object.entries(services).map(([category, items]) => (
//                   <div key={category} className="mb-2">
//                     <h6 className="px-4 py-1 font-semibold text-gray-700">{category}</h6>
//                     {items.map((item) => (
//                       <NavLink
//                         key={item.href}
//                         to={item.href}
//                         className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-primary"
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <NavLink
//             to="/about"
//             className={cn(
//               "transition-colors hover:text-primary",
//               location.pathname === "/about" ? "font-semibold text-primary" : "text-gray-500"
//             )}
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={cn(
//               "transition-colors hover:text-primary",
//               location.pathname === "/contact" ? "font-semibold text-primary" : "text-gray-500"
//             )}
//           >
//             Contact Us
//           </NavLink>
//         </nav>

//         {/* Mobile Menu (Conditional Rendering) */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-10 py-2">
//             <div className="flex flex-col items-start px-4">
//               <NavLink
//                 to="/"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "block py-2 text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/" ? "text-primary" : "text-gray-500"
//                 )}
//               >
//                 Home
//               </NavLink>

//               {/* Mobile Services List */}
//               {Object.entries(services).map(([category, items]) => (
//                 <div key={category} className="mb-2">
//                   <h6 className="font-semibold text-gray-700">{category}</h6>
//                   {items.map((item) => (
//                     <NavLink
//                       key={item.href}
//                       to={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="block py-2 text-sm text-gray-500 hover:text-primary"
//                     >
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               ))}

//               <NavLink
//                 to="/about"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "block py-2 text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/about" ? "text-primary" : "text-gray-500"
//                 )}
//               >
//                 About Us
//               </NavLink>

//               <NavLink
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "block py-2 text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/contact" ? "text-primary" : "text-gray-500"
//                 )}
//               >
//                 Contact Us
//               </NavLink>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default MainNav;
























// import * as React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { Menu } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

// const services = {
//   "IT Services": [
//     { name: "IT AMC", href: "/itamc" },
//     { name: "IT Relocation", href: "/itrelocation" },
//     { name: "IT Infrastructure", href: "/itinfrastructure" },
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "IT Consultancy", href: "/itconsultancy" },
//     { name: "Cloud Migration", href: "/cloudmigration" },
//     { name: "ICT Solutions", href: "/ictsolutions" },
//     { name: "New Office IT Setup", href: "/newofficeitsetup" },
//   ],
//   Outsourcing: [
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "BPO Outsourcing", href: "/bpooutsourcing" },
//   ],
//   "IT Infrastructure": [
//     { name: "VPN Solutions", href: "/vpnsolutions" },
//     { name: "Data Backup & Disaster Recovery", href: "/databackupdisasterrecoveryservices" },
//     { name: "Firewall Installation", href: "/firewallinstallation" },
//     { name: "Server Virtualization", href: "/servervirtualizationservices" },
//     { name: "Office 365 Services", href: "/office365services" },
//     { name: "IT Hardware Services", href: "/ithardwareservices" },
//     { name: "Office Telephone System", href: "/officetelephonesystem" },
//     { name: "Structure Cabling", href: "/structurecabling" },
//   ],
//   "ELV & Security": [
//     { name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
//     { name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
//     { name: "Telephone Solutions", href: "/telephonesolutions" },
//     { name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
//   ],
//   Computer: [{ name: "Computer", href: "/computer" }],
// };

// function MainNav() {
//   const location = useLocation(); // Use useLocation from react-router-dom
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [openCategories, setOpenCategories] = React.useState([]);

//   const toggleCategory = (category) => {
//     setOpenCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background">
//       <div className="container flex h-16 items-center">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] pr-0">
//             <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
//               <span className="h-6 w-6 rounded-lg bg-primary" />
//               <span className="ml-2 text-lg font-bold">Logo</span>
//             </NavLink>
//             <div className="mt-8 flex flex-col gap-4">
//               <NavLink
//                 to="/"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/" ? "text-primary" : "text-muted-foreground"
//                 )}
//               >
//                 Home
//               </NavLink>
//               {Object.entries(services).map(([category, items]) => (
//                 <Collapsible
//                   key={category}
//                   open={openCategories.includes(category)}
//                   onOpenChange={() => toggleCategory(category)}
//                 >
//                   <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-muted-foreground hover:text-primary">
//                     {category}
//                     <svg
//                       className={cn(
//                         "h-4 w-4 transition-transform duration-200",
//                         openCategories.includes(category) ? "rotate-180" : ""
//                       )}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="mt-2 space-y-2 pl-4">
//                     {items.map((item) => (
//                       <NavLink
//                         key={item.href}
//                         to={item.href}
//                         onClick={() => setIsOpen(false)}
//                         className="block text-sm text-muted-foreground transition-colors hover:text-primary"
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </CollapsibleContent>
//                 </Collapsible>
//               ))}
//               <NavLink
//                 to="/about"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
//                 )}
//               >
//                 About Us
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
//                 )}
//               >
//                 Contact Us
//               </NavLink>
//             </div>
//           </SheetContent>
//         </Sheet>
//         <NavLink to="/" className="mr-6 hidden md:flex md:items-center">
//           <span className="h-6 w-6 rounded-lg bg-primary" />
//           <span className="ml-2 text-lg font-bold">Logo</span>
//         </NavLink>
//         <div className="flex flex-1 items-center justify-between">
//           <NavigationMenu className="hidden md:flex">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavLink to="/" >
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       location.pathname === "/" && "bg-accent/50"
//                     )}
//                   >
//                     Home
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid w-[850px] grid-cols-2 gap-3 p-4">
//                     {Object.entries(services).map(([category, items]) => (
//                       <div key={category} className="space-y-2">
//                         <h4 className="font-medium leading-none">{category}</h4>
//                         <div className="grid gap-1">
//                           {items.map((item) => (
//                             <NavLink
//                               key={item.href}
//                               to={item.href}
//                               className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {item.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink to="/about">
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       location.pathname === "/about" && "bg-accent/50"
//                     )}
//                   >
//                     About Us
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink to="/contact">
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       location.pathname === "/contact" && "bg-accent/50"
//                     )}
//                   >
//                     Contact Us
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default MainNav;














// import * as React from "react"
// import { NavLink } from "react-router-dom"
// import { usePathname } from "next/navigation"
// import { Menu } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// const services = {
//   "IT Services": [
//     { name: "IT AMC", href: "/itamc" },
//     { name: "IT Relocation", href: "/itrelocation" },
//     { name: "IT Infrastructure", href: "/itinfrastructure" },
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "IT Consultancy", href: "/itconsultancy" },
//     { name: "Cloud Migration", href: "/cloudmigration" },
//     { name: "ICT Solutions", href: "/ictsolutions" },
//     { name: "New Office IT Setup", href: "/newofficeitsetup" },
//   ],
//   Outsourcing: [
//     { name: "IT Outsourcing", href: "/itoutsourcing" },
//     { name: "BPO Outsourcing", href: "/bpooutsourcing" },
//   ],
//   "IT Infrastructure": [
//     { name: "VPN Solutions", href: "/vpnsolutions" },
//     { name: "Data Backup & Disaster Recovery", href: "/databackupdisasterrecoveryservices" },
//     { name: "Firewall Installation", href: "/firewallinstallation" },
//     { name: "Server Virtualization", href: "/servervirtualizationservices" },
//     { name: "Office 365 Services", href: "/office365services" },
//     { name: "IT Hardware Services", href: "/ithardwareservices" },
//     { name: "Office Telephone System", href: "/officetelephonesystem" },
//     { name: "Structure Cabling", href: "/structurecabling" },
//   ],
//   "ELV & Security": [
//     { name: "CCTV Installation Dubai", href: "/cctvinstallationdubai" },
//     { name: "Access Control & Time Attendance", href: "/accesscontroltimeattendance" },
//     { name: "Telephone Solutions", href: "/telephonesolutions" },
//     { name: "SIRA Approved CCTV Installation", href: "/siraapprovedcctvinstallation" },
//   ],
//   Computer: [{ name: "Computer", href: "/computer" }],
// }

// function MainNav() {
//   const pathname = usePathname()
//   const [isOpen, setIsOpen] = React.useState(false)
//   const [openCategories, setOpenCategories] = React.useState<string[]>([])

//   const toggleCategory = (category: string) => {
//     setOpenCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
//   }

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background">
//       <div className="container flex h-16 items-center">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] pr-0">
//             <NavLink href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
//               <span className="h-6 w-6 rounded-lg bg-primary" />
//               <span className="ml-2 text-lg font-bold">Logo</span>
//             </NavLink>
//             <div className="mt-8 flex flex-col gap-4">
//               <NavLink
//                 href="/"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   pathname === "/" ? "text-primary" : "text-muted-foreground",
//                 )}
//               >
//                 Home
//               </NavLink>
//               {Object.entries(services).map(([category, items]) => (
//                 <Collapsible
//                   key={category}
//                   open={openCategories.includes(category)}
//                   onOpenChange={() => toggleCategory(category)}
//                 >
//                   <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-muted-foreground hover:text-primary">
//                     {category}
//                     <svg
//                       className={cn(
//                         "h-4 w-4 transition-transform duration-200",
//                         openCategories.includes(category) ? "rotate-180" : "",
//                       )}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="mt-2 space-y-2 pl-4">
//                     {items.map((item) => (
//                       <NavLink
//                         key={item.href}
//                         href={item.href}
//                         onClick={() => setIsOpen(false)}
//                         className="block text-sm text-muted-foreground transition-colors hover:text-primary"
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </CollapsibleContent>
//                 </Collapsible>
//               ))}
//               <NavLink
//                 href="/about"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   pathname === "/about" ? "text-primary" : "text-muted-foreground",
//                 )}
//               >
//                 About Us
//               </NavLink>
//               <NavLink
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-lg font-semibold transition-colors hover:text-primary",
//                   pathname === "/contact" ? "text-primary" : "text-muted-foreground",
//                 )}
//               >
//                 Contact Us
//               </NavLink>
//             </div>
//           </SheetContent>
//         </Sheet>

//         <NavLink href="/" className="mr-6 hidden md:flex md:items-center">
//           <span className="h-6 w-6 rounded-lg bg-primary" />
//           <span className="ml-2 text-lg font-bold">Logo</span>
//         </NavLink>

//         <div className="flex flex-1 items-center justify-between">
//           <NavigationMenu className="hidden md:flex">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavLink href="/" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/" && "bg-accent/50",
//                     )}
//                   >
//                     Home
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid w-[850px] grid-cols-2 gap-3 p-4">
//                     {Object.entries(services).map(([category, items]) => (
//                       <div key={category} className="space-y-2">
//                         <h4 className="font-medium leading-none">{category}</h4>
//                         <div className="grid gap-1">
//                           {items.map((item) => (
//                             <NavLink
//                               key={item.href}
//                               href={item.href}
//                               className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {item.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink href="/about" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/about" && "bg-accent/50",
//                     )}
//                   >
//                     About Us
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavLink href="/contact" legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                       pathname === "/contact" && "bg-accent/50",
//                     )}
//                   >
//                     Contact Us
//                   </NavigationMenuLink>
//                 </NavLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>
//     </header>
//   )
// }


// export default MainNav;





























// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { MenuIcon, XIcon } from '@heroicons/react/solid';
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const activeClassName = 'text-blue-600 border-b-2 border-blue-600';

//   return (
//     <nav className="bg-white text-gray-800 py-4 relative shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo / Brand */}
//         <NavLink to="/" className="text-xl font-bold text-gray-900">
//           My Awesome Site
//         </NavLink>

//         {/* Mobile Menu Button (Hamburger Icon) */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <MenuIcon className="h-6 w-6 text-gray-800" aria-hidden="true" /> {/* Hamburger Icon: Dark */}
//                 <span className="sr-only">Open Menu</span>
//               </Button>
//             </SheetTrigger>
//             {/* Apply background here! */}
//             <SheetContent side="right" className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-50">
//               <SheetHeader>
//                 <SheetTitle className="text-gray-900">Menu</SheetTitle>
//                 <SheetDescription className="text-gray-600">
//                   Navigate through our site.
//                 </SheetDescription>
//               </SheetHeader>

//               <div className="flex flex-col space-y-2">
//                 <NavLink to="/" className={({ isActive }) => cn("block py-2 hover:text-gray-700", isActive ? activeClassName : 'text-gray-800')}>
//                   Home
//                 </NavLink>
//                 <NavLink to="/about" className={({ isActive }) => cn("block py-2 hover:text-gray-700", isActive ? activeClassName : 'text-gray-800')}>
//                   About
//                 </NavLink>
//                 {/* ... other NavLinks */}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
//           {/* ... desktop NavLinks */}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



























// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { MenuIcon, XIcon } from '@heroicons/react/solid';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const activeClassName = 'text-blue-300 border-b-2 border-blue-300';

//   return (
//     <nav className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo / Brand */}
//         <NavLink to="/" className="text-xl font-bold">
//           My Awesome Site
//         </NavLink>

//         {/* Mobile Menu Button (Hamburger Icon) */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-white">
//             {isOpen ? (
//               <XIcon className="h-6 w-6" aria-hidden="true" />
//             ) : (
//               <MenuIcon className="h-6 w-6" aria-hidden="true" />
//             )}
//           </button>
//         </div>

//         {/* Navigation Links (Hidden on small screens initially) */}
//         <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
//           <NavLink
//             to="/"
//             className={({ isActive }) => `hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => `hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className={({ isActive }) => `hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => `hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Contact
//           </NavLink>
//           {/* Optional: Login/Signup Buttons */}
//           <NavLink
//             to="/login"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/signup"
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Sign Up
//           </NavLink>
//         </div>
//       </div>

//       {/* Mobile Menu (Conditional Rendering) */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-700 py-2 px-4 w-3/10 absolute top-full right-0 z-10">  {/* Added w-3/10 and positioning */}
//           <NavLink
//             to="/"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/login"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/signup"
//             className={({ isActive }) => `block py-2 hover:text-gray-300 ${isActive ? activeClassName : ''}`}
//           >
//             Sign Up
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;












































// import * as React from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { ChevronDown, ChevronRight, Laptop, Menu, Phone, ShoppingCart, Tv, User, Watch } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import { cn } from "@/lib/utils"

// const categories = [
//   {
//     name: "Laptops",
//     href: "/category/laptops",
//     icon: Laptop,
//     description: "Powerful laptops for work and play",
//   },
//   {
//     name: "Smartphones",
//     href: "/category/smartphones",
//     icon: Phone,
//     description: "Latest smartphones and accessories",
//   },
//   {
//     name: "TVs",
//     href: "/category/tvs",
//     icon: Tv,
//     description: "Smart TVs and home entertainment",
//   },
//   {
//     name: "Watches",
//     href: "/category/watches",
//     icon: Watch,
//     description: "Smart watches and fitness trackers",
//   },
// ]

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Shop", href: "/shop" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ]

// function SiteHeader() {
//   const pathname = usePathname()
//   const [isOpen, setIsOpen] = React.useState(false)
//   const [isCategoryOpen, setIsCategoryOpen] = React.useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background">
//       <div className="container flex h-16 items-center">
//         <div className="hidden md:block">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <span className="h-6 w-6 rounded-lg bg-primary" />
//             <span className="text-xl font-bold">Store</span>
//           </Link>
//         </div>

//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle Menu</span>
//             </Button>
//           </SheetTrigger>

//           <SheetContent side="left" className="w-[300px] pr-0">
//             <SheetHeader className="px-1">
//               <SheetTitle className="flex items-center text-lg font-bold">
//                 <span className="h-6 w-6 rounded-lg bg-primary" />
//                 <span className="ml-2">Store</span>
//               </SheetTitle>
//             </SheetHeader>
//             <div className="mt-8 space-y-4 px-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={cn(
//                     "block text-lg font-semibold transition-colors hover:text-primary",
//                     pathname === item.href
//                       ? "text-primary"
//                       : "text-muted-foreground"
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Collapsible open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
//                 <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-muted-foreground hover:text-primary">
//                   Categories
//                   <ChevronRight className={cn(
//                     "h-4 w-4 transition-transform duration-200",
//                     isCategoryOpen && "rotate-90"
//                   )} />
//                 </CollapsibleTrigger>
//                 <CollapsibleContent className="mt-1 space-y-2">
//                   {categories.map((category) => {
//                     const Icon = category.icon
//                     return (
//                       <Link
//                         key={category.href}
//                         href={category.href}
//                         onClick={() => setIsOpen(false)}
//                         className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
//                       >
//                         <Icon className="h-5 w-5" />
//                         <span>{category.name}</span>
//                       </Link>
//                     )
//                   })}
//                 </CollapsibleContent>
//               </Collapsible>
//             </div>
//           </SheetContent>
//         </Sheet>

//         <nav className="hidden md:ml-6 md:flex md:flex-1 md:items-center md:gap-6 md:text-sm">
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 "transition-colors hover:text-primary",
//                 pathname === item.href
//                   ? "font-semibold text-primary"
//                   : "text-muted-foreground"
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="ghost"
//                 className="group -ml-2 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
//               >
//                 Categories
//                 <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[240px] p-2">
//               <div className="grid gap-1">
//                 {categories.map((category) => {
//                   const Icon = category.icon
//                   return (
//                     <Link
//                       key={category.href}
//                       href={category.href}
//                       className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
//                     >
//                       <Icon className="h-5 w-5" />
//                       <div className="flex flex-col gap-0.5">
//                         <span className="font-medium text-foreground">
//                           {category.name}
//                         </span>
//                         <span className="text-xs">
//                           {category.description}
//                         </span>
//                       </div>
//                     </Link>
//                   )
//                 })}
//               </div>
//             </PopoverContent>
//           </Popover>
//         </nav>

//         <div className="flex flex-1 items-center justify-center md:hidden">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="h-6 w-6 rounded-lg bg-primary" />
//             <span className="text-xl font-bold">Store</span>
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon" className="shrink-0">
//             <ShoppingCart className="h-5 w-5" />
//             <span className="sr-only">Shopping Cart</span>
//           </Button>
//           <Button variant="ghost" size="icon" className="shrink-0">
//             <User className="h-5 w-5" />
//             <span className="sr-only">User Account</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }
// export default SiteHeader;