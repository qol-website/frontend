import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <header className="h-16 border-b border-white/10 bg-background/50 backdrop-blur-sm">
        <div className="mx-8 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-xl md:text-2xl font-bold text-white">
              QOL Site
            </span>
          </Link>

          <button
            onClick={() => window.open('placeholder!', '_blank')}
            className="px-4 md:px-6 py-1.5 bg-secondary/80 hover:bg-accent/80 text-white rounded-full transition-colors text-sm md:text-base"
          >
            Join Discord!
          </button>
        </div>
      </header>
    </div>
  );
}
