import { useState, useMemo } from 'react';
import { VaultEntry, BreachAlert, HealthScore } from '../types';

const INITIAL_VAULT: VaultEntry[] = [
{
  id: '1',
  title: 'Google',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://google.com',
  category: 'Email',
  createdAt: '2023-01-15',
  lastChanged: '2023-01-15',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '2',
  title: 'GitHub',
  username: 'alexsmith_dev',
  password: '••••••••••••',
  url: 'https://github.com',
  category: 'Dev',
  createdAt: '2023-02-20',
  lastChanged: '2023-11-05',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '3',
  title: 'LinkedIn',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://linkedin.com',
  category: 'Social',
  createdAt: '2021-05-10',
  lastChanged: '2021-05-10',
  strength: 'weak',
  isReused: true,
  isPwned: true,
  pwnedDate: '2023-08-12',
  breachSource: 'LinkedIn Scrape 2023'
},
{
  id: '4',
  title: 'Netflix',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://netflix.com',
  category: 'Entertainment',
  createdAt: '2020-11-22',
  lastChanged: '2020-11-22',
  strength: 'weak',
  isReused: true,
  isPwned: false
},
{
  id: '5',
  title: 'Amazon',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://amazon.com',
  category: 'Shopping',
  createdAt: '2022-03-14',
  lastChanged: '2024-01-10',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '6',
  title: 'Chase Bank',
  username: 'asmith_finance',
  password: '••••••••••••',
  url: 'https://chase.com',
  category: 'Banking',
  createdAt: '2023-06-30',
  lastChanged: '2024-02-01',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '7',
  title: 'Twitter / X',
  username: '@alexsmith',
  password: '••••••••••••',
  url: 'https://twitter.com',
  category: 'Social',
  createdAt: '2019-08-05',
  lastChanged: '2019-08-05',
  strength: 'fair',
  isReused: false,
  isPwned: false
},
{
  id: '8',
  title: 'Dropbox',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://dropbox.com',
  category: 'Work',
  createdAt: '2021-09-18',
  lastChanged: '2021-09-18',
  strength: 'weak',
  isReused: true,
  isPwned: true,
  pwnedDate: '2022-11-04',
  breachSource: 'Dropbox Dump'
},
{
  id: '9',
  title: 'Adobe',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://adobe.com',
  category: 'Work',
  createdAt: '2020-04-12',
  lastChanged: '2020-04-12',
  strength: 'fair',
  isReused: false,
  isPwned: true,
  pwnedDate: '2023-10-20',
  breachSource: 'Adobe Creative Cloud Leak'
},
{
  id: '10',
  title: 'Reddit',
  username: 'alex_reads',
  password: '••••••••••••',
  url: 'https://reddit.com',
  category: 'Social',
  createdAt: '2022-12-01',
  lastChanged: '2022-12-01',
  strength: 'fair',
  isReused: false,
  isPwned: false
},
{
  id: '11',
  title: 'Spotify',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://spotify.com',
  category: 'Entertainment',
  createdAt: '2021-07-25',
  lastChanged: '2021-07-25',
  strength: 'weak',
  isReused: true,
  isPwned: false
},
{
  id: '12',
  title: 'Slack',
  username: 'alex.smith@company.com',
  password: '••••••••••••',
  url: 'https://slack.com',
  category: 'Work',
  createdAt: '2023-05-10',
  lastChanged: '2024-01-15',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '13',
  title: 'Discord',
  username: 'alex_gaming',
  password: '••••••••••••',
  url: 'https://discord.com',
  category: 'Social',
  createdAt: '2022-08-30',
  lastChanged: '2022-08-30',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '14',
  title: 'PayPal',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://paypal.com',
  category: 'Banking',
  createdAt: '2021-02-14',
  lastChanged: '2023-12-20',
  strength: 'strong',
  isReused: false,
  isPwned: false
},
{
  id: '15',
  title: 'Steam',
  username: 'alex_steam',
  password: '••••••••••••',
  url: 'https://store.steampowered.com',
  category: 'Entertainment',
  createdAt: '2020-10-05',
  lastChanged: '2020-10-05',
  strength: 'fair',
  isReused: false,
  isPwned: false
},
{
  id: '16',
  title: 'Facebook',
  username: 'alex.smith@gmail.com',
  password: '••••••••••••',
  url: 'https://facebook.com',
  category: 'Social',
  createdAt: '2018-03-12',
  lastChanged: '2018-03-12',
  strength: 'weak',
  isReused: true,
  isPwned: true,
  pwnedDate: '2021-04-03',
  breachSource: 'Facebook 533M Leak'
},
{
  id: '17',
  title: 'Instagram',
  username: 'alex.pics',
  password: '••••••••••••',
  url: 'https://instagram.com',
  category: 'Social',
  createdAt: '2019-06-22',
  lastChanged: '2019-06-22',
  strength: 'fair',
  isReused: false,
  isPwned: false
},
{
  id: '18',
  title: 'Apple',
  username: 'alex.smith@icloud.com',
  password: '••••••••••••',
  url: 'https://apple.com',
  category: 'Other',
  createdAt: '2022-11-11',
  lastChanged: '2024-03-01',
  strength: 'strong',
  isReused: false,
  isPwned: false
}];


