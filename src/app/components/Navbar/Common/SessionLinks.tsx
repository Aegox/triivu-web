"use client";
import React from 'react';
import Link from 'next/link';

interface SessionLinksProps {
  variant: 'desktop' | 'mobile';
}

const SessionLinks: React.FC<SessionLinksProps> = ({ variant }) => {
  if (variant === 'desktop') {
    return (
      <div className="hidden md:flex space-x-4 items-center justify-center">
        <Link
          href="/login"
          className="text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/register"
          className="bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] px-3 py-2 rounded-md"
        >
          Registrarse
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-auto w-full flex flex-wrap flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-10">
      <Link
        href="/login"
        className="w-full md:w-auto text-[var(--color-white)] hover:bg-[var(--color-gray-700)] px-3 py-2 rounded-md text-center"
      >
        Iniciar Sesión
      </Link>
      <Link
        href="/register"
        className="w-full md:w-auto bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] px-3 py-2 rounded-md text-center"
      >
        Registrarse
      </Link>
    </div>
  );
};

export default SessionLinks;
