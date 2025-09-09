import React from 'react';

interface FormFieldProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormField({ label, description, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium text-white">
          {label}
        </label>
        {description && (
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}