import React from 'react';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="flex">
      <span className="p-2 text-white w-[7px] h-[7px] rounded-[100%] flex items-center justify-center bg-[var(--color-primary)] mr-2">✓</span>
      {text}
    </li>
  );
};

export default ListItem;
