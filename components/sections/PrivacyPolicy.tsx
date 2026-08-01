import { contactParts } from "@/data/content";

export const PrivacyPolicy = () => {
  const email = `${contactParts.emailUser}@${contactParts.emailDomain}`;
  const phone = contactParts.phoneParts.join("");

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="prose prose-neutral max-w-none">
        <h1>Polityka prywatności</h1>

        <p className="text-sm text-gray-500">
          Obowiązuje od: 01.08.2026 r.
        </p>

        <h2>1. Administrator danych osobowych</h2>

        <p>
          Administratorem danych osobowych jest:
        </p>

        <p>
          <strong>HYDRO-KOP HUBERT GOSZCZYŃSKI</strong>
          <br />
          Adres: Słoneczna 48, 27-230 Dziurów
          <br />
          NIP: 6642141828
          <br />
          E-mail: {email}
          <br />
          Telefon: {phone}
        </p>

        <p>
          W sprawach dotyczących przetwarzania danych osobowych możesz
          skontaktować się z Administratorem za pośrednictwem wskazanego
          adresu e-mail.
        </p>

        <h2>2. Zakres przetwarzanych danych</h2>

        <p>
          Za pośrednictwem formularza kontaktowego przetwarzamy następujące dane osobowe:
        </p>

        <ul>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu,</li>
          <li>lokalizację inwestycji,</li>
          <li>treść wiadomości.</li>
        </ul>

        <p>
          Podanie danych jest dobrowolne, jednak niezbędne do udzielenia
          odpowiedzi na przesłane zapytanie.
        </p>

        <h2>3. Cel i podstawa przetwarzania danych</h2>

        <p>Dane osobowe są przetwarzane w następujących celach:</p>

        <ul>
          <li>udzielenia odpowiedzi na zapytanie,</li>
          <li>przygotowania wyceny lub oferty,</li>
          <li>podjęcia działań przed zawarciem umowy,</li>
          <li>realizacji obowiązków wynikających z przepisów prawa.</li>
        </ul>

        <p>Podstawą prawną przetwarzania danych jest:</p>

        <ul>
          <li>
            art. 6 ust. 1 lit. b RODO – podjęcie działań przed zawarciem umowy,
          </li>
          <li>
            art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
            Administratora polegający na prowadzeniu korespondencji.
          </li>
        </ul>

        <h2>4. Odbiorcy danych</h2>

        <p>Dane mogą zostać przekazane:</p>

        <ul>
          <li>dostawcy hostingu,</li>
          <li>dostawcy usługi wysyłki wiadomości e-mail (Resend),</li>
          <li>podmiotom świadczącym usługi informatyczne.</li>
        </ul>

        <p>
          W związku z korzystaniem z usługi wysyłki wiadomości e-mail Resend dane mogą
          być przekazywane do państw spoza Europejskiego Obszaru Gospodarczego, w tym
          do Stanów Zjednoczonych. W takich przypadkach przekazanie odbywa się na
          podstawie standardowych klauzul umownych (Standard Contractual Clauses)
          zatwierdzonych przez Komisję Europejską lub innych mechanizmów zapewniających
          odpowiedni poziom ochrony danych zgodnie z przepisami RODO.
        </p>

        <p>
          Dane mogą zostać udostępnione również organom publicznym, jeżeli
          obowiązek taki wynika z przepisów prawa.
        </p>

        <h2>5. Okres przechowywania danych</h2>

        <p>
          Dane osobowe będą przechowywane przez okres niezbędny do prowadzenia
          korespondencji i udzielenia odpowiedzi na przesłane zapytanie.
        </p>

        <p>
          Po zakończeniu korespondencji dane mogą być przechowywane przez okres
          niezbędny do dochodzenia lub obrony przed ewentualnymi roszczeniami, zgodnie
          z obowiązującymi przepisami prawa.
        </p>

        <h2>6. Prawa użytkownika</h2>

        <p>Masz prawo do:</p>

        <ul>
          <li>dostępu do swoich danych,</li>
          <li>ich sprostowania,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </li>
        </ul>

        <h2>7. Dobrowolność podania danych</h2>

        <p>
          Podanie danych jest dobrowolne, jednak ich brak może uniemożliwić
          udzielenie odpowiedzi na przesłane zapytanie lub przygotowanie oferty.
        </p>

        <h2>8. Pliki cookies</h2>
        <p>
          Serwis wykorzystuje pliki cookies niezbędne do prawidłowego działania strony.
          Nie służą one do profilowania użytkowników ani prowadzenia działań
          marketingowych.
        </p>

        <p>
          Na stronie została osadzona mapa OpenStreetMap. Korzystanie z mapy może
          powodować nawiązywanie połączenia z serwerami OpenStreetMap Foundation, która
          może przetwarzać dane techniczne użytkownika (np. adres IP) oraz
          wykorzystywać własne pliki cookies zgodnie ze swoją polityką prywatności.
        </p>

        <p>
          Więcej informacji znajduje się w{" "}
          <a
            href="https://osmfoundation.org/wiki/Privacy_Policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polityce Prywatności OpenStreetMap Foundation
          </a>.
        </p>

        <p>
          W przypadku wdrożenia narzędzi analitycznych lub marketingowych niniejsza
          Polityka prywatności zostanie odpowiednio zaktualizowana.
        </p>

        <h2>9. Bezpieczeństwo danych</h2>

        <p>
          Administrator stosuje odpowiednie środki techniczne i organizacyjne
          mające na celu zapewnienie bezpieczeństwa danych osobowych oraz ochronę przed
          ich utratą, nieuprawnionym dostępem, ujawnieniem lub zniszczeniem.
        </p>

        <h2>10. Zautomatyzowane podejmowanie decyzji</h2>

        <p>
          Dane osobowe nie są wykorzystywane do zautomatyzowanego podejmowania decyzji,
          w tym profilowania, o którym mowa w art. 22 RODO.
        </p>

        <h2>11. Zmiany polityki prywatności</h2>

        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
          Polityce prywatności. Aktualna wersja dokumentu jest zawsze dostępna
          na tej stronie.
        </p>
      </div>
    </section>
  );
};