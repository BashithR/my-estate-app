import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";

/**
 * Mock property data so the test is predictable
 */
jest.mock("../data/properties.json", () => ({
  properties: [
    {
      id: "prop1",
      type: "House",
      title: "Test House",
      bedrooms: 3,
      price: 750000,
      tenure: "Freehold",
      description: "Test house",
      location: "Test location",
      picture: null,
      images: null,
      url: "test.html",
      floorPlan: null,
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
    },
  ],
}));

test("prevents duplicate favourites", () => {
  render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );

  // 👉 Find the Add to Favourites button by visible text
  const addButton = screen.getByText(/add to favourites/i);

  // Click twice (duplicate attempt)
  fireEvent.click(addButton);
  fireEvent.click(addButton);

  // 👉 Open favourites sidebar (heart icon button)
  const toggleFavourites = screen.getByRole("button", {
    name: /toggle favourites/i,
  });
  fireEvent.click(toggleFavourites);

  // 👉 The property type "House" should appear ONLY once
  const favouriteItems = screen.getAllByText(/Test House/i);
  expect(favouriteItems).toHaveLength(1);
});
