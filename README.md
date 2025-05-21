# SkyeMarvel Innovations

SkyeMarvel Innovations is a cutting-edge digital solutions company specializing in web development, brand identity design, mobile app development, and marketing design. This project is a Next.js-based website showcasing the company's services and providing a contact platform for potential clients.

## Features

- **Responsive Design**: Fully responsive layout for mobile and desktop devices.
- **Dynamic Animations**: Smooth animations powered by Framer Motion.
- **Contact Form**: Integrated contact form with email notifications using Nodemailer.
- **Email Templates**: Custom HTML email templates for notifications and auto-replies.
- **SEO Optimization**: Metadata and Open Graph tags for better search engine visibility.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone <repository-url>
cd skyemarvel-innovations
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-email-password
```

## Folder Structure

- `src/app`: Contains the main application logic, including API routes and pages.
- `src/components`: Reusable React components for the website.
- `src/template`: HTML templates for email notifications.
- `public`: Static assets like images and videos.
- `src/types`: TypeScript type definitions.

## Deployment

The easiest way to deploy this project is to use [Vercel](https://vercel.com/). Follow the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
