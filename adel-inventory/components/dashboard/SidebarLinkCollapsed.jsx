import Link from 'next/link';

const SidebarLinkCollapsed = ({ href, text, isActive, Icon, collapsed }) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 
          ${isActive ? 'bg-slate-50 text-slate-800' : 'text-gray-400 hover:text-white'} 
          ${collapsed ? 'justify-center' : 'pl-4'}`}
      >
        {/* Adjusted icon size & padding */}
        <Icon
          className={`w-5 h-5 flex-shrink-0 transition-all 
            ${isActive ? 'bg-violet-500 text-white p-1 rounded-lg' : 'text-gray-500'}`}
        />
        {!collapsed && <span className="font-medium text-xs">{text}</span>}
      </div>
    </Link>
  );
};

export default SidebarLinkCollapsed;
