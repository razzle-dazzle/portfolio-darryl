import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact me for your next project.',
};

export default async function ContactPage() {
  
  return (
    <section className="w-full max-w-7xl m-auto relative text-black dark:text-white mt-0 md:mt-12">
      <h1 className="font-500 text-3xl mb-12">Let's Work Together</h1>
      <p className='text-md'>Please consider me for your next project!</p>
      <p className='text-xl'><a href="mailto:daz@darryloctober.co.uk" target='_blank'>Get in touch!</a></p>
    </section>
  );
}
