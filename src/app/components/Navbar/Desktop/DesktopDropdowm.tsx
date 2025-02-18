"use client";
import React from 'react';
import Link from 'next/link';

export interface DropdownItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface DesktopDropdownProps {
  items: DropdownItem[];
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {items.map(({ label, icon: Icon, href }) => (
          <li key={label} className="flex items-center justify-center">
            <Icon className="mr-2" />
            <Link href={href} className="block px-4 py-2 hover:bg-[var(--color-gray-800)]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopDropdown;
