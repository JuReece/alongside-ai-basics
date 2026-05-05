import { mdToPdf } from 'md-to-pdf';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const sourcesDir = join(projectRoot, 'pdf-sources');
const outputDir = join(projectRoot, 'public', 'pdfs');

const files = [
  'ai-basics-cheat-sheet.md',
  'family-safety-guide.md',
  'homework-help-guide.md',
  'family-ai-agreement.md',
  'prompt-engineering-guide.md'
];

const cssPath = join(__dirname, 'pdf-style.css');

const pdfOptions = {
  dest: outputDir,
  pdf_options: {
    format: 'A4',
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    printBackground: true,
  },
  stylesheet: cssPath
};

async function generatePDFs() {
  console.log('🚀 Starting PDF generation...\n');

  // Ensure output directory exists
  try {
    await fs.mkdir(outputDir, { recursive: true });
    console.log('✓ Output directory ready\n');
  } catch (error) {
    console.error('Error creating output directory:', error);
    process.exit(1);
  }

  for (const file of files) {
    const inputPath = join(sourcesDir, file);
    const outputPath = join(outputDir, file.replace('.md', '.pdf'));

    try {
      console.log(`📄 Processing: ${file}`);

      await mdToPdf(
        { path: inputPath },
        {
          ...pdfOptions,
          dest: outputPath
        }
      );

      console.log(`✅ Created: ${file.replace('.md', '.pdf')}\n`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('🎉 PDF generation complete!');
}

generatePDFs().catch(console.error);
