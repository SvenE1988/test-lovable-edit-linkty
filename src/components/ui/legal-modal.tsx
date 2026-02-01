import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';

interface LegalModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

/**
 * LegalModal - Reusable modal for legal content (Impressum, Datenschutz)
 */
export const LegalModal: React.FC<LegalModalProps> = ({ trigger, title, children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] bg-white p-0 gap-0 border-none shadow-2xl [&>button]:hidden">
        <DialogHeader className="sticky top-0 z-10 bg-brand-dark px-6 py-4 flex flex-row items-center justify-between rounded-t-lg">
          <DialogTitle className="text-xl font-bold text-white">{title}</DialogTitle>
          <button 
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Schließen"
            data-testid="modal-close-btn"
          >
            <X size={18} />
          </button>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(85vh-80px)] px-6 py-6">
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

// ============================================================
// IMPRESSUM CONTENT
// ============================================================
export const ImpressumContent: React.FC = () => (
  <div className="space-y-6 text-brand-dark">
    <section>
      <h2 className="text-lg font-bold mb-3">Angaben gemäß § 5 TMG</h2>
      <p className="leading-relaxed">
        <strong>Linkty</strong><br />
        Inh. Emir Corbo<br />
        Poststr.1<br />
        21224 Rosengarten<br />
        Deutschland
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">Kontakt</h2>
      <p className="leading-relaxed">
        E-Mail: <a href="mailto:info@linkty.ai" className="text-brand-cyan hover:underline">info@linkty.ai</a><br />
        Webseite: <a href="https://linkty.ai" className="text-brand-cyan hover:underline">linkty.ai</a><br />
        Telefon: <a href="tel:+494074302022" className="text-brand-cyan hover:underline">+49 40 74302022</a>
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">Umsatzsteuer-ID</h2>
      <p className="leading-relaxed">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        <strong>DE322893004</strong>
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">Redaktionell verantwortlich</h2>
      <p className="leading-relaxed">
        Emir Corbo<br />
        Poststr.1<br />
        21224 Rosengarten
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">EU-Streitschlichtung</h2>
      <p className="leading-relaxed">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a 
          href="https://ec.europa.eu/consumers/odr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-cyan hover:underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p className="leading-relaxed">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
        Verbraucherschlichtungsstelle teilzunehmen. Da sich unser Angebot ausschließlich 
        an Unternehmer (B2B) richtet, ist dies rechtlich zulässig.
      </p>
    </section>
  </div>
);

