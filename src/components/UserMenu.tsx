import React, { useState } from 'react';
import { ChevronDown, Settings, FileText, MessageCircle, Bug, LogOut } from 'lucide-react';

interface UserMenuProps {
  user: {
    name: string;
    email: string;
  };
  onSettingsClick: () => void;
}

export default function UserMenu({ user, onSettingsClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Settings, label: 'Qoder Settings', shortcut: 'Ctrl+Shift+,' },
    { icon: Settings, label: 'Editor Settings', shortcut: 'Ctrl+,' },
    { icon: FileText, label: 'Documentation' },
    { icon: MessageCircle, label: 'Feature Requests' },
    { icon: Bug, label: 'Issue Report' },
    { icon: LogOut, label: 'Sign out' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-gray-800 transition-colors"
      >
        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-semibold">
          {user.name.charAt(0)}
        </div>
        <span className="text-sm font-medium">{user.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
            <div className="py-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (item.label === 'Qoder Settings') {
                        onSettingsClick();
                      }
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.shortcut && (
                      <span className="text-xs text-gray-400">{item.shortcut}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}