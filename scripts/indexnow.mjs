#!/usr/bin/env node

const SITE_URL = 'https://byanisaputri.my.id';
const INDEXNOW_KEY = '47e1e1aca60808aff8652a7b48a44854';

const ALL_URLS = [
  '/',
  '/about',
  '/faq',
  '/blog',
  '/blog/makeup-tahan-lama-cuaca-panas',
  '/blog/makeup-sangjit-tionghoa',
  '/blog/makeup-syari-tanpa-cukur-alis',
  '/blog/makeup-dayak-modern',
  '/blog/venue-wedding-pontianak',
  '/blog/perbedaan-makeup-akad-resepsi',
  '/blog/tren-makeup-pengantin-melayu-2026',
  '/blog/persiapan-kulit-sebelum-wedding',
  '/blog/harga-mua-pontianak-2026',
  '/blog/tips-memilih-mua-pontianak',
  '/blog/makeup-wisuda-tahan-lama',
  '/privacy-policy',
];

async function submitToIndexNow(urls) {
  const fullUrls = urls.map(url => `${SITE_URL}${url}`);
  
  console.log('🚀 Submitting URLs to IndexNow...\n');
  console.log('URLs to submit:');
  fullUrls.forEach(url => console.log(`  - ${url}`));
  console.log('');

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'byanisaputri.my.id',
        key: INDEXNOW_KEY,
        urlList: fullUrls,
      }),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Success (${response.status})`);
      console.log('   → Bing, Yandex, Naver, Seznam will be notified\n');
    } else {
      console.log(`❌ IndexNow: Failed (${response.status})`);
    }
  } catch (error) {
    console.log(`❌ IndexNow: Error - ${error.message}`);
  }

  console.log('📝 Notes:');
  console.log('   - Google: Uses sitemap from Search Console (no instant API)');
  console.log('   - LLMs: Uses llms.txt and robots.txt (crawl-based)');
  console.log('\n✨ Done!');
}

async function submitSingleUrl(path) {
  const fullUrl = `${SITE_URL}${path}`;
  
  console.log(`🚀 Submitting: ${fullUrl}\n`);

  try {
    const url = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(fullUrl)}&key=${INDEXNOW_KEY}`;
    const response = await fetch(url);

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Success (${response.status})`);
    } else {
      console.log(`❌ IndexNow: Failed (${response.status})`);
    }
  } catch (error) {
    console.log(`❌ IndexNow: Error - ${error.message}`);
  }
}

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
IndexNow Submission Script

Instantly notifies search engines about new/updated content:
  ✓ Bing, Yandex, Naver, Seznam (via IndexNow)
  ✗ Google (no instant API - uses sitemap from Search Console)

Usage:
  bun run indexnow              Submit all pages
  bun run indexnow --url /path  Submit specific URL

Examples:
  bun run indexnow
  bun run indexnow --url /blog/artikel-baru
`);
} else {
  submitToIndexNow(ALL_URLS);
}
