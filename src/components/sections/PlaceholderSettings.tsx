import React from 'react';
import SettingsHeader from '../SettingsHeader';

interface PlaceholderSettingsProps {
  title: string;
  description: string;
}

export default function PlaceholderSettings({ title, description }: PlaceholderSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title={title} />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">{title} Settings</h3>
          <p className="text-gray-400 text-sm max-w-md">{description}</p>
        </div>
      </div>
    </div>
  );
}