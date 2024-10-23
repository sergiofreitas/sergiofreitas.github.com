import { motion } from "framer-motion";

type ExpandableProps = {
  id: string;
  src: string;
  title: string;
  category: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const Expandable = ({
  id,
  src,
  title,
  category,
  onClose,
  children,
}: ExpandableProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="bg-zinc-900/50 fixed inset-0 z-10"
        onClick={onClose}
      />
      <div className="fixed z-20 inset-0 w-[90vw] sm:w-[70vw] max-w-xl mx-auto flex items-center justify-center">
        <motion.div
          className="relative card-content bg-white border rounded-lg min-h-[80vh] max-h-screen overflow-auto"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="aspect-[4/3] object-cover rounded-lg"
              src={src}
              alt={title}
            />
          </motion.div>
          <motion.div
            className="absolute top-10 left-4 sm:left-8 pr-4"
            layoutId={`title-container-${id}`}
          >
            <span className="text-white text-sm sm:text-lg">{category}</span>
            <h2
              className="text-xl sm:text-4xl font-serif font-bold text-white"
              style={{ textShadow: "0 0 4px #000" }}
            >
              {title}
            </h2>
          </motion.div>
          <motion.div className="py-8 px-8 overflow-auto max-h-[67vh]" animate>
            {children}
          </motion.div>

          <span
            onClick={onClose}
            className="absolute top-1 right-3 text-white drop-shadow text-4xl font-serif font-bold"
            style={{ textShadow: "0 0 4px #000" }}
          >
            &times;
          </span>
        </motion.div>
      </div>
    </>
  );
};
