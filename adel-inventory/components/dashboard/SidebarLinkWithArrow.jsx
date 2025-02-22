import { ChevronDown } from "lucide-react";
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
          <ChevronDown className="w-4 h-4" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        {links.map(({ href, text, Icon }) => (
          <SidebarLinkCollapsed key={href} href={href} text={text} isActive={pathname === href} Icon={Icon} collapsed={collapsed} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarLinkWithArrow;
