**Growth Hacking Team:** Designer, CTO, Growth Lead, Copywriter, Traffic Manager, and the Developer (me).

**Duration:** 6 months.

**Contributions:** +30 pages front-end rebuild using **Next.js**, performance/SEO improvements, conversion tracking setup, form lifecycle fixes, CRM integrations, Google Calendar API integration, and A/B and UTM parameter tests.

[preview](#media-overview)

### Understanding the brief

To improve **Feedz's marketing site**, a key acquisition channel, by making it faster, more secure, and more SEO- and ad-friendly.

The goal was to **reduce lead acquisition costs** and improve user experience with flexibility for marketing experiments.

When I joined, the website was a legacy CodeIgniter PHP and jQuery project with outdated client-side integrations, weak SEO foundations, and no backend logic to securely manage API calls.

### Planning

As the **only developer** on the project, I collaborated closely with the Growth team to translate business needs into technical decisions.

- **Audit:** Identified blockers including poor PageSpeed scores (**47 desktop / 41 mobile**), broken SEO tags, search engine crawlers not indexing correctly, exposed API keys, no backend logic, and slow development cycles.
- **Strategy:** Proposed a complete front-end rebuild using **Next.js** to modernize the structure, improve performance, and enable best practices in development and experimentation.
- **Planning:** The rebuild was broken down by page and prioritized by traffic volume. We had **6 months** to design, develop, deploy, test forms, and validate integrations.
- **Design and Content:** Worked closely with the designer and copywriter throughout the process. We followed a clear handoff flow using wireframes, components, and content in **Figma**, while staying aligned on visual and messaging consistency.
- **Ceremonies and Workflow:** Weekly planning meetings, dailies, and async check-ins kept everyone aligned. We shared updates and prioritized tasks together every Monday.
- **Rebuild and tests:** Each page delivery included testing, optimization, and integration work covering **SEO, performance, forms, and third-party services**.

### The development process

The core of this rebuild centered around transforming a legacy, monolithic CodeIgniter PHP site into a modern, modular, and high-performance frontend architecture using **Next.js**.

My primary goal was to implement **scalable engineering best practices** that would directly support marketing agility, SEO strategy, and future product experiments.

### Stack and architecture choices

- **Framework:** Migrated to **Next.js** for its flexibility with SSR, SSG, and API Routes. This provided the foundation needed for performance, SEO, and backend integrations.
- **Rendering Strategy:** Adopted hybrid rendering with **SSG** for high-traffic, SEO-critical landing pages and **SSR** for dynamic content and A/B test variants.
- **Component based architecture:** Built a component-based design system using **React and CSS Modules** to ensure consistency, reusability, and rapid development.

### Frontend: architecture, design system, and scalability

The frontend rebuild went far beyond a simple stack migration. It represented a complete restructuring of how marketing, design, and engineering collaborated to launch pages, test ideas, and improve the user experience.

### Smart componentization

We built a highly reusable component system using **React and CSS Modules**, allowing us to quickly assemble new pages with visual consistency and no code duplication.

Each component was designed to be **configurable via props**, supporting both visual and functional variations depending on the needs of each page.

I also applied design patterns like **Compound Components**, enabling intuitive composition and better control over internal behavior, especially in shared UI elements like modals, tabs, and dropdowns.

### Design system and responsiveness

Together with the designer, we defined a **lightweight design system** with color tokens, responsive typography, standardized spacing, and UI states such as hover, focus, and error states. This brought:

- **Visual consistency** across all pages.
- **Easier maintenance and scalability** of new UI elements.
- **Performance optimization** without heavy UI libraries.

The entire interface used Next.js features like **`next/image`** for automatic lazy loading and responsive images.

### The deployment process

### CI/CD with AWS ECS and ECR

This process was built in collaboration with one of the company's DevOps, who oversaw AWS access and infrastructure permissions. I was responsible for **researching the deployment strategy** and fully implementing the pipeline logic, while he provided and managed the AWS credentials I did not have access to.

On each commit to the production or stage branches, the pipeline:

- Built a **Docker image** of the Next.js app.
- Pushed the image to **AWS ECR** (Elastic Container Registry).
- Triggered a rolling update on the corresponding **ECS** (Elastic Container Service) cluster.

The setup used a minimal Alpine Linux-based Dockerfile and included:

- **Installing required dependencies.**
- **Building the Next.js app** with `npm run build`.
- **Disabling telemetry** and setting production-ready environment variables.

We set environment variables and included a custom step to validate image file sizes (`.svg`, `.webp`), ensuring assets remained below **900 KB** to avoid performance bottlenecks.

This deployment flow allowed for **safe, consistent, and fast releases** across staging and production environments, fully aligned with DevOps best practices.

### The result

### Performance gains

The front-end rebuild with Next.js led to significant improvements in overall performance:

- **PageSpeed Insights scores increased from 47 to 96 on desktop**, directly improving user experience and reducing bounce rates.
- **Largest Contentful Paint** was optimized through server-side rendering, lazy loading, and lightweight image formats such as WebP and SVG.
- **Bundle size** was reduced by eliminating unused code and leveraging tree-shaking, ensuring faster load times.

### SEO recovery and visibility

SEO foundations were rebuilt to restore organic search performance:

- Proper use of **`robots.txt`, dynamic meta tags, and canonical URLs** ensured correct indexing by search engines.
- **Organic traffic improved steadily**, confirmed through Google Search Console.
- **Headings, internal linking, and semantic structure** were optimized for technical SEO best practices.

### Faster experimentation

The new architecture enabled rapid experimentation and data-driven marketing:

- **Isolated components** allowed A/B testing without backend dependency.
- Native support for **UTM parameters and landing page variants** improved tracking and iteration.
- The marketing team gained the autonomy to test **new pages and hypotheses** more frequently.

### Improved security and scalability

Key architectural changes addressed previous vulnerabilities and future-proofed the platform:

- All **API tokens and third-party integrations** were securely managed through backend API routes.
- **No sensitive data** was exposed on the client side.
- The new structure supports scaling to future integrations and additional services with minimal friction.

### Reliable tracking and analytics

Marketing analytics and conversion tracking became more accurate and actionable:

- **Google Tag Manager** was implemented with custom events for each page type.
- **UTM parameters** were parsed and stored to enable cohort-based performance analysis.
- Improved form flow tracking enabled a clearer view of the **lead journey from first visit to demo scheduling**.

### Plus: Google Calendar integration

Later in this project, to optimize the demo scheduling workflow and increase lead conversion rates, we implemented a seamless **Google Calendar integration** using a service account and Next.js backend API routes.

**Background:**

Previously, a pre-sales representative manually contacted each lead who converted on the site to schedule a demo, causing delays, bottlenecks, and a higher risk of no-shows. Automating this process was crucial to improving efficiency and user experience.

**Technical Approach:**

- Created a **Google service account** with delegated domain-wide authority to manage the sales representative's Google Calendar securely.
- Upon form submission, the backend API implemented with **Next.js API routes** programmatically created a calendar event on the sales representative's calendar.
- The user's email, captured from the form input, was added as a **guest attendee** to the event, triggering automatic calendar invitations and reminders via Google Calendar.
- The event included relevant metadata, such as the **demo type and additional notes**, ensuring context was preserved for the sales team.
- Proper **OAuth scopes and service account credentials** were securely stored as environment variables, and all API calls were handled server-side to avoid exposing sensitive tokens.

**Benefits and Results:**

This approach eliminated the manual scheduling step, enabling leads to self-select available time slots directly on the marketing site. In one month, the integration contributed to a **33%+ increase in conversion rate**, attributed to faster scheduling and lower no-show rates.
