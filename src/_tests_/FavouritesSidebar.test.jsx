import { render, screen, fireEvent } from "@testing-library/react";
import FavouritesSidebar from "../components/FavouritesSidebar";
import { ChakraProvider } from "@chakra-ui/react";

test("adds property to favourites when dropped", () => {
  const mockAddToFavourites = jest.fn();

  const mockProperty = {
    id: "prop1",
    type: "House",
    price: 750000,
    picture: null,
  };

  render(
    <ChakraProvider>
      <FavouritesSidebar
        favourites={[]}
        addToFavourites={mockAddToFavourites}
        removeFromFavourites={jest.fn()}
        clearFavourites={jest.fn()}
      />
    </ChakraProvider>
  );

  // Get the heart button (drop target)
  const heartButton = screen.getByLabelText(/toggle favourites/i);

  // Mock dataTransfer
  const dataTransfer = {
    getData: jest.fn(() => JSON.stringify(mockProperty)),
  };

  // Fire drop event
  fireEvent.drop(heartButton, {
    dataTransfer,
  });

  // Assertion
  expect(mockAddToFavourites).toHaveBeenCalledTimes(1);
  expect(mockAddToFavourites).toHaveBeenCalledWith(mockProperty);
});
