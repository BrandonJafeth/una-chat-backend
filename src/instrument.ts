import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://4dc055d7b116c6826ddcda90e597814b@o4509973259157504.ingest.us.sentry.io/4510294537732096",

  // Send structured logs to Sentry
  enableLogs: true,
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
