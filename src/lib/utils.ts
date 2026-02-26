export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function getCategoryLabel(slug: string): string {
  const labels: Record<string, string> = {
    'lead-generation-systems': 'Lead Generation Systems',
    'cold-email-strategy': 'Cold Email Strategy',
    'ideal-customer-profile': 'Ideal Customer Profile',
    'outreach-tools-workflows': 'Outreach Tools & Workflows',
  };
  return labels[slug] || slug;
}
