import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-7 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
}
