"use client";

import React, { useState } from 'react';
import { 
  Boxes, ChartBar, LayoutDashboard, NotebookTabs, 
  PackageOpen, ShoppingCart, Origami, Settings, 
  ChevronsLeft, ChevronsRight, RotateCw , Receipt, BarChart, ShoppingBag, LogIn, LogOut, Target, BookOpen, RefreshCcw, 
  ChevronDown, Users, Building, DollarSign, Mail, Upload, CreditCard, File, MapPin, Percent, User,
  FileText, ClipboardList, Truck,
  Settings2
} from 'lucide-react';

import { usePathname } from 'next/navigation';
import SidebarLink from './SidebarLink';
import SidebarLinkCollapsed from './SidebarLinkCollapsed';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SidebarLinkWithArrow from './SidebarLinkWithArrow';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`relative h-[calc(100vh-30px)] ${collapsed ? 'w-20' : 'w-72'} 
      bg-gray-950 text-slate-300 rounded-2xl p-4 transition-all duration-500 ease-in-out 
      overflow-hidden z-20 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center gap-2 py-2 transition-all duration-300">
          <Origami className="w-8 h-8 text-violet-500 transition-all duration-300 shrink-0" />
          {!collapsed && <span className="text-[20px] font-semibold transition-all duration-300">EL Choukr ltd.</span>}
        </div>
        
        <nav className="flex flex-col gap-3 mt-6 max-h-[580px] overflow-y-auto pb-6 hide-scrollbar  ">
          {!collapsed && <span className="text-slate-400">Menu</span>}
          
          <SidebarLink href="/dashboard/home" text="Tableau de bord" isActive={pathname === "/dashboard/home"} Icon={LayoutDashboard} collapsed={collapsed} />
          <SidebarLink href="/dashboard/contacts" text="Contact" isActive={pathname === "/dashboard/contacts"} Icon={NotebookTabs} collapsed={collapsed} />
          <SidebarLink href="/dashboard/produits" text="Produits" isActive={pathname === "/dashboard/produits"} Icon={PackageOpen} collapsed={collapsed} />
          
          <SidebarLinkWithArrow
            title="Ventes"
            icon={ShoppingCart}
            basePath="/dashboard/ventes"
            collapsed={collapsed}
            links={[
              { href: "/dashboard/ventes/devis", text: "Devis", Icon: FileText },
              { href: "/dashboard/ventes/bons-commandes", text: "Bons de commande", Icon: ClipboardList },
              { href: "/dashboard/ventes/bons-livraisons", text: "Bons de livraison", Icon: Truck },
              { href: "/dashboard/ventes/factures", text: "Factures", Icon: Receipt },
              { href: "/dashboard/ventes/retours-produits", text: "Retours produits", Icon: RotateCw },
            ]}
          />

          
          <SidebarLink href="/dashboard/reports" text="Rapports" isActive={pathname === "/dashboard/reports"} Icon={ChartBar} collapsed={collapsed} />

          <SidebarLinkWithArrow
            title="Stocks"
            icon={Boxes}
            basePath="/dashboard/stocks"
            collapsed={collapsed}
            links={[
              { href: "/dashboard/stocks/niveaux-de-stock", text: "Niveaux de stock", Icon: BarChart },
              { href: "/dashboard/stocks/ordres-d-achat", text: "Ordres d'achat", Icon: ShoppingBag },
              { href: "/dashboard/stocks/entrees-de-stock", text: "Entrées de stock", Icon: LogIn },
              { href: "/dashboard/stocks/sorties-de-stock", text: "Sorties de stock", Icon: LogOut },
              { href: "/dashboard/stocks/point-de-commande", text: "Point de commande", Icon: Target },
              { href: "/dashboard/stocks/registre-de-stocks", text: "Registre de stocks", Icon: BookOpen },
              { href: "/dashboard/stocks/mise-a-jour-des-stocks", text: "Mise à jour des stocks", Icon: RefreshCcw },
            ]}
          />
          <SidebarLink href="/dashboard/settings" text="Paramètres" isActive={pathname === "/dashboard/settings"} Icon={Settings2} collapsed={collapsed} />

        </nav>

      </div>
      
      <button 
        className="bg-gray-800 p-1.5 rounded-lg hover:bg-gray-700 transition duration-300 border border-gray-600 self-center mb-2"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronsRight className="w-4 h-4 text-white" /> : <ChevronsLeft className="w-4 h-4 text-white" />}
      </button>
    </div>
  );
};

export default Sidebar;
