import { motion } from 'framer-motion';
import { Bell, ChartArea, Clock, MessageSquare, Phone, Users } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
    >
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-4 text-white">
        <h3 className="text-xl font-semibold">AI Agent Dashboard</h3>
        <p className="text-sky-100 text-sm">Agent performance metrics and conversation insights</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-slate-700">Call Minutes</h4>
              <Clock size={18} className="text-sky-500" />
            </div>
            <p className="text-2xl font-bold text-sky-700">124.5</p>
            <p className="text-xs text-sky-600">+12% from last week</p>
          </div>
          
          <div className="bg-sky-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-slate-700">Conversations</h4>
              <MessageSquare size={18} className="text-sky-500" />
            </div>
            <p className="text-2xl font-bold text-sky-700">38</p>
            <p className="text-xs text-sky-600">+8% from last week</p>
          </div>
          
          <div className="bg-sky-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-slate-700">Leads Generated</h4>
              <Users size={18} className="text-sky-500" />
            </div>
            <p className="text-2xl font-bold text-sky-700">12</p>
            <p className="text-xs text-sky-600">+25% from last week</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-700 mb-3">Performance Overview</h4>
          <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center">
            <ChartArea size={32} className="text-sky-500 mr-2" />
            <span className="text-slate-600 text-sm">Performance metrics visualization</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-slate-700">Recent Calls</h4>
            <Bell size={16} className="text-sky-500" />
          </div>
          
          {[
            { name: "John Smith", time: "10:30 AM", duration: "5:12" },
            { name: "Sarah Johnson", time: "Yesterday", duration: "8:45" },
            { name: "Michael Brown", time: "Yesterday", duration: "3:21" }
          ].map((call, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                  <Phone size={14} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{call.name}</p>
                  <p className="text-xs text-slate-500">{call.time}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-600">{call.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