// ============================================================
// DATENSCHUTZ CONTENT
// ============================================================
export const DatenschutzContent: React.FC = () => (
  <div className="space-y-8 text-brand-dark">
    <p className="text-sm text-content-muted">Stand: Januar 2026</p>

    <section>
      <h2 className="text-lg font-bold mb-3">1. Verantwortlicher</h2>
      <p className="leading-relaxed">
        Verantwortlich für die Datenverarbeitung auf dieser Webseite und im Rahmen unserer Dienstleistungen ist:
      </p>
      <p className="leading-relaxed mt-2">
        <strong>Linkty</strong><br />
        Inh. Emir Corbo<br />
        Poststr.1<br />
        21224 Rosengarten<br />
        Deutschland<br />
        E-Mail: <a href="mailto:info@linkty.ai" className="text-brand-cyan hover:underline">info@linkty.ai</a><br />
        Webseite: <a href="https://linkty.ai" className="text-brand-cyan hover:underline">linkty.ai</a>
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">2. Allgemeines zur Datenverarbeitung</h2>
      <p className="leading-relaxed">
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur 
        Bereitstellung einer funktionsfähigen Webseite sowie unserer Inhalte und Leistungen erforderlich ist. 
        Die Verarbeitung erfolgt auf Basis der DSGVO sowie des BDSG.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">3. Bereitstellung der Webseite (Hosting)</h2>
      <p className="leading-relaxed">
        Unsere Webseite wird bei <strong>Netlify</strong> gehostet. Beim Aufruf der Webseite werden automatisch 
        Informationen durch Ihren Browser an den Server übermittelt (Logfiles), wie z.B. IP-Adresse, 
        Datum/Uhrzeit und Browsertyp. Dies ist technisch notwendig, um die Webseite anzuzeigen und 
        die Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">4. Nutzung unserer SaaS-Plattform (GoHighLevel)</h2>
      <p className="leading-relaxed">
        Wir nutzen für unser CRM und die Bereitstellung der Plattform die Software <strong>GoHighLevel</strong>.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Zweck:</strong> Verwaltung von Kundenkontakten, Terminen und Kommunikation.</li>
        <li><strong>Daten:</strong> Name, E-Mail, Telefonnummer, Kommunikationsverläufe.</li>
        <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).</li>
        <li><strong>Drittland:</strong> Daten können in den USA verarbeitet werden. Wir haben mit dem Anbieter einen AV-Vertrag inkl. Standardvertragsklauseln geschlossen.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">5. KI-Dienste & Telefonassistenten</h2>
      <p className="leading-relaxed">
        Für unsere KI-gestützten Dienste (Telefonassistenten & Content-KI) nutzen wir spezialisierte Schnittstellen (APIs).
      </p>
      
      <h3 className="text-base font-semibold mt-4 mb-2">5.1 Sprach-KI (Voice-Stack)</h3>
      <p className="leading-relaxed">Wir nutzen eine Kette von Anbietern zur Bereitstellung der Telefon-Bots:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Twilio</strong> (Telefonie-Infrastruktur)</li>
        <li><strong>Vapi</strong> (Orchestrierung)</li>
        <li><strong>Deepgram</strong> (Speech-to-Text)</li>
        <li><strong>OpenAI API</strong> (Intelligenz/LLM)</li>
        <li><strong>Cartesia</strong> (Text-zu-Sprach-Generierung)</li>
      </ul>
      
      <div className="bg-surface-muted p-4 rounded-lg mt-4">
        <p className="text-sm leading-relaxed">
          <strong>Hinweis zur Einwilligung:</strong> Um die Anforderungen des § 201 StGB zu erfüllen, 
          werden unsere Telefon-Bots standardmäßig so konfiguriert, dass sie Anrufer zu Beginn des 
          Gesprächs über die Verarbeitung durch KI informieren und deren Einwilligung einholen.
        </p>
      </div>
      
      <div className="bg-brand-mint/10 p-4 rounded-lg mt-4">
        <p className="text-sm leading-relaxed">
          <strong>Wichtiger Hinweis zum Datenschutz:</strong> Wir nutzen ausschließlich die <strong>API-Schnittstellen</strong> dieser Anbieter. 
          Gemäß den Richtlinien von OpenAI und Vapi werden Daten, die über die API übermittelt werden, 
          <strong> nicht</strong> zum Training der KI-Modelle verwendet.
        </p>
      </div>

      <h3 className="text-base font-semibold mt-4 mb-2">5.2 Content-KI & Datenbanken</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Google Gemini API:</strong> Wir nutzen den Google Cloud Business Account. Hier findet <strong>kein Training</strong> der Modelle mit Kundendaten statt.</li>
        <li><strong>Supabase:</strong> Nutzung als Datenbank zur Speicherung von Inhalten (Serverstandort i. d. R. EU/USA).</li>
        <li><strong>n8n:</strong> Unsere Automatisierungs-Logik hosten wir selbst auf Servern der <strong>Hetzner Online GmbH</strong> in Deutschland (Nürnberg).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">6. Kommunikation (WhatsApp & Newsletter)</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>WhatsApp:</strong> Sofern Sie mit uns via WhatsApp kommunizieren, erfolgt dies über die GHL-Integration. 
          Es gelten die Datenschutzhinweise von WhatsApp (Meta). Rechtsgrundlage ist Ihre Einwilligung oder unser 
          berechtigtes Interesse an effizienter Kommunikation (Art. 6 Abs. 1 lit. a/f DSGVO).
        </li>
        <li>
          <strong>Newsletter:</strong> Wenn Sie sich für unseren Newsletter anmelden, nutzen wir die GHL-interne Versandlogik. 
          Sie können sich jederzeit über den Abmelde-Link im Newsletter austragen.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">7. Kein Tracking & Analyse-Tools</h2>
      <p className="leading-relaxed">
        Wir verzichten auf unserer Webseite bewusst auf den Einsatz von Analyse-Tools wie Google Analytics 
        oder Werbe-Pixeln (z. B. Meta-Pixel). Es findet keine Verhaltensanalyse Ihrer Webseitenbesuche durch uns statt.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">8. Cookies</h2>
      <p className="leading-relaxed">
        Wir setzen lediglich technisch notwendige Cookies ein (z. B. für die Funktion von Formularen oder Kalenderbuchungen). 
        Da wir keine Marketing-Cookies nutzen, ist kein komplexer Cookie-Banner erforderlich. 
        Wir informieren Sie im Rahmen der Formulare über die notwendige Verarbeitung.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">9. Ihre Rechte</h2>
      <p className="leading-relaxed">
        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung oder Löschung (Art. 16/17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
      </ul>
      <p className="leading-relaxed mt-2">
        Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die 
        Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-bold mb-3">10. Datenlöschung</h2>
      <p className="leading-relaxed">
        Wir löschen Ihre Daten, sobald sie für die genannten Zwecke nicht mehr erforderlich sind. 
        Im Falle einer Vertragskündigung werden Ihre Daten nach Ablauf einer Frist von <strong>30 Tagen</strong> gelöscht, 
        sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
    </section>
  </div>
);

export default LegalModal;
