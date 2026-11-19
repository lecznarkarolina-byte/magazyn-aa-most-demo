# Magazyn AA MOST — DEMO

Publiczna, interaktywna demonstracja magazynu literatury AA. Interfejs i formularze przeniesiono z aktualnej aplikacji `magazyn-aa-most` (wersja źródłowa z 19 listopada 2026, commit `42d279251a4665faf936f80c4dd8cb7c246e10c6`).

Demo nie korzysta z Supabase, nie zawiera adresu prywatnej bazy ani kluczy API i nie wymaga logowania. Stany, kwoty, transakcje, grupy, kontakty i wydarzenia są fikcyjne. Dane zapisują się wyłącznie w przeglądarce. Okładki są pobierane z witryny BSK.

## Co można przetestować

- Katalog z okładkami, kategorie, wyszukiwanie, stan fizyczny i rezerwacje, inwentaryzacja.
- Koszyki AA, sprzedaż z pełną lub częściową wpłatą, spłata należności.
- Oddzielny fundusz ZK: wpłaty, przedpłata, należności i wydawanie literatury.
- Zamówienia BSK: koszyk, potwierdzenie, płatność i przyjęcie dostawy.
- Wydarzenia: przydział, rozpoczęcie, sprzedaż, rozliczenie zwrotów, CSV.
- Statystyki, budżet, historia, sprawozdania, kontakty, eksport danych i motywy.

Przykłady na start obejmują dwie sprzedaże AA, niezapłaconą część sprzedaży, aktywną rezerwację, wydanie ZK, częściowo opłacone zamówienie BSK i dwa wydarzenia (trwające oraz planowane). „Przywróć dane demonstracyjne” odtwarza te przykłady. Własne zmiany odwiedzających nie są widoczne dla innych osób.

## Własna kopia i kod

Kod demonstracji można skopiować i dostosować do indywidualnego użytku. W aplikacji otwórz zakładkę **Kod aplikacji**:

1. **Kopiuj cały kod HTML** — kopiuje samodzielną demonstrację.
2. **Pobierz aplikację HTML** — zapisuje jeden plik do otwarcia w przeglądarce lub opublikowania na własnym hostingu.
3. **Pobierz pełny projekt ZIP** — pobiera również manifest instalacji, ikony i pozostałe pliki projektu.

`index.html` zawiera interfejs, lokalny silnik operacji oraz przykładowy katalog. `kod-aplikacji.html` jest samodzielną kopią HTML z dołączonymi ikonami i bez zależności od plików instalacyjnych. `catalog.json` to czytelna kopia przykładowego katalogu.

Lokalny zapis nie synchronizuje urządzeń. Usunięcie danych przeglądarki może usunąć zmiany, dlatego dostępny jest eksport JSON i CSV. Wspólny magazyn dla wielu osób wymaga własnego zaplecza, kont oraz uprawnień. Projekt nie zawiera schematu ani funkcji SQL prywatnej aplikacji.

Zgoda na indywidualne wykorzystanie kodu nie obejmuje praw do literatury, okładek i znaków AA. Okładki są wskazywane adresami witryny BSK, a nie rozpowszechniane jako pliki w tym projekcie.

## Publikacja

To statyczna strona bez procesu budowania. Opublikuj pliki z głównego katalogu na hostingu HTTPS. Manifest, ikony i service worker umożliwiają instalację jako **MOST DEMO**. Service worker nie zapisuje odpowiedzi bazy ani danych finansowych w cache.

## Testy

Testy lokalnych operacji i formularzy znajdują się w `tests/demo.cjs`. Do testów potrzebny jest Node.js 24 oraz `jsdom` (aplikacja w przeglądarce nie wymaga Node.js):

```sh
npm install --no-save --package-lock=false jsdom@31.0.1
node tests/demo.cjs
```

Testy sprawdzają m.in. rozliczenia, niedostępne ilości, powtórne żądania, wydarzenia, eksport, kopiowanie kodu, zapis po ponownym otwarciu oraz brak prywatnej konfiguracji. Są to testy symulowanego DOM i lokalnego silnika, bez rzeczywistych transakcji i bez testu instalacji na fizycznym telefonie.