const INITIAL_ALERTS: BreachAlert[] = [
{
  id: 'a1',
  severity: 'critical',
  title: 'LinkedIn Scrape 2023',
  description:
  'A massive scrape of LinkedIn public and private profile data was found on a dark web forum.',
  affectedEmail: 'alex.smith@gmail.com',
  breachDate: '2023-08-12',
  source: 'BreachDirectory',
  dataTypes: ['Email addresses', 'Passwords', 'Job titles'],
  isActioned: false,
  vaultEntryId: '3'
},
{
  id: 'a2',
  severity: 'critical',
  title: 'Adobe Creative Cloud Leak',
  description:
  'Database backup containing user credentials was exposed on an unsecured server.',
  affectedEmail: 'alex.smith@gmail.com',
  breachDate: '2023-10-20',
  source: 'Have I Been Pwned',
  dataTypes: ['Email addresses', 'Passwords', 'Password hints'],
  isActioned: false,
  vaultEntryId: '9'
},
{
  id: 'a3',
  severity: 'warning',
  title: 'Dropbox Dump',
  description:
  'Historical breach data from Dropbox was recently re-circulated on paste sites.',
  affectedEmail: 'alex.smith@gmail.com',
  breachDate: '2022-11-04',
  source: 'Dark Web Monitor',
  dataTypes: ['Email addresses', 'Passwords'],
  isActioned: false,
  vaultEntryId: '8'
},
{
  id: 'a4',
  severity: 'info',
  title: 'Facebook 533M Leak',
  description:
  'Old breach data containing phone numbers and profile details.',
  affectedEmail: 'alex.smith@gmail.com',
  breachDate: '2021-04-03',
  source: 'Have I Been Pwned',
  dataTypes: ['Phone numbers', 'Names', 'Email addresses'],
  isActioned: true,
  vaultEntryId: '16'
}];


export function useMockData() {
  const [vault, setVault] = useState<VaultEntry[]>(INITIAL_VAULT);
  const [alerts, setAlerts] = useState<BreachAlert[]>(INITIAL_ALERTS);

  const healthScore = useMemo<HealthScore>(() => {
    const totalPasswords = vault.length;
    const weak = vault.filter((v) => v.strength === 'weak').length;
    const reused = vault.filter((v) => v.isReused).length;
    const pwned = vault.filter((v) => v.isPwned).length;

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const old = vault.filter((v) => new Date(v.lastChanged) < oneYearAgo).length;

    const strong = vault.filter(
      (v) => v.strength === 'strong' && !v.isPwned && !v.isReused
    ).length;

    // Calculate overall score (0-100)
    let score = 100;
    score -= pwned * 15; // Heavy penalty for pwned
    score -= weak * 5;
    score -= reused * 3;
    score -= old * 2;

    return {
      overall: Math.max(0, Math.min(100, score)),
      totalPasswords,
      weak,
      reused,
      pwned,
      old,
      strong
    };
  }, [vault]);

  const resolveAlert = (alertId: string, vaultEntryId?: string) => {
    setAlerts((prev) =>
    prev.map((a) => a.id === alertId ? { ...a, isActioned: true } : a)
    );

    if (vaultEntryId) {
      setVault((prev) =>
      prev.map((v) => {
        if (v.id === vaultEntryId) {
          return {
            ...v,
            isPwned: false,
            strength: 'strong',
            lastChanged: new Date().toISOString().split('T')[0],
            password: '••••••••••••' // Simulated new password
          };
        }
        return v;
      })
      );
    }
  };

  return {
    vault,
    alerts,
    healthScore,
    resolveAlert
  };
}