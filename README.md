# Personal Portfolio

A modern, responsive portfolio website showcasing my work experience, projects, and professional journey. Built with Nuxt 4 for performance and clean user experience.

## 🌟 Features

- **Project Showcase**: Interactive gallery of my work and contributions
- **Professional Experience**: Detailed overview of my work history
- **Downloadable CV**: Access to my latest curriculum vitae
- **Responsive Design**: Seamless experience across all devices
- **Contact Form**: Direct way to reach out

## 🛠️ Tech Stack

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/PhilMataz/portfolio-nuxt
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```
   Visit `http://localhost:3000`

## 📝 Available Scripts

```bash
# Development
bun run dev         # Start development server

# Production
bun run build       # Build for production
bun run preview     # Preview production build

# Quality
bun run typecheck   # vue-tsc over the Nuxt project references
bun run lint        # oxlint
bun run fmt         # oxfmt (fmt:check runs in the pre-commit hook)
bun run test        # vitest
```

## 📦 Project Structure

```
├── app/
│   ├── app.vue
│   ├── assets/
│   │   ├── css/          # Global styles
│   │   └── images/
│   ├── components/CV/    # CV sections
│   ├── composables/      # useTranslated
│   ├── data/cv/          # CV Content, each fact once (see CONTEXT.md)
│   ├── pages/            # / and /cv
│   ├── types/            # CV types
│   └── utils/            # Period formatting
├── i18n/                 # Interface text per Locale
├── public/               # Static files
└── docs/adr/             # Architecture decisions
```

## 🌐 Locales

German is the default Locale: `/cv` renders German, `/en/cv` renders English.

## 🎨 Customization

Update the CV Content in `app/data/cv/` and the Interface text in `i18n/i18n.config.ts`.

## 🚀 Deployment

The site is ready for deployment on Vercel:

1. Connect your GitHub repository
2. Vercel will automatically detect the Nuxt configuration
3. Deploy!

## 📞 Contact

Let's connect:

- Email: hello@philmataz.dev
- LinkedIn: [Phillip Matambanadzo](www.linkedin.com/in/phillip-matambanadzo)
- GitHub: [@PhilMataz](https://github.com/PhilMataz/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
