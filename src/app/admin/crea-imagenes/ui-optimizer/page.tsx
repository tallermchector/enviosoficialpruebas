// src/app/admin/crea-imagenes/ui-optimizer/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { AdminHeader } from "@/components/layout/AdminHeader";
import { Footer } from "@/components/homenew/footer";
import { UiOptimizerClientPage } from "@/components/admin/crea-imagenes/ui-optimizer/UiOptimizerClientPage";
import type { PageStructure } from "@/components/admin/crea-imagenes/ui-optimizer/FileSelector";

async function getProjectStructure(): Promise<PageStructure[]> {
  const filePath = path.join(process.cwd(), 'src', 'context', 'project_structure.json');
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Failed to read project structure:", error);
    return [];
  }
}

export default async function UiOptimizerPage() {
  const projectStructure = await getProjectStructure();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <UiOptimizerClientPage projectStructure={projectStructure} />
      </main>
      <Footer />
    </div>
  );
}
