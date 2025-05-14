import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type CTAButtonProps = {
  children: ReactNode;
  primary?: boolean;
  className?: string;
  withCalendar?: boolean;
  onClick?: () => void;
};

export default function CTAButton({ children, primary = true, className = '', withCalendar = false, onClick }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg shadow-md transition transform hover:scale-105";
  
  const primaryClasses = "bg-sky-500 text-white hover:bg-sky-600";
  const secondaryClasses = "bg-white text-sky-800 border border-sky-200 hover:bg-sky-50";
  
  const combinedClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  
  const calendarAttributes = withCalendar ? {
    'data-cal-link': "ghlsetup/discovery-call",
    'data-cal-namespace': "discovery-call",
    'data-cal-config': '{"layout":"month_view"}'
  } : {};
  
  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      {...calendarAttributes}
    >
      {children}
      {primary && <ArrowRight className="ml-2" size={20} />}
    </button>
  );
}
