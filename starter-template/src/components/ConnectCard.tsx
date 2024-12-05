import { X, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ConnectCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectCard = ({ isOpen, onClose }: ConnectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div 
        ref={cardRef}
        className="px-5 py-8 rounded-3xl bg-gray-800 z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl backdrop-blur border border-white/30 after:outline-white/20 p-8 max-w-md w-full mx-4 relative"
      >
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-white/70 hover:text-white transition-colors"
        >
          <X className="size-5" />
        </button>
        
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl font-serif text-white">Let&apos;s Connect!</h3>
          <p className="text-white/60 text-center">
            I&apos;m always open to new opportunities and connections. Let&apos;s connect on LinkedIn!
          </p>
          
          <a 
            href="https://www.linkedin.com/in/korada-saikiran-910a621a8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0077b5] text-white px-6 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:bg-[#006396] transition duration-300 cursor-pointer absolute z-40"
          >
            <Linkedin className="size-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}; 