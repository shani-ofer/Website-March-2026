import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: Array<{
    title: string;
    text: string;
  }>;
}

export function Modal({ isOpen, onClose, title, content }: ModalProps) {
  if (!isOpen) return null;

  const renderTitleWithBold = (titleText: string) => {
    const colonIndex = titleText.indexOf(':');
    if (colonIndex === -1) return titleText;

    const firstWord = titleText.substring(0, colonIndex);
    const rest = titleText.substring(colonIndex);

    return (
      <>
        <span className="font-bold">{firstWord}</span>
        {rest}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl pointer-events-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-deep-navy text-2xl">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-[#555]" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {content.map((section, index) => (
            <div key={index} className="space-y-2">
              <p className="text-deep-navy text-lg">
                {renderTitleWithBold(section.title)}
              </p>
              <p className="text-[#555] body-text leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
