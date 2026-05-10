Integrations look simple from a distance: a configuration screen, some credentials, an HTTP call, and a response. In practice, they sit on one of the most sensitive boundaries of a platform: authentication, certificates, scopes, client secrets, webhooks, credential expiration, token rotation, user experience for people without console access, and operational reliability when an integration stops working.

[overview](#media-overview)

In the Connectors feature at Abstra, I worked on a layer that turns external integrations into reusable project connections. The goal was to let users connect banks, ERPs, productivity tools, and public APIs without reimplementing authentication and request assembly every time they needed to use an API.

At its core, the feature follows a simple user flow:

- The user chooses a connector and fills in the required credentials once.
- The system stores those credentials as the connector configuration for that project connection.
- Every time an endpoint is called as an action, the connector reuses that saved configuration to authenticate, build the request, and execute the call.

On top of that core flow, I also added two operational improvements:

- A credential request flow, so someone on a team can ask the right person for credentials without exposing the whole project.
- Certificate and credential expiration validation, with email notifications before a critical connection stops working.

### The problem

Abstra is a low-code platform for building business processes. With SmartChat, the goal was to let users describe operational work in natural language and have the AI execute the steps by calling the right integrations.

A typical workflow could look like this: the AI opens the company's email inbox, finds supplier invoices, checks the invoice data, validates whether the payment is due, records the payable in the internal system, triggers a Pix payment through a banking connector, and then updates the process status once the payment is confirmed.

For that to work, the AI needed to know how to use integrations as tools. It could decide which connector action to call, pass the right parameters, and chain actions across systems.

That created a hard product and engineering requirement: integrations needed to be **reusable, secure, and easy to configure**. A user should be able to connect an external system once, save the credentials as a project connection, and let the AI reuse that connection every time it needed to execute an action.

Connectors live on a difficult boundary. They need to be easy enough for end users to configure, but strict enough to handle production credentials. Banking APIs make the challenge sharper: many flows require digital certificates, private keys, application tokens, sandbox and production environments, specific headers, mTLS authentication, and calls across multiple API groups.

Before this work, creating a connection often depended on the console user having every credential available. That is rarely true in companies. The person building the automation is often not the same person who has access to the bank portal, OAuth secret, certificate, or private key.

### The approach

After I became responsible for this feature, most of my work centered around the connection entity. A connection has a name, connector type, project, author, configuration, and status. The status explicitly represents active connections and connections that are still waiting for credentials.

The important part is that providers can implement their own requirements independently, which allows the platform to support OAuth connectors, token-based connectors, RSA and ECDSA key-based connectors, and mTLS connectors pre-configured.

### Improvements I added while owning the feature

[video](#video-credential-request)

- **Credential request flow:** this is an additional layer on top of the core connector flow. It allows a connection to exist before it is ready to use. While it is `pending_credentials`, it appears in the project but cannot execute actions. Once the invited person submits valid credentials, the credentials are persisted, the request is marked as completed, and the connection becomes `active`.
- **Expiration layer:** for continuous operation, connectors that use certificates or expiring credentials declare how to extract the expiration date. An admin job walks the affected connections, computes the urgency level, and sends deduplicated emails using Redis.
- **Why these improvements mattered:** these were not the base connector mechanism; they were improvements I added after paying attention to how the feature was used in real workflows. People often needed someone else to provide credentials, and certificate-based connectors needed proactive maintenance before they broke in production.

### Series posts

- Connection Credentials Request: Unblocking Integrations Without Sharing Project Access.
- Implementing Itaú Banking APIs.
- Certificate And Credential Expiration Validation With Preventive Email Alerts.

### What this feature delivered

This work reduced friction in creating integrations by turning connector setup into a reusable configuration step. Users provide credentials once, the platform stores them as connection configuration, and actions can reuse that configuration every time they call an external endpoint.

The additional credential request and expiration alert flows made the feature more practical in real companies, where the technical user may not own the secrets and where certificates or credentials can expire independently from the automation code.
