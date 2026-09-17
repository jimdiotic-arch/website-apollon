import { Link } from 'react-router-dom';
import { SUPPORT_EMAIL } from '../config';

function linkify(text) {
  const email = SUPPORT_EMAIL;
  const parts = text.split(email);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a
            key={`email-${i}`}
            href={`mailto:${email}`}
            className="text-violet-300 underline-offset-2 hover:underline"
          >
            {email}
          </a>,
          part,
        ],
  );
}

function ContentBlock({ content }) {
  const blocks = content.trim().split(/\n\n+/);

  return blocks.map((block, i) => {
    const lines = block.split('\n');
    const bulletLines = lines.filter((line) => line.startsWith('- '));
    const textLines = lines.filter((line) => !line.startsWith('- '));

    return (
      <div key={i} className="space-y-3">
        {textLines.map((line, j) => (
          <p key={`p-${j}`}>{linkify(line)}</p>
        ))}
        {bulletLines.length > 0 && (
          <ul className="list-disc space-y-2 pl-5">
            {bulletLines.map((line, j) => (
              <li key={`li-${j}`}>{linkify(line.slice(2))}</li>
            ))}
          </ul>
        )}
      </div>
    );
  });
}

export default function LegalLayout({ title, lastUpdated, sections, extra }) {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <nav className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-violet-300" aria-label="Νομικές σελίδες">
        <Link to="/privacy" className="hover:text-white">
          Πολιτική Απορρήτου
        </Link>
        <Link to="/terms" className="hover:text-white">
          Όροι Χρήσης
        </Link>
        <Link to="/account-deletion" className="hover:text-white">
          Διαγραφή Λογαριασμού
        </Link>
      </nav>
      <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">Τελευταία ενημέρωση: {lastUpdated}</p>
      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-300">
        {sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">{section.heading}</h2>
            <ContentBlock content={section.content} />
          </section>
        ))}
      </div>
      {extra}
    </main>
  );
}
