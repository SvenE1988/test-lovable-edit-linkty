import { Link, useLocation, useNavigate } from "react-router-dom";

export const SmartLink = ({
  to,
  children,
  className,
  onClick,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
} & React.ComponentPropsWithoutRef<typeof Link> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);

    // If it's an external link
    if (to.startsWith("http")) return;

    // Handle hash links
    if (to.includes("#")) {
      e.preventDefault();

      const [targetPath, targetHash] = to.split("#");
      const hash = `#${targetHash}`;

      // Determine if we are on the target page
      // If targetPath is empty string (e.g. "#demo"), implies current page OR root?
      // Convention: "#demo" usually means "on this page" or "on homepage".
      // Let's assume "#demo" means "section on homepage" if we are in this project context.
      // But for generic usage:
      // If `to` is just "#demo", treat as homepage section if we are on global nav context.

      const effectiveTargetPath = targetPath || "/";
      const isOnTargetPage = location.pathname === effectiveTargetPath;

      if (isOnTargetPage) {
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Optionally update URL hash without jump
          window.history.pushState(null, "", hash);
        }
      } else {
        // Navigate to target page with hash
        navigate(`${effectiveTargetPath}${hash}`);
      }
    }
    // Standard links handled by Link
  };

  // Render logic
  if (to.startsWith("http")) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};
