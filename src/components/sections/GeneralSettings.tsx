import React from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Select from '../Select';

interface GeneralSettingsProps {
  displayLanguage: string;
  responseLanguage: string;
  onDisplayLanguageChange: (value: string) => void;
  onResponseLanguageChange: (value: string) => void;
}

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'zh', label: 'Chinese' },
];

export default function GeneralSettings({
  displayLanguage,
  responseLanguage,
  onDisplayLanguageChange,
  onResponseLanguageChange,
}: GeneralSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="Language" />
      
      <div className="flex-1 p-6 space-y-8">
        <FormField
          label="Display Language"
          description="Set the display language"
        >
          <Select
            value={displayLanguage}
            onChange={onDisplayLanguageChange}
            options={languageOptions}
          />
        </FormField>

        <FormField
          label="Response Language for AI"
          description="Set your preferred language for AI replies in Chat, Inline Chat, Quest Mode, Commit Message, Memories, and Repo Wiki content generation"
        >
          <Select
            value={responseLanguage}
            onChange={onResponseLanguageChange}
            options={languageOptions}
          />
        </FormField>

        <div className="pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-6">Preferences</h3>
          
          <div className="space-y-6">
            <FormField
              label="Keyboard Shortcuts"
              description="Configure keyboard shortcuts"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Open
              </button>
            </FormField>

            <FormField
              label="Editor Settings"
              description="Set the editor settings, such as font, window and more"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Open
              </button>
            </FormField>

            <FormField
              label="Import Configuration"
              description="Import extensions, settings, and keyboard shortcuts from VS Code or Cursor"
            >
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Import
              </button>
            </FormField>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-6">Privacy</h3>
          
          <FormField
            label="Privacy Settings"
            description="Your data will not be used for product improvement. It's only used to personalize and enhance your experience. For more details, please refer to our Privacy Policy"
          >
            <Select
              value="privacy-mode"
              onChange={() => {}}
              options={[
                { value: 'privacy-mode', label: 'Privacy Mode' },
                { value: 'standard', label: 'Standard' },
              ]}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}