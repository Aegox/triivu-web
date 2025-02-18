"use client";
import React from 'react';
import Link from 'next/link';
import { DropdownItem } from '../../Desktop/DesktopDropdown';

interface MobileDropdownProps {
  items: DropdownItem[];
  active: boolean;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ items, active }) => {
  return (
    <div
      className={`flex flex-col w-full overflow-hidden transition-all duration-[var(--transition-duration)] ${
        active ? 'max-h-96' : 'max-h-0'
      }`}
    >
      {items.map(({ label, icon: Icon, href }) => (
        <Link
          key={label}
          href={href}
          className="flex items-center justify-center px-4 py-2 hover:bg-[var(--color-gray-800)]"
        >
          <Icon className="mr-2" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default MobileDropdown;
