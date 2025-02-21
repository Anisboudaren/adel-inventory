import Link from 'next/link';

const SidebarLink = ({ href, text, isActive, Icon, collapsed }) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 
          ${isActive ? 'bg-slate-50 text-slate-800' : 'text-gray-400 hover:text-white'} 
          ${collapsed ? 'justify-center' : ''}`}
      >
        {/* Keep icon size fixed */}
        <Icon
          className={`w-6 h-6 flex-shrink-0 transition-all 
            ${isActive ? 'bg-violet-500 text-white p-1 rounded-lg' : 'text-gray-500'}`}
        />
        {!collapsed && <span className="font-semibold text-sm">{text}</span>}
      </div>
    </Link>
  );
};

export default SidebarLink;
