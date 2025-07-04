# IHK § 34a Akademie - Course Selling Website

A modern, responsive website for selling and delivering an online course for the IHK-Sachkundeprüfung § 34a GewO (German security industry examination). Built with React, TypeScript, Tailwind CSS, and Convex for backend functionality.

## 🚀 Features

- **Modern Landing Page**: Professional design with hero section, benefits, curriculum overview, and testimonials
- **PayPal Integration**: Secure payment processing with PayPal SDK
- **Demo Quiz**: Interactive quiz to showcase course content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **German Legal Compliance**: Includes Impressum, Datenschutz, AGB, and Widerrufsrecht
- **Backend Integration**: Convex for user management and payment processing
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Convex (serverless backend)
- **Payments**: PayPal SDK
- **Build Tool**: Vite
- **Language**: German (targeting German market)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd busBoyCourse
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   # PayPal Configuration
   VITE_PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id
   
   # Convex Configuration
   CONVEX_DEPLOYMENT=your_convex_deployment_name
   
   # Application Configuration
   VITE_APP_NAME=IHK § 34a Akademie
   VITE_APP_URL=https://localhost:5173
   VITE_SUPPORT_EMAIL=support@ihk-34a-akademie.de
   
   # Course Configuration
   VITE_COURSE_PRICE=97
   VITE_COURSE_ORIGINAL_PRICE=149
   ```

4. **Initialize Convex**:
   ```bash
   npx convex dev --configure
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### PayPal Setup

1. Create a PayPal Developer account at [developer.paypal.com](https://developer.paypal.com)
2. Create a new app in the PayPal Developer Dashboard
3. Copy the Client ID and add it to your `.env.local` file
4. For production, switch to live credentials

### Convex Setup

1. Sign up for Convex at [convex.dev](https://convex.dev)
2. Create a new project
3. Follow the setup instructions to get your deployment URL
4. The schema and functions are already configured in the `convex/` directory

## 📁 Project Structure

```
busBoyCourse/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx          # Landing page hero
│   │   ├── BenefitsSection.tsx      # Course benefits
│   │   ├── CurriculumSection.tsx    # Course curriculum
│   │   ├── TestimonialsSection.tsx  # Customer testimonials
│   │   ├── DemoQuiz.tsx             # Interactive demo quiz
│   │   ├── PaymentSection.tsx       # PayPal payment integration
│   │   ├── LegalPages.tsx           # German legal compliance pages
│   │   └── Footer.tsx               # Footer with legal links
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # App entry point
│   └── index.css                    # Global styles with Tailwind
├── convex/
│   ├── schema.ts                    # Database schema
│   ├── users.ts                     # User management functions
│   └── payments.ts                  # Payment processing functions
├── public/                          # Static assets
├── vite.config.ts                   # Vite configuration
└── tailwind.config.js               # Tailwind CSS configuration
```

## 🎯 Key Components

### Landing Page Sections

1. **Hero Section**: Eye-catching introduction with CTA
2. **Benefits Section**: Why choose this course
3. **Curriculum Section**: Detailed course content breakdown
4. **Demo Quiz**: Interactive sample questions
5. **Testimonials**: Social proof and statistics
6. **Footer**: Legal links and contact information

### Payment Flow

1. User clicks "Jetzt Kurs starten" (Start Course Now)
2. Modal opens with course details and pricing
3. User enters name and email
4. PayPal payment interface loads
5. Payment processing and user account creation
6. Success confirmation and course access

### Legal Compliance (German Market)

- **Impressum**: Company information (required by law)
- **Datenschutzerklärung**: Privacy policy (GDPR compliance)
- **AGB**: Terms and conditions
- **Widerrufsbelehrung**: Right of withdrawal (consumer protection)

## 🔐 Security Features

- SSL encryption for all transactions
- PayPal's secure payment processing
- GDPR compliant data handling
- Environment variable protection for sensitive data

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

## 🚦 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start Convex development
npx convex dev

# Deploy Convex functions
npx convex deploy
```

## 🌐 Production Deployment

1. **Frontend**: Deploy to Vercel, Netlify, or similar
2. **Backend**: Convex automatically handles scaling and deployment
3. **Domain**: Configure custom domain in your hosting provider
4. **SSL**: Enable HTTPS (required for PayPal and GDPR)

## 📊 Analytics & Monitoring

Consider integrating:
- Google Analytics for traffic tracking
- PayPal's transaction reporting
- Convex dashboard for backend monitoring

## 🎓 Course Content Structure

The course is structured around the IHK § 34a examination requirements:

1. **Recht der öffentlichen Sicherheit und Ordnung** (8 hours)
2. **Bürgerliches Gesetzbuch** (6 hours)
3. **Strafrecht** (7 hours)
4. **Umgang mit Menschen** (5 hours)
5. **Grundzüge der Sicherheitstechnik** (4 hours)

Total: 30 hours of learning material + 200+ practice questions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: support@ihk-34a-akademie.de
- Phone: +49 (0) 30 1234 5678

## 🚀 Future Enhancements

- User dashboard for course progress tracking
- Advanced quiz system with detailed analytics
- Email automation for course delivery
- Multi-language support
- Advanced payment options (Stripe, SEPA)
- Mobile app development
