"use client";

import React, { useState } from 'react';
import { 
  Boxes, ChartBar, LayoutDashboard, NotebookTabs, 
  PackageOpen, ShoppingCart, Origami, Settings, 
  ChevronsLeft, ChevronsRight 
} from 'lucide-react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`relative h-[calc(100vh-30px)] ${collapsed ? 'w-20' : 'w-72'} 
      bg-gray-950 text-slate-300 rounded-2xl p-4 transition-all duration-500 ease-in-out 
      overflow-hidden z-20 flex flex-col`}
    >
      {/* Collapse Button */}
      <button 
        className="absolute top-1/2 -right-4 transform -translate-y-1/2  
          bg-gray-950 p-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300 z-900 border border-gray-700"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronsRight className="w-4 h-4 text-white" /> : <ChevronsLeft className="w-4 h-4 text-white" />}
      </button>

      {/* Sidebar Content */}
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Top Logo (Keep Icon Visible) */}
        <div className="flex items-center gap-2 py-2 transition-all duration-300">
          <Origami className="w-8 h-8 text-violet-500 transition-all duration-300 shrink-0" />
          {!collapsed && <span className="text-[20px] font-semibold transition-all duration-300">EL Choukr ltd.</span>}
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3 mt-6">
          {!collapsed && <span className="text-slate-400">Menu</span>}

          <SidebarLink href="/dashboard/home" text="Tableau de bord" isActive={true} Icon={LayoutDashboard} collapsed={collapsed} />
          <SidebarLink href="/dashboard/contacts" text="Contact" isActive={false} Icon={NotebookTabs} collapsed={collapsed} />
          <SidebarLink href="/dashboard/produits" text="Produits" isActive={false} Icon={PackageOpen} collapsed={collapsed} />
          <SidebarLink href="/dashboard/vents" text="Ventes" isActive={false} Icon={ShoppingCart} collapsed={collapsed} />
          <SidebarLink href="/dashboard/stocks" text="Stocks" isActive={false} Icon={Boxes} collapsed={collapsed} />
          <SidebarLink href="/dashboard/reports" text="Rapports" isActive={false} Icon={ChartBar} collapsed={collapsed} />
          <SidebarLink href="/dashboard/settings" text="Paramètres" isActive={false} Icon={Settings} collapsed={collapsed} />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
