"use client";
import React from 'react';
import Link from 'next/link';

export interface CategoryButtonProps {
  id: string;
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick?: () => void;
  variant: 'desktop' | 'mobile';
  showIcon?: boolean;
  href?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  Icon,
  active,
  onClick,
  variant,
  showIcon = false,
  href,
}) => {
  const baseClasses =
    variant === 'desktop'
      ? "text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md focus:outline-none"
      : "text-xl py-4 focus:outline-none text-[var(--color-white)] hover:bg-[var(--color-gray-700)]";

  const content = (
    <>
      <div className="flex items-center justify-center space-x-2">
        {showIcon && Icon && <Icon className="text-[var(--color-white)]" />}
        <span>{label}</span>
      </div>
      <span
        className={`block h-0.5 bg-[var(--color-white)] transition-all duration-[var(--transition-duration)] mt-1 ${
          active ? 'w-full' : 'w-0'
        }`}
      ></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default CategoryButton;
