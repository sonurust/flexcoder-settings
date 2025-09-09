import React from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Toggle from '../Toggle';
import Select from '../Select';

interface EnhancedChatSettingsProps {
  searchToolsEnabled: boolean;
  mcpToolsEnabled: boolean;
  toolbarOnSelectionEnabled: boolean;
  terminalMode: string;
  webToolsMode: string;
  terminalCommands: string;
  onSearchToolsEnabledChange: (value: boolean) => void;
  onMcpToolsEnabledChange: (value: boolean) => void;
  onToolbarOnSelectionEnabledChange: (value: boolean) => void;
  onTerminalModeChange: (value: string) => void;
  onWebToolsModeChange: (value: string) => void;
  onTerminalCommandsChange: (value: string) => void;
}

const terminalModeOptions = [
  { value: 'auto-run', label: 'Auto-run' },
  { value: 'manual', label: 'Manual' },
  { value: 'disabled', label: 'Disabled' },
];

const webToolsOptions = [
  { value: 'auto-execute', label: 'Auto Execute' },
  { value: 'manual', label: 'Manual' },
  { value: 'disabled', label: 'Disabled' },
];

export default function EnhancedChatSettings({
  searchToolsEnabled,
  mcpToolsEnabled,
  toolbarOnSelectionEnabled,
  terminalMode,
  webToolsMode,
  terminalCommands,
  onSearchToolsEnabledChange,
  onMcpToolsEnabledChange,
  onToolbarOnSelectionEnabledChange,
  onTerminalModeChange,
  onWebToolsModeChange,
  onTerminalCommandsChange,
}: EnhancedChatSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="Chat" />
      
      <div className="flex-1 p-6">
        <div className="max-w-2xl space-y-8">
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Chat Settings</h3>
            
            <div className="space-y-6">
              <FormField
                label="Search tools in Ask mode"
                description="Allow to search current codebase or files in Ask mode, and search web for relevant information if Web tool is enabled"
              >
                <Toggle
                  enabled={searchToolsEnabled}
                  onChange={onSearchToolsEnabledChange}
                />
              </FormField>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <h3 className="text-lg font-medium text-white mb-6">Auto-Run</h3>
            
            <div className="space-y-6">
              <FormField
                label="MCP Tools"
                description="Allow automatic execution of MCP tools in Agent mode"
              >
                <Toggle
                  enabled={mcpToolsEnabled}
                  onChange={onMcpToolsEnabledChange}
                />
              </FormField>

              <FormField
                label="Terminal in Agent Mode"
                description="Enter commands that should never run automatically. Separate them with commas"
              >
                <div className="space-y-3">
                  <Select
                    value={terminalMode}
                    onChange={onTerminalModeChange}
                    options={terminalModeOptions}
                  />
                  <textarea
                    value={terminalCommands}
                    onChange={(e) => onTerminalCommandsChange(e.target.value)}
                    placeholder="rm,mv,sudo,wget,curl,chown"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
              </FormField>

              <FormField
                label="Web Tools"
                description="Allow to search web for relevant information from URL in Ask and Agent mode"
              >
                <Select
                  value={webToolsMode}
                  onChange={onWebToolsModeChange}
                  options={webToolsOptions}
                />
              </FormField>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <h3 className="text-lg font-medium text-white mb-6">Inline Chat</h3>
            
            <div className="space-y-6">
              <FormField
                label="Toolbar on Code Selection"
                description='Display the "Edit" and "Add to Chat" actions when you select code in editor'
              >
                <Toggle
                  enabled={toolbarOnSelectionEnabled}
                  onChange={onToolbarOnSelectionEnabledChange}
                />
              </FormField>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}