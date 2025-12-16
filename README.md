# Tyler Schwenk Technical LLC - Website

Professional business website for Tyler Schwenk Technical LLC, showcasing full-stack software development services with a focus on bioacoustics, machine learning, and wildlife conservation technology.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **SEO Optimized**: Proper metadata and semantic HTML for better search visibility
- **Performance**: Static site generation for lightning-fast load times
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic structure

## 📋 Project Structure

```
TylerSchwenkTechnical/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # About section with skills
│   ├── Projects.tsx          # Featured projects showcase
│   ├── Contact.tsx           # Contact information and services
│   └── Footer.tsx            # Footer with social links
├── .github/
│   └── copilot-instructions.md  # Development guidelines
├── public/                   # Static assets
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Heroicons (SVG)
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/TylerSchwenkTechnical.git
   cd TylerSchwenkTechnical
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Update Contact Information

Edit [components/Contact.tsx](components/Contact.tsx) to update:
- Email address
- GitHub profile URL
- LinkedIn profile URL

### Modify Projects

Edit [components/Projects.tsx](components/Projects.tsx) to add/remove projects. Each project includes:
- Title and organization
- Period and duration
- Description (array of accomplishments)
- Technologies used
- Project type/role

### Change Color Scheme

Modify [tailwind.config.ts](tailwind.config.ts) to customize the color palette. Current primary colors are based on blue shades.

### Update Metadata

Edit [app/layout.tsx](app/layout.tsx) to change:
- Page title
- Meta description
- Keywords for SEO

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Deploy to Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all files
- Follow Next.js App Router conventions
- Use Tailwind CSS utility classes for styling
- Maintain component modularity
- Keep components in the `components/` directory
- Use semantic HTML elements

### Best Practices

- All images should be optimized and use Next.js `<Image>` component
- Use proper TypeScript types for all props and functions
- Follow accessibility guidelines (WCAG 2.1)
- Test responsive design on multiple devices
- Keep bundle size small by avoiding unnecessary dependencies

## 🔧 Configuration Files

- **next.config.js**: Next.js framework configuration
- **tsconfig.json**: TypeScript compiler options
- **tailwind.config.ts**: Tailwind CSS theme customization
- **postcss.config.js**: PostCSS plugins (Tailwind + Autoprefixer)
- **.eslintrc.json**: ESLint rules for code quality

## 📄 License

© 2024 Tyler Schwenk Technical LLC. All rights reserved.

## 🤝 Contact

For inquiries about software development services:

- **Email**: tylerschwenktechnical@gmail.com
- **GitHub**: [github.com/tyler-schwenk](https://github.com/tyler-schwenk)
- **LinkedIn**: [linkedin.com/in/tyler-schwenk-939570224](https://www.linkedin.com/in/tyler-schwenk-939570224/)

---

Built with ❤️ using Next.js and TypeScript
