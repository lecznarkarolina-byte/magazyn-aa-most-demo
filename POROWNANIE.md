# Aktualizacja demonstracji

Porównano repozytoria `magazyn-aa-most` i `magazyn-aa-most-demo` 19 listopada 2026 r.

| Obszar | Poprzednie demo | Zaktualizowane demo |
| --- | --- | --- |
| Wygląd | Starszy, uproszczony układ | Aktualny nagłówek, nawigacja, układ mobilny, jasny i ciemny motyw |
| Literatura | 112 pozycji starego katalogu | Zachowane pozycje i okładki; dodatkowo 3 przykłady kategorii Inne widocznej w obecnym kodzie magazynu |
| Sprzedaż | Lista wszystkich produktów, prosty koszyk | Obecny selektor i podgląd okładki, rezerwacje dla grup, częściowe wpłaty i należności |
| ZK | Brak | Oddzielna gotówka, przedpłata, należności, koszyk i historia wydań |
| BSK | Brak | Zamówienia, płatności i dostawy; lista zamówień dostępna do testowania |
| Wydarzenia | Brak | Planowanie, przydział, sprzedaż, rozliczenie i CSV |
| Statystyki | Podstawowe | Aktualne wykresy i przepływy pieniędzy |
| Sprawozdania i kontrola półek | Brak | Obecne formularze i eksporty z fikcyjnym bilansem |
| Kontakty | Brak | Dodawanie, edycja i usuwanie; fikcyjne numery nie inicjują połączeń |
| Kod do własnego użytku | Brak | Widoczna informacja, kopiowanie HTML, pobieranie HTML i pełnego ZIP |
| Instalacja | Brak | Manifest, ikony, instalacja MOST DEMO |

## Świadome różnice względem prywatnego magazynu

- Demo uruchamia się bez konta; formularz zmiany hasła jest ukryty, ponieważ nie ma prawdziwych kont.
- Wszystkie operacje wykonuje lokalny silnik demonstracyjny zamiast funkcji SQL Supabase. Nie jest to kopia prywatnej bazy ani audyt jej funkcji.
- Bilans, stany i historia są wygenerowane jako przykłady. Nie przeniesiono danych operacyjnych użytkowniczki.
- Dane każdego odwiedzającego pozostają w jego przeglądarce; można je przywrócić przyciskiem resetowania.
- Odczyty sieciowe aplikacji są ograniczone do własnej domeny. Zewnętrzne okładki są wyświetlane jako obrazy z BSK.
