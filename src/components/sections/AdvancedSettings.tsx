import React from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Select from '../Select';
import Toggle from '../Toggle';

interface AdvancedSettingsProps {
  proxySettings: string;
  proxyUrl: string;
  autoUpdates: boolean;
  onProxySettingsChange: (value: string) => void;
  onProxyUrlChange: (value: string) => void;
  onAutoUpdatesChange: (value: boolean) => void;
}

const proxyOptions = [
  { value: 'manual', label: 'Manual' },
  { value: 'auto', label: 'Auto' },
  { value: 'system', label: 'System' },
  { value: 'none', label: 'None' },
];

export default function AdvancedSettings({
  proxySettings,
  proxyUrl,
  autoUpdates,
  onProxySettingsChange,
  onProxyUrlChange,
  onAutoUpdatesChange,
}: AdvancedSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="Advanced" />
      
      <div className="flex-1 p-6 space-y-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-6">Proxy</h3>
          
          <div className="space-y-6">
            <FormField
              label="Proxy Settings"
              description="Set the network proxy"
            >
              <Select
                value={proxySettings}
                onChange={onProxySettingsChange}
                options={proxyOptions}
              />
            </FormField>

            <FormField
              label="Proxy Configuration URL"
              description="Set the proxy server address"
            >
              <input
                type="text"
                value={proxyUrl}
                onChange={(e) => onProxyUrlChange(e.target.value)}
                placeholder="Enter proxy server address"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </FormField>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-6">Update</h3>
          
          <FormField
            label="Update Preferences"
            description="Enable automatic updates"
          >
            <div className="flex items-center">
              <Toggle
                enabled={autoUpdates}
                onChange={onAutoUpdatesChange}
              />
            </div>
          </FormField>
        </div>
      </div>
    </div>
  );
}