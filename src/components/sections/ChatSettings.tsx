import React from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Toggle from '../Toggle';
import Button from '../Button';
import { Plus, MessageSquare } from 'lucide-react';

interface ChatSettingsProps {
  enableChatHistory: boolean;
  enableContextSuggestions: boolean;
  onEnableChatHistoryChange: (value: boolean) => void;
  onEnableContextSuggestionsChange: (value: boolean) => void;
}

export default function ChatSettings({
  enableChatHistory,
  enableContextSuggestions,
  onEnableChatHistoryChange,
  onEnableContextSuggestionsChange,
}: ChatSettingsProps) {
  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="AI Chat" />
      
      <div className="flex-1 p-6">
        <div className="max-w-2xl">
          {/* Chat Interface Preview */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">AI Chat Interface</p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Context
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Agent</span>
                <select className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm text-white">
                  <option>Default Agent</option>
                  <option>Code Assistant</option>
                  <option>Writing Assistant</option>
                </select>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-6">
            <FormField
              label="Chat History"
              description="Save and persist chat conversations across sessions"
            >
              <Toggle
                enabled={enableChatHistory}
                onChange={onEnableChatHistoryChange}
              />
            </FormField>

            <FormField
              label="Context Suggestions"
              description="Show intelligent context suggestions based on your current work"
            >
              <Toggle
                enabled={enableContextSuggestions}
                onChange={onEnableContextSuggestionsChange}
              />
            </FormField>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-lg font-medium text-white mb-4">Chat Actions</h3>
              
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  Clear Chat History
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Export Conversations
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  Reset Chat Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}