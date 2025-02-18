declare module './Mobile/MobileDropdown' {
  import { FC } from 'react';
  import { DropdownItem } from './Desktop/DesktopDropdown';

  interface MobileDropdownProps {
    items: DropdownItem[];
    active: boolean;
  }

  const MobileDropdown: FC<MobileDropdownProps>;
  export default MobileDropdown;
}

declare module './Desktop/DesktopDropdown' {
  import { FC } from 'react';

  export interface DropdownItem {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
  }

  interface DesktopDropdownProps {
    items: DropdownItem[];
  }

  const DesktopDropdown: FC<DesktopDropdownProps>;
  export default DesktopDropdown;
}
