import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "./service-card";
import { cn } from "@/lib/utils";

const ServiceGrid = ({
  services = [],
  columns = 3,
  gap = "gap-6",
  showFilters = false,
  categories = [],
  className,
  ...props
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [filteredServices, setFilteredServices] = React.useState(services);

  // Filter services based on selected category
  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter(
          (service) =>
            service.category?.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
  }, [selectedCategory, services]);

  const gridColumns = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      {/* Category Filters */}
      {showFilters && categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              key="all"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Services
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("grid", gridColumns[columns], gap)}
      >
        <AnimatePresence mode="wait">
          {filteredServices.map((service, index) => (
            <motion.div
              key={`${service.id || index}-${selectedCategory}`}
              variants={itemVariants}
              layout
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                category={service.category}
                href={service.href}
                image={service.image}
                expandable={service.expandable}
                variant={service.variant || "elevated"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg mb-2">No services found</div>
          <div className="text-gray-500 text-sm">
            Try selecting a different category or check back later.
          </div>
        </motion.div>
      )}
    </div>
  );
};

export { ServiceGrid };
