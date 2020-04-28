import { SET_DELETED_ID, SELECT_CARD } from "./apolloClient.gql";

export function deleteCard(_root: any, variables: { id: string }, { cache }: any) {
    const previous = cache.readQuery({ query: SET_DELETED_ID });
    const data = {
        deletedId: [...previous.deletedId, variables.id],
    };
    cache.writeQuery({ query: SET_DELETED_ID, data });
    
    return null;
}

interface SelectCardVariables {
    character: {
        name: string;
    }
}

export function selectCard(_root: any, variables: SelectCardVariables, { cache }: any) {
    const previous = cache.readQuery({ query: SELECT_CARD });

    if (/rick/.test(variables.character.name.toLowerCase())) {
        const data = {
            selectedCharacters: {
                ...previous.selectedCharacters, rick: variables.character
            }
        }
        cache.writeQuery({ query: SELECT_CARD, data });
    }

    if (/morty/.test(variables.character.name.toLowerCase())) {
        const data = {
            selectedCharacters: {
                ...previous.selectedCharacters, morty: variables.character
            }
        }
        cache.writeQuery({ query: SELECT_CARD, data });
    }
    
    return null;
}