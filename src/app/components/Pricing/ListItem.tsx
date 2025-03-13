import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="flex items-center gap-2">
      <FaCheckCircle className="text-orange-400" />
      {text}
    </li>
  );
};

export default ListItem;
