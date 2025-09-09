import React from 'react';
import { X } from 'lucide-react';

interface SettingsHeaderProps {
  title: string;
  onClose?: () => void;
}

export default function SettingsHeader({ title, onClose }: SettingsHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-800">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}