import { ChevronDown, Plus, PlusSquare } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SidebarLink from "./SidebarLink";
import SidebarLinkCollapsed from "./SidebarLinkCollapsed";
import { usePathname } from "next/navigation";

const SidebarLinkWithArrow = ({ title, icon: Icon, basePath, links, collapsed }) => {
  const pathname = usePathname();

  return (
    
    <Collapsible>
      <div className="flex justify-between">
        <SidebarLink href={"#"} text={title} isActive={false} Icon={Icon} collapsed={collapsed} />
        <CollapsibleTrigger >
          <Plus className="w-4 h-4" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent 
  className="overflow-hidden transition-all duration-300 ease-in-out data-[state=open]:h-auto data-[state=open]:opacity-100 h-0 opacity-0"
>

        {links.map(({ href, text, Icon }) => (
          <SidebarLinkCollapsed className="overflow-hidden transition-all duration-600 ease-in-out" key={href} href={href} text={text} isActive={pathname === href} Icon={Icon} collapsed={collapsed} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarLinkWithArrow;
