import React from 'react';
import PageMeta from './PageMeta';
import './PolicyDocument.css';

function renderInline(text, keyPrefix) {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|\[Privacy Policy\])/g;
  return text.split(pattern).filter(Boolean).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith('**')) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*')) return <em key={key}>{part.slice(1, -1)}</em>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={key} href={link[2]}>{link[1]}</a>;
    if (part === '[Privacy Policy]') return <a key={key} href="/privacy">Privacy Policy</a>;
    return part;
  });
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const blocks = [];
  let paragraph = [];
  let list = [];
  let listType = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(paragraph.join(' '), `p-${blocks.length}`)}</p>);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    const List = listType === 'ordered' ? 'ol' : 'ul';
    blocks.push(<List key={`list-${blocks.length}`}>{list.map((item, index) => <li key={index}>{renderInline(item, `li-${blocks.length}-${index}`)}</li>)}</List>);
    list = [];
    listType = null;
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line) { flushParagraph(); flushList(); return; }
    if (/^---+$/.test(line)) { flushParagraph(); flushList(); blocks.push(<hr key={`hr-${index}`} />); return; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(); flushList();
      const Level = `h${heading[1].length}`;
      blocks.push(<Level key={`h-${index}`}>{renderInline(heading[2], `h-${index}`)}</Level>);
      return;
    }
    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = ordered ? 'ordered' : 'unordered';
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      list.push((unordered || ordered)[1]);
      return;
    }
    flushList();
    paragraph.push(line);
  });
  flushParagraph();
  flushList();
  return blocks;
}

export default function PolicyDocument({ markdown, title, description }) {
  return (
    <div className="policy-page dot-bg">
      <PageMeta title={title} description={description} />
      <div className="container">
        <article className="policy-card">
          {renderMarkdown(markdown)}
        </article>
      </div>
    </div>
  );
}
