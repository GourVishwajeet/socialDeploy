import { useNavigate } from "react-router-dom";

interface DiscardDialogProps {
  onClose: () => void;
}

export default function DiscardDialog({ onClose }: DiscardDialogProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-80">
        <div className="p-4 border-b-[1px]">
          <h2 className="text-lg font-semibold text-center">Discard post?</h2>
          <p className="text-sm text-gray-300 text-center mt-2">
            If you leave, your edits won't be saved.
          </p>
        </div>
        <div className="mt-4 space-y-2 w-full">
          <button
            className="w-full text-red-500 font-semibold border-b-[1px] pb-3"
            onClick={() => {
              onClose();
              navigate("/createpostpage");
            }}
          >
            Discard
          </button>

          <button className="w-full py-3 text-white font-semibold" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
