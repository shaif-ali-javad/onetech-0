import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card";
import { ServiceCard } from "../service-card";
import { ServiceGrid } from "../service-grid";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    img: ({ children, ...props }) => <img {...props}>{children}</img>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock heroicons
vi.mock("@heroicons/react/outline", () => ({
  ChevronDownIcon: (props) => <svg data-testid="chevron-down" {...props}></svg>,
  ChevronRightIcon: (props) => (
    <svg data-testid="chevron-right" {...props}></svg>
  ),
}));

describe("Card Components", () => {
  describe("Card", () => {
    it("renders with default props", () => {
      render(
        <Card>
          <CardContent>Test content</CardContent>
        </Card>
      );

      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("applies variant classes correctly", () => {
      const { container } = render(
        <Card variant="outlined" data-testid="card">
          <CardContent>Test</CardContent>
        </Card>
      );

      const card = container.firstChild;
      expect(card).toHaveClass("bg-white", "border-2", "border-gray-200");
    });

    it("applies size classes correctly", () => {
      const { container } = render(
        <Card size="lg" data-testid="card">
          <CardContent>Test</CardContent>
        </Card>
      );

      const card = container.firstChild;
      expect(card).toHaveClass("p-8");
    });

    it("renders all card sub-components", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test Description</CardDescription>
          </CardHeader>
          <CardContent>Test Content</CardContent>
          <CardFooter>Test Footer</CardFooter>
        </Card>
      );

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
      expect(screen.getByText("Test Content")).toBeInTheDocument();
      expect(screen.getByText("Test Footer")).toBeInTheDocument();
    });
  });

  describe("ServiceCard", () => {
    const mockService = {
      title: "IT Support",
      description: "Professional IT support services",
      features: ["24/7 Support", "Remote Access", "On-site Visits"],
      category: "IT Services",
      href: "/services/it-support",
    };

    it("renders service card with basic props", () => {
      render(<ServiceCard {...mockService} />);

      expect(screen.getByText("IT Support")).toBeInTheDocument();
      expect(
        screen.getByText("Professional IT support services")
      ).toBeInTheDocument();
      expect(screen.getByText("IT Services")).toBeInTheDocument();
    });

    it("renders features when not expandable", () => {
      render(<ServiceCard {...mockService} expandable={false} />);

      expect(screen.getByText("24/7 Support")).toBeInTheDocument();
      expect(screen.getByText("Remote Access")).toBeInTheDocument();
      expect(screen.getByText("On-site Visits")).toBeInTheDocument();
    });

    it("shows expandable hint when expandable and collapsed", () => {
      render(<ServiceCard {...mockService} expandable={true} />);

      expect(screen.getByText("Click to see 3 features →")).toBeInTheDocument();
      expect(screen.queryByText("24/7 Support")).not.toBeInTheDocument();
    });

    it("expands features when clicked and expandable", async () => {
      render(<ServiceCard {...mockService} expandable={true} />);

      const card = screen
        .getByText("IT Support")
        .closest('[role="button"], div');
      fireEvent.click(card);

      await waitFor(() => {
        expect(screen.getByText("24/7 Support")).toBeInTheDocument();
      });
    });

    it("renders learn more button when href provided", () => {
      render(<ServiceCard {...mockService} />);

      expect(screen.getByText("Learn More")).toBeInTheDocument();
    });

    it("renders icon when provided", () => {
      const MockIcon = (props) => (
        <svg data-testid="mock-icon" {...props}></svg>
      );
      render(<ServiceCard {...mockService} icon={MockIcon} />);

      expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("renders image when provided", () => {
      render(<ServiceCard {...mockService} image="/test-image.jpg" />);

      const image = screen.getByAltText("IT Support");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "/test-image.jpg");
    });
  });

  describe("ServiceGrid", () => {
    const mockServices = [
      {
        id: 1,
        title: "IT Support",
        description: "Professional IT support",
        category: "IT Services",
      },
      {
        id: 2,
        title: "Network Security",
        description: "Secure your network",
        category: "Security",
      },
      {
        id: 3,
        title: "Cloud Services",
        description: "Cloud infrastructure",
        category: "IT Services",
      },
    ];

    it("renders all services", () => {
      render(<ServiceGrid services={mockServices} />);

      expect(screen.getByText("IT Support")).toBeInTheDocument();
      expect(screen.getByText("Network Security")).toBeInTheDocument();
      expect(screen.getByText("Cloud Services")).toBeInTheDocument();
    });

    it("renders category filters when enabled", () => {
      const categories = ["IT Services", "Security"];
      render(
        <ServiceGrid
          services={mockServices}
          showFilters={true}
          categories={categories}
        />
      );

      expect(screen.getByText("All Services")).toBeInTheDocument();
      expect(screen.getByText("IT Services")).toBeInTheDocument();
      expect(screen.getByText("Security")).toBeInTheDocument();
    });

    it("filters services by category", async () => {
      const categories = ["IT Services", "Security"];
      render(
        <ServiceGrid
          services={mockServices}
          showFilters={true}
          categories={categories}
        />
      );

      // Click on Security filter
      fireEvent.click(screen.getByText("Security"));

      await waitFor(() => {
        expect(screen.getByText("Network Security")).toBeInTheDocument();
        expect(screen.queryByText("IT Support")).not.toBeInTheDocument();
        expect(screen.queryByText("Cloud Services")).not.toBeInTheDocument();
      });
    });

    it("shows empty state when no services match filter", async () => {
      const categories = ["IT Services", "Security"];
      render(
        <ServiceGrid services={[]} showFilters={true} categories={categories} />
      );

      expect(screen.getByText("No services found")).toBeInTheDocument();
    });

    it("applies correct grid columns class", () => {
      const { container } = render(
        <ServiceGrid services={mockServices} columns={4} />
      );

      const grid = container.querySelector(".grid");
      expect(grid).toHaveClass(
        "grid-cols-1",
        "md:grid-cols-2",
        "lg:grid-cols-4"
      );
    });
  });
});
