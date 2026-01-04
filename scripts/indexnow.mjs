#!/usr/bin/env node

/**
 * IndexNow Script for ByAnisaPutri MUA
 * 
 * Submits URLs to Bing (and other search engines) via IndexNow protocol
 * for instant indexing after deployment.
 * 
 * Usage:
 *   bun run indexnow           # Submit all pages
 *   bun run indexnow --url /blog/new-article  # Submit specific URL
 */

const SITE_URL = 'https://byanisaputri.my.id';
const INDEXNOW_KEY = '47e1e1aca60808aff8652a7b48a44854';

// All pages on the site
const ALL_URLS = [
  '/',
  '/blog',
  '/blog/tren-makeup-pengantin-melayu-2026',
  '/blog/persiapan-kulit-sebelum-wedding',
  '/blog/harga-mua-pontianak-2026',
  '/blog/tips-memilih-mua-pontianak',
  '/blog/makeup-wisuda-tahan-lama',
  '/privacy-policy',
];

// Search engines that support IndexNow
const SEARCH_ENGINES = [
  'api.indexnow.org',      // Submits to all participating search engines
  // 'www.bing.com',       // Bing directly (optional, api.indexnow.org covers this)
  // 'yandex.com',         // Yandex directly (optional)
];

async function submitToIndexNow(urls) {
  const fullUrls = urls.map(url => `${SITE_URL}${url}`);
  
  console.log('🚀 Submitting URLs to IndexNow...\n');
  console.log('URLs to submit:');
  fullUrls.forEach(url => console.log(`  - ${url}`));
  console.log('');

  for (const searchEngine of SEARCH_ENGINES) {
    try {
      const response = await fetch(`https://${searchEngine}/indexnow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          host: 'byanisaputri.my.id',
          key: INDEXNOW_KEY,
          urlList: fullUrls,
        }),
      });

      if (response.ok || response.status === 202) {
        console.log(`✅ ${searchEngine}: Success (${response.status})`);
      } else {
        console.log(`❌ ${searchEngine}: Failed (${response.status}) - ${response.statusText}`);
      }
    } catch (error) {
      console.log(`❌ ${searchEngine}: Error - ${error.message}`);
    }
  }

  console.log('\n📝 Note: It may take a few minutes for search engines to process the submission.');
  console.log('   Check Bing Webmaster Tools for indexing status.');
}

async function submitSingleUrl(path) {
  const fullUrl = `${SITE_URL}${path}`;
  
  console.log(`🚀 Submitting single URL: ${fullUrl}\n`);

  for (const searchEngine of SEARCH_ENGINES) {
    try {
      const url = `https://${searchEngine}/indexnow?url=${encodeURIComponent(fullUrl)}&key=${INDEXNOW_KEY}`;
      const response = await fetch(url);

      if (response.ok || response.status === 202) {
        console.log(`✅ ${searchEngine}: Success (${response.status})`);
      } else {
        console.log(`❌ ${searchEngine}: Failed (${response.status})`);
      }
    } catch (error) {
      console.log(`❌ ${searchEngine}: Error - ${error.message}`);
    }
  }
}

// Main
const args = process.argv.slice(2);

if (args.includes('--url')) {
  const urlIndex = args.indexOf('--url');
  const specificUrl = args[urlIndex + 1];
  if (specificUrl) {
    submitSingleUrl(specificUrl);
  } else {
    console.error('❌ Please provide a URL path after --url');
    process.exit(1);
  }
} else if (args.includes('--help') || args.includes('-h')) {
  console.log(`
IndexNow Submission Script for ByAnisaPutri MUA

Usage:
  bun run indexnow              Submit all pages to IndexNow
  bun run indexnow --url /path  Submit a specific URL
  bun run indexnow --help       Show this help message

Examples:
  bun run indexnow
  bun run indexnow --url /blog/new-article
  bun run indexnow --url /
`);
} else {
  submitToIndexNow(ALL_URLS);
}
