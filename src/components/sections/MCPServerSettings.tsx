import React, { useState } from 'react';
import SettingsHeader from '../SettingsHeader';
import FormField from '../FormField';
import Toggle from '../Toggle';
import Button from '../Button';
import { Plus, Github, Link, ChevronRight, Eye } from 'lucide-react';

interface MCPServer {
  id: string;
  name: string;
  provider: string;
  description: string;
  downloads: number;
  status: 'installed' | 'available';
  icon: string;
  enabled?: boolean;
}

const mockServers: MCPServer[] = [
  {
    id: 'github',
    name: 'github',
    provider: 'modelcontextprotocol',
    description: 'MCP Server for the Github API, enabling file operations, repository management, search functionality, and more.',
    downloads: 27249,
    status: 'available',
    icon: 'github'
  },
  {
    id: 'sequentialthinking',
    name: 'sequentialthinking',
    provider: 'modelcontextprotocol',
    description: 'An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.',
    downloads: 30408,
    status: 'installed',
    icon: 'thinking',
    enabled: true
  },
  {
    id: 'playwright-mcp',
    name: 'playwright-mcp',
    provider: 'microsoft',
    description: 'A Model Context Protocol server that enables LLMs to interact with web pages through structured accessibility snapshots without requiring vision models or screenshots.',
    downloads: 26832,
    status: 'available',
    icon: 'microsoft'
  },
  {
    id: 'context7-mcp',
    name: 'context7-mcp',
    provider: 'upstash',
    description: 'A Model Context Protocol server that fetches up-to-date, version-specific documentation and code examples from libraries directly into LLM prompts, helping developers get accurate answers without outdated or hallucinated information.',
    downloads: 23063,
    status: 'installed',
    icon: 'upstash',
    enabled: true
  },
  {
    id: 'fetch',
    name: 'fetch',
    provider: 'modelcontextprotocol',
    description: 'This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.',
    downloads: 193488,
    status: 'available',
    icon: 'fetch'
  }
];

const installedServers = [
  { name: 'context7', enabled: true },
  { name: 'sequential-thinking', enabled: true }
];

export default function MCPServerSettings() {
  const [activeTab, setActiveTab] = useState<'my-servers' | 'mcp-square'>('my-servers');
  const [servers, setServers] = useState(mockServers);

  const handleServerToggle = (serverId: string) => {
    setServers(prev => prev.map(server => 
      server.id === serverId 
        ? { ...server, enabled: !server.enabled }
        : server
    ));
  };

  const getServerIcon = (iconType: string) => {
    switch (iconType) {
      case 'github':
        return <Github className="w-8 h-8" />;
      case 'microsoft':
        return <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded"></div>;
      case 'upstash':
        return <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">U</div>;
      case 'thinking':
        return <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"><div className="w-4 h-4 border-2 border-white rounded-full"></div></div>;
      case 'fetch':
        return <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">F</div>;
      default:
        return <div className="w-8 h-8 bg-gray-600 rounded"></div>;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <SettingsHeader title="MCP Server" />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">
              Install new MCP servers to extend tools for agent. Learn more in{' '}
              <a href="#" className="text-green-500 hover:text-green-400">Docs</a>
            </p>
            <Button size="sm" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab('my-servers')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'my-servers'
                  ? 'bg-gray-800 text-white border-b-2 border-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My Servers
            </button>
            <button
              onClick={() => setActiveTab('mcp-square')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'mcp-square'
                  ? 'bg-gray-800 text-white border-b-2 border-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              MCP Square
            </button>
          </div>
        </div>

        {activeTab === 'my-servers' ? (
          <div className="space-y-4">
            {installedServers.map((server, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <Link className="w-4 h-4 text-green-500" />
                  <span className="text-white font-medium">{server.name}</span>
                </div>
                <Toggle
                  enabled={server.enabled}
                  onChange={() => {}}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {servers.map((server) => (
              <div key={server.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getServerIcon(server.icon)}
                    <div>
                      <h3 className="text-white font-medium">{server.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span>{server.provider}</span>
                        <Eye className="w-3 h-3" />
                        <span>{server.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={server.status === 'installed' ? 'secondary' : 'primary'}
                    className={server.status === 'installed' ? 'cursor-default' : ''}
                  >
                    {server.status === 'installed' ? 'Installed' : 'Install'}
                  </Button>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {server.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}