import { screen, render } from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

it("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);
  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays correct error message", () => {
  render(<BandComponent error="List of bands cannot be null" band={null} />);
  const error = screen.getByRole("heading", {
    name: /List of bands cannot be null/i,
  });
  expect(error).toBeInTheDocument();
});
