import { render, screen } from "@testing-library/react";
import HomeSearch from "../components/HomeSearch";
import { ChakraProvider } from "@chakra-ui/react";

test("renders all form elements and the search button", () => {
  const mockOnSearch = jest.fn();

  render(
    <ChakraProvider>
      <HomeSearch onSearch={mockOnSearch} />
    </ChakraProvider>
  );

  // Property type
  expect(screen.getByLabelText(/property type/i)).toBeInTheDocument();

  // Prices
  expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();

  // Bedrooms
  expect(screen.getByLabelText(/min bedrooms/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/max bedrooms/i)).toBeInTheDocument();

  // Date added
  expect(screen.getByLabelText(/min date added/i)).toBeInTheDocument();

  // Postcode
  expect(screen.getByLabelText(/postcode/i)).toBeInTheDocument();

  // Search button
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
});
