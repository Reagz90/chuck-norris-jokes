import { render, screen, fireEvent } from '@testing-library/react';
import ChuckNorrisJokes from "./ChuckNorrisJokes";

describe("ChuckNorrisJokes", () => {
  it("fetches a joke and displays it on button clicks", async () => {
    //Mock the fetch function to return a specific joke response
    const jokeResponse ={
      value: "Chuck Norris can divide by Zero",
    };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeResponse),
    });

    //Render the ChuckNorrisJokes component
    render(<ChuckNorrisJokes />); 

    //Click the "Give a Joke!" button
    fireEvent.click(screen.getByText("Give me a joke!"));

    //Wait for the joke to be fetched and displayed
    const jokeElement = await screen.findByText(jokeResponse.value);
    
    //Assert that the fetched joke is displayed correctly
    expect(jokeElement).toBeInTheDocument();

    //Restore the original fetch function
    global.fetch.mockRestore();
  })
})

