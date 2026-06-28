'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavDropdownProps {
  group: {
    label: string;
    basePath: string;
    icon: React.ElementType;
    items: {
      label: string;
      href: string;
      icon?: React.ElementType;
    }[];
  };
}

export function NavDropdown({ group }: NavDropdownProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const GroupIcon = group.icon;
  const groupIsActive = pathname?.startsWith(group.basePath);
  const isActive = (path: string) => pathname === path;

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200",
          groupIsActive
            ? "bg-secondary text-primary font-bold"
            : "text-white/80 hover:text-white hover:bg-white/10",
        )}
      >
        <GroupIcon className="h-4 w-4" aria-hidden="true" />
        <span>{group.label}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
            groupIsActive
              ? "bg-secondary text-primary font-bold"
              : "text-white/80 hover:text-white hover:bg-white/10",
          )}
        >
          <GroupIcon className="h-4 w-4" aria-hidden="true" />
          <span>{group.label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={4}
        className="w-56 bg-primary border-2 border-secondary shadow-hard-secondary p-1"
      >
        {group.items.map((item) => {
          const ItemIcon = item.icon;
          return (
            <DropdownMenuItem key={item.href} asChild className="focus:bg-secondary/20 focus:text-secondary p-0">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  isActive(item.href)
                    ? "text-secondary font-bold bg-secondary/10"
                    : "text-white/80 hover:text-white",
                )}
              >
                {ItemIcon && (
                  <ItemIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
