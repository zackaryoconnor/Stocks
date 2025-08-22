# Stocks and News Dashboard

A modern, responsive web application for tracking stock prices and staying updated with the latest financial news. Built with React and TypeScript, powered by the Finnhub API.

<!--## Live Demo

**[View Live Site](#)** *(Add your deployment link here)*-->
<img width="2672" height="1527" alt="Screen Shot 2025-08-22 at 12 21 54 PM" src="https://github.com/user-attachments/assets/41600246-c73e-4133-8d8e-52a1246a4ecf" />

## About

This stock dashboard provides real-time stock information and financial news in a clean, user-friendly interface. Users can search for stocks, view current prices, and stay informed with the latest market news. The application leverages the Finnhub API to deliver accurate and up-to-date financial data.

## Features

- **Real-time Stock Data** - View current stock prices and market information
- **Financial News** - Stay updated with the latest market news and trends
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Type Safety** - Built with TypeScript for better code quality and developer experience
- **Modern UI** - Clean, intuitive interface for seamless user experience
<!-- - **Stock Search** - Search for specific stocks by symbol or company name-->

## Built With

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Finnhub API** - Real-time stock data and financial news
- **CSS** - Styling
- **Vite** - Build tool and development server

## Architecture

- **Frontend-only Application** - No backend required
- **API Integration** - Direct integration with Finnhub API
- **Component-based** - Modular React components for maintainability
- **Type-safe** - TypeScript interfaces for API responses and data structures

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
-  [Finnhub API key](https://finnhub.io/)

### Installation

1. Clone the repository
```bash
git clone https://github.com/zackaryoconnor/Stocks.git
cd Stocks
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Finnhub API key
```env
REACT_APP_FINNHUB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`


## API Integration

This application uses the [Finnhub API](https://finnhub.io/) to fetch:
- Real-time stock prices
- Company profiles
- Financial news
- Market data

<!--### API Endpoints Used
- Stock quotes: `/api/v1/quote`
- Company profiles: `/api/v1/stock/profile2`
- Market news: `/api/v1/news`
- Stock search: `/api/v1/search`-->

## Features in Detail

### Stock Search & Display
- View real-time price data
- Show price change and percentage change
<!-- - Search stocks by ticker symbol -->
<!-- - Display key metrics (open, high, low, close) -->

### Financial News
- Latest market news and updates
- Company-specific news
- Clean, readable news format
- External links to full articles

## Screenshots
Coming soon...

## Future Enhancements

- [ ] Search stocks by ticker symbol
- [ ] Display key metrics (open, high, low, close)
- [ ] Stock portfolio tracking
- [ ] Watchlist functionality
- [ ] Advanced filtering and sorting
- [ ] Backend integration for user accounts
- [ ] Dark/light theme toggle

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## API Rate Limits

Please note that the Finnhub API has rate limits:
- Free tier: 60 calls/minute
- Be mindful of API usage to avoid hitting limits

<!--## Known Issues

- API rate limiting may cause temporary loading delays
- Real-time data depends on market hours -->

## Contact

**Zackary O'Connor**
- Email: zackary25@gmail.com
- Portfolio: [zackaryoconnor.github.io/Portfolio](https://zackaryoconnor.github.io/Portfolio/)
- LinkedIn: [Connect with me](https://linkedin.com/in/zackaryoconnor)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Finnhub.io](https://finnhub.io/) for providing the stock data API
- React and TypeScript communities for excellent documentation
- All contributors and users of this project

---

⭐ **Star this repository if you found it helpful!**
