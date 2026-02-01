import { PageLayout } from "../components/layout";
import { Heading } from "../components/ui/heading";
import { Text } from "../components/ui/text";

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="global-wrapper max-w-4xl">
          <div className="mb-12 text-center">
            <Heading level={1} variant="display-medium" className="mb-4">
              Kontaktieren Sie uns.
            </Heading>
            <Text variant="body-large" className="opacity-80">
              Haben Sie Fragen zu unseren KI-Lösungen? Wir beraten Sie gerne persönlich.
            </Text>
          </div>

          <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-xl md:p-12">
            {/* Hier könnte das Formular eingebunden werden, falls es eine separate Komponente gibt */}
            {/* Fürs erste nutzen wir einen Platzhalter, der signalisiert, dass wir den Modal-Content hier spiegeln */}
            <div className="py-12 text-center">
              <Text className="mb-8">
                Unser Team ist bereit, Ihre Fragen zu beantworten. Nutzen Sie gerne unser
                Kontaktformular oder rufen Sie uns direkt an.
              </Text>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+49123456789"
                  className="rounded-full bg-brand-dark px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-dark/90"
                >
                  +49 123 456 789
                </a>
                <a
                  href="mailto:hallo@linkty.de"
                  className="rounded-full border border-brand-dark px-8 py-4 font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5"
                >
                  hallo@linkty.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
