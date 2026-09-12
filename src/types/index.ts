export type PasswordStrength = 'weak' | 'fair' | 'strong';

export interface VaultEntry {
  id: string;
  title: string;
  username: string;
  password?: string;
  url: string;
  favicon?: string;
  category:
  'Social' |
  'Email' |
  'Banking' |
  'Shopping' |
  'Dev' |
  'Entertainment' |
  'Work' |
  'Other';
  createdAt: string;
  lastChanged: string;
  strength: PasswordStrength;
  isReused: boolean;
  isPwned: boolean;
  pwnedDate?: string;
  breachSource?: string;
  notes?: string;
}

export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface BreachAlert {
  id: string;
  severity: AlertSeverity;
  title: string;
  description: string;
  affectedEmail: string;
  breachDate: string;
  source: string;
  dataTypes: string[];
  isActioned: boolean;
  vaultEntryId?: string;
}

export interface HealthScore {
  overall: number;
  totalPasswords: number;
  weak: number;
  reused: number;
  pwned: number;
  old: number;
  strong: number;
}

export type AppPage =
'unlock' |
'dashboard' |
'vault' |
'alerts' |
'generator' |
'settings';