import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const publicationSchema = z.object({
    title: z.string(),
    authors: z.array(z.string()),
    date: z.coerce.date(),
    venue: z.string(),
    venueShort: z.string().optional(),
    publicationType: z.string(), // "journal", "conference", "thesis", "preprint"
    doi: z.string().optional(),
    url: z.string().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    featured: z.boolean().optional(),
});

const talkSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
    event: z.string(),
    location: z.string().optional(),
    abstract: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
    pdf: z.string().optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    url: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type PublicationSchema = z.infer<typeof publicationSchema>;
export type TalkSchema = z.infer<typeof talkSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const publicationCollection = defineCollection({ schema: publicationSchema });
const talkCollection = defineCollection({ schema: talkSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'publication': publicationCollection,
    'talk': talkCollection,
    'project': projectCollection,
};
