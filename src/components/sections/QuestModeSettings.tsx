import React from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Toggle from '../Toggle';

interface QuestModeSettingsProps {
  questModeEnabled: boolean;
  onQuestModeEnabledChange: (value: boolean) => void;
}

export default function QuestModeSettings({
  questModeEnabled,
  onQuestModeEnabledChange,
}: QuestModeSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="Quest Mode" />
      
      <div className="flex-1 p-6">
        <div className="max-w-2xl">
          <h3 className="text-lg font-medium text-white mb-6">Quest Mode Settings</h3>
          
          <div className="space-y-6">
            <FormField
              label="Quest Mode"
              description="Controls whether to show Quest Mode"
            >
              <Toggle
                enabled={questModeEnabled}
                onChange={onQuestModeEnabledChange}
              />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}