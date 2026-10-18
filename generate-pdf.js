import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const htmlPath = path.join(__dirname, 'resume.html');
    const publicPdfPath = path.join(__dirname, 'public', 'resume.pdf');
    const publicNamedPdfPath = path.join(__dirname, 'public', 'Suraj_Dantarao_Resume.pdf');
    const distPdfPath = path.join(__dirname, 'dist', 'resume.pdf');
    const distNamedPdfPath = path.join(__dirname, 'dist', 'Suraj_Dantarao_Resume.pdf');
    const rootPdfPath = path.join(__dirname, 'Suraj_Dantarao_Resume.pdf');
    const artifactPdfPath = 'C:\\Users\\suraj\\.gemini\\antigravity\\brain\\39d1c8a0-6ba0-4b57-91b4-8952e96ecf72\\Suraj_Dantarao_Resume.pdf';
    const previewPngPath = path.join(__dirname, 'public', 'resume_preview.png');
    const artifactPreviewPath = 'C:\\Users\\suraj\\.gemini\\antigravity\\brain\\39d1c8a0-6ba0-4b57-91b4-8952e96ecf72\\resume_preview.png';

    console.log('Launching browser using Edge executable...');
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log('Document body scrollHeight:', scrollHeight);

    console.log('Rendering PDF...');
    await page.pdf({
      path: publicPdfPath,
      format: 'Letter',
      printBackground: true,
      margin: { top: '0.22in', right: '0.34in', bottom: '0.20in', left: '0.34in' }
    });

    // Verify it is strictly 1 page
    try {
      await page.pdf({
        pageRanges: '2',
        format: 'Letter',
        margin: { top: '0.22in', right: '0.34in', bottom: '0.20in', left: '0.34in' }
      });
      console.warn('WARNING: Spilled into page 2!');
    } catch (err) {
      console.log('Confirmed: Strictly 1 page (page 2 does not exist).');
    }

    // High resolution preview screenshot of the full rendered page
    await page.setViewport({ width: 850, height: 1100, deviceScaleFactor: 2 });
    await page.screenshot({ path: previewPngPath, fullPage: false });

    await browser.close();

    // Copy to all required locations
    if (!fs.existsSync(path.join(__dirname, 'dist'))) {
      fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
    }
    const artifactDir = path.dirname(artifactPdfPath);
    if (!fs.existsSync(artifactDir)) {
      fs.mkdirSync(artifactDir, { recursive: true });
    }

    fs.copyFileSync(publicPdfPath, publicNamedPdfPath);
    fs.copyFileSync(publicPdfPath, distPdfPath);
    fs.copyFileSync(publicPdfPath, distNamedPdfPath);
    fs.copyFileSync(publicPdfPath, rootPdfPath);
    fs.copyFileSync(publicPdfPath, artifactPdfPath);
    fs.copyFileSync(previewPngPath, artifactPreviewPath);

    // Clean up temporary test files if they exist
    const testHtml = path.join(__dirname, 'resume_test.html');
    const testJs = path.join(__dirname, 'test-resume.js');
    if (fs.existsSync(testHtml)) fs.unlinkSync(testHtml);
    if (fs.existsSync(testJs)) fs.unlinkSync(testJs);

    console.log('PDF and preview generated and synchronized successfully across all locations!');
  } catch (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
})();
