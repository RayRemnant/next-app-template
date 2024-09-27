import React from 'react';
import { NavbarMinimal } from '@/components/NavbarMinimal/NavbarMinimal';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      {/* Navbar on the side */}
      <NavbarMinimal />

      {/* Main content */}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
