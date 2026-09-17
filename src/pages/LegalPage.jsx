import LegalLayout from '../components/LegalLayout';
import { usePageTitle } from '../lib/usePageTitle';

export default function LegalPage({ content, extra }) {
  usePageTitle(content.title);
  return (
    <LegalLayout
      title={content.title}
      lastUpdated={content.lastUpdated}
      sections={content.sections}
      extra={extra}
    />
  );
}
