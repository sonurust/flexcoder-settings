import React from 'react';
import { 
  Settings, 
  Type, 
  MessageSquare, 
  Target, 
  Server, 
  BookOpen, 
  Archive, 
  Search, 
  Zap 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const navigationItems = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'completion', label: 'Completion', icon: Type },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'quest-mode', label: 'Quest Mode', icon: Target },
  { id: 'mcp-server', label: 'MCP Server', icon: Server },
  { id: 'rules', label: 'Rules', icon: BookOpen },
  { id: 'memories', label: 'Memories', icon: Archive },
  { id: 'indexing', label: 'Indexing', icon: Search },
  { id: 'advanced', label: 'Advanced', icon: Zap },
];

export default function Sidebar({ activeSection, onSectionChange, user }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}