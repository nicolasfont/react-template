import { App } from "./App";

import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render Hello World", () => {
    render(<App />);

    expect(screen.getByText("Hello World")).not.toBeNull();
  });
});
