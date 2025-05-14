import { motion } from 'framer-motion';

type TestimonialProps = {
  quote: string;
  author: string;
  company: string;
  image: string;
};

export default function Testimonial({ quote, author, company, image }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-6 rounded-xl border border-slate-200 shadow-md"
    >
      <div className="flex items-start mb-4">
        <span className="text-sky-500 text-5xl leading-none mr-2">"</span>
      </div>
      <p className="text-slate-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-slate-800">{author}</h4>
          <p className="text-sm text-slate-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
