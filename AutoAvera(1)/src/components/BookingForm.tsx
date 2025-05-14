import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CalendarClock, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real app, this would send the data to a backend
    console.log(data);
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsSubmitted(true);
        resolve();
      }, 1500);
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-6">
          Your discovery call request has been received. We'll contact you within 1 business day to schedule your call.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-indigo-600 font-medium hover:text-indigo-800"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name*
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
          placeholder="John Smith"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address*
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
          placeholder="john@company.com"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
          placeholder="(123) 456-7890"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
          Company Name*
        </label>
        <input
          id="company"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.company ? 'border-red-500' : 'border-slate-300'}`}
          placeholder="Your Business"
          {...register('company', { required: 'Company name is required' })}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Tell us about your business and what you're looking to achieve..."
          {...register('message')}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
      >
        {isSubmitting ? (
          'Processing...'
        ) : (
          <>
            <CalendarClock className="mr-2" size={20} />
            Schedule Discovery Call
          </>
        )}
      </button>
      
      <p className="text-xs text-slate-500 text-center mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}
