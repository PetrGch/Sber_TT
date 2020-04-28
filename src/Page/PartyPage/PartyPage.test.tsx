import * as React from 'react'
import { MockedProvider } from '@apollo/react-testing';
import { render, waitForElement } from '@testing-library/react'
import { InMemoryCache, ApolloClient } from 'apollo-boost';

import { SELECTED_CHARACTERS } from './Party/Party';
import PartyPage from './PartyPage';

const MockedProviderAny = MockedProvider as any;

const cache = new InMemoryCache();
cache.writeData({
  data: {
    selectedCharacters: {
      __typename: 'SelectedCharacters',
      rick: null,
      morty: null
    },
  },
});

describe('<PartyPage/> component', () => {
  it('rick and morty cards should be rendered', async () => {
    const mocks = [
      {
        request: {
          query: SELECTED_CHARACTERS
        },
        result: {
          data: {
            selectedCharacters: {
              rick: { image: "rick_image" },
              morty: { image: "morty_image" }
            }
          }
        },
      },
    ];

    const { getByText }: any = render(
      <MockedProviderAny mocks={mocks} cache={cache}>
        <PartyPage />
      </MockedProviderAny>
    )

    const rickCard = await waitForElement(() => getByText(`RICK`));
    const mortyCard = await waitForElement(() => getByText(`MORTY`))

    expect(rickCard).toBeDefined();
    expect(mortyCard).toBeDefined();
  });
});