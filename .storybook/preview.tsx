import React from "react";
import { PageProgress } from "../src/PageProgress";
import { NotificationPop } from "../src/Notification/Pop";
import { InputGoogleLoadScript } from "../src/Input/Google/LoadScript";
import { env_log, getProcessEnv } from "fenextjs-functions";
import "../styles/index.css";

// Ya no usamos "useReportWebVitals" porque es exclusivo de Next.js
// Si quieres conservar métricas de rendimiento, podrías usar Performance API nativa

const preview = {
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
    (Story) => {
      // Puedes conservar un log manual si deseas
      if (typeof performance !== "undefined") {
        env_log("Storybook loaded", {
          name: "metric",
          color: "#cf00ff",
        });
      }

      return (
        <InputGoogleLoadScript
          googleMapsApiKey={getProcessEnv("NEXT_PUBLIC_GOOGLE_KEY") ?? undefined}
        >
          <NotificationPop />
          <PageProgress />
          <Story />
        </InputGoogleLoadScript>
      );
    },
  ],
};

export default preview;
