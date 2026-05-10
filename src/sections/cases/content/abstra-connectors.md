Abstra is a **low-code platform** for building financial and operational workflows in **Python**, with **AI features** that help teams turn business processes into executable automations.

In the Connectors feature, I worked on the **integration layer** that turns external APIs into reusable project connections. The goal was to let users connect banks, ERPs, CRMs, productivity tools, and public APIs without rebuilding **authentication**, **credential handling**, or **request assembly** every time a workflow needed to call an external system.

At its core, the feature follows a simple user flow:

1. The user selects a connector and provides the required credentials once.
2. The platform stores those credentials as the configuration for that project connection.
3. Every time a workflow action calls an endpoint, the connector reuses the saved configuration to **authenticate**, build the request, and execute the call.

My main responsibility was to expand the **connector catalog** according to customer needs, usually delivering around **3 to 5 connectors per week**. These connectors covered **banking APIs**, **ERP systems**, **CRM platforms**, productivity tools, legal systems, and **government services**.

Examples of connectors I implemented or maintained:

|  |  |  |
| --- | --- | --- |
| Banco do Brasil | Banrisul | Bradesco |
| BS2 | Certta | ClickUp |
| CNJ DJE | CNJ Datajud | Conta Simples | Data Rudder |
| Dynamics Business | Google Docs | Google Sheets |
| GRF-OFM | Itaú | LinkedIn |
| Microsoft Outlook | Microsoft SharePoint | Microsoft Teams | Monday.com | MXM |
| Nexxera | Omie | Projuris |
| Santander | Serpro | Sicredi |
| Siscom | Snowflake | Vindi |


## Improvements I added while owning the feature

### **AI connector error analysis:** 

Implemented a **daily job** that audits recent integration errors from production projects, analyzes them with **AI**, and sends correction suggestions. 

For example, it can detect **`400` errors** caused by malformed parameters, **rate-limit failures** that require delays between requests, or recurring authentication issues that need credential review.

### **Credential encryption:** 

Implemented the **credential encryption and decryption flow** used before persisting sensitive connector data in the database.

The encryption key was managed through **AWS Secrets Manager**, and I validated that credentials could be encrypted, safely stored, decrypted, and reused without data loss. I also added tests to verify the full encryption/decryption lifecycle and prevent regressions in credential handling.

[video](#video-credential-request)
### **Credential request flow:** 
Added a flow that allows a connection to exist before it is ready to execute. While a connection is **`pending_credentials`**, it appears in the project but cannot run actions. The builder can request credentials from the right person, and once that person submits valid credentials, the platform persists them, marks the request as completed, and activates the connection.

### **Expiration prevent alerts:** 
Added preventive validation for connectors that rely on **certificates** or **expiring credentials**. Providers declare how to extract expiration dates, and an admin job scans affected connections, computes urgency levels, and sends **deduplicated email alerts using Redis**.

## What this feature delivered

This work made integrations faster to create, safer to operate, and easier to reuse across workflows. Instead of hardcoding API logic or asking users to repeatedly configure the same authentication details, the platform stores **connector configuration** once and reuses it whenever an action needs to call an external endpoint.

The **credential request** and **expiration alert** flows made the feature more practical for real companies, where the person building the automation is often not the person who owns **bank credentials**, **OAuth secrets**, **certificates**, or **private keys**.

The **AI error analysis layer** also improved operational visibility by turning raw integration failures into actionable debugging suggestions, helping teams understand whether a failure came from **invalid payloads**, **expired credentials**, **rate limits**, or **provider-specific API behavior**.
