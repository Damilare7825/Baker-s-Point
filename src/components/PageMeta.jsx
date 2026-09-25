import { useEffect } from 'react';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;

    const tags = [
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', window.location.href],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description]
    ];

    tags.forEach(([attribute, key, content]) => {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, [title, description]);

  return null;
}
