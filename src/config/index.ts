/**
 * ByteWorks Agency - Centralized Configuration
 * All company info, social links, and contact details in one place
 */

// Contact Information
export const CONTACT = {
    email: 'macrodriguez2512@gmail.com',
    phone: '+1 (868) 775-9858',
    whatsapp: '+18687759858', // No spaces, for WhatsApp API
} as const;

// Company Info
export const COMPANY = {
    name: 'ByteWorks Agency',
    tagline: 'Digital Solutions That Work',
    website: 'byteworksagency.com',
    founded: 2024,
} as const;

// Social Media Links
export const SOCIAL = {
    instagram: 'https://instagram.com/byteworksagency',
    linkedin: 'https://linkedin.com/company/byteworksagency',
    twitter: 'https://twitter.com/byteworksagency',
} as const;

// API Configuration
export const API = {
    dashboardUrl: import.meta.env.VITE_DASHBOARD_API_URL || 'http://localhost:8000',
} as const;

// Business Hours (for display)
export const HOURS = {
    weekdays: '9:00 AM - 6:00 PM',
    weekend: 'Closed',
    timezone: 'AST (Atlantic Standard Time)',
} as const;
