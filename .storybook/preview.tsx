import React from "react";
import type { Preview } from "@storybook/react";
import { PageProgress } from "../src/PageProgress";
import { NotificationPop } from "../src/Notification/Pop";
import { InputGoogleLoadScript } from "../src/Input/Google/LoadScript";

import "../styles/index.css";
import "../styles/font.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <InputGoogleLoadScript googleMapsApiKey={process?.env?.['NEXT_PUBLIC_GOOGLE_KEY']}
                libraries={['marker']}
            >
                <NotificationPop />
                <PageProgress />
                <Story />
            </InputGoogleLoadScript>
        ),
    ],
};

export default preview;
