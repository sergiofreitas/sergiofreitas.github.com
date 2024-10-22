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
      <div className="fixed z-20 inset-0 w-[70vw] mx-auto flex items-center justify-center">
        <motion.div
          className="relative card-content bg-white border rounded-lg min-h-[80vh]"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="aspect-square object-fit" src={src} alt={title} />
          </motion.div>
          <motion.div
            className="absolute top-8 left-8"
            layoutId={`title-container-${id}`}
          >
            <span className="text-white text-lg">{category}</span>
            <h2 className="text-4xl font-serif font-bold text-white drop-shadow">
              {title}
            </h2>
          </motion.div>
          <motion.div className="py-8 px-8 overflow-auto max-h-[67vh]" animate>
            {children}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
