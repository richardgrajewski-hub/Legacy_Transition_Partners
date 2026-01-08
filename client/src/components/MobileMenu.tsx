import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  onNavigate?: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    }
    // Navigate to the section
    window.location.hash = sectionId;
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Focus', id: 'focus' },
    { label: 'Core Values', id: 'values' },
    { label: 'Team', id: 'team' },
  ];

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="px-4 py-3 text-left text-foreground hover:bg-secondary/10 border-b border-border/50 last:border-b-0 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};
