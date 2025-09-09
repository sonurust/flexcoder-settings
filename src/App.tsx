import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GeneralSettings from './components/sections/GeneralSettings';
import AdvancedSettings from './components/sections/AdvancedSettings';
import EnhancedChatSettings from './components/sections/EnhancedChatSettings';
import MCPServerSettings from './components/sections/MCPServerSettings';
import QuestModeSettings from './components/sections/QuestModeSettings';
import PlaceholderSettings from './components/sections/PlaceholderSettings';
import UserMenu from './components/UserMenu';
import { X } from 'lucide-react';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('general');
  
  // User data
  const user = {
    name: 'Sonu Kumar',
    email: 'skbhati199@gmail.com',
    avatar: 'S'
  };

  // Settings state
  const [displayLanguage, setDisplayLanguage] = useState('en');
  const [responseLanguage, setResponseLanguage] = useState('en');
  const [proxySettings, setProxySettings] = useState('manual');
  const [proxyUrl, setProxyUrl] = useState('');
  const [autoUpdates, setAutoUpdates] = useState(true);
  const [questModeEnabled, setQuestModeEnabled] = useState(true);
  const [searchToolsEnabled, setSearchToolsEnabled] = useState(true);
  const [mcpToolsEnabled, setMcpToolsEnabled] = useState(true);
  const [toolbarOnSelectionEnabled, setToolbarOnSelectionEnabled] = useState(true);
  const [terminalMode, setTerminalMode] = useState('auto-run');
  const [webToolsMode, setWebToolsMode] = useState('auto-execute');
  const [terminalCommands, setTerminalCommands] = useState('rm,mv,sudo,wget,curl,chown');

  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'general':
        return (
          <GeneralSettings
            displayLanguage={displayLanguage}
            responseLanguage={responseLanguage}
            onDisplayLanguageChange={setDisplayLanguage}
            onResponseLanguageChange={setResponseLanguage}
          />
        );
      case 'advanced':
        return (
          <AdvancedSettings
            proxySettings={proxySettings}
            proxyUrl={proxyUrl}
            autoUpdates={autoUpdates}
            onProxySettingsChange={setProxySettings}
            onProxyUrlChange={setProxyUrl}
            onAutoUpdatesChange={setAutoUpdates}
          />
        );
      case 'chat':
        return (
          <EnhancedChatSettings
            searchToolsEnabled={searchToolsEnabled}
            mcpToolsEnabled={mcpToolsEnabled}
            toolbarOnSelectionEnabled={toolbarOnSelectionEnabled}
            terminalMode={terminalMode}
            webToolsMode={webToolsMode}
            terminalCommands={terminalCommands}
            onSearchToolsEnabledChange={setSearchToolsEnabled}
            onMcpToolsEnabledChange={setMcpToolsEnabled}
            onToolbarOnSelectionEnabledChange={setToolbarOnSelectionEnabled}
            onTerminalModeChange={setTerminalMode}
            onWebToolsModeChange={setWebToolsMode}
            onTerminalCommandsChange={setTerminalCommands}
          />
        );
      case 'completion':
        return (
          <PlaceholderSettings
            title="Completion"
            description="Configure code completion settings and preferences for auto-completion behavior."
          />
        );
      case 'quest-mode':
        return (
          <QuestModeSettings
            questModeEnabled={questModeEnabled}
            onQuestModeEnabledChange={setQuestModeEnabled}
          />
        );
      case 'mcp-server':
        return <MCPServerSettings />;
      case 'rules':
        return (
          <PlaceholderSettings
            title="Rules"
            description="Define custom rules and constraints for code generation and AI assistance."
          />
        );
      case 'memories':
        return (
          <PlaceholderSettings
            title="Memories"
            description="Manage AI memories and context retention settings for personalized assistance."
          />
        );
      case 'indexing':
        return (
          <PlaceholderSettings
            title="Indexing"
            description="Configure code indexing preferences and search optimization settings."
          />
        );
      default:
        return null;
    }
  };

  if (!isSettingsOpen) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gray-800 rounded-2xl mx-auto flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">AI Development Tool</h1>
            <p className="text-gray-400">Plan and build autonomously...</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <UserMenu user={user} onSettingsClick={() => setIsSettingsOpen(true)} />
          </div>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Open Settings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-950 flex">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        user={user}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold text-white">Qoder Settings</h1>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          {renderSettingsContent()}
        </div>
      </div>
    </div>
  );
}

export default App;