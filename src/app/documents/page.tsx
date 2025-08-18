import { DocumentLibrary } from "./_components/document-library";
import { documents } from "@/lib/data";

export default function DocumentsPage() {
  const publicDocs = documents.filter(d => d.type === 'public');
  const privateDocs = documents.filter(d => d.type === 'private');

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline">Document Library</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Access our official reports, statements, and other important documents.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <DocumentLibrary publicDocs={publicDocs} privateDocs={privateDocs} />
          </div>
        </div>
      </section>
    </div>
  );
}
