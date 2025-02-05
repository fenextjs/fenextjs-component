import React, { ReactNode } from "react";
import {
    QueryClient,
    QueryClientProvider as QueryClientProviderTanstack,
} from "@tanstack/react-query";

/**
 * Properties for the QueryClientProvider component.
 */
export interface QueryClientProviderProps {
    children?: ReactNode;
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProviderTanstack client={queryClient}>
                {children}
            </QueryClientProviderTanstack>
        </>
    );
};
