import { render, screen, fireEvent } from "@testing-library/react";
import HomeSearch from "../components/HomeSearch";
import { ChakraProvider } from "@chakra-ui/react";

test("Calls onSearch with form values when Search is clicked", () => {
  const mockOnSearch = jest.fn();

  render(
    <ChakraProvider>
      <HomeSearch onSearch={mockOnSearch} />
    </ChakraProvider>
  );

  // Fill in form fields
  fireEvent.change(screen.getByLabelText(/property type/i), {
    target: { value: "House" },
  });

  fireEvent.change(screen.getByLabelText(/min price/i), {
    target: { value: "100000" },
  });

  fireEvent.change(screen.getByLabelText(/max price/i), {
    target: { value: "500000" },
  });

  fireEvent.change(screen.getByLabelText(/min bedrooms/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/max bedrooms/i), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText(/min date added/i), {
    target: { value: "2023-01-01" },
  });

  fireEvent.change(screen.getByLabelText(/postcode/i), {
    target: { value: "BR1" },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /search/i }));

  // Assertions
  expect(mockOnSearch).toHaveBeenCalledTimes(1);

  expect(mockOnSearch).toHaveBeenCalledWith({
    type: "House",
    minPrice: "100000",
    maxPrice: "500000",
    minBedrooms: "2",
    maxBedrooms: "4",
    dateAdded: "2023-01-01",
    postcode: "BR1",
  });
});
