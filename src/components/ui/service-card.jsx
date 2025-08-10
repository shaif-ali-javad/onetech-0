import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const ServiceCard = React.forwardRef(
  (
    {
      title,
      description,
      icon: Icon,
      features = [],
      category,
      href,
      image,
      expandable = false,
      className,
      variant = "elevated",
      ...props
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpanded = () => {
      if (expandable) {
        setIsExpanded(!isExpanded);
      }
    };

    return (
      <Card
        ref={ref}
        variant={variant}
        hover={true}
        animation="lift"
        className={cn("group cursor-pointer", className)}
        onClick={expandable ? toggleExpanded : undefined}
        {...props}
      >
        {/* Image Section */}
        {image && (
          <div className="relative overflow-hidden rounded-t-lg -m-6 mb-6">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            {category && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {category}
                </span>
              </div>
            )}
          </div>
        )}

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {Icon && (
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5 text-indigo-600" />
                </motion.div>
              )}
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {title}
                </CardTitle>
                {category && !image && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 mt-1">
                    {category}
                  </span>
                )}
              </div>
            </div>
            {expandable && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </motion.div>
            )}
          </div>
          <CardDescription className="mt-2 text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Features List - Always visible or expandable */}
          <AnimatePresence>
            {features.length > 0 && (!expandable || isExpanded) && (
              <motion.div
                initial={
                  expandable ? { opacity: 0, height: 0 } : { opacity: 1 }
                }
                animate={
                  expandable ? { opacity: 1, height: "auto" } : { opacity: 1 }
                }
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-4"
              >
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={
                        expandable ? { opacity: 0, x: -10 } : { opacity: 1 }
                      }
                      animate={
                        expandable ? { opacity: 1, x: 0 } : { opacity: 1 }
                      }
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ChevronRightIcon className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progressive disclosure hint */}
          {expandable && !isExpanded && features.length > 0 && (
            <div className="mt-4 text-sm text-indigo-600 font-medium">
              Click to see {features.length} features →
            </div>
          )}
        </CardContent>

        {/* Action Footer */}
        {href && (
          <CardFooter className="mt-6 pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = href;
              }}
            >
              Learn More
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </CardFooter>
        )}
      </Card>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
