'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/react';
export interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const ExperienceCard: React.FC<ExperienceProps> = ({ 
  title, 
  company, 
  period, 
  description 
}) => {
  return (
    <Card className="border-none bg-content1 shadow-md hover:shadow-primary/10 transition-shadow w-full">
      <CardBody className="p-6">
        <div className="flex flex-col mb-4">
          <time className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
            {period}
          </time>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <span className="text-default-500 font-medium">{company}</span>
        </div>
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-sm text-default-400 flex items-start gap-2">
              <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};