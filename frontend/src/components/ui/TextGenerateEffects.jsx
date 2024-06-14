import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

const TextGenerateEffects = ({words,
    className}) => {
        const [scope, animate] = useAnimate();
        let wordsArray = words.split(" ");

        useEffect(() => {
            animate(
              "span",
              {
                opacity: 1,
              },
              {
                duration: 2,
                delay: stagger(0.2),
              }
            );
          }, [scope.current]);

          const renderWords = () => {
            return (
              <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                  return (
                    <motion.span
                      key={word + idx}
                      className={` ${className?className:"text-white"}`}
                    >
                      {word}{" "}
                    </motion.span>
                  );
                })}
              </motion.div>
            );
          };
  return (
    <div>
       <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={`${className?className:"text-white"} text-2xl leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
    </div>
  )
}

export default TextGenerateEffects
