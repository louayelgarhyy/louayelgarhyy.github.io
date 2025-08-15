import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, X } from "lucide-react"; // For zoom & close icons

interface PopupContextType {
    openPopup: (content: ReactNode) => void;
    closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [popupContent, setPopupContent] = useState<ReactNode>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const lastTap = React.useRef<number>(0);

    const openPopup = (content: ReactNode) => {
        setPopupContent(content);
        setZoom(1); // reset zoom each time
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setPopupContent(null);
    };

    // ✅ Close on ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") closePopup();
        };
        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen]);
    const handleDoubleClick = (e: React.MouseEvent) => {
        // Ignore double-clicks that happen on buttons or their children
        if ((e.target as HTMLElement).closest("button")) return;

        setZoom((prev) => (prev === 1 ? 2 : 1));
    };

    const handleDoubleTap = (e: React.TouchEvent) => {
        // Ignore taps on buttons or their children
        if ((e.target as HTMLElement).closest("button")) return;

        const now = Date.now();
        if (now - lastTap.current < 300) {
            setZoom((prev) => (prev === 1 ? 2 : 1));
        }
        lastTap.current = now;
    };

    return (
        <PopupContext.Provider value={{ openPopup, closePopup }}>
            {children}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
                        onClick={closePopup}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg max-w-[80%] max-h-[80vh] overflow-hidden relative flex justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onDoubleClick={handleDoubleClick}

                            onTouchStart={handleDoubleTap}


                        >
                            {/* Popup Content with Zoom */}
                            <div
                                style={{
                                    transform: `scale(${zoom})`,
                                    transition: "transform 0.3s ease"
                                }}
                                className="flex justify-center items-center"
                            >
                                {popupContent}
                            </div>

                            {/* Controls */}
                            <div className="absolute top-2 right-2 flex gap-2">
                                <button
                                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                                    onClick={(e) => {
                                        e.stopPropagation(); // ✅ Prevent triggering double-click zoom
                                        setZoom((z) => Math.min(z + 0.2, 3));
                                    }}
                                >
                                    <ZoomIn size={18} />
                                </button>

                                <button
                                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                                    onClick={(e) => {
                                        e.stopPropagation(); // ✅ Prevent triggering double-click zoom
                                        setZoom((z) => Math.max(z - 0.2, 0.5));
                                    }}
                                >
                                    <ZoomOut size={18} />
                                </button>

                                <button
                                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                    onClick={(e) => {
                                        e.stopPropagation(); // ✅ Prevent triggering close via backdrop click
                                        closePopup();
                                    }}
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PopupContext.Provider>
    );
};

export const usePopup = (): PopupContextType => {
    const context = useContext(PopupContext);
    if (!context) throw new Error("usePopup must be used within a PopupProvider");
    return context;
};
