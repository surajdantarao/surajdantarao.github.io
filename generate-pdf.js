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
    const distPdfPath = path.join(__dirname, 'dist', 'resume.pdf');
    const artifactPdfPath = 'C:\\Users\\suraj\\.gemini\\antigravity\\brain\\ef34d608-ae38-41ff-874c-4190a11cb0c7\\Suraj_Dantarao_Resume.pdf';

    console.log('Launching browser using Edge executable...');
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

    console.log('Rendering PDF...');
    await page.pdf({
      path: publicPdfPath,
      format: 'Letter',
      printBackground: true,
      margin: { top: '0.4in', right: '0.45in', bottom: '0.4in', left: '0.45in' }
    });

    await browser.close();

    // Copy to dist and artifact folders
    if (!fs.existsSync(path.join(__dirname, 'dist'))) {
      fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
    }
    fs.copyFileSync(publicPdfPath, distPdfPath);
    fs.copyFileSync(publicPdfPath, artifactPdfPath);

    console.log('PDF generated successfully at:', publicPdfPath);
  } catch (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
})();
