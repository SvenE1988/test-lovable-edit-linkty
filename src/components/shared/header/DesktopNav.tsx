import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mic, PenTool, Shield } from "lucide-react";
import { navigation, NavItem } from "../../../data/content/shared";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";

// Icon Map for Dropdowns
const iconMap: Record<string, React.ReactNode> = {
  Phone: <Mic className="h-5 w-5" />,
  PenTool: <PenTool className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
};

/**
 * DesktopNav - Reusable Desktop Navigation Component
 * All links use brand-teal for highlights
 * Voice and Content are flat links with hover tooltips
 */
const DesktopNav = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Helper to check active state (including children)
  const isActive = (item: NavItem) => {
    if (item.href && location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => child.href && location.pathname === child.href);
    }
    return false;
  };

  return (
    <div className="hidden flex-1 justify-start lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {navigation.links.map((link) => (
            <NavigationMenuItem key={link.label}>
              {link.children ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent text-brand-dark hover:bg-transparent hover:text-brand-teal focus:bg-transparent focus:text-brand-teal data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-brand-teal",
                      isActive(link) && "font-bold text-brand-teal"
                    )}
                  >
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="bg-brand-dark/95 grid w-[400px] gap-3 rounded-xl border border-white/10 p-4 shadow-xl backdrop-blur-md md:w-[500px] md:grid-cols-1">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={child.href || "#"}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5"
                            >
                              <div className="flex items-center gap-3">
                                <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-brand-teal transition-colors group-hover:text-brand-teal">
                                  {child.icon && iconMap[child.icon]}
                                </div>
                                <div>
                                  <div className="mb-1 text-sm font-medium leading-none text-white transition-colors group-hover:text-brand-teal">
                                    {child.label}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-white/60 group-hover:text-white/80">
                                    {child.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem(link.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href || "#"}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-brand-teal focus:bg-transparent focus:text-brand-teal focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        "flex flex-col items-start py-2"
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors",
                          isActive(link)
                            ? "font-bold text-brand-teal"
                            : "text-brand-dark hover:text-brand-teal"
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                  {/* Hover Description Tooltip */}
                  {link.description && hoveredItem === link.label && (
                    <div className="border-brand-dark/10 absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border bg-white p-3 shadow-lg">
                      <p className="text-brand-dark/70 text-xs leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
