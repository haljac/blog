import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes');
  
  // Sort by date (newest first)
  const sortedNotes = notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "Hall's Notes",
    description: "A collection of thoughts and observations on technology, productivity, and life",
    site: context.site,
    items: sortedNotes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.date,
      description: note.data.excerpt,
      author: note.data.author || 'Hall',
      link: `/notes/${note.slug}/`,
      categories: note.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}
