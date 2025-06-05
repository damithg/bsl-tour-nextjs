
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MinimalHeroProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export const MinimalHero = ({ 
  title, 
  description, 
  breadcrumbs, 
  className = "" 
}: MinimalHeroProps) => {
  return (
    <section className={`relative pt-20 pb-8 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex text-gray-600 mb-6 pt-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium hover:text-blue-600 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-gray-400 mx-1" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-gray-900">
                      {crumb.label}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h1>

          {description && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
          )}
        </header>
      </div>
    </section>
  );
};

export default MinimalHero;
